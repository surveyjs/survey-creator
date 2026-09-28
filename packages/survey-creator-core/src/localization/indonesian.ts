import { setupLocale } from "survey-creator-core";

export var indonesianStrings = {
  // survey templates
  survey: {
    // [Auto-translated] "Duplicate"
    duplicate: "Duplikat"
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
    // [Auto-translated] "Default"
    default: "Bawaan",
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
    // [Auto-translated] "Panel"
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
    // [Auto-translated] "Yes/No (Boolean)"
    boolean: "Ya/Tidak (Boolean)",
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
    // [Auto-translated] "Misc"
    misc: "Lain-lain"
  },
  // Strings in SurveyJS Creator
  ed: {
    // [Auto-translated] "Default ({0})"
    defaultLocale: "Default ({0})",
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
    // "page"
    newPageName: "halaman",
    // "question"
    newQuestionName: "pertanyaan",
    // [Auto-translated] "panel"
    newPanelName: "Panel",
    // "Preview Survey Again"
    testSurveyAgain: "Coba Survei Lagi",
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
    // [Auto-translated] "Fix error"
    jsonFixError: "Perbaiki kesalahan",
    // [Auto-translated] "The survey JSON must be an object."
    jsonRootNotObject: "JSON survei harus berupa objek.",
    // "Undo"
    undo: "Urungkan",
    // "Redo"
    redo: "Ulangi",
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
    // [Auto-translated] "Unknown function: \"{0}\"."
    expressionUnknownFunction: "Fungsi tidak diketahui: \"{0}\".",
    // [Auto-translated] "Unknown functions: \"{0}\"."
    expressionUnknownFunctions: "Fungsi tidak diketahui: \"{0}\".",
    // [Auto-translated] "Unknown variable: \"{0}\"."
    expressionUnknownVariable: "Variabel tidak diketahui: \"{0}\".",
    // [Auto-translated] "Unknown variables: \"{0}\"."
    expressionUnknownVariables: "Variabel tidak diketahui: \"{0}\".",
    // [Auto-translated] "Syntax error."
    expressionSyntaxError: "Kesalahan sintaks.",
    // [Auto-translated] "Semantic error."
    expressionSemanticsError: "Kesalahan semantik.",
    // "Toolbox"
    toolbox: "Kotak Perkakas",
    // [Auto-translated] "Search"
    toolboxSearch: "Mencari",
    // [Auto-translated] "Type to search..."
    toolboxFilteredTextPlaceholder: "Ketik untuk mencari...",
    // [Auto-translated] "No results found"
    toolboxNoResultsFound: "Tidak ada hasil yang ditemukan",
    // [Auto-translated] "No properties to display"
    propertyGridEmptySurveyText: "Tidak ada properti untuk ditampilkan",
    // [Auto-translated] "Type to search..."
    propertyGridFilteredTextPlaceholder: "Ketik untuk mencari...",
    // [Auto-translated] "No results found"
    propertyGridNoResultsFound: "Tidak ada hasil yang ditemukan",
    // [Auto-translated] "Start configuring your form"
    propertyGridPlaceholderTitle: "Mulai mengonfigurasi formulir Anda",
    // [Auto-translated] "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface."
    propertyGridPlaceholderDescription: "Klik ikon kategori apa pun untuk menjelajahi pengaturan survei. Pengaturan tambahan akan tersedia setelah Anda menambahkan elemen survei ke permukaan desain.",
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
    // [Auto-translated] "Translate remaining strings"
    translateRemainingStrings: "Terjemahkan string yang tersisa",
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
    // [Auto-translated] "Source language"
    translationSourceLanguage: "Bahasa sumber",
    // [Auto-translated] "Target language"
    translationTargetLanguage: "Bahasa target",
    // [Auto-translated] "{0} of {1} strings translated"
    translationProgress: "{0} string {1} diterjemahkan",
    // [Auto-translated] "Are you certain you wish to delete all translated strings for the selected language?"
    translationClearProgress: "Apakah Anda yakin ingin menghapus semua string terjemahan untuk bahasa yang dipilih?",
    // [Auto-translated] "Form View"
    translationSideBySideViewForm: "Tampilan Formulir",
    // [Auto-translated] "Grid View"
    translationSideBySideViewGrid: "Tampilan Grid",
    // [Auto-translated] "Translate strings"
    translateStrings: "Terjemahkan string",
    // [Auto-translated] "Survey Strings"
    translationSurveyStrings: "String Survei",
    // [Auto-translated] "No strings to translate"
    translationStateNothingToTranslate: "Tidak ada string yang harus diterjemahkan",
    // [Auto-translated] "All strings are translated"
    translationStateAllTranslated: "Semua string diterjemahkan",
    // [Auto-translated] "{0} strings are not translated"
    translationStateUntranslated: "{0} string tidak diterjemahkan",
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
      // [Auto-translated] "Enter a value..."
      calculatedValuePlaceholder: "Masukkan nilai...",
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
  // Host application variables
  vp: {
    // [Auto-translated] "Variable preset"
    selectorTitle: "Preset variabel",
    // [Auto-translated] "None"
    noPreset: "Tidak ada",
    // [Auto-translated] "View variable values"
    view: "Lihat nilai variabel",
    // [Auto-translated] "Variable values"
    viewTitle: "Nilai variabel",
    // [Auto-translated] "Manage presets"
    edit: "Kelola preset",
    // [Auto-translated] "Variable Presets"
    editorTitle: "Preset Variabel",
    // [Auto-translated] "Preset"
    presetName: "Prasetel",
    // [Auto-translated] "Description"
    presetDescription: "Deskripsi",
    // [Auto-translated] "Add preset"
    addPreset: "Tambahkan preset",
    // [Auto-translated] "New preset"
    newPresetName: "Preset baru",
    // [Auto-translated] "Delete preset"
    deletePreset: "Hapus preset",
    // [Auto-translated] "Back"
    back: "Kembali",
    // [Auto-translated] "A preset with this name already exists"
    presetNameIsNotUnique: "Preset dengan nama ini sudah ada",
    // [Auto-translated] "Enter a preset name"
    presetNameIsEmpty: "Masukkan nama preset",
    // [Auto-translated] "Preset"
    listNameColumn: "Prasetel",
    // [Auto-translated] "Description"
    listDescriptionColumn: "Deskripsi"
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
    urlconditionitem: {
      // [Auto-translated] "Expression"
      expression: "Ekspresi"
    },
    htmlconditionitem: {
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
      readOnly: "Jadikan survei baca-saja",
      // [Auto-translated] "Regional formats"
      regionalFormat: "Format regional"
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
    regionalformat: {
      // [Auto-translated] "Region"
      locale: "Wilayah",
      // [Auto-translated] "Date pattern"
      datePattern: "Pola tanggal",
      // [Auto-translated] "Time pattern"
      timePattern: "Pola waktu",
      // [Auto-translated] "Decimal separator"
      decimalSeparator: "Pemisah desimal",
      // [Auto-translated] "Thousands separator"
      thousandsSeparator: "Pemisah ribuan",
      // [Auto-translated] "Currency symbol"
      currencySymbol: "Simbol mata uang",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "Pola mata uang"
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
      // [Auto-translated] "Show trailing zeros"
      showTrailingZeros: "Tampilkan nol terlambat",
      // [Auto-translated] "Minimum value"
      min: "Nilai minimum",
      // [Auto-translated] "Maximum value"
      max: "Nilai maksimum"
    },
    currencymask: {
      // [Auto-translated] "Currency symbol"
      currencySymbol: "Simbol mata uang",
      // [Auto-translated] "Currency pattern"
      currencyPattern: "Pola mata uang"
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
    // [Auto-translated] "Cell error message alignment"
    cellErrorLocation: "Perataan pesan kesalahan sel",
    // [Auto-translated] "Enabled"
    enabled: "Diaktifkan",
    // [Auto-translated] "Disabled"
    disabled: "Cacat",
    // [Auto-translated] "Inherit"
    inherit: "Mewarisi",
    // [Auto-translated] "Clear"
    clear: "Jelas",
    // [Auto-translated] "Set"
    set: "Mengeset",
    // [Auto-translated] "Change"
    change: "Ubah",
    // "Close"
    close: "Tutup",
    // "Delete"
    delete: "Hapus",
    // "Add New"
    addNew: "Tambahkan Baru",
    // "Click to add an item..."
    addItem: "Klik untuk menambahkan sebuah item...",
    // [Auto-translated] "Click to remove the item..."
    removeItem: "Klik untuk menghapus item...",
    // [Auto-translated] "Drag the item"
    dragItem: "Seret item",
    // [Auto-translated] "Expand nested choices"
    expandNestedChoices: "Perluas pilihan bersarang",
    // [Auto-translated] "Collapse nested choices"
    collapseNestedChoices: "Menggabungkan pilihan bersarang",
    // "Edit"
    edit: "Ubah",
    // [Auto-translated] "Done"
    doneEditing: "Selesai",
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
    // [Auto-translated] "Please select the action"
    conditionActionEmpty: "Silakan pilih tindakan",
    // "Select a question..."
    conditionSelectQuestion: "Pilih pertanyaan...",
    // [Auto-translated] "Select a page..."
    conditionSelectPage: "Pilih halaman...",
    // [Auto-translated] "Select a panel..."
    conditionSelectPanel: "Pilih panel...",
    // "Press ctrl+space to get expression completion hint"
    aceEditorHelp: "Tekan ctrl+spasi untuk mendapatkan petunjuk penyelesaian ekspresi",
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
    // "Value"
    value: "Nilai",
    // "Text"
    text: "Teks",
    // "Image or video file URL"
    imageLink: "Link Gambar",
    // [Auto-translated] "URL"
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
    // [Auto-translated] "Survey Title"
    surveyTitlePlaceholder: "Judul Survei",
    // [Auto-translated] "Page {num}"
    pageTitlePlaceholder: "Halaman {num}",
    // [Auto-translated] "Panel Title"
    panelTitlePlaceholder: "Judul Panel",
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
    // [Auto-translated] "\"Create Custom Choice\" command text"
    createCustomChoiceText: "Teks perintah \"Buat Pilihan Kustom\"",
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
    // [Auto-translated] "Maximum number of files"
    maxFiles: "Jumlah file maksimum",
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
    // "Maximum character limit"
    maxLength: "Panjang maksimum",
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
      // [Auto-translated] "Notification message for invalid input"
      text: "Pesan pemberitahuan untuk input yang tidak valid",
      // [Auto-translated] "Valid when"
      expression: "Berlaku saat",
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
    // [Auto-translated] "Search mode"
    searchMode: "Mode pencarian",
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
    // [Auto-translated] "Accepted file categories"
    acceptedCategories: "Kategori file yang diterima",
    // [Auto-translated] "Additional file extensions"
    acceptedTypes: "Ekstensi file tambahan",
    // [Auto-translated] "Wait for upload to complete"
    waitForUpload: "Tunggu hingga upload selesai",
    // [Auto-translated] "Row details alignment"
    detailPanelMode: "Perataan detail baris",
    // [Auto-translated] "Minimum row count"
    minRowCount: "Jumlah baris minimum",
    // [Auto-translated] "Maximum row count"
    maxRowCount: "Jumlah baris maksimum",
    // [Auto-translated] "Row count expression"
    rowCountExpression: "Ekspresi hitungan baris",
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
    // [Auto-translated] "Entry count expression"
    panelCountExpression: "Ekspresi jumlah entri",
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
    imagemap: {
      // [Auto-translated] "Image URL"
      imageLink: "URL Gambar",
      // [Auto-translated] "Areas"
      areas: "Daerah",
      // [Auto-translated] "Allow multiple selections"
      multiSelect: "Izinkan beberapa pilihan",
      // [Auto-translated] "Value property name"
      valuePropertyName: "Nama properti nilai",
      // [Auto-translated] "Shape"
      shape: "Bentuk",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "Warna isian idle",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "Warna goresan menganggur",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "Lebar goresan menganggur",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "Warna isian kursor",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "Warna goresan kursor",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "Lebar goresan kursor",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "Warna isian yang dipilih",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "Warna goresan yang dipilih",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "Lebar goresan yang dipilih",
      // [Auto-translated] "Maximum selected areas"
      maxSelectedAreas: "Area maksimum yang dipilih",
      // [Auto-translated] "Minimum selected areas"
      minSelectedAreas: "Area minimum yang dipilih"
    },
    imagemaparea: {
      // [Auto-translated] "Value"
      value: "Nilai",
      // [Auto-translated] "Shape"
      shape: "Bentuk",
      // [Auto-translated] "Coordinates"
      coords: "Koordinat",
      // [Auto-translated] "Idle fill color"
      idleFillColor: "Warna isian idle",
      // [Auto-translated] "Idle stroke color"
      idleStrokeColor: "Warna goresan menganggur",
      // [Auto-translated] "Idle stroke width"
      idleStrokeWidth: "Lebar goresan menganggur",
      // [Auto-translated] "Hover fill color"
      hoverFillColor: "Warna isian kursor",
      // [Auto-translated] "Hover stroke color"
      hoverStrokeColor: "Warna goresan kursor",
      // [Auto-translated] "Hover stroke width"
      hoverStrokeWidth: "Lebar goresan kursor",
      // [Auto-translated] "Selected fill color"
      selectedFillColor: "Warna isian yang dipilih",
      // [Auto-translated] "Selected stroke color"
      selectedStrokeColor: "Warna goresan yang dipilih",
      // [Auto-translated] "Selected stroke width"
      selectedStrokeWidth: "Lebar goresan yang dipilih"
    },
    file: {
      // [Auto-translated] "Image height"
      imageHeight: "Tinggi gambar",
      // [Auto-translated] "Image width"
      imageWidth: "Lebar gambar",
      // [Auto-translated] "Confirm file deletion"
      confirmDelete: "Konfirmasi penghapusan file"
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
    // [Auto-translated] "\"Value does not match step size\" error message"
    stepErrorText: "Pesan kesalahan \"Nilai tidak cocok dengan ukuran langkah\"",
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
    // [Auto-translated] "Display navigation text in the progress bar"
    progressBarShowNavigationText: "Tampilkan teks navigasi di bilah kemajuan",
    // [Auto-translated] "Navigation text alignment"
    progressBarNavigationTextLocation: "Perataan teks navigasi",
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
      // "General"
      general: "Umum",
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
      // [Auto-translated] "Regional Formats"
      regionalFormat: "Format Regional",
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
      // [Auto-translated] "Expression"
      expression: "Ekspresi",
      // [Auto-translated] "Question Settings"
      questionSettings: "Pengaturan Pertanyaan",
      // [Auto-translated] "Header"
      header: "Tajuk",
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
    // "Items"
    items: "[ Barang: {0} ]",
    // [Auto-translated] "Make choices visible if"
    choicesVisibleIf: "Buat pilihan terlihat jika",
    // [Auto-translated] "Make choices selectable if"
    choicesEnableIf: "Buat pilihan yang dapat dipilih jika",
    // [Auto-translated] "Increase the inner indent"
    innerIndent: "Tingkatkan lekukan bagian dalam",
    // [Auto-translated] "Use answers from the last entry as default"
    copyDefaultValueFromLastEntry: "Gunakan jawaban dari entri terakhir sebagai default",
    // [Auto-translated] "Type expression here..."
    emptyExpressionPlaceHolder: "Ketik ekspresi di sini...",
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
      inputContent: "Font",
      // [Auto-translated] "Opacity"
      backgroundOpacity: "Opacity", // Auto-generated string
      // [Auto-translated] "Survey font family"
      "--sjs2-typography-font-family-text": "Keluarga font survei",
      // [Auto-translated] "Background color"
      "--sjs2-color-utility-surface-survey": "Warna latar belakang",
      // [Auto-translated] "Accent background colors"
      "--sjs2-color-project-brand-600": "Warna latar belakang aksen",
      // [Auto-translated] "Accent foreground colors"
      "--sjs2-color-fg-brand-on-primary": "Warna latar depan aksen",
      // [Auto-translated] "Error message colors"
      "--sjs2-color-bg-alert-primary": "Warna pesan kesalahan",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-surface-default": "Efek bayangan",
      // [Auto-translated] "Shadow effects"
      "--sjs2-border-effect-component-formbox-default": "Efek bayangan",
      // [Auto-translated] "Colors"
      "--sjs2-color-component-input-default-line": "Warna"
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
    // [Auto-translated] "Radio buttons"
    radio: "Tombol radio",
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
    cameraFacingMode: {
      // [Auto-translated] "Front"
      user: "Depan",
      // [Auto-translated] "Rear"
      environment: "Belakang"
    },
    acceptedCategories: {
      // [Auto-translated] "Images"
      image: "Gambar",
      // [Auto-translated] "Videos"
      video: "Video",
      // [Auto-translated] "Audio"
      audio: "Audio",
      // [Auto-translated] "Documents"
      document: "Dokumen",
      // [Auto-translated] "Archives"
      archive: "Arsip",
      // [Auto-translated] "Custom"
      custom: "Kustom"
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
    // [Auto-translated] "Auto"
    auto: "Otomatis",
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
      dropdown: "Tarik-turun",
      // [Auto-translated] "Segmented toggle"
      segmented: "Toggle tersegmentasi",
      // [Auto-translated] "Radio buttons"
      radio: "Tombol radio",
      // [Auto-translated] "Checkbox"
      checkbox: "Kotak centang",
      // [Auto-translated] "Switch"
      switch: "Beralih",
      // [Auto-translated] "Custom"
      custom: "Kustom"
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
      // [Auto-translated] "Recursive numbering"
      recursive: "Penomoran rekursif",
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
  // Regions of the "Regional Formats" category. Unlike survey languages, a region can be
  regionLocales: {
    // [Auto-translated] "Arabic"
    ar: "Arab",
    // [Auto-translated] "Bulgarian"
    bg: "Bulgaria",
    // [Auto-translated] "Catalan"
    ca: "Catalan",
    // [Auto-translated] "Czech"
    cs: "Ceko",
    // [Auto-translated] "Welsh"
    cy: "Welsh",
    // [Auto-translated] "Danish"
    da: "Denmark",
    // [Auto-translated] "German"
    de: "Jerman",
    // [Auto-translated] "Greek"
    el: "Yunani",
    // [Auto-translated] "English"
    en: "Bahasa Inggris",
    // [Auto-translated] "English (Australia)"
    "en-AU": "Bahasa Inggris (Australia)",
    // [Auto-translated] "English (Canada)"
    "en-CA": "Bahasa Inggris (Kanada)",
    // [Auto-translated] "English (United Kingdom)"
    "en-GB": "Bahasa Inggris (Inggris Raya)",
    // [Auto-translated] "English (Ireland)"
    "en-IE": "Bahasa Inggris (Irlandia)",
    // [Auto-translated] "English (India)"
    "en-IN": "Bahasa Inggris (India)",
    // [Auto-translated] "English (New Zealand)"
    "en-NZ": "Bahasa Inggris (Selandia Baru)",
    // [Auto-translated] "English (South Africa)"
    "en-ZA": "Bahasa Inggris (Afrika Selatan)",
    // [Auto-translated] "Spanish"
    es: "Spanyol",
    // [Auto-translated] "Estonian"
    et: "Estonia",
    // [Auto-translated] "Basque"
    eu: "Basque",
    // [Auto-translated] "Persian"
    fa: "Farsi",
    // [Auto-translated] "Finnish"
    fi: "Finlandia",
    // [Auto-translated] "Filipino"
    fil: "Filipino",
    // [Auto-translated] "French"
    fr: "Prancis",
    // [Auto-translated] "French (Canada)"
    "fr-CA": "Prancis (Kanada)",
    // [Auto-translated] "French (Switzerland)"
    "fr-CH": "Prancis (Swiss)",
    // [Auto-translated] "Hebrew"
    he: "Ibrani",
    // [Auto-translated] "Hindi"
    hi: "Hindi",
    // [Auto-translated] "Croatian"
    hr: "Kroasia",
    // [Auto-translated] "Haitian Creole"
    ht: "Kreol Haiti",
    // [Auto-translated] "Hungarian"
    hu: "Hungaria",
    // [Auto-translated] "Indonesian"
    id: "Indonesia",
    // [Auto-translated] "Icelandic"
    is: "Islandia",
    // [Auto-translated] "Italian"
    it: "Italia",
    // [Auto-translated] "Japanese"
    ja: "Jepang",
    // [Auto-translated] "Georgian"
    ka: "Georgian",
    // [Auto-translated] "Kazakh"
    kk: "Kazakh",
    // [Auto-translated] "Korean"
    ko: "Korea",
    // [Auto-translated] "Lithuanian"
    lt: "Lithuania",
    // [Auto-translated] "Latvian"
    lv: "Latvia",
    // [Auto-translated] "Macedonian"
    mk: "Makedonia",
    // [Auto-translated] "Burmese"
    mm: "Burma",
    // [Auto-translated] "Malay"
    ms: "Melayu",
    // [Auto-translated] "Dutch"
    nl: "Belanda",
    // [Auto-translated] "Dutch (Belgium)"
    "nl-BE": "Belanda (Belgia)",
    // [Auto-translated] "Norwegian"
    no: "Norwegia",
    // [Auto-translated] "Polish"
    pl: "Polandia",
    // [Auto-translated] "Portuguese"
    pt: "Portugis",
    // [Auto-translated] "Portuguese (Brazil)"
    "pt-BR": "Portugis (Brasil)",
    // [Auto-translated] "Romanian"
    ro: "Rumania",
    // [Auto-translated] "Russian"
    ru: "Rusia",
    // [Auto-translated] "Slovak"
    sk: "Slovakia",
    // [Auto-translated] "Slovenian"
    sl: "Slovenia",
    // [Auto-translated] "Serbian"
    sr: "Serbia",
    // [Auto-translated] "Swedish"
    sv: "Swedia",
    // [Auto-translated] "Swahili"
    sw: "Swahili",
    // [Auto-translated] "Telugu"
    tel: "Telugu",
    // [Auto-translated] "Tajik"
    tg: "Tajik",
    // [Auto-translated] "Thai"
    th: "Thai",
    // [Auto-translated] "Turkish"
    tr: "Turki",
    // [Auto-translated] "Ukrainian"
    uk: "Ukraina",
    // [Auto-translated] "Urdu"
    ur: "Urdu",
    // [Auto-translated] "Vietnamese"
    vi: "Vietnam",
    // [Auto-translated] "Chinese"
    zh: "Mandarin",
    // [Auto-translated] "Chinese (Simplified)"
    "zh-CN": "Bahasa Cina (Disederhanakan)",
    // [Auto-translated] "Chinese (Traditional)"
    "zh-TW": "Mandarin (Tradisional)"
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
    // [Auto-translated] "None of"
    noneof: "Tidak ada",
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
    regionalformat: {
      // [Auto-translated] "Same as survey language"
      locale: "Sama seperti bahasa survei"
    },
    patternmask: {
      // "Ex.: +1(999)-999-99-99"
      pattern: "Contoh: +1(999)-999-99-99"
    },
    datetimemask: {
      // [Auto-translated] "Ex.: mm/dd/yyyy HH:MM:ss"
      pattern: "Contoh: mm / dd / yyyy HH: MM: ss"
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
      confirmDelete: "Memicu prompt konfirmasi sebelum menghapus entri.",
      // [Auto-translated] "Specify an expression that calculates the number of entries. This expression overrides the \"Initial number of entries\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum number of entries\" and \"Maximum number of entries\" settings. While this expression is set, respondents cannot add or remove entries manually."
      panelCountExpression: "Tentukan ekspresi yang menghitung jumlah entri. Ekspresi ini menimpa pengaturan \"Jumlah awal entri\" dan dievaluasi ulang setiap kali nilai yang dirujuk berubah. Hasilnya dibatasi oleh pengaturan \"Jumlah minimum entri\" dan \"Jumlah maksimum entri\". Selama ekspresi ini diatur, responden tidak dapat menambahkan atau menghapus entri secara manual.",
      // [Auto-translated] "Assigns numbers to questions nested within the dynamic panel."
      showQuestionNumbers: "Menetapkan nomor ke pertanyaan yang bersarang dalam panel dinamis."
    },
    matrixdynamic: {
      // [Auto-translated] "Specify an expression that calculates the number of rows. This expression overrides the \"Row count\" setting and is reevaluated whenever the values it references change. The result is limited by the \"Minimum row count\" and \"Maximum row count\" settings. While this expression is set, respondents cannot add or remove rows manually."
      rowCountExpression: "Tentukan ekspresi yang menghitung jumlah baris. Ekspresi ini menimpa pengaturan \"Jumlah baris\" dan dievaluasi ulang setiap kali nilai yang direferensikan berubah. Hasilnya dibatasi oleh pengaturan \"Jumlah baris minimum\" dan \"Jumlah baris maksimum\". Selama ekspresi ini diatur, responden tidak dapat menambahkan atau menghapus baris secara manual.",
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
      allowImagesPreview: "Menampilkan pratinjau thumbnail untuk file yang diunggah jika memungkinkan. Batalkan pilihan jika Anda ingin menampilkan ikon file sebagai gantinya.",
      // [Auto-translated] "Triggers a prompt asking to confirm the file deletion."
      confirmDelete: "Memicu perintah yang meminta untuk mengonfirmasi penghapusan file."
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
    matrixdropdown: {
      // [Auto-translated] "When the \"Prevent duplicate responses\" property is enabled for a matrix column, a respondent attempting to submit a duplicate entry will receive the following error message."
      keyDuplicationError: "Saat properti \"Cegah respons duplikat\" diaktifkan untuk kolom matriks, responden yang mencoba mengirimkan entri duplikat akan menerima pesan kesalahan berikut."
    },
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
    // [Auto-translated] "Select \"Custom\" to add your own file extensions on top of the predefined categories."
    acceptedCategories: "Pilih \"Kustom\" untuk menambahkan ekstensi file Anda sendiri di atas kategori yang telah ditentukan sebelumnya.",
    // [Auto-translated] "Enter file extensions separated by commas (e.g., .csv, .xml)."
    acceptedTypes: "Masukkan ekstensi file yang dipisahkan oleh koma (misalnya, .csv, .xml).",
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
    multipletext: {
      // [Auto-translated] "Arranges text boxes in a multi-column layout."
      colCount: "Mengatur kotak teks dalam tata letak multi-kolom."
    },
    masksettings: {
      // "Select if you want to store the question value with an applied mask in survey results."
      saveMaskedValue: "Pilih apakah Anda ingin menyimpan nilai pertanyaan dengan masker yang diterapkan dalam hasil survei."
    },
    regionalformat: {
      // [Auto-translated] "A region whose formats apply to date-time, numeric, and currency input masks. If not specified, the survey language is used."
      locale: "Wilayah yang formatnya berlaku untuk masker input tanggal-waktu, numerik, dan mata uang. Jika tidak ditentukan, bahasa survei digunakan.",
      // [Auto-translated] "Overrides the region's date format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`m` - Month number.<br>`mm` - Month number, with a leading zero for single-digit values.<br>`d` - Day of the month.<br>`dd` - Day of the month, with a leading zero for single-digit values.<br>`yy` - The last two digits of the year.<br>`yyyy` - Four-digit year."
      datePattern: "Mengesampingkan format tanggal wilayah yang digunakan dalam masker input. Pola dapat berisi karakter pemisah dan placeholder berikut: <br>'m' - Nomor bulan.<br> 'mm' - Nomor bulan, dengan nol di awal untuk nilai satu digit. <br>'d' - Hari dalam bulan. <br>'dd' - Hari dalam bulan, dengan nol di awal untuk nilai satu digit. <br>'yy' - Dua digit terakhir dalam setahun. <br>'yyyy' - Tahun empat digit.",
      // [Auto-translated] "Overrides the region's time format used in input masks. The pattern can contain separator characters and the following placeholders:<br>`H` - Hours in 24-hour format.<br>`HH` - Hours in 24-hour format, with a leading zero for single-digit values.<br>`h` - Hours in 12-hour format.<br>`hh` - Hours in 12-hour format, with a leading zero for single-digit values.<br>`MM` - Minutes.<br>`ss` - Seconds.<br>`TT` - 12-hour clock period in uppercase (AM/PM).<br>`tt` - 12-hour clock period in lowercase (am/pm)."
      timePattern: "Mengesampingkan format waktu wilayah yang digunakan dalam masker input. Pola dapat berisi karakter pemisah dan placeholder berikut: <br>'H' - Jam dalam format 24 jam.<br> 'HH' - Jam dalam format 24 jam, dengan nol di awal untuk nilai satu digit. <br>'h' - Jam dalam format 12 jam. <br>'hh' - Jam dalam format 12 jam, dengan nol di awal untuk nilai satu digit. <br>'MM' - Menit. <br>'ss' - Detik. <br>'TT' - Periode jam 12 jam dalam huruf besar (AM/PM). <br>'tt' - Periode jam 12 jam dalam huruf kecil (AM/PM).",
      // [Auto-translated] "Overrides the symbol the region uses to separate the fractional part from the integer part of a displayed number in input masks."
      decimalSeparator: "Mengatasi simbol yang digunakan region untuk memisahkan bagian fraksional dari bagian bilangan bulat dari angka yang ditampilkan dalam masker input.",
      // [Auto-translated] "Overrides the symbol the region uses to separate the digits of a large number into groups of three in input masks."
      thousandsSeparator: "Mengesampingkan simbol yang digunakan wilayah untuk memisahkan digit dari angka besar menjadi kelompok tiga pada masker input.",
      // [Auto-translated] "Overrides the region's currency symbol or code used in input masks."
      currencySymbol: "Mengesampingkan simbol mata uang wilayah atau kode yang digunakan dalam masker input.",
      // [Auto-translated] "Overrides the region's currency pattern used in input masks. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "Mengesampingkan pola mata uang wilayah yang digunakan dalam masker input. Pola dapat berisi placeholder berikut: <br>'@' - Simbol atau kode mata uang.<br> '#' - Angka. <br>'-' - Posisi tanda minus dalam nilai negatif (jika dihilangkan, tanda minus ditempatkan di awal)."
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
      precision: "Membatasi jumlah digit yang akan dipertahankan setelah koma desimal untuk angka yang ditampilkan.",
      // [Auto-translated] "Displays trailing zeros in the fractional part up to the specified precision. For example, with a precision of 2, an input value of 1.2 is displayed as 1.20."
      showTrailingZeros: "Menampilkan nol yang tertinggal pada bagian fraksional hingga presisi yang ditentukan. Misalnya, dengan presisi 2, nilai input 1.2 ditampilkan sebagai 1.20."
    },
    currencymask: {
      // [Auto-translated] "A currency symbol or code displayed with the value. The region's symbol is used by default. Clear this property to display no symbol."
      currencySymbol: "Simbol mata uang atau kode yang ditampilkan bersama nilai. Simbol wilayah digunakan secara default. Hapus properti ini untuk tidak menampilkan simbol.",
      // [Auto-translated] "Specifies the positions of the number, currency symbol, and minus sign. The pattern can contain the following placeholders:<br>`@` - Currency symbol or code.<br>`#` - Number.<br>`-` - Position of the minus sign in negative values (if omitted, the minus sign is placed at the beginning)."
      currencyPattern: "Menentukan posisi angka, simbol mata uang, dan tanda minus. Pola dapat berisi placeholder berikut: <br>'@' - Simbol atau kode mata uang.<br> '#' - Angka. <br>'-' - Posisi tanda minus dalam nilai negatif (jika dihilangkan, tanda minus ditempatkan di awal)."
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
      // [Auto-translated] "Sets the main background color of the survey."
      "--sjs2-color-utility-surface-survey": "Mengatur warna latar belakang utama survei."
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
    // [Auto-translated] "Default camera"
    cameraFacingMode: "Kamera default",
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
    // "Corner radius"
    cornerRadius: "Radius sudut",
    // [Auto-translated] "Default background"
    backcolor: "Latar belakang default",
    // [Auto-translated] "Hover background"
    hovercolor: "Arahkan kursor ke latar belakang",
    // [Auto-translated] "Font color"
    fontColor: "Warna font",
    // [Auto-translated] "Background color"
    backgroundColor: "Warna latar belakang",
    // [Auto-translated] "Default color"
    primaryForecolor: "Warna default",
    // [Auto-translated] "Disabled color"
    primaryForecolorLight: "Warna dinonaktifkan",
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
    // [Auto-translated] "Line height"
    lineHeight: "Tinggi garis",
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
      // [Auto-translated] "Contrast"
      contrast: "Kontras",
      // [Auto-translated] "Borderless"
      borderless: "Tanpa batas",
      // [Auto-translated] "Flat"
      flat: "Rata",
      // [Auto-translated] "Plain"
      plain: "Polos",
      // [Auto-translated] "Soft"
      soft: "Lembut",
      // [Auto-translated] "3D"
      threedimensional: ".3D",
      // [Auto-translated] "Monochrome"
      monochrome: "Monokrom"
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
    // [Auto-translated] "Primary"
    "--sjs-primary-background-500": "Utama",
    // [Auto-translated] "Secondary"
    "--sjs-secondary-background-500": "Sekunder",
    // [Auto-translated] "UI elements"
    userInterfaceBaseUnit: "Elemen UI",
    // [Auto-translated] "Font"
    fontScale: "Font",
    names: {

    }
  },
  preset: {
    names: {
      // [Auto-translated] "Basic"
      basic: "Dasar",
      // [Auto-translated] "Advanced"
      advanced: "Lanjutan",
      // [Auto-translated] "Expert"
      expert: "Ahli"
    },
    // [Auto-translated] "Preset applied"
    presetApplied: "Preset diterapkan"
  },
  // Results of survey-core/linter, shown in the JSON tab. A message key is composed as
  linter: {
    // [Auto-translated] "Line: {0}. "
    lineNumber: "Line: {0}.", // {0} 1-based line number, prefixes an entry of the error list
    fixes: {
      "choices/dead-source": {
        // [Auto-translated] "Use the suggested name"
        setName: "Gunakan nama yang disarankan"
      },
      "choices/duplicate": {
        // [Auto-translated] "Remove the repeated item"
        removeItem: "Hapus item yang diulang"
      },
      "element/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "Gunakan tipe yang disarankan"
      },
      "expression/unknown-function": {
        // [Auto-translated] "Use the suggested function"
        renameFunction: "Gunakan fungsi yang disarankan"
      },
      "mask/mismatch": {
        // [Auto-translated] "Use the suggested mask"
        setMaskType: "Gunakan masker yang disarankan"
      },
      "name/duplicate": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "Berikan elemen nama gratis"
      },
      "name/reserved": {
        // [Auto-translated] "Give the element a free name"
        renameElement: "Berikan elemen nama gratis"
      },
      "property/dead": {
        // [Auto-translated] "Remove the property"
        removeKey: "Hapus properti"
      },
      "property/invalid-value": {
        // [Auto-translated] "Use the nearest allowed value"
        clampToRange: "Gunakan nilai terdekat yang diizinkan",
        // [Auto-translated] "Remove the property"
        removeKey: "Hapus properti",
        // [Auto-translated] "Use the suggested value"
        useAllowedValue: "Gunakan nilai yang disarankan"
      },
      "property/not-an-array": {
        // [Auto-translated] "Turn the value into a list"
        wrapInArray: "Ubah nilai menjadi daftar"
      },
      "property/required": {
        // [Auto-translated] "Give the element a name"
        setName: "Berikan nama pada elemen tersebut"
      },
      "property/unknown": {
        // [Auto-translated] "Remove the property"
        removeKey: "Hapus properti",
        // [Auto-translated] "Rename the property"
        renameKey: "Ganti nama properti"
      },
      "reference/unknown": {
        // [Auto-translated] "Use the suggested name"
        renameReference: "Gunakan nama yang disarankan",
        // [Auto-translated] "Use the suggested name"
        setKeyName: "Gunakan nama yang disarankan"
      },
      "trigger/unknown-target": {
        // [Auto-translated] "Use the suggested name"
        setName: "Gunakan nama yang disarankan"
      },
      "trigger/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "Gunakan tipe yang disarankan"
      },
      "validator/unknown-type": {
        // [Auto-translated] "Use the suggested type"
        setType: "Gunakan tipe yang disarankan"
      }
    },
    messages: {
      "expression/syntax": {
        // [Auto-translated] "The expression \"{expression}\" cannot be parsed."
        unparsable: "Ekspresi \"{expression}\" tidak dapat diurai."
      },
      "reference/unknown": {
        // [Auto-translated] "\"{name}\" is not found - no question, panel, page, calculated value, or variable with that name exists."
        notFound: "\"{name}\" tidak ditemukan - tidak ada pertanyaan, panel, halaman, nilai terhitung, atau variabel dengan nama tersebut yang ada.",
        // [Auto-translated] "\"{segment}\" is not found in {containerType} \"{root}\" (reference: {name})."
        inContainer: "\"{segment}\" tidak ditemukan di {containerType} \"{root}\" (referensi: {name}).",
        // [Auto-translated] "\"{segment}\" is not found in the \"{scopePrefix}\" scope (reference: {name})."
        scopedUnknown: "\"{segment}\" tidak ditemukan dalam cakupan \"{scopePrefix}\" (referensi: {name}).",
        // [Auto-translated] "The keyName of \"{name}\" names \"{key}\" - \"{name}\" has no {keyNoun} with that name, so duplicate-key validation never runs."
        keyNameNotFound: "KeyName dari \"{name}\" bernama \"{key}\" - \"{name}\" tidak memiliki {keyNoun} dengan nama tersebut, sehingga validasi duplicate-key tidak pernah berjalan.",
        // [Auto-translated] "\"{name}\" is not found."
        functionArgNotFound: "\"{name}\" tidak ditemukan."
      },
      "reference/self": {
        // [Auto-translated] "The {prop} of \"{name}\" references the element itself (reference: {reference})."
        selfReference: "{prop} dari \"{name}\" merujuk pada elemen itu sendiri (referensi: {referensi})."
      },
      "name/duplicate": {
        // [Auto-translated] "The name \"{name}\" is duplicated."
        elementNames: "Nama \"{name}\" diduplikasi.",
        // [Auto-translated] "The calculated value name \"{name}\" is already used by another calculated value."
        calculatedValueNames: "Nama nilai terhitung \"{name}\" sudah digunakan oleh nilai terhitung lain.",
        // [Auto-translated] "The calculated value \"{name}\" shares its name with another element, so one of them shadows the other."
        calculatedValueShadowsElement: "Nilai yang dihitung \"{name}\" berbagi namanya dengan elemen lain, sehingga salah satu dari mereka mengbayangi elemen lain."
      },
      "name/shadowing": {
        // [Auto-translated] "The {nameKindText} \"{name}\" of this {ownerText} is also the built-in survey variable {{builtIn}} - the survey answers {{name}} first, so this one is unreachable in expressions."
        builtInVariable: "{nameKindText} \"{name}\" dari {ownerText} ini juga merupakan variabel survei bawaan {{builtIn}} - survei menjawab {{name}} terlebih dahulu, jadi yang ini tidak dapat diakses dalam ekspresi.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is also the name of question \"{otherName}\" - both store their answer under the data key \"{valueName}\"."
        valueNameShadowsElement: "ValueName \"{valueName}\" dari \"{name}\" juga merupakan nama pertanyaan \"{otherName}\" - keduanya menyimpan jawaban mereka di bawah kunci data \"{valueName}\".",
        // [Auto-translated] "The data key \"{dataName}\" is also the comment key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        commentKeyCollision: "Kunci data \"{dataName}\" juga merupakan kunci komentar dari \"{base}\" (kunci data ditambah \"{sufiks}\") - satu write secara diam-diam menimpa yang lain.",
        // [Auto-translated] "The data key \"{dataName}\" is also the totals key of \"{base}\" (its data key plus \"{suffix}\") - one write silently overwrites the other."
        totalKeyCollision: "Kunci data \"{dataName}\" juga merupakan kunci total dari \"{base}\" (kunci data ditambah \"{suffix }\") - satu write secara diam-diam menimpa yang lain.",
        // [Auto-translated] "The {trigger} trigger sets the variable \"{name}\", which is also the data key of question \"{questionName}\" - the variable answers {{name}} from then on, not the question."
        variableShadowsQuestion: "Pemicu {trigger} mengatur variabel \"{name}\", yang juga merupakan kunci data dari pertanyaan \"{questionName}\" - variabel menjawab {{name}} mulai saat itu, bukan pertanyaannya."
      },
      "name/reserved": {
        // [Auto-translated] "The name \"{name}\" is reserved - a member of Object.prototype."
        questionName: "Nama \"{name}\" dicadangkan - anggota Object.prototype.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" is reserved - a member of Object.prototype."
        valueName: "ValueName \"{valueName}\" dari \"{name}\" dicadangkan - anggota Object.prototype.",
        // [Auto-translated] "The column \"{name}\" of \"{matrixName}\" is reserved - a member of Object.prototype."
        columnName: "Kolom \"{name}\" dari \"{matrixName}\" dicadangkan - merupakan anggota Object.prototype.",
        // [Auto-translated] "The item \"{name}\" of \"{questionName}\" is reserved - a member of Object.prototype."
        itemName: "Item \"{name}\" dari \"{questionName}\" dicadangkan - anggota Object.prototype.",
        // [Auto-translated] "The row \"{rowValue}\" of \"{name}\" is reserved - a member of Object.prototype."
        rowValue: "Baris \"{rowValue}\" dari \"{name}\" dicadangkan - anggota Object.prototype.",
        // [Auto-translated] "The calculated value \"{name}\" is reserved - a member of Object.prototype."
        calculatedValueName: "Nilai terhitung \"{name}\" dicadangkan - anggota Object.prototype."
      },
      "element/unknown-type": {
        // [Auto-translated] "\"{name}\" has an unknown type \"{type}\"."
        unknownType: "\"{name}\" memiliki tipe \"{type} yang tidak diketahui\".",
        // [Auto-translated] "\"{name}\" has no type - an element without a type is dropped."
        missingType: "\"{name}\" tidak memiliki tipe - elemen tanpa tipe akan dihapus."
      },
      "property/unknown": {
        // [Auto-translated] "\"{key}\" is not a property of {ownerText} ({className})."
        unknownProperty: "\"{key}\" bukan properti dari {ownerText} ({className})."
      },
      "property/dead": {
        // [Auto-translated] "\"{key}\" of {ownerText} is not serializable - it takes effect on load, and is dropped from the JSON whenever the survey is saved again."
        notSerializable: "\"{key}\" dari {ownerText} tidak dapat diserialkan - efek saat dimuat, dan dihapus dari JSON setiap kali survei disimpan kembali.",
        // [Auto-translated] "\"{key}\" and \"{aliasKey}\" of {ownerText} are two names of one property - the run time applies them in the order the JSON writes them, so \"{winner}\" wins."
        aliasDuplicate: "\"{key}\" dan \"{aliasKey}\" dari {ownerText} adalah dua nama dari satu properti - waktu eksekusi menerapkannya sesuai urutan JSON menulisnya, sehingga \"{winner}\" menang.",
        // [Auto-translated] "\"{key}\" is set on \"{name}\", but inputType \"{inputType}\" has no bounds - the run time ignores it."
        inertMinMax: "\"{key}\" diatur pada \"{name}\", tetapi inputType \"{inputType}\" tidak memiliki batasan - waktu eksekusi mengabaikannya."
      },
      "property/invalid-value": {
        // [Auto-translated] "The {key} of {ownerText} is {valueText} - not one of the allowed values ({allowedText})."
        notInChoices: "{key} dari {ownerText} adalah {valueText} - bukan salah satu nilai yang diizinkan ({allowedText}).",
        // [Auto-translated] "The {key} of {ownerText} is {value}, outside its allowed range {rangeText}."
        outOfRange: "{key} dari {ownerText} adalah {value}, di luar rentang yang diizinkan {rangeText}.",
        // [Auto-translated] "The valueName \"{valueName}\" of \"{name}\" contains a \".\" - expressions read {{valueName}} as a path into \"{rootKey}\", so the data key itself can never be addressed."
        valueNameDotted: "ValueName \"{valueName}\" dari \"{name}\" berisi \".\" - ekspresi yang dibaca {{valueName}} sebagai jalur ke \"{rootKey}\", sehingga kunci data itu sendiri tidak pernah dapat dialamatkan."
      },
      "property/required": {
        // [Auto-translated] "{ownerText} has no \"{key}\" - the property is required for a {className}."
        missing: "{ownerText} tidak memiliki \"{key}\" - properti ini diperlukan untuk {className}.",
        // [Auto-translated] "The name of the {className} is {valueText}, not a string - the survey cannot load it."
        notAString: "Nama {className} adalah {valueText}, bukan string - survei tidak dapat memuatnya."
      },
      "property/not-an-array": {
        // [Auto-translated] "The \"{key}\" of {ownerText} is not an array - the property holds a list, and the run time wraps the value into a one-item array."
        notAnArray: "\"{key}\" dari {ownerText} bukanlah array - properti ini menyimpan daftar, dan waktu eksekusi membungkus nilai tersebut menjadi array satu item."
      },
      "variable/collision": {
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the data key of question \"{name}\" - setting the variable deletes the answer stored under that key, and {{name}} answers the host value from then on."
        questionShadowed: "Definisi variabel menyatakan \"{variable}\", yang juga merupakan kunci data dari pertanyaan \"{name}\" - mengatur variabel menghapus jawaban yang tersimpan di bawah kunci tersebut, dan {{name}} menjawab nilai host sejak saat itu.",
        // [Auto-translated] "The variable definition declares \"{variable}\", which is also the name of calculated value \"{name}\" - both write the same slot, and whichever runs last wins."
        calculatedValueShadowed: "Definisi variabel menyatakan \"{variable}\", yang juga merupakan nama nilai terhitung \"{name}\" - keduanya menulis slot yang sama, dan yang terakhir berjalan menang."
      },
      "variable/preset": {
        // [Auto-translated] "variablePresets.definition is not a survey JSON object, so no variable is declared and no preset value can be checked."
        definitionNotAnObject: "variablePreset.definition bukanlah objek JSON survei, sehingga tidak ada variabel yang dideklarasikan dan tidak ada nilai preset yang dapat diperiksa.",
        // [Auto-translated] "variablePresets.presets is not an array, so no preset is declared."
        presetsNotAnArray: "variablePresets.presets bukanlah array, sehingga tidak ada preset yang dideklarasikan.",
        // [Auto-translated] "Preset #{index} is not an object."
        presetNotAnObject: "Preset #{index} bukanlah objek.",
        // [Auto-translated] "Preset #{index} has no name, so nothing can reference it."
        presetNameMissing: "Preset #{index} tidak memiliki nama, jadi tidak ada yang bisa merujuknya.",
        // [Auto-translated] "Preset \"{preset}\" carries no variables object, so it sets nothing."
        presetVariablesNotAnObject: "Preset \"{preset}\" tidak membawa objek variabel, jadi tidak mengatur apa-apa.",
        // [Auto-translated] "Preset \"{preset}\" is declared twice - a lookup by that name answers with the first one."
        duplicateName: "Preset \"{preset}\" dideklarasikan dua kali - pencarian dengan nama tersebut menjawab dengan yang pertama.",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\", which the variable definition does not declare."
        unknownVariable: "Preset \"{preset}\" mengatur \"{variabel}\", yang tidak dideklarasikan oleh definisi variabel.",
        // [Auto-translated] "Preset \"{preset}\" sets \"{variable}\" to a value the variable definition rejects: {errors}"
        invalidValue: "Preset \"{preset}\" mengatur \"{variable}\" ke nilai yang ditolak definisi variabel: {errors}"
      },
      "expression/unknown-function": {
        // [Auto-translated] "The function \"{functionName}\" is not registered."
        notRegistered: "Fungsi \"{functionName}\" tidak terdaftar."
      },
      "cycle/calculated-value": {
        // [Auto-translated] "The calculated value \"{names}\" references itself in its own expression."
        self: "Nilai terhitung \"{names}\" merujuk pada dirinya sendiri dalam ekspresi tersendiri.",
        // [Auto-translated] "Calculated values {names} depend on each other."
        loop: "Nilai yang dihitung {nama} saling bergantung satu sama lain."
      },
      "cycle/trigger": {
        // [Auto-translated] "The trigger reacts to the value it sets itself (\"{setToName}\")."
        self: "Pemicu bereaksi terhadap nilai yang ditetapkan sendiri (\"{setToName}\").",
        // [Auto-translated] "Triggers form a loop through the values they set: {setRoots}."
        loop: "Pemicu membentuk loop melalui nilai yang mereka tetapkan: {setRoots}."
      },
      "cycle/value-write": {
        // [Auto-translated] "The {label} reads the value it writes itself - it runs only when another value changes, so it never runs at all."
        self: "{label} membaca nilai yang ditulisnya sendiri - ia hanya berjalan ketika nilai lain berubah, jadi tidak pernah berjalan sama sekali.",
        // [Auto-translated] "Values are written in a loop: {chain}. Each write reruns the expressions that read it, so the final values depend on the order the questions are answered in."
        loop: "Nilai-nilai ditulis dalam loop: {chain}. Setiap tulisan menjalankan ulang ekspresi yang membacanya, sehingga nilai akhir bergantung pada urutan menjawab pertanyaan."
      },
      "expression/unknown-choice": {
        // [Auto-translated] "The condition compares \"{name}\" to {values} - not among its choices. Available: {available}."
        notAmongChoices: "Kondisi membandingkan \"{name}\" dengan {values} - bukan salah satu pilihannya. Tersedia: {tersedia}.",
        // [Auto-translated] "The condition compares \"{name}\" to {values} - no choice value contains it. Available: {available}."
        noChoiceContains: "Kondisi membandingkan \"{name}\" dengan {values} - tidak ada nilai pilihan yang memuatnya. Tersedia: {tersedia}."
      },
      "expression/type-mismatch": {
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" ({questionType}) has no value to compare."
        "no-value": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" ({questionType}) tidak memiliki nilai untuk dibandingkan.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds {valueShapeText} - ordering and arithmetic operators do not apply to it."
        "non-scalar": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" memuat {valueShapeText} - operator pengurutan dan aritmatika tidak berlaku padanya.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - ordering operators do not apply to it."
        "boolean-ordering": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" adalah pertanyaan boolean - operator pengurutan tidak berlaku untuknya.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a text question - its value is a string, so numeric comparison relies on implicit conversion."
        "text-ordering": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" adalah pertanyaan teks - nilainya adalah string, sehingga perbandingan numerik bergantung pada konversi implisit.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds a date string - comparing it to the number {constValue} cannot hold."
        "date-vs-number": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" memegang string tanggal - membandingkannya dengan angka yang tidak dapat ditahan {constValue}.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is numeric - comparing it to the string \"{constValue}\" cannot hold."
        "number-vs-string": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" bersifat numerik - jika dibandingkan dengan string \"{constValue}\" tidak dapat berlaku.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" holds an array of selected values, so \"=\" compares the whole array."
        "array-vs-scalar": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" menyimpan array nilai yang dipilih, sehingga \"=\" membandingkan seluruh array.",
        // [Auto-translated] "The condition applies \"{operator}\" to \"{name}\": \"{recordName}\" is a boolean question - comparing it to {constValue} cannot hold."
        "boolean-vs-const": "Kondisi ini menerapkan \"{operator}\" pada \"{name}\": \"{recordName}\" adalah pertanyaan boolean - membandingkannya dengan {constValue} tidak dapat berlaku."
      },
      "expression/contradiction": {
        // [Auto-translated] "The {prop} \"{expression}\" is always false, so \"{name}\" is never shown."
        alwaysFalse: "{prop} \"{expression}\" selalu salah, sehingga \"{name}\" tidak pernah ditampilkan.",
        // [Auto-translated] "The {prop} \"{expression}\" never holds, because {facts}."
        alwaysFalseViaConstants: "{prop} \"{ekspresi}\" tidak pernah berlaku, karena {fakta}.",
        // [Auto-translated] "The {prop} \"{expression}\" never holds - no allowed value satisfies it: {facts}."
        outOfRange: "{prop} \"{ekspresi}\" tidak pernah berlaku - tidak ada nilai yang diizinkan yang memenuhinya: {facts}.",
        // [Auto-translated] "The {prop} \"{expression}\" contradicts itself: {facts}."
        unsatisfiable: "{prop} \"{ekspresi}\" bertentangan dengan dirinya sendiri: {fakta}."
      },
      "expression/meaningless-condition": {
        // [Auto-translated] "The {prop} \"{expression}\" is always true, so it decides nothing."
        alwaysTrue: "{prop} \"{ekspresi}\" selalu benar, jadi tidak ada yang diputuskan.",
        // [Auto-translated] "The {prop} \"{expression}\" is arithmetic, not a comparison, so it never gives a yes or no."
        notABoolean: "{prop} \"{ekspresi}\" adalah aritmatika, bukan perbandingan, jadi tidak pernah memberikan jawaban ya atau tidak.",
        // [Auto-translated] "Part of the {prop} \"{expression}\" has a result that is known upfront."
        meaninglessFragment: "Sebagian dari {prop} \"{expression}\" memiliki hasil yang diketahui secara langsung.",
        // [Auto-translated] "The {prop} \"{expression}\" always holds, because {facts} - it decides nothing."
        alwaysTrueViaConstants: "{prop} \"{ekspresi}\" selalu berlaku, karena {facts} - tidak menentukan apa pun."
      },
      "value/not-a-choice": {
        // [Auto-translated] "The default value of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultValue: "Nilai default \"{name}\" adalah {valuesText}, yang tidak pernah bisa ditahan. Diizinkan: {availableText}.",
        // [Auto-translated] "The correct answer of \"{name}\" is {valuesText}, which it can never hold. Allowed: {availableText}."
        correctAnswer: "Jawaban yang benar untuk \"{name}\" adalah {valuesText}, yang tidak pernah bisa dipenuhi. Diizinkan: {availableText}.",
        // [Auto-translated] "The trigger sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        triggerSetValue: "Pemicu mengatur \"{name}\" ke {valuesText}, yang tidak pernah bisa ditahan. Diizinkan: {availableText}.",
        // [Auto-translated] "The default row value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultRowValue: "Nilai baris default menetapkan \"{name}\" menjadi {valuesText}, yang tidak pernah bisa dipegang. Diizinkan: {availableText}.",
        // [Auto-translated] "The default panel value sets \"{name}\" to {valuesText}, which it can never hold. Allowed: {availableText}."
        defaultPanelValue: "Nilai panel default mengatur \"{name}\" ke {valuesText}, yang tidak pernah bisa ditahan. Diizinkan: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such row. Available: {availableText}."
        unknownRowKey: "{prop} dari \"{name}\" menamai \"{key}\" - tidak ada baris seperti itu. Tersedia: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such column. Available: {availableText}."
        unknownColumnKey: "{prop} dari \"{name}\" menamai \"{key}\" - tidak ada kolom seperti itu. Tersedia: {availableText}.",
        // [Auto-translated] "The {prop} of \"{name}\" names \"{key}\" - no such template question. Available: {availableText}."
        unknownQuestionKey: "{prop} dari \"{name}\" menamai \"{key}\" - tidak ada pertanyaan template seperti itu. Tersedia: {availableText}.",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but \"{fromName}\" holds {sourceShapeText} and \"{setToName}\" holds {targetShapeText}."
        copyValueShape: "Pemicu copyvalue menyalin \"{fromName}\" ke dalam \"{setToName}\", tetapi \"{fromName}\" memuat {sourceShapeText} dan \"{setToName}\" memuat {targetShapeText}.",
        // [Auto-translated] "The copyvalue trigger copies \"{fromName}\" into \"{setToName}\", but no value of \"{fromName}\" is among the values \"{setToName}\" can hold. Allowed: {availableText}."
        copyValueNoOverlap: "Pemicu copyvalue menyalin \"{fromName}\" ke dalam \"{setToName}\", tetapi tidak ada nilai \"{fromName}\" yang termasuk dalam nilai yang dapat dipegang oleh \"{setToName}\". Diizinkan: {availableText}."
      },
      "choices/dead-source": {
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\", but no question with that name exists."
        missing: "\"{name}\" menyalin pilihannya dari \"{source}\", tetapi tidak ada pertanyaan dengan nama tersebut.",
        // [Auto-translated] "\"{name}\" copies its choices from itself."
        self: "\"{name}\" menyalin pilihannya dari dirinya sendiri.",
        // [Auto-translated] "\"{name}\" copies its choices from \"{source}\" ({sourceType}), which provides neither choices nor an array of values."
        "not-a-source": "\"{name}\" menyalin pilihannya dari \"{source}\" ({sourceType}), yang tidak menyediakan pilihan maupun array nilai.",
        // [Auto-translated] "\"{name}\" reads {prop} \"{field}\" from \"{source}\", but {sourceType} \"{source}\" has no such {fieldNoun}."
        "missing-field": "\"{name}\" berbunyi {prop} \"{field}\" dari \"{source}\", tetapi {sourceType} \"{source}\" tidak memiliki {fieldNoun} seperti itu."
      },
      "choices/duplicate": {
        // [Auto-translated] "Another item of the {prop} of \"{name}\" already has the value {valueText} - the run time keeps both items."
        duplicateValue: "Item lain dari {prop} dari \"{name}\" sudah memiliki nilai {valueText} - waktu eksekusi mempertahankan kedua item tersebut.",
        // [Auto-translated] "The choices of \"{name}\" contain {valueText} while {toggleProp} is on - it collides with the built-in {specialItemText} item."
        specialItemCollision: "Pilihan \"{name}\" berisi {valueText} saat {toggleProp} aktif - item tersebut bertabrakan dengan item bawaan {specialItemText}."
      },
      "trigger/unknown-target": {
        // [Auto-translated] "The {trigger} trigger targets page \"{name}\", which does not exist."
        pageNotFound: "Pemicu {trigger} menargetkan halaman \"{name}\", yang tidak ada.",
        // [Auto-translated] "The {trigger} trigger targets \"{name}\", but {containerType} \"{root}\" has no {segmentNoun} \"{segment}\"."
        segmentNotFound: "Pemicu {trigger} menargetkan \"{name}\", tetapi {containerType} \"{root}\" tidak memiliki {segmentNoun} \"{segment}\".",
        // [Auto-translated] "The {trigger} trigger {verb} \"{name}\", but no {kindText} with that name exists."
        rootNotFound: "{trigger} trigger {verb} \"{name}\", tetapi tidak ada {kindText} dengan nama tersebut."
      },
      "trigger/unknown-type": {
        // [Auto-translated] "The trigger type \"{type}\" is not known."
        unknownType: "Tipe trigger \"{type}\" tidak diketahui.",
        // [Auto-translated] "The trigger has no type."
        noType: "Pemicunya tidak memiliki tipe."
      },
      "validator/unknown-type": {
        // [Auto-translated] "The validator type \"{type}\" of \"{name}\" is not known."
        unknownType: "Tipe validator \"{type}\" dari \"{name}\" tidak diketahui.",
        // [Auto-translated] "A validator of \"{name}\" has no type."
        noType: "Validator \"{name}\" tidak memiliki tipe."
      },
      "validator/dead": {
        // [Auto-translated] "The {validatorType} validator of \"{name}\" {effectText}: {causeText} ({questionType})."
        wrongValueShape: "Validator {validatorType} dari \"{name}\" {effectText}: {causeText} ({questionType}).",
        // [Auto-translated] "The {validatorType} validator of \"{name}\" requires at least {min} and at most {max} - no answer satisfies it."
        minAboveMax: "Validator {validatorType} dari \"{name}\" membutuhkan setidaknya {min} dan paling banyak {max} - tidak ada jawaban yang memenuhinya.",
        // [Auto-translated] "The answercount validator of \"{name}\" requires at least {minCount} answers, above the {selectable} choices that can be selected together."
        minCountAboveChoices: "Validator answercount dari \"{name}\" membutuhkan setidaknya jawaban {minCount}, di atas pilihan {selectable} yang dapat dipilih bersama-sama.",
        // [Auto-translated] "The regex validator of \"{name}\" has a pattern the engine rejects: {error}."
        invalidRegex: "Validator regex dari \"{name}\" memiliki pola yang ditolak mesin: {error}.",
        // [Auto-translated] "The expression validator of \"{name}\" has no expression, so it always passes."
        emptyExpression: "Validator ekspresi dari \"{name}\" tidak memiliki ekspresi, sehingga selalu lolos."
      },
      "element/count-contradiction": {
        // [Auto-translated] "The {minProp} of \"{name}\" is {min}, above its {maxProp} of {max} - the run time silently adjusts one of them."
        minAboveMax: "{minProp} dari \"{name}\" adalah {min}, di atas {maxProp}-nya dari {max} - waktu run secara diam-diam mengatur salah satunya.",
        // [Auto-translated] "The {countProp} of \"{name}\" is {count}, {direction} its {boundProp} of {bound} - the run time clamps it."
        countOutOfBounds: "{countProp} dari \"{name}\" adalah {count}, {direction} {boundProp} dari {bound} - waktu run yang menjepitnya.",
        // [Auto-translated] "The {stepProp} of \"{name}\" is {step}, but the range it steps through ({minProp}..{maxProp}) spans only {range} - the run time clamps it."
        stepAboveRange: "{stepProp} dari \"{name}\" adalah {step}, tetapi rentang yang dilaluinya ({minProp}.. {maxProp}) hanya mencakup {rentang} - waktu eksekusi yang menjepitnya.",
        // [Auto-translated] "The minSelectedChoices of \"{name}\" is {min}, above the {selectable} choices that can be selected together - the question can never be answered."
        minAboveChoicesCount: "MinSelectedChoices dari \"{name}\" adalah {min}, di atas pilihan {selectable} yang dapat dipilih bersama - pertanyaan ini tidak akan pernah bisa dijawab."
      },
      "element/never-visible": {
        // [Auto-translated] "\"{name}\" can never become visible: its visibleIf reads {reads}, which {deadClause}, so the condition never holds."
        dependsOnDeadValue: "\"{name}\" tidak pernah bisa menjadi visible: visibleIf membacakan {reads}, yang mana {deadClause}, sehingga kondisi ini tidak pernah berlaku."
      },
      "mask/mismatch": {
        // [Auto-translated] "The maskType \"{maskType}\" of \"{name}\" is not a known mask - the run time falls back to no mask at all."
        unknownMaskType: "MaskType \"{maskType}\" dari \"{name}\" bukanlah masker yang diketahui - waktu eksekusi kembali ke tidak ada mask sama sekali.",
        // [Auto-translated] "The maskSettings of \"{name}\" set \"{key}\", which is not a property of the \"{maskType}\" mask - the run time drops it silently."
        unknownSettingsKey: "Pengaturan masker dari \"{name}\" mengatur \"{key}\", yang bukan properti dari masker \"{maskType}\" - waktu eksekusi akan menghilangkannya secara diam-diam.",
        // [Auto-translated] "The maskSettings of \"{name}\" are set without a maskType - the run time keeps only \"saveMaskedValue\" and drops the rest."
        settingsWithoutMask: "Pengaturan masker pada \"{name}\" diatur tanpa maskType - waktu berjalan hanya mempertahankan \"saveMaskedValue\" dan menghilangkan sisanya.",
        // [Auto-translated] "The {maskType} mask of \"{name}\" applies to no input: inputType \"{inputType}\" is masked only for text and tel."
        maskInertForInputType: "Masker {maskType} dari \"{name}\" tidak berlaku untuk input apa pun: inputType \"{inputType}\" hanya disembunyikan untuk teks dan tel.",
        // [Auto-translated] "The datetime mask of \"{name}\" sets min/max without a pattern - the bounds apply to the pattern's date parts, so without one they do nothing."
        minMaxWithoutPattern: "Masker datetime dari \"{name}\" mengatur mini/max tanpa pola - batasannya berlaku untuk bagian tanggal pola, jadi tanpa itu batasan tidak melakukan apa-apa.",
        // [Auto-translated] "The {maskType} mask of \"{name}\" allows at least {min} and at most {max} - no value satisfies it."
        minAboveMax: "Masker {maskType} dari \"{name}\" memungkinkan setidaknya {min} dan paling banyak {max} - tidak ada nilai yang memenuhinya."
      },
      "page/empty": {
        // [Auto-translated] "The dynamic panel \"{name}\" has an empty template - its panels have nothing to render."
        emptyTemplate: "Panel dinamis \"{name}\" memiliki template kosong - panelnya tidak memiliki apa pun untuk dirender.",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements."
        noElements: "{kindText} \"{name}\" tidak memiliki elemen.",
        // [Auto-translated] "The {kindText} \"{name}\" has no elements that can ever render - every element is hidden, guarded by a condition that never holds, or empty."
        noRenderableElements: "{kindText} \"{name}\" tidak memiliki elemen yang bisa dirender - setiap elemen tersembunyi, dijaga oleh kondisi yang tidak pernah berlaku, atau kosong.",
        // [Auto-translated] "The detail elements of \"{name}\" are never shown: its detailPanelMode is \"none\", which is the default."
        detailElementsHidden: "Elemen detail dari \"{name}\" tidak pernah ditampilkan: detailPanelMode-nya adalah \"none\", yang merupakan default."
      }
    },
    // Clauses appended to a base message, in this order
    suffixes: {
      // [Auto-translated] "Position: {0}."
      atPosition: "Posisi: {0}.", // {0} character offset
      // [Auto-translated] "It was built from the legacy name, operator and value properties of the trigger."
      fromLegacyTrigger: "Perangkat ini dibangun dari nama lama, operator, dan properti nilai dari trigger.",
      // [Auto-translated] "Inside: {0}."
      inScope: "Di dalam: {0}.", // {0} name of the namespace
      // [Auto-translated] "Did you mean \"{0}\"?"
      didYouMean: "Maksudmu \"{0}\"?",
      // [Auto-translated] "If it is a custom component, pass its definition to the linter to enable full analysis."
      customComponentHint: "Jika komponen tersebut adalah komponen kustom, teruskan definisinya ke linter untuk memungkinkan analisis penuh.",
      // [Auto-translated] "Register the function before linting, or list it in the linter options."
      registerFunctionHint: "Daftarkan fungsi sebelum linting, atau cantumkan di opsi linter.",
      // [Auto-translated] "A misspelled type is silently dropped at run time, and a custom trigger is not covered by the target and cycle checks."
      triggerTypeDroppedHint: "Tipe yang salah eja akan diam-diam dijatuhkan saat waktu jalan, dan pemicu khusus tidak tercakup oleh pemeriksaan target dan siklus.",
      // [Auto-translated] "If it is a variable set at run time, list it in the linter options."
      knownVariablesHint: "Jika variabel tersebut diatur saat runtime, cantumkan di opsi linter.",
      // [Auto-translated] "The loop may be unreachable if the trigger conditions never hold together - verify the expressions."
      loopMayBeUnreachable: "Loop mungkin tidak dapat dijangkau jika kondisi trigger tidak pernah tetap bersama - verifikasi ekspresi-ekspresinya.",
      // [Auto-translated] "A defaultValueExpression applies only until its question is answered."
      defaultValueExpressionNote: "DefaultValueExpression hanya berlaku sampai pertanyaannya terjawab.",
      // [Auto-translated] "In expression: {0}"
      inExpression: "Dalam ungkapan: {0}", // {0} the expression the defect was found in
      // [Auto-translated] "Referenced in bindings."
      inBindings: "Dirujuk dalam binding.",
      // [Auto-translated] "Referenced in the choicesByUrl {0}."
      inChoicesByUrl: "Direferensikan dalam {0} choicesByUrl.", // {0} the url or the path property
      // [Auto-translated] "Referenced in the \"{0}\" text."
      inText: "Disebutkan dalam teks \"{0}\".", // {0} the localizable property the text belongs to
      // [Auto-translated] "{0}() reads that name from every entry of {1} \"{2}\"."
      functionArgInContainer: "{0} () membacakan nama tersebut dari setiap entri {1} \"{2}\".",
      // [Auto-translated] "The {0}() argument names no question, panel or page."
      functionArgStandalone: "Argumen {0}() tidak menamai pertanyaan, panel, atau halaman.",
      // [Auto-translated] "The deserializer drops a key it does not know."
      deserializerDropsKey: "Deserializer menjatuhkan kunci yang tidak diketahuinya.",
      // [Auto-translated] "The deserializer drops a validator it cannot resolve, so nothing validates."
      validatorDroppedHint: "Deserializer menjatuhkan validator yang tidak bisa diselesaikan, jadi tidak ada yang validasi.",
      // [Auto-translated] "The inputType is \"{0}\"."
      validatorInputType: "InputType adalah \"{0}\".",
      // [Auto-translated] "It is the data key of \"{0}\"."
      dataKeyOwner: "Ini adalah kunci data dari \"{0}\"." // {0} the element that answers under it
    },
    // The facts a contradiction rests on. {ref} is a reference as an expression writes it,
    facts: {
      // [Auto-translated] ", "
      separator: ",",
      // [Auto-translated] " and "
      and: "dan",
      // [Auto-translated] "{ref} is always {value}"
      constant: "{ref} selalu {value}",
      // [Auto-translated] "{ref} is {bounds}"
      range: "{ref} adalah {bounds}",
      // [Auto-translated] "at least {0}"
      atLeast: "setidaknya {0}",
      // [Auto-translated] "at most {0}"
      atMost: "paling banyak {0}",
      conflict: {
        // [Auto-translated] "{ref} cannot be both {values}"
        equalValues: "{ref} tidak bisa menjadi kedua {nilai}",
        // [Auto-translated] "{ref} cannot be {value} and not be it"
        equalAndNotEqual: "{ref} tidak bisa menjadi {value} dan bukan menjadi itu",
        // [Auto-translated] "{ref} cannot be empty and be {value}"
        emptyAndValue: "{ref} tidak boleh kosong dan menjadi {value}",
        // [Auto-translated] "{ref} cannot be empty and not empty"
        emptyAndNotEmpty: "{ref} tidak boleh kosong dan tidak kosong",
        // [Auto-translated] "{ref} cannot be above {min} and below {max}"
        impossibleBounds: "{ref} tidak boleh di atas {min} dan di bawah {max}",
        // [Auto-translated] "{ref} is asked to be one of no value at all"
        emptySet: "{ref} diminta menjadi salah satu yang sama sekali tidak bernilai"
      }
    },
    // Scope hints of reference/unknown. {0} is the expression variable the hint is about.
    hints: {
      // [Auto-translated] "\"{0}.\" references are only available inside a matrix cell or a matrix detail panel."
      rowScopePrefix: "Referensi \"{0}.\" hanya tersedia di dalam sel matriks atau panel detail matriks.",
      // [Auto-translated] "\"{0}\" is only available inside a matrix cell or a matrix detail panel."
      rowScopeStandalone: "\"{0}\" hanya tersedia di dalam sel matriks atau panel detail matriks.",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel or a panel container."
      panelScopePrefix: "Referensi \"{0}.\" hanya tersedia di dalam panel dinamis atau kontainer panel.",
      // [Auto-translated] "\"{0}.\" references are only available inside a dynamic panel."
      panelSiblingPrefix: "Referensi \"{0}.\" hanya tersedia di dalam panel dinamis.",
      // [Auto-translated] "\"{0}\" is only available inside a dynamic panel."
      panelStandalone: "\"{0}\" hanya tersedia di dalam panel dinamis.",
      // [Auto-translated] "\"{0}\" is only available inside choice, row and column conditions."
      itemScope: "\"{0}\" hanya tersedia dalam kondisi pilihan, baris, dan kolom.",
      // [Auto-translated] "\"{0}.\" references are only available inside a composite question."
      compositeScopePrefix: "Referensi \"{0}.\" hanya tersedia dalam pertanyaan komposit.",
      // [Auto-translated] "\"{0}\" is a column of this matrix - reference it with the row prefix."
      matrixColumn: "\"{0}\" adalah kolom dari matriks ini - referensikan dengan awalan baris.",
      // [Auto-translated] "\"{0}\" is a question of this dynamic panel - reference it with the panel prefix."
      panelQuestion: "\"{0}\" adalah pertanyaan dari panel dinamis ini - referensikan dengan awalan panel."
    },
    // Prose the linter reports as a "suggestion" instead of an identifier
    suggestions: {
      // [Auto-translated] "Set inputType: \"number\" on \"{0}\" if it collects numbers."
      setNumberInputType: "Atur inputType: \"number\" pada \"{0}\" jika mengumpulkan angka.",
      // [Auto-translated] "Use \"contains\" or \"anyof\" for multi-select values."
      useContainsOrAnyof: "Gunakan \"contains\" atau \"anyof\" untuk nilai multi-select."
    },
    // Terms the linter splices into a message as a raw code identifier
    terms: {
      containerKind: {
        // [Auto-translated] "page"
        page: "halaman",
        // [Auto-translated] "panel"
        panel: "panel"
      },
      // which of the three name properties shadows a built-in variable
      nameKind: {
        // [Auto-translated] "name"
        name: "nama",
        // [Auto-translated] "valueName"
        valueName: "valueName",
        // [Auto-translated] "name"
        calculatedValue: "nama"
      },
      // the owner of a shadowed name, when the finding carries no element type
      nameOwner: {
        // [Auto-translated] "calculated value"
        calculatedValue: "nilai terhitung",
        // [Auto-translated] "element"
        default: "elemen"
      },
      // the owner of a property, when the JSON gives it no name of its own
      owner: {
        // [Auto-translated] "the survey"
        survey: "Survei",
        // [Auto-translated] "the {0}"
        className: "{0}"
      },
      specialItem: {
        // [Auto-translated] "Other"
        other: "Lainnya",
        // [Auto-translated] "None"
        none: "Tidak ada",
        // [Auto-translated] "Refuse to answer"
        refuse: "Tolak untuk menjawab",
        // [Auto-translated] "Don't know"
        dontknow: "Tidak tahu"
      },
      deadValidatorEffect: {
        // [Auto-translated] "never fires"
        neverFires: "tidak pernah memadamkan",
        // [Auto-translated] "rejects every answer"
        rejectsEveryAnswer: "menolak setiap jawaban",
        // [Auto-translated] "cannot validate"
        default: "tidak dapat memvalidasi"
      },
      // what the answer's shape does to the validator
      deadValidatorCause: {
        // [Auto-translated] "the question holds no answer to validate"
        noAnswer: "Pertanyaan tidak memiliki jawaban untuk divalidasi",
        // [Auto-translated] "a length is read off a text value, and this answer has none"
        textLength: "Sebuah panjang dibaca dari nilai teks, dan jawaban ini tidak memiliki",
        // [Auto-translated] "the answer is not a number and never can be"
        notANumber: "jawabannya bukan angka dan tidak pernah bisa menjadi",
        // [Auto-translated] "a number never matches an e-mail address"
        numberVsEmail: "angka tidak pernah cocok dengan alamat email",
        // [Auto-translated] "the answer is not a list of values"
        notAList: "Jawabannya bukan daftar nilai",
        // [Auto-translated] "the answer is not a value it can check"
        default: "Jawabannya bukan nilai yang bisa diperiksa"
      },
      valueShape: {
        // [Auto-translated] "an array"
        array: "sebuah array",
        // [Auto-translated] "an object"
        object: "sebuah objek"
      },
      // the shapes the two ends of a copyvalue trigger hold
      copyShape: {
        // [Auto-translated] "an array of selected values"
        array: "array nilai yang dipilih",
        // [Auto-translated] "a single value"
        scalar: "satu nilai",
        // [Auto-translated] "a value"
        default: "sebuah nilai"
      },
      // whether a row/panel count falls below its minimum or above its maximum
      countDirection: {
        // [Auto-translated] "below"
        below: "di bawah",
        // [Auto-translated] "above"
        above: "di atas"
      },
      // the verb of element/never-visible, by the number of questions the condition reads
      deadValueClause: {
        // [Auto-translated] "is never visible and never receives a value"
        one: "tidak pernah terlihat dan tidak pernah menerima nilai",
        // [Auto-translated] "are never visible and never receive a value"
        many: "tidak pernah terlihat dan tidak pernah menerima nilai"
      },
      targetKind: {
        // [Auto-translated] "question"
        question: "pertanyaan",
        // [Auto-translated] "question or variable"
        questionvalue: "pertanyaan atau variabel",
        // [Auto-translated] "page"
        page: "halaman"
      },
      triggerVerb: {
        // [Auto-translated] "reads"
        fromName: "membaca",
        // [Auto-translated] "navigates to"
        gotoName: "menavigasi ke",
        // [Auto-translated] "sets"
        default: "himpunan"
      },
      // no "operator" table on purpose: an operator stays the identifier the JSON spells,
      sourceField: {
        // [Auto-translated] "template question"
        paneldynamic: "pertanyaan template",
        // [Auto-translated] "column"
        default: "kolom"
      },
      // the noun for the container level an unknown trigger-target segment belongs to
      segmentNoun: {
        // [Auto-translated] "template question"
        paneldynamic: "pertanyaan template",
        // [Auto-translated] "column"
        matrixdynamic: "kolom",
        // [Auto-translated] "item"
        multipletext: "item",
        // [Auto-translated] "row"
        matrix: "baris",
        // [Auto-translated] "row"
        matrixdropdownRow: "baris",
        // [Auto-translated] "column"
        matrixdropdownColumn: "kolom",
        // [Auto-translated] "field"
        default: "ladang"
      }
    }
  },
  // Localized default JSON for new questions (see settings.toolbox.defaultJSON)
  defaultJson: {
    choices: [
      {
        value: "item1",
        // "Item 1"
        text: "Benda 1"
      },
      {
        value: "item2",
        // "Item 2"
        text: "Benda 2"
      },
      {
        value: "item3",
        // "Item 3"
        text: "Benda 3"
      }
    ],
    columns: [
      {
        value: "column1",
        // "Column 1"
        text: "Kolom 1"
      },
      {
        value: "column2",
        // "Column 2"
        text: "Kolom 2"
      },
      {
        value: "column3",
        // "Column 3"
        text: "Kolom 3"
      }
    ],
    rows: [
      {
        value: "row1",
        // "Row 1"
        text: "Baris 1"
      },
      {
        value: "row2",
        // "Row 2"
        text: "Baris 2"
      }
    ],
    matrixColumns: [
      {
        name: "column1",
        // "Column 1"
        title: "Kolom 1"
      },
      {
        name: "column2",
        // "Column 2"
        title: "Kolom 2"
      },
      {
        name: "column3",
        // "Column 3"
        title: "Kolom 3"
      }
    ]
  }
};

setupLocale({ localeCode: "id", strings: indonesianStrings });