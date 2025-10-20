import { setupLocale } from "survey-creator-core";

export var indonesianStrings = {
  // survey templates
  survey: {
    // "Edit"
    edit: "Ubah",
    // "Watch and learn how to create surveys"
    externalHelpLink: "Tonton dan pelajari cara membuat survei",
    // "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber"
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    // "Please drop a question here from the Toolbox."
    dropQuestion: "Silahkan letakkan pertanyaan di sini dari Kotak Perkakas di sebelah kiri.",
    // [Auto-translated] "Create a rule to customize the flow of the survey."
    addLogicItem: "Buat aturan untuk menyesuaikan alur survei.",
    // "Copy"
    copy: "Salin",
    // [Auto-translated] "Duplicate"
    duplicate: "Duplikat",
    // "Add to toolbox"
    addToToolbox: "Tambahkan ke Kotak Perkakas",
    // "Delete Panel"
    deletePanel: "Hapus Panel",
    // "Delete Question"
    deleteQuestion: "Hapus Pertanyaan",
    // "Convert to"
    convertTo: "Mengubah ke",
    // "Drag element"
    drag: "Tarik elemen"
  },
  // Creator tabs
  tabs: {
    // "Preview"
    preview: "Coba Survei",
    // "Themes"
    theme: "Tema",
    // "Translations"
    translation: "Terjemahan",
    // "Designer"
    designer: "Rancangan Survei",
    // "JSON Editor"
    json: "Pengubah JSON",
    // [Auto-translated] "Logic"
    logic: "Logika"
  },
  // Question types
  qt: {
    // "Default"
    default: "Default",
    // "Checkboxes"
    checkbox: "Kotak Centang",
    // "Long Text"
    comment: "Komentar",
    // "Image Picker"
    imagepicker: "Gambar",
    // [Auto-translated] "Ranking"
    ranking: "Peringkat",
    // [Auto-translated] "Image"
    image: "Citra",
    // "Dropdown"
    dropdown: "Kotak Kombo",
    // [Auto-translated] "Multi-Select Dropdown"
    tagbox: "Dropdown Multi-Pilih",
    // "File Upload"
    file: "Berkas",
    // "HTML"
    html: "Html",
    // "Single-Select Matrix"
    matrix: "Matriks (pilihan tunggal)",
    // "Multi-Select Matrix"
    matrixdropdown: "Matriks (pilihan ganda)",
    // "Dynamic Matrix"
    matrixdynamic: "Matriks (baris dinamis)",
    // "Multiple Textboxes"
    multipletext: "Teks Ganda",
    // "Panel"
    panel: "Panel",
    // "Dynamic Panel"
    paneldynamic: "Panel (panel dinamis)",
    // "Radio Button Group"
    radiogroup: "Pilihan Ganda",
    // "Rating Scale"
    rating: "Peringkat",
    // [Auto-translated] "Slider"
    slider: "Slider",
    // "Single-Line Input"
    text: "Input Tunggal",
    // "Yes/No (Boolean)"
    boolean: "Yes/No (Boolean)",
    // "Expression (read-only)"
    expression: "Ekspresi (dibaca saja)",
    // [Auto-translated] "Signature"
    signaturepad: "Tanda tangan",
    // [Auto-translated] "Button Group"
    buttongroup: "Grup Tombol"
  },
  toolboxCategories: {
    // "General"
    general: "Umum",
    // "Choice Questions"
    choice: "Pertanyaan Pilihan",
    // "Text Input Questions"
    text: "Pertanyaan Input Teks",
    // "Containers"
    containers: "Wadah",
    // "Matrix Questions"
    matrix: "Pertanyaan Matriks",
    // "Misc"
    misc: "Misc"
  },
  // Strings in SurveyJS Creator
  ed: {
    // "Default ({0})"
    defaultLocale: "Default ({0})",
    // "Survey"
    survey: "Survei",
    // "Settings"
    settings: "Pengaturan Survei",
    // [Auto-translated] "Open settings"
    settingsTooltip: "Buka pengaturan",
    // [Auto-translated] "Survey Settings"
    surveySettings: "Pengaturan Survei",
    // [Auto-translated] "Survey settings"
    surveySettingsTooltip: "Setelan survei",
    // [Auto-translated] "Theme Settings"
    themeSettings: "Pengaturan Tema",
    // [Auto-translated] "Theme settings"
    themeSettingsTooltip: "Pengaturan tema",
    // [Auto-translated] "Creator Settings"
    creatorSettingTitle: "Pengaturan Kreator",
    // [Auto-translated] "Show Panel"
    showPanel: "Tampilkan Panel",
    // [Auto-translated] "Hide Panel"
    hidePanel: "Sembunyikan Panel",
    // [Auto-translated] "Select previous"
    prevSelected: "Pilih sebelumnya",
    // [Auto-translated] "Select next"
    nextSelected: "Pilih selanjutnya",
    // [Auto-translated] "Focus previous"
    prevFocus: "Fokus sebelumnya",
    // [Auto-translated] "Focus next"
    nextFocus: "Fokus berikutnya",
    // [Auto-translated] "Survey"
    surveyTypeName: "Survei",
    // [Auto-translated] "Page"
    pageTypeName: "Halaman",
    // [Auto-translated] "Panel"
    panelTypeName: "Panel",
    // [Auto-translated] "Question"
    questionTypeName: "Pertanyaan",
    // [Auto-translated] "Column"
    columnTypeName: "Kolom",
    // "Add New Page"
    addNewPage: "Tambah Halaman Baru",
    // "Scroll to the Right"
    moveRight: "Geser ke Kanan",
    // "Scroll to the Left"
    moveLeft: "Geser ke Kiri",
    // "Delete Page"
    deletePage: "Hapus Halaman",
    // "Edit Page"
    editPage: "Ubah Halaman",
    // "Edit"
    edit: "Ubah",
    // "page"
    newPageName: "halaman",
    // "question"
    newQuestionName: "pertanyaan",
    // "panel"
    newPanelName: "panel",
    // [Auto-translated] "text"
    newTextItemName: "Teks",
    // [Auto-translated] "Default"
    defaultV2Theme: "Default",
    // [Auto-translated] "Modern"
    modernTheme: "Modern",
    // [Auto-translated] "Default (legacy)"
    defaultTheme: "Default (warisan)",
    // "Preview Survey Again"
    testSurveyAgain: "Coba Survei Lagi",
    // "Survey width: "
    testSurveyWidth: "Lebar survei: ",
    // [Auto-translated] "You had to navigate to"
    navigateToMsg: "Anda harus menavigasi ke",
    // "Save Survey"
    saveSurvey: "Simpan Survei",
    // [Auto-translated] "Save Survey"
    saveSurveyTooltip: "Simpan Survei",
    // [Auto-translated] "Save Theme"
    saveTheme: "Simpan Tema",
    // [Auto-translated] "Save Theme"
    saveThemeTooltip: "Simpan Tema",
    // [Auto-translated] "Hide errors"
    jsonHideErrors: "Menyembunyikan kesalahan",
    // [Auto-translated] "Show errors"
    jsonShowErrors: "Tampilkan kesalahan",
    // "Undo"
    undo: "Urungkan",
    // "Redo"
    redo: "Ulangi",
    // [Auto-translated] "Undo last change"
    undoTooltip: "Mengurungkan perubahan terakhir",
    // [Auto-translated] "Redo the change"
    redoTooltip: "Mengulangi perubahan",
    // [Auto-translated] "Expand"
    expandTooltip: "Memperluas",
    // [Auto-translated] "Collapse"
    collapseTooltip: "Roboh",
    // "Expand All"
    expandAllTooltip: "Perluas Semua",
    // "Collapse All"
    collapseAllTooltip: "Ciutkan Semua",
    // [Auto-translated] "Zoom In"
    zoomInTooltip: "Perbesar",
    // [Auto-translated] "Zoom to 100%"
    zoom100Tooltip: "Perbesar hingga 100%",
    // [Auto-translated] "Zoom Out"
    zoomOutTooltip: "Perkecil",
    // [Auto-translated] "Lock expand/collapse state for questions"
    lockQuestionsTooltip: "Kunci status perluasan/ciutkan untuk pertanyaan",
    // [Auto-translated] "Show more"
    showMoreChoices: "Tampilkan lebih banyak",
    // [Auto-translated] "Show less"
    showLessChoices: "Tampilkan lebih sedikit",
    // [Auto-translated] "Copy"
    copy: "Menyalin",
    // [Auto-translated] "Cut"
    cut: "Memotong",
    // [Auto-translated] "Paste"
    paste: "Pasta",
    // [Auto-translated] "Copy selection to clipboard"
    copyTooltip: "Salin pilihan ke clipboard",
    // [Auto-translated] "Cut selection to clipboard"
    cutTooltip: "Memotong pilihan ke clipboard",
    // [Auto-translated] "Paste from clipboard"
    pasteTooltip: "Tempel dari papan klip",
    // "Options"
    options: "Pilihan",
    // "Generate Valid JSON"
    generateValidJSON: "Hasilkan JSON yang Valid",
    // "Generate Readable JSON"
    generateReadableJSON: "Hasilkan JSON yang dapat dibaca",
    // "Toolbox"
    toolbox: "Kotak Perkakas",
    // [Auto-translated] "Properties"
    "property-grid": "Properti",
    // [Auto-translated] "Search"
    toolboxSearch: "Mencari",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Ketik untuk mencari...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Tidak ada hasil yang ditemukan",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Ketik untuk mencari...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Tidak ada hasil yang ditemukan",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Mulai mengonfigurasi formulir Anda",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klik ikon kategori apa pun untuk menjelajahi pengaturan survei. Pengaturan tambahan akan tersedia setelah Anda menambahkan elemen survei ke permukaan desain.",
    // "Please correct JSON."
    correctJSON: "Please correct JSON.",
    // "Survey Results "
    surveyResults: "Hasil survei: ",
    // "As Table"
    surveyResultsTable: "Sebagai tabel",
    // "As JSON"
    surveyResultsJson: "Sebagai JSON",
    // "Question Title"
    resultsTitle: "Judul Pertanyaan",
    // "Question Name"
    resultsName: "Nama Pertanyaan",
    // "Answer Value"
    resultsValue: "Nilai Jawaban",
    // "Display Value"
    resultsDisplayValue: "Tampilkan Nilai",
    // "Modified"
    modified: "Dimodifikasi",
    // "Saving"
    saving: "Menyimpan",
    // "Saved"
    saved: "Tersimpan",
    // [Auto-translated] "Error"
    propertyEditorError: "Kesalahan",
    // "Error! Editor content is not saved."
    saveError: "Error! Konten editor tidak berhasil disimpan.",
    // [Auto-translated] "Language Settings"
    translationPropertyGridTitle: "Pengaturan Bahasa",
    // [Auto-translated] "Theme Settings"
    themePropertyGridTitle: "Pengaturan Tema",
    // [Auto-translated] "Add Language"
    addLanguageTooltip: "Tambahkan Bahasa",
    // [Auto-translated] "Languages"
    translationLanguages: "Bahasa",
    // [Auto-translated] "Are you certain you wish to delete all strings for this language?"
    translationDeleteLanguage: "Apakah Anda yakin ingin menghapus semua string untuk bahasa ini?",
    // "Select language to translate"
    translationAddLanguage: "Pilih bahasa untuk terjemahan",
    // "All Strings"
    translationShowAllStrings: "Tampilkan seluruh string",
    // [Auto-translated] "Used Strings Only"
    translationShowUsedStringsOnly: "Hanya String yang Digunakan",
    // "All Pages"
    translationShowAllPages: "Tampilkan seluruh halaman",
    // "No strings to translate. Please change the filter."
    translationNoStrings: "Tidak ada string diterjemahkan. Silahkan ganti penyaring.",
    // "Export to CSV"
    translationExportToSCVButton: "Eksport ke CSV",
    // "Import from CSV"
    translationImportFromSCVButton: "Import dari CSV",
    // [Auto-translated] "Auto-translate All"
    translateUsigAI: "Terjemahkan otomatis Semua",
    // [Auto-translated] "Translate from: "
    translateUsigAIFrom: "Terjemahkan dari: ",
    // [Auto-translated] "Untranslated strings"
    translationDialogTitle: "String yang tidak diterjemahkan",
    // "Merge {0} with default locale"
    translationMergeLocaleWithDefault: "Gabungkan {0} dengan default locale",
    // [Auto-translated] "Translation..."
    translationPlaceHolder: "Terjemahan...",
    // [Auto-translated] "Source: "
    translationSource: "Sumber: ",
    // [Auto-translated] "Target: "
    translationTarget: "Target: ",
    // [Auto-translated] "YouTube links are not supported."
    translationYouTubeNotSupported: "Tautan YouTube tidak didukung.",
    // [Auto-translated] "Export"
    themeExportButton: "Ekspor",
    // [Auto-translated] "Import"
    themeImportButton: "Mengimpor",
    // [Auto-translated] "Export"
    surveyJsonExportButton: "Ekspor",
    // [Auto-translated] "Import"
    surveyJsonImportButton: "Mengimpor",
    // [Auto-translated] "Copy to clipboard"
    surveyJsonCopyButton: "Salin ke papan klip",
    // [Auto-translated] "Reset theme settings to default"
    themeResetButton: "Setel ulang pengaturan tema ke default",
    // [Auto-translated] "Do you really want to reset the theme? All your customizations will be lost."
    themeResetConfirmation: "Apakah Anda benar-benar ingin mengatur ulang tema? Semua penyesuaian Anda akan hilang.",
    // [Auto-translated] "Yes, reset the theme"
    themeResetConfirmationOk: "Ya, atur ulang tema",
    // "Bold"
    bold: "Tebal",
    // "Italic"
    italic: "Miring",
    // "Underline"
    underline: "Garis Bawah",
    // "Add Question"
    addNewQuestion: "Tambah pertanyaan",
    // [Auto-translated] "Select page..."
    selectPage: "Pilih halaman...",
    // [Auto-translated] "Choices are copied from"
    carryForwardChoicesCopied: "Pilihan disalin dari",
    // [Auto-translated] "Choices are loaded from a web service."
    choicesLoadedFromWebText: "Pilihan dimuat dari layanan web.",
    // [Auto-translated] "Go to settings"
    choicesLoadedFromWebLinkText: "Buka pengaturan",
    // [Auto-translated] "Preview of loaded choice options"
    choicesLoadedFromWebPreviewTitle: "Pratinjau opsi pilihan yang dimuat",
    // [Auto-translated] "HTML content will be here."
    htmlPlaceHolder: "Konten HTML akan ada di sini.",
    // [Auto-translated] "Drop a question from the toolbox here."
    panelPlaceHolder: "Jatuhkan pertanyaan dari kotak alat di sini.",
    // [Auto-translated] "The survey is empty. Drag an element from the toolbox or click the button below."
    surveyPlaceHolder: "Survei kosong. Seret elemen dari kotak alat atau klik tombol di bawah.",
    // [Auto-translated] "The page is empty. Drag an element from the toolbox or click the button below."
    pagePlaceHolder: "Halaman kosong. Seret elemen dari kotak alat atau klik tombol di bawah.",
    // [Auto-translated] "Drag and drop an image here or click the button below and choose an image to upload"
    imagePlaceHolder: "Seret dan lepas gambar di sini atau klik tombol di bawah ini dan pilih gambar untuk diunggah",
    // "Click the \"Add Question\" button below to start creating your form."
    surveyPlaceHolderMobile: "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk mulai membuat formulir Anda.",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitle: "Formulir Anda kosong",
    // [Auto-translated] "Your form is empty"
    surveyPlaceholderTitleMobile: "Formulir Anda kosong",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescription: "Seret elemen dari kotak alat atau klik tombol di bawah ini.",
    // [Auto-translated] "Drag an element from the toolbox or click the button below."
    surveyPlaceholderDescriptionMobile: "Seret elemen dari kotak alat atau klik tombol di bawah ini.",
    // [Auto-translated] "No preview"
    previewPlaceholderTitle: "Tidak ada pratinjau",
    // [Auto-translated] "No preview"
    previewPlaceholderTitleMobile: "Tidak ada pratinjau",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescription: "Survei tidak berisi elemen yang terlihat.",
    // [Auto-translated] "The survey doesn't contain any visible elements."
    previewPlaceholderDescriptionMobile: "Survei tidak berisi elemen yang terlihat.",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitle: "Tidak ada ikatan untuk diterjemahkan",
    // [Auto-translated] "No strings to translate"
    translationsPlaceholderTitleMobile: "Tidak ada ikatan untuk diterjemahkan",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescription: "Tambahkan elemen ke formulir Anda atau ubah filter string di toolbar.",
    // [Auto-translated] "Add elements to your form or change the strings filter in the toolbar."
    translationsPlaceholderDescriptionMobile: "Tambahkan elemen ke formulir Anda atau ubah filter string di toolbar.",
    // "Click the \"Add Question\" button below to add a new element to the page."
    pagePlaceHolderMobile: "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk menambahkan elemen baru ke halaman.",
    // "Click the \"Add Question\" button below to add a new element to the panel."
    panelPlaceHolderMobile: "Klik tombol \"Tambahkan Pertanyaan\" di bawah ini untuk menambahkan elemen baru ke panel.",
    // [Auto-translated] "Click the button below and choose an image to upload"
    imagePlaceHolderMobile: "Klik tombol di bawah ini dan pilih gambar untuk diunggah",
    // [Auto-translated] "Choose Image"
    imageChooseImage: "Pilih Gambar",
    // [Auto-translated] "Add {0}"
    addNewTypeQuestion: "Tambahkan {0}", // {0} is localizable question type
    // [Auto-translated] "[LOGO]"
    chooseLogoPlaceholder: "[LOGO]",
    // [Auto-translated] "Item "
    choices_Item: "Benda ",
    // [Auto-translated] "Select a file"
    selectFile: "Pilih file",
    // [Auto-translated] "Remove the file"
    removeFile: "Menghapus file",
    lg: {
      // [Auto-translated] "Add New Rule"
      addNewItem: "Tambahkan Aturan Baru",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      empty_tab: "Buat aturan untuk menyesuaikan alur survei.",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitle: "Tidak ada aturan logis",
      // [Auto-translated] "No logical rules"
      logicPlaceholderTitleMobile: "Tidak ada aturan logis",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescription: "Buat aturan untuk menyesuaikan alur survei.",
      // [Auto-translated] "Create a rule to customize the flow of the survey."
      logicPlaceholderDescriptionMobile: "Buat aturan untuk menyesuaikan alur survei.",
      // [Auto-translated] "Show/hide page"
      page_visibilityName: "Menampilkan/menyembunyikan halaman",
      // [Auto-translated] "Enable/disable page"
      page_enableName: "Mengaktifkan/menonaktifkan halaman",
      // [Auto-translated] "Make page required"
      page_requireName: "Buat halaman diperlukan",
      // [Auto-translated] "Show/hide panel"
      panel_visibilityName: "Tampilkan/sembunyikan panel",
      // [Auto-translated] "Enable/disable panel"
      panel_enableName: "Aktifkan/nonaktifkan panel",
      // [Auto-translated] "Make panel required"
      panel_requireName: "Membuat panel diperlukan",
      // [Auto-translated] "Show/hide question"
      question_visibilityName: "Tampilkan/sembunyikan pertanyaan",
      // [Auto-translated] "Enable/disable question"
      question_enableName: "Mengaktifkan/menonaktifkan pertanyaan",
      // [Auto-translated] "Make question required"
      question_requireName: "Buat pertanyaan diperlukan",
      // [Auto-translated] "Reset question value"
      question_resetValueName: "Mereset nilai pertanyaan",
      // [Auto-translated] "Set question value"
      question_setValueName: "Tetapkan nilai pertanyaan",
      // [Auto-translated] "Show/hide column"
      column_visibilityName: "Tampilkan/sembunyikan kolom",
      // [Auto-translated] "Enable/disable column"
      column_enableName: "Aktifkan/nonaktifkan kolom",
      // [Auto-translated] "Make column required"
      column_requireName: "Buat kolom diperlukan",
      // [Auto-translated] "Reset column value"
      column_resetValueName: "Mereset nilai kolom",
      // [Auto-translated] "Set column value"
      column_setValueName: "Mengatur nilai kolom",
      // [Auto-translated] "Complete survey"
      trigger_completeName: "Survei lengkap",
      // [Auto-translated] "Set answer"
      trigger_setvalueName: "Tetapkan jawaban",
      // [Auto-translated] "Copy answer"
      trigger_copyvalueName: "Salin jawaban",
      // [Auto-translated] "Skip to question"
      trigger_skipName: "Lanjut ke pertanyaan",
      // [Auto-translated] "Run expression"
      trigger_runExpressionName: "Menjalankan ekspresi",
      // "Set \"Thank You\" page markup"
      completedHtmlOnConditionName: "Mengatur markup halaman \"Survei Selesai\"",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the page invisible."
      page_visibilityDescription: "Jadikan halaman terlihat saat ekspresi logis dievaluasi menjadi true. Jika tidak, jaga agar halaman tidak terlihat.",
      // [Auto-translated] "Make the page visible when the logical expression evaluates to true. Otherwise, keep the panel invisible."
      panel_visibilityDescription: "Jadikan halaman terlihat saat ekspresi logis dievaluasi menjadi true. Jika tidak, jaga agar panel tidak terlihat.",
      // [Auto-translated] "Make the panel and all elements inside it enabled when the logical expression evaluates to true. Otherwise, keep them disabled."
      panel_enableDescription: "Buat panel dan semua elemen di dalamnya diaktifkan saat ekspresi logis dievaluasi menjadi true. Jika tidak, biarkan mereka tetap nonaktif.",
      // [Auto-translated] "Make the question visible when the logical expression evaluates to true. Otherwise, keep the question invisible."
      question_visibilityDescription: "Buat pertanyaan terlihat saat ekspresi logis dievaluasi menjadi true. Jika tidak, jaga agar pertanyaan tidak terlihat.",
      // [Auto-translated] "Make the question enabled when the logical expression evaluates to true. Otherwise, keep the question disabled."
      question_enableDescription: "Aktifkan pertanyaan saat ekspresi logis dievaluasi menjadi true. Jika tidak, biarkan pertanyaan tetap dinonaktifkan.",
      // [Auto-translated] "Question becomes required when the logical expression evaluates to true."
      question_requireDescription: "Pertanyaan menjadi diperlukan ketika ekspresi logis dievaluasi menjadi true.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey ends, and the respondent sees the \"Thank you\" page."
      trigger_completeDescription: "Saat ekspresi logis dievaluasi menjadi true, survei berakhir, dan responden melihat halaman \"Terima kasih\".",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the specified value is assigned to the selected question."
      trigger_setvalueDescription: "Ketika nilai pertanyaan yang digunakan dalam ekspresi logis diubah, dan ekspresi dievaluasi menjadi true, nilai yang ditentukan ditetapkan ke pertanyaan yang dipilih.",
      // [Auto-translated] "When question values used in the logical expression are changed, and the expression evaluates to true, the value of the selected question is copied to another question."
      trigger_copyvalueDescription: "Ketika nilai pertanyaan yang digunakan dalam ekspresi logis diubah, dan ekspresi dievaluasi menjadi true, nilai pertanyaan yang dipilih disalin ke pertanyaan lain.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey focuses/jumps to the selected question."
      trigger_skipDescription: "Ketika ekspresi logis dievaluasi menjadi true, survei memfokuskan/melompat ke pertanyaan yang dipilih.",
      // [Auto-translated] "When the logical expression evaluates to true, the survey evaluates another expression. Optionally, the result of the latter expression can be assigned as a value to the selected question"
      trigger_runExpressionDescription: "Ketika ekspresi logis dievaluasi menjadi true, survei mengevaluasi ekspresi lain. Secara opsional, hasil dari ekspresi terakhir dapat ditetapkan sebagai nilai untuk pertanyaan yang dipilih",
      // [Auto-translated] "If the logical expression evaluates to true, the \"Thank You\" page displays the specified content."
      completedHtmlOnConditionDescription: "Jika ekspresi logis dievaluasi menjadi true, halaman \"Terima kasih\" menampilkan konten yang ditentukan.",
      // [Auto-translated] "When expression: '{0}' returns true"
      itemExpressionText: "Ketika ekspresi: '{0}' mengembalikan true", // {0} - the expression
      // [Auto-translated] "New rule"
      itemEmptyExpressionText: "Aturan baru",
      // [Auto-translated] "make page {0} visible"
      page_visibilityText: "Membuat halaman {0} terlihat", // {0} page name
      // [Auto-translated] "make panel {0} visible"
      panel_visibilityText: "Membuat panel {0} terlihat", // {0} panel name
      // [Auto-translated] "make panel {0} enable"
      panel_enableText: "Membuat panel {0} mengaktifkan", // {0} panel name
      // [Auto-translated] "make question {0} visible"
      question_visibilityText: "Buat pertanyaan {0} terlihat", // {0} question name
      // [Auto-translated] "make question {0} enable"
      question_enableText: "Buat pertanyaan {0} aktifkan", // {0} question name
      // [Auto-translated] "make question {0} required"
      question_requireText: "Buat pertanyaan {0} diperlukan", // {0} question name
      // [Auto-translated] "reset value for question: {0}"
      question_resetValueText: "reset nilai untuk pertanyaan: {0}", // {0} question name.
      // [Auto-translated] "assign value: {1} to question: {0}"
      question_setValueText: "Tetapkan nilai: {1} pertanyaan: {0}", // {0} question name and {1} setValueExpression
      // [Auto-translated] "make column {0} of question {1} visible"
      column_visibilityText: "Membuat kolom {0} pertanyaan {1} terlihat", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} enable"
      column_enableText: "Buat kolom {0} pertanyaan {1} aktifkan", // {0} column name, {1} question name
      // [Auto-translated] "make column {0} of question {1} required"
      column_requireText: "membuat kolom {0} pertanyaan {1} diperlukan", // {0} column name, {1} question name
      // [Auto-translated] "reset cell value for column: {0}"
      column_resetValueText: "Setel ulang nilai sel untuk kolom: {0}", // {0} column name
      // [Auto-translated] "assign cell value: {1} to column: {0}"
      column_setValueText: "Menetapkan nilai sel: {1} ke kolom: {0}", // {0} column name and {1} setValueExpression
      // [Auto-translated] "An expression whose result will be assigned to the target question."
      setValueExpressionPlaceholder: "Ekspresi yang hasilnya akan ditetapkan ke pertanyaan target.",
      // [Auto-translated] "survey becomes completed"
      trigger_completeText: "Survei menjadi selesai",
      // [Auto-translated] "set into question: {0} value {1}"
      trigger_setvalueText: "Pertanyaan: {0} nilai {1}", // {0} question name, {1} setValue
      // [Auto-translated] "clear question value: {0}"
      trigger_setvalueEmptyText: "Nilai Pertanyaan yang Jelas: {0}", // {0} question name
      // [Auto-translated] "copy into question: {0} value from question {1}"
      trigger_copyvalueText: "Salin ke pertanyaan: {0} nilai dari pertanyaan {1}", // {0} and {1} question names
      // [Auto-translated] "survey skip to the question {0}"
      trigger_skipText: "Survei Lewati ke pertanyaan {0}", // {0} question name
      // [Auto-translated] "run expression: '{0}'"
      trigger_runExpressionText1: "menjalankan ekspresi: '{0}'", // {0} the expression
      // [Auto-translated] " and set its result into question: {0}"
      trigger_runExpressionText2: " dan mempertanyakan hasilnya: {0}", // {0} question name
      // "show custom text for the \"Thank You\" page."
      completedHtmlOnConditionText: "tampilkan teks kustom untuk \"Halaman terima kasih\".",
      // [Auto-translated] "All Questions"
      showAllQuestions: "Semua Pertanyaan",
      // [Auto-translated] "All Action Types"
      showAllActionTypes: "Semua Jenis Tindakan",
      // [Auto-translated] "Condition(s)"
      conditions: "Ketentuan",
      // [Auto-translated] "Action(s)"
      actions: "Tindakan",
      // [Auto-translated] "Define condition(s)"
      expressionEditorTitle: "Tentukan kondisi",
      // [Auto-translated] "Define action(s)"
      actionsEditorTitle: "Menentukan tindakan",
      // [Auto-translated] "Delete Action"
      deleteAction: "Hapus Tindakan",
      // [Auto-translated] "Add Action"
      addNewAction: "Tambahkan Tindakan",
      // [Auto-translated] "Select action..."
      selectedActionCaption: "Pilih tindakan...",
      // [Auto-translated] "The logic expression is empty or invalid. Please correct it."
      expressionInvalid: "Ekspresi logika kosong atau tidak valid. Mohon koreksinya.",
      // [Auto-translated] "Please add at least one action."
      noActionError: "Silakan tambahkan setidaknya satu tindakan.",
      // [Auto-translated] "Please fix issues in your action(s)."
      actionInvalid: "Harap perbaiki masalah dalam tindakan Anda.",
      // [Auto-translated] "Logical rules are incomplete"
      uncompletedRule_title: "Aturan logis tidak lengkap",
      // [Auto-translated] "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?"
      uncompletedRule_text: "Anda belum menyelesaikan beberapa aturan logis. Jika Anda meninggalkan tab sekarang, perubahan akan hilang. Apakah Anda masih ingin meninggalkan tab tanpa menyelesaikan perubahan?",
      // [Auto-translated] "Yes"
      uncompletedRule_apply: "Ya",
      // [Auto-translated] "No, I want to complete the rules"
      uncompletedRule_cancel: "Tidak, saya ingin menyelesaikan aturan"
    }
  },
  // Property Editors
  pe: {
    panel: {
      // [Auto-translated] "Panel name"
      name: "Nama panel",
      // [Auto-translated] "Panel title"
      title: "Judul panel",
      // [Auto-translated] "Panel description"
      description: "Deskripsi panel",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Buat panel terlihat jika",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Buat panel diperlukan jika",
      // [Auto-translated] "Question order within the panel"
      questionOrder: "Urutan pertanyaan dalam panel",
      // [Auto-translated] "Move the panel to page"
      page: "Memindahkan panel ke halaman",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Menampilkan panel pada baris baru",
      // [Auto-translated] "Panel collapse state"
      state: "Status penciwunan panel",
      // [Auto-translated] "Inline panel width"
      width: "Lebar panel sebaris",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Lebar panel minimum",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Lebar panel maksimum",
      // [Auto-translated] "Number this panel"
      showNumber: "Beri nomor panel ini"
    },
    panellayoutcolumn: {
      // [Auto-translated] "Effective width, %"
      effectiveWidth: "Lebar efektif, %",
      // [Auto-translated] "Question title width, px"
      questionTitleWidth: "Lebar judul pertanyaan, px"
    },
    paneldynamic: {
      // [Auto-translated] "Panel name"
      name: "Nama panel",
      // [Auto-translated] "Panel title"
      title: "Judul panel",
      // [Auto-translated] "Panel description"
      description: "Deskripsi panel",
      // [Auto-translated] "Entry display mode"
      displayMode: "Mode tampilan entri",
      // [Auto-translated] "Make the panel visible if"
      visibleIf: "Buat panel terlihat jika",
      // [Auto-translated] "Make the panel required if"
      requiredIf: "Buat panel diperlukan jika",
      // [Auto-translated] "Move the panel to page"
      page: "Memindahkan panel ke halaman",
      // [Auto-translated] "Display the panel on a new line"
      startWithNewLine: "Menampilkan panel pada baris baru",
      // [Auto-translated] "Panel collapse state"
      state: "Status keruntuhan panel",
      // [Auto-translated] "Inline panel width"
      width: "Lebar panel sejajar",
      // [Auto-translated] "Minimum panel width"
      minWidth: "Lebar panel minimum",
      // [Auto-translated] "Maximum panel width"
      maxWidth: "Lebar panel maksimum",
      // [Auto-translated] "Confirm entry removal"
      confirmDelete: "Konfirmasi penghapusan entri",
      // [Auto-translated] "Entry description pattern"
      templateDescription: "Pola deskripsi entri",
      // [Auto-translated] "Entry title pattern"
      templateTitle: "Pola judul entri",
      // [Auto-translated] "Empty panel text"
      noEntriesText: "Teks panel kosong",
      // [Auto-translated] "Tab title pattern"
      templateTabTitle: "Pola judul tab",
      // [Auto-translated] "Tab title placeholder"
      tabTitlePlaceholder: "Tempat penampung judul tab",
      // [Auto-translated] "Make an individual entry visible if"
      templateVisibleIf: "Membuat entri individual terlihat jika",
      // [Auto-translated] "Number the panel"
      showNumber: "Nomor panel",
      // [Auto-translated] "Panel title alignment"
      titleLocation: "Perataan judul panel",
      // [Auto-translated] "Panel description alignment"
      descriptionLocation: "Perataan deskripsi panel",
      // [Auto-translated] "Question title alignment"
      templateQuestionTitleLocation: "Perataan judul pertanyaan",
      // [Auto-translated] "Question title width"
      templateQuestionTitleWidth: "Lebar judul pertanyaan",
      // [Auto-translated] "Error message alignment"
      templateErrorLocation: "Perataan pesan kesalahan",
      // [Auto-translated] "New entry location"
      newPanelPosition: "Lokasi entri baru",
      // [Auto-translated] "Prevent duplicate responses in the following question"
      keyName: "Cegah respons duplikat dalam pertanyaan berikut"
    },
    question: {
      // [Auto-translated] "Question name"
      name: "Nama pertanyaan",
      // [Auto-translated] "Question title"
      title: "Judul pertanyaan",
      // [Auto-translated] "Question description"
      description: "Deskripsi pertanyaan",
      // [Auto-translated] "Show the title and description"
      showTitle: "Tampilkan judul dan deskripsi",
      // [Auto-translated] "Make the question visible if"
      visibleIf: "Buat pertanyaan terlihat jika",
      // [Auto-translated] "Make the question required if"
      requiredIf: "Buat pertanyaan diperlukan jika",
      // [Auto-translated] "Move the question to page"
      page: "Memindahkan pertanyaan ke halaman",
      // [Auto-translated] "Question box collapse state"
      state: "Status ciutkan kotak pertanyaan",
      // [Auto-translated] "Number this question"
      showNumber: "Nomor pertanyaan ini",
      // [Auto-translated] "Question title alignment"
      titleLocation: "Perataan judul pertanyaan",
      // [Auto-translated] "Question description alignment"
      descriptionLocation: "Perataan deskripsi pertanyaan",
      // [Auto-translated] "Error message alignment"
      errorLocation: "Perataan pesan kesalahan",
      // [Auto-translated] "Increase the inner indent"
      indent: "Tingkatkan lekukan bagian dalam",
      // [Auto-translated] "Inline question width"
      width: "Lebar pertanyaan sebaris",
      // [Auto-translated] "Minimum question width"
      minWidth: "Lebar pertanyaan minimum",
      // [Auto-translated] "Maximum question width"
      maxWidth: "Lebar pertanyaan maksimum",
      // [Auto-translated] "Update input field value"
      textUpdateMode: "Perbarui nilai bidang input"
    },
    signaturepad: {
      // [Auto-translated] "Signature area width"
      signatureWidth: "Lebar area tanda tangan",
      // [Auto-translated] "Signature area height"
      signatureHeight: "Tinggi area tanda tangan",
      // [Auto-translated] "Auto-scale the signature area"
      signatureAutoScaleEnabled: "Menskalakan area tanda tangan secara otomatis",
      // [Auto-translated] "Show a placeholder within signature area"
      showPlaceholder: "Tampilkan placeholder dalam area tanda tangan",
      // [Auto-translated] "Placeholder text"
      placeholder: "Teks tempat penampung",
      // [Auto-translated] "Placeholder text in read-only or preview mode"
      placeholderReadOnly: "Teks tempat penampung dalam mode baca-saja atau pratinjau",
      // [Auto-translated] "Show the Clear button within signature area"
      allowClear: "Tampilkan tombol Hapus dalam area tanda tangan",
      // [Auto-translated] "Minimum stroke width"
      penMinWidth: "Lebar goresan minimum",
      // [Auto-translated] "Maximum stroke width"
      penMaxWidth: "Lebar goresan maksimum",
      // [Auto-translated] "Stroke color"
      penColor: "Warna goresan"
    },
    comment: {
      // [Auto-translated] "Input field height (in lines)"
      rows: "Tinggi bidang input (dalam baris)"
    },
    // "Question numbering"
    showQuestionNumbers: "Tampilkan nomor pertanyaan",
    // "Question indexing type"
    questionStartIndex: "Indeks mulai pertanyaan (1, 2 atau 'A', 'a')",
    expression: {
      // [Auto-translated] "Expression name"
      name: "Nama ekspresi",
      // [Auto-translated] "Expression title"
      title: "Judul ekspresi",
      // [Auto-translated] "Expression description"
      description: "Deskripsi ekspresi",
      // [Auto-translated] "Expression"
      expression: "Ekspresi"
    },
    trigger: {
      // [Auto-translated] "Expression"
      expression: "Ekspresi"
    },
    calculatedvalue: {
      // [Auto-translated] "Expression"
      expression: "Ekspresi"
    },
    // survey templates
    survey: {
      // [Auto-translated] "Survey title"
      title: "Judul survei",
      // [Auto-translated] "Survey description"
      description: "Deskripsi survei",
      // [Auto-translated] "Make the survey read-only"
      readOnly: "Jadikan survei baca-saja"
    },
    page: {
      // [Auto-translated] "Page name"
      name: "Nama halaman",
      // [Auto-translated] "Page title"
      title: "Judul halaman",
      // [Auto-translated] "Page description"
      description: "Deskripsi halaman",
      // [Auto-translated] "Make the page visible if"
      visibleIf: "Membuat halaman terlihat jika",
      // [Auto-translated] "Make the page required if"
      requiredIf: "Buat halaman diperlukan jika",
      // [Auto-translated] "Time limit to complete the page"
      timeLimit: "Batas waktu untuk menyelesaikan halaman",
      // [Auto-translated] "Question order on the page"
      questionOrder: "Urutan pertanyaan di halaman"
    },
    matrixdropdowncolumn: {
      // [Auto-translated] "Column name"
      name: "Nama kolom",
      // [Auto-translated] "Column title"
      title: "Judul kolom",
      // [Auto-translated] "Prevent duplicate responses"
      isUnique: "Mencegah respons duplikat",
      // [Auto-translated] "Column width"
      width: "Lebar kolom",
      // [Auto-translated] "Minimum column width"
      minWidth: "Lebar kolom minimum",
      // [Auto-translated] "Input field height (in lines)"
      rows: "Tinggi bidang input (dalam baris)",
      // [Auto-translated] "Make the column visible if"
      visibleIf: "Membuat kolom terlihat jika",
      // [Auto-translated] "Make the column required if"
      requiredIf: "Buat kolom diperlukan jika",
      // [Auto-translated] "Each option in a separate column"
      showInMultipleColumns: "Setiap opsi dalam kolom terpisah"
    },
    matrixcolumn: {
      // [Auto-translated] "Clear others in the same row"
      isExclusive: "Hapus yang lain di baris yang sama"
    },
    multipletextitem: {
      // [Auto-translated] "Name"
      name: "Nama",
      // [Auto-translated] "Title"
      title: "Titel"
    },
    masksettings: {
      // [Auto-translated] "Save masked value in survey results"
      saveMaskedValue: "Simpan nilai terselubung dalam hasil survei"
    },
    patternmask: {
      // [Auto-translated] "Value pattern"
      pattern: "Pola nilai"
    },
    datetimemask: {
      // [Auto-translated] "Minimum value"
      min: "Nilai minimum",
      // [Auto-translated] "Maximum value"
      max: "Nilai maksimum"
    },
    numericmask: {
      // [Auto-translated] "Allow negative values"
      allowNegativeValues: "Izinkan nilai negatif",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Pemisah ribuan",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Pemisah desimal",
      // [Auto-translated] "Value precision"
      precision: "Presisi nilai",
      // [Auto-translated] "Minimum value"
      min: "Nilai minimum",
      // [Auto-translated] "Maximum value"
      max: "Nilai maksimum"
    },
    currencymask: {
      // [Auto-translated] "Currency prefix"
      prefix: "Awalan mata uang",
      // [Auto-translated] "Currency suffix"
      suffix: "Akhiran mata uang"
    },
    // [Auto-translated] "Clear others when selected"
    isExclusive: "Hapus yang lain saat dipilih",
    // [Auto-translated] "Display both text and value"
    showValue: "Tampilkan teks dan nilai",
    // [Auto-translated] "Require user to enter a comment"
    isCommentRequired: "Mengharuskan pengguna untuk memasukkan komentar",
    // "Display area height"
    imageHeight: "Tinggi gambar",
    // "Display area width"
    imageWidth: "Lebar gambar",
    // "Join identifier"
    valueName: "Nama nilai",
    // [Auto-translated] "Default display value for dynamic texts"
    defaultDisplayValue: "Nilai tampilan default untuk teks dinamis",
    // [Auto-translated] "Label alignment"
    rateDescriptionLocation: "Perataan label",
    // [Auto-translated] "Input field width (in characters)"
    size: "Lebar bidang input (dalam karakter)",
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Perataan pesan kesalahan sel",
    // [Auto-translated] "Enabled"
    enabled: "Diaktifkan",
    // [Auto-translated] "Disabled"
    disabled: "Cacat",
    // [Auto-translated] "Inherit"
    inherit: "Mewarisi",
    // "Apply"
    apply: "Terapkan",
    // "OK"
    ok: "OK",
    // [Auto-translated] "Save"
    save: "Simpan",
    // [Auto-translated] "Clear"
    clear: "Jelas",
    // [Auto-translated] "Save"
    saveTooltip: "Simpan",
    // "Cancel"
    cancel: "Batal",
    // [Auto-translated] "Set"
    set: "Mengeset",
    // "Reset"
    reset: "Reset",
    // [Auto-translated] "Change"
    change: "Ubah",
    // [Auto-translated] "Refresh"
    refresh: "Refresh",
    // "Close"
    close: "Tutup",
    // "Delete"
    delete: "Hapus",
    // [Auto-translated] "Add"
    add: "Tambah",
    // "Add New"
    addNew: "Tambahkan Baru",
    // "Click to add an item..."
    addItem: "Klik untuk menambahkan sebuah item...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Klik untuk menghapus item...",
    // [Auto-translated] "Drag the item"
    dragItem: "Seret item",
    // [Auto-translated] "Other"
    addOther: "Lain",
    // [Auto-translated] "Select All"
    addSelectAll: "Pilih Semua",
    // [Auto-translated] "None"
    addNone: "Tidak",
    // "Remove All"
    removeAll: "Hapus Semua",
    // "Edit"
    edit: "Ubah",
    // [Auto-translated] "Return without saving"
    back: "Pengembalian tanpa menabung",
    // [Auto-translated] "Return without saving"
    backTooltip: "Pengembalian tanpa menabung",
    // [Auto-translated] "Save and return"
    saveAndBack: "Simpan dan kembalikan",
    // [Auto-translated] "Save and return"
    saveAndBackTooltip: "Simpan dan kembalikan",
    // [Auto-translated] "Done"
    doneEditing: "Selesai",
    // "Edit Choices"
    editChoices: "Ubah Pilihan",
    // [Auto-translated] "Show Choices"
    showChoices: "Tampilkan Pilihan",
    // "Move"
    move: "Pindah",
    // "<empty>"
    empty: "<kosong>",
    // [Auto-translated] "Value is empty"
    emptyValue: "Nilai kosong",
    // "Manual Entry"
    fastEntry: "Entri Cepat",
    // [Auto-translated] "Value '{0}' is not unique"
    fastEntryNonUniqueError: "Nilai '{0}' tidak unik",
    // [Auto-translated] "Please limit the number of items from {0} to {1}"
    fastEntryChoicesCountError: "Harap batasi jumlah item dari {0} ke {1}",
    // [Auto-translated] "Please enter at least {0} items"
    fastEntryChoicesMinCountError: "Harap masukkan setidaknya {0} item",
    // [Auto-translated] "Enter the list of choice options and their IDs in the following format:\n\nid|option\n\nA choice option ID is not visible to respondents and can be used in conditional rules."
    fastEntryPlaceholder: "Masukkan daftar opsi pilihan dan ID-nya dalam format berikut:\n\nid|opsi\n\nID opsi pilihan tidak terlihat oleh responden dan dapat digunakan dalam aturan bersyarat.",
    // "Form Entry"
    formEntry: "Entri Form",
    // "Test the service"
    testService: "Coba layanan",
    // [Auto-translated] "Please select the element"
    itemSelectorEmpty: "Silakan pilih elemen",
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Silakan pilih tindakan",
    // "Select a question..."
    conditionSelectQuestion: "Pilih pertanyaan...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "Pilih halaman...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "Pilih panel...",
    // "Please enter/select the value"
    conditionValueQuestionTitle: "Silahkan masukkan/pilih nilai",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Tekan ctrl+spasi untuk mendapatkan petunjuk penyelesaian ekspresi",
    // "Current row"
    aceEditorRowTitle: "Baris saat ini",
    // "Current panel"
    aceEditorPanelTitle: "Panel saat ini",
    // "For more details please check the documentation"
    showMore: "Untuk detil selanjutnya silahkan periksa dokumentasi",
    // "Available questions"
    assistantTitle: "Pertanyaan tersedia:",
    // "There is should be at least one column or row"
    cellsEmptyRowsColumns: "Harus ada setidaknya satu kolom atau baris",
    // [Auto-translated] "Review before submit"
    showPreviewBeforeComplete: "Tinjau sebelum mengirimkan",
    // [Auto-translated] "Enabled by a condition"
    overridingPropertyPrefix: "Diaktifkan oleh kondisi",
    // [Auto-translated] "Reset"
    resetToDefaultCaption: "Reset",
    // "Please enter a value"
    propertyIsEmpty: "Silahkan masukkan nilai",
    // [Auto-translated] "Please enter a unique value"
    propertyIsNoUnique: "Silakan masukkan nilai unik",
    // [Auto-translated] "Please enter a unique name"
    propertyNameIsNotUnique: "Silakan masukkan nama yang unik",
    // "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"."
    propertyNameIsIncorrect: "Jangan gunakan kata-kata khusus: \"item\", \"pilihan\", \"panel\", \"baris\".",
    // [Auto-translated] "You don't have any items yet"
    listIsEmpty: "Anda belum memiliki item apa pun",
    // [Auto-translated] "You don't have any choices yet"
    "listIsEmpty@choices": "Anda belum punya pilihan",
    // [Auto-translated] "You don't have any columns yet"
    "listIsEmpty@columns": "Anda belum memiliki kolom apa pun",
    // [Auto-translated] "You don't have layout columns yet"
    "listIsEmpty@gridLayoutColumns": "Anda belum memiliki kolom tata letak",
    // [Auto-translated] "You don't have any rows yet"
    "listIsEmpty@rows": "Anda belum memiliki baris",
    // [Auto-translated] "You don't have any validation rules yet"
    "listIsEmpty@validators": "Anda belum memiliki aturan validasi apa pun",
    // [Auto-translated] "You don't have any custom variables yet"
    "listIsEmpty@calculatedValues": "Anda belum memiliki variabel khusus",
    // [Auto-translated] "You don't have any triggers yet"
    "listIsEmpty@triggers": "Anda belum memiliki pemicu apa pun",
    // [Auto-translated] "You don't have any links yet"
    "listIsEmpty@navigateToUrlOnCondition": "Anda belum memiliki tautan apa pun",
    // [Auto-translated] "You don't have any pages yet"
    "listIsEmpty@pages": "Anda belum memiliki halaman apa pun",
    // [Auto-translated] "Add new choice"
    "addNew@choices": "Tambahkan pilihan baru",
    // [Auto-translated] "Add new column"
    "addNew@columns": "Tambahkan kolom baru",
    // [Auto-translated] "Add new row"
    "addNew@rows": "Menambahkan baris baru",
    // [Auto-translated] "Add new rule"
    "addNew@validators": "Tambahkan aturan baru",
    // [Auto-translated] "Add new variable"
    "addNew@calculatedValues": "Tambahkan variabel baru",
    // [Auto-translated] "Add new trigger"
    "addNew@triggers": "Tambahkan pemicu baru",
    // [Auto-translated] "Add new URL"
    "addNew@navigateToUrlOnCondition": "Tambahkan URL baru",
    // [Auto-translated] "Add new page"
    "addNew@pages": "Tambahkan halaman baru",
    // [Auto-translated] "Expression is empty"
    expressionIsEmpty: "Ekspresi kosong",
    // "Value"
    value: "Nilai",
    // "Text"
    text: "Teks",
    // "Row ID"
    rowid: "ID baris",
    // "Image or video file URL"
    imageLink: "Link Gambar",
    // "Edit column: {0}"
    columnEdit: "Ubah kolom: {0}",
    // "Edit item: {0}"
    itemEdit: "Ubah item: {0}",
    // "URL"
    url: "URL",
    // "Path to data"
    path: "Path",
    choicesbyurl: {
      // [Auto-translated] "Web service URL"
      url: "URL layanan web",
      // [Auto-translated] "Get value to store from the following property"
      valueName: "Dapatkan nilai untuk disimpan dari properti berikut"
    },
    // "Get value to display from the following property"
    titleName: "Nama judul",
    // [Auto-translated] "Get file URLs from the following property"
    imageLinkName: "Mendapatkan URL file dari properti berikut",
    // [Auto-translated] "Accept empty response"
    allowEmptyResponse: "Terima respons kosong",
    // [Auto-translated] "Title"
    titlePlaceholder: "Titel",
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "Judul Survei",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "Halaman {num}",
    // [Auto-translated] "Start Page"
    startPageTitlePlaceholder: "Halaman Awal",
    // [Auto-translated] "Description"
    descriptionPlaceholder: "Deskripsi",
    // [Auto-translated] "Description"
    surveyDescriptionPlaceholder: "Deskripsi",
    // [Auto-translated] "Description"
    pageDescriptionPlaceholder: "Deskripsi",
    // [Auto-translated] "Wrap choices"
    textWrapEnabled: "Pilihan bungkus",
    // "Enable the \"Other\" option"
    showOtherItem: "Memiliki item lain",
    // "Rename the \"Other\" option"
    otherText: "Teks item lain",
    // [Auto-translated] "Enable the \"None\" option"
    showNoneItem: "Aktifkan opsi \"Tidak Ada\"",
    // [Auto-translated] "Enable the \"Refuse to Answer\" option"
    showRefuseItem: "Aktifkan opsi \"Tolak Menjawab\"",
    // [Auto-translated] "Enable the \"Don't Know\" option"
    showDontKnowItem: "Aktifkan opsi \"Tidak Tahu\"",
    // [Auto-translated] "Rename the \"None\" option"
    noneText: "Ganti nama opsi \"Tidak Ada\"",
    // [Auto-translated] "Enable the \"Select All\" option"
    showSelectAllItem: "Aktifkan opsi \"Pilih Semua\"",
    // [Auto-translated] "Rename the \"Select All\" option"
    selectAllText: "Ganti nama opsi \"Pilih Semua\"",
    // [Auto-translated] "Minimum value for auto-generated items"
    choicesMin: "Nilai minimum untuk item yang dibuat secara otomatis",
    // [Auto-translated] "Maximum value for auto-generated items"
    choicesMax: "Nilai maksimum untuk item yang dibuat secara otomatis",
    // [Auto-translated] "Step value for auto-generated items"
    choicesStep: "Nilai langkah untuk item yang dibuat secara otomatis",
    // "Name"
    name: "Nama",
    // "Title"
    title: "Judul",
    // "Cell input type"
    cellType: "Jenis sel",
    // "Column count"
    colCount: "Jumlah kolom",
    // "Choice order"
    choicesOrder: "Tentukan urutan pilihan",
    // [Auto-translated] "Allow custom choices"
    allowCustomChoices: "Izinkan pilihan khusus",
    // "Visible"
    visible: "Terlihat?",
    // "Required"
    isRequired: "Wajib?",
    // [Auto-translated] "Mark as required"
    markRequired: "Tandai sesuai kebutuhan",
    // [Auto-translated] "Remove the required mark"
    removeRequiredMark: "Hapus tanda yang diperlukan",
    // [Auto-translated] "Require an answer in each row"
    eachRowRequired: "Memerlukan jawaban di setiap baris",
    // [Auto-translated] "Prevent duplicate responses in rows"
    eachRowUnique: "Mencegah respons duplikat dalam baris",
    // "Error message for required questions"
    requiredErrorText: "Pesan kesalahan \"Wajib\"",
    // "Display the question on a new line"
    startWithNewLine: "Mulai dengan baris baru?",
    // "Rows"
    rows: "Jumlah baris",
    // [Auto-translated] "Columns"
    cols: "Kolom",
    // "Placeholder text within input field"
    placeholder: "Masukkan placeholder",
    // "Show preview area"
    showPreview: "Tunjukkan tinjauan gambar?",
    // "Store file content in JSON result as text"
    storeDataAsText: "Simpan konten berkas dalam hasil JSON sebagai teks",
    // "Maximum file size (in bytes)"
    maxSize: "Ukuran maksimum berkas dalam byte",
    // "Row count"
    rowCount: "Jumlah baris",
    // "Columns layout"
    columnLayout: "Tata letak kolom",
    // "\"Add Row\" button alignment"
    addRowButtonLocation: "Tambah lokasi tombol baris",
    // [Auto-translated] "Transpose rows to columns"
    transposeData: "Mengubah urutan baris menjadi kolom",
    // "\"Add Row\" button text"
    addRowText: "Teks tambah tombol baris",
    // "\"Remove Row\" button text"
    removeRowText: "Teks hapus tombol baris",
    // [Auto-translated] "Input field title pattern"
    singleInputTitleTemplate: "Pola judul bidang input",
    // [Auto-translated] "Minimum rating value"
    rateMin: "Nilai peringkat minimum",
    // [Auto-translated] "Maximum rating value"
    rateMax: "Nilai peringkat maksimum",
    // [Auto-translated] "Step value"
    rateStep: "Nilai langkah",
    // "Minimum value label"
    minRateDescription: "Deskripsi nilai minimum",
    // "Maximum value label"
    maxRateDescription: "Deskripsi nilai maksimum",
    // "Input type"
    inputType: "Jenis masukan",
    // "Default Answer"
    defaultValue: "Nilai standar",
    // "Default texts"
    cellsDefaultRow: "Teks sel standar",
    // "Edit survey settings"
    surveyEditorTitle: "Ubah pengaturan survei",
    // "Edit: {0}"
    qEditorTitle: "Ubah: {0}",
    // "Maximum character limit"
    maxLength: "Panjang maksimum",
    // [Auto-translated] "Build"
    buildExpression: "Membangun",
    // [Auto-translated] "Edit"
    editExpression: "Mengedit",
    // [Auto-translated] "and"
    and: "dan",
    // [Auto-translated] "or"
    or: "atau",
    // [Auto-translated] "Remove"
    remove: "Buka",
    // [Auto-translated] "Add Condition"
    addCondition: "Tambahkan Kondisi",
    // [Auto-translated] "Select a question to start configuring conditions."
    emptyLogicPopupMessage: "Pilih pertanyaan untuk mulai mengonfigurasi kondisi.",
    // [Auto-translated] "If"
    if: "Kalau",
    // [Auto-translated] "then"
    then: "kemudian",
    // [Auto-translated] "Target question"
    setToName: "Pertanyaan target",
    // [Auto-translated] "Question to copy answer from"
    fromName: "Pertanyaan untuk disalin jawabannya",
    // [Auto-translated] "Question to skip to"
    gotoName: "Pertanyaan untuk dilewati",
    // [Auto-translated] "Rule is incorrect"
    ruleIsNotSet: "Aturan salah",
    // [Auto-translated] "Add to the survey results"
    includeIntoResult: "Tambahkan ke hasil survei",
    // "Make the title and description visible"
    showTitle: "Tampilkan/sembunyikan judul",
    // [Auto-translated] "Expand/collapse title"
    expandCollapseTitle: "Perluas/ciutkan judul",
    // "Select a survey language"
    locale: "Bahasa standar",
    // [Auto-translated] "Select device type"
    simulator: "Pilih jenis perangkat",
    // [Auto-translated] "Switch to landscape orientation"
    landscapeOrientation: "Beralih ke orientasi lanskap",
    // [Auto-translated] "Switch to portrait orientation"
    portraitOrientation: "Beralih ke orientasi potret",
    // "Clear hidden question values"
    clearInvisibleValues: "Bersihkan nilai tak terlihat",
    // "Limit to one response"
    cookieName: "Nama cookie (untuk menonaktifkan menjalankan survei dua kali secara lokal)",
    // "Auto-save survey progress on page change"
    partialSendEnabled: "Kirim hasil survei pada halaman selanjutnya",
    // "Save the \"Other\" option value as a separate property"
    storeOthersAsComment: "Simpan nilai 'lainnya' pada bidang lainnya",
    // "Show page titles"
    showPageTitles: "Tampilkan judul halaman",
    // "Show page numbers"
    showPageNumbers: "Tampilkan nomor halaman",
    // "\"Previous Page\" button text"
    pagePrevText: "Teks halaman tombol sebelumnya",
    // "\"Next Page\" button text"
    pageNextText: "Teks halaman tombol selanjutnya",
    // "\"Complete Survey\" button text"
    completeText: "Teks tombol selesai",
    // [Auto-translated] "\"Review Answers\" button text"
    previewText: "Teks tombol \"Tinjau Jawaban\"",
    // [Auto-translated] "\"Edit Answer\" button text"
    editText: "Teks tombol \"Edit Jawaban\"",
    // "\"Start Survey\" button text"
    startSurveyText: "Teks tombol mulai",
    // "Show navigation buttons"
    showNavigationButtons: "Tampilkan tombol navigasi (navigasi standar)",
    // [Auto-translated] "Navigation buttons alignment"
    navigationButtonsLocation: "Perataan tombol navigasi",
    // "Show the \"Previous Page\" button"
    showPrevButton: "Tampilkan tombol sebelumnya (pengguna mungkin kembali ke halaman sebelumnya)",
    // "First page is a start page"
    firstPageIsStartPage: "Halaman pertama pada survei adalah halaman yang telah dimulai.",
    // "Show the \"Thank You\" page"
    showCompletePage: "Tampilkan keseluruhan halaman di akhir (completedHtml)",
    // "Auto-advance to the next page"
    autoAdvanceEnabled: "Setelah menjawa seluruh pertanyaan, pergi ke halaman berikutnya secara otomatis",
    // [Auto-translated] "Complete the survey automatically"
    autoAdvanceAllowComplete: "Selesaikan survei secara otomatis",
    // "Show the progress bar"
    showProgressBar: "Tampilkan progress bar",
    // [Auto-translated] "Progress bar alignment"
    progressBarLocation: "Perataan bilah kemajuan",
    // "Question title alignment"
    questionTitleLocation: "Lokasi judul pertanyaan",
    // "Question title width"
    questionTitleWidth: "Lebar judul pertanyaan",
    // "Required symbol(s)"
    requiredMark: "Simbil pertanyaan wajib",
    // "Question title template, default is: '{no}. {require} {title}'"
    questionTitleTemplate: "Template Judul Pertanyaan, default adalah: '{no}. {require} {title}'",
    // "Error message alignment"
    questionErrorLocation: "Lokasi Pertanyaan Error",
    // "Focus first question on a new page"
    autoFocusFirstQuestion: "Fokus ke pertanyaan pertama saat pergantian halaman",
    // "Question order"
    questionOrder: "Urutakan elemen pada halaan",
    // "Time limit to complete the survey"
    timeLimit: "Waktu maksimum untuk menyelesaikan survei",
    // "Time limit to complete one page"
    timeLimitPerPage: "Waktu maksimum untuk menyelesaikan suatu halaman",
    // [Auto-translated] "Use a timer"
    showTimer: "Gunakan pengatur waktu",
    // "Timer alignment"
    timerLocation: "Tampilkan panel pengatur waktu",
    // "Timer mode"
    timerInfoMode: "Tampilkan mode panel pengatur waktu",
    // "Panel display mode"
    renderMode: "Mode render",
    // "Enable entry addition"
    allowAddPanel: "Bolehkan penambahan panel",
    // "Enable entry removal"
    allowRemovePanel: "Bolehkan penghapusan panel",
    // "\"Add Entry\" button text"
    addPanelText: "Teks tambah panel",
    // "\"Remove Entry\" button text"
    removePanelText: "Teks hapus panel",
    // "Show all elements on one page"
    isSinglePage: "Tampilkan seluruh elemen pada halaman",
    // "HTML markup"
    html: "Html",
    // [Auto-translated] "Answer"
    setValue: "Menjawab",
    // [Auto-translated] "Storage format"
    dataFormat: "Format penyimpanan",
    // [Auto-translated] "Enable row addition"
    allowAddRows: "Mengaktifkan penambahan baris",
    // [Auto-translated] "Enable row removal"
    allowRemoveRows: "Mengaktifkan penghapusan baris",
    // [Auto-translated] "Enable row reordering"
    allowRowReorder: "Mengaktifkan penyusunan ulang baris",
    // [Auto-translated] "Does not apply if you specify the exact display area width or height."
    responsiveImageSizeHelp: "Tidak berlaku jika Anda menentukan lebar atau tinggi area tampilan yang tepat.",
    // [Auto-translated] "Minimum display area width"
    minImageWidth: "Lebar area tampilan minimum",
    // [Auto-translated] "Maximum display area width"
    maxImageWidth: "Lebar area tampilan maksimum",
    // [Auto-translated] "Minimum display area height"
    minImageHeight: "Tinggi area tampilan minimum",
    // [Auto-translated] "Maximum display area height"
    maxImageHeight: "Tinggi area tampilan maksimum",
    // "Minimum value"
    minValue: "Nilai minimum",
    // "Maximum value"
    maxValue: "Nilai maksimum",
    // [Auto-translated] "Case insensitive"
    caseInsensitive: "Tidak peka huruf besar/kecil",
    // "Minimum length (in characters)"
    minLength: "Panjang minimum",
    // "Allow digits"
    allowDigits: "Bolehkan angka",
    // "Minimum count"
    minCount: "Hitungan minimum",
    // "Maximum count"
    maxCount: "Hitungan maksimum",
    // "Regular expression"
    regex: "Ekspresi reguler",
    surveyvalidator: {
      // [Auto-translated] "Validation message"
      text: "Pesan validasi",
      // [Auto-translated] "Validation expression"
      expression: "Ekspresi validasi",
      // [Auto-translated] "Notification type"
      notificationType: "Jenis notifikasi",
      // [Auto-translated] "Maximum length (in characters)"
      maxLength: "Panjang maksimum (dalam karakter)"
    },
    // "Total row header"
    totalText: "Total teks",
    // "Aggregation method"
    totalType: "Total jenis",
    // "Total value expression"
    totalExpression: "Total ekspresi",
    // "Total value display format"
    totalDisplayStyle: "Total gaya tampilan",
    // "Currency"
    totalCurrency: "Total mata uang",
    // "Formatted string"
    totalFormat: "Total format",
    // [Auto-translated] "Survey logo"
    logo: "Logo survei",
    // [Auto-translated] "Survey layout"
    questionsOnPageMode: "Tata letak survei",
    // [Auto-translated] "Restrict answer length"
    maxTextLength: "Membatasi panjang jawaban",
    // [Auto-translated] "Restrict comment length"
    maxCommentLength: "Membatasi panjang komentar",
    // [Auto-translated] "Comment area height (in lines)"
    commentAreaRows: "Tinggi area komentar (dalam baris)",
    // [Auto-translated] "Auto-expand text areas"
    autoGrowComment: "Perluas area teks secara otomatis",
    // [Auto-translated] "Allow users to resize text areas"
    allowResizeComment: "Mengizinkan pengguna mengubah ukuran area teks",
    // "Update input field values"
    textUpdateMode: "Memperbarui nilai pertanyaan teks",
    // [Auto-translated] "Input mask type"
    maskType: "Jenis masker input",
    // [Auto-translated] "Set focus on the first invalid answer"
    autoFocusFirstError: "Mengatur fokus pada jawaban pertama yang tidak valid",
    // [Auto-translated] "Run validation"
    checkErrorsMode: "Jalankan validasi",
    // [Auto-translated] "Validate empty fields on lost focus"
    validateVisitedEmptyFields: "Memvalidasi bidang kosong saat fokus hilang",
    // [Auto-translated] "Redirect to an external link after submission"
    navigateToUrl: "Mengalihkan ke pranala eksternal setelah pengiriman",
    // [Auto-translated] "Dynamic external link"
    navigateToUrlOnCondition: "Tautan eksternal dinamis",
    // [Auto-translated] "Markup to show if the user already filled out this survey"
    completedBeforeHtml: "Markup untuk menunjukkan apakah pengguna sudah mengisi survei ini",
    // [Auto-translated] "\"Thank You\" page markup"
    completedHtml: "Markup halaman \"Terima kasih\"",
    // [Auto-translated] "Dynamic \"Thank You\" page markup"
    completedHtmlOnCondition: "Markup halaman \"Terima kasih\" dinamis",
    // [Auto-translated] "Markup to show while survey model is loading"
    loadingHtml: "Markup untuk ditampilkan saat model survei dimuat",
    // [Auto-translated] "Comment area text"
    commentText: "Teks area komentar",
    // [Auto-translated] "Autocomplete type"
    autocomplete: "Tipe pelengkapan otomatis",
    // "Label for \"True\""
    labelTrue: "Label \"Benar\"",
    // "Label for \"False\""
    labelFalse: "Label \"Salah\"",
    // "Show the Clear button"
    allowClear: "Tampilkan tombol Hapus",
    // [Auto-translated] "Search Mode"
    searchMode: "Mode Pencarian",
    // [Auto-translated] "Display format"
    displayStyle: "Format tampilan",
    // [Auto-translated] "Formatted string"
    format: "String yang diformat",
    // [Auto-translated] "Maximum fractional digits"
    maximumFractionDigits: "Digit pecahan maksimum",
    // [Auto-translated] "Minimum fractional digits"
    minimumFractionDigits: "Digit pecahan minimum",
    // [Auto-translated] "Display grouping separators"
    useGrouping: "Menampilkan pemisah pengelompokan",
    // [Auto-translated] "Enable multiple file upload"
    allowMultiple: "Mengaktifkan pengunggahan beberapa file",
    // [Auto-translated] "Preview uploaded images"
    allowImagesPreview: "Pratinjau gambar yang diunggah",
    // [Auto-translated] "Accepted file types"
    acceptedTypes: "Jenis file yang diterima",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Tunggu hingga upload selesai",
    // [Auto-translated] "Confirm file deletion"
    needConfirmRemoveFile: "Konfirmasi penghapusan file",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Perataan detail baris",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Jumlah baris minimum",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Jumlah baris maksimum",
    // "Confirm row removal"
    confirmDelete: "Mengonfirmasi penghapusan baris",
    // [Auto-translated] "Confirmation message"
    confirmDeleteText: "Pesan konfirmasi",
    // [Auto-translated] "Initial number of entries"
    panelCount: "Jumlah awal entri",
    // [Auto-translated] "Minimum number of entries"
    minPanelCount: "Jumlah minimum entri",
    // [Auto-translated] "Maximum number of entries"
    maxPanelCount: "Jumlah maksimum entri",
    // [Auto-translated] "Initial entry state"
    panelsState: "Status entri awal",
    // [Auto-translated] "\"Previous Entry\" button text"
    prevPanelText: "Teks tombol \"Entri Sebelumnya\"",
    // [Auto-translated] "\"Next Entry\" button text"
    nextPanelText: "Teks tombol \"Entri Berikutnya\"",
    // [Auto-translated] "\"Remove Entry\" button alignment"
    removePanelButtonLocation: "Perataan tombol \"Hapus Entri\"",
    // [Auto-translated] "Hide the question if it has no rows"
    hideIfRowsEmpty: "Sembunyikan pertanyaan jika tidak memiliki baris",
    // [Auto-translated] "Hide columns if there are no rows"
    hideColumnsIfEmpty: "Menyembunyikan kolom jika tidak ada baris",
    // [Auto-translated] "Custom rating values"
    rateValues: "Nilai rating kustom",
    // [Auto-translated] "Rating count"
    rateCount: "Jumlah peringkat",
    // [Auto-translated] "Rating configuration"
    autoGenerate: "Konfigurasi peringkat",
    slider: {
      // [Auto-translated] "Min value"
      min: "Nilai minimum",
      // [Auto-translated] "Max value"
      max: "Nilai maks",
      // [Auto-translated] "Step value"
      step: "Nilai langkah",
      // [Auto-translated] "Show scale labels"
      showLabels: "Tampilkan label skala",
      // [Auto-translated] "Show tooltips"
      tooltipVisibility: "Tampilkan tooltip",
      // [Auto-translated] "Allow thumb crossing"
      allowSwap: "Izinkan menyilangkan ibu jari",
      // [Auto-translated] "Number of auto-generated labels"
      labelCount: "Jumlah label yang dibuat secara otomatis",
      // [Auto-translated] "Min value expression"
      minValueExpression: "Ekspresi nilai min",
      // [Auto-translated] "Max value expression"
      maxValueExpression: "Ekspresi nilai maks",
      // [Auto-translated] "Scale labels configuration"
      autoGenerate: "Konfigurasi label skala",
      // [Auto-translated] "Slider type"
      sliderType: "Jenis penggeser",
      // [Auto-translated] "Min range length"
      minRangeLength: "Panjang rentang min",
      // [Auto-translated] "Max range length"
      maxRangeLength: "Panjang rentang maks",
      // [Auto-translated] "Custom labels"
      customLabels: "Label khusus",
      // [Auto-translated] "Label format"
      labelFormat: "Format label",
      // [Auto-translated] "Tooltip format"
      tooltipFormat: "Format tooltip"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Tinggi gambar",
      // [Auto-translated] "Image width"
      imageWidth: "Lebar gambar"
    },
    // [Auto-translated] "Hide the question if it has no choices"
    hideIfChoicesEmpty: "Sembunyikan pertanyaan jika tidak punya pilihan",
    // "Minimum width"
    minWidth: "Lebar minimum (dalam nilai yang diterima CSS)",
    // "Maximum width"
    maxWidth: "Lebar maksimum (dalam nilai yang diterima CSS)",
    // "Width"
    width: "Lebar (dalam nilai yang diterima CSS)",
    // [Auto-translated] "Show column headers"
    showHeader: "Perlihatkan header kolom",
    // [Auto-translated] "Show horizontal scrollbar"
    horizontalScroll: "Tampilkan scrollbar horizontal",
    // [Auto-translated] "Minimum column width"
    columnMinWidth: "Lebar kolom minimum",
    // [Auto-translated] "Row header width"
    rowTitleWidth: "Lebar header baris",
    // "Value to store when \"True\" is selected"
    valueTrue: "Nilai \"Benar\"",
    // "Value to store when \"False\" is selected"
    valueFalse: "Nilai \"False\"",
    // "\"Value is below minimum\" error message"
    minErrorText: "Pesan kesalahan \"Nilai di bawah minimum\"",
    // "\"Value exceeds maximum\" error message"
    maxErrorText: "Pesan kesalahan \"Nilai melebihi maksimum\"",
    // "\"Empty comment\" error message"
    otherErrorText: "Pesan kesalahan \"Komentar kosong\"",
    // "Error message for duplicate responses"
    keyDuplicationError: "Pesan galat \"Nilai kunci tidak unik\"",
    // [Auto-translated] "Minimum choices to select"
    minSelectedChoices: "Pilihan minimum untuk dipilih",
    // [Auto-translated] "Maximum choices to select"
    maxSelectedChoices: "Pilihan maksimum untuk dipilih",
    // [Auto-translated] "Logo width"
    logoWidth: "Lebar logo",
    // [Auto-translated] "Logo height"
    logoHeight: "Tinggi logo",
    // "Read-only"
    readOnly: "Baca-saja",
    // [Auto-translated] "Disable the read-only mode if"
    enableIf: "Nonaktifkan mode baca-saja jika",
    // "\"No rows\" message"
    noRowsText: "Pesan \"Tidak ada baris\"",
    // [Auto-translated] "Separate special choices"
    separateSpecialChoices: "Pilihan khusus terpisah",
    // [Auto-translated] "Copy choices from the following question"
    choicesFromQuestion: "Salin pilihan dari pertanyaan berikut",
    // [Auto-translated] "Which choice options to copy"
    choicesFromQuestionMode: "Opsi pilihan mana yang akan disalin",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice IDs"
    choiceValuesFromQuestion: "Gunakan nilai dari matriks, kolom atau pertanyaan panel berikut sebagai ID pilihan",
    // [Auto-translated] "Use values from the following matrix column or panel question as choice texts"
    choiceTextsFromQuestion: "Gunakan nilai dari kolom matriks atau pertanyaan panel berikut sebagai teks pilihan",
    // [Auto-translated] "Display page titles in the progress bar"
    progressBarShowPageTitles: "Menampilkan judul halaman di bilah kemajuan",
    // [Auto-translated] "Display page numbers in the progress bar"
    progressBarShowPageNumbers: "Menampilkan nomor halaman di bilah kemajuan",
    // [Auto-translated] "Add a comment box"
    showCommentArea: "Menambahkan kotak komentar",
    // [Auto-translated] "Placeholder text for the comment box"
    commentPlaceholder: "Teks placeholder untuk kotak komentar",
    // [Auto-translated] "Show the labels as extreme values"
    displayRateDescriptionsAsExtremeItems: "Menampilkan label sebagai nilai ekstrem",
    // [Auto-translated] "Row order"
    rowOrder: "Urutan baris",
    // [Auto-translated] "Column layout"
    columnsLayout: "Tata letak kolom",
    // [Auto-translated] "Nested column count"
    columnColCount: "Jumlah kolom bertumpuk",
    // [Auto-translated] "Correct Answer"
    correctAnswer: "Jawaban yang Benar",
    // [Auto-translated] "Default Values"
    defaultPanelValue: "Nilai Default",
    // [Auto-translated] "Cell Texts"
    cells: "Teks Sel",
    // [Auto-translated] "Select a file or paste a file link..."
    fileInputPlaceholder: "Pilih file atau tempel tautan file...",
    // "Prevent duplicate responses in the following column"
    keyName: "Kolom kunci",
    itemvalue: {
      // [Auto-translated] "Make the option visible if"
      visibleIf: "Buat opsi terlihat jika",
      // [Auto-translated] "Make the option selectable if"
      enableIf: "Buat opsi dapat dipilih jika"
    },
    "itemvalue@rows": {
      // [Auto-translated] "Make the row visible if"
      visibleIf: "Membuat baris terlihat jika",
      // [Auto-translated] "Make the row editable if"
      enableIf: "Membuat baris dapat diedit jika"
    },
    imageitemvalue: {
      // "Alt text"
      text: "Teks alternatif"
    },
    // [Auto-translated] "Logo alignment"
    logoPosition: "Perataan logo",
    // [Auto-translated] "Add logo..."
    addLogo: "Tambahkan logo...",
    // [Auto-translated] "Change logo..."
    changeLogo: "Ubah logo...",
    logoPositions: {
      // [Auto-translated] "Remove logo"
      none: "Hapus logo",
      // [Auto-translated] "Left"
      left: "Kiri",
      // [Auto-translated] "Right"
      right: "Kanan",
      // [Auto-translated] "On the top"
      top: "Di atas",
      // [Auto-translated] "In the bottom"
      bottom: "Di bagian bawah"
    },
    // [Auto-translated] "Preview mode"
    previewMode: "Mode pratinjau",
    // [Auto-translated] "Enable grid layout"
    gridLayoutEnabled: "Mengaktifkan tata letak kisi",
    // [Auto-translated] "Grid columns"
    gridLayoutColumns: "Kolom kisi",
    // [Auto-translated] "Mask settings"
    maskSettings: "Pengaturan topeng",
    // [Auto-translated] "Row details error message alignment"
    detailErrorLocation: "Perataan pesan kesalahan detail baris",
    // Creator tabs
    tabs: {
      panel: {
        // [Auto-translated] "Panel Layout"
        layout: "Tata Letak Panel"
      },
      // "General"
      general: "Umum",
      // "Options"
      fileOptions: "Pilihan berkas",
      // "HTML Editor"
      html: "Editor Html",
      // "Columns"
      columns: "Kolom",
      // "Rows"
      rows: "Baris",
      // "Choice Options"
      choices: "Pilihan",
      // "Items"
      items: "Barang",
      // "Visible If"
      visibleIf: "Terlihat Jika",
      // "Editable If"
      enableIf: "Memungkinkan Jika",
      // "Required If"
      requiredIf: "Wajib Jika",
      // "Rating Values"
      rateValues: "Nilai Tingkat",
      // [Auto-translated] "Slider Settings"
      sliderSettings: "Pengaturan Penggeser",
      // "Choices from a Web Service"
      choicesByUrl: "Pilih dari Web",
      // "Default Choices"
      matrixChoices: "Pilihan Standar",
      // "Text Inputs"
      multipleTextItems: "Masukan Teks",
      // [Auto-translated] "Numbering"
      numbering: "Penomoran",
      // "Validators"
      validators: "Validator",
      // "Navigation"
      navigation: "Navigasi",
      // "Question Settings"
      question: "Pertanyaan",
      // [Auto-translated] "Pages"
      pages: "Halaman",
      // "Quiz Mode"
      timer: "Pengatur Waktu/Kuis",
      // [Auto-translated] "Calculated Values"
      calculatedValues: "Nilai terhitung",
      // "Triggers"
      triggers: "Trigger",
      // "Title template"
      templateTitle: "Judul templat",
      // "Totals"
      totals: "Total",
      // "Conditions"
      logic: "Logika",
      // [Auto-translated] "Input Mask Settings"
      mask: "Pengaturan Masker Input",
      layout: {
        // [Auto-translated] "Panel Layout"
        panel: "Tata Letak Panel",
        // [Auto-translated] "Layout"
        question: "Tata letak",
        // [Auto-translated] "Layout"
        base: "Tata letak"
      },
      // [Auto-translated] "Data"
      data: "Data",
      // [Auto-translated] "Validation"
      validation: "Validasi",
      // [Auto-translated] "Individual Cell Texts"
      cells: "Teks Sel Individu",
      // [Auto-translated] "\"Thank You\" Page"
      showOnCompleted: "Halaman \"Terima kasih\"",
      // [Auto-translated] "Logo in the Survey Header"
      logo: "Logo di Header Survei",
      // [Auto-translated] "Slider"
      slider: "Slider",
      // [Auto-translated] "Expression"
      expression: "Ekspresi",
      // [Auto-translated] "Question Settings"
      questionSettings: "Pengaturan Pertanyaan",
      // "Header"
      header: "Header",
      // "Background"
      background: "Latar",
      // "Appearance"
      appearance: "Rupa",
      // [Auto-translated] "Accent colors"
      accentColors: "Warna aksen",
      // [Auto-translated] "Surface background"
      surfaceBackground: "Latar belakang permukaan",
      // [Auto-translated] "Scaling"
      scaling: "Scaling",
      // [Auto-translated] "Others"
      others: "Lain"
    },
    // "Edit property '{0}'"
    editProperty: "Ubah properti '{0}'",
    // "Items"
    items: "[ Barang: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Buat pilihan terlihat jika",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Buat pilihan yang dapat dipilih jika",
    // [Auto-translated] "Make columns visible if"
    columnsEnableIf: "Membuat kolom terlihat jika",
    // [Auto-translated] "Make rows visible if"
    rowsEnableIf: "Membuat baris terlihat jika",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Tingkatkan lekukan bagian dalam",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Gunakan jawaban dari entri terakhir sebagai default",
    // "Please enter a value."
    enterNewValue: "Silahkan masukkan nilai",
    // "There are no questions in the survey."
    noquestions: "Tidak ada pertanyaan dalam survei.",
    // "Please create a trigger"
    createtrigger: "Silahkan buat sebuah trigger",
    // [Auto-translated] "Press enter button to edit"
    titleKeyboardAdornerTip: "Tekan tombol enter untuk mengedit",
    // [Auto-translated] "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item"
    keyboardAdornerTip: "Tekan tombol enter untuk mengedit item, tekan tombol hapus untuk menghapus item, tekan alt plus panah ke atas atau panah ke bawah untuk memindahkan item",
    // "On "
    triggerOn: "On ",
    // "Make pages visible"
    triggerMakePagesVisible: "Buat halaman terlihat:",
    // "Make elements visible"
    triggerMakeQuestionsVisible: "Buat elemen terlihat:",
    // "Complete the survey if successful."
    triggerCompleteText: "Selesaikan survei jika sukses.",
    // "The trigger is not set"
    triggerNotSet: "Trigger belum diatur",
    // "Run if"
    triggerRunIf: "Berjalan jika",
    // "Change value of: "
    triggerSetToName: "Ubah nilai dari: ",
    // "Copy value from: "
    triggerFromName: "Salin nilai dari: ",
    // "Run this Expression"
    triggerRunExpression: "Jalankan ekspresi ini:",
    // "to: "
    triggerSetValue: "ke: ",
    // [Auto-translated] "Go to the question"
    triggerGotoName: "Pergi ke pertanyaan",
    // "Do not put the variable into the survey result."
    triggerIsVariable: "Jangan meletakkan variabel ke hasil survey.",
    // [Auto-translated] "Please enter a valid expression"
    triggerRunExpressionEmpty: "Silakan masukkan ekspresi yang valid",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Ketik ekspresi di sini...",
    // [Auto-translated] "No file chosen"
    noFile: "Tidak ada file yang dipilih",
    // [Auto-translated] "Clear hidden question values"
    clearIfInvisible: "Hapus nilai pertanyaan tersembunyi",
    // [Auto-translated] "Store values in the following property"
    valuePropertyName: "Simpan nilai di properti berikut",
    // [Auto-translated] "Enable search-as-you-type"
    searchEnabled: "Mengaktifkan pencarian saat Anda mengetik",
    // [Auto-translated] "Hide selected items"
    hideSelectedItems: "Menyembunyikan item yang dipilih",
    // [Auto-translated] "Collapse the dropdown upon selection"
    closeOnSelect: "Ciutkan dropdown saat memilih",
    // [Auto-translated] "Vertical alignment within cells"
    verticalAlign: "Perataan vertikal di dalam sel",
    // [Auto-translated] "Alternate row colors"
    alternateRows: "Warna baris alternatif",
    // [Auto-translated] "Make columns visible if"
    columnsVisibleIf: "Membuat kolom terlihat jika",
    // [Auto-translated] "Make rows visible if"
    rowsVisibleIf: "Membuat baris terlihat jika",
    // [Auto-translated] "Placeholder text for the comment box"
    otherPlaceholder: "Teks placeholder untuk kotak komentar",
    // [Auto-translated] "Placeholder text for Local file"
    filePlaceholder: "Teks placeholder untuk file lokal",
    // [Auto-translated] "Placeholder text for Camera"
    photoPlaceholder: "Teks placeholder untuk Kamera",
    // [Auto-translated] "Placeholder text for Local file or Camera"
    fileOrPhotoPlaceholder: "Teks placeholder untuk file lokal atau Kamera",
    // [Auto-translated] "Rating icon"
    rateType: "Ikon peringkat",
    // [Auto-translated] "Ex.: https://api.example.com/books"
    url_placeholder: "Mis.: https://api.example.com/books",
    // [Auto-translated] "Ex.: categories.fiction"
    path_placeholder: "Mis.: categories.fiction",
    // [Auto-translated] "Ex.: a)"
    questionStartIndex_placeholder: "Mis.: a)",
    // [Auto-translated] "Ex.: 6in"
    width_placeholder: "Contoh: 6in",
    // [Auto-translated] "Ex.: 600px"
    minWidth_placeholder: "Contoh: 600px",
    // [Auto-translated] "Ex.: 50%"
    maxWidth_placeholder: "Contoh: 50%",
    // "auto"
    imageHeight_placeholder: "Auto",
    // "auto"
    imageWidth_placeholder: "Auto",
    // [Auto-translated] "Ex.: 100px"
    itemTitleWidth_placeholder: "Contoh: 100px",
    theme: {
      // [Auto-translated] "Theme"
      themeName: "Tema",
      // [Auto-translated] "Question appearance"
      isPanelless: "Penampilan pertanyaan",
      // [Auto-translated] "Background and corner radius"
      editorPanel: "Latar belakang dan radius sudut",
      // [Auto-translated] "Background and corner radius"
      questionPanel: "Latar belakang dan radius sudut",
      // [Auto-translated] "Accent color"
      primaryColor: "Warna aksen",
      // [Auto-translated] "Panel and question box opacity"
      panelBackgroundTransparency: "Opasitas panel dan kotak pertanyaan",
      // [Auto-translated] "Input element opacity"
      questionBackgroundTransparency: "Opasitas elemen input",
      // [Auto-translated] "Survey font size"
      fontSize: "Ukuran font survei",
      // [Auto-translated] "Survey scale factor"
      scale: "Faktor skala survei",
      // [Auto-translated] "Corner radius"
      cornerRadius: "Radius sudut",
      // [Auto-translated] "Advanced mode"
      advancedMode: "Mode lanjutan",
      // [Auto-translated] "Title font"
      pageTitle: "Font judul",
      // [Auto-translated] "Description font"
      pageDescription: "Font deskripsi",
      // [Auto-translated] "Title font"
      questionTitle: "Font judul",
      // [Auto-translated] "Description font"
      questionDescription: "Font deskripsi",
      // [Auto-translated] "Font"
      editorFont: "Font",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacity", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs-font-family": "Keluarga font survei",
      // [Auto-translated] "Background color"
      "--sjs-general-backcolor-dim": "Warna latar belakang",
      // [Auto-translated] "Accent background colors"
      "--sjs-primary-backcolor": "Warna latar belakang aksen",
      // [Auto-translated] "Accent foreground colors"
      "--sjs-primary-forecolor": "Warna latar depan aksen",
      // [Auto-translated] "Error message colors"
      "--sjs-special-red": "Warna pesan kesalahan",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-small": "Efek bayangan",
      // [Auto-translated] "Shadow effects"
      "--sjs-shadow-inner": "Efek bayangan",
      // [Auto-translated] "Colors"
      "--sjs-border-default": "Warna"
    },
    "header@header": {
      // [Auto-translated] "View"
      headerView: "Melihat",
      // [Auto-translated] "Logo alignment"
      logoPosition: "Perataan logo",
      // [Auto-translated] "Survey title font"
      surveyTitle: "Font judul survei",
      // [Auto-translated] "Survey description font"
      surveyDescription: "Font deskripsi survei",
      // [Auto-translated] "Survey title font"
      headerTitle: "Font judul survei",
      // [Auto-translated] "Survey description font"
      headerDescription: "Font deskripsi survei",
      // [Auto-translated] "Content area width"
      inheritWidthFrom: "Lebar area konten",
      // [Auto-translated] "Text width"
      textAreaWidth: "Lebar teks",
      // [Auto-translated] "Background color"
      backgroundColorSwitch: "Warna latar belakang",
      // [Auto-translated] "Background image"
      backgroundImage: "Gambar latar belakang",
      // [Auto-translated] "Opacity"
      backgroundImageOpacity: "Opacity",
      // [Auto-translated] "Overlap"
      overlapEnabled: "Tumpang tindih",
      // [Auto-translated] "Logo alignment"
      logoPositionX: "Perataan logo",
      // [Auto-translated] "Survey title alignment"
      titlePositionX: "Penyelarasan judul survei",
      // [Auto-translated] "Survey description alignment"
      descriptionPositionX: "Penyelarasan deskripsi survei"
    }
  },
  // Property values
  pv: {
    // [Auto-translated] "true"
    "true": "benar",
    // [Auto-translated] "false"
    "false": "palsu",
    // [Auto-translated] "Local file"
    file: "File lokal",
    // [Auto-translated] "Camera"
    camera: "Kamera",
    // [Auto-translated] "Local file or Camera"
    "file-camera": "File lokal atau Kamera",
    // "Inherit"
    inherit: "inherit",
    // "Visible"
    show: "tampilkan",
    // "Hidden"
    hide: "sembunyikan",
    // "Inherit"
    default: "standar",
    // "Initial"
    initial: "inisial",
    // "Random"
    random: "acak",
    // "Collapsed"
    collapsed: "dilipat",
    // "Expanded"
    expanded: "direntangkan",
    // "None"
    none: "tidak ada",
    // "Ascending"
    asc: "naik",
    // "Descending"
    desc: "turun",
    // "Indeterminate"
    indeterminate: "tidak tentu",
    // [Auto-translated] "Selected"
    selected: "Dipilih",
    // [Auto-translated] "Unselected"
    unselected: "Tidak dipilih",
    // [Auto-translated] "decimal"
    decimal: "desimal",
    // [Auto-translated] "currency"
    currency: "mata uang",
    // [Auto-translated] "percent"
    percent: "persen",
    // "First panel is expanded"
    firstExpanded: "perluasanPertama",
    // "Hide question numbers"
    off: "mati",
    // "List"
    list: "daftar",
    // [Auto-translated] "Carousel"
    carousel: "Korsel",
    // [Auto-translated] "Tabs"
    tab: "Tab",
    // "Panel navigator + Progress bar at the top"
    progressTop: "progress atas",
    // "Panel navigator + Progress bar at the bottom"
    progressBottom: "progress bawah",
    // "Panel navigator + Progress bar at the top and bottom"
    progressTopBottom: "progress atas bawah",
    // "Horizontal"
    horizontal: "horizontal",
    // "Vertical"
    vertical: "vertikal",
    // "Top"
    top: "atas",
    // "Bottom"
    bottom: "bawah",
    // "Top and bottom"
    topBottom: "atas dan bawah",
    // [Auto-translated] "Both"
    both: "Keduanya",
    // "Left"
    left: "kiri",
    // [Auto-translated] "Right"
    right: "Kanan",
    // [Auto-translated] "Center"
    center: "Pusat",
    // [Auto-translated] "Left and right"
    leftRight: "Kiri dan kanan",
    // [Auto-translated] "Middle"
    middle: "Tengah",
    // [Auto-translated] "color"
    color: "warna",
    // [Auto-translated] "date"
    date: "tanggal",
    // [Auto-translated] "datetime"
    datetime: "Waktu tanggal",
    // [Auto-translated] "datetime-local"
    "datetime-local": "datetime-lokal",
    // [Auto-translated] "email"
    email: "Email",
    // [Auto-translated] "month"
    month: "bulan",
    // [Auto-translated] "number"
    number: "angka",
    // [Auto-translated] "password"
    password: "kata sandi",
    // [Auto-translated] "range"
    range: "lingkup",
    // [Auto-translated] "tel"
    tel: "Tel",
    // [Auto-translated] "text"
    text: "Teks",
    // [Auto-translated] "time"
    time: "Waktu",
    // [Auto-translated] "url"
    url: "URL",
    // [Auto-translated] "week"
    week: "minggu",
    // "Hidden"
    hidden: "tersembunyi",
    // "Editable"
    edit: "ubah",
    // "Read-only"
    display: "tampilan",
    // [Auto-translated] "Contain"
    contain: "Mengandung",
    // [Auto-translated] "Cover"
    cover: "Menutupi",
    // [Auto-translated] "Fill"
    fill: "Isi",
    // [Auto-translated] "Next"
    next: "Depan",
    // [Auto-translated] "Last"
    last: "Terakhir",
    // "Upon survey completion"
    onComplete: "saat selesai",
    // "When question gets hidden"
    onHidden: "saat tersembunyi",
    // [Auto-translated] "When question or its panel/page gets hidden"
    onHiddenContainer: "Ketika pertanyaan atau panel/halamannya disembunyikan",
    clearInvisibleValues: {
      // [Auto-translated] "Never"
      none: "Tidak pernah"
    },
    clearIfInvisible: {
      // [Auto-translated] "Never"
      none: "Tidak pernah"
    },
    // [Auto-translated] "Radio Buttons"
    radio: "Tombol Radio",
    inputType: {
      // [Auto-translated] "Color"
      color: "Warna",
      // [Auto-translated] "Date"
      date: "Tanggal",
      // [Auto-translated] "Date and Time"
      "datetime-local": "Tanggal dan Waktu",
      // [Auto-translated] "Email"
      email: "Email",
      // [Auto-translated] "Month"
      month: "Bulan",
      // [Auto-translated] "Number"
      number: "Angka",
      // [Auto-translated] "Password"
      password: "Kata sandi",
      // [Auto-translated] "Range"
      range: "Lingkup",
      // [Auto-translated] "Phone Number"
      tel: "Nomor Telepon",
      // [Auto-translated] "Text"
      text: "Teks",
      // [Auto-translated] "Time"
      time: "Waktu",
      // [Auto-translated] "URL"
      url: "URL",
      // [Auto-translated] "Week"
      week: "Minggu"
    },
    sliderType: {
      // [Auto-translated] "Single-Value"
      single: "Nilai Tunggal",
      // [Auto-translated] "Range"
      range: "Lingkup"
    },
    tooltipVisibility: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Always"
      always: "Selalu",
      // [Auto-translated] "Never"
      never: "Tidak pernah"
    },
    notificationType: {
      // [Auto-translated] "Error"
      error: "Kesalahan",
      // [Auto-translated] "Warning"
      warning: "Peringatan",
      // [Auto-translated] "Informational"
      info: "Informasi"
    },
    autocomplete: {
      // [Auto-translated] "Full Name"
      name: "Nama lengkap",
      // [Auto-translated] "Prefix"
      "honorific-prefix": "Awalan",
      // [Auto-translated] "First Name"
      "given-name": "Nama depan",
      // [Auto-translated] "Middle Name"
      "additional-name": "Nama tengah",
      // [Auto-translated] "Last Name"
      "family-name": "Nama Belakang",
      // [Auto-translated] "Suffix"
      "honorific-suffix": "Akhiran",
      // [Auto-translated] "Nickname"
      nickname: "Nickname",
      // [Auto-translated] "Job Title"
      "organization-title": "Judul Pekerjaan",
      // [Auto-translated] "User Name"
      username: "Nama pengguna",
      // [Auto-translated] "New Password"
      "new-password": "Kata sandi baru",
      // [Auto-translated] "Current Password"
      "current-password": "Kata Sandi Saat Ini",
      // [Auto-translated] "Organization Name"
      organization: "Nama Organisasi",
      // [Auto-translated] "Full Street Address"
      "street-address": "Alamat Jalan Lengkap",
      // [Auto-translated] "Address Line 1"
      "address-line1": "Baris Alamat 1",
      // [Auto-translated] "Address Line 2"
      "address-line2": "Baris Alamat 2",
      // [Auto-translated] "Address Line 3"
      "address-line3": "Baris Alamat 3",
      // [Auto-translated] "Level 4 Address"
      "address-level4": "Alamat Level 4",
      // [Auto-translated] "Level 3 Address"
      "address-level3": "Alamat Level 3",
      // [Auto-translated] "Level 2 Address"
      "address-level2": "Alamat Level 2",
      // [Auto-translated] "Level 1 Address"
      "address-level1": "Alamat Level 1",
      // [Auto-translated] "Country Code"
      country: "Kode Negara",
      // [Auto-translated] "Country Name"
      "country-name": "Nama Negara",
      // [Auto-translated] "Postal Code"
      "postal-code": "Kode Pos",
      // [Auto-translated] "Cardholder Name"
      "cc-name": "Nama Pemegang Kartu",
      // [Auto-translated] "Cardholder First Name"
      "cc-given-name": "Nama Depan Pemegang Kartu",
      // [Auto-translated] "Cardholder Middle Name"
      "cc-additional-name": "Nama Tengah Pemegang Kartu",
      // [Auto-translated] "Cardholder Last Name"
      "cc-family-name": "Nama Belakang Pemegang Kartu",
      // [Auto-translated] "Credit Card Number"
      "cc-number": "Nomor Kartu Kredit",
      // [Auto-translated] "Expiration Date"
      "cc-exp": "Tanggal kedaluwarsa",
      // [Auto-translated] "Expiration Month"
      "cc-exp-month": "Bulan Kedaluwarsa",
      // [Auto-translated] "Expiration Year"
      "cc-exp-year": "Tahun Kedaluwarsa",
      // [Auto-translated] "Card Security Code"
      "cc-csc": "Kode Keamanan Kartu",
      // [Auto-translated] "Credit Card Type"
      "cc-type": "Jenis Kartu Kredit",
      // [Auto-translated] "Transaction Currency"
      "transaction-currency": "Mata Uang Transaksi",
      // [Auto-translated] "Transaction Amount"
      "transaction-amount": "Jumlah Transaksi",
      // [Auto-translated] "Preferred Language"
      language: "Bahasa Pilihan",
      // [Auto-translated] "Birthday"
      bday: "Ulang tahun",
      // [Auto-translated] "Birthday Day"
      "bday-day": "Hari Ulang Tahun",
      // [Auto-translated] "Birthday Month"
      "bday-month": "Bulan Ulang Tahun",
      // [Auto-translated] "Birthday Year"
      "bday-year": "Tahun Ulang Tahun",
      // [Auto-translated] "Gender"
      sex: "Jenis kelamin",
      // [Auto-translated] "Website URL"
      url: "URL situs web",
      // [Auto-translated] "Profile Photo"
      photo: "Foto Profil",
      // [Auto-translated] "Telephone Number"
      tel: "Nomor Telepon",
      // [Auto-translated] "Country Code for Phone"
      "tel-country-code": "Kode Negara untuk Telepon",
      // [Auto-translated] "National Telephone Number"
      "tel-national": "Nomor Telepon Nasional",
      // [Auto-translated] "Area Code"
      "tel-area-code": "Kode Area",
      // [Auto-translated] "Local Phone Number"
      "tel-local": "Nomor Telepon Lokal",
      // [Auto-translated] "Local Phone Prefix"
      "tel-local-prefix": "Awalan Telepon Lokal",
      // [Auto-translated] "Local Phone Suffix"
      "tel-local-suffix": "Akhiran Telepon Lokal",
      // [Auto-translated] "Phone Extension"
      "tel-extension": "Ekstensi Telepon",
      // [Auto-translated] "Email Address"
      email: "Alamat Email",
      // [Auto-translated] "Instant Messaging Protocol"
      impp: "Protokol Pesan Instan"
    },
    maskType: {
      // [Auto-translated] "None"
      none: "Tidak",
      // [Auto-translated] "Pattern"
      pattern: "Pola",
      // [Auto-translated] "Numeric"
      numeric: "Numerik",
      // [Auto-translated] "Date and Time"
      datetime: "Tanggal dan Waktu",
      // [Auto-translated] "Currency"
      currency: "Mata uang"
    },
    inputTextAlignment: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Left"
      left: "Kiri",
      // [Auto-translated] "Right"
      right: "Kanan"
    },
    // "All"
    all: "semua",
    // "Page"
    page: "halaman",
    // "Survey"
    survey: "survei",
    // "When switching to the next page"
    onNextPage: "pada halaman selanjutnya",
    // "After an answer is changed"
    onValueChanged: "saat nilai berubah",
    // [Auto-translated] "Before an answer is changed"
    onValueChanging: "Sebelum jawaban diubah",
    questionsOnPageMode: {
      // [Auto-translated] "Original structure"
      standard: "Struktur asli",
      // [Auto-translated] "Show all questions on one page"
      singlePage: "Tampilkan semua pertanyaan di satu halaman",
      // [Auto-translated] "Show single question per page"
      questionPerPage: "Tampilkan satu pertanyaan per halaman",
      // [Auto-translated] "Show single input field per page"
      inputPerPage: "Tampilkan satu bidang input per halaman"
    },
    // [Auto-translated] "No preview"
    noPreview: "Tidak ada pratinjau",
    // [Auto-translated] "Show all questions"
    showAllQuestions: "Tampilkan semua pertanyaan",
    // [Auto-translated] "Show answered questions only"
    showAnsweredQuestions: "Tampilkan pertanyaan yang sudah terjawab saja",
    // [Auto-translated] "Show all questions"
    allQuestions: "Tampilkan semua pertanyaan",
    // [Auto-translated] "Show answered questions only"
    answeredQuestions: "Tampilkan pertanyaan yang dijawab saja",
    // [Auto-translated] "Completed pages"
    pages: "Halaman lengkap",
    // [Auto-translated] "Answered questions"
    questions: "Pertanyaan yang dijawab",
    // [Auto-translated] "Answered required questions"
    requiredQuestions: "Menjawab pertanyaan yang diperlukan",
    // [Auto-translated] "Valid answers"
    correctQuestions: "Jawaban yang valid",
    // [Auto-translated] "Completed pages (button UI)"
    buttons: "Halaman selesai (tombol UI)",
    // [Auto-translated] "Under the input field"
    underInput: "Di bawah bidang input",
    // [Auto-translated] "Under the question title"
    underTitle: "Di bawah judul pertanyaan",
    // [Auto-translated] "On lost focus"
    onBlur: "Tentang fokus yang hilang",
    // [Auto-translated] "While typing"
    onTyping: "Saat mengetik",
    // [Auto-translated] "Under the row"
    underRow: "Di bawah baris",
    // [Auto-translated] "Under the row, display one section only"
    underRowSingle: "Di bawah baris, tampilkan satu bagian saja",
    // "Auto"
    auto: "Auto",
    showNavigationButtons: {
      // [Auto-translated] "Hidden"
      none: "Sembunyi"
    },
    timerInfoMode: {
      // "Both"
      combined: "Keduanya"
    },
    addRowButtonLocation: {
      // [Auto-translated] "Based on matrix layout"
      default: "Berdasarkan tata letak matriks"
    },
    panelsState: {
      // [Auto-translated] "Locked"
      default: "Terkunci",
      // [Auto-translated] "Collapse all"
      collapsed: "Ciutkan semua",
      // [Auto-translated] "Expand all"
      expanded: "Perluas semua",
      // [Auto-translated] "First expanded"
      firstExpanded: "Pertama diperluas"
    },
    widthMode: {
      // [Auto-translated] "Static"
      static: "Statis",
      // [Auto-translated] "Responsive"
      responsive: "Responsif"
    },
    contentMode: {
      // [Auto-translated] "Image"
      image: "Citra",
      // [Auto-translated] "Video"
      video: "Video",
      // [Auto-translated] "YouTube"
      youtube: "YouTube"
    },
    displayMode: {
      // [Auto-translated] "Buttons"
      buttons: "Tombol",
      // [Auto-translated] "Dropdown"
      dropdown: "Tarik-turun"
    },
    rateColorMode: {
      // [Auto-translated] "Default"
      default: "Default",
      // [Auto-translated] "Scale"
      scale: "Sisik"
    },
    scaleColorMode: {
      // [Auto-translated] "Monochrome"
      monochrome: "Monokrom",
      // [Auto-translated] "Colored"
      colored: "Berwarna"
    },
    autoGenerate: {
      // [Auto-translated] "Auto-generate"
      "true": "Hasilkan otomatis",
      // [Auto-translated] "Manual"
      "false": "Manual"
    },
    rateType: {
      // [Auto-translated] "Labels"
      labels: "Label",
      // [Auto-translated] "Stars"
      stars: "Bintang",
      // [Auto-translated] "Smileys"
      smileys: "Smiley"
    },
    state: {
      // [Auto-translated] "Locked"
      default: "Terkunci"
    },
    showQuestionNumbers: {
      // [Auto-translated] "Auto-numbering"
      default: "Penomoran otomatis",
      // [Auto-translated] "Auto-numbering"
      on: "Penomoran otomatis",
      // [Auto-translated] "Reset on each page"
      onPage: "Setel ulang di setiap halaman",
      // [Auto-translated] "Reset on each panel"
      onpanel: "Atur ulang di setiap panel",
      // [Auto-translated] "Reset on each panel"
      onPanel: "Setel ulang pada setiap panel",
      // [Auto-translated] "Recursive numbering"
      recursive: "Penomoran rekursif",
      // [Auto-translated] "Continue across the survey"
      onSurvey: "Lanjutkan di seluruh survei",
      // [Auto-translated] "No numbering"
      off: "Tanpa penomoran"
    },
    descriptionLocation: {
      // [Auto-translated] "Under the question title"
      underTitle: "Di bawah judul pertanyaan",
      // [Auto-translated] "Under the input field"
      underInput: "Di bawah bidang input"
    },
    selectToRankAreasLayout: {
      // [Auto-translated] "Next to choices"
      horizontal: "Di samping pilihan",
      // [Auto-translated] "Above choices"
      vertical: "Pilihan di atas"
    },
    displayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desimal",
      // [Auto-translated] "Currency"
      currency: "Mata uang",
      // [Auto-translated] "Percentage"
      percent: "Persentase",
      // [Auto-translated] "Date"
      date: "Tanggal"
    },
    totalDisplayStyle: {
      // [Auto-translated] "Decimal"
      decimal: "Desimal",
      // [Auto-translated] "Currency"
      currency: "Mata uang",
      // [Auto-translated] "Percentage"
      percent: "Persentase",
      // [Auto-translated] "Date"
      date: "Tanggal"
    },
    rowOrder: {
      // [Auto-translated] "Original"
      initial: "Asli"
    },
    questionOrder: {
      // [Auto-translated] "Original"
      initial: "Asli"
    },
    progressBarLocation: {
      // [Auto-translated] "Top"
      top: "Puncak",
      // [Auto-translated] "Bottom"
      bottom: "Dasar",
      // [Auto-translated] "Top and bottom"
      topbottom: "Atas dan bawah",
      // [Auto-translated] "Above the header"
      aboveheader: "Di atas header",
      // [Auto-translated] "Below the header"
      belowheader: "Di bawah header",
      // [Auto-translated] "Hidden"
      off: "Sembunyi"
    },
    // [Auto-translated] "Sum"
    sum: "Jumlah",
    // [Auto-translated] "Count"
    count: "Hitung",
    // [Auto-translated] "Min"
    min: "Min",
    // [Auto-translated] "Max"
    max: "Maks",
    // [Auto-translated] "Avg"
    avg: "Avg",
    searchMode: {
      // [Auto-translated] "Contains"
      contains: "Berisi",
      // [Auto-translated] "Starts with"
      startsWith: "Dimulai dengan"
    },
    backgroundImageFit: {
      // [Auto-translated] "Auto"
      auto: "Auto",
      // [Auto-translated] "Cover"
      cover: "Menutupi",
      // [Auto-translated] "Contain"
      contain: "Mengandung",
      // [Auto-translated] "Stretch"
      fill: "Merentangkan",
      // [Auto-translated] "Tile"
      tile: "Ubin"
    },
    backgroundImageAttachment: {
      // [Auto-translated] "Fixed"
      fixed: "Tetap",
      // [Auto-translated] "Scroll"
      scroll: "Gulir"
    },
    headerView: {
      // [Auto-translated] "Basic"
      basic: "Dasar",
      // [Auto-translated] "Advanced"
      advanced: "Maju"
    },
    inheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Sama seperti survei",
      // [Auto-translated] "Same as container"
      container: "Sama seperti kontainer"
    },
    backgroundColorSwitch: {
      // [Auto-translated] "None"
      none: "Tidak",
      // [Auto-translated] "Accent color"
      accentColor: "Warna aksen",
      // [Auto-translated] "Custom"
      custom: "Adat"
    },
    colorPalette: {
      // [Auto-translated] "Light"
      light: "Ringan",
      // [Auto-translated] "Dark"
      dark: "Gelap"
    },
    isPanelless: {
      // [Auto-translated] "Default"
      "false": "Default",
      // [Auto-translated] "Without Panels"
      "true": "Tanpa Panel"
    },
    progressBarInheritWidthFrom: {
      // [Auto-translated] "Same as survey"
      survey: "Sama seperti survei",
      // [Auto-translated] "Same as container"
      container: "Sama seperti wadah"
    }
  },
  // Operators
  op: {
    // "Empty"
    empty: "kosong",
    // "Not empty"
    notempty: "tidak kosong",
    // "Equals"
    equal: "sama dengan",
    // "Does not equal"
    notequal: "tidak sama dengan",
    // "Contains"
    contains: "mengandung",
    // "Does not contain"
    notcontains: "tidak mengandung",
    // [Auto-translated] "Any of"
    anyof: "Salah satu dari",
    // [Auto-translated] "All of"
    allof: "Semua",
    // "Greater than"
    greater: "lebih besar",
    // "Less than"
    less: "lebih kecil",
    // "Greater than or equal to"
    greaterorequal: "lebih besar atau sama dengan",
    // "Less than or equal to"
    lessorequal: "lebih kecil atau sama dengan",
    // [Auto-translated] "and"
    and: "dan",
    // [Auto-translated] "or"
    or: "atau"
  },
  // Embed window
  ew: {
    // "Use Angular version"
    angular: "Gunakan versi Angular",
    // "Use jQuery version"
    jquery: "Gunakan versi JQuery",
    // "Use Knockout version"
    knockout: "Gunakan versi Knockout",
    // "Use React version"
    react: "Gunakan versi React",
    // "Use Vue version"
    vue: "Gunakan versi Vue",
    // "For bootstrap framework"
    bootstrap: "Untuk framework bootstrap",
    // [Auto-translated] "Modern theme"
    modern: "Tema modern",
    // [Auto-translated] "Default theme"
    default: "Tema default",
    // [Auto-translated] "Orange theme"
    orange: "Tema oranye",
    // [Auto-translated] "Darkblue theme"
    darkblue: "Tema biru tua",
    // [Auto-translated] "Darkrose theme"
    darkrose: "Tema Darkrose",
    // [Auto-translated] "Stone theme"
    stone: "Tema batu",
    // [Auto-translated] "Winter theme"
    winter: "Tema musim dingin",
    // [Auto-translated] "Winter-Stone theme"
    winterstone: "Tema Winter-Stone",
    // "Show survey on a page"
    showOnPage: "Tampilkan survei pada sebuah halaman",
    // "Show survey in a window"
    showInWindow: "Tampilkan survei pada sebuah jendela",
    // "Load Survey JSON from server"
    loadFromServer: "Muat survei JSON dari server",
    // "Scripts and styles"
    titleScript: "Skrip dan gaya",
    // "HTML"
    titleHtml: "HTML",
    // "JavaScript"
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    // "Select the page to test it"
    selectPage: "Pilih halaman untuk dicoba:",
    // "Show invisible elements"
    showInvisibleElements: "Tampilkan elemen tak terlihat",
    // [Auto-translated] "Hide invisible elements"
    hideInvisibleElements: "Sembunyikan elemen tak terlihat",
    // [Auto-translated] "Previous"
    prevPage: "Mantan",
    // [Auto-translated] "Next"
    nextPage: "Depan"
  },
  validators: {
    // "Answer count"
    answercountvalidator: "jumlah jawaban",
    // "Email"
    emailvalidator: "surel",
    // "Expression"
    expressionvalidator: "ekspresi",
    // "Number"
    numericvalidator: "numerik",
    // "Regex"
    regexvalidator: "ekspresi reguler",
    // "Text"
    textvalidator: "teks"
  },
  triggers: {
    // "Complete survey"
    completetrigger: "selesaikan survei",
    // "Set answer"
    setvaluetrigger: "atur nilai",
    // "Copy answer"
    copyvaluetrigger: "salin nilai",
    // [Auto-translated] "Skip to question"
    skiptrigger: "Lanjut ke pertanyaan",
    // "Run expression"
    runexpressiontrigger: "jalankan ekspresi",
    // "change visibility (deprecated)"
    visibletrigger: "ubah visibilitas"
  },
  peplaceholder: {
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Contoh: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Contoh: mm / dd / yyyy HH: MM: ss"
    },
    currencymask: {
      // "Ex.: $"
      prefix: "Contoh.: $",
      // "Ex.: USD"
      suffix: "Contoh: USD"
    },
    panelbase: {
      // [Auto-translated] "Ex.: 200px"
      questionTitleWidth: "Contoh: 200px"
    },
    panellayoutcolumn: {
      // "Ex.: 30%"
      effectiveWidth: "Contoh: 30%",
      // "Ex.: 200px"
      questionTitleWidth: "Contoh: 200px"
    }
  },
  pehelp: {
    panel: {
      // "A panel ID that is not visible to respondents."
      name: "ID panel yang tidak terlihat oleh responden.",
      // [Auto-translated] "Type a panel subtitle."
      description: "Ketik subtitle panel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas panel.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      // [Auto-translated] "Applies to all questions within this panel. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default). "
      questionTitleLocation: "Berlaku untuk semua pertanyaan dalam panel ini. Saat diatur ke \"Tersembunyi\", itu juga menyembunyikan deskripsi pertanyaan. Jika Anda ingin mengganti pengaturan ini, tentukan aturan perataan judul untuk setiap pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default). ",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Mengatur lebar yang konsisten untuk judul pertanyaan bila disejajarkan di sebelah kiri kotak pertanyaan. Menerima nilai CSS (px, %, in, pt, dll.).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan semua pertanyaan dalam panel. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei.",
      // [Auto-translated] "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      questionOrder: "Menjaga urutan pertanyaan asli atau mengacaknya. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei.",
      // "Repositions the panel to the end of a selected page."
      page: "Memposisikan ulang panel ke akhir halaman yang dipilih.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      innerIndent: "Menambahkan spasi atau margin antara konten panel dan batas kiri kotak panel.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Batalkan pilihan untuk menampilkan panel dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika panel adalah elemen pertama dalam formulir Anda.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Pilih dari: \"Diperluas\" - panel ditampilkan secara penuh dan dapat diciutkan; \"Collapsed\" - panel hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - panel ditampilkan secara penuh dan tidak dapat diciutkan.",
      // [Auto-translated] "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Mengatur lebar panel sebanding dengan elemen survei lain di garis yang sama. Menerima nilai CSS (px, %, in, pt, dll.).",
      // [Auto-translated] "Assigns numbers to questions nested within this panel."
      showQuestionNumbers: "Menetapkan nomor untuk pertanyaan yang bersarang dalam panel ini.",
      // [Auto-translated] "Specifies how many columns this panel spans within the grid layout."
      effectiveColSpan: "Menentukan berapa banyak kolom panel ini dalam tata letak kisi.",
      // [Auto-translated] "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tabel ini memungkinkan Anda mengonfigurasi setiap kolom kisi dalam panel. Ini secara otomatis mengatur persentase lebar untuk setiap kolom berdasarkan jumlah maksimum elemen dalam satu baris. Untuk menyesuaikan tata letak kisi, sesuaikan nilai ini secara manual dan tentukan lebar judul untuk semua pertanyaan di setiap kolom."
    },
    paneldynamic: {
      // "A panel ID that is not visible to respondents."
      name: "ID panel yang tidak terlihat oleh responden.",
      // "Type a panel subtitle."
      description: "Ketik subtitle panel.",
      // "Use the magic wand icon to set a conditional rule that determines panel visibility."
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas panel.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel."
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk panel.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      // "Applies to all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateQuestionTitleLocation: "Berlaku untuk semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      // "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      templateQuestionTitleWidth: "Mengatur lebar yang konsisten untuk judul pertanyaan saat disejajarkan ke kiri kotak pertanyaan mereka. Menerima nilai CSS (px, %, in, pt, dll.).",
      // "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      templateErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      // "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting."
      errorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan semua pertanyaan dalam panel. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei.",
      // "Repositions the panel to the end of a selected page."
      page: "Memposisikan ulang panel ke akhir halaman yang dipilih.",
      // [Auto-translated] "Adds space or margin between the panel content and the left border of the panel box."
      indent: "Menambahkan ruang atau margin antara konten panel dan batas kiri kotak panel.",
      // "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form."
      startWithNewLine: "Batalkan pilihan untuk menampilkan panel dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika panel adalah elemen pertama dalam formulir Anda.",
      // "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed."
      state: "Pilih dari: \"Diperluas\" - panel ditampilkan secara penuh dan dapat diciutkan; \"Collapsed\" - panel hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - panel ditampilkan secara penuh dan tidak dapat diciutkan.",
      // "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Mengatur lebar panel secara proporsional dengan elemen survei lainnya di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.).",
      // "Type in a template for entry titles. Use {panelIndex} for the entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTitle: "Ketik template untuk judul panel dinamis. Gunakan {panelIndex} untuk posisi umum panel dan {visiblePanelIndex} untuk urutannya di antara panel yang terlihat. Masukkan tempat penampung ini ke dalam pola untuk menambahkan penomoran otomatis.",
      // "Type in a template for tab titles. Use {panelIndex} for an entry's general position and {visiblePanelIndex} for its order among visible entries. Insert these placeholders into the pattern to add automatic numbering."
      templateTabTitle: "Ketik templat untuk judul tab. Gunakan {panelIndex} untuk posisi umum panel dan {visiblePanelIndex} untuk urutannya di antara panel yang terlihat. Masukkan tempat penampung ini ke dalam pola untuk menambahkan penomoran otomatis.",
      // "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value."
      tabTitlePlaceholder: "Teks fallback untuk judul tab yang berlaku saat pola judul tab tidak menghasilkan nilai yang berarti.",
      // "This setting allows you to control the visibility of individual entries within the dynamic panel. Use the `{panel}` placeholder to reference the current entry in your expression."
      templateVisibleIf: "Pengaturan ini memungkinkan Anda mengontrol visibilitas masing-masing panel dalam panel dinamis. Gunakan placeholder '{panel}' untuk mereferensikan panel saat ini dalam ekspresi Anda.",
      // "This setting is automatically inherited by all questions within this dynamic panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Setelan ini secara otomatis diwarisi oleh semua pertanyaan dalam panel ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Teratas\" secara default).",
      // "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)."
      descriptionLocation: "Opsi \"Warisi\" menerapkan setelan tingkat halaman (jika ditetapkan) atau tingkat survei (\"Di bawah judul panel\" secara default).",
      // "Defines the position of a newly added entry. By default, new entries are added to the end. Select \"Next\" to insert a new entry after the current one."
      newPanelPosition: "Menentukan posisi panel yang baru ditambahkan. Secara default, panel baru ditambahkan ke akhir. Pilih \"Next\" untuk memasukkan panel baru setelah yang sekarang.",
      // [Auto-translated] "Duplicates answers from the last entry and assigns them to the next added entry."
      copyDefaultValueFromLastEntry: "Menduplikasi jawaban dari entri terakhir dan menetapkannya ke entri tambahan berikutnya.",
      // "Reference a question name to require a user to provide a unique response for this question in each entry."
      keyName: "Rujuk nama pertanyaan untuk mengharuskan pengguna memberikan respons unik untuk pertanyaan ini di setiap panel.",
      // [Auto-translated] "Triggers a confirmation prompt before removing an entry."
      confirmDelete: "Memicu prompt konfirmasi sebelum menghapus entri."
    },
    matrixdynamic: {
      // [Auto-translated] "Triggers a confirmation prompt before removing a row."
      confirmDelete: "Memicu perintah konfirmasi sebelum menghapus baris.",
      // [Auto-translated] "Automatically expands the detail section when a new row is added to the matrix."
      detailPanelShowOnAdding: "Secara otomatis memperluas bagian detail saat baris baru ditambahkan ke matriks."
    },
    // "Duplicates answers from the last row and assigns them to the next added dynamic row."
    copyDefaultValueFromLastEntry: "Menduplikasi jawaban dari baris terakhir dan menetapkannya ke baris dinamis berikutnya yang ditambahkan.",
    // [Auto-translated] "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input."
    defaultValueExpression: "Pengaturan ini memungkinkan Anda menetapkan nilai jawaban default berdasarkan ekspresi. Ekspresi dapat mencakup perhitungan dasar - '{q1_id} + {q2_id}', ekspresi Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll. Nilai yang ditentukan oleh ekspresi ini berfungsi sebagai nilai default awal yang dapat ditimpa oleh input manual responden.",
    // "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)."
    resetValueIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan kapan input responden diatur ulang ke nilai berdasarkan \"Ekspresi nilai default\" atau \"Atur ekspresi nilai\" atau ke nilai \"Jawaban default\" (jika salah satu diatur).",
    // "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response."
    setValueIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan kapan harus menjalankan \"Atur ekspresi nilai\" dan secara dinamis menetapkan nilai yang dihasilkan sebagai respons.",
    // "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input."
    setValueExpression: "Tentukan ekspresi yang menentukan nilai yang akan ditetapkan saat kondisi dalam aturan \"Tetapkan nilai jika\" terpenuhi. Ekspresi dapat mencakup perhitungan dasar - '{q1_id} + {q2_id}', ekspresi Boolean, seperti '{age} > 60', dan fungsi: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll. Nilai yang ditentukan oleh ekspresi ini dapat ditimpa oleh input manual responden.",
    // "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field."
    gridLayoutEnabled: "Pembuat Survei memungkinkan Anda menyesuaikan lebar sebaris elemen formulir secara manual untuk mengontrol tata letak. Jika ini tidak menghasilkan hasil yang diinginkan, Anda dapat mengaktifkan tata letak kisi, yang menyusun elemen bentuk menggunakan sistem berbasis kolom. Untuk mengonfigurasi kolom tata letak, pilih halaman atau panel dan gunakan tabel \"Pengaturan Pertanyaan\" → \"Kolom kisi\". Untuk menyesuaikan berapa banyak kolom rentang pertanyaan, pilih dan atur nilai yang diinginkan di bidang \"Tata Letak\" → \"Rentang kolom\".",
    question: {
      // "A question ID that is not visible to respondents."
      name: "ID pertanyaan yang tidak terlihat oleh responden.",
      // "Type a question subtitle."
      description: "Ketik subtitle pertanyaan.",
      // "Use the magic wand icon to set a conditional rule that determines question visibility."
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas pertanyaan.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question."
      enableIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menonaktifkan mode baca-saja untuk pertanyaan.",
      // "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer."
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah survei maju atau dikirim kecuali pertanyaan menerima jawaban.",
      // [Auto-translated] "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form."
      startWithNewLine: "Batalkan pilihan untuk menampilkan pertanyaan dalam satu baris dengan pertanyaan atau panel sebelumnya. Pengaturan tidak berlaku jika pertanyaan adalah elemen pertama dalam formulir Anda.",
      // "Repositions the question to the end of a selected page."
      page: "Memposisikan ulang pertanyaan ke akhir halaman yang dipilih.",
      // "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed."
      state: "Pilih dari: \"Diperluas\" - kotak pertanyaan ditampilkan secara penuh dan dapat diciutkan; \"Diciutkan\" - kotak pertanyaan hanya menampilkan judul dan deskripsi dan dapat diperluas; \"Terkunci\" - kotak pertanyaan ditampilkan secara penuh dan tidak dapat diciutkan.",
      // "Overrides title alignment rules defined on a panel, page, or survey level. When set to \"Hidden\", it also hides question descriptions. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)."
      titleLocation: "Mengganti aturan penyelarasan judul yang ditentukan pada tingkat panel, halaman, atau survei. Opsi \"Warisi\" menerapkan pengaturan tingkat yang lebih tinggi (jika diatur) atau pengaturan tingkat survei (\"Atas\" secara default).",
      // "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)."
      descriptionLocation: "Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Di bawah judul pertanyaan\" secara default).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      errorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default).",
      // "Adds space or margin between the question content and the left border of the question box."
      indent: "Menambahkan spasi atau margin antara konten pertanyaan dan batas kiri kotak pertanyaan.",
      // "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)."
      width: "Mengatur lebar pertanyaan secara proporsional dengan elemen survei lain di baris yang sama. Menerima nilai CSS (px, %, in, pt, dll.).",
      // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)."
      textUpdateMode: "Pilih dari: \"On lost focus\" - nilai diperbarui ketika bidang input kehilangan fokus; \"Saat mengetik\" - nilainya diperbarui secara real-time, saat pengguna mengetik. Opsi \"Warisi\" menerapkan pengaturan tingkat survei (\"Pada fokus yang hilang\" secara default).",
      // [Auto-translated] "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data."
      url: "Anda dapat menggunakan layanan web apa pun sebagai sumber data untuk pertanyaan pilihan ganda. Untuk mengisi nilai pilihan, masukkan URL layanan yang menyediakan data.",
      // [Auto-translated] "A comparison operation used to filter the drop-down list."
      searchMode: "Operasi perbandingan yang digunakan untuk memfilter daftar turun bawah.",
      // [Auto-translated] "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip."
      textWrapEnabled: "Teks panjang dalam opsi pilihan akan secara otomatis menghasilkan jeda baris agar sesuai dengan menu tarik-turun. Batalkan pilihan jika Anda ingin teks dipotong.",
      // [Auto-translated] "Specifies how many columns this question spans within the grid layout."
      effectiveColSpan: "Menentukan berapa banyak kolom yang mencakup pertanyaan ini dalam tata letak kisi."
    },
    surveyvalidator: {
      // "Use the magic wand icon to define when the question's value is considered valid."
      expression: "Gunakan ikon tongkat ajaib untuk menentukan kapan nilai pertanyaan dianggap valid.",
      // [Auto-translated] "Errors block progress until resolved. Warnings highlight issues but allow to continue. Informational notes offer additional context or neutral guidance. When using warnings or informational notes, we recommend enabling immediate validation: \"Survey\" → \"Validation\" → \"Run validation\" → \"After an answer has changed\"."
      notificationType: "Kesalahan memblokir kemajuan hingga teratasi. Peringatan menyoroti masalah tetapi memungkinkan untuk melanjutkan. Catatan informasi menawarkan konteks tambahan atau panduan netral. Saat menggunakan peringatan atau catatan informasi, sebaiknya aktifkan validasi segera: \"Survei\" → \"Validasi\" → \"Jalankan validasi\" → \"Setelah jawaban berubah\"."
    },
    signaturepad: {
      // "Sets the width of the displayed signature area and the resulting image."
      signatureWidth: "Mengatur lebar area tanda tangan yang ditampilkan dan gambar yang dihasilkan.",
      // "Sets the height of the displayed signature area and the resulting image."
      signatureHeight: "Mengatur ketinggian area tanda tangan yang ditampilkan dan gambar yang dihasilkan.",
      // "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions."
      signatureAutoScaleEnabled: "Pilih apakah Anda ingin area tanda tangan mengisi semua ruang yang tersedia di dalam kotak pertanyaan sambil mempertahankan rasio aspek default 3:2. Saat nilai lebar dan tinggi kustom ditetapkan, pengaturan akan mempertahankan rasio aspek dimensi ini."
    },
    file: {
      // "Specifies the display height of uploaded images in the preview and the actual height of images taken with the camera. In single file upload mode, the display height is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageHeight: "Menentukan tinggi tampilan gambar yang diunggah dalam pratinjau dan tinggi sebenarnya gambar yang diambil dengan kamera. Dalam mode unggah file tunggal, tinggi tampilan dibatasi oleh area pratinjau; Dalam mode unggah beberapa file, itu dibatasi oleh area thumbnail.",
      // "Specifies the display width of uploaded images in the preview and the actual width of images taken with the camera. In single file upload mode, the display width is limited by the preview area; in multiple file upload mode, it is limited by the thumbnail area."
      imageWidth: "Menentukan lebar tampilan gambar yang diunggah dalam pratinjau dan lebar sebenarnya gambar yang diambil dengan kamera. Dalam mode unggah file tunggal, lebar tampilan dibatasi oleh area pratinjau; Dalam mode unggah beberapa file, itu dibatasi oleh area thumbnail.",
      // [Auto-translated] "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead."
      allowImagesPreview: "Menampilkan pratinjau thumbnail untuk file yang diunggah jika memungkinkan. Batalkan pilihan jika Anda ingin menampilkan ikon file sebagai gantinya."
    },
    image: {
      // "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided."
      contentMode: "Opsi \"Otomatis\" secara otomatis menentukan mode yang sesuai untuk tampilan - Gambar, Video, atau YouTube - berdasarkan URL sumber yang disediakan."
    },
    imagepicker: {
      // [Auto-translated] "Overrides the minimum and maximum height values."
      imageHeight: "Mengganti nilai tinggi minimum dan maksimum.",
      // [Auto-translated] "Overrides the minimum and maximum width values."
      imageWidth: "Mengganti nilai lebar minimum dan maksimum.",
      // [Auto-translated] "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents."
      choices: "\"Nilai\" berfungsi sebagai ID item yang digunakan dalam aturan bersyarat; \"Teks\" ditampilkan kepada responden.",
      // "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options."
      contentMode: "Pilih antara \"Gambar\" dan \"Video\" untuk mengatur mode konten pemilih media. Jika \"Gambar\" dipilih, pastikan bahwa semua opsi yang disediakan adalah file gambar dalam format berikut: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Demikian pula, jika \"Video\" dipilih, pastikan bahwa semua opsi adalah tautan langsung ke file video dalam format berikut: MP4, MOV, WMV, FLV, AVI, MKV. Perhatikan bahwa tautan YouTube tidak didukung untuk opsi video."
    },
    text: {
      // [Auto-translated] "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to \"Validation\" → \"Maximum character limit\"."
      size: "Pengaturan ini hanya mengubah ukuran bidang input dan tidak memengaruhi lebar kotak pertanyaan. Untuk membatasi panjang input yang diterima, buka \"Validasi\" → \"Batas karakter maksimum\"."
    },
    comment: {
      // [Auto-translated] "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Mengatur jumlah baris yang ditampilkan di bidang input. Jika input memakan lebih banyak baris, bilah gulir akan muncul."
    },
    // survey templates
    survey: {
      // "Select if you want to prevent respondents from filling out your survey."
      readOnly: "Pilih jika Anda ingin mencegah responden mengisi survei Anda.",
      // "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header."
      progressBarLocation: "Mengatur lokasi bilah progres. Nilai \"Otomatis\" menampilkan bilah kemajuan di atas atau di bawah header survei."
    },
    matrixdropdowncolumn: {
      // "A column ID that is not visible to respondents."
      name: "ID kolom yang tidak terlihat oleh responden.",
      // "When enabled for a column, a respondent is required to provide a unique response for each question within this column."
      isUnique: "Saat diaktifkan untuk kolom, responden diharuskan memberikan respons unik untuk setiap pertanyaan dalam kolom ini.",
      // "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear."
      rows: "Mengatur jumlah baris yang ditampilkan di bidang input. Jika input mengambil lebih banyak baris, bilah gulir akan muncul.",
      // "Use the magic wand icon to set a conditional rule that determines column visibility."
      visibleIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan visibilitas kolom.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column."
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk kolom.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      // "When selected, creates an individual column for each choice option."
      showInMultipleColumns: "Saat dipilih, buat kolom individual untuk setiap opsi pilihan.",
      // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix."
      colCount: "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris. Saat diatur ke -1, nilai aktual diwarisi dari properti \"Jumlah kolom berlapis\" dari matriks induk."
    },
    slider: {
      // "The lowest number that users can select."
      min: "Angka terendah yang dapat dipilih pengguna.",
      // "The highest number that users can select."
      max: "Angka tertinggi yang dapat dipilih pengguna.",
      // "The interval between selectable scale values. For example, a step of 5 will allow users to select 0, 5, 10, etc."
      step: "Interval antara nilai skala yang dapat dipilih. Misalnya, langkah 5 akan memungkinkan pengguna untuk memilih 0, 5, 10, dll.",
      // "The minimum distance between the slider thumbs a user can set."
      minRangeLength: "Jarak minimum antara ibu jari penggeser yang dapat diatur pengguna.",
      // "The maximum distance between the slider thumbs a user can set."
      maxRangeLength: "Jarak maksimum antara ibu jari penggeser yang dapat diatur pengguna.",
      // "Specifies how many scale labels to generate. A value of -1 means the number is calculated automatically based on the Min value and Max value."
      labelCount: "Menentukan berapa banyak label skala yang akan dihasilkan. Nilai -1 berarti angka dihitung secara otomatis berdasarkan nilai Min dan nilai Maks.",
      // "Use `{0}` as a placeholder for the actual value."
      labelFormat: "Gunakan '{0}' sebagai placeholder untuk nilai aktual.",
      // "Allows you to define custom labels at specific values and optionally assign corresponding text to them (e.g., 0 = \"Poor\", 100 = \"Excellent\")."
      customLabels: "Memungkinkan Anda untuk menentukan label kustom pada nilai tertentu dan secara opsional menetapkan teks yang sesuai untuk label tersebut (misalnya, 0 = \"Buruk\", 100 = \"Sangat Baik\").",
      // "Use `{0}` as a placeholder for the actual value."
      tooltipFormat: "Gunakan '{0}' sebagai placeholder untuk nilai aktual.",
      // "Allows users to move one thumb past the other."
      allowSwap: "Memungkinkan pengguna untuk menggerakkan satu ibu jari melewati yang lain.",
      // [Auto-translated] "Displays a button that clears the selected slider value and sets it to undefined."
      allowClear: "Menampilkan tombol yang menghapus nilai penggeser yang dipilih dan mengaturnya ke tidak ditentukan.",
      // "Defines the slider's minimum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      minValueExpression: "Menentukan nilai minimum penggeser secara dinamis menggunakan ekspresi. Mendukung perhitungan dasar (misalnya, '{q1_id} + {q2_id}'), logika Boolean (misalnya, '{age} > 60'), dan fungsi seperti 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dan banyak lagi.",
      // "Defines the slider's maximum value dynamically using an expression. Supports basic calculations (e.g, `{q1_id} + {q2_id}`), Boolean logic (e.g., `{age} > 60`), and functions like `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, and more."
      maxValueExpression: "Menentukan nilai maksimum penggeser secara dinamis menggunakan ekspresi. Mendukung perhitungan dasar (misalnya, '{q1_id} + {q2_id}'), logika Boolean (misalnya, '{age} > 60'), dan fungsi seperti 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dan banyak lagi."
    },
    // [Auto-translated] "Makes this choice exclusive. When selected by a user, it will automatically deselect all other options in the question."
    isExclusive: "Membuat pilihan ini eksklusif. Saat dipilih oleh pengguna, itu akan secara otomatis membatalkan pilihan semua opsi lain dalam pertanyaan.",
    matrixcolumn: {
      // [Auto-translated] "Makes checkboxes in this column exclusive. When selected by a user, they will automatically deselect all other checkboxes in the same row."
      isExclusive: "Membuat kotak centang di kolom ini eksklusif. Saat dipilih oleh pengguna, mereka akan secara otomatis membatalkan centang semua kotak centang lainnya di baris yang sama."
    },
    // [Auto-translated] "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent."
    caseInsensitive: "Pilih apakah huruf besar dan kecil dalam ekspresi reguler harus diperlakukan sebagai setara.",
    // "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used."
    widthMode: "Pilih dari: \"Statis\" - menetapkan lebar tetap; \"Responsif\" - membuat survei menempati lebar penuh layar; \"Otomatis\" - berlaku salah satu dari keduanya tergantung pada jenis pertanyaan yang digunakan.",
    // [Auto-translated] "Assign a unique cookie value for your survey. The cookie will be set in a respondent's browser upon survey completion to prevent repetitive survey submissions."
    cookieName: "Tetapkan nilai cookie unik untuk survei Anda. Cookie akan diatur di browser responden setelah survei selesai untuk mencegah pengiriman survei yang berulang.",
    // [Auto-translated] "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)."
    logo: "Tempel tautan gambar (tanpa batas ukuran) atau klik ikon folder untuk menelusuri file dari komputer Anda (hingga 64 KB).",
    // [Auto-translated] "Sets a logo width in CSS units (px, %, in, pt, etc.)."
    logoWidth: "Mengatur lebar logo dalam satuan CSS (px, %, in, pt, dll.).",
    // [Auto-translated] "Sets a logo height in CSS units (px, %, in, pt, etc.)."
    logoHeight: "Mengatur tinggi logo dalam satuan CSS (px, %, in, pt, dll.).",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    logoFit: "Pilih dari: \"Tidak ada\" - gambar mempertahankan ukuran aslinya; \"Berisi\" - gambar diubah ukurannya agar pas dengan tetap mempertahankan rasio aspeknya; \"Cover\" - gambar mengisi seluruh kotak sambil mempertahankan rasio aspeknya; \"Isi\" - gambar direntangkan untuk mengisi kotak tanpa mempertahankan rasio aspeknya.",
    // [Auto-translated] "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers."
    autoAdvanceEnabled: "Pilih apakah Anda ingin survei maju secara otomatis ke halaman berikutnya setelah responden menjawab semua pertanyaan di halaman saat ini. Fitur ini tidak akan berlaku jika pertanyaan terakhir di halaman bersifat terbuka atau mengizinkan banyak jawaban.",
    // [Auto-translated] "Select if you want the survey to complete automatically after a respondent answers all questions."
    autoAdvanceAllowComplete: "Pilih apakah Anda ingin survei selesai secara otomatis setelah responden menjawab semua pertanyaan.",
    // [Auto-translated] "Sets the visibility of navigation buttons on a page."
    showNavigationButtons: "Mengatur visibilitas tombol navigasi pada halaman.",
    // [Auto-translated] "Sets the location of navigation buttons on a page."
    navigationButtonsLocation: "Mengatur lokasi tombol navigasi pada halaman.",
    // [Auto-translated] "Enable the preview page with all or answered questions only."
    showPreviewBeforeComplete: "Aktifkan halaman pratinjau hanya dengan semua atau pertanyaan yang dijawab.",
    // "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level."
    questionTitleLocation: "Berlaku untuk semua pertanyaan dalam survei. Setelan ini dapat diganti dengan aturan penyelarasan judul di tingkat yang lebih rendah: panel, halaman, atau pertanyaan. Pengaturan tingkat yang lebih rendah akan menggantikan pengaturan tingkat yang lebih tinggi.",
    // [Auto-translated] "A symbol or a sequence of symbols indicating that an answer is required."
    requiredMark: "Simbol atau urutan simbol yang menunjukkan bahwa jawaban diperlukan.",
    // [Auto-translated] "Enter a number or letter with which you want to start numbering."
    questionStartIndex: "Masukkan angka atau huruf yang ingin Anda gunakan untuk memulai penomoran.",
    // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box."
    questionErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan.",
    // [Auto-translated] "Select if you want the first input field on each page ready for text entry."
    autoFocusFirstQuestion: "Pilih apakah Anda ingin bidang input pertama pada setiap halaman siap untuk entri teks.",
    // "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab."
    questionOrder: "Menyimpan urutan pertanyaan asli atau mengacaknya. Efek pengaturan ini hanya terlihat di tab Pratinjau.",
    // [Auto-translated] "For text entry questions only."
    maxTextLength: "Hanya untuk pertanyaan entri teks.",
    // [Auto-translated] "For question comments only."
    maxCommentLength: "Hanya untuk komentar pertanyaan.",
    // [Auto-translated] "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears."
    commentAreaRows: "Mengatur jumlah baris yang ditampilkan di area teks untuk komentar pertanyaan. Jika input mengambil lebih banyak baris, bilah gulir akan muncul.",
    // [Auto-translated] "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length."
    autoGrowComment: "Pilih apakah Anda ingin komentar pertanyaan dan pertanyaan Teks Panjang bertambah tinggi secara otomatis berdasarkan panjang teks yang dimasukkan.",
    // [Auto-translated] "For question comments and Long Text questions only."
    allowResizeComment: "Hanya untuk komentar pertanyaan dan pertanyaan Teks Panjang.",
    // [Auto-translated] "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on."
    calculatedValues: "Variabel kustom berfungsi sebagai variabel perantara atau tambahan yang digunakan dalam perhitungan formulir. Mereka mengambil input responden sebagai nilai sumber. Setiap variabel kustom memiliki nama unik dan ekspresi yang menjadi dasarnya.",
    // [Auto-translated] "Select if you wish the calculated value of the expression to be saved along with survey results."
    includeIntoResult: "Pilih apakah Anda ingin nilai terhitung ekspresi disimpan bersama dengan hasil survei.",
    // "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects."
    triggers: "Pemicu adalah peristiwa atau kondisi yang didasarkan pada ekspresi. Setelah ekspresi dievaluasi ke \"true\", pemicu memicu tindakan. Tindakan semacam itu secara opsional dapat memiliki pertanyaan target yang dipengaruhinya.",
    // [Auto-translated] "Choose whether or not to clear values for questions hidden by conditional logic and when to do it."
    clearInvisibleValues: "Pilih apakah akan menghapus nilai untuk pertanyaan yang disembunyikan oleh logika kondisional atau tidak dan kapan melakukannya.",
    // "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing."
    textUpdateMode: "Pilih dari: \"On lost focus\" - nilai diperbarui ketika bidang input kehilangan fokus; \"Saat mengetik\" - nilainya diperbarui secara real-time, saat pengguna mengetik.",
    // [Auto-translated] "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents."
    columns: "Nilai kiri berfungsi sebagai ID kolom yang digunakan dalam aturan bersyarat, nilai kanan ditampilkan kepada responden.",
    // "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents."
    rows: "Nilai kiri berfungsi sebagai ID baris yang digunakan dalam aturan bersyarat, nilai kanan ditampilkan kepada responden.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    columnMinWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    rowTitleWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    // [Auto-translated] "Visible only if at least one column displays total values set with \"Aggregation method\" or \"Total value expression\"."
    totalText: "Hanya terlihat jika setidaknya satu kolom menampilkan nilai total yang ditetapkan dengan \"Metode agregasi\" atau \"Ekspresi nilai total\".",
    // "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    cellErrorLocation: "Mengatur lokasi pesan kesalahan dalam kaitannya dengan sel dengan input yang tidak valid. Opsi \"Warisi\" menerapkan pengaturan dari properti \"Perataan pesan kesalahan\".",
    // "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property."
    detailErrorLocation: "Mengatur lokasi pesan kesalahan untuk pertanyaan yang bertumpuk di bagian detail. Opsi \"Wariskan\" menerapkan pengaturan dari properti \"Perataan pesan kesalahan\".",
    // "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message."
    keyDuplicationError: "Ketika properti \"mencegah duplikat respons\" diaktifkan, responden mencoba untuk mengirimkan entri duplikat akan menerima pesan galat berikut.",
    // [Auto-translated] "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
    totalExpression: "Memungkinkan Anda menghitung nilai total berdasarkan ekspresi. Ekspresi dapat mencakup perhitungan dasar ('{q1_id} + {q2_id}'), ekspresi Boolean ('{age} > 60') dan fungsi ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll.).",
    // "Reference a column ID to require a user to provide a unique response for each question within the specified column."
    keyName: "Jika kolom yang ditentukan berisi nilai yang identik, survei akan memunculkan kesalahan \"Nilai kunci tidak unik\".",
    // "Type a subtitle."
    description: "Ketik subtitle.",
    // [Auto-translated] "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab."
    locale: "Pilih bahasa untuk mulai membuat survei. Untuk menambahkan terjemahan, beralihlah ke bahasa baru dan terjemahkan teks asli di sini atau di tab Terjemahan.",
    // "Sets the location of a detail section in relation to a row. Choose from: \"None\" - no detail section is added; \"Under the row\" - a detail section is placed under each row of the matrix; \"Under the row, display one detail section only\" - a detail section is displayed under a single row only, the remaining sections are collapsed."
    detailPanelMode: "Mengatur lokasi bagian detail dalam kaitannya dengan baris. Pilih dari: \"Tidak ada\" - tidak ada ekspansi yang ditambahkan; \"Di bawah baris\" - ekspansi baris ditempatkan di bawah setiap baris matriks; \"Di bawah baris, tampilkan satu baris ekspansi saja\" - ekspansi ditampilkan di bawah satu baris saja, ekspansi baris yang tersisa diciutkan.",
    // "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio."
    imageFit: "Pilih dari: \"Tidak ada\" - gambar mempertahankan ukuran aslinya; \"Berisi\" - gambar diubah ukurannya agar pas dengan tetap mempertahankan rasio aspeknya; \"Cover\" - gambar mengisi seluruh kotak sambil mempertahankan rasio aspeknya; \"Isi\" - gambar direntangkan untuk mengisi kotak tanpa mempertahankan rasio aspeknya.",
    // "The \"Inherit\" option applies a survey-level setting (\"Disabled\" by default)."
    autoGrow: "Secara bertahap meningkatkan ketinggian bidang input saat data dimasukkan. Mengganti setelan \"Tinggi bidang input (dalam baris)\".",
    // [Auto-translated] "The \"Inherit\" option applies a survey-level setting (\"Enabled\" by default)."
    allowResize: "Opsi \"Warisi\" menerapkan pengaturan tingkat survei (\"Diaktifkan\" secara default).",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the \"Thank You\" page. When set to 0, counts the time spent on the survey."
    timeLimit: "Interval waktu dalam hitungan detik setelah survei otomatis maju ke halaman \"Terima kasih\". Jika diatur ke 0, menghitung waktu yang dihabiskan untuk survei.",
    // [Auto-translated] "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
    timeLimitPerPage: "Interval waktu dalam hitungan detik setelah survei otomatis maju ke halaman berikutnya. Menyembunyikan tombol navigasi \"Sebelumnya\". Saat diatur ke 0, menghitung waktu yang dihabiskan di halaman saat ini.",
    // [Auto-translated] "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes."
    validateVisitedEmptyFields: "Aktifkan opsi ini untuk memicu validasi saat pengguna berfokus pada bidang input kosong dan kemudian meninggalkannya tanpa membuat perubahan apa pun.",
    page: {
      // "A page ID that is not visible to respondents."
      name: "ID halaman yang tidak terlihat oleh responden.",
      // "Type a page subtitle."
      description: "Ketik subjudul halaman.",
      // "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"."
      navigationTitle: "Keterangan yang ditampilkan pada tombol navigasi di bilah kemajuan atau daftar isi (TOC). Jika Anda membiarkan bidang ini kosong, tombol navigasi akan menggunakan judul halaman atau nama halaman. Untuk mengaktifkan bilah kemajuan atau TOC, buka \"Survei\" → \"Navigasi\".",
      // "A time interval in seconds after which the survey auto-advances to the next page. Hides the \"Previous\" navigation button. When set to 0, counts the time spent on the current page."
      timeLimit: "Interval waktu dalam hitungan detik setelah survei maju secara otomatis ke halaman berikutnya.",
      // "Use the magic wand icon to set a conditional rule that determines page visibility."
      visibleIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang menentukan visibilitas halaman.",
      // [Auto-translated] "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page."
      enableIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menonaktifkan mode baca-saja untuk halaman.",
      // "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer."
      requiredIf: "Gunakan ikon tongkat ajaib untuk menetapkan aturan bersyarat yang mencegah pengiriman survei kecuali setidaknya satu pertanyaan bertingkat memiliki jawaban.",
      // "Applies to all questions within this page. When set to \"Hidden\", it also hides question descriptions. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionTitleLocation: "Berlaku untuk semua pertanyaan dalam halaman ini. Jika Anda ingin mengganti setelan ini, tentukan aturan perataan judul untuk masing-masing pertanyaan atau panel. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default).",
      // [Auto-translated] "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)."
      questionTitleWidth: "Mengatur lebar yang konsisten untuk judul pertanyaan bila disejajarkan di sebelah kiri kotak pertanyaan. Menerima nilai CSS (px, %, in, pt, dll.).",
      // "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)."
      questionErrorLocation: "Mengatur lokasi pesan kesalahan sehubungan dengan pertanyaan dengan input yang tidak valid. Pilih antara: \"Atas\" - teks kesalahan ditempatkan di bagian atas kotak pertanyaan; \"Bawah\" - teks kesalahan ditempatkan di bagian bawah kotak pertanyaan. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Teratas\" secara default).",
      // "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab."
      questionOrder: "Menyimpan urutan pertanyaan asli atau mengacaknya. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Asli\" secara default). Efek pengaturan ini hanya terlihat di tab Pratinjau.",
      // "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"."
      showNavigationButtons: "Mengatur visibilitas tombol navigasi di halaman. Opsi \"Warisi\" menerapkan pengaturan tingkat survei, yang defaultnya adalah \"Terlihat\".",
      // [Auto-translated] "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column."
      gridLayoutColumns: "Tabel ini memungkinkan Anda mengonfigurasi setiap kolom kisi pada halaman. Ini secara otomatis mengatur persentase lebar untuk setiap kolom berdasarkan jumlah maksimum elemen dalam satu baris. Untuk menyesuaikan tata letak kisi, sesuaikan nilai ini secara manual dan tentukan lebar judul untuk semua pertanyaan di setiap kolom."
    },
    // [Auto-translated] "Sets the location of a timer on a page."
    timerLocation: "Mengatur lokasi pengatur waktu pada halaman.",
    // "Choose from: \"Locked\" - users cannot expand or collapse entries; \"Collapse all\" - all entries start in a collapsed state; \"Expand all\" - all entries start in an expanded state; \"First expanded\" - only the first entry is initially expanded. Applies if \"Entry display mode\" is set to \"List\" and the \"Entry title pattern\" property is specified."
    panelsState: "Pilih dari: \"Terkunci\" - pengguna tidak dapat memperluas atau menciutkan panel; \"Runtuhkan semua\" - semua panel dimulai dalam keadaan diciutkan; \"Perluas semua\" - semua panel dimulai dalam keadaan diperluas; \"Pertama diperluas\" - hanya panel pertama yang awalnya diperluas.",
    // [Auto-translated] "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list."
    imageLinkName: "Masukkan nama properti bersama dalam array objek yang berisi URL file gambar atau video yang ingin Anda tampilkan di daftar pilihan.",
    // "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    choices: "Nilai kiri berfungsi sebagai ID item yang digunakan dalam aturan bersyarat, nilai yang tepat ditampilkan kepada responden.",
    // [Auto-translated] "Type a user-friendly title to display."
    title: "Ketik judul yang mudah digunakan untuk ditampilkan.",
    // [Auto-translated] "Ensures that users won't complete the survey until files are uploaded."
    waitForUpload: "Memastikan bahwa pengguna tidak akan menyelesaikan survei sampai file diunggah.",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    minWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    // [Auto-translated] "Accepts CSS values (px, %, in, pt, etc.)."
    maxWidth: "Menerima nilai CSS (px, %, in, pt, dll.).",
    // "Accepts CSS values (px, %, in, pt, etc.)."
    width: "Menerima nilai CSS (px, %, in, pt, dll.).",
    // [Auto-translated] "A join identifier is a custom key that you can assign to several questions to link them together and sync their values. These values will be merged into a single array or object and stored in survey results using the key as the property name."
    valueName: "Pengidentifikasi gabungan adalah kunci kustom yang dapat Anda tetapkan ke beberapa pertanyaan untuk menautkannya bersama dan menyinkronkan nilainya. Nilai-nilai ini akan digabungkan menjadi satu array atau objek dan disimpan dalam hasil survei menggunakan kunci sebagai nama properti.",
    // [Auto-translated] "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty."
    defaultDisplayValue: "Nilai yang ditampilkan dalam pertanyaan HTML dan dalam judul dinamis dan deskripsi elemen survei saat nilai pertanyaan kosong.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements."
    useDisplayValuesInDynamicTexts: "Dalam tipe pertanyaan pilihan tunggal dan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Saat dipilih, setelan ini akan menampilkan nilai tampilan, bukan nilai ID dalam pertanyaan HTML serta judul dinamis dan deskripsi elemen survei.",
    // "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)."
    clearIfInvisible: "Pilih apakah akan menghapus nilai pertanyaan yang disembunyikan oleh logika kondisional atau tidak dan kapan melakukannya. Opsi \"Warisi\" menerapkan setelan tingkat survei (\"Setelah survei selesai\" secara default).",
    // "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question."
    choicesFromQuestionMode: "Pilih dari: \"Semua\" - menyalin semua opsi pilihan dari pertanyaan yang dipilih; \"Dipilih\" - secara dinamis menyalin hanya opsi pilihan yang dipilih; \"Tidak dipilih\" - secara dinamis hanya menyalin opsi pilihan yang tidak dipilih. Opsi \"Tidak Ada\" dan \"Lainnya\" disalin secara default jika diaktifkan dalam pertanyaan sumber.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs."
    choiceValuesFromQuestion: "Dalam jenis pertanyaan pilihan tunggal dan pilihan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Pengaturan ini menentukan kolom matriks atau pertanyaan panel mana yang harus memberikan ID.",
    // [Auto-translated] "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts."
    choiceTextsFromQuestion: "Dalam jenis pertanyaan pilihan tunggal dan pilihan ganda, setiap opsi pilihan memiliki ID dan nilai tampilan. Pengaturan ini menentukan kolom matriks atau pertanyaan panel mana yang harus menyediakan teks tampilan.",
    // [Auto-translated] "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session."
    allowCustomChoices: "Pilih untuk mengizinkan responden menambahkan pilihan mereka sendiri jika opsi yang diinginkan tidak tersedia di menu drop-down. Pilihan khusus hanya akan disimpan sementara selama sesi browser saat ini.",
    // [Auto-translated] "When selected, users can include additional input in a separate comment box."
    showOtherItem: "Saat dipilih, pengguna dapat menyertakan input tambahan di kotak komentar terpisah.",
    // "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout."
    separateSpecialChoices: "Menampilkan setiap opsi pilihan khusus (\"Tidak Ada\", \"Lainnya\", \"Pilih Semua\") pada baris baru, bahkan saat menggunakan tata letak beberapa kolom.",
    // [Auto-translated] "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array."
    path: "Tentukan lokasi dalam himpunan data layanan tempat array objek target berada. Biarkan kosong jika URL sudah menunjuk ke array.",
    choicesbyurl: {
      // "Enter a uniform property name within the array of objects whose value will be stored as a response in survey results."
      valueName: " "
    },
    // [Auto-translated] "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list."
    titleName: "Masukkan nama properti seragam dalam array objek yang berisi nilai yang ingin Anda tampilkan di daftar pilihan.",
    // [Auto-translated] "Select to allow the service to return an empty response or array."
    allowEmptyResponse: "Pilih untuk mengizinkan layanan mengembalikan respons atau array kosong.",
    // [Auto-translated] "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options."
    choicesVisibleIf: "Gunakan ikon tongkat ajaib untuk mengatur aturan bersyarat yang menentukan visibilitas semua opsi pilihan.",
    // [Auto-translated] "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents."
    rateValues: "Nilai kiri berfungsi sebagai ID item yang digunakan dalam aturan bersyarat, nilai yang tepat ditampilkan kepada responden.",
    rating: {
      // "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown."
      displayMode: "\"Otomatis\" memilih antara mode \"Tombol\" dan \"Tarik-turun\" berdasarkan lebar yang tersedia. Ketika lebar tidak cukup untuk menampilkan tombol, pertanyaan menampilkan dropdown."
    },
    // [Auto-translated] "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values."
    valuePropertyName: "Memungkinkan Anda menghubungkan pertanyaan yang menghasilkan hasil dalam berbagai format. Saat pertanyaan tersebut ditautkan bersama menggunakan ID gabungan, properti bersama ini akan menyimpan nilai pertanyaan yang dipilih.",
    // [Auto-translated] "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field."
    searchEnabled: "Pilih apakah Anda ingin memperbarui konten menu drop-down agar sesuai dengan kueri pencarian yang diketik pengguna di bidang input.",
    // [Auto-translated] "A value to save in survey results when respondents give a positive answer."
    valueTrue: "Nilai yang harus disimpan dalam hasil survei ketika responden memberikan jawaban positif.",
    // [Auto-translated] "A value to save in survey results when respondents give a negative answer."
    valueFalse: "Nilai untuk disimpan dalam hasil survei ketika responden memberikan jawaban negatif.",
    // [Auto-translated] "It's not recommended that you disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded."
    showPreview: "Anda tidak disarankan untuk menonaktifkan opsi ini karena menggantikan gambar Pratinjau dan menyulitkan pengguna untuk memahami apakah file telah diunggah.",
    // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
    needConfirmRemoveFile: "Memicu prompt yang meminta konfirmasi penghapusan file.",
    // [Auto-translated] "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area."
    selectToRankEnabled: "Aktifkan untuk memberi peringkat hanya pada pilihan yang dipilih. Pengguna akan menyeret item yang dipilih dari daftar pilihan untuk memesannya di dalam area peringkat.",
    // [Auto-translated] "Enter a list of choices that will be suggested to the respondent during input."
    dataList: "Masukkan daftar pilihan yang akan disarankan kepada responden saat masukan.",
    // [Auto-translated] "The setting only resizes the input fields and doesn't affect the width of the question box."
    inputSize: "Pengaturan hanya mengubah ukuran bidang input dan tidak memengaruhi lebar kotak pertanyaan.",
    // [Auto-translated] "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)."
    itemTitleWidth: "Mengatur lebar yang konsisten untuk semua label item. Menerima nilai CSS (px, %, in, pt, dll.).",
    // "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not."
    inputTextAlignment: "Pilih cara menyelaraskan nilai input dalam bidang. Pengaturan default \"Otomatis\" menyelaraskan nilai input ke kanan jika penyembunyian mata uang atau numerik diterapkan dan ke kiri jika tidak.",
    // [Auto-translated] "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes."
    altText: "Berfungsi sebagai pengganti ketika gambar tidak dapat ditampilkan pada perangkat pengguna dan untuk tujuan aksesibilitas.",
    // "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale."
    rateColorMode: "Menentukan warna emoji yang dipilih saat jenis ikon Peringkat diatur ke \"Smiley\". Pilih antara: \"Default\" - emoji yang dipilih muncul dalam warna survei default; \"Skala\" - emoji yang dipilih mewarisi warna dari skala peringkat.",
    expression: {
      // "An expression ID that is not visible to respondents."
      name: "ID ekspresi yang tidak terlihat oleh responden.",
      // "Type an expression subtitle."
      description: "Ketikkan subjudul ekspresi.",
      // "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)."
      expression: "Ekspresi dapat mencakup perhitungan dasar ('{q1_id} + {q2_id}'), kondisi ('{age} > 60'), dan fungsi ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', dll.)."
    },
    // "Select to store the \"Other\" option value as a separate property in survey results."
    storeOthersAsComment: "Pilih untuk menyimpan nilai opsi \"Lainnya\" sebagai properti terpisah dalam hasil survei.",
    // [Auto-translated] "Use {0} as a placeholder for the actual value."
    format: "Gunakan {0} sebagai placeholder untuk nilai aktual.",
    // [Auto-translated] "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information."
    acceptedTypes: "Lihat deskripsi atribut [accept](https://www.w3schools.com/tags/att_input_accept.asp) untuk informasi selengkapnya.",
    // [Auto-translated] "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. Applies only to columns with \"Cell input type\" set to Radio Button Group or Checkboxes."
    columnColCount: "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris. Hanya berlaku untuk kolom dengan \"Jenis input sel\" yang diatur ke Grup Tombol Radio atau Kotak Centang.",
    // [Auto-translated] "Select the data type that the user's browser can retrieve. This data is sourced either from past values entered by the user or from pre-configured values if any have been saved by the user for autocompletion."
    autocomplete: "Pilih jenis data yang dapat diambil oleh browser pengguna. Data ini bersumber baik dari nilai sebelumnya yang dimasukkan oleh pengguna atau dari nilai yang telah dikonfigurasi sebelumnya jika ada yang telah disimpan oleh pengguna untuk pelengkapan otomatis.",
    // "Applies when \"File source type\" is \"Local file\" or when camera is unavailable"
    filePlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"File lokal\" atau ketika kamera tidak tersedia",
    // "Applies when \"File source type\" is \"Camera\"."
    photoPlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"Kamera\".",
    // "Applies when \"File source type\" is \"Local file or camera\"."
    fileOrPhotoPlaceholder: "Berlaku ketika \"Jenis sumber\" adalah \"File atau kamera lokal\".",
    // "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line."
    colCount: "Mengatur opsi pilihan dalam tata letak multi-kolom. Saat diatur ke 0, opsi ditampilkan dalam satu baris.",
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Pilih apakah Anda ingin menyimpan nilai pertanyaan dengan masker yang diterapkan dalam hasil survei."
    },
    patternmask: {
      // "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character."
      pattern: "Pola dapat berisi literal string dan placeholder berikut: '9' - untuk digit; 'a' - untuk huruf besar atau kecil; '#' - untuk digit atau huruf besar atau kecil. Gunakan garis miring terbalik '\\' untuk melarikan diri dari karakter."
    },
    datetimemask: {
      // "The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year.<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in upper case (AM/PM).<br>`tt` - 12-hour clock period in lower case (am/pm)."
      pattern: "Pola dapat berisi karakter pemisah dan placeholder berikut:<br>'m' - Nomor bulan.<br>'mm' - Angka bulan, dengan nol di depannya untuk nilai satu digit. <br>'d' - Hari dalam sebulan. <br>'dd' - Hari dalam sebulan, dengan nol di depan untuk nilai satu digit. <br>'yy' - Dua digit terakhir tahun ini. <br>'yyyy' - Tahun empat digit. <br>'H' - Jam dalam format 24 jam. <br>'HH' - Jam dalam format 24 jam, dengan nol di depannya untuk nilai satu digit. <br>'h' - Jam dalam format 12 jam. <br>'hh' - Jam dalam format 12 jam, dengan nol di depannya untuk nilai satu digit. <br>'MM' - Menit. <br>'ss' - Detik. <br>'TT' - Periode jam 12 jam dalam huruf besar (AM / PM). <br>'tt' - Periode jam 12 jam dalam huruf kecil (am/pm)."
    },
    numericmask: {
      // "A symbol used to separate the fractional part from the integer part of a displayed number."
      decimalSeparator: "Simbol yang digunakan untuk memisahkan bagian pecahan dari bagian bilangan bulat dari angka yang ditampilkan.",
      // "A symbol used to separate the digits of a large number into groups of three."
      thousandsSeparator: "Simbol yang digunakan untuk memisahkan digit angka besar menjadi kelompok tiga.",
      // "Limits how many digits to retain after the decimal point for a displayed number."
      precision: "Membatasi jumlah digit yang akan dipertahankan setelah koma desimal untuk angka yang ditampilkan."
    },
    currencymask: {
      // "One or several symbols to be displayed before the value."
      prefix: "Satu atau beberapa simbol yang akan ditampilkan sebelum nilai.",
      // "One or several symbols to be displayed after the value."
      suffix: "Satu atau beberapa simbol yang akan ditampilkan setelah nilai."
    },
    theme: {
      // "This setting applies only to questions outside of a panel."
      isPanelless: "Pengaturan ini hanya berlaku untuk pertanyaan di luar panel.",
      // "Sets a supplementary color that highlights key survey elements."
      primaryColor: "Menetapkan warna tambahan yang menyoroti elemen survei utama.",
      // "Adjusts the transparency of panels and question boxes relative to the survey background."
      panelBackgroundTransparency: "Menyesuaikan transparansi panel dan kotak pertanyaan relatif terhadap latar belakang survei.",
      // "Adjusts the transparency of input elements relative to the survey background."
      questionBackgroundTransparency: "Menyesuaikan transparansi elemen input relatif terhadap latar belakang survei.",
      // "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes."
      cornerRadius: "Mengatur jari-jari sudut untuk semua elemen persegi panjang. Aktifkan Mode Lanjutan jika Anda ingin mengatur nilai radius sudut individual untuk elemen input atau panel dan kotak pertanyaan.",
      // "Sets the main background color of the survey."
      "--sjs-general-backcolor-dim": "Mengatur warna latar belakang utama survei."
    },
    header: {
      // "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in."
      inheritWidthFrom: "Opsi \"Sama seperti wadah\" secara otomatis menyesuaikan lebar area konten header agar sesuai dengan elemen HTML tempat survei ditempatkan.",
      // [Auto-translated] "The width of the header area that contains the survey title and description, measured in pixels."
      textAreaWidth: "Lebar area header yang berisi judul dan deskripsi survei, diukur dalam piksel.",
      // [Auto-translated] "When enabled, the top of the survey overlays the bottom of the header."
      overlapEnabled: "Saat diaktifkan, bagian atas survei melapisi bagian bawah header.",
      // [Auto-translated] "When set to 0, the height is calculated automatically to accommodate the header's content."
      mobileHeight: "Saat diatur ke 0, tinggi dihitung secara otomatis untuk mengakomodasi konten header."
    },
    // "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in."
    progressBarInheritWidthFrom: "Opsi \"Sama seperti wadah\" secara otomatis menyesuaikan lebar area bilah kemajuan agar sesuai dengan elemen HTML tempat survei ditempatkan.",
    // [Auto-translated] "Used when the 'Survey layout' is set to 'Single input field per page'. In this layout, the matrix is split so that each input field appears on a separate page. Use the {rowIndex} placeholder to insert auto numbering, {rowTitle} or {rowName} to reference the row's title or ID, and {row.columnid} to include the value of a specific matrix column."
    singleInputTitleTemplate: "Digunakan saat 'Tata letak survei' diatur ke 'Bidang input tunggal per halaman'. Dalam tata letak ini, matriks dipisahkan sehingga setiap bidang input muncul di halaman terpisah. Gunakan placeholder {rowIndex} untuk menyisipkan penomoran otomatis, {rowTitle} atau {rowName} untuk mereferensikan judul atau ID baris, dan {row.columnid} untuk menyertakan nilai kolom matriks tertentu."
  },
  // Properties
  p: {
    title: {
      // "title"
      name: "judul",
      // "Leave it empty, if it is the same as 'Name'"
      title: "Biarkan kosong, jika sama dengan 'Nama'"
    },
    // [Auto-translated] "Allow multiple selection"
    multiSelect: "Perbolehkan beberapa pilihan",
    // [Auto-translated] "Show image and video captions"
    showLabel: "Tampilkan keterangan gambar dan video",
    // [Auto-translated] "Swap the order of Yes and No"
    swapOrder: "Tukar urutan Ya dan Tidak",
    // [Auto-translated] "Value"
    value: "Nilai",
    // [Auto-translated] "Tab alignment"
    tabAlign: "Perataan tab",
    // [Auto-translated] "File source type"
    sourceType: "Jenis sumber file",
    // [Auto-translated] "Fit to container"
    fitToContainer: "Sesuai dengan kontainer",
    // [Auto-translated] "Set value expression"
    setValueExpression: "Mengatur ekspresi nilai",
    // "Description"
    description: "deskripsi", // Auto-generated string
    // [Auto-translated] "Logo fit"
    logoFit: "Kecocokan logo",
    // [Auto-translated] "Pages"
    pages: "Halaman", // Auto-generated string
    // [Auto-translated] "Questions"
    questions: "Pertanyaan", // Auto-generated string
    // "Triggers"
    triggers: "Trigger",
    // [Auto-translated] "Custom variables"
    calculatedValues: "Variabel kustom",
    // [Auto-translated] "Survey id"
    surveyId: "ID survei", // Auto-generated string
    // [Auto-translated] "Survey post id"
    surveyPostId: "ID pos survei", // Auto-generated string
    // [Auto-translated] "Survey show data saving"
    surveyShowDataSaving: "Survei menunjukkan penghematan data", // Auto-generated string
    // [Auto-translated] "Question description alignment"
    questionDescriptionLocation: "Perataan deskripsi pertanyaan",
    // [Auto-translated] "Progress bar type"
    progressBarType: "Jenis bilah kemajuan", // Auto-generated string
    // [Auto-translated] "Show table of contents (TOC)"
    showTOC: "Tampilkan daftar isi (TOC)",
    // [Auto-translated] "TOC alignment"
    tocLocation: "Penyelarasan TOC",
    // [Auto-translated] "Question title pattern"
    questionTitlePattern: "Pola judul pertanyaan", // Auto-generated string
    // [Auto-translated] "Survey width mode"
    widthMode: "Mode lebar survei",
    // [Auto-translated] "Show brand info"
    showBrandInfo: "Tampilkan info merek", // Auto-generated string
    // [Auto-translated] "Use display values in dynamic texts"
    useDisplayValuesInDynamicTexts: "Menggunakan nilai tampilan dalam teks dinamis",
    // "Visible if"
    visibleIf: "terlihat jika", // Auto-generated string
    // [Auto-translated] "Default value expression"
    defaultValueExpression: "Ekspresi nilai default",
    // "Required if"
    requiredIf: "wajib jika", // Auto-generated string
    // [Auto-translated] "Reset value if"
    resetValueIf: "Reset nilai jika",
    // [Auto-translated] "Set value if"
    setValueIf: "Tetapkan nilai jika",
    // "Validation rules"
    validators: "validator",
    // [Auto-translated] "Bindings"
    bindings: "Binding", // Auto-generated string
    // [Auto-translated] "Render as"
    renderAs: "Render sebagai", // Auto-generated string
    // [Auto-translated] "Attach original items"
    attachData: "Melampirkan item asli", // Auto-generated string
    // "Choices"
    choices: "pilihan",
    // "Choices by url"
    choicesByUrl: "pilihan dari URL", // Auto-generated string
    // "Currency"
    currency: "mata uang", // Auto-generated string
    // [Auto-translated] "Cell hint"
    cellHint: "Petunjuk sel", // Auto-generated string
    // [Auto-translated] "Total maximum fraction digits"
    totalMaximumFractionDigits: "Total digit pecahan maksimum", // Auto-generated string
    // [Auto-translated] "Total minimum fraction digits"
    totalMinimumFractionDigits: "Total digit pecahan minimum", // Auto-generated string
    // "Columns"
    columns: "kolom", // Auto-generated string
    // [Auto-translated] "Detail elements"
    detailElements: "Elemen detail", // Auto-generated string
    // [Auto-translated] "Allow adaptive actions"
    allowAdaptiveActions: "Izinkan tindakan adaptif", // Auto-generated string
    // "Default row value"
    defaultRowValue: "nilai baris default", // Auto-generated string
    // [Auto-translated] "Auto-expand new row details"
    detailPanelShowOnAdding: "Perluas detail baris baru secara otomatis",
    // [Auto-translated] "Choices lazy load enabled"
    choicesLazyLoadEnabled: "Pilihan lazy load diaktifkan", // Auto-generated string
    // [Auto-translated] "Choices lazy load page size"
    choicesLazyLoadPageSize: "Pilihan malas memuat ukuran halaman", // Auto-generated string
    // [Auto-translated] "Input field component"
    inputFieldComponent: "Komponen bidang input", // Auto-generated string
    // [Auto-translated] "Item component"
    itemComponent: "Komponen item", // Auto-generated string
    // [Auto-translated] "Min"
    min: "Min", // Auto-generated string
    // [Auto-translated] "Max"
    max: "Maks", // Auto-generated string
    // [Auto-translated] "Min value expression"
    minValueExpression: "Ekspresi nilai min", // Auto-generated string
    // [Auto-translated] "Max value expression"
    maxValueExpression: "Ekspresi nilai maksimum", // Auto-generated string
    // [Auto-translated] "Step"
    step: "Langkah", // Auto-generated string
    // [Auto-translated] "Items for auto-suggest"
    dataList: "Item untuk saran otomatis",
    // "Input field width (in characters)"
    inputSize: "ukuranBarang",
    // [Auto-translated] "Item label width"
    itemTitleWidth: "Lebar label item",
    // [Auto-translated] "Input value alignment"
    inputTextAlignment: "Penyelarasan nilai input",
    // [Auto-translated] "Elements"
    elements: "Elemen", // Auto-generated string
    // [Auto-translated] "Content"
    content: "Puas", // Auto-generated string
    // [Auto-translated] "Navigation title"
    navigationTitle: "Judul navigasi", // Auto-generated string
    // [Auto-translated] "Navigation description"
    navigationDescription: "Deskripsi navigasi", // Auto-generated string
    // [Auto-translated] "Long tap"
    longTap: "Ketuk lama", // Auto-generated string
    // [Auto-translated] "Expand input field dynamically"
    autoGrow: "Perluas bidang input secara dinamis",
    // [Auto-translated] "Enable resize handle"
    allowResize: "Aktifkan pegangan pengubahan ukuran",
    // [Auto-translated] "Accept carriage return"
    acceptCarriageReturn: "Terima pengembalian kereta", // Auto-generated string
    // [Auto-translated] "Display mode"
    displayMode: "Mode tampilan",
    // [Auto-translated] "Rate type"
    rateType: "Jenis tarif", // Auto-generated string
    // "Label"
    label: "label", // Auto-generated string
    // [Auto-translated] "Content mode"
    contentMode: "Mode konten",
    // [Auto-translated] "Image and thumbnail fit"
    imageFit: "Gambar dan thumbnail cocok",
    // [Auto-translated] "Alt text"
    altText: "Teks alternatif",
    // [Auto-translated] "Height"
    height: "Tinggi", // Auto-generated string
    // [Auto-translated] "Height on smartphones"
    mobileHeight: "Tinggi di smartphone",
    // [Auto-translated] "Pen color"
    penColor: "Warna pena", // Auto-generated string
    // [Auto-translated] "Background color"
    backgroundColor: "Warna latar belakang",
    // [Auto-translated] "Template elements"
    templateElements: "Elemen template", // Auto-generated string
    // [Auto-translated] "Operator"
    operator: "Operator", // Auto-generated string
    // [Auto-translated] "Is variable"
    isVariable: "Adalah variabel", // Auto-generated string
    // [Auto-translated] "Run expression"
    runExpression: "Menjalankan ekspresi", // Auto-generated string
    // [Auto-translated] "Show caption"
    showCaption: "Tampilkan caption", // Auto-generated string
    // [Auto-translated] "Icon name"
    iconName: "Nama ikon", // Auto-generated string
    // [Auto-translated] "Icon size"
    iconSize: "Ukuran ikon", // Auto-generated string
    // [Auto-translated] "Precision"
    precision: "Presisi", // Auto-generated string
    // [Auto-translated] "Matrix drag handle area"
    matrixDragHandleArea: "Area gagang seret matriks", // Auto-generated string
    // [Auto-translated] "Background image"
    backgroundImage: "Gambar latar belakang",
    // [Auto-translated] "Background image fit"
    backgroundImageFit: "Kecocokan gambar latar belakang", // Auto-generated string
    // [Auto-translated] "Background image attachment"
    backgroundImageAttachment: "Lampiran gambar latar belakang", // Auto-generated string
    // [Auto-translated] "Background opacity"
    backgroundOpacity: "Opasitas latar belakang", // Auto-generated string
    // [Auto-translated] "Allow selective ranking"
    selectToRankEnabled: "Izinkan peringkat selektif",
    // [Auto-translated] "Ranking area alignment"
    selectToRankAreasLayout: "Perataan area peringkat",
    // [Auto-translated] "Text to show if all options are selected"
    selectToRankEmptyRankedAreaText: "Teks untuk memperlihatkan jika semua opsi dipilih",
    // [Auto-translated] "Placeholder text for the ranking area"
    selectToRankEmptyUnrankedAreaText: "Teks tempat penampung untuk area peringkat",
    // [Auto-translated] "Allow camera access"
    allowCameraAccess: "Izinkan akses kamera", // Auto-generated string
    // [Auto-translated] "Rating icon color mode"
    scaleColorMode: "Mode warna ikon peringkat",
    // [Auto-translated] "Smileys color scheme"
    rateColorMode: "Skema warna Smileys",
    // [Auto-translated] "Copy display value"
    copyDisplayValue: "Salin nilai tampilan", // Auto-generated string
    // [Auto-translated] "Column span"
    effectiveColSpan: "Rentang kolom",
    // [Auto-translated] "Progress bar area width"
    progressBarInheritWidthFrom: "Lebar area bilah kemajuan",
    // [Auto-translated] "Theme name"
    themeName: "Nama tema"
  },
  theme: {
    // "Advanced mode"
    advancedMode: "Mode lanjutan",
    // "Page"
    pageTitle: "Font judul halaman",
    // "Question box"
    questionTitle: "Font judul pertanyaan",
    // "Input element"
    editorPanel: "Elemen input",
    // [Auto-translated] "Lines"
    lines: "Baris",
    // [Auto-translated] "Default"
    primaryDefaultColor: "Default",
    // [Auto-translated] "Hover"
    primaryDarkColor: "Hover",
    // [Auto-translated] "Selected"
    primaryLightColor: "Dipilih",
    // [Auto-translated] "Background color"
    backgroundDimColor: "Warna latar belakang",
    // "Corner radius"
    cornerRadius: "Radius sudut",
    // [Auto-translated] "Default background"
    backcolor: "Latar belakang default",
    // [Auto-translated] "Hover background"
    hovercolor: "Arahkan kursor ke latar belakang",
    // [Auto-translated] "Border decoration"
    borderDecoration: "Dekorasi perbatasan",
    // [Auto-translated] "Font color"
    fontColor: "Warna font",
    // [Auto-translated] "Background color"
    backgroundColor: "Warna latar belakang",
    // [Auto-translated] "Default color"
    primaryForecolor: "Warna default",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Warna dinonaktifkan",
    // [Auto-translated] "Font"
    font: "Font",
    // [Auto-translated] "Darker"
    borderDefault: "Gelap",
    // [Auto-translated] "Lighter"
    borderLight: "Ringan",
    // [Auto-translated] "Font family"
    fontFamily: "Keluarga font",
    // [Auto-translated] "Regular"
    fontWeightRegular: "Biasa",
    // [Auto-translated] "Heavy"
    fontWeightHeavy: "Berat",
    // [Auto-translated] "Semi-bold"
    fontWeightSemiBold: "Semi-tebal",
    // [Auto-translated] "Bold"
    fontWeightBold: "Berani",
    // [Auto-translated] "Color"
    color: "Warna",
    // [Auto-translated] "Placeholder color"
    placeholderColor: "Warna tempat penampung",
    // [Auto-translated] "Size"
    size: "Tingginya",
    // [Auto-translated] "Opacity"
    opacity: "Opacity",
    // [Auto-translated] "X"
    boxShadowX: "X",
    // [Auto-translated] "Y"
    boxShadowY: "Y",
    // [Auto-translated] "Add Shadow Effect"
    boxShadowAddRule: "Tambahkan Efek Bayangan",
    // [Auto-translated] "Blur"
    boxShadowBlur: "Kabur",
    // [Auto-translated] "Spread"
    boxShadowSpread: "Penyebaran",
    // [Auto-translated] "Drop"
    boxShadowDrop: "Menjatuhkan",
    // [Auto-translated] "Inner"
    boxShadowInner: "Batin",
    names: {
      // [Auto-translated] "Default"
      default: "Default",
      // [Auto-translated] "Sharp"
      sharp: "Tajam",
      // [Auto-translated] "Borderless"
      borderless: "Tanpa batas",
      // [Auto-translated] "Flat"
      flat: "Rata",
      // [Auto-translated] "Plain"
      plain: "Polos",
      // [Auto-translated] "Double Border"
      doubleborder: "Batas Ganda",
      // [Auto-translated] "Layered"
      layered: "Berlapis",
      // [Auto-translated] "Solid"
      solid: "Keras",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Contrast"
      contrast: "Kontras"
    },
    colors: {
      // [Auto-translated] "Teal"
      teal: "Teal",
      // [Auto-translated] "Blue"
      blue: "Biru",
      // [Auto-translated] "Purple"
      purple: "Ungu",
      // [Auto-translated] "Orchid"
      orchid: "Anggrek",
      // [Auto-translated] "Tulip"
      tulip: "Tulip",
      // [Auto-translated] "Brown"
      brown: "Coklat",
      // [Auto-translated] "Green"
      green: "Hijau",
      // [Auto-translated] "Gray"
      gray: "Abu-abu"
    }
  },
  creatortheme: {
    // [Auto-translated] "Surface background"
    "--sjs-special-background": "Latar belakang permukaan",
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Utama",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekunder",
    // [Auto-translated] "Surface"
    surfaceScale: "Permukaan",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elemen UI",
    // [Auto-translated] "Font"
    fontScale: "Font",
    names: {
      // [Auto-translated] "Survey Creator 2020"
      sc2020: "Pembuat Survei 2020",
      // [Auto-translated] "Light"
      "default-light": "Ringan",
      // [Auto-translated] "Dark"
      "default-dark": "Gelap",
      // [Auto-translated] "Contrast"
      "default-contrast": "Kontras"
    }
  }
};

setupLocale({ localeCode: "id", strings: indonesianStrings });