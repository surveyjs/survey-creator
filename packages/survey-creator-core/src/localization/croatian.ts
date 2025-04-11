import { setupLocale } from "survey-creator-core";

export var hrStrings = {
  // survey templates
  survey: {
    edit: "Uređivanje",
    externalHelpLink: "Gledajte i saznajte kako stvoriti ankete",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Molimo ispustite pitanje ovdje iz Toolbox.",
    addLogicItem: "Izradite pravilo za prilagodbu tijeka ankete.",
    copy: "Kopirati",
    duplicate: "Duplikata",
    addToToolbox: "Dodaj u Toolbox",
    deletePanel: "Brisanje ploče",
    deleteQuestion: "Izbriši pitanje",
    convertTo: "Pretvorite u",
    drag: "Povucite element",
  },
  // Creator tabs
  tabs: {
    preview: "Ispitna anketa",
    theme: "Teme",
    translation: "Prijevod",
    designer: "Dizajner ankete",
    json: "JSON urednik",
    logic: "Logika ankete"
  },
  // Question types
  qt: {
    default: "Zadani",
    checkbox: "Ček",
    comment: "Komentar",
    imagepicker: "Berač slika",
    ranking: "Rangiranje",
    image: "Slike",
    dropdown: "Padajući",
    tagbox: "Padajući izbornik s višestrukim odabirom",
    file: "Datoteku",
    html: "Html",
    matrix: "Matrica (jedan izbor)",
    matrixdropdown: "Matrica (višestruki izbor)",
    matrixdynamic: "Matrica (dinamički redovi)",
    multipletext: "Više teksta",
    panel: "Ploča",
    paneldynamic: "Ploča (dinamički paneli)",
    radiogroup: "Radiogrupa",
    rating: "Ocjena",
    text: "Jedan ulaz",
    boolean: "Booleova",
    expression: "Izraz (samo za čitanje)",
    signaturepad: "Jastučić za potpis",
    buttongroup: "Grupa gumba"
  },
  toolboxCategories: {
    general: "Općenito",
    choice: "Pitanja o izboru",
    text: "Pitanja o unosu teksta",
    containers: "Kontejnere",
    matrix: "Matrična pitanja",
    misc: "Ostalo"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Zadani ({0})",
    survey: "Anketa",
    settings: "Postavke ankete",
    settingsTooltip: "Otvaranje postavki ankete",
    surveySettings: "Postavke upitnika",
    surveySettingsTooltip: "Postavke upitnika",
    themeSettings: "Postavke teme",
    themeSettingsTooltip: "Postavke teme",
    creatorSettingTitle: "Postavke autora",
    showPanel: "Pokaži ploču",
    hidePanel: "Sakrij ploču",
    prevSelected: "Odaberi prethodno",
    nextSelected: "Odaberi sljedeće",
    prevFocus: "Fokusiraj prethodno",
    nextFocus: "Usredotoči se sljedeće",
    surveyTypeName: "Anketa",
    pageTypeName: "Stranica",
    panelTypeName: "Panel",
    questionTypeName: "Pitanje",
    columnTypeName: "Stupac",
    addNewPage: "Dodavanje nove stranice",
    moveRight: "Pomicanje udesno",
    moveLeft: "Pomicanje ulijevo",
    deletePage: "Brisanje stranice",
    editPage: "Uređivanje stranice",
    edit: "Uređivanje",
    newPageName: "stranica",
    newQuestionName: "pitanje",
    newPanelName: "ploča",
    newTextItemName: "tekst",
    defaultV2Theme: "Propust",
    modernTheme: "Moderan",
    defaultTheme: "Zadano (naslijeđeno)",
    testSurveyAgain: "Ponovno probna anketa",
    testSurveyWidth: "Širina ankete: ",
    navigateToMsg: "Morao si navigirati do:",
    saveSurvey: "Spremi anketu",
    saveSurveyTooltip: "Spremi anketu",
    saveTheme: "Spremi temu",
    saveThemeTooltip: "Spremi temu",
    jsonHideErrors: "Sakrij pogreške",
    jsonShowErrors: "Pokaži pogreške",
    undo: "Poništiti",
    redo: "Ponoviti",
    undoTooltip: "Poništi posljednju promjenu",
    redoTooltip: "Preusmjeti promjenu",
    expandTooltip: "Proširiti",
    collapseTooltip: "Kolaps",
    expandAllTooltip: "Proširi sve",
    collapseAllTooltip: "Sažmi sve",
    zoomInTooltip: "Zumiranje",
    zoom100Tooltip: "Zumiranje na 100%",
    zoomOutTooltip: "Smanji",
    lockQuestionsTooltip: "Zaključavanje stanja proširenja/sažimanja za pitanja",
    showMoreChoices: "Pokaži više",
    showLessChoices: "Pokaži manje",
    copy: "Kopirati",
    cut: "Izrezati",
    paste: "Zalijepite",
    copyTooltip: "Kopiranje odabira u međuspremnik",
    cutTooltip: "Izrežite odabir na međuspremnik",
    pasteTooltip: "Pasta iz međuspremnika",
    options: "Mogućnosti",
    generateValidJSON: "Generiranje valjanog JSON",
    generateReadableJSON: "Generiranje čitljivog JSON",
    toolbox: "Alatni okvir",
    "property-grid": "Svojstva",
    toolboxFilteredTextPlaceholder: "Upišite za pretraživanje...",
    toolboxNoResultsFound: "Nisu pronađeni rezultati",
    propertyGridFilteredTextPlaceholder: "Upišite za pretraživanje...",
    propertyGridNoResultsFound: "Nisu pronađeni rezultati",
    propertyGridPlaceholderTitle: "Počnite konfigurirati svoj obrazac",
    propertyGridPlaceholderDescription: "Kliknite bilo koju ikonu kategorije da biste istražili postavke upitnika. Dodatne postavke postat će dostupne nakon što dodate element upitnika na površinu dizajna.",
    correctJSON: "Ispravite JSON.",
    surveyResults: "Rezultat ankete: ",
    surveyResultsTable: "Kao tablica",
    surveyResultsJson: "Kao JSON",
    resultsTitle: "Naslov pitanja",
    resultsName: "Naziv pitanja",
    resultsValue: "Vrijednost odgovora",
    resultsDisplayValue: "Vrijednost prikaza",
    modified: "Izmjena",
    saving: "Spremanje",
    saved: "Spremiti",
    propertyEditorError: "Pogreška:",
    saveError: "Pogreška! Sadržaj urednika nije spremljen.",
    translationPropertyGridTitle: "Jezične postavke",
    themePropertyGridTitle: "Postavke teme",
    addLanguageTooltip: "Dodavanje jezika",
    translationLanguages: "Jezici",
    translationDeleteLanguage: "Jeste li sigurni da želite izbrisati sve nizove za ovaj jezik?",
    translationAddLanguage: "Odaberite jezik za prevođenje",
    translationShowAllStrings: "Pokažite sve žice",
    translationShowUsedStringsOnly: "Samo korišteni nizovi",
    translationShowAllPages: "Pokažite sve stranice",
    translationNoStrings: "Nema žica za prevođenje. Promijenite filtar.",
    translationExportToSCVButton: "Izvoz u CSV",
    translationImportFromSCVButton: "Uvoz iz CSV",
    translateUsigAI: "Automatski prevedi sve",
    translateUsigAIFrom: "Prevedi iz: ",
    translationDialogTitle: "Neprevedeni nizovi",
    translationMergeLocaleWithDefault: "Spajanje {0} sa zadanim lokalomwith default locale.",
    translationPlaceHolder: "Prevođenje...",
    translationSource: "Izvor: ",
    translationTarget: "Cilj: ",
    translationYouTubeNotSupported: "YouTube veze nisu podržane.",
    themeExportButton: "Izvoz",
    themeImportButton: "Uvoz",
    surveyJsonExportButton: "Izvoz",
    surveyJsonImportButton: "Uvoz",
    surveyJsonCopyButton: "Kopiraj u međuspremnik",
    themeResetButton: "Vraćanje zadanih postavki teme na zadano",
    themeResetConfirmation: "Želite li zaista resetirati temu? Sve prilagodbe bit će izgubljene.",
    themeResetConfirmationOk: "Da, resetirajte temu",
    bold: "podebljano",
    italic: "kurziv",
    underline: "podcrtavanje",
    addNewQuestion: "Dodaj pitanje",
    selectPage: "Odaberite stranicu...",
    carryForwardChoicesCopied: "Odabiri se kopiraju iz",
    choicesLoadedFromWebText: "Izbori se učitavaju s web-usluge.",
    choicesLoadedFromWebLinkText: "Idi na postavke",
    choicesLoadedFromWebPreviewTitle: "Pretpregled učitanih mogućnosti izbora",
    htmlPlaceHolder: "HTML sadržaj će biti ovdje.",
    panelPlaceHolder: "Ovdje ispustite pitanje iz kutije s alatima.",
    surveyPlaceHolder: "Anketa je prazna. Povucite element iz alatnog okvira ili kliknite donji gumb.",
    pagePlaceHolder: "Stranica je prazna. Povucite element iz alatnog okvira ili kliknite donji gumb.",
    imagePlaceHolder: "Povucite i ispustite sliku ovdje ili kliknite donji gumb i odaberite sliku koju želite prenijeti",
    surveyPlaceHolderMobile: "Kliknite donji gumb \"Dodaj pitanje\" da biste započeli stvaranje obrasca.",
    surveyPlaceholderTitle: "Obrazac je prazan",
    surveyPlaceholderTitleMobile: "Obrazac je prazan",
    surveyPlaceholderDescription: "Povucite element iz okvira s alatima ili kliknite gumb ispod.",
    surveyPlaceholderDescriptionMobile: "Povucite element iz okvira s alatima ili kliknite gumb ispod.",
    previewPlaceholderTitle: "Nema pregleda",
    previewPlaceholderTitleMobile: "Nema pregleda",
    previewPlaceholderDescription: "Anketa ne sadrži vidljive elemente.",
    previewPlaceholderDescriptionMobile: "Anketa ne sadrži vidljive elemente.",
    translationsPlaceholderTitle: "Nema obaveza za prevođenje",
    translationsPlaceholderTitleMobile: "Nema obaveza za prevođenje",
    translationsPlaceholderDescription: "Dodajte elemente u obrazac ili promijenite filtar nizova na alatnoj traci.",
    translationsPlaceholderDescriptionMobile: "Dodajte elemente u obrazac ili promijenite filtar nizova na alatnoj traci.",
    pagePlaceHolderMobile: "Kliknite donji gumb \"Dodaj pitanje\" da biste na stranicu dodali novi element.",
    panelPlaceHolderMobile: "Kliknite donji gumb \"Dodaj pitanje\" da biste na ploču dodali novi element.",
    imagePlaceHolderMobile: "Kliknite donji gumb i odaberite sliku koju želite prenijeti",
    imageChooseImage: "Odabir slike",
    addNewTypeQuestion: "Dodaj {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Stavka ",
    selectFile: "Odabir datoteke",
    removeFile: "Uklanjanje datoteke",
    lg: {
      addNewItem: "Dodaj novo pravilo",
      empty_tab: "Stvorite pravilo za prilagodbu tijeka upitnika.",
      logicPlaceholderTitle: "Nema logičkih pravila",
      logicPlaceholderTitleMobile: "Nema logičkih pravila",
      logicPlaceholderDescription: "Stvorite pravilo za prilagodbu tijeka upitnika.",
      logicPlaceholderDescriptionMobile: "Stvorite pravilo za prilagodbu tijeka upitnika.",
      page_visibilityName: "Vidljivost stranice",
      page_enableName: "Omogući (onemogući stranicu)",
      page_requireName: "Učini stranicu obaveznom",
      panel_visibilityName: "Vidljivost panela",
      panel_enableName: "Omogući/onemogući panel",
      panel_requireName: "Učini stranicu obaveznom",
      question_visibilityName: "Vidljivost pitanja",
      question_enableName: "Pitanje omogućuje/onesposobljava",
      question_requireName: "Pitanje nije obavezno",
      question_resetValueName: "Vrati izvornu vrijednost pitanja",
      question_setValueName: "Postavljanje vrijednosti pitanja",
      column_visibilityName: "Pokaži (sakrij) stupac",
      column_enableName: "Omogući (onemogući stupac)",
      column_requireName: "Učini stupac obaveznim",
      column_resetValueName: "Vraćanje izvorne vrijednosti stupca",
      column_setValueName: "Postavljanje vrijednosti stupca",
      trigger_completeName: "Potpuna anketa",
      trigger_setvalueName: "Postavite vrijednost pitanja",
      trigger_copyvalueName: "Kopiranje vrijednosti pitanja",
      trigger_skipName: "Prijeđite na pitanje",
      trigger_runExpressionName: "Pokretanje prilagođenog izraza",
      completedHtmlOnConditionName: "Prilagođeni 'Thank you page' tekst",
      page_visibilityDescription: "Učinite stranicu vidljivom kada se logička ekspresija vrati istinitom. Inače neka bude nevidljivo.",
      panel_visibilityDescription: "Učinite ploču vidljivom kada se logička ekspresija vrati istinitom. Inače ga držati nevidljivim.",
      panel_enableDescription: "Učinite ploču i sve elemente unutar nje omogućite kada se logička ekspresija vrati istinita. Inače ih držite onesposobljenima.",
      question_visibilityDescription: "Učinite pitanje vidljivim kada se logička ekspresija vrati istinita. Inače ga držati nevidljivim.",
      question_enableDescription: "Omogućite pitanje kada se logička ekspresija vrati istinita. Inače ga držati onemogućen.",
      question_requireDescription: "Pitanje postaje potrebno kada se logička ekspresija vrati istinita.",
      trigger_completeDescription: "Kada se logička ekspresija vrati istinita, anketa postaje dovršena i krajnji korisnik vidi 'Thank you page'.",
      trigger_setvalueDescription: "Kada se vrijednosti pitanja, koje se koriste u logičkom izrazu, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost postavlja na odabrano pitanje.",
      trigger_copyvalueDescription: "Kada se vrijednosti pitanja, koje se koriste u logičkoj ekspresiji, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost jednog odabranog pitanja kopira na drugo odabrano pitanje.",
      trigger_skipDescription: "Kada se logička ekspresija vrati istinita, anketa preskače na / fokusira odabrano pitanje.",
      trigger_runExpressionDescription: "Kada se logička ekspresija vrati istinita, tada se izvodi prilagođeni izraz. Taj rezultat izraza možete neobavezno postaviti u odabrano pitanje.",
      completedHtmlOnConditionDescription: "Ako se logička ekspresija vrati istinita, zadani tekst za 'Thank you page' mijenja se u zadani.",
      itemExpressionText: "Kada se izraz '{0}' vrati istinit", //{0} - the expression
      itemEmptyExpressionText: "Novo pravilo",
      page_visibilityText: "Učinite stranicu {0} vidljivom", //{0} page name
      panel_visibilityText: "Učinite ploču {0} vidljivom", //{0} panel name
      panel_enableText: "Omogući panel x {0}", //{0} panel name
      question_visibilityText: "Učinite pitanje {0} vidljivim", //{0} question name
      question_enableText: "Omogući pitanje {0}", //{0} question name
      question_requireText: "Neka pitanje {0} bude potrebno", //{0} question name
      question_resetValueText: "Vrati izvornu vrijednost za pitanje: {0}", //{0} question name.
      question_setValueText: "Dodijeli vrijednost: {1} pitanje: {0}",
      column_visibilityText: "učiniti stupac {0} pitanja vidljivim {1}", //{0} column name, {1} question name
      column_enableText: "{1} omogućivanje stupca {0} pitanja", //{0} column name, {1} question name
      column_requireText: "Učinite stupac {0} pitanja {1} potrebnim", //{0} column name, {1} question name
      column_resetValueText: "Vrati izvornu vrijednost ćelije za stupac: {0}", //{0} column name
      column_setValueText: "Dodijeli vrijednost ćelije: {1} stupcu: {0}", //{0} column name and {1} setValueExpression
      setValueExpressionPlaceholder: " Izraz čiji će rezultat biti dodijeljen ciljnom pitanju.",
      trigger_completeText: "Anketa se dovrša",
      trigger_setvalueText: "Postavljeno u pitanje: {0} vrijednost {1}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Očisti vrijednost pitanja: {0}", //{0} question name
      trigger_copyvalueText: "Kopirajte u pitanje: {0} vrijednost od pitanja {1}", //{0} and {1} question names
      trigger_skipText: "Anketa preskače na pitanje {0}", //{0} question name
      trigger_runExpressionText1: "Pokretanje izraza: '{0}'", //{0} the expression
      trigger_runExpressionText2: " i dovela u pitanje svoj rezultat: {0}", //{0} question name
      completedHtmlOnConditionText: "Prikazati prilagođeni tekst za 'Thank you page'.",
      showAllQuestions: "Sva pitanja",
      showAllActionTypes: "Sve vrste akcija",
      conditions: "Stanje/Stanja",
      actions: "Akcije",
      expressionEditorTitle: "Definiranje uvjeta",
      actionsEditorTitle: "Definiranje radnji",
      deleteAction: "Brisanje radnje",
      addNewAction: "Dodavanje nove akcije",
      selectedActionCaption: "Odaberite radnju za dodavanje...",
      expressionInvalid: "Logička ekspresija je prazna ili nevažeća. Molim vas, ispravite to.",
      noActionError: "Molim vas, dodajte barem jednu akciju.",
      actionInvalid: "Molimo vas da riješite probleme u svojoj akciji.",
      uncompletedRule_title: "Logička pravila nisu potpuna",
      uncompletedRule_text: "Niste dovršili neka logička pravila. Ako sada napustite karticu, promjene će se izgubiti. Želite li ipak napustiti karticu bez dovršetka promjena?",
      uncompletedRule_apply: "Da",
      uncompletedRule_cancel: "Ne, želim ispuniti pravila."
    }
  },
  // Property Editors
  pe: {
    panel: {
      name: "Naziv ploče",
      title: "Naslov ploče",
      description: "Opis ploče",
      visibleIf: "Učini ploču vidljivom ako",
      requiredIf: "Učinite ploču potrebnom ako",
      questionOrder: "Redoslijed pitanja unutar ploče",
      page: "Nadređena stranica",
      startWithNewLine: "Prikaz ploče na novom retku",
      state: "Stanje sažimanja ploče",
      width: "Širina umetnute ploče",
      minWidth: "Minimalna širina ploče",
      maxWidth: "Maksimalna širina ploče",
      showNumber: "Numerirajte ovu ploču"
    },
    panellayoutcolumn: {
      effectiveWidth: "Efektivna širina, %",
      questionTitleWidth: "Širina naslova pitanja, px"
    },
    paneldynamic: {
      name: "Naziv ploče",
      title: "Naslov ploče",
      description: "Opis ploče",
      visibleIf: "Učini ploču vidljivom ako",
      requiredIf: "Učinite ploču potrebnom ako",
      page: "Premještanje ploče na stranicu",
      startWithNewLine: "Prikaz ploče na novom retku",
      state: "Stanje sažimanja ploče",
      width: "Širina umetnute ploče",
      minWidth: "Minimalna širina ploče",
      maxWidth: "Maksimalna širina ploče",
      confirmDelete: "Potvrda brisanja ploče",
      templateDescription: "Uzorak opisa ploče",
      templateTitle: "Uzorak naslova ploče",
      noEntriesText: "Prazan tekst ploče",
      templateTabTitle: "Uzorak naslova kartice",
      tabTitlePlaceholder: "Rezervirano mjesto naslova tabulatora",
      templateVisibleIf: "Učinite pojedinačnu ploču vidljivom ako",
      showNumber: "Numerirajte ploču",
      titleLocation: "Poravnanje naslova ploče",
      descriptionLocation: "Poravnanje opisa ploče",
      templateQuestionTitleLocation: "Poravnanje naslova pitanja",
      templateQuestionTitleWidth: "Širina naslova pitanja",
      templateErrorLocation: "Poravnanje poruke o pogrešci",
      newPanelPosition: "Novo mjesto ploče",
      showRangeInProgress: "Prikaz trake napretka",
      keyName: "Spriječite dvostruke odgovore u sljedećem pitanju"
    },
    question: {
      name: "Naziv pitanja",
      title: "Naslov pitanja",
      description: "Opis pitanja",
      visibleIf: "Učinite pitanje vidljivim ako",
      requiredIf: "Neka pitanje bude potrebno ako:",
      page: "Nadređena stranica",
      state: "Stanje sažimanja okvira pitanja",
      showNumber: "Brojite ovo pitanje",
      titleLocation: "Poravnanje naslova pitanja",
      descriptionLocation: "Poravnanje opisa pitanja",
      errorLocation: "Poravnanje poruke o pogrešci",
      indent: "Povećajte unutarnju uvlaku",
      width: "Širina umetnutog pitanja",
      minWidth: "Minimalna širina pitanja",
      maxWidth: "Maksimalna širina pitanja",
      textUpdateMode: "Ažuriranje vrijednosti polja unosa"
    },
    signaturepad: {
      signatureWidth: "Širina područja potpisa",
      signatureHeight: "Visina područja potpisa",
      signatureAutoScaleEnabled: "Automatsko mijenjanje područja potpisa",
      showPlaceholder: "Pokaži rezervirano mjesto",
      placeholder: "Tekst rezerviranog mjesta",
      placeholderReadOnly: "Tekst rezerviranog mjesta u načinu samo za čitanje ili pretpregledu",
      allowClear: "Prikaz gumba Očisti unutar područja za potpis",
      penMinWidth: "Minimalna širina olovke",
      penMaxWidth: "Maksimalna širina olovke",
      penColor: "Boja poteza"
    },
    comment: {
      rows: "Visina polja unosa (u recima)"
    },
    showQuestionNumbers: "Prikazate brojeve pitanja",
    questionStartIndex: "Indeks pokretanja pitanja (1, 2 ili 'A', 'a')",
    expression: {
      name: "Naziv izraza",
      title: "Naslov izraza",
      description: "Opis izraza",
      expression: "Izraz"
    },
    trigger: {
      expression: "Izraz"
    },
    calculatedvalue: {
      expression: "Izraz"
    },
    // survey templates
    survey: {
      title: "Naslov",
      description: "Opis upitnika",
      readOnly: "Neka anketa bude samo za čitanje"
    },
    page: {
      name: "Naziv stranice",
      title: "Naslov",
      description: "Opis stranice",
      visibleIf: "Učini stranicu vidljivom ako",
      requiredIf: "Učini stranicu potrebnom ako",
      timeLimit: "Vremensko ograničenje za dovršetak stranice (u sekundama)",
      questionOrder: "Redoslijed pitanja na stranici"
    },
    matrixdropdowncolumn: {
      name: "Naziv stupca",
      title: "Naslov stupca",
      isUnique: "Sprječavanje dvostrukih odgovora",
      width: "Širina stupca",
      minWidth: "Minimalna širina stupca",
      rows: "Visina polja unosa (u recima)",
      visibleIf: "Učini stupac vidljivim ako",
      requiredIf: "Učinite stupac potrebnim ako",
      showInMultipleColumns: "Svaka mogućnost u zasebnom stupcu"
    },
    multipletextitem: {
      name: "Ime",
      title: "Naslov"
    },
    masksettings: {
      saveMaskedValue: "Spremanje maskirane vrijednosti u rezultate upitnika"
    },
    patternmask: {
      pattern: "Uzorak vrijednosti"
    },
    datetimemask: {
      min: "Minimalna vrijednost",
      max: "Maksimalna vrijednost"
    },
    numericmask: {
      allowNegativeValues: "Dopusti negativne vrijednosti",
      thousandsSeparator: "Razdjelnik tisućica",
      decimalSeparator: "Decimalni razdjelnik",
      precision: "Preciznost vrijednosti",
      min: "Minimalna vrijednost",
      max: "Maksimalna vrijednost"
    },
    currencymask: {
      prefix: "Prefiks valute",
      suffix: "Sufiks valute"
    },
    imageHeight: "Visina slike",
    imageWidth: "Širina slike",
    valueName: "Naziv vrijednosti",
    defaultDisplayValue: "Zadana vrijednost prikaza za dinamičke tekstove",
    rateDescriptionLocation: "Poravnanje natpisa",
    size: "Širina polja za unos (u znakovima)",
    cellErrorLocation: "Poravnanje poruke o pogrešci ćelije",
    enabled: "Omogućen",
    disabled: "Onemogućen",
    inherit: "Naslijediti",
    apply: "Primijeniti",
    ok: "OK",
    save: "Spremiti",
    clear: "Jasan",
    saveTooltip: "Spremiti",
    cancel: "Otkazati",
    set: "Skup",
    reset: "Resetirati",
    change: "Mijenjati",
    refresh: "Osvježi",
    close: "Blizak",
    delete: "Izbrisati",
    add: "Dodati",
    addNew: "Dodaj novo",
    addItem: "Kliknite da biste dodali stavku...",
    removeItem: "Kliknite da biste uklonili stavku...",
    dragItem: "Vucite stavku",
    addOther: "Drugih",
    addSelectAll: "Odaberite sve",
    addNone: "Nitko",
    removeAll: "Uklonite sve",
    edit: "Uređivanje",
    back: "Povratak bez uštede",
    backTooltip: "Povratak bez uštede",
    saveAndBack: "Spremanje i vraćanje",
    saveAndBackTooltip: "Spremanje i vraćanje",
    doneEditing: "Učinjeno",
    editChoices: "Uređivanje izbora",
    showChoices: "Pokažite izbore",
    move: "Premjestiti",
    empty: "<empty>",
    emptyValue: "Vrijednost je prazna",
    fastEntry: "Brzi unos",
    fastEntryNonUniqueError: "Vrijednost '{0}' nije jedinstvena",
    fastEntryChoicesCountError: "Ograničite broj stavki s {0} na {1}",
    fastEntryChoicesMinCountError: "Unesite najmanje {0} stavki",
    fastEntryPlaceholder: "Podatke možete postaviti u sljedećem obliku:\nvrijednost1|tekst\nvrijednost2",
    formEntry: "Unos obrasca",
    testService: "Testirajte uslugu",
    itemSelectorEmpty: "Odaberite element",
    conditionActionEmpty: "Odaberite radnju",
    conditionSelectQuestion: "Odaberite pitanje...",
    conditionSelectPage: "Odaberite stranicu...",
    conditionSelectPanel: "Odabir ploče...",
    conditionValueQuestionTitle: "Unesite/odaberite vrijednost",
    aceEditorHelp: "Pritisnite ctrl + prostor kako biste dobili savjet o završetku ekspresije",
    aceEditorRowTitle: "Trenutni redk",
    aceEditorPanelTitle: "Trenutna ploča",
    showMore: "Više detalja potražite u dokumentaciji",
    assistantTitle: "Dostupna pitanja:",
    cellsEmptyRowsColumns: "Trebao bi postojati barem jedan stupac ili red",
    showPreviewBeforeComplete: "Pregled odgovora prije slanja ankete",
    overridingPropertyPrefix: "Postavio ",
    resetToDefaultCaption: "Brisanje",
    propertyIsEmpty: "Unesite vrijednost",
    propertyIsNoUnique: "Unesite jedinstvenu vrijednost",
    propertyNameIsNotUnique: "Unesite jedinstveno ime",
    propertyNameIsIncorrect: "Nemojte koristiti rezervirane riječi: \"stavka\", \"izbor\", \"ploča\", \"red\".",
    listIsEmpty: "Dodavanje nove stavke",
    "listIsEmpty@choices": "Još nema izbora",
    "listIsEmpty@columns": "Još nemate kolumne",
    "listIsEmpty@gridLayoutColumns": "Još nemate stupce izgleda",
    "listIsEmpty@rows": "Još nemate redaka",
    "listIsEmpty@validators": "Još nemate pravila provjere valjanosti",
    "listIsEmpty@calculatedValues": "Još nemate prilagođene varijable",
    "listIsEmpty@triggers": "Još nemaš okidača",
    "listIsEmpty@navigateToUrlOnCondition": "Još nemate poveznice",
    "listIsEmpty@pages": "Još nemate stranice",
    "addNew@choices": "Dodavanje izbora",
    "addNew@columns": "Dodaj novi stupac",
    "addNew@rows": "Dodaj novi redak",
    "addNew@validators": "Dodaj novo pravilo",
    "addNew@calculatedValues": "Dodaj novu varijablu",
    "addNew@triggers": "Dodaj novi okidač",
    "addNew@navigateToUrlOnCondition": "Dodaj novi URL",
    "addNew@pages": "Dodaj novu stranicu",
    expressionIsEmpty: "Izraz je prazan",
    value: "Vrijednost",
    text: "tekst",
    rowid: "ID redaka",
    imageLink: "Veza slike",
    columnEdit: "Uređivanje stupca: {0}",
    itemEdit: "Uređivanje stavke: {0}",
    url: "Url",
    path: "Put",
    choicesbyurl: {
      url: "URL web-usluge",
      valueName: "Dohvaćanje vrijednosti iz sljedećeg JSON polja"
    },
    titleName: "Naziv naslova",
    imageLinkName: "Dohvaćanje URL-ova slika iz sljedećeg JSON polja",
    allowEmptyResponse: "Dopusti prazan odgovor",
    titlePlaceholder: "Ulazni naslov ovdje",
    surveyTitlePlaceholder: "Naslov ulazne ankete ovdje",
    pageTitlePlaceholder: "Naslov ulazne stranice ovdje",
    startPageTitlePlaceholder: "Početna stranica",
    descriptionPlaceholder: "Unesite opis",
    surveyDescriptionPlaceholder: "Unesite opis ankete",
    pageDescriptionPlaceholder: "Unesite opis stranice",
    textWrapEnabled: "Prelamanje izbora",
    showOtherItem: "Ima i drugu stavku",
    otherText: "Tekst druge stavke",
    showNoneItem: "Nema stavku",
    showRefuseItem: "Dopusti mogućnost Odbij odgovoriti",
    showDontKnowItem: "Dopusti mogućnost Ne znam",
    noneText: "Nijedan tekst stavke",
    showSelectAllItem: "Sadrži odaberite sve stavke",
    selectAllText: "Odaberite sve stavke tekst",
    choicesMin: "Minimalna vrijednost za automatski generirane stavke",
    choicesMax: "Maksimalna vrijednost za automatski generirane stavke",
    choicesStep: "Razlika između automatski generiranih stavki",
    name: "Ime",
    title: "Naslov",
    cellType: "Vrsta ćelije",
    colCount: "Broj stupaca",
    choicesOrder: "Odaberite redoslijed izbora",
    allowCustomChoices: "Dopusti prilagođene izbore",
    visible: "Je li vidljivo?",
    isRequired: "Je potrebno?",
    markRequired: "Označi kao obavezno",
    removeRequiredMark: "Uklanjanje potrebne oznake",
    eachRowRequired: "Zahtijevati odgovor za sve redove",
    eachRowUnique: "Sprječavanje dvostrukih odgovora u recima",
    requiredErrorText: "Potreban tekst pogreške",
    startWithNewLine: "Počinje li s novom linijom?",
    rows: "Broj redaka",
    cols: "Broj stupaca",
    placeholder: "Držač ulaznog mjesta",
    showPreview: "Prikaz područja pretpregleda",
    storeDataAsText: "Pohranite sadržaj datoteke u rezultat JSON kao tekst",
    maxSize: "Maksimalna veličina datoteke u bytes",
    rowCount: "Broj redaka",
    columnLayout: "Raspored stupaca",
    addRowButtonLocation: "Dodavanje lokacije gumba redaka",
    transposeData: "Transponiranje redaka u stupce",
    addRowText: "Dodavanje teksta gumba redak",
    removeRowText: "Uklanjanje teksta gumba redaka",
    rateMin: "Minimalna stopa",
    rateMax: "Maksimalna stopa",
    rateStep: "Korak stope",
    minRateDescription: "Opis minimalne stope",
    maxRateDescription: "Opis maksimalne stope",
    inputType: "Vrsta unosa",
    optionsCaption: "Opis opcija",
    defaultValue: "Zadana vrijednost",
    cellsDefaultRow: "Zadani tekstovi ćelija",
    surveyEditorTitle: "Uređivanje postavki ankete",
    qEditorTitle: "Uređivanje: {0}",
    maxLength: "Maksimalna duljina",
    buildExpression: "Graditi",
    editExpression: "Uređivanje",
    and: "i",
    or: "ili",
    remove: "Ukloniti",
    addCondition: "Dodavanje stanja",
    emptyLogicPopupMessage: "Odaberite pitanje da biste započeli konfiguriranje uvjeta.",
    if: "Ako",
    then: "zatim",
    setToName: "Ciljno pitanje",
    fromName: "Pitanje iz kojeg treba kopirati odgovor",
    gotoName: "Pitanje na koje treba preskočiti",
    ruleIsNotSet: "Pravilo nije ispravno",
    includeIntoResult: "Uključi u rezultate ankete",
    showTitle: "Pokaži/sakrij naslov",
    expandCollapseTitle: "Naslov proširenja/kolapsa",
    locale: "Zadani jezik",
    simulator: "Odaberite uređaj",
    landscapeOrientation: "Krajolik",
    portraitOrientation: "Prebacivanje na okomito usmjerenje",
    clearInvisibleValues: "Jasne nevidljive vrijednosti",
    cookieName: "Naziv kolačića (onemogućiti anketu dva puta lokalno)",
    partialSendEnabled: "Pošaljite rezultate ankete na sljedeću stranicu",
    storeOthersAsComment: "Pohranite vrijednost 'others' u zasebnom polju",
    showPageTitles: "Prikazate naslove stranica",
    showPageNumbers: "Prikazate brojeve stranica",
    pagePrevText: "Tekst prethodnog gumba stranice",
    pageNextText: "Tekst sljedećeg gumba stranice",
    completeText: "Complete button text",
    previewText: "Tekst gumba za pretpregled",
    editText: "Uređivanje teksta gumba",
    startSurveyText: "Tekst gumba za pokretanje",
    showNavigationButtons: "Prikakanje navigacijskih tipki (zadana navigacija)",
    navigationButtonsLocation: "Poravnanje navigacijskih gumba",
    showPrevButton: "Prikagnite prethodni gumb (korisnik se može vratiti na prethodnu stranicu)",
    firstPageIsStartPage: "Prva stranica u anketi je početna stranica.",
    showCompletePage: "Prikagušite dovršenu stranicu na kraju (completedHtml)",
    autoAdvanceEnabled: "Kada odgovarate na sva pitanja, idite automatski na sljedeću stranicu",
    autoAdvanceAllowComplete: "Automatsko ispunjavanje upitnika",
    showProgressBar: "Pokaži traku napretka",
    progressBarLocation: "Poravnanje trake napretka",
    questionTitleLocation: "Lokacija naslova pitanja",
    questionTitleWidth: "Širina naslova pitanja",
    requiredMark: "Pitanje je zahtijevalo simbole",
    questionTitleTemplate: "Predložak naslova pitanja, zadano je: '{no}. {require} {title}'",
    questionErrorLocation: "Mjesto pogreške u pitanju",
    autoFocusFirstQuestion: "Usredotočite prvo pitanje na promjenu stranice",
    questionOrder: "Redoslijed elemenata na stranici",
    timeLimit: "Maksimalno vrijeme za dovršaje ankete",
    timeLimitPerPage: "Maksimalno vrijeme za dovršanje stranice u anketi",
    showTimer: "Koristite mjerač vremena",
    timerLocation: "Pokaži ploču timera",
    timerInfoMode: "Prikazate način rada timer panela",
    renderMode: "Način prikaza",
    allowAddPanel: "Dopustite dodavanje ploče",
    allowRemovePanel: "Dopustite uklanjanje ploče",
    addPanelText: "Dodavanje teksta panela",
    removePanelText: "Removing panel text",
    isSinglePage: "Uklanjanje teksta ploče",
    html: "Html",
    setValue: "Odgovor",
    dataFormat: "Oblik slike",
    allowAddRows: "Dopusti dodavanje redaka",
    allowRemoveRows: "Dopusti uklanjanje redaka",
    allowRowReorder: "Dopusti povlačenje i ispuštanje retka",
    responsiveImageSizeHelp: "Ne primjenjuje se ako navedete točnu širinu ili visinu slike.",
    minImageWidth: "Minimalna širina slike",
    maxImageWidth: "Maksimalna širina slike",
    minImageHeight: "Minimalna visina slike",
    maxImageHeight: "Maksimalna visina slike",
    minValue: "Minimalna vrijednost",
    maxValue: "Maksimalna vrijednost",
    caseInsensitive: "Bez osjetljivosti na velika i mala slova",
    minLength: "Minimalna duljina",
    allowDigits: "Dopustite znamenke",
    minCount: "Minimalno brojanje",
    maxCount: "Maksimalni broj",
    regex: "Redoviti izraz",
    surveyvalidator: {
      text: "Poruka o pogrešci",
      expression: "Izraz za provjeru valjanosti"
    },
    totalText: "Ukupan tekst",
    totalType: "Ukupna vrsta",
    totalExpression: "Ukupni izraz",
    totalDisplayStyle: "Ukupan stil prikaza",
    totalCurrency: "Ukupna valuta",
    totalFormat: "Ukupan format",
    logo: "Logotip (URL ili niz kodiran base64)",
    questionsOnPageMode: "Struktura upitnika",
    maxTextLength: "Maksimalna duljina odgovora (u znakovima)",
    maxCommentLength: "Maksimalna duljina komentara (u znakovima)",
    commentAreaRows: "Visina područja komentara (u recima)",
    autoGrowComment: "Ako je potrebno, automatsko proširivanje područja komentara",
    allowResizeComment: "Dopusti korisnicima promjenu veličine tekstnih područja",
    textUpdateMode: "Ažuriranje vrijednosti tekstnog pitanja",
    maskType: "Vrsta maske za unos",
    autoFocusFirstError: "Postavljanje fokusa na prvi odgovor koji nije valjan",
    checkErrorsMode: "Pokreni provjeru valjanosti",
    validateVisitedEmptyFields: "Provjera valjanosti praznih polja pri izgubljenom fokusu",
    navigateToUrl: "Navigacija do URL-a",
    navigateToUrlOnCondition: "Dinamički URL",
    completedBeforeHtml: "Oznaka koja pokazuje je li korisnik već ispunio ovu anketu",
    completedHtml: "Označavanje stranice dovršeno u anketi",
    completedHtmlOnCondition: "Oznaka stranice Dynamic Survey Completed",
    loadingHtml: "Oznaka za prikaz tijekom učitavanja modela upitnika",
    commentText: "Tekst područja komentara",
    autocomplete: "Vrsta samodovršetka",
    labelTrue: "Oznaka \"True\"",
    labelFalse: "Oznaka \"False\"",
    allowClear: "Prikaz gumba Očisti",
    searchMode: "Način pretraživanja",
    displayStyle: "Stil prikaza vrijednosti",
    format: "Oblikovani niz",
    maximumFractionDigits: "Maksimalne djelomične znamenke",
    minimumFractionDigits: "Minimalne djelomične znamenke",
    useGrouping: "Prikaži razdjelnike grupiranja",
    allowMultiple: "Dopusti više datoteka",
    allowImagesPreview: "Pretpregled slika",
    acceptedTypes: "Prihvaćene vrste datoteka",
    waitForUpload: "Pričekajte da se prijenos dovrši",
    needConfirmRemoveFile: "Potvrda brisanja datoteke",
    detailPanelMode: "Mjesto ploče s detaljima",
    minRowCount: "Najmanji broj redaka",
    maxRowCount: "Maksimalan broj redaka",
    confirmDelete: "Potvrda brisanja retka",
    confirmDeleteText: "Potvrdna poruka",
    panelCount: "Početni broj ploča",
    minPanelCount: "Najmanji broj ploča",
    maxPanelCount: "Maksimalan broj ploča",
    panelsState: "Stanje proširenja unutarnje ploče",
    prevPanelText: "Opis alata gumba Prethodna ploča",
    nextPanelText: "Opis alata gumba Sljedeća ploča",
    removePanelButtonLocation: "Ukloni mjesto gumba ploče",
    hideIfRowsEmpty: "Sakrij pitanje ako nema redaka",
    hideColumnsIfEmpty: "Sakrij stupce ako nema redaka",
    rateValues: "Vrijednosti prilagođene stope",
    rateCount: "Broj stopa",
    autoGenerate: "Kako odrediti vrijednosti stope?",
    hideIfChoicesEmpty: "Sakrij pitanje ako ne sadrži izbora",
    minWidth: "Minimalna širina (u CSS-prihvaćenim vrijednostima)",
    maxWidth: "Maksimalna širina (u CSS-prihvaćenim vrijednostima)",
    width: "Širina (u CSS-prihvaćenim vrijednostima)",
    showHeader: "Pokaži zaglavlja stupaca",
    horizontalScroll: "Pokaži vodoravni klizač",
    columnMinWidth: "Minimalna širina stupca (u CSS-prihvaćenim vrijednostima)",
    rowTitleWidth: "Širina zaglavlja retka (u CSS-prihvaćenim vrijednostima)",
    valueTrue: "Vrijednost \"True\"",
    valueFalse: "Vrijednost \"False\"",
    minErrorText: "Poruka o pogrešci \"Vrijednost je ispod minimuma\"",
    maxErrorText: "Poruka o pogrešci \"Vrijednost premašuje maksimum\"",
    otherErrorText: "Poruka o pogrešci \"Prazan komentar\"",
    keyDuplicationError: "Poruka o pogrešci \"Nejedinstvena vrijednost ključa\"",
    minSelectedChoices: "Minimalno odabrani odabiri",
    maxSelectedChoices: "Maksimalan broj odabranih izbora",
    logoWidth: "Širina logotipa (u CSS-prihvaćenim vrijednostima)",
    logoHeight: "Visina logotipa (u CSS-prihvaćenim vrijednostima)",
    readOnly: "Samo za čitanje",
    enableIf: "Može se uređivati ako",
    noRowsText: "Poruka \"Bez redaka\"",
    separateSpecialChoices: "Razdvoji posebne odabire (Ništa, Ostalo, Odaberi sve)",
    choicesFromQuestion: "Kopiraj odabire iz sljedećeg pitanja",
    choicesFromQuestionMode: "Koje izbore kopirati?",
    choiceValuesFromQuestion: "Koristite vrijednosti iz sljedećeg stupca matrice ili pitanja panela kao ID-ove izbora",
    choiceTextsFromQuestion: "Koristite vrijednosti iz sljedećeg stupca matrice ili pitanja na ploči kao tekstove izbora",
    progressBarShowPageTitles: "Prikaz naslova stranica na traci tijeka",
    progressBarShowPageNumbers: "Prikaz brojeva stranica na traci tijeka",
    showCommentArea: "Prikaz područja komentara",
    commentPlaceholder: "Rezervirano mjesto područja komentara",
    displayRateDescriptionsAsExtremeItems: "Opisi brzine prikaza kao ekstremne vrijednosti",
    rowOrder: "Redoslijed redaka",
    columnsLayout: "Izgled stupca",
    columnColCount: "Broj ugniježđenih stupaca",
    correctAnswer: "Točan odgovor",
    defaultPanelValue: "Zadane vrijednosti",
    cells: "Tekstovi ćelija",
    fileInputPlaceholder: "Odabir datoteke ili lijepljenje veze na datoteku...",
    keyName: "Stupac ključa",
    itemvalue: {
      visibleIf: "Učini mogućnost vidljivom ako",
      enableIf: "Učini mogućnost odabranom ako"
    },
    "itemvalue@rows": {
      visibleIf: "Učini redak vidljivim ako",
      enableIf: "Učinite redak mogućim za uređivanje ako"
    },
    imageitemvalue: {
      text: "Zamjenski tekst"
    },
    logoPosition: "Položaj logotipa",
    addLogo: "Dodavanje logotipa...",
    changeLogo: "Promjena logotipa...",
    logoPositions: {
      none: "Uklanjanje logotipa",
      left: "Lijevo",
      right: "Desno",
      top: "Na vrhu",
      bottom: "Na dnu"
    },
    previewMode: "Način pregleda",
    gridLayoutEnabled: "Omogućivanje izgleda rešetke",
    gridLayoutColumns: "Stupci rasporeda rešetke",
    maskSettings: "Postavke maske",
    detailErrorLocation: "Poravnanje poruke o pogrešci proširenja retka",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Izgled ploče"
      },
      general: "Općenito",
      fileOptions: "Mogućnosti",
      html: "Html Editor",
      columns: "Stupce",
      rows: "Redaka",
      choices: "Izbora",
      items: "Stavke",
      visibleIf: "Vidljivo ako",
      enableIf: "Omogući ako",
      requiredIf: "Potrebno ako",
      rateValues: "Vrijednosti cijena",
      choicesByUrl: "Izbori s weba",
      matrixChoices: "Zadani izbori",
      multipleTextItems: "Unosi teksta",
      numbering: "Numeriranje",
      validators: "Validatori",
      navigation: "Navigacija",
      question: "Pitanje",
      pages: "Stranice",
      timer: "Timer/Kviz",
      calculatedValues: "Izračunate vrijednosti",
      triggers: "Aktivira",
      templateTitle: "Naslov predloška",
      totals: "Zbrojeve",
      logic: "Logika",
      mask: "Postavke maske za unos",
      layout: {
        panel: "Tlocrt",
        question: "Tlocrt",
        base: "Tlocrt"
      },
      data: "Podataka",
      validation: "Provjera valjanosti",
      cells: "Ćelije",
      showOnCompleted: "Prikazuje se na dovršenom",
      logo: "Logotip u naslovu ankete",
      slider: "Klizač",
      expression: "Izraz",
      questionSettings: "Postavke pitanja",
      header: "Zaglavlje",
      background: "Pozadina",
      appearance: "Izgled",
      accentColors: "Naglašavajuće boje",
      surfaceBackground: "Pozadina površine",
      scaling: "Skaliranje",
      others: "Drugi"
    },
    editProperty: "Uređivanje objekta '{0}'",
    items: "[ Stavke: {0} ]",
    choicesVisibleIf: "Izbori su vidljivi ako",
    choicesEnableIf: "Izbori se mogu odabrati ako",
    columnsEnableIf: "Stupci su vidljivi ako",
    rowsEnableIf: "Reci su vidljivi ako",
    innerIndent: "Dodavanje unutarnjih uvlaka",
    copyDefaultValueFromLastEntry: "Koristite odgovore iz posljednjeg unosa kao standardne",
    enterNewValue: "Unesite vrijednost.",
    noquestions: "U anketi nema nikakvog pitanja.",
    createtrigger: "Izradite okidač",
    titleKeyboardAdornerTip: "Pritisnite gumb za unos za uređivanje",
    keyboardAdornerTip: "Pritisnite gumb enter za uređivanje stavke, pritisnite gumb za brisanje stavke, pritisnite alt plus strelica prema gore ili strelica prema dolje za pomicanje stavke.",
    triggerOn: "Na ",
    triggerMakePagesVisible: "Učinite stranice vidljivima:",
    triggerMakeQuestionsVisible: "Učinite elemente vidljivima:",
    triggerCompleteText: "Dovršite anketu ako uspijete.",
    triggerNotSet: "Okidač nije postavljen",
    triggerRunIf: "Trčanje ako",
    triggerSetToName: "Promjena vrijednosti: ",
    triggerFromName: "Vrijednost kopiranja iz: ",
    triggerRunExpression: "Postisni ovaj izraz:",
    triggerSetValue: "za: ",
    triggerGotoName: "Idi na pitanje:",
    triggerIsVariable: "Ne stavljajte varijablu u rezultat ankete.",
    triggerRunExpressionEmpty: "Unesite valjani izraz",
    emptyExpressionPlaceHolder: "Ovdje upišite izraz...",
    noFile: "Nema odabira datoteke",
    clearIfInvisible: "Očisti vrijednost ako pitanje postane skriveno",
    valuePropertyName: "Naziv svojstva Vrijednost",
    searchEnabled: "Omogući pretraživanje",
    hideSelectedItems: "Sakrij odabrane stavke",
    closeOnSelect: "Zatvaranje padajućeg izbornika nakon odabira",
    verticalAlign: "Okomito poravnanje",
    alternateRows: "Zamjenski reci",
    columnsVisibleIf: "Stupci su vidljivi ako",
    rowsVisibleIf: "Reci su vidljivi ako",
    otherPlaceholder: "Rezervirano mjesto područja komentara",
    filePlaceholder: "Tekst rezerviranog mjesta datoteke",
    photoPlaceholder: "Tekst rezerviranog mjesta za fotografije",
    fileOrPhotoPlaceholder: "Tekst rezerviranog mjesta za datoteku ili fotografiju",
    rateType: "Vrsta stope",
    url_placeholder: "Npr.: https://api.example.com/books",
    path_placeholder: "Ex.: kategorije.fiction",
    questionStartIndex_placeholder: "Npr.: a)",
    width_placeholder: "Npr.: 6 inča",
    minWidth_placeholder: "Npr.: 600px",
    maxWidth_placeholder: "Npr.: 50%",
    imageHeight_placeholder: "Автоматично",
    imageWidth_placeholder: "Автоматично",
    itemTitleWidth_placeholder: "Primjer: 100px",
    theme: {
      themeName: "Tema",
      isPanelless: "Izgled pitanja",
      editorPanel: "Polumjer pozadine i kuta",
      questionPanel: "Polumjer pozadine i kuta",
      primaryColor: "Boja isticanja",
      panelBackgroundTransparency: "Neprozirnost pozadine ploče",
      questionBackgroundTransparency: "Pitanje neprozirnosti pozadine",
      fontSize: "Veličina fonta",
      scale: "Vaga",
      cornerRadius: "Kutni radijus",
      advancedMode: "Napredni način rada",
      pageTitle: "Font naslova",
      pageDescription: "Font opisa",
      questionTitle: "Font naslova",
      questionDescription: "Font opisa",
      editorFont: "Krstionica",
      backgroundOpacity: "Neprozirnost",
      "--sjs-font-family": "Obitelj fontova",
      "--sjs-general-backcolor-dim": "Boja pozadine",
      "--sjs-primary-backcolor": "Pozadina isticanja",
      "--sjs-primary-forecolor": "Isticanje u prvom planu",
      "--sjs-special-red": "Poruke o pogreškama",
      "--sjs-shadow-small": "Efekti sjene",
      "--sjs-shadow-inner": "Efekti sjene",
      "--sjs-border-default": "Boje"
    },
    "header@header": {
      headerView: "Pogled",
      logoPosition: "Položaj logotipa",
      surveyTitle: "Font naslova upitnika",
      surveyDescription: "Font opisa upitnika",
      headerTitle: "Font naslova upitnika",
      headerDescription: "Font opisa upitnika",
      inheritWidthFrom: "Širina područja sadržaja",
      textAreaWidth: "Širina teksta",
      backgroundColorSwitch: "Boja pozadine",
      backgroundImage: "Pozadinska slika",
      backgroundImageOpacity: "Neprozirnost",
      overlapEnabled: "Preklapanje",
      logoPositionX: "Položaj logotipa",
      titlePositionX: "Položaj naslova",
      descriptionPositionX: "Položaj opisa"
    }
  },
  // Property values
  pv: {
    "true": "istinit",
    "false": "lažan",
    file: "Lokalne datoteke",
    camera: "Kamera",
    "file-camera": "Lokalne datoteke ili kamera",
    inherit: "naslijediti",
    show: "pokazati",
    hide: "sakrij",
    default: "zadani",
    initial: "početni",
    random: "slučajan",
    collapsed: "srušio",
    expanded: "proširio",
    none: "nitko",
    asc: "uzlazno",
    desc: "silazno",
    indeterminate: "neodređeno",
    selected: "Odabrani",
    unselected: "Neodabrano",
    decimal: "decimala",
    currency: "valuta",
    percent: "posto",
    firstExpanded: "firstExpanded",
    off: "isključeno",
    list: "popis",
    carousel: "Vrtuljak",
    tab: "Tabulatori",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "oba",
    left: "lijevo",
    right: "Desno",
    center: "Središte",
    leftRight: "Lijevo i desno",
    middle: "Sredina",
    color: "boja",
    date: "datum",
    datetime: "datum i vrijeme",
    "datetime-local": "datetime-local",
    email: "E-pošta",
    month: "mjesec",
    number: "broj",
    password: "lozinka",
    range: "domet",
    tel: "Tel",
    text: "Tekstualna poruka",
    time: "Vrijeme",
    url: "URL",
    week: "tjedan",
    hidden: "hidden",
    edit: "edit",
    display: "display",
    contain: "Sadržavati",
    cover: "Pokriti",
    fill: "Ispuniti",
    next: "Sljedeći",
    last: "Trajati",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Kada se pitanje ili njegova ploča/stranica sakriju",
    clearInvisibleValues: {
      none: "Nikada"
    },
    clearIfInvisible: {
      none: "Nikada"
    },
    inputType: {
      color: "Boja",
      date: "Datum",
      "datetime-local": "Datum i vrijeme",
      email: "E-pošta",
      month: "Mjesec",
      number: "Broj",
      password: "Lozinka",
      range: "Domet",
      tel: "Telefonski broj",
      text: "Tekstualna poruka",
      time: "Vrijeme",
      url: "URL",
      week: "Tjedan"
    },
    autocomplete: {
      name: "Puno ime i prezime",
      "honorific-prefix": "Prefiks",
      "given-name": "Ime",
      "additional-name": "Srednje ime",
      "family-name": "Prezime",
      "honorific-suffix": "Sufiks",
      nickname: "Nadimak",
      "organization-title": "Naziv radnog mjesta",
      username: "Korisničko ime",
      "new-password": "Nova lozinka",
      "current-password": "Trenutna lozinka",
      organization: "Naziv tvrtke ili ustanove",
      "street-address": "Puna adresa",
      "address-line1": "Redak adrese 1",
      "address-line2": "Redak adrese 2",
      "address-line3": "Redak adrese 3",
      "address-level4": "Adresa razine 4",
      "address-level3": "Adresa razine 3",
      "address-level2": "Adresa razine 2",
      "address-level1": "Adresa razine 1",
      country: "Pozivni broj zemlje",
      "country-name": "Naziv zemlje",
      "postal-code": "Poštanski broj",
      "cc-name": "Ime vlasnika kartice",
      "cc-given-name": "Ime vlasnika kartice",
      "cc-additional-name": "Srednje ime vlasnika kartice",
      "cc-family-name": "Prezime vlasnika kartice",
      "cc-number": "Broj kreditne kartice",
      "cc-exp": "Isteka",
      "cc-exp-month": "Mjesec isteka",
      "cc-exp-year": "Godina isteka",
      "cc-csc": "Sigurnosni kod kartice",
      "cc-type": "Vrsta kreditne kartice",
      "transaction-currency": "Valuta transakcije",
      "transaction-amount": "Iznos transakcije",
      language: "Preferirani jezik",
      bday: "Rođendan",
      "bday-day": "Rođendanski dan",
      "bday-month": "Rođendanski mjesec",
      "bday-year": "Godina rođenja",
      sex: "Spol",
      url: "URL web stranice",
      photo: "Profilna fotografija",
      tel: "Telefonski broj",
      "tel-country-code": "Pozivni broj za telefon",
      "tel-national": "Nacionalni telefonski broj",
      "tel-area-code": "Pozivni broj",
      "tel-local": "Lokalni telefonski broj",
      "tel-local-prefix": "Prefiks lokalnog telefona",
      "tel-local-suffix": "Sufiks lokalnog telefona",
      "tel-extension": "Proširenje telefona",
      email: "Adresa e-pošte",
      impp: "Protokol za razmjenu izravnih poruka"
    },
    maskType: {
      none: "Nijedan",
      pattern: "Uzorak",
      numeric: "Brojčani",
      datetime: "Datum i vrijeme",
      currency: "Valuta"
    },
    inputTextAlignment: {
      auto: "Automobil",
      left: "Lijevo",
      right: "Desno"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Prije promjene odgovora",
    questionsOnPageMode: {
      standard: "Izvorna struktura",
      singlePage: "Pokaži sva pitanja na jednoj stranici",
      questionPerPage: "Pokaži jedno pitanje po stranici"
    },
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
    allQuestions: "Prikaži sva pitanja",
    answeredQuestions: "Prikaži samo odgovorena pitanja",
    pages: "Dovršene stranice",
    questions: "Odgovorena pitanja",
    requiredQuestions: "Odgovoreno na obavezna pitanja",
    correctQuestions: "Valjani odgovori",
    buttons: "Dovršene stranice (korisničko sučelje gumba)",
    underInput: "Ispod ulaza",
    underTitle: "Pod naslovom",
    onBlur: "Na zamućenju",
    onTyping: "Tijekom tipkanja",
    underRow: "Ispod retka",
    underRowSingle: "Ispod retka vidljiva je samo jedna ploča",
    auto: "Automobil",
    showNavigationButtons: {
      none: "Skriven"
    },
    timerInfoMode: {
      combined: "Oba"
    },
    addRowButtonLocation: {
      default: "Ovisi o izgledu matrice"
    },
    panelsState: {
      default: "Korisnici ne mogu proširiti ili sažeti ploče",
      collapsed: "Sve ploče su urušene",
      expanded: "Sve ploče su proširene",
      firstExpanded: "Prvo prošireno"
    },
    widthMode: {
      static: "Statički",
      responsive: "Odgovarajući"
    },
    contentMode: {
      image: "Slika",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      buttons: "Gumbe",
      dropdown: "Padajući izbornik"
    },
    rateColorMode: {
      default: "Propust",
      scale: "Vaga"
    },
    scaleColorMode: {
      monochrome: "Jednobojni",
      colored: "Boji"
    },
    autoGenerate: {
      "true": "Generirati",
      "false": "Ručno unesite"
    },
    rateType: {
      labels: "Natpise",
      stars: "Zvijezde",
      smileys: "Smajlići"
    },
    state: {
      default: "Zaključan"
    },
    showQuestionNumbers: {
      default: "Automatsko numeriranje",
      on: "Automatsko numeriranje",
      onPage: "Vrati izvorno na svaku stranicu",
      onpanel: "Vrati izvorno na svaku ploču",
      onPanel: "Vrati izvorno na svaku ploču",
      recursive: "Rekurzivno numeriranje",
      onSurvey: "Nastavi kroz anketu",
      off: "Bez numeriranja"
    },
    descriptionLocation: {
      underTitle: "Pod naslovom pitanja",
      underInput: "Ispod polja za unos"
    },
    selectToRankAreasLayout: {
      horizontal: "Pored izbora",
      vertical: "Iznad izbora"
    },
    displayStyle: {
      decimal: "Decimala",
      currency: "Valuta",
      percent: "Postotak",
      date: "Datum"
    },
    totalDisplayStyle: {
      decimal: "Decimala",
      currency: "Valuta",
      percent: "Postotak",
      date: "Datum"
    },
    rowOrder: {
      initial: "Originalan"
    },
    questionOrder: {
      initial: "Originalan"
    },
    progressBarLocation: {
      top: "Vrh",
      bottom: "Dno",
      topbottom: "Vrh i dno",
      aboveheader: "Iznad zaglavlja",
      belowheader: "Ispod zaglavlja",
      off: "Skriven"
    },
    sum: "Suma",
    count: "Brojati",
    min: "Min",
    max: "Max",
    avg: "Avg",
    searchMode: {
      contains: "Sadržava",
      startsWith: "Počinje s"
    },
    backgroundImageFit: {
      auto: "Automobil",
      cover: "Pokriti",
      contain: "Sadržavati",
      fill: "Parcela",
      tile: "Crijep"
    },
    backgroundImageAttachment: {
      fixed: "Fiksirane",
      scroll: "Svitak"
    },
    headerView: {
      basic: "Osnovni",
      advanced: "Napredan"
    },
    inheritWidthFrom: {
      survey: "Isto kao i anketa",
      container: "Prilagodi spremniku"
    },
    backgroundColorSwitch: {
      none: "Nijedan",
      accentColor: "Boja isticanja",
      custom: "Običaj"
    },
    colorPalette: {
      light: "Svjetlo",
      dark: "Mračan"
    },
    isPanelless: {
      "false": "Propust",
      "true": "Bez panela"
    },
    progressBarInheritWidthFrom: {
      survey: "Isto kao i anketa",
      container: "Isto kao spremnik"
    }
  },
  // Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    anyof: "any of",
    allof: "all of",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
    and: "i",
    or: "ili"
  },
  // Embed window
  ew: {
    angular: "Koristite kutnu verziju",
    jquery: "Koristite jQuery verziju",
    knockout: "Korištenje nokaut verzije",
    react: "Korištenje verzije React",
    vue: "Koristite Vue verziju",
    bootstrap: "Za bootstrap okvir",
    modern: "Moderna tema",
    default: "Zadana tema",
    orange: "Narančasta tema",
    darkblue: "Darkblue tema",
    darkrose: "Darkrose tema",
    stone: "Kamena tema",
    winter: "Zimska tema",
    winterstone: "Tema Zimsko-kamen",
    showOnPage: "Pokažite anketu na stranici",
    showInWindow: "Pokažite anketu u prozoru",
    loadFromServer: "Učitavanje Survey JSON s poslužitelja",
    titleScript: "Skripte i stilovi",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Odaberite stranicu da biste je testirali:",
    showInvisibleElements: "Pokaži nevidljive elemente",
    hideInvisibleElements: "Sakrij nevidljive elemente"
  },
  validators: {
    answercountvalidator: "broj odgovora",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text"
  },
  triggers: {
    completetrigger: "potpuna anketa",
    setvaluetrigger: "postavljena vrijednost",
    copyvaluetrigger: "vrijednost kopiranja",
    skiptrigger: "preskočiti na pitanje",
    runexpressiontrigger: "pokrenuti izraz",
    visibletrigger: "promjena vidljivosti (amortizirati)"
  },
  peplaceholder: {
    patternmask: {
      pattern: "Npr.: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Npr.: mm/dd/gggg"
    },
    currencymask: {
      prefix: "Npr.: $",
      suffix: "Npr.: USD"
    },
    panelbase: {
      questionTitleWidth: "Npr.: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Npr.: 30%",
      questionTitleWidth: "Primjer: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "ID ploče koji nije vidljiv ispitanicima.",
      description: "Upišite podnaslov ploče.",
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost ploče.",
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje ploče.",
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      questionTitleLocation: "Odnosi se na sva pitanja unutar ovog panela. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      questionTitleWidth: "Postavlja dosljednu širinu za naslove pitanja kada su poravnati lijevo od okvira pitanja. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      questionErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na sva pitanja unutar ploče. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika.",
      questionOrder: "Zadržava izvorni redoslijed pitanja ili ih randomizira. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika.",
      page: "Premješta ploču na kraj odabrane stranice.",
      innerIndent: "Dodaje razmak ili marginu između sadržaja ploče i lijevog obruba okvira ploče.",
      startWithNewLine: "Poništite odabir za prikaz ploče u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je ploča prvi element u obrascu.",
      state: "Odaberite između: \"Prošireno\" - ploča je prikazana u cijelosti i može se sažeti; \"Sažeto\" - ploča prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - ploča je prikazana u cijelosti i ne može se sažeti.",
      width: "Postavlja širinu ploče proporcionalno ostalim elementima istraživanja u istoj liniji. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      showQuestionNumbers: "Dodjeljuje brojeve pitanjima ugniježđenim unutar ove ploče.",
      effectiveColSpan: "Određuje koliko stupaca ova ploča obuhvaća unutar rasporeda rešetke.",
      gridLayoutColumns: "Ova tablica omogućuje konfiguriranje svakog stupca rešetke unutar ploče. Automatski postavlja postotak širine za svaki stupac na temelju maksimalnog broja elemenata u redu. Da biste prilagodili izgled rešetke, ručno prilagodite te vrijednosti i definirajte širinu naslova za sva pitanja u svakom stupcu."
    },
    paneldynamic: {
      name: "ID ploče koji nije vidljiv ispitanicima.",
      description: "Upišite podnaslov ploče.",
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost ploče.",
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje ploče.",
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      templateQuestionTitleLocation: "Odnosi se na sva pitanja unutar ovog panela. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      templateQuestionTitleWidth: "Postavlja dosljednu širinu za naslove pitanja kada su poravnati s lijeve strane okvira za pitanja. Prihvaća CSS vrijednosti (px, %, in, pt, itd.).",
      templateErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      errorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na sva pitanja unutar ploče. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika.",
      page: "Premješta ploču na kraj odabrane stranice.",
      innerIndent: "Dodaje razmak ili marginu između sadržaja ploče i lijevog obruba okvira ploče.",
      startWithNewLine: "Poništite odabir za prikaz ploče u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je ploča prvi element u obrascu.",
      state: "Odaberite između: \"Prošireno\" - ploča je prikazana u cijelosti i može se sažeti; \"Sažeto\" - ploča prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - ploča je prikazana u cijelosti i ne može se sažeti.",
      width: "Postavlja širinu ploče proporcionalno ostalim elementima istraživanja u istoj liniji. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      templateTitle: "Upišite predložak za dinamičke naslove ploča. Koristite {panelIndex} za opći položaj panela i {visiblePanelIndex} za njegov redoslijed među vidljivim pločama. Umetnite ova rezervirana mjesta u uzorak da biste dodali automatsko numeriranje.",
      templateTabTitle: "Upišite predložak za naslove kartica. Koristite {panelIndex} za opći položaj panela i {visiblePanelIndex} za njegov redoslijed među vidljivim pločama. Umetnite ova rezervirana mjesta u uzorak da biste dodali automatsko numeriranje.",
      tabTitlePlaceholder: "Rezervni tekst za naslove kartica koji se primjenjuje kada uzorak naslova kartice ne daje značajnu vrijednost.",
      templateVisibleIf: "Ova postavka omogućuje kontrolu vidljivosti pojedinih ploča unutar dinamičke ploče. Koristite rezervirano mjesto '{panel}' za referenciranje trenutne ploče u izrazu.",
      titleLocation: "Ovu postavku automatski nasljeđuju sva pitanja unutar ove ploče. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      descriptionLocation: "Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Pod naslovom ploče\" prema zadanim postavkama).",
      newPanelPosition: "Definira položaj novododane ploče. Prema zadanim postavkama na kraj se dodaju nove ploče. Odaberite \"Dalje\" da biste umetnuli novu ploču nakon trenutne.",
      copyDefaultValueFromLastEntry: "Duplicira odgovore s posljednje ploče i dodjeljuje ih sljedećoj dodanoj dinamičkoj ploči.",
      keyName: "Pogledajte naziv pitanja kako biste od korisnika zahtijevali da pruži jedinstven odgovor za ovo pitanje na svakoj ploči."
    },
    copyDefaultValueFromLastEntry: "Duplicira odgovore iz posljednjeg retka i dodjeljuje ih sljedećem dodanom dinamičkom retku.",
    defaultValueExpression: "Ova postavka omogućuje dodjeljivanje zadane vrijednosti odgovora na temelju izraza. Izraz može uključivati osnovne izračune - '{q1_id} + {q2_id}', Booleove izraze, kao što su '{age} > 60', i funkcije: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd. Vrijednost određena ovim izrazom služi kao početna zadana vrijednost koja se može nadjačati ručnim unosom ispitanika.",
    resetValueIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje kada se unos ispitanika vraća na vrijednost na temelju \"Zadani izraz vrijednosti\" ili \"Postavi izraz vrijednosti\" ili na vrijednost \"Zadani odgovor\" (ako je postavljena).",
    setValueIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje kada pokrenuti \"Postavi izraz vrijednosti\" i dinamički dodijelite dobivenu vrijednost kao odgovor.",
    setValueExpression: "Navedite izraz koji definira vrijednost koju treba postaviti kada se ispune uvjeti u pravilu \"Postavi vrijednost ako\". Izraz može uključivati osnovne izračune - '{q1_id} + {q2_id}', Booleove izraze, kao što su '{age} > 60', i funkcije: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd. Vrijednost određena ovim izrazom može se nadjačati ručnim unosom ispitanika.",
    gridLayoutEnabled: "Survey Creator omogućuje vam ručno podešavanje ugrađenih širina elemenata obrasca za kontrolu izgleda. Ako to ne daje željeni ishod, možete omogućiti raspored rešetke, čije strukture tvore elemente pomoću sustava temeljenog na stupcima. Da biste konfigurirali stupce izgleda, odaberite stranicu ili ploču i upotrijebite tablicu \"Postavke pitanja\" → \"Stupci rešetke\". Da biste prilagodili koliko stupaca obuhvaća pitanje, odaberite ga i postavite željenu vrijednost u polju \"Izgled\" → \"Raspon stupaca\".",
    question: {
      name: "ID pitanja koji nije vidljiv ispitanicima.",
      description: "Upišite podnaslov pitanja.",
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost pitanja.",
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje za pitanje.",
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava napredovanje ili podnošenje upitnika, osim ako pitanje ne dobije odgovor.",
      startWithNewLine: "Poništite odabir za prikaz pitanja u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je pitanje prvi element u obrascu.",
      page: "Premješta pitanje na kraj odabrane stranice.",
      state: "Odaberite između: \"Prošireno\" - okvir pitanja prikazuje se u cijelosti i može se sažeti; \"Sažeto\" - okvir pitanja prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - okvir s pitanjima prikazuje se u cijelosti i ne može se sažeti.",
      titleLocation: "Nadjačava pravila poravnanja naslova definirana na razini ploče, stranice ili upitnika. Opcija \"Naslijedi\" primjenjuje sve postavke više razine (ako su postavljene) ili postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      descriptionLocation: "Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Pod naslovom pitanja\" prema zadanim postavkama).",
      errorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      indent: "Dodaje razmak ili marginu između sadržaja pitanja i lijevog obruba okvira pitanja.",
      width: "Postavlja širinu pitanja proporcionalno drugim elementima upitnika u istom retku. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      surveyvalidator: {
        expression: "Pomoću ikone čarobnog štapića postavite pravilo provjere valjanosti za pitanje."
      },
      textUpdateMode: "Odaberite između: \"Na izgubljenom fokusu\" - vrijednost se ažurira kada polje za unos izgubi fokus; \"Tijekom tipkanja\" - vrijednost se ažurira u stvarnom vremenu, jer korisnici tipkaju. Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Pri izgubljenom fokusu\" prema zadanim postavkama).",
      url: "Bilo koju web-uslugu možete koristiti kao izvor podataka za pitanja s višestrukim izborom odgovora. Da biste popunili vrijednosti izbora, unesite URL usluge koja pruža podatke.",
      searchMode: "Operacija usporedbe koja se koristi za filtriranje padajućeg popisa.",
      textWrapEnabled: "Dugi tekstovi u mogućnostima izbora automatski će generirati prijelome redaka kako bi stali unutar padajućeg izbornika. Poništite odabir ako želite da se tekstovi izrežu.",
      effectiveColSpan: "Određuje koliko stupaca ovo pitanje obuhvaća unutar rasporeda rešetke."
    },
    signaturepad: {
      signatureWidth: "Postavlja širinu prikazanog područja potpisa i rezultirajuću sliku.",
      signatureHeight: "Postavlja visinu prikazanog područja potpisa i rezultirajuću sliku.",
      signatureAutoScaleEnabled: "Odaberite želite li da područje potpisa ispuni sav raspoloživi prostor unutar okvira pitanja uz zadržavanje zadanog omjera slike 3:2. Kada su postavljene prilagođene vrijednosti širine i visine, postavka će zadržati omjer slike tih dimenzija."
    },
    file: {
      imageHeight: "Podešava visinu slike u rezultatima upitnika.",
      imageWidth: "Podešava širinu slike u rezultatima upitnika.",
      allowImagesPreview: "Prikazuje pretpreglede minijatura za prenesene datoteke kada je to moguće. Poništite odabir želite li umjesto toga prikazati ikone datoteka."
    },
    image: {
      contentMode: "Opcija \"Automatski\" automatski određuje odgovarajući način prikaza - Slika, Videozapis ili YouTube - na temelju navedenog izvornog URL-a."
    },
    imagepicker: {
      imageHeight: "Nadjačava vrijednosti minimalne i maksimalne visine.",
      imageWidth: "Nadjačava vrijednosti minimalne i maksimalne širine.",
      choices: "\"Vrijednost\" služi kao ID stavke koji se koristi u uvjetnim pravilima; \"Tekst\" se prikazuje ispitanicima.",
      contentMode: "Odaberite između \"Slika\" i \"Videozapis\" da biste postavili način sadržaja birača medija. Ako je odabrana opcija \"Slika\", provjerite jesu li sve ponuđene opcije slikovne datoteke u sljedećim formatima: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Slično tome, ako je odabran \"Video\", provjerite jesu li sve opcije izravne veze na video datoteke u sljedećim formatima: MP4, MOV, WMV, FLV, AVI, MKV. Napominjemo da veze na YouTube nisu podržane za opcije videozapisa."
    },
    text: {
      size: "Ova postavka samo mijenja veličinu polja unosa i ne utječe na širinu okvira pitanja. Da biste ograničili prihvaćenu duljinu unosa, idite na <b>Provjera valjanosti → Maksimalno ograničenje znaka</b>."
    },
    comment: {
      rows: "Postavlja broj prikazanih redaka u polju za unos. Ako ulaz zauzima više redaka, pojavit će se klizač."
    },
    // survey templates
    survey: {
      readOnly: "Odaberite želite li ispitanicima onemogućiti ispunjavanje upitnika.",
      progressBarLocation: "Postavlja lokaciju trake napretka. Vrijednost \"Automatski\" prikazuje traku napretka iznad ili ispod zaglavlja ankete."
    },
    matrixdropdowncolumn: {
      name: "ID stupca koji nije vidljiv ispitanicima.",
      isUnique: "Kada je omogućen stupac, ispitanik mora dati jedinstven odgovor za svako pitanje unutar ovog stupca.",
      rows: "Postavlja broj prikazanih redaka u polju za unos. Ako ulaz zauzima više redaka, pojavit će se klizač.",
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost stupca.",
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje stupca.",
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      showInMultipleColumns: "Kada je odabrano, stvara pojedinačni stupac za svaku mogućnost izbora.",
      colCount: "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku. Kada je postavljena na -1, stvarna vrijednost nasljeđuje se iz svojstva \"Broj ugniježđenih stupaca\" nadređene matrice."
    },
    caseInsensitive: "Odaberite ako se velika i mala slova u regularnom izrazu moraju tretirati kao ekvivalentna.",
    widthMode: "Odaberite između: \"Statika\" - postavlja fiksnu širinu; \"Responsive\" - čini da anketa zauzima punu širinu zaslona; \"Auto\" - primjenjuje se bilo koji od dva ovisno o korištenim vrstama pitanja.",
    cookieName: "Kolačići sprječavaju korisnike da dvaput ispune istu anketu.",
    logo: "Zalijepite slikovnu vezu (bez ograničenja veličine) ili kliknite ikonu mape da biste pregledali datoteku s računala (do 64 KB).",
    logoWidth: "Postavlja širinu logotipa u CSS jedinicama (px, %, in, pt itd.).",
    logoHeight: "Postavlja visinu logotipa u CSS jedinicama (px, %, in, pt itd.).",
    logoFit: "Odaberite između: \"Nema\" - slika zadržava svoju izvornu veličinu; \"Sadrži\" - slika se mijenja kako bi stala uz zadržavanje omjera slike; \"Poklopac\" - slika ispunjava cijelu kutiju zadržavajući omjer slike; \"Ispuna\" - slika se rasteže kako bi ispunila kutiju bez zadržavanja omjera slike.",
    autoAdvanceEnabled: "Odaberite želite li da se upitnik automatski prijeđe na sljedeću stranicu nakon što ispitanik odgovori na sva pitanja na trenutnoj stranici. Ova se značajka neće primijeniti ako je posljednje pitanje na stranici otvoreno ili dopušta više odgovora.",
    autoAdvanceAllowComplete: "Odaberite želite li da se anketa automatski dovrši nakon što ispitanik odgovori na sva pitanja.",
    showNavigationButtons: "Postavlja vidljivost i mjesto navigacijskih gumba na stranici.",
    navigationButtonsLocation: "Postavlja mjesto navigacijskih gumba na stranici.",
    showPreviewBeforeComplete: "Omogućite stranicu pretpregleda samo sa svim ili odgovorenim pitanjima.",
    questionTitleLocation: "Odnosi se na sva pitanja unutar ankete. Ova postavka može se nadjačati pravilima poravnanja naslova na nižim razinama: ploča, stranica ili pitanje. Postavka niže razine nadjačat će one na višoj razini.",
    requiredMark: "Simbol ili niz simbola koji označavaju da je potreban odgovor.",
    questionStartIndex: "Unesite broj ili slovo s kojim želite započeti numeriranje.",
    questionErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja.",
    autoFocusFirstQuestion: "Odaberite želite li da prvo polje za unos na svakoj stranici bude spremno za unos teksta.",
    questionOrder: "Zadržava izvorni redoslijed pitanja ili ih randomizira. Efekt ove postavke vidljiv je samo na kartici Pretpregled.",
    maxTextLength: "Samo za pitanja o unosu teksta.",
    maxCommentLength: "Samo za komentare pitanja.",
    commentAreaRows: "Postavlja broj prikazanih redaka u tekstnim područjima za komentare pitanja. Ako ulaz zauzima više linija, pojavit će se klizač.",
    autoGrowComment: "Odaberite želite li da komentari pitanja i pitanja dugog teksta automatski rastu u visinu na temelju unesene duljine teksta.",
    allowResizeComment: "Samo za komentare pitanja i pitanja dugog teksta.",
    calculatedValues: "Prilagođene varijable služe kao srednje ili pomoćne varijable koje se koriste u izračunima obrazaca. Oni uzimaju unose ispitanika kao izvorne vrijednosti. Svaka prilagođena varijabla ima jedinstveni naziv i izraz na kojem se temelji.",
    includeIntoResult: "Odaberite želite li spremiti izračunatu vrijednost izraza zajedno s rezultatima upitnika.",
    triggers: "Okidač je događaj ili uvjet koji se temelji na izrazu. Nakon što se izraz procijeni kao \"istinit\", okidač pokreće radnju. Takva radnja može po želji imati ciljano pitanje na koje utječe.",
    clearInvisibleValues: "Odaberite želite li očistiti vrijednosti za pitanja skrivena uvjetnom logikom i kada to učiniti.",
    textUpdateMode: "Odaberite između: \"Na izgubljenom fokusu\" - vrijednost se ažurira kada polje za unos izgubi fokus; \"Tijekom tipkanja\" - vrijednost se ažurira u stvarnom vremenu, jer korisnici tipkaju.",
    columns: "Lijeva vrijednost služi kao ID stupca koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    rows: "Lijeva vrijednost služi kao ID retka koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    columnMinWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    rowTitleWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    totalText: "Vidljivo samo ako barem jedan stupac ima izraz Vrsta zbroja ili Ukupno.",
    cellErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na ćeliju s unosom koji nije valjan. Mogućnost \"Naslijedi\" primjenjuje postavku iz svojstva \"Poravnanje poruke o pogrešci\".",
    detailErrorLocation: "Postavlja mjesto poruka o pogreškama za pitanja ugniježđena u detaljnim odjeljcima. Mogućnost \"Naslijedi\" primjenjuje postavku iz svojstva \"Poravnanje poruke o pogrešci\".",
    keyDuplicationError: "Kada je omogućeno svojstvo \"Spriječi duplicirane odgovore\", ispitanik koji pokuša poslati duplikat unosa primit će sljedeću poruku o pogrešci.",
    totalExpression: "Omogućuje izračunavanje ukupnih vrijednosti na temelju izraza. Izraz može uključivati osnovne izračune ('{q1_id} + {q2_id}'), Booleove izraze ('{age} > 60') i funkcije ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd.).",
    confirmDelete: "Pokreće upit u kojem se traži potvrda brisanja retka.",
    keyName: "Ako navedeni stupac sadrži identične vrijednosti, anketa odbacuje pogrešku \"Nejedinstvena vrijednost ključa\".",
    description: "Upišite podnaslov.",
    locale: "Odaberite jezik za početak stvaranja upitnika. Da biste dodali prijevod, prijeđite na novi jezik i prevedite izvorni tekst ovdje ili na kartici Prijevodi.",
    detailPanelMode: "Postavlja mjesto sekcije s detaljima u odnosu na redak. Odaberite između: \"Nema\" - ne dodaje se proširenje; \"Ispod reda\" - proširenje retka nalazi se ispod svakog retka matrice; \"Ispod retka prikaži samo proširenje jednog retka\" - proširenje se prikazuje samo ispod jednog retka, preostala proširenja retka su sažeta.",
    imageFit: "Odaberite između: \"Nema\" - slika zadržava svoju izvornu veličinu; \"Sadrži\" - slika se mijenja kako bi stala uz zadržavanje omjera slike; \"Poklopac\" - slika ispunjava cijelu kutiju zadržavajući omjer slike; \"Ispuna\" - slika se rasteže kako bi ispunila kutiju bez zadržavanja omjera slike.",
    autoGrow: "Postupno povećava visinu polja unosa tijekom unosa podataka. Nadjačava postavku \"Visina polja unosa (u crtama)\".",
    allowResize: "Ručica za promjenu veličine (ili držač) pojavljuje se u kutu i može se povući kako bi se promijenila veličina polja za unos.",
    timeLimit: "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na stranicu zahvale.",
    timeLimitPerPage: "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na sljedeću stranicu.",
    validateVisitedEmptyFields: "Omogućite ovu mogućnost da biste pokrenuli provjeru valjanosti kada se korisnik usredotoči na prazno polje za unos, a zatim ga napusti bez ikakvih promjena.",
    page: {
      name: "ID stranice koji nije vidljiv ispitanicima.",
      description: "Upišite podnaslov stranice.",
      navigationTitle: "Opis prikazan na navigacijskom gumbu na traci napretka ili kazalu sadržaja. Ako ovo polje ostavite prazno, navigacijski gumb koristit će naslov stranice ili naziv stranice. Da biste omogućili traku napretka ili sadržaj, idite na \"Anketa\" → \"Navigacija\".",
      timeLimit: "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na sljedeću stranicu.",
      visibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost stranice.",
      enableIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje stranice.",
      requiredIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor.",
      questionTitleLocation: "Odnosi se na sva pitanja unutar ove stranice. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja ili ploče. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      questionTitleWidth: "Postavlja dosljednu širinu za naslove pitanja kada su poravnati lijevo od okvira pitanja. Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
      questionErrorLocation: "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama).",
      questionOrder: "Zadržava izvorni redoslijed pitanja ili ih randomizira. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Original\" prema zadanim postavkama). Efekt ove postavke vidljiv je samo na kartici Pretpregled.",
      showNavigationButtons: "Postavlja vidljivost navigacijskih gumba na stranici. Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika, koja je zadana kao \"Vidljivo\".",
      gridLayoutColumns: "Ova tablica omogućuje konfiguriranje svakog stupca rešetke na stranici. Automatski postavlja postotak širine za svaki stupac na temelju maksimalnog broja elemenata u redu. Da biste prilagodili izgled rešetke, ručno prilagodite te vrijednosti i definirajte širinu naslova za sva pitanja u svakom stupcu."
    },
    timerLocation: "Postavlja lokaciju mjerača vremena na stranici.",
    panelsState: "Odaberite između: \"Zaključano\" - korisnici ne mogu proširiti ili sažeti ploče; \"Sažmite sve\" - sve ploče počinju u urušenom stanju; \"Proširite sve\" - sve ploče počinju u proširenom stanju; \"Prvo prošireno\" - samo je prva ploča u početku proširena.",
    imageLinkName: "Unesite naziv zajedničkog svojstva unutar polja objekata koje sadrži URL-ove slike ili videodatoteke koje želite prikazati na popisu izbora.",
    choices: "Lijeva vrijednost služi kao ID artikla koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    title: "Upišite naslov prilagođen korisniku za prikaz.",
    waitForUpload: "Osigurava da korisnici neće dovršiti anketu dok se datoteke ne prenesu.",
    minWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    maxWidth: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    width: "Prihvaća CSS vrijednosti (px, %, in, pt itd.).",
    valueName: "Ako ne postavite ovo svojstvo, odgovor će biti pohranjen u polju određenom svojstvom Naziv .",
    defaultDisplayValue: "Vrijednost koja se prikazuje u HTML pitanjima te u dinamičkim naslovima i opisima elemenata upitnika kada je vrijednost pitanja prazna.",
    useDisplayValuesInDynamicTexts: "U vrstama pitanja s jednim i višestrukim odabirom svaka mogućnost izbora ima ID i vrijednost prikaza. Kada je odabrana, ova postavka prikazuje prikazanu vrijednost umjesto ID vrijednosti u HTML pitanjima te dinamičke naslove i opise elemenata upitnika.",
    clearIfInvisible: "Odaberite želite li očistiti vrijednosti pitanja skrivene uvjetnom logikom i kada to učiniti. Opcija \"Naslijedi\" prema zadanim postavkama primjenjuje postavku na razini upitnika (\"Nakon završetka ankete\").",
    choicesFromQuestionMode: "Odaberite između: \"Sve\" - kopira sve opcije izbora iz odabranog pitanja; \"Odabrano\" - dinamički kopira samo odabrane opcije izbora; \"Neodabrano\" - dinamički kopira samo neodabrane opcije izbora. Opcije \"Ništa\" i \"Ostalo\" kopiraju se prema zadanim postavkama ako su omogućene u izvornom pitanju.",
    choiceValuesFromQuestion: "U vrstama pitanja s jednim i višestrukim odabirom svaka opcija izbora ima ID i vrijednost prikaza. Ova postavka određuje koji stupac matrice ili pitanje na ploči treba dati ID-ove.",
    choiceTextsFromQuestion: "U vrstama pitanja s jednim i višestrukim odabirom svaka opcija izbora ima ID i vrijednost prikaza. Ova postavka određuje koji stupac matrice ili pitanje na ploči treba pružiti tekstove za prikaz.",
    allowCustomChoices: "Odaberite da biste ispitanicima omogućili dodavanje vlastitih izbora ako željena opcija nije dostupna na padajućem izborniku. Prilagođeni odabiri bit će pohranjeni samo privremeno za vrijeme trajanja trenutne sesije preglednika.",
    showOtherItem: "Kada je odabrano, korisnici mogu uključiti dodatni unos u zaseban okvir za komentare.",
    separateSpecialChoices: "Prikazuje svaku mogućnost posebnog izbora (\"Nema\", \"Ostalo\", \"Odaberi sve\") u novom retku, čak i kada koristite izgled s više stupaca.",
    path: "Navedite mjesto unutar skupa podataka o usluzi na kojem se nalazi ciljno polje objekata. Ostavite prazno ako URL već pokazuje na polje.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Unesite jedinstveni naziv svojstva unutar polja objekata koje sadrži vrijednosti koje želite prikazati na popisu izbora.",
    allowEmptyResponse: "Odaberite da biste servisu dopustili vraćanje praznog odgovora ili polja.",
    choicesVisibleIf: "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost svih opcija izbora.",
    rateValues: "Lijeva vrijednost služi kao ID artikla koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost.",
    rating: {
      displayMode: "\"Automatski\" odabire između načina rada \"Gumbi\" i \"Padajući izbornik\" na temelju dostupne širine. Kada širina nije dovoljna za prikaz gumba, pitanje prikazuje padajući izbornik."
    },
    valuePropertyName: "Omogućuje povezivanje pitanja koja daju rezultate u različitim formatima. Kada su takva pitanja povezana pomoću identifikatora spoja, ovo zajedničko svojstvo pohranjuje odabrane vrijednosti pitanja.",
    searchEnabled: "Odaberite želite li ažurirati sadržaj padajućeg izbornika tako da odgovara upitu za pretraživanje koji korisnik upisuje u polje za unos.",
    valueTrue: "Vrijednost koju treba uštedjeti u rezultatima ankete kada ispitanici daju pozitivan odgovor.",
    valueFalse: "Vrijednost koju treba spremiti u rezultatima ankete kada ispitanici daju negativan odgovor.",
    showPreview: "Ne preporučuje se onemogućavanje ove mogućnosti jer nadjačava sliku pretpregleda i otežava korisniku razumijevanje jesu li datoteke prenesene.",
    needConfirmRemoveFile: "Pokreće upit u kojem se traži potvrda brisanja datoteke.",
    selectToRankEnabled: "Omogućite rangiranje samo odabranih odabira. Korisnici će povući odabrane stavke s popisa izbora kako bi ih naručili unutar područja rangiranja.",
    dataList: "Unesite popis izbora koji će se predložiti ispitaniku tijekom unosa.",
    inputSize: "Postavka samo mijenja veličinu ulaznih polja i ne utječe na širinu okvira pitanja.",
    itemTitleWidth: "Postavlja dosljednu širinu za sve oznake stavki. Prihvaća CSS vrijednosti (px, %, in, pt, itd.).",
    inputTextAlignment: "Odaberite način poravnanja ulazne vrijednosti unutar polja. Zadana postavka \"Automatski\" poravnava ulaznu vrijednost udesno ako se primjenjuje valutno ili numeričko maskiranje i ulijevo ako nije.",
    altText: "Služi kao zamjena kada se slika ne može prikazati na korisnikovom uređaju i u svrhu pristupačnosti.",
    rateColorMode: "Definira boju odabranog emojija kada je vrsta ikone Ocjena postavljena na \"Smajlići\". Odaberite između: \"Zadano\" - odabrani emoji pojavljuje se u zadanoj boji ankete; \"Skala\" - odabrani emoji nasljeđuje boju od ljestvice ocjenjivanja.",
    expression: {
      name: "ID izraza koji nije vidljiv ispitanicima.",
      description: "Upišite podnaslov izraza.",
      expression: "Izraz može uključivati osnovne izračune ('{q1_id} + {q2_id}'), uvjete ('{age} > 60') i funkcije ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd.)."
    },
    storeOthersAsComment: "Odaberite za spremanje vrijednosti mogućnosti \"Ostalo\" kao zasebnog svojstva u rezultatima upitnika.",
    format: "Koristite {0} kao rezervirano mjesto za stvarnu vrijednost.",
    acceptedTypes: "Dodatne informacije potražite u opisu atributa [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Primjenjivo samo na vrste ćelija Radiogrupa i Potvrdni okvir.",
    autocomplete: "Dodatne informacije potražite u opisu atributa [samodovršetak](https://developer.mozilla.org/en-US/docs/Web/HTML/atributi/samodovršetak).",
    filePlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke\" ili kada kamera nije dostupna",
    photoPlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Kamera\".",
    fileOrPhotoPlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke ili kamera\".",
    colCount: "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku.",
    masksettings: {
      saveMaskedValue: "Odaberite želite li spremiti vrijednost pitanja s primijenjenom maskom u rezultatima upitnika."
    },
    patternmask: {
      pattern: "Uzorak može sadržavati slovne dijelove niza i sljedeća rezervirana mjesta: '9' - za znamenku; \"a\" – za veliko ili malo slovo; '#' - za znamenku ili veliko ili malo slovo. Koristite obrnutu kosu crtu '\\' da biste izbjegli znak."
    },
    datetimemask: {
      pattern: "Uzorak može sadržavati znakove razdjelnika i sljedeća rezervirana mjesta:<br>'m' - Broj mjeseca.<br>'mm' - Broj mjeseca, s početnom nulom za jednoznamenkaste vrijednosti. <br>'d' - Dan u mjesecu. <br>'dd' - Dan u mjesecu, s početnom nulom za jednoznamenkaste vrijednosti. <br>'yy' - Posljednje dvije znamenke godine. <br>'gggg' - Četveroznamenkasta godina. <br>'H' - Sati u 24-satnom formatu. <br>'HH' - Sati u 24-satnom formatu, s početnom nulom za jednoznamenkaste vrijednosti. <br>'h' - Sati u 12-satnom formatu. <br>'hh' - Sati u 12-satnom formatu, s početnom nulom za jednoznamenkaste vrijednosti. <br>'MM' - Minute. <br>'ss' - Sekunde. <br>\"TT\" – razdoblje od 12 sati velikim slovima (AM/PM). <br>\"TT\" – 12-satno razdoblje u malim slovima (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Simbol koji se koristi za odvajanje djelomičnog dijela od cijelog broja prikazanog broja.",
      thousandsSeparator: "Simbol koji se koristi za odvajanje znamenki velikog broja u grupe od tri.",
      precision: "Ograničava broj znamenki koje treba zadržati nakon decimalnog zareza za prikazani broj."
    },
    currencymask: {
      prefix: "Jedan ili više simbola koji će se prikazati prije vrijednosti.",
      suffix: "Jedan ili više simbola koji će se prikazati nakon vrijednosti."
    },
    theme: {
      isPanelless: "Ova se postavka primjenjuje samo na pitanja izvan ploče.",
      primaryColor: "Postavlja dodatnu boju koja ističe ključne elemente upitnika.",
      panelBackgroundTransparency: "Prilagođava prozirnost panela i okvira s pitanjima u odnosu na pozadinu ankete.",
      questionBackgroundTransparency: "Prilagođava prozirnost ulaznih elemenata u odnosu na pozadinu upitnika.",
      cornerRadius: "Postavlja polumjer kuta za sve pravokutne elemente. Omogućite napredni način rada ako želite postaviti pojedinačne vrijednosti radijusa kuta za ulazne elemente ili ploče i okvire s pitanjima.",
      "--sjs-general-backcolor-dim": "Postavlja glavnu boju pozadine upitnika."
    },
    header: {
      inheritWidthFrom: "Opcija \"Isto kao spremnik\" automatski prilagođava širinu područja sadržaja zaglavlja kako bi se uklopila u HTML element u koji je upitnik postavljen.",
      textAreaWidth: "Širina područja zaglavlja koje sadrži naslov i opis upitnika, mjerena u pikselima.",
      overlapEnabled: "Kada je omogućeno, vrh upitnika prekriva dno zaglavlja.",
      mobileHeight: "Kada je postavljena na 0, visina se automatski izračunava kako bi se prilagodio sadržaju zaglavlja."
    },
    progressBarInheritWidthFrom: "Opcija \"Isto kao spremnik\" automatski prilagođava širinu područja trake napretka kako bi se uklopila u HTML element u koji je upitnik postavljen."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Ostavite prazno, ako je isto kao 'Name'"
    },
    multiSelect: "Dopusti višestruki odabir",
    showLabel: "Pokaži opise slika",
    swapOrder: "Zamjena redoslijeda Da i Ne",
    value: "Vrijednost",
    tabAlign: "Poravnanje tabulatora",
    sourceType: "Vrsta izvora",
    fitToContainer: "Prilagodi spremniku",
    setValueExpression: "Postavljanje izraza vrijednosti",
    description: "description",
    logoFit: "Prilagođavanje logotipa",
    pages: "Stranice",
    questions: "Pitanja",
    triggers: "triggers",
    calculatedValues: "Izračunate vrijednosti",
    surveyId: "ID upitnika",
    surveyPostId: "ID objave upitnika",
    surveyShowDataSaving: "Anketa pokazuje spremanje podataka",
    questionDescriptionLocation: "Mjesto opisa pitanja",
    progressBarType: "Vrsta trake napretka",
    showTOC: "Pokaži tablicu sadržaja",
    tocLocation: "Mjesto tablice sadržaja",
    questionTitlePattern: "Uzorak naslova pitanja",
    widthMode: "Način širine",
    showBrandInfo: "Pokaži informacije o robnoj marki",
    useDisplayValuesInDynamicTexts: "Korištenje vrijednosti prikaza u dinamičkim tekstovima",
    visibleIf: "visibleIf",
    defaultValueExpression: "Zadani izraz vrijednosti",
    requiredIf: "requiredIf",
    resetValueIf: "Vrati izvornu vrijednost ako",
    setValueIf: "Postavi vrijednost ako",
    validators: "validators",
    bindings: "Vezovi",
    renderAs: "Iscrtaj kao",
    attachOriginalItems: "Priloži izvorne stavke",
    choices: "choices",
    choicesByUrl: "choicesByUrl",
    currency: "currency",
    cellHint: "Savjet za ćeliju",
    totalMaximumFractionDigits: "Ukupan maksimalni broj znamenki razlomka",
    totalMinimumFractionDigits: "Ukupan minimum znamenki razlomka",
    columns: "columns",
    detailElements: "Elementi detalja",
    allowAdaptiveActions: "Dopusti prilagodljive radnje",
    defaultRowValue: "defaultRowValue",
    detailPanelShowOnAdding: "Prikaži na ploči s detaljima prilikom dodavanja",
    choicesLazyLoadEnabled: "Omogućeno lijeno opterećenje izbora",
    choicesLazyLoadPageSize: "Odabiri lijeno učitavanje veličine stranice",
    inputFieldComponent: "Komponenta polja za unos",
    itemComponent: "Komponenta artikla",
    min: "Min",
    max: "Max",
    minValueExpression: "Izraz minimalne vrijednosti",
    maxValueExpression: "Izraz maksimalne vrijednosti",
    step: "Korak",
    dataList: "Popis podataka",
    inputSize: "inputSize",
    itemTitleWidth: "Širina natpisa stavke (u px)",
    inputTextAlignment: "Usklađivanje ulaznih vrijednosti",
    elements: "Elemenata",
    content: "Sadržaj",
    navigationTitle: "Naslov navigacije",
    navigationDescription: "Opis navigacije",
    longTap: "Dugi dodir",
    autoGrow: "Automatski rast",
    allowResize: "Dopusti promjenu veličine",
    acceptCarriageReturn: "Prihvati povratak prijevoza",
    displayMode: "Način prikaza",
    rateType: "Vrsta stope",
    label: "label",
    contentMode: "Način sadržaja",
    imageFit: "Prilagodba slike",
    altText: "Zamjenski tekst",
    height: "Visina",
    mobileHeight: "Visina na pametnim telefonima",
    penColor: "Boja olovke",
    backgroundColor: "Boja pozadine",
    templateElements: "Elementi predloška",
    operator: "Operator",
    isVariable: "Je promjenjivo",
    runExpression: "Pokreni izraz",
    showCaption: "Pokaži opis",
    iconName: "Naziv ikone",
    iconSize: "Veličina ikone",
    precision: "Preciznost",
    matrixDragHandleArea: "Područje držača za povlačenje matrice",
    backgroundImage: "Pozadinska slika",
    backgroundImageFit: "Prilagodba pozadinske slike",
    backgroundImageAttachment: "Privitak pozadinske slike",
    backgroundOpacity: "Neprozirnost pozadine",
    selectToRankEnabled: "Odaberite za omogućen rang",
    selectToRankAreasLayout: "Odabir za rangiranje izgleda područja",
    selectToRankEmptyRankedAreaText: "Tekst koji prikazuje jesu li odabrane sve mogućnosti",
    selectToRankEmptyUnrankedAreaText: "Tekst rezerviranog mjesta za područje rangiranja",
    allowCameraAccess: "Dopusti pristup kameri",
    scaleColorMode: "Način skaliranja boje",
    rateColorMode: "Način ocjenjivanja boja",
    copyDisplayValue: "Kopiraj vrijednost prikaza",
    effectiveColSpan: "Raspon stupaca",
    progressBarInheritWidthFrom: "Širina područja trake napretka"
  },
  theme: {
    advancedMode: "Napredni način rada",
    pageTitle: "Font naslova stranice",
    questionTitle: "Font naslova pitanja",
    editorPanel: "Ulazni element",
    lines: "Linije",
    primaryDefaultColor: "Propust",
    primaryDarkColor: "Lebdjeti",
    primaryLightColor: "Odabrani",
    backgroundDimColor: "Boja pozadine",
    cornerRadius: "Kutni radijus",
    backcolor: "Zadana pozadina",
    hovercolor: "Pozadina držanja pokazivača miša",
    borderDecoration: "Uređenje obruba",
    fontColor: "Boja fonta",
    backgroundColor: "Boja pozadine",
    primaryForecolor: "Zadana boja",
    primaryForecolorLight: "Onemogućena boja",
    font: "Krstionica",
    borderDefault: "Tamnije",
    borderLight: "Upaljač",
    fontFamily: "Obitelj fontova",
    fontWeightRegular: "Redovan",
    fontWeightHeavy: "Težak",
    fontWeightSemiBold: "Polupodebljano",
    fontWeightBold: "Odvažan",
    color: "Boja",
    placeholderColor: "Boja rezerviranog mjesta",
    size: "Veličina",
    opacity: "Neprozirnost",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Dodaj efekt sjene",
    boxShadowBlur: "Mrlja",
    boxShadowSpread: "Širenje",
    boxShadowDrop: "Ispustiti",
    boxShadowInner: "Unutarnji",
    names: {
      default: "Propust",
      sharp: "Oštar",
      borderless: "Bez obruba",
      flat: "Stan",
      plain: "Ravnica",
      doubleborder: "Dvostruki obrub",
      layered: "Slojevita",
      solid: "Solidan",
      threedimensional: ".3D",
      contrast: "Razlika"
    },
    colors: {
      teal: "Teal",
      blue: "Plav",
      purple: "Ljubičast",
      orchid: "Orhideja",
      tulip: "Lala",
      brown: "Smeđ",
      green: "Zelen",
      gray: "Siv"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Pozadina površine",
    "--sjs-primary-background-500": "Glavni",
    "--sjs-secondary-background-500": "Sekundaran",
    surfaceScale: "Površina",
    userInterfaceBaseUnit: "Korisničko sučelje",
    fontScale: "Krstionica",
    names: {
      sc2020: "Kreator ankete 2020",
      "default-light": "Svjetlo",
      "default-dark": "Mračan",
      "default-contrast": "Razlika"
    }
  }
};
setupLocale({ localeCode: "hr", strings: hrStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.ranking: "Ranking" => "Rangiranje"
// qt.tagbox: "Multi-Select Dropdown" => "Padajući izbornik s višestrukim odabirom"
// qt.buttongroup: "Button Group" => "Grupa gumba"
// ed.surveySettings: "Survey Settings" => "Postavke upitnika"
// ed.surveySettingsTooltip: "Open survey settings" => "Otvaranje postavki upitnika"
// ed.prevSelected: "Select previous" => "Odaberi prethodno"
// ed.nextSelected: "Select next" => "Odaberi sljedeće"
// ed.surveyTypeName: "Survey" => "Anketa"
// ed.pageTypeName: "Page" => "Stranica"
// ed.panelTypeName: "Panel" => "Panel"
// ed.questionTypeName: "Question" => "Pitanje"
// ed.columnTypeName: "Column" => "Stupac"
// ed.themeSurvey: "Themes" => "Teme"
// ed.defaultV2Theme: "Default" => "Propust"
// ed.modernTheme: "Modern" => "Moderan"
// ed.defaultTheme: "Default (legacy)" => "Zadano (naslijeđeno)"
// ed.jsonHideErrors: "Hide errors" => "Sakrij pogreške"
// ed.jsonShowErrors: "Show errors" => "Pokaži pogreške"
// ed.showMoreChoices: "Show more" => "Pokaži više"
// ed.showLessChoices: "Show less" => "Pokaži manje"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Upišite za pretraživanje..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Pitanja o izboru"
// ed.toolboxTextCategory: "Text Input Questions" => "Pitanja o unosu teksta"
// ed.toolboxContainersCategory: "Containers" => "Kontejnere"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matrična pitanja"
// ed.toolboxMiscCategory: "Misc" => "Ostalo"
// ed.translationPropertyGridTitle: "Language Settings" => "Jezične postavke"
// ed.themePropertyGridTitle: "Theme Settings" => "Postavke teme"
// ed.translationLanguages: "Languages" => "Jezici"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Samo korišteni nizovi"
// ed.translationPlaceHolder: "Translation..." => "Prevođenje..."
// ed.themeExportButton: "Export" => "Izvoz"
// ed.themeImportButton: "Import" => "Uvoz"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Odabiri se kopiraju iz"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML sadržaj će biti ovdje."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Ovdje ispustite pitanje iz kutije s alatima."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Anketa je prazna. Povucite element iz alatnog okvira ili kliknite donji gumb."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Povucite i ispustite sliku ovdje ili kliknite donji gumb i odaberite sliku koju želite prenijeti"
// ed.imageChooseImage: "Choose Image" => "Odabir slike"
// ed.addNewTypeQuestion: "Add {0}" => "Dodaj {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "automobil"
// ed.choices_Item: "Item " => "Stavka "
// lg.addNewItem: "Add New Rule" => "Dodaj novo pravilo"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Stvorite pravilo za prilagodbu tijeka upitnika."
// lg.page_enableName: "Enable (disable) page" => "Omogući (onemogući stranicu)"
// lg.column_visibilityName: "Show (hide) column" => "Pokaži (sakrij) stupac"
// lg.column_enableName: "Enable (disable) column" => "Omogući (onemogući stupac)"
// lg.column_requireName: "Make column required" => "Učini stupac obaveznim"
// lg.itemEmptyExpressionText: "New rule" => "Novo pravilo"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "učiniti stupac {0} pitanja vidljivim {1}"
// lg.column_enableText: "make column {0} of question {1} enable" => "{1} omogućivanje stupca {0} pitanja"
// lg.column_requireText: "make column {0} of question {1} required" => "Učinite stupac {0} pitanja {1} potrebnim"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Očisti vrijednost pitanja: {0}"
// lg.showAllQuestions: "All Questions" => "Sva pitanja"
// lg.showAllActionTypes: "All Action Types" => "Sve vrste akcija"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Logička pravila nisu potpuna"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Niste dovršili neka logička pravila. Ako sada napustite karticu, promjene će se izgubiti. Želite li ipak napustiti karticu bez dovršetka promjena?"
// lg.uncompletedRule_apply: "Yes" => "Da"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Ne, želim ispuniti pravila."
// pe.clear: "Clear" => "Jasan"
// pe.set: "Set" => "Skup"
// pe.change: "Change" => "Mijenjati"
// pe.close: "Close" => "Blizak"
// pe.removeItem: "Click to remove the item..." => "Kliknite da biste uklonili stavku..."
// pe.dragItem: "Drag the item" => "Vucite stavku"
// pe.doneEditing: "Done" => "Učinjeno"
// pe.emptyValue: "Value is empty" => "Vrijednost je prazna"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Vrijednost '{0}' nije jedinstvena"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Ograničite broj stavki s {0} na {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Podatke možete postaviti u sljedećem obliku:\nvrijednost1|tekst\nvrijednost2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Pregled odgovora prije slanja ankete"
// pe.overridingPropertyPrefix: "Set by " => "Postavio "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Nemojte koristiti rezervirane riječi: \"stavka\", \"izbor\", \"ploča\", \"red\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Još nema izbora"
// pe.addNew@choices: "Add a choice" => "Dodavanje izbora"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Dohvaćanje vrijednosti iz sljedećeg JSON polja"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Dohvaćanje URL-ova slika iz sljedećeg JSON polja"
// pe.allowEmptyResponse: "Allow empty response" => "Dopusti prazan odgovor"
// pe.and: "and" => "i"
// pe.or: "or" => "ili"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Odaberite pitanje da biste započeli konfiguriranje uvjeta."
// pe.if: "If" => "Ako"
// pe.then: "then" => "zatim"
// pe.setToName: "Target question" => "Ciljno pitanje"
// pe.fromName: "Question to copy answer from" => "Pitanje iz kojeg treba kopirati odgovor"
// pe.gotoName: "Question to skip to" => "Pitanje na koje treba preskočiti"
// pe.ruleIsNotSet: "Rule is incorrect" => "Pravilo nije ispravno"
// pe.includeIntoResult: "Include into survey results" => "Uključi u rezultate ankete"
// pe.portraitOrientation: "Switch to portrait orientation" => "Prebacivanje na okomito usmjerenje"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Visina slike (u CSS-prihvaćenim vrijednostima)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Širina slike (u CSS-prihvaćenim vrijednostima)"
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Vremensko ograničenje za dovršetak stranice (u sekundama)"
// question.page: "Parent page" => "Nadređena stranica"
// pe.noEntriesText: "Empty entries text" => "Prazan tekst unosa"
// pe.setValue: "Answer" => "Odgovor"
// pe.dataFormat: "Image format" => "Oblik slike"
// pe.allowAddRows: "Allow adding rows" => "Dopusti dodavanje redaka"
// pe.allowRemoveRows: "Allow removing rows" => "Dopusti uklanjanje redaka"
// pe.allowRowReorder: "Allow row drag and drop" => "Dopusti povlačenje i ispuštanje retka"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Ne primjenjuje se ako navedete točnu širinu ili visinu slike."
// pe.minImageWidth: "Minimum image width" => "Minimalna širina slike"
// pe.maxImageWidth: "Maximum image width" => "Maksimalna širina slike"
// pe.minImageHeight: "Minimum image height" => "Minimalna visina slike"
// pe.maxImageHeight: "Maximum image height" => "Maksimalna visina slike"
// surveyvalidator.text: "Error message" => "Poruka o pogrešci"
// surveyvalidator.expression: "Validation expression" => "Izraz za provjeru valjanosti"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logotip (URL ili niz kodiran base64)"
// pe.questionsOnPageMode: "Survey structure" => "Struktura upitnika"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Maksimalna duljina odgovora (u znakovima)"
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Maksimalna duljina komentara (u znakovima)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Ako je potrebno, automatsko proširivanje područja komentara"
// pe.allowResizeComment: "Allow users to resize text areas" => "Dopusti korisnicima promjenu veličine tekstnih područja"
// pe.textUpdateMode: "Update text question value" => "Ažuriranje vrijednosti tekstnog pitanja"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Postavljanje fokusa na prvi odgovor koji nije valjan"
// pe.checkErrorsMode: "Run validation" => "Pokreni provjeru valjanosti"
// pe.navigateToUrl: "Navigate to URL" => "Navigacija do URL-a"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dinamički URL"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Oznaka koja pokazuje je li korisnik već ispunio ovu anketu"
// pe.completedHtml: "Survey Complete page markup" => "Označavanje stranice dovršeno u anketi"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Oznaka stranice Dynamic Survey Completed"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Oznaka za prikaz tijekom učitavanja modela upitnika"
// pe.commentText: "Comment area text" => "Tekst područja komentara"
// pe.autocomplete: "Autocomplete type" => "Vrsta samodovršetka"
// pe.labelTrue: "\"True\" label" => "Oznaka \"True\""
// pe.labelFalse: "\"False\" label" => "Oznaka \"False\""
// pe.allowClear: "Show the Clear button" => "Prikaz gumba Očisti"
// pe.displayStyle: "Value display style" => "Stil prikaza vrijednosti"
// pe.format: "Formatted string" => "Oblikovani niz"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Maksimalne djelomične znamenke"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Minimalne djelomične znamenke"
// pe.useGrouping: "Display grouping separators" => "Prikaži razdjelnike grupiranja"
// pe.allowMultiple: "Allow multiple files" => "Dopusti više datoteka"
// pe.allowImagesPreview: "Preview images" => "Pretpregled slika"
// pe.acceptedTypes: "Accepted file types" => "Prihvaćene vrste datoteka"
// pe.waitForUpload: "Wait for the upload to complete" => "Pričekajte da se prijenos dovrši"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Potvrda brisanja datoteke"
// pe.detailPanelMode: "Detail panel location" => "Mjesto ploče s detaljima"
// pe.minRowCount: "Minimum row count" => "Najmanji broj redaka"
// pe.maxRowCount: "Maximum row count" => "Maksimalan broj redaka"
// pe.confirmDelete: "Confirm row deletion" => "Potvrda brisanja retka"
// pe.confirmDeleteText: "Confirmation message" => "Potvrdna poruka"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Potvrda brisanja ploče"
// pe.panelCount: "Initial panel count" => "Početni broj ploča"
// pe.minPanelCount: "Minimum panel count" => "Najmanji broj ploča"
// pe.maxPanelCount: "Maximum panel count" => "Maksimalan broj ploča"
// pe.panelsState: "Inner panel expand state" => "Stanje proširenja unutarnje ploče"
// pe.templateDescription: "Description template" => "Predložak opisa"
// pe.templateTitle: "Title template" => "Predložak naslova"
// pe.prevPanelText: "Previous Panel button tooltip" => "Opis alata gumba Prethodna ploča"
// pe.nextPanelText: "Next Panel button tooltip" => "Opis alata gumba Sljedeća ploča"
// pe.showRangeInProgress: "Show progress bar" => "Pokaži traku tijeka"
// pe.templateQuestionTitleLocation: "Question title location" => "Mjesto naslova pitanja"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Ukloni mjesto gumba ploče"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Sakrij pitanje ako nema redaka"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Sakrij stupce ako nema redaka"
// pe.rateValues: "Custom rate values" => "Vrijednosti prilagođene stope"
// pe.rateCount: "Rate count" => "Broj stopa"
// pe.autoGenerate: "How to specify rate values?" => "Kako odrediti vrijednosti stope?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Sakrij pitanje ako ne sadrži izbora"
// pe.hideNumber: "Hide question number" => "Sakrij broj pitanja"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Minimalna širina (u CSS-prihvaćenim vrijednostima)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Maksimalna širina (u CSS-prihvaćenim vrijednostima)"
// pe.width: "Width (in CSS-accepted values)" => "Širina (u CSS-prihvaćenim vrijednostima)"
// pe.showHeader: "Show column headers" => "Pokaži zaglavlja stupaca"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Pokaži vodoravni klizač"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Minimalna širina stupca (u CSS-prihvaćenim vrijednostima)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Širina zaglavlja retka (u CSS-prihvaćenim vrijednostima)"
// pe.valueTrue: "\"True\" value" => "Vrijednost \"True\""
// pe.valueFalse: "\"False\" value" => "Vrijednost \"False\""
// pe.minErrorText: "\"Value is below minimum\" error message" => "Poruka o pogrešci \"Vrijednost je ispod minimuma\""
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "Poruka o pogrešci \"Vrijednost premašuje maksimum\""
// pe.otherErrorText: "\"Empty comment\" error message" => "Poruka o pogrešci \"Prazan komentar\""
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Poruka o pogrešci \"Nejedinstvena vrijednost ključa\""
// pe.minSelectedChoices: "Minimum selected choices" => "Minimalno odabrani odabiri"
// pe.maxSelectedChoices: "Maximum selected choices" => "Maksimalan broj odabranih izbora"
// pe.showNumber: "Show panel number" => "Pokaži broj ploče"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Širina logotipa (u CSS-prihvaćenim vrijednostima)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Visina logotipa (u CSS-prihvaćenim vrijednostima)"
// pe.readOnly: "Read-only" => "Samo za čitanje"
// pe.enableIf: "Editable if" => "Može se uređivati ako"
// pe.noRowsText: "\"No rows\" message" => "Poruka \"Bez redaka\""
// pe.size: "Input field size (in characters)" => "Veličina polja unosa (u znakovima)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Razdvoji posebne odabire (Ništa, Ostalo, Odaberi sve)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiraj odabire iz sljedećeg pitanja"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Koje izbore kopirati?"
// pe.showCommentArea: "Show the comment area" => "Prikaz područja komentara"
// pe.commentPlaceholder: "Comment area placeholder" => "Rezervirano mjesto područja komentara"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Opisi brzine prikaza kao ekstremne vrijednosti"
// pe.rowOrder: "Row order" => "Redoslijed redaka"
// pe.columnsLayout: "Column layout" => "Izgled stupca"
// pe.columnColCount: "Nested column count" => "Broj ugniježđenih stupaca"
// pe.state: "Panel expand state" => "Stanje proširenja ploče"
// pe.correctAnswer: "Correct Answer" => "Točan odgovor"
// pe.defaultPanelValue: "Default Values" => "Zadane vrijednosti"
// pe.cells: "Cell Texts" => "Tekstovi ćelija"
// pe.keyName: "Key column" => "Stupac ključa"
// itemvalue.text: "Alt text" => "Zamjenski tekst"
// tabs.expression: "Expression" => "Izraz"
// pe.choicesVisibleIf: "Choices are visible if" => "Izbori su vidljivi ako"
// pe.choicesEnableIf: "Choices are selectable if" => "Izbori se mogu odabrati ako"
// pe.columnsEnableIf: "Columns are visible if" => "Stupci su vidljivi ako"
// pe.rowsEnableIf: "Rows are visible if" => "Reci su vidljivi ako"
// pe.indent: "Add indents" => "Dodavanje uvlaka"
// panel.indent: "Add outer indents" => "Dodavanje vanjskih uvlaka"
// pe.innerIndent: "Add inner indents" => "Dodavanje unutarnjih uvlaka"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Ovdje upišite izraz..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Očisti vrijednost ako pitanje postane skriveno"
// pe.valuePropertyName: "Value property name" => "Naziv svojstva Vrijednost"
// pe.searchEnabled: "Enable search" => "Omogući pretraživanje"
// pe.hideSelectedItems: "Hide selected items" => "Sakrij odabrane stavke"
// pe.closeOnSelect: "Close the dropdown after selection" => "Zatvaranje padajućeg izbornika nakon odabira"
// pe.signatureWidth: "Signature width" => "Širina potpisa"
// pe.signatureHeight: "Signature height" => "Visina potpisa"
// pe.verticalAlign: "Vertical alignment" => "Okomito poravnanje"
// pe.alternateRows: "Alternate rows" => "Zamjenski reci"
// pe.columnsVisibleIf: "Columns are visible if" => "Stupci su vidljivi ako"
// pe.rowsVisibleIf: "Rows are visible if" => "Reci su vidljivi ako"
// pe.otherPlaceholder: "Comment area placeholder" => "Rezervirano mjesto područja komentara"
// pe.rateType: "Rate type" => "Vrsta stope"
// pv.true: "true" => "istinit"
// pv.false: "false" => "lažan"
// pv.decimal: "decimal" => "decimala"
// pv.currency: "currency" => "valuta"
// pv.percent: "percent" => "posto"
// pv.onpanel: "Start on each panel" => "Započni na svakoj ploči"
// pv.tab: "Tabs" => "Tabulatori"
// pv.right: "Right" => "Desno"
// pv.color: "color" => "boja"
// pv.date: "date" => "datum"
// pv.datetime: "datetime" => "datum i vrijeme"
// pv.datetime-local: "datetime-local" => "datetime-local"
// pv.email: "email" => "E-pošta"
// pv.month: "month" => "mjesec"
// pv.number: "number" => "broj"
// pv.password: "password" => "lozinka"
// pv.range: "range" => "domet"
// pv.tel: "tel" => "Tel"
// pv.text: "text" => "Tekstualna poruka"
// pv.time: "time" => "Vrijeme"
// pv.url: "url" => "URL"
// pv.week: "week" => "tjedan"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Kada se pitanje ili njegova ploča/stranica sakriju"
// clearInvisibleValues.none: "Never" => "Nikada"
// inputType.color: "Color" => "Boja"
// inputType.date: "Date" => "Datum"
// inputType.datetime-local: "Date and Time" => "Datum i vrijeme"
// inputType.email: "Email" => "E-pošta"
// inputType.month: "Month" => "Mjesec"
// inputType.number: "Number" => "Broj"
// inputType.password: "Password" => "Lozinka"
// inputType.range: "Range" => "Domet"
// inputType.tel: "Phone Number" => "Telefonski broj"
// inputType.text: "Text" => "Tekstualna poruka"
// inputType.time: "Time" => "Vrijeme"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Tjedan"
// pv.onValueChanging: "Before an answer is changed" => "Prije promjene odgovora"
// pv.pages: "Completed pages" => "Dovršene stranice"
// pv.questions: "Answered questions" => "Odgovorena pitanja"
// pv.requiredQuestions: "Answered required questions" => "Odgovoreno na obavezna pitanja"
// pv.correctQuestions: "Valid answers" => "Valjani odgovori"
// pv.buttons: "Completed pages (button UI)" => "Dovršene stranice (korisničko sučelje gumba)"
// pv.underInput: "Under the input" => "Ispod ulaza"
// pv.underTitle: "Under the title" => "Pod naslovom"
// pv.onBlur: "On blur" => "Na zamućenju"
// pv.onTyping: "While typing" => "Tijekom tipkanja"
// pv.underRow: "Under the row" => "Ispod retka"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Ispod retka vidljiva je samo jedna ploča"
// showNavigationButtons.none: "Hidden" => "Skriven"
// showProgressBar.off: "Hidden" => "Skriven"
// showTimerPanel.none: "Hidden" => "Skriven"
// showTimerPanelMode.all: "Both" => "Oba"
// detailPanelMode.none: "Hidden" => "Skriven"
// addRowButtonLocation.default: "Depends on matrix layout" => "Ovisi o izgledu matrice"
// panelsState.default: "Users cannot expand or collapse panels" => "Korisnici ne mogu proširiti ili sažeti ploče"
// panelsState.collapsed: "All panels are collapsed" => "Sve ploče su urušene"
// panelsState.expanded: "All panels are expanded" => "Sve ploče su proširene"
// widthMode.auto: "Auto" => "Automobil"
// widthMode.static: "Static" => "Statički"
// widthMode.responsive: "Responsive" => "Odgovarajući"
// imageFit.none: "None" => "Nijedan"
// imageFit.contain: "Contain" => "Sadržavati"
// imageFit.cover: "Cover" => "Pokriti"
// imageFit.fill: "Fill" => "Ispuniti"
// contentMode.auto: "Auto" => "Automobil"
// contentMode.image: "Image" => "Slika"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTube"
// displayMode.auto: "Auto" => "Automobil"
// displayMode.buttons: "Buttons" => "Gumbe"
// displayMode.dropdown: "Dropdown" => "Padajući izbornik"
// rateColorMode.default: "Default" => "Propust"
// autoGenerate.true: "Generate" => "Generirati"
// autoGenerate.false: "Enter manually" => "Ručno unesite"
// rateType.labels: "Labels" => "Natpise"
// rateType.stars: "Stars" => "Zvijezde"
// rateType.smileys: "Smileys" => "Smajlići"
// op.and: "and" => "i"
// op.or: "or" => "ili"
// ts.hideInvisibleElements: "Hide invisible elements" => "Sakrij nevidljive elemente"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Kolačići sprječavaju korisnike da dvaput ispune istu anketu."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Mijenja veličinu vidljivog područja polja unosa. Da biste ograničili duljinu unosa, koristite postavku <b>Provjera valjanosti → maksimalnu duljinu</b>."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Koristite {0} kao rezervirano mjesto za stvarnu vrijednost."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Vidljivo samo ako barem jedan stupac ima izraz Vrsta zbroja ili Ukupno."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Dodatne informacije potražite u opisu atributa [accept](https://www.w3schools.com/tags/att_input_accept.asp)."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Primjenjivo samo na vrste ćelija Radiogrupa i Potvrdni okvir."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Dodatne informacije potražite u opisu atributa [samodovršetak](https://developer.mozilla.org/en-US/docs/Web/HTML/atributi/samodovršetak)."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Ako ne postavite ovo svojstvo, odgovor će biti pohranjen u polju određenom svojstvom Naziv ."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Ako navedeni stupac sadrži identične vrijednosti, anketa odbacuje pogrešku \"Nejedinstvena vrijednost ključa\"."
// p.multiSelect: "Allow multiple selection" => "Dopusti višestruki odabir"
// p.showLabel: "Show image captions" => "Pokaži opise slika"
// p.value: "Value" => "Vrijednost"
// p.tabAlign: "Tab alignment" => "Poravnanje tabulatora"
// p.logoFit: "Logo fit" => "Prilagođavanje logotipa"
// p.pages: "Pages" => "Stranice"
// p.questions: "Questions" => "Pitanja"
// p.calculatedValues: "Calculated values" => "Izračunate vrijednosti"
// p.surveyId: "Survey id" => "ID upitnika"
// p.surveyPostId: "Survey post id" => "ID objave upitnika"
// p.surveyShowDataSaving: "Survey show data saving" => "Anketa pokazuje spremanje podataka"
// p.questionDescriptionLocation: "Question description location" => "Mjesto opisa pitanja"
// p.progressBarType: "Progress bar type" => "Vrsta trake napretka"
// p.showTOC: "Show TOC" => "Pokaži tablicu sadržaja"
// p.tocLocation: "Toc location" => "Mjesto tablice sadržaja"
// p.questionTitlePattern: "Question title pattern" => "Uzorak naslova pitanja"
// p.widthMode: "Width mode" => "Način širine"
// p.showBrandInfo: "Show brand info" => "Pokaži informacije o robnoj marki"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Korištenje vrijednosti prikaza u dinamičkim tekstovima"
// p.descriptionLocation: "Description location" => "Mjesto opisa"
// p.defaultValueExpression: "Default value expression" => "Zadani izraz vrijednosti"
// p.bindings: "Bindings" => "Vezovi"
// p.renderAs: "Render as" => "Iscrtaj kao"
// p.attachOriginalItems: "Attach original items" => "Priloži izvorne stavke"
// p.cellHint: "Cell hint" => "Savjet za ćeliju"
// p.isUnique: "Is unique" => "Jedinstven je"
// p.showInMultipleColumns: "Show in multiple columns" => "Prikaži u više stupaca"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Ukupan maksimalni broj znamenki razlomka"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Ukupan minimum znamenki razlomka"
// p.detailElements: "Detail elements" => "Elementi detalja"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Dopusti prilagodljive radnje"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Prikaži na ploči s detaljima prilikom dodavanja"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Omogućeno lijeno opterećenje izbora"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Odabiri lijeno učitavanje veličine stranice"
// p.inputFieldComponent: "Input field component" => "Komponenta polja za unos"
// p.itemComponent: "Item component" => "Komponenta artikla"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Izraz minimalne vrijednosti"
// p.maxValueExpression: "Max value expression" => "Izraz maksimalne vrijednosti"
// p.step: "Step" => "Korak"
// p.dataList: "Data list" => "Popis podataka"
// p.elements: "Elements" => "Elemenata"
// p.content: "Content" => "Sadržaj"
// p.navigationTitle: "Navigation title" => "Naslov navigacije"
// p.navigationDescription: "Navigation description" => "Opis navigacije"
// p.longTap: "Long tap" => "Dugi dodir"
// p.autoGrow: "Auto grow" => "Automatski rast"
// p.allowResize: "Allow resizing" => "Dopusti promjenu veličine"
// p.acceptCarriageReturn: "Accept carriage return" => "Prihvati povratak prijevoza"
// p.displayMode: "Display mode" => "Način prikaza"
// p.rateType: "Rate type" => "Vrsta stope"
// p.contentMode: "Content mode" => "Način sadržaja"
// p.imageFit: "Image fit" => "Prilagodba slike"
// p.altText: "Alt text" => "Zamjenski tekst"
// p.height: "Height" => "Visina"
// p.penColor: "Pen color" => "Boja olovke"
// p.backgroundColor: "Background color" => "Boja pozadine"
// p.templateElements: "Template elements" => "Elementi predloška"
// p.operator: "Operator" => "Operator"
// p.isVariable: "Is variable" => "Je promjenjivo"
// p.runExpression: "Run expression" => "Pokreni izraz"
// p.showCaption: "Show caption" => "Pokaži opis"
// p.iconName: "Icon name" => "Naziv ikone"
// p.iconSize: "Icon size" => "Veličina ikone"
// p.precision: "Precision" => "Preciznost"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Područje držača za povlačenje matrice"
// p.backgroundImage: "Background image" => "Pozadinska slika"
// p.backgroundImageFit: "Background image fit" => "Prilagodba pozadinske slike"
// p.backgroundImageAttachment: "Background image attachment" => "Privitak pozadinske slike"
// p.backgroundOpacity: "Background opacity" => "Neprozirnost pozadine"
// p.selectToRankEnabled: "Select to rank enabled" => "Odaberite za omogućen rang"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Odabir za rangiranje izgleda područja"
// p.allowCameraAccess: "Allow camera access" => "Dopusti pristup kameri"
// p.scaleColorMode: "Scale color mode" => "Način skaliranja boje"
// p.rateColorMode: "Rate color mode" => "Način ocjenjivanja boja"
// p.templateTabTitle: "Template tab title" => "Naslov kartice Predložak"
// p.templateVisibleIf: "Template visible if" => "Predložak vidljiv ako"
// p.copyDisplayValue: "Copy display value" => "Kopiraj vrijednost prikaza"
// theme.--background: "Background color" => "Boja pozadine"
// theme.--background-dim-light: "Background dim light color" => "Pozadina prigušena svijetla boja"
// theme.--primary-foreground: "Primary foreground color" => "Primarna boja prednjeg plana"
// theme.--foreground: "Foreground color" => "Boja prednjeg plana"
// theme.--base-unit: "Base unit" => "Osnovna jedinica"
// theme.groupAdvanced: "Advanced" => "Napredan"
// theme.themeName: "Theme" => "Tema"
// theme.isPanellessss: "Question appearance" => "Izgled pitanja"
// theme.isPanellessPanels: "Default" => "Propust"
// theme.isPanellessLightweight: "Without Panels" => "Bez panela"
// theme.themePaletteLight: "Light" => "Svjetlo"
// theme.themePaletteDark: "Dark" => "Mračan"
// theme.primaryColor: "Accent color" => "Boja isticanja"
// theme.primaryDefaultColor: "Default" => "Propust"
// theme.primaryDarkColor: "Hover" => "Lebdjeti"
// theme.primaryLightColor: "Selected" => "Odabrani"
// theme.backgroundDimColor: "Background color" => "Boja pozadine"
// theme.backgroundImage: "Background image" => "Pozadinska slika"
// theme.backgroundImageFitAuto: "Auto" => "Automobil"
// theme.backgroundImageFitCover: "Cover" => "Pokriti"
// theme.backgroundImageFitContain: "Contain" => "Sadržavati"
// theme.backgroundOpacity: "Opacity" => "Neprozirnost"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Fiksirane"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Svitak"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Neprozirnost pozadine ploče"
// theme.questionBackgroundTransparency: "Question background opacity" => "Pitanje neprozirnosti pozadine"
// theme.questionPanel: "Panel background and corner radius" => "Pozadina ploče i kutni radijus"
// theme.questionTitle: "Question title font" => "Font naslova pitanja"
// theme.questionDescription: "Question description font" => "Font opisa pitanja"
// theme.editorPanel: "Input element" => "Ulazni element"
// theme.editorFont: "Input element font" => "Font elementa unosa"
// theme.backcolor: "Default background" => "Zadana pozadina"
// theme.hovercolor: "Hover background" => "Pozadina držanja pokazivača miša"
// theme.borderDecoration: "Border decoration" => "Uređenje obruba"
// theme.accentBackground: "Accent background" => "Pozadina isticanja"
// theme.accentForeground: "Accent foreground" => "Isticanje u prvom planu"
// theme.primaryForecolor: "Default color" => "Zadana boja"
// theme.primaryForecolorLight: "Disabled color" => "Onemogućena boja"
// theme.linesColors: "Minor line colors" => "Sporedne boje crta"
// theme.borderDefault: "Darker" => "Tamnije"
// theme.borderLight: "Lighter" => "Upaljač"
// theme.fontFamily: "Font family" => "Obitelj fontova"
// theme.fontSize: "Font size" => "Veličina fonta"
// theme.color: "Color" => "Boja"
// theme.size: "Size" => "Veličina"
// theme.fontWeightRegular: "Regular" => "Redovan"
// theme.fontWeightHeavy: "Heavy" => "Težak"
// theme.fontWeightSemiBold: "Semi-bold" => "Polupodebljano"
// theme.fontWeightBold: "Bold" => "Odvažan"
// theme.scale: "Scale" => "Vaga"
// theme.cornerRadius: "Corner radius" => "Kutni radijus"
// theme.surveyTitleFont: "Survey title font" => "Font naslova upitnika"
// theme.pageTitle: "Page title font" => "Font naslova stranice"
// theme.pageDescription: "Page description font" => "Font opisa stranice"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Dodaj efekt sjene"
// theme.opacity: "Opacity" => "Neprozirnost"
// theme.boxShadowBlur: "Blur" => "Mrlja"
// theme.boxShadowSpread: "Spread" => "Širenje"
// theme.boxShadowDrop: "Drop" => "Ispustiti"
// theme.boxShadowInner: "Inner" => "Unutarnji"
// theme.questionShadow: "Shadow effects" => "Efekti sjene"
// theme.editorShadow: "Input element shadow effects" => "Efekti sjene ulaznog elementa"
// names.default: "Default" => "Propust"
// names.contrast: "Contrast" => "Razlika"
// names.plain: "Plain" => "Ravnica"
// names.simple: "Simple" => "Jednostavan"
// names.blank: "Blank" => "Prazno"
// names.double: "Double" => "Dvostruk"
// names.bulk: "Bulk" => "Veličina"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Razigran"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Teal"
// colors.blue: "Blue" => "Plav"
// colors.purple: "Purple" => "Ljubičast"
// colors.orchid: "Orchid" => "Orhideja"
// colors.tulip: "Tulip" => "Lala"
// colors.brown: "Brown" => "Smeđ"
// colors.green: "Green" => "Zelen"
// names.sharp: "Sharp" => "Oštar"
// names.borderless: "Borderless" => "Bez obruba"
// names.flat: "Flat" => "Stan"
// names.doubleborder: "Double Border" => "Dvostruki obrub"
// names.layered: "Layered" => "Slojevita"
// names.solid: "Solid" => "Solidan"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Jeste li sigurni da želite izbrisati sve nizove za ovaj jezik?"
// ed.themeResetButton: "Reset theme settings to default" => "Vraćanje zadanih postavki teme na zadano"
// theme.placeholderColor: "Placeholder color" => "Boja rezerviranog mjesta"
// ed.themeSettings: "Theme Settings" => "Postavke teme"
// ed.themeSettingsTooltip: "Open theme settings" => "Otvaranje postavki teme"
// pe.resetToDefaultCaption: "Reset" => "Brisanje"
// pv.file: "Local files" => "Lokalne datoteke"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Lokalne datoteke ili kamera"
// ed.translateUsigAI: "Auto-translate All" => "Automatski prevedi sve"
// ed.translationDialogTitle: "Untranslated strings" => "Neprevedeni nizovi"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Unesite najmanje {0} stavki"
// lg.question_resetValueName: "Reset question value" => "Vrati izvornu vrijednost pitanja"
// lg.column_resetValue: "Reset column value" => "Vraćanje izvorne vrijednosti stupca"
// pe.markRequired: "Mark as required" => "Označi kao obavezno"
// pe.removeRequiredMark: "Remove the required mark" => "Uklanjanje potrebne oznake"
// p.resetValueIf: "Reset value if" => "Vrati izvornu vrijednost ako"
// lg.question_setValueName: "Set question value" => "Postavljanje vrijednosti pitanja"
// lg.column_resetValueName: "Reset column value" => "Vraćanje izvorne vrijednosti stupca"
// lg.column_setValueName: "Set column value" => "Postavljanje vrijednosti stupca"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Izraz čiji će rezultat biti dodijeljen ciljnom pitanju."
// survey.title: "Title" => "Naslov"
// page.title: "Title" => "Naslov"
// p.setValueIf: "Set value if" => "Postavi vrijednost ako"
// theme.header: "Header" => "Zaglavlje"
// theme.backgroundImageFitFill: "Stretch" => "Parcela"
// theme.backgroundImageFitTile: "Tile" => "Crijep"
// theme.headerView: "View" => "Pogled"
// theme.headerViewBasic: "Basic" => "Osnovni"
// theme.headerViewAdvanced: "Advanced" => "Napredan"
// theme.headerInheritWidthFrom: "Content area width" => "Širina područja sadržaja"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Isto kao i anketa"
// theme.headerInheritWidthFromPage: "Fit to page" => "Prilagodi stranici"
// theme.headerTextAreaWidth: "Text width" => "Širina teksta"
// theme.headerBackgroundColorSwitch: "Background color" => "Boja pozadine"
// theme.headerBackgroundColorNone: "None" => "Nijedan"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Boja isticanja"
// theme.headerBackgroundColorCustom: "Custom" => "Običaj"
// theme.horizontalAlignmentLeft: "Left" => "Lijevo"
// theme.horizontalAlignmentCenter: "Center" => "Središte"
// theme.horizontalAlignmentRight: "Right" => "Desno"
// theme.verticalAlignmentTop: "Top" => "Vrh"
// theme.verticalAlignmentMiddle: "Middle" => "Sredina"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Položaj logotipa"
// theme.headerTitlePosition: "Title Position" => "Položaj naslova"
// theme.headerDescriptionPosition: "Description Position" => "Položaj opisa"
// lg.question_resetValueText: "reset value for question: {0}" => "Vrati izvornu vrijednost za pitanje: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Dodijeli vrijednost: {1} pitanje: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Vrati izvornu vrijednost ćelije za stupac: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Dodijeli vrijednost ćelije: {1} stupcu: {0}"
// ed.surveyJsonExportButton: "Export" => "Izvoz"
// ed.surveyJsonImportButton: "Import" => "Uvoz"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopiraj u međuspremnik"
// pe.filePlaceholder: "File placeholder text" => "Tekst rezerviranog mjesta datoteke"
// pe.photoPlaceholder: "Photo placeholder text" => "Tekst rezerviranog mjesta za fotografije"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Tekst rezerviranog mjesta za datoteku ili fotografiju"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke\" ili kada kamera nije dostupna"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Primjenjuje se kada je \"Vrsta izvora\" \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke ili kamera\"."
// theme.background: "Background" => "Pozadina"
// theme.appearance: "Appearance" => "Izgled"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Želite li zaista resetirati temu? Sve prilagodbe bit će izgubljene."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Da, resetirajte temu"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Prilagodi spremniku"
// signaturepad.showPlaceholder: "Show the placeholder" => "Pokaži rezervirano mjesto"
// signaturepad.placeholder: "Placeholder text" => "Tekst rezerviranog mjesta"
// theme.surveyDescriptionFont: "Survey description font" => "Font opisa upitnika"

// ed.prevFocus: "Focus previous" => "Fokusiraj prethodno"
// ed.nextFocus: "Focus next" => "Usredotoči se sljedeće"
// ed.saveTheme: "Save Theme" => "Spremi temu"
// ed.saveThemeTooltip: "Save Theme" => "Spremi temu"
// lg.page_requireName: "Make page required" => "Učini stranicu obaveznom"
// lg.panel_requireName: "Make page required" => "Učini stranicu obaveznom"
// signaturepad.signatureWidth: "Signature area width" => "Širina područja potpisa"
// signaturepad.signatureHeight: "Signature area height" => "Visina područja potpisa"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Automatsko mijenjanje područja potpisa"
// signaturepad.penMinWidth: "Minimum pen width" => "Minimalna širina olovke"
// signaturepad.penMaxWidth: "Maximum pen width" => "Maksimalna širina olovke"
// ed.propertyGridNoResultsFound: "No results found" => "Nisu pronađeni rezultati"
// pv.leftRight: "Left and right" => "Lijevo i desno"
// p.sourceType: "Source type" => "Vrsta izvora"
// p.fitToContainer: "Fit to container" => "Prilagodi spremniku"
// p.setValueExpression: "Set value expression" => "Postavljanje izraza vrijednosti"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Izbori se učitavaju s web-usluge."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Idi na postavke"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Pretpregled učitanih mogućnosti izbora"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Sprječavanje dvostrukih odgovora u recima"
// theme.advancedMode: "Advanced mode" => "Napredni način rada"
// theme.backgroundCornerRadius: "Background and corner radius" => "Polumjer pozadine i kuta"
// theme.colorsTitle: "Colors" => "Boje"
// theme.font: "Font" => "Krstionica"
// theme.lines: "Lines" => "Linije"
// theme.titleFont: "Title font" => "Font naslova"
// theme.descriptionFont: "Description font" => "Font opisa"
// theme.shadow: "Shadow effects" => "Efekti sjene"
// ed.translateUsigAIFrom: "Translate from: " => "Prevedi iz: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Dopusti mogućnost Odbij odgovoriti"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Dopusti mogućnost Ne znam"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Dopusti mogućnost Odbij odgovoriti"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Dopusti mogućnost Ne znam"
// pv.contain: "Contain" => "Sadržavati"
// pv.cover: "Cover" => "Pokriti"
// pv.fill: "Fill" => "Ispuniti"

// pe.transposeData: "Transpose rows to columns" => "Transponiranje redaka u stupce"
// layout.panel: "Layout" => "Tlocrt"
// layout.question: "Layout" => "Tlocrt"
// layout.base: "Layout" => "Tlocrt"
// panel.name: "Panel name" => "Naziv ploče"
// panel.title: "Panel title" => "Naslov ploče"
// panel.description: "Panel description" => "Opis ploče"
// panel.visibleIf: "Make the panel visible if" => "Učini ploču vidljivom ako"
// panel.requiredIf: "Make the panel required if" => "Učinite ploču potrebnom ako"
// panel.questionOrder: "Question order within the panel" => "Redoslijed pitanja unutar ploče"
// panel.startWithNewLine: "Display the panel on a new line" => "Prikaz ploče na novom retku"
// panel.state: "Panel collapse state" => "Stanje sažimanja ploče"
// panel.width: "Inline panel width" => "Širina umetnute ploče"
// panel.minWidth: "Minimum panel width" => "Minimalna širina ploče"
// panel.maxWidth: "Maximum panel width" => "Maksimalna širina ploče"
// paneldynamic.name: "Panel name" => "Naziv ploče"
// paneldynamic.title: "Panel title" => "Naslov ploče"
// paneldynamic.description: "Panel description" => "Opis ploče"
// paneldynamic.visibleIf: "Make the panel visible if" => "Učini ploču vidljivom ako"
// paneldynamic.requiredIf: "Make the panel required if" => "Učinite ploču potrebnom ako"
// paneldynamic.page: "Move the panel to page" => "Premještanje ploče na stranicu"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Prikaz ploče na novom retku"
// paneldynamic.state: "Panel collapse state" => "Stanje sažimanja ploče"
// paneldynamic.width: "Inline panel width" => "Širina umetnute ploče"
// paneldynamic.minWidth: "Minimum panel width" => "Minimalna širina ploče"
// paneldynamic.maxWidth: "Maximum panel width" => "Maksimalna širina ploče"
// paneldynamic.templateDescription: "Panel description pattern" => "Uzorak opisa ploče"
// paneldynamic.templateTitle: "Panel title pattern" => "Uzorak naslova ploče"
// paneldynamic.noEntriesText: "Empty panel text" => "Prazan tekst ploče"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Uzorak naslova kartice"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Učinite pojedinačnu ploču vidljivom ako"
// paneldynamic.hideNumber: "Hide the panel number" => "Skrivanje broja ploče"
// paneldynamic.titleLocation: "Panel title alignment" => "Poravnanje naslova ploče"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Poravnanje opisa ploče"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Poravnanje naslova pitanja"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Poravnanje poruke o pogrešci"
// paneldynamic.newPanelPosition: "New panel location" => "Novo mjesto ploče"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Spriječite dvostruke odgovore u sljedećem pitanju"
// question.name: "Question name" => "Naziv pitanja"
// question.title: "Question title" => "Naslov pitanja"
// question.description: "Question description" => "Opis pitanja"
// question.visibleIf: "Make the question visible if" => "Učinite pitanje vidljivim ako"
// question.requiredIf: "Make the question required if" => "Neka pitanje bude potrebno ako:"
// question.state: "Question box collapse state" => "Stanje sažimanja okvira pitanja"
// question.hideNumber: "Hide the question number" => "Skrivanje broja pitanja"
// question.titleLocation: "Question title alignment" => "Poravnanje naslova pitanja"
// question.descriptionLocation: "Question description alignment" => "Poravnanje opisa pitanja"
// question.errorLocation: "Error message alignment" => "Poravnanje poruke o pogrešci"
// question.indent: "Increase the inner indent" => "Povećajte unutarnju uvlaku"
// question.width: "Inline question width" => "Širina umetnutog pitanja"
// question.minWidth: "Minimum question width" => "Minimalna širina pitanja"
// question.maxWidth: "Maximum question width" => "Maksimalna širina pitanja"
// question.textUpdateMode: "Update input field value" => "Ažuriranje vrijednosti polja unosa"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Prikaz gumba Očisti unutar područja za potpis"
// signaturepad.penColor: "Stroke color" => "Boja poteza"
// comment.rows: "Input field height (in lines)" => "Visina polja unosa (u recima)"
// expression.name: "Expression name" => "Naziv izraza"
// expression.title: "Expression title" => "Naslov izraza"
// expression.description: "Expression description" => "Opis izraza"
// expression.expression: "Expression" => "Izraz"
// trigger.expression: "Expression" => "Izraz"
// calculatedvalue.expression: "Expression" => "Izraz"
// survey.description: "Survey description" => "Opis upitnika"
// page.name: "Page name" => "Naziv stranice"
// page.description: "Page description" => "Opis stranice"
// page.visibleIf: "Make the page visible if" => "Učini stranicu vidljivom ako"
// page.requiredIf: "Make the page required if" => "Učini stranicu potrebnom ako"
// page.questionOrder: "Question order on the page" => "Redoslijed pitanja na stranici"
// matrixdropdowncolumn.name: "Column name" => "Naziv stupca"
// matrixdropdowncolumn.title: "Column title" => "Naslov stupca"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Sprječavanje dvostrukih odgovora"
// matrixdropdowncolumn.width: "Column width" => "Širina stupca"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Minimalna širina stupca"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Visina polja unosa (u recima)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Učini stupac vidljivim ako"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Učinite stupac potrebnim ako"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Svaka mogućnost u zasebnom stupcu"
// multipletextitem.name: "Name" => "Ime"
// multipletextitem.title: "Title" => "Naslov"
// pe.rateDescriptionLocation: "Label alignment" => "Poravnanje natpisa"
// pe.cellErrorLocation: "Cell error message alignment" => "Poravnanje poruke o pogrešci ćelije"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Još nemate kolumne"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Još nemate redaka"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Još nemate pravila provjere valjanosti"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Još nemate prilagođene varijable"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Još nemaš okidača"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Još nemate poveznice"
// pe.addNew@columns: "Add new column" => "Dodaj novi stupac"
// pe.addNew@rows: "Add new row" => "Dodaj novi redak"
// pe.addNew@validators: "Add new rule" => "Dodaj novo pravilo"
// pe.addNew@calculatedValues: "Add new variable" => "Dodaj novu varijablu"
// pe.addNew@triggers: "Add new trigger" => "Dodaj novi okidač"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Dodaj novi URL"
// choicesbyurl.url: "Web service's URL" => "URL web-usluge"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Prikaz naslova stranica na traci tijeka"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Prikaz brojeva stranica na traci tijeka"
// itemvalue.visibleIf: "Make the option visible if" => "Učini mogućnost vidljivom ako"
// itemvalue.enableIf: "Make the option selectable if" => "Učini mogućnost odabranom ako"
// panel.layout: "Panel Layout" => "Izgled ploče"
// tabs.questionSettings: "Question Settings" => "Postavke pitanja"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Npr.: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Ex.: kategorije.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Npr.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Npr.: 6 inča"
// pe.minWidth_placeholder: "Ex.: 600px" => "Npr.: 600px"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Npr.: 50%"
// pv.selected: "Selected" => "Odabrani"
// pv.unselected: "Unselected" => "Neodabrano"
// pv.center: "Center" => "Središte"
// pv.middle: "Middle" => "Sredina"
// pv.next: "Next" => "Sljedeći"
// pv.last: "Last" => "Trajati"
// clearIfInvisible.none: "Never" => "Nikada"
// questionsOnPageMode.standard: "Original structure" => "Izvorna struktura"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Pokaži sva pitanja na jednoj stranici"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Pokaži jedno pitanje po stranici"
// pv.auto: "Auto" => "Automobil"
// panelsState.firstExpanded: "First expanded" => "Prvo prošireno"
// rateColorMode.scale: "Scale" => "Vaga"
// scaleColorMode.monochrome: "Monochrome" => "Jednobojni"
// scaleColorMode.colored: "Colored" => "Boji"
// state.default: "Locked" => "Zaključan"
// showQuestionNumbers.default: "Auto-numbering" => "Automatsko numeriranje"
// showQuestionNumbers.on: "Auto-numbering" => "Automatsko numeriranje"
// showQuestionNumbers.onPage: "Reset on each page" => "Vrati izvorno na svaku stranicu"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Vrati izvorno na svaku ploču"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Vrati izvorno na svaku ploču"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Nastavi kroz anketu"
// showQuestionNumbers.off: "No numbering" => "Bez numeriranja"
// descriptionLocation.underTitle: "Under the question title" => "Pod naslovom pitanja"
// descriptionLocation.underInput: "Under the input field" => "Ispod polja za unos"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Pored izbora"
// selectToRankAreasLayout.vertical: "Above choices" => "Iznad izbora"
// displayStyle.decimal: "Decimal" => "Decimala"
// displayStyle.currency: "Currency" => "Valuta"
// displayStyle.percent: "Percentage" => "Postotak"
// displayStyle.date: "Date" => "Datum"
// totalDisplayStyle.decimal: "Decimal" => "Decimala"
// totalDisplayStyle.currency: "Currency" => "Valuta"
// totalDisplayStyle.percent: "Percentage" => "Postotak"
// totalDisplayStyle.date: "Date" => "Datum"
// rowOrder.initial: "Original" => "Originalan"
// questionOrder.initial: "Original" => "Originalan"
// showProgressBar.aboveheader: "Above the header" => "Iznad zaglavlja"
// showProgressBar.belowheader: "Below the header" => "Ispod zaglavlja"
// pv.sum: "Sum" => "Suma"
// pv.count: "Count" => "Brojati"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Sadržava"
// searchMode.startsWith: "Starts with" => "Počinje s"
// panel.name: "A panel ID that is not visible to respondents." => "ID ploče koji nije vidljiv ispitanicima."
// panel.description: "Type a panel subtitle." => "Upišite podnaslov ploče."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost ploče."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje ploče."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Odnosi se na sva pitanja unutar ovog panela. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Postavlja mjesto poruke o pogrešci u odnosu na sva pitanja unutar ploče. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Zadržava izvorni redoslijed pitanja ili ih randomizira. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika."
// panel.page: "Repositions the panel to the end of a selected page." => "Premješta ploču na kraj odabrane stranice."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Dodaje razmak ili marginu između sadržaja ploče i lijevog obruba okvira ploče."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Poništite odabir za prikaz ploče u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je ploča prvi element u obrascu."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Odaberite između: \"Prošireno\" - ploča je prikazana u cijelosti i može se sažeti; \"Sažeto\" - ploča prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - ploča je prikazana u cijelosti i ne može se sažeti."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja širinu ploče proporcionalno ostalim elementima istraživanja u istoj liniji. Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "ID ploče koji nije vidljiv ispitanicima."
// paneldynamic.description: "Type a panel subtitle." => "Upišite podnaslov ploče."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost ploče."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje ploče."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Odnosi se na sva pitanja unutar ovog panela. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Postavlja mjesto poruke o pogrešci u odnosu na sva pitanja unutar ploče. Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Premješta ploču na kraj odabrane stranice."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Dodaje razmak ili marginu između sadržaja ploče i lijevog obruba okvira ploče."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Poništite odabir za prikaz ploče u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je ploča prvi element u obrascu."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Odaberite između: \"Prošireno\" - ploča je prikazana u cijelosti i može se sažeti; \"Sažeto\" - ploča prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - ploča je prikazana u cijelosti i ne može se sažeti."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja širinu ploče proporcionalno ostalim elementima istraživanja u istoj liniji. Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Upišite predložak za dinamičke naslove ploča. Koristite {panelIndex} za opći položaj panela i {visiblePanelIndex} za njegov redoslijed među vidljivim pločama. Umetnite ova rezervirana mjesta u uzorak da biste dodali automatsko numeriranje."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Upišite predložak za naslove kartica. Koristite {panelIndex} za opći položaj panela i {visiblePanelIndex} za njegov redoslijed među vidljivim pločama. Umetnite ova rezervirana mjesta u uzorak da biste dodali automatsko numeriranje."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Ova postavka omogućuje kontrolu vidljivosti pojedinih ploča unutar dinamičke ploče. Koristite rezervirano mjesto '{panel}' za referenciranje trenutne ploče u izrazu."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Ovu postavku automatski nasljeđuju sva pitanja unutar ove ploče. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "Opcija \"Naslijedi\" primjenjuje postavku na razini stranice (ako je postavljena) ili na razini upitnika (\"Pod naslovom ploče\" prema zadanim postavkama)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Definira položaj novododane ploče. Prema zadanim postavkama na kraj se dodaju nove ploče. Odaberite \"Dalje\" da biste umetnuli novu ploču nakon trenutne."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Duplicira odgovore s posljednje ploče i dodjeljuje ih sljedećoj dodanoj dinamičkoj ploči."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Pogledajte naziv pitanja kako biste od korisnika zahtijevali da pruži jedinstven odgovor za ovo pitanje na svakoj ploči."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Ova postavka omogućuje dodjeljivanje zadane vrijednosti odgovora na temelju izraza. Izraz može uključivati osnovne izračune - '{q1_id} + {q2_id}', Booleove izraze, kao što su '{age} > 60', i funkcije: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd. Vrijednost određena ovim izrazom služi kao početna zadana vrijednost koja se može nadjačati ručnim unosom ispitanika."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje kada se unos ispitanika vraća na vrijednost na temelju \"Zadani izraz vrijednosti\" ili \"Postavi izraz vrijednosti\" ili na vrijednost \"Zadani odgovor\" (ako je postavljena)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje kada pokrenuti \"Postavi izraz vrijednosti\" i dinamički dodijelite dobivenu vrijednost kao odgovor."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Navedite izraz koji definira vrijednost koju treba postaviti kada se ispune uvjeti u pravilu \"Postavi vrijednost ako\". Izraz može uključivati osnovne izračune - '{q1_id} + {q2_id}', Booleove izraze, kao što su '{age} > 60', i funkcije: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd. Vrijednost određena ovim izrazom može se nadjačati ručnim unosom ispitanika."
// question.name: "A question ID that is not visible to respondents." => "ID pitanja koji nije vidljiv ispitanicima."
// question.description: "Type a question subtitle." => "Upišite podnaslov pitanja."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost pitanja."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje za pitanje."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava napredovanje ili podnošenje upitnika, osim ako pitanje ne dobije odgovor."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Poništite odabir za prikaz pitanja u jednom retku s prethodnim pitanjem ili pločom. Postavka se ne primjenjuje ako je pitanje prvi element u obrascu."
// question.page: "Repositions the question to the end of a selected page." => "Premješta pitanje na kraj odabrane stranice."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Odaberite između: \"Prošireno\" - okvir pitanja prikazuje se u cijelosti i može se sažeti; \"Sažeto\" - okvir pitanja prikazuje samo naslov i opis i može se proširiti; \"Zaključano\" - okvir s pitanjima prikazuje se u cijelosti i ne može se sažeti."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Nadjačava pravila poravnanja naslova definirana na razini ploče, stranice ili upitnika. Opcija \"Naslijedi\" primjenjuje sve postavke više razine (ako su postavljene) ili postavku na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Pod naslovom pitanja\" prema zadanim postavkama)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Dodaje razmak ili marginu između sadržaja pitanja i lijevog obruba okvira pitanja."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja širinu pitanja proporcionalno drugim elementima upitnika u istom retku. Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Pomoću ikone čarobnog štapića postavite pravilo provjere valjanosti za pitanje."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Odaberite između: \"Na izgubljenom fokusu\" - vrijednost se ažurira kada polje za unos izgubi fokus; \"Tijekom tipkanja\" - vrijednost se ažurira u stvarnom vremenu, jer korisnici tipkaju. Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Pri izgubljenom fokusu\" prema zadanim postavkama)."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Bilo koju web-uslugu možete koristiti kao izvor podataka za pitanja s višestrukim izborom odgovora. Da biste popunili vrijednosti izbora, unesite URL usluge koja pruža podatke."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Operacija usporedbe koja se koristi za filtriranje padajućeg popisa."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Postavlja širinu prikazanog područja potpisa i rezultirajuću sliku."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Postavlja visinu prikazanog područja potpisa i rezultirajuću sliku."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Odaberite želite li da područje potpisa ispuni sav raspoloživi prostor unutar okvira pitanja uz zadržavanje zadanog omjera slike 3:2. Kada su postavljene prilagođene vrijednosti širine i visine, postavka će zadržati omjer slike tih dimenzija."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Podešava visinu slike u rezultatima upitnika."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Podešava širinu slike u rezultatima upitnika."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Nadjačava vrijednosti minimalne i maksimalne visine."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Nadjačava vrijednosti minimalne i maksimalne širine."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Vrijednost\" služi kao ID stavke koji se koristi u uvjetnim pravilima; \"Tekst\" se prikazuje ispitanicima."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Ova postavka samo mijenja veličinu polja unosa i ne utječe na širinu okvira pitanja. Da biste ograničili prihvaćenu duljinu unosa, idite na <b>Provjera valjanosti → Maksimalno ograničenje znaka</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Postavlja broj prikazanih redaka u polju za unos. Ako ulaz zauzima više redaka, pojavit će se klizač."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Odaberite između: \"Može se uređivati\" - omogućuje ispitanicima da ispune vašu anketu; \"Samo za čitanje\" - onemogućuje uređivanje obrazaca."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "ID stupca koji nije vidljiv ispitanicima."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Kada je omogućen stupac, ispitanik mora dati jedinstven odgovor za svako pitanje unutar ovog stupca."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Postavlja broj prikazanih redaka u polju za unos. Ako ulaz zauzima više redaka, pojavit će se klizač."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost stupca."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje stupca."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Kada je odabrano, stvara pojedinačni stupac za svaku mogućnost izbora."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Odaberite između: \"Statika\" - postavlja fiksnu širinu; \"Responsive\" - čini da anketa zauzima punu širinu zaslona; \"Auto\" - primjenjuje se bilo koji od dva ovisno o korištenim vrstama pitanja."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Zalijepite slikovnu vezu (bez ograničenja veličine) ili kliknite ikonu mape da biste pregledali datoteku s računala (do 64 KB)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Postavlja širinu logotipa u CSS jedinicama (px, %, in, pt itd.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Postavlja visinu logotipa u CSS jedinicama (px, %, in, pt itd.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Odaberite između: \"Nema\" - slika zadržava svoju izvornu veličinu; \"Sadrži\" - slika se mijenja kako bi stala uz zadržavanje omjera slike; \"Poklopac\" - slika ispunjava cijelu kutiju zadržavajući omjer slike; \"Ispuna\" - slika se rasteže kako bi ispunila kutiju bez zadržavanja omjera slike."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Postavlja vidljivost i mjesto navigacijskih gumba na stranici."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Postavlja vidljivost i mjesto trake napretka. Vrijednost \"Automatski\" prikazuje traku napretka iznad ili ispod zaglavlja upitnika."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Omogućite stranicu pretpregleda samo sa svim ili odgovorenim pitanjima."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Odnosi se na sva pitanja unutar ankete. Ova postavka može se nadjačati pravilima poravnanja naslova na nižim razinama: ploča, stranica ili pitanje. Postavka niže razine nadjačat će one na višoj razini."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Simbol ili niz simbola koji označavaju da je potreban odgovor."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Unesite broj ili slovo s kojim želite započeti numeriranje."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Odaberite želite li da prvo polje za unos na svakoj stranici bude spremno za unos teksta."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Zadržava izvorni redoslijed pitanja ili ih randomizira. Efekt ove postavke vidljiv je samo na kartici Pretpregled."
// pehelp.maxTextLength: "For text entry questions only." => "Samo za pitanja o unosu teksta."
// pehelp.maxCommentLength: "For question comments only." => "Samo za komentare pitanja."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Odaberite želite li da komentari pitanja i pitanja dugog teksta automatski rastu u visinu na temelju unesene duljine teksta."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Samo za komentare pitanja i pitanja dugog teksta."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Prilagođene varijable služe kao srednje ili pomoćne varijable koje se koriste u izračunima obrazaca. Oni uzimaju unose ispitanika kao izvorne vrijednosti. Svaka prilagođena varijabla ima jedinstveni naziv i izraz na kojem se temelji."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Odaberite želite li spremiti izračunatu vrijednost izraza zajedno s rezultatima upitnika."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Okidač je događaj ili uvjet koji se temelji na izrazu. Nakon što se izraz procijeni kao \"istinit\", okidač pokreće radnju. Takva radnja može po želji imati ciljano pitanje na koje utječe."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Odaberite želite li očistiti vrijednosti za pitanja skrivena uvjetnom logikom i kada to učiniti."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Odaberite između: \"Na izgubljenom fokusu\" - vrijednost se ažurira kada polje za unos izgubi fokus; \"Tijekom tipkanja\" - vrijednost se ažurira u stvarnom vremenu, jer korisnici tipkaju."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Lijeva vrijednost služi kao ID stupca koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Lijeva vrijednost služi kao ID retka koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Postavlja mjesto poruke o pogrešci u odnosu na ćeliju s unosom koji nije valjan. Mogućnost \"Naslijedi\" primjenjuje postavku iz svojstva \"Poravnanje poruke o pogrešci\"."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Kada je omogućeno svojstvo \"Spriječi duplicirane odgovore\", ispitanik koji pokuša poslati duplikat unosa primit će sljedeću poruku o pogrešci."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Omogućuje izračunavanje ukupnih vrijednosti na temelju izraza. Izraz može uključivati osnovne izračune ('{q1_id} + {q2_id}'), Booleove izraze ('{age} > 60') i funkcije ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Pokreće upit u kojem se traži potvrda brisanja retka."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Duplicira odgovore iz posljednjeg retka i dodjeljuje ih sljedećem dodanom dinamičkom retku."
// pehelp.description: "Type a subtitle." => "Upišite podnaslov."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Odaberite jezik za početak stvaranja upitnika. Da biste dodali prijevod, prijeđite na novi jezik i prevedite izvorni tekst ovdje ili na kartici Prijevodi."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Postavlja mjesto sekcije s detaljima u odnosu na redak. Odaberite između: \"Nema\" - ne dodaje se proširenje; \"Ispod reda\" - proširenje retka nalazi se ispod svakog retka matrice; \"Ispod retka prikaži samo proširenje jednog retka\" - proširenje se prikazuje samo ispod jednog retka, preostala proširenja retka su sažeta."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Odaberite između: \"Nema\" - slika zadržava svoju izvornu veličinu; \"Sadrži\" - slika se mijenja kako bi stala uz zadržavanje omjera slike; \"Poklopac\" - slika ispunjava cijelu kutiju zadržavajući omjer slike; \"Ispuna\" - slika se rasteže kako bi ispunila kutiju bez zadržavanja omjera slike."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Postupno povećava visinu polja unosa tijekom unosa podataka. Nadjačava postavku \"Visina polja unosa (u crtama)\"."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Ručica za promjenu veličine (ili držač) pojavljuje se u kutu i može se povući kako bi se promijenila veličina polja za unos."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na stranicu zahvale."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na sljedeću stranicu."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Vremenski interval u sekundama nakon kojeg anketa automatski prelazi na sljedeću stranicu."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost stranice."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje onemogućuje način samo za čitanje stranice."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje sprječava slanje upitnika, osim ako barem jedno ugniježđeno pitanje nema odgovor."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Odnosi se na sva pitanja unutar ove stranice. Ako želite nadjačati ovu postavku, definirajte pravila poravnanja naslova za pojedinačna pitanja ili ploče. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Postavlja mjesto poruke o pogrešci u odnosu na pitanje s unosom koji nije valjan. Odaberite između: \"Vrh\" - tekst pogreške nalazi se na vrhu okvira pitanja; \"Dno\" - tekst pogreške nalazi se na dnu okvira pitanja. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Vrh\" prema zadanim postavkama)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Zadržava izvorni redoslijed pitanja ili ih randomizira. Mogućnost \"Naslijedi\" primjenjuje postavku na razini upitnika (\"Original\" prema zadanim postavkama). Efekt ove postavke vidljiv je samo na kartici Pretpregled."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Postavlja vidljivost navigacijskih gumba na stranici. Opcija \"Naslijedi\" primjenjuje postavku na razini upitnika, koja je zadana kao \"Vidljivo\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Odaberite između: \"Zaključano\" - korisnici ne mogu proširiti ili sažeti ploče; \"Sažmite sve\" - sve ploče počinju u urušenom stanju; \"Proširite sve\" - sve ploče počinju u proširenom stanju; \"Prvo prošireno\" - samo je prva ploča u početku proširena."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Unesite naziv zajedničkog svojstva unutar polja objekata koje sadrži URL-ove slike ili videodatoteke koje želite prikazati na popisu izbora."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Lijeva vrijednost služi kao ID artikla koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost."
// pehelp.title: "Type a user-friendly title to display." => "Upišite naslov prilagođen korisniku za prikaz."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Osigurava da korisnici neće dovršiti anketu dok se datoteke ne prenesu."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "U vrstama pitanja s jednim i višestrukim odabirom svaka mogućnost izbora ima ID i vrijednost prikaza. Kada je odabrana, ova postavka prikazuje prikazanu vrijednost umjesto ID vrijednosti u HTML pitanjima te dinamičke naslove i opise elemenata upitnika."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Odaberite želite li očistiti vrijednosti pitanja skrivene uvjetnom logikom i kada to učiniti. Opcija \"Naslijedi\" prema zadanim postavkama primjenjuje postavku na razini upitnika (\"Nakon završetka ankete\")."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Odaberite između: \"Sve\" - kopira sve opcije izbora iz odabranog pitanja; \"Odabrano\" - dinamički kopira samo odabrane opcije izbora; \"Neodabrano\" - dinamički kopira samo neodabrane opcije izbora. Opcije \"Ništa\" i \"Ostalo\" kopiraju se prema zadanim postavkama ako su omogućene u izvornom pitanju."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Kada je odabrano, korisnici mogu uključiti dodatni unos u zaseban okvir za komentare."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Prikazuje svaku mogućnost posebnog izbora (\"Nema\", \"Ostalo\", \"Odaberi sve\") u novom retku, čak i kada koristite izgled s više stupaca."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Navedite mjesto unutar skupa podataka o usluzi na kojem se nalazi ciljno polje objekata. Ostavite prazno ako URL već pokazuje na polje."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Unesite jedinstveni naziv svojstva unutar polja objekata koje sadrži vrijednosti koje želite prikazati na popisu izbora."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Odaberite da biste servisu dopustili vraćanje praznog odgovora ili polja."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Pomoću ikone čarobnog štapića postavite uvjetno pravilo koje određuje vidljivost svih opcija izbora."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Lijeva vrijednost služi kao ID artikla koji se koristi u uvjetnim pravilima, a ispitanicima se prikazuje prava vrijednost."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Automatski\" odabire između načina rada \"Gumbi\" i \"Padajući izbornik\" na temelju dostupne širine. Kada širina nije dovoljna za prikaz gumba, pitanje prikazuje padajući izbornik."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Omogućuje povezivanje pitanja koja daju rezultate u različitim formatima. Kada su takva pitanja povezana pomoću identifikatora spoja, ovo zajedničko svojstvo pohranjuje odabrane vrijednosti pitanja."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Odaberite želite li ažurirati sadržaj padajućeg izbornika tako da odgovara upitu za pretraživanje koji korisnik upisuje u polje za unos."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Vrijednost koju treba uštedjeti u rezultatima ankete kada ispitanici daju pozitivan odgovor."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Vrijednost koju treba spremiti u rezultatima ankete kada ispitanici daju negativan odgovor."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Ne preporučuje se onemogućavanje ove mogućnosti jer nadjačava sliku pretpregleda i otežava korisniku razumijevanje jesu li datoteke prenesene."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Pokreće upit u kojem se traži potvrda brisanja datoteke."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Omogućite rangiranje samo odabranih odabira. Korisnici će povući odabrane stavke s popisa izbora kako bi ih naručili unutar područja rangiranja."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Unesite popis izbora koji će se predložiti ispitaniku tijekom unosa."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Postavka samo mijenja veličinu ulaznih polja i ne utječe na širinu okvira pitanja."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Postavlja dosljednu širinu za sve natpise stavki u pikselima"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Opcija \"Automatski\" automatski određuje odgovarajući način prikaza - Slika, Videozapis ili YouTube - na temelju navedenog izvornog URL-a."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Služi kao zamjena kada se slika ne može prikazati na korisnikovom uređaju i u svrhu pristupačnosti."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Definira boju odabranog emojija kada je vrsta ikone Ocjena postavljena na \"Smajlići\". Odaberite između: \"Zadano\" - odabrani emoji pojavljuje se u zadanoj boji ankete; \"Skala\" - odabrani emoji nasljeđuje boju od ljestvice ocjenjivanja."
// expression.name: "An expression ID that is not visible to respondents." => "ID izraza koji nije vidljiv ispitanicima."
// expression.description: "Type an expression subtitle." => "Upišite podnaslov izraza."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Izraz može uključivati osnovne izračune ('{q1_id} + {q2_id}'), uvjete ('{age} > 60') i funkcije ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()', itd.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Odaberite za spremanje vrijednosti mogućnosti \"Ostalo\" kao zasebnog svojstva u rezultatima upitnika."
// p.swapOrder: "Swap the order of Yes and No" => "Zamjena redoslijeda Da i Ne"
// p.itemTitleWidth: "Item label width (in px)" => "Širina natpisa stavke (u px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Tekst koji prikazuje jesu li odabrane sve mogućnosti"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Tekst rezerviranog mjesta za područje rangiranja"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Automatsko ispunjavanje upitnika"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Odaberite želite li da se anketa automatski dovrši nakon što ispitanik odgovori na sva pitanja."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Spremanje maskirane vrijednosti u rezultate upitnika"
// patternmask.pattern: "Value pattern" => "Uzorak vrijednosti"
// datetimemask.min: "Minimum value" => "Minimalna vrijednost"
// datetimemask.max: "Maximum value" => "Maksimalna vrijednost"
// numericmask.allowNegativeValues: "Allow negative values" => "Dopusti negativne vrijednosti"
// numericmask.thousandsSeparator: "Thousands separator" => "Razdjelnik tisućica"
// numericmask.decimalSeparator: "Decimal separator" => "Decimalni razdjelnik"
// numericmask.precision: "Value precision" => "Preciznost vrijednosti"
// numericmask.min: "Minimum value" => "Minimalna vrijednost"
// numericmask.max: "Maximum value" => "Maksimalna vrijednost"
// currencymask.prefix: "Currency prefix" => "Prefiks valute"
// currencymask.suffix: "Currency suffix" => "Sufiks valute"
// pe.maskType: "Input mask type" => "Vrsta maske za unos"
// maskTypes.patternmask: "Pattern" => "Uzorak"
// maskTypes.numericmask: "Numeric" => "Brojčani"
// maskTypes.datetimemask: "Date and Time" => "Datum i vrijeme"
// maskTypes.currencymask: "Currency" => "Valuta"
// tabs.mask: "Input Mask Settings" => "Postavke maske za unos"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Npr.: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Npr.: mm/dd/gggg"
// pe.currencyprefix_placeholder: "Ex.: $" => "Npr.: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Npr.: USD"
// pv.textWrapEnabled: "Wrap choices" => "Prelamanje izbora"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Dugi tekstovi u mogućnostima izbora automatski će generirati prijelome redaka kako bi stali unutar padajućeg izbornika. Poništite odabir ako želite da se tekstovi izrežu."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Odaberite želite li spremiti vrijednost pitanja s primijenjenom maskom u rezultatima upitnika."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Uzorak može sadržavati slovne dijelove niza i sljedeća rezervirana mjesta: '9' - za znamenku; \"a\" – za veliko ili malo slovo; '#' - za znamenku ili veliko ili malo slovo. Koristite obrnutu kosu crtu '\\' da biste izbjegli znak."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Uzorak može sadržavati znakove razdjelnika i sljedeća rezervirana mjesta: 'm' - za broj mjeseca; 'mm' - za broj mjeseca, s početnom nulom za jednoznamenkaste vrijednosti; 'd' - za dan u mjesecu; \"dd\" – za dan u mjesecu, s početnom nulom za jednoznamenkaste vrijednosti; \"gg\" - za posljednje dvije znamenke godine; 'gggg' - za četveroznamenkastu godinu."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Simbol koji se koristi za odvajanje djelomičnog dijela od cijelog broja prikazanog broja."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Simbol koji se koristi za odvajanje znamenki velikog broja u grupe od tri."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Ograničava broj znamenki koje treba zadržati nakon decimalnog zareza za prikazani broj."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Jedan ili više simbola koji će se prikazati prije vrijednosti."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Jedan ili više simbola koji će se prikazati nakon vrijednosti."
// ed.translationSource: "Source: " => "Izvor: "
// ed.translationTarget: "Target: " => "Cilj: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Stranica je prazna. Povucite element iz alatnog okvira ili kliknite donji gumb."
// maskTypes.none: "None" => "Nijedan"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Učini redak vidljivim ako"
// itemvalue@rows.enableIf: "Make the row editable if" => "Učinite redak mogućim za uređivanje ako"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Tekst rezerviranog mjesta u načinu samo za čitanje ili pretpregledu"
// pe.textWrapEnabled: "Wrap choices" => "Prelamanje izbora"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "Opcija \"Automatski\" automatski određuje odgovarajući način prikaza - Slika, Videozapis ili YouTube - na temelju navedenog izvornog URL-a."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Odaberite između \"Slika\" i \"Videozapis\" da biste postavili način sadržaja birača medija. Ako je odabrana opcija \"Slika\", provjerite jesu li sve ponuđene opcije slikovne datoteke u sljedećim formatima: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Slično tome, ako je odabran \"Video\", provjerite jesu li sve opcije izravne veze na video datoteke u sljedećim formatima: MP4, MOV, WMV, FLV, AVI, MKV. Napominjemo da veze na YouTube nisu podržane za opcije videozapisa."
// ed.selectFile: "Select a file" => "Odabir datoteke"
// ed.removeFile: "Remove the file" => "Uklanjanje datoteke"
// pe.searchMode: "Search Mode" => "Način pretraživanja"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Kliknite donji gumb \"Dodaj pitanje\" da biste započeli stvaranje obrasca."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Kliknite donji gumb \"Dodaj pitanje\" da biste na stranicu dodali novi element."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Kliknite donji gumb \"Dodaj pitanje\" da biste na ploču dodali novi element."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Kliknite donji gumb i odaberite sliku koju želite prenijeti"
// coloralpha.opacity: "Opacity" => "Neprozirnost"
// font.family: "Font family" => "Obitelj fontova"
// font.color: "Color" => "Boja"
// font.placeholderColor: "Placeholder color" => "Boja rezerviranog mjesta"
// font.size: "Size" => "Veličina"
// theme.themeName: "Theme" => "Tema"
// theme.isPanelless: "Question appearance" => "Izgled pitanja"
// theme.editorPanel: "Background and corner radius" => "Polumjer pozadine i kuta"
// theme.questionPanel: "Background and corner radius" => "Polumjer pozadine i kuta"
// theme.primaryColor: "Accent color" => "Boja isticanja"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Neprozirnost pozadine ploče"
// theme.questionBackgroundTransparency: "Question background opacity" => "Pitanje neprozirnosti pozadine"
// theme.fontSize: "Font size" => "Veličina fonta"
// theme.scale: "Scale" => "Vaga"
// theme.cornerRadius: "Corner radius" => "Kutni radijus"
// theme.pageTitle: "Title font" => "Font naslova"
// theme.pageDescription: "Description font" => "Font opisa"
// theme.questionTitle: "Title font" => "Font naslova"
// theme.questionDescription: "Description font" => "Font opisa"
// theme.editorFont: "Font" => "Krstionica"
// theme.backgroundOpacity: "Opacity" => "Neprozirnost"
// theme.--sjs-font-family: "Font family" => "Obitelj fontova"
// theme.--sjs-general-backcolor-dim: "Background color" => "Boja pozadine"
// theme.--sjs-primary-backcolor: "Accent background" => "Pozadina isticanja"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Isticanje u prvom planu"
// theme.--sjs-shadow-small: "Shadow effects" => "Efekti sjene"
// theme.--sjs-shadow-inner: "Shadow effects" => "Efekti sjene"
// theme.--sjs-border-default: "Colors" => "Boje"
// header@header.headerView: "View" => "Pogled"
// header@header.logoPosition: "Logo position" => "Položaj logotipa"
// header@header.surveyTitle: "Survey title font" => "Font naslova upitnika"
// header@header.surveyDescription: "Survey description font" => "Font opisa upitnika"
// header@header.headerTitle: "Survey title font" => "Font naslova upitnika"
// header@header.headerDescription: "Survey description font" => "Font opisa upitnika"
// header@header.inheritWidthFrom: "Content area width" => "Širina područja sadržaja"
// header@header.textAreaWidth: "Text width" => "Širina teksta"
// header@header.backgroundColorSwitch: "Background color" => "Boja pozadine"
// header@header.backgroundImage: "Background image" => "Pozadinska slika"
// header@header.backgroundImageOpacity: "Opacity" => "Neprozirnost"
// header@header.overlapEnabled: "Overlap" => "Preklapanje"
// header@header.logoPositionX: "Logo position" => "Položaj logotipa"
// header@header.titlePositionX: "Title position" => "Položaj naslova"
// header@header.descriptionPositionX: "Description position" => "Položaj opisa"
// weight.400: "Regular" => "Redovan"
// weight.600: "Heavy" => "Težak"
// weight.700: "Semi-bold" => "Polupodebljano"
// weight.800: "Bold" => "Odvažan"
// backgroundImageFit.auto: "Auto" => "Automobil"
// backgroundImageFit.cover: "Cover" => "Pokriti"
// backgroundImageFit.contain: "Contain" => "Sadržavati"
// backgroundImageFit.fill: "Stretch" => "Parcela"
// backgroundImageFit.tile: "Tile" => "Crijep"
// backgroundImageAttachment.fixed: "Fixed" => "Fiksirane"
// backgroundImageAttachment.scroll: "Scroll" => "Svitak"
// headerView.basic: "Basic" => "Osnovni"
// headerView.advanced: "Advanced" => "Napredan"
// inheritWidthFrom.survey: "Same as survey" => "Isto kao i anketa"
// inheritWidthFrom.container: "Fit to container" => "Prilagodi spremniku"
// backgroundColorSwitch.none: "None" => "Nijedan"
// backgroundColorSwitch.accentColor: "Accent color" => "Boja isticanja"
// backgroundColorSwitch.custom: "Custom" => "Običaj"
// colorPalette.light: "Light" => "Svjetlo"
// colorPalette.dark: "Dark" => "Mračan"
// isPanelless.false: "Default" => "Propust"
// isPanelless.true: "Without Panels" => "Bez panela"
// theme.cornerRadius: "Corner radius" => "Kutni radijus"
// theme.fontFamily: "Font family" => "Obitelj fontova"
// theme.fontWeightRegular: "Regular" => "Redovan"
// theme.fontWeightHeavy: "Heavy" => "Težak"
// theme.fontWeightSemiBold: "Semi-bold" => "Polupodebljano"
// theme.fontWeightBold: "Bold" => "Odvažan"
// theme.color: "Color" => "Boja"
// theme.placeholderColor: "Placeholder color" => "Boja rezerviranog mjesta"
// theme.size: "Size" => "Veličina"
// theme.opacity: "Opacity" => "Neprozirnost"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Upišite za pretraživanje..."
// ed.toolboxNoResultsFound: "No results found" => "Nisu pronađeni rezultati"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Rezervirano mjesto naslova tabulatora"
// theme.--sjs-special-red: "Error messages" => "Poruke o pogreškama"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Rezervni tekst za naslove kartica koji se primjenjuje kada uzorak naslova kartice ne daje značajnu vrijednost."
// theme.fontColor: "Font color" => "Boja fonta"
// theme.backgroundColor: "Background color" => "Boja pozadine"
// pe.questionTitleWidth: "Question title width" => "Širina naslova pitanja"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Odabir datoteke ili lijepljenje veze na datoteku..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Npr.: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja dosljednu širinu za naslove pitanja kada su poravnati lijevo od okvira pitanja. Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja dosljednu širinu za naslove pitanja kada su poravnati lijevo od okvira pitanja. Prihvaća CSS vrijednosti (px, %, in, pt itd.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Visina područja komentara (u recima)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Postavlja broj prikazanih redaka u tekstnim područjima za komentare pitanja. U ulazu zauzima više redaka pojavljuje se klizač."
// pe.enabled: "Enabled" => "Omogućen"
// pe.disabled: "Disabled" => "Onemogućen"
// pe.inherit: "Inherit" => "Naslijediti"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Provjera valjanosti praznih polja pri izgubljenom fokusu"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Npr.: 30%"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Primjer: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Omogućite ovu mogućnost da biste pokrenuli provjeru valjanosti kada se korisnik usredotoči na prazno polje za unos, a zatim ga napusti bez ikakvih promjena."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Ova se postavka primjenjuje samo na pitanja izvan ploče."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Postavlja dodatnu boju koja ističe ključne elemente upitnika."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Prilagođava prozirnost panela i okvira s pitanjima u odnosu na pozadinu ankete."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Prilagođava prozirnost ulaznih elemenata u odnosu na pozadinu upitnika."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Postavlja polumjer kuta za sve pravokutne elemente. Omogućite napredni način rada ako želite postaviti pojedinačne vrijednosti radijusa kuta za ulazne elemente ili ploče i okvire s pitanjima."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Postavlja glavnu boju pozadine upitnika."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Opcija \"Isto kao spremnik\" automatski prilagođava širinu područja sadržaja zaglavlja kako bi se uklopila u HTML element u koji je upitnik postavljen."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Širina područja zaglavlja koje sadrži naslov i opis upitnika, mjerena u pikselima."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Prihvaća vrijednosti %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Prihvaća vrijednosti px."
// p.effectiveColSpan: "Column span" => "Raspon stupaca"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Isto kao i anketa"
// progressBarInheritWidthFrom.container: "Same as container" => "Isto kao spremnik"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Prikazuje pretpreglede minijatura za prenesene datoteke kada je to moguće. Poništite odabir želite li umjesto toga prikazati ikone datoteka."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Opcija \"Isto kao spremnik\" automatski prilagođava širinu područja trake napretka kako bi se uklopila u HTML element u koji je upitnik postavljen."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Širina područja trake napretka"
// maskType.none: "None" => "Nijedan"
// maskType.pattern: "Pattern" => "Uzorak"
// maskType.numeric: "Numeric" => "Brojčani"
// maskType.datetime: "Date and Time" => "Datum i vrijeme"
// maskType.currency: "Currency" => "Valuta"

// inputTextAlignment.auto: "Auto" => "Automobil"
// inputTextAlignment.left: "Left" => "Lijevo"
// inputTextAlignment.right: "Right" => "Desno"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Odaberite način poravnanja ulazne vrijednosti unutar polja. Zadana postavka \"Automatski\" poravnava ulaznu vrijednost udesno ako se primjenjuje valutno ili numeričko maskiranje i ulijevo ako nije."
// p.inputTextAlignment: "Input value alignment" => "Usklađivanje ulaznih vrijednosti"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Prikaz trake napretka"
// paneldynamic.showProgressBar: "Show the progress bar" => "Prikaz trake napretka"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Poravnanje trake napretka"
// pv.carousel: "Carousel" => "Vrtuljak"
// progressBarLocation.top: "Top" => "Vrh"
// progressBarLocation.bottom: "Bottom" => "Dno"
// progressBarLocation.topBottom: "Top and bottom" => "Vrh i dno"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Raspoređuje opcije izbora u rasporedu s više stupaca. Kada je postavljena na 0, opcije se prikazuju u jednom retku. Kada je postavljena na -1, stvarna vrijednost nasljeđuje se iz svojstva \"Broj ugniježđenih stupaca\" nadređene matrice."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube veze nisu podržane."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Počnite konfigurirati svoj obrazac"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Kliknite bilo koju ikonu kategorije da biste istražili postavke upitnika. Dodatne postavke postat će dostupne nakon što dodate element upitnika na površinu dizajna."
// pe.caseInsensitive: "Case insensitive" => "Bez osjetljivosti na velika i mala slova"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Odaberite ako se velika i mala slova u regularnom izrazu moraju tretirati kao ekvivalentna."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Obrazac je prazan"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Obrazac je prazan"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Povucite element iz okvira s alatima ili kliknite gumb ispod."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Povucite element iz okvira s alatima ili kliknite gumb ispod."
// ed.previewPlaceholderTitle: "No preview" => "Nema pregleda"
// ed.previewPlaceholderTitleMobile: "No preview" => "Nema pregleda"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Anketa ne sadrži vidljive elemente."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Anketa ne sadrži vidljive elemente."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Nema obaveza za prevođenje"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Nema obaveza za prevođenje"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Dodajte elemente u obrazac ili promijenite filtar nizova na alatnoj traci."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Dodajte elemente u obrazac ili promijenite filtar nizova na alatnoj traci."
// lg.logicPlaceholderTitle: "No logical rules" => "Nema logičkih pravila"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Nema logičkih pravila"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Stvorite pravilo za prilagodbu tijeka upitnika."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Stvorite pravilo za prilagodbu tijeka upitnika."
// pe.showTimer: "Use a timer" => "Koristite mjerač vremena"
// theme.advancedMode: "Advanced mode" => "Napredni način rada"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Postavlja lokaciju mjerača vremena na stranici."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Kada je postavljena na 0, visina se automatski izračunava kako bi se prilagodio sadržaju zaglavlja."
// p.mobileHeight: "Height on smartphones" => "Visina na pametnim telefonima"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Kada je omogućeno, vrh upitnika prekriva dno zaglavlja."
// ed.creatorSettingTitle: "Creator Settings" => "Postavke autora"
// tabs.accentColors: "Accent colors" => "Naglašavajuće boje"
// tabs.scaling: "Scaling" => "Skaliranje"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Dodjeljuje brojeve pitanjima ugniježđenim unutar ove ploče."
// creatortheme.--sjs-special-background: "Surface background" => "Pozadina površine"
// creatortheme.--sjs-primary-background-500: "Primary" => "Glavni"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Sekundaran"
// creatortheme.surfaceScale: "Surface" => "Površina"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Korisničko sučelje"
// creatortheme.fontScale: "Font" => "Krstionica"
// names.sc2020: "Survey Creator 2020" => "Kreator ankete 2020"
// names.default-light: "Light" => "Svjetlo"
// names.default-dark: "Dark" => "Mračan"
// names.default-contrast: "Contrast" => "Razlika"
// panel.showNumber: "Number this panel" => "Numerirajte ovu ploču"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Odaberite želite li da se upitnik automatski prijeđe na sljedeću stranicu nakon što ispitanik odgovori na sva pitanja na trenutnoj stranici. Ova se značajka neće primijeniti ako je posljednje pitanje na stranici otvoreno ili dopušta više odgovora."
// autocomplete.name: "Full Name" => "Puno ime i prezime"
// autocomplete.honorific-prefix: "Prefix" => "Prefiks"
// autocomplete.given-name: "First Name" => "Ime"
// autocomplete.additional-name: "Middle Name" => "Srednje ime"
// autocomplete.family-name: "Last Name" => "Prezime"
// autocomplete.honorific-suffix: "Suffix" => "Sufiks"
// autocomplete.nickname: "Nickname" => "Nadimak"
// autocomplete.organization-title: "Job Title" => "Naziv radnog mjesta"
// autocomplete.username: "User Name" => "Korisničko ime"
// autocomplete.new-password: "New Password" => "Nova lozinka"
// autocomplete.current-password: "Current Password" => "Trenutna lozinka"
// autocomplete.organization: "Organization Name" => "Naziv tvrtke ili ustanove"
// autocomplete.street-address: "Full Street Address" => "Puna adresa"
// autocomplete.address-line1: "Address Line 1" => "Redak adrese 1"
// autocomplete.address-line2: "Address Line 2" => "Redak adrese 2"
// autocomplete.address-line3: "Address Line 3" => "Redak adrese 3"
// autocomplete.address-level4: "Level 4 Address" => "Adresa razine 4"
// autocomplete.address-level3: "Level 3 Address" => "Adresa razine 3"
// autocomplete.address-level2: "Level 2 Address" => "Adresa razine 2"
// autocomplete.address-level1: "Level 1 Address" => "Adresa razine 1"
// autocomplete.country: "Country Code" => "Pozivni broj zemlje"
// autocomplete.country-name: "Country Name" => "Naziv zemlje"
// autocomplete.postal-code: "Postal Code" => "Poštanski broj"
// autocomplete.cc-name: "Cardholder Name" => "Ime vlasnika kartice"
// autocomplete.cc-given-name: "Cardholder First Name" => "Ime vlasnika kartice"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Srednje ime vlasnika kartice"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Prezime vlasnika kartice"
// autocomplete.cc-number: "Credit Card Number" => "Broj kreditne kartice"
// autocomplete.cc-exp: "Expiration Date" => "Isteka"
// autocomplete.cc-exp-month: "Expiration Month" => "Mjesec isteka"
// autocomplete.cc-exp-year: "Expiration Year" => "Godina isteka"
// autocomplete.cc-csc: "Card Security Code" => "Sigurnosni kod kartice"
// autocomplete.cc-type: "Credit Card Type" => "Vrsta kreditne kartice"
// autocomplete.transaction-currency: "Transaction Currency" => "Valuta transakcije"
// autocomplete.transaction-amount: "Transaction Amount" => "Iznos transakcije"
// autocomplete.language: "Preferred Language" => "Preferirani jezik"
// autocomplete.bday: "Birthday" => "Rođendan"
// autocomplete.bday-day: "Birthday Day" => "Rođendanski dan"
// autocomplete.bday-month: "Birthday Month" => "Rođendanski mjesec"
// autocomplete.bday-year: "Birthday Year" => "Godina rođenja"
// autocomplete.sex: "Gender" => "Spol"
// autocomplete.url: "Website URL" => "URL web stranice"
// autocomplete.photo: "Profile Photo" => "Profilna fotografija"
// autocomplete.tel: "Telephone Number" => "Telefonski broj"
// autocomplete.tel-country-code: "Country Code for Phone" => "Pozivni broj za telefon"
// autocomplete.tel-national: "National Telephone Number" => "Nacionalni telefonski broj"
// autocomplete.tel-area-code: "Area Code" => "Pozivni broj"
// autocomplete.tel-local: "Local Phone Number" => "Lokalni telefonski broj"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Prefiks lokalnog telefona"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Sufiks lokalnog telefona"
// autocomplete.tel-extension: "Phone Extension" => "Proširenje telefona"
// autocomplete.email: "Email Address" => "Adresa e-pošte"
// autocomplete.impp: "Instant Messaging Protocol" => "Protokol za razmjenu izravnih poruka"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Zaključavanje stanja proširenja/sažimanja za pitanja"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Još nemate stranice"
// pe.addNew@pages: "Add new page" => "Dodaj novu stranicu"
// ed.zoomInTooltip: "Zoom In" => "Zumiranje"
// ed.zoomOutTooltip: "Zoom Out" => "Smanji"
// tabs.surfaceBackground: "Surface Background" => "Pozadina površine"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Koristite odgovore iz posljednjeg unosa kao standardne"
// colors.gray: "Gray" => "Siv"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Poravnanje navigacijskih gumba"
// pv.allQuestions: "Show all questions" => "Prikaži sva pitanja"
// pv.answeredQuestions: "Show answered questions only" => "Prikaži samo odgovorena pitanja"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Postavlja mjesto navigacijskih gumba na stranici."
// pe.size: "Input field width (in characters)" => "Širina polja za unos (u znakovima)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Koristite vrijednosti iz sljedećeg stupca matrice ili pitanja panela kao ID-ove izbora"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Koristite vrijednosti iz sljedećeg stupca matrice ili pitanja na ploči kao tekstove izbora"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "U vrstama pitanja s jednim i višestrukim odabirom svaka opcija izbora ima ID i vrijednost prikaza. Ova postavka određuje koji stupac matrice ili pitanje na ploči treba dati ID-ove."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "U vrstama pitanja s jednim i višestrukim odabirom svaka opcija izbora ima ID i vrijednost prikaza. Ova postavka određuje koji stupac matrice ili pitanje na ploči treba pružiti tekstove za prikaz."
// pe.progressBarLocation: "Progress bar alignment" => "Poravnanje trake napretka"
// progressBarLocation.topbottom: "Top and bottom" => "Vrh i dno"
// progressBarLocation.aboveheader: "Above the header" => "Iznad zaglavlja"
// progressBarLocation.belowheader: "Below the header" => "Ispod zaglavlja"
// progressBarLocation.off: "Hidden" => "Skriven"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Postavlja lokaciju trake napretka. Vrijednost \"Automatski\" prikazuje traku napretka iznad ili ispod zaglavlja ankete."
// survey.readOnly: "Make the survey read-only" => "Neka anketa bude samo za čitanje"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Odaberite želite li ispitanicima onemogućiti ispunjavanje upitnika."
// paneldynamic.showNumber: "Number the panel" => "Numerirajte ploču"
// question.showNumber: "Number this question" => "Brojite ovo pitanje"
// pe.previewMode: "Preview mode" => "Način pregleda"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Omogućivanje izgleda rešetke"
// pe.maskSettings: "Mask settings" => "Postavke maske"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Poravnanje poruke o pogrešci proširenja retka"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Postavlja mjesto poruka o pogreškama za pitanja ugniježđena u detaljnim odjeljcima. Mogućnost \"Naslijedi\" primjenjuje postavku iz svojstva \"Poravnanje poruke o pogrešci\"."
// pe.gridLayoutColumns: "Grid layout columns" => "Stupci rasporeda rešetke"
// pe.startPageTitlePlaceholder: "Start Page" => "Početna stranica"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Efektivna širina, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Širina naslova pitanja, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Još nemate stupce izgleda"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Određuje koliko stupaca ova ploča obuhvaća unutar rasporeda rešetke."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ova tablica omogućuje konfiguriranje svakog stupca rešetke unutar ploče. Automatski postavlja postotak širine za svaki stupac na temelju maksimalnog broja elemenata u redu. Da biste prilagodili izgled rešetke, ručno prilagodite te vrijednosti i definirajte širinu naslova za sva pitanja u svakom stupcu."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creator omogućuje vam ručno podešavanje ugrađenih širina elemenata obrasca za kontrolu izgleda. Ako to ne daje željeni ishod, možete omogućiti raspored rešetke, čije strukture tvore elemente pomoću sustava temeljenog na stupcima. Da biste konfigurirali stupce izgleda, odaberite stranicu ili ploču i upotrijebite tablicu \"Postavke pitanja\" → \"Stupci rešetke\". Da biste prilagodili koliko stupaca obuhvaća pitanje, odaberite ga i postavite željenu vrijednost u polju \"Izgled\" → \"Raspon stupaca\"."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Određuje koliko stupaca ovo pitanje obuhvaća unutar rasporeda rešetke."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Ova tablica omogućuje konfiguriranje svakog stupca rešetke na stranici. Automatski postavlja postotak širine za svaki stupac na temelju maksimalnog broja elemenata u redu. Da biste prilagodili izgled rešetke, ručno prilagodite te vrijednosti i definirajte širinu naslova za sva pitanja u svakom stupcu."

// ed.expandTooltip: "Expand" => "Proširiti"
// ed.collapseTooltip: "Collapse" => "Kolaps"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Primjer: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja dosljednu širinu za sve oznake stavki. Prihvaća CSS vrijednosti (px, %, in, pt, itd.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zumiranje na 100%"
// ed.addLanguageTooltip: "Add Language" => "Dodavanje jezika"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Postavlja broj prikazanih redaka u tekstnim područjima za komentare pitanja. Ako ulaz zauzima više linija, pojavit će se klizač."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Zadana vrijednost prikaza za dinamičke tekstove"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Vrijednost koja se prikazuje u HTML pitanjima te u dinamičkim naslovima i opisima elemenata upitnika kada je vrijednost pitanja prazna."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekurzivno numeriranje"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Širina naslova pitanja"
// pe.allowCustomChoices: "Allow custom choices" => "Dopusti prilagođene izbore"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Postavlja dosljednu širinu za naslove pitanja kada su poravnati s lijeve strane okvira za pitanja. Prihvaća CSS vrijednosti (px, %, in, pt, itd.)."
// page.name: "A page ID that is not visible to respondents." => "ID stranice koji nije vidljiv ispitanicima."
// page.description: "Type a page subtitle." => "Upišite podnaslov stranice."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Opis prikazan na navigacijskom gumbu na traci napretka ili kazalu sadržaja. Ako ovo polje ostavite prazno, navigacijski gumb koristit će naslov stranice ili naziv stranice. Da biste omogućili traku napretka ili sadržaj, idite na \"Anketa\" → \"Navigacija\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Odaberite da biste ispitanicima omogućili dodavanje vlastitih izbora ako željena opcija nije dostupna na padajućem izborniku. Prilagođeni odabiri bit će pohranjeni samo privremeno za vrijeme trajanja trenutne sesije preglednika."