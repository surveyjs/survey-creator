import { editorLocalization, defaultStrings } from "survey-creator-core";

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
    testSurvey: "Ispitna anketa",
    themeSurvey: "Teme",
    defaultV2Theme: "Propust",
    modernTheme: "Moderan",
    defaultTheme: "Zadano (naslijeđeno)",
    testSurveyAgain: "Ponovno probna anketa",
    testSurveyWidth: "Širina ankete: ",
    navigateToMsg: "Morao si navigirati do:",
    logic: "Logika ankete",
    embedSurvey: "Ugrađena anketa",
    translation: "Prijevod",
    saveSurvey: "Spremi anketu",
    saveSurveyTooltip: "Spremi anketu",
    saveTheme: "Spremi temu",
    saveThemeTooltip: "Spremi temu",
    designer: "Dizajner ankete",
    jsonEditor: "JSON urednik",
    jsonHideErrors: "Sakrij pogreške",
    jsonShowErrors: "Pokaži pogreške",
    undo: "Poništiti",
    redo: "Ponoviti",
    undoTooltip: "Poništi posljednju promjenu",
    redoTooltip: "Preusmjeti promjenu",
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
    propertyGridFilteredTextPlaceholder: "Upišite za pretraživanje...",
    propertyGridNoResultsFound: "Nisu pronađeni rezultati",
    toolboxGeneralCategory: "Općenito",
    toolboxChoiceCategory: "Pitanja o izboru",
    toolboxTextCategory: "Pitanja o unosu teksta",
    toolboxContainersCategory: "Kontejnere",
    toolboxMatrixCategory: "Matrična pitanja",
    toolboxMiscCategory: "Ostalo",
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
    imagePlaceHolder: "Povucite i ispustite sliku ovdje ili kliknite donji gumb i odaberite sliku koju želite prenijeti",
    imageChooseImage: "Odabir slike",
    addNewTypeQuestion: "Dodaj {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "automobil",
    choices_Item: "Stavka ",
    lg: {
      addNewItem: "Dodaj novo pravilo",
      empty_tab: "Stvorite pravilo za prilagodbu tijeka upitnika.",
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
      question_resetValueText: "Vrati izvornu vrijednost za pitanje: {0}",
      question_setValueText: "Dodijeli vrijednost: {1} pitanje: {0}",
      column_visibilityText: "učiniti stupac {0} pitanja vidljivim {1}", //{0} column name, {1} question name
      column_enableText: "{1} omogućivanje stupca {0} pitanja", //{0} column name, {1} question name
      column_requireText: "Učinite stupac {0} pitanja {1} potrebnim", //{0} column name, {1} question name
      column_resetValueText: "Vrati izvornu vrijednost ćelije za stupac: {0}",
      column_setValueText: "Dodijeli vrijednost ćelije: {1} stupcu: {0}",
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
    expressionHelp: "Možete koristiti kovrčave nosače kako biste dobili pristup vrijednostima pitanja: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Funkcije možete koristiti kao: iif(), today(), age(), min(), max(), count(), avg() and others.",
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
    "addNew@choices": "Dodavanje izbora",
    expressionIsEmpty: "Izraz je prazan",
    value: "Vrijednost",
    text: "tekst",
    rowid: "ID redaka",
    imageLink: "Veza slike",
    columnEdit: "Uređivanje stupca: {0}",
    itemEdit: "Uređivanje stavke: {0}",
    url: "Url",
    path: "Put",
    valueName: "Naziv vrijednosti",
    choicesbyurl: {
      valueName: "Dohvaćanje vrijednosti iz sljedećeg JSON polja"
    },
    titleName: "Naziv naslova",
    imageLinkName: "Dohvaćanje URL-ova slika iz sljedećeg JSON polja",
    allowEmptyResponse: "Dopusti prazan odgovor",
    titlePlaceholder: "Ulazni naslov ovdje",
    surveyTitlePlaceholder: "Naslov ulazne ankete ovdje",
    pageTitlePlaceholder: "Naslov ulazne stranice ovdje",
    descriptionPlaceholder: "Unesite opis",
    surveyDescriptionPlaceholder: "Unesite opis ankete",
    pageDescriptionPlaceholder: "Unesite opis stranice",
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
    visible: "Je li vidljivo?",
    isRequired: "Je potrebno?",
    markRequired: "Označi kao obavezno",
    removeRequiredMark: "Uklanjanje potrebne oznake",
    isAllRowRequired: "Zahtijevati odgovor za sve redove",
    eachRowUnique: "Sprječavanje dvostrukih odgovora u recima",
    requiredErrorText: "Potreban tekst pogreške",
    startWithNewLine: "Počinje li s novom linijom?",
    rows: "Broj redaka",
    cols: "Broj stupaca",
    placeholder: "Držač ulaznog mjesta",
    showPreview: "Prikaz područja pretpregleda",
    storeDataAsText: "Pohranite sadržaj datoteke u rezultat JSON kao tekst",
    maxSize: "Maksimalna veličina datoteke u bytes",
    imageHeight: "Visina slike",
    imageWidth: "Širina slike",
    rowCount: "Broj redaka",
    columnLayout: "Raspored stupaca",
    transposeData: "Transponiranje redaka u stupce",
    addRowLocation: "Dodavanje lokacije gumba redaka",
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
    mode: "Način rada (samo uređivanje/čitanje)",
    clearInvisibleValues: "Jasne nevidljive vrijednosti",
    cookieName: "Naziv kolačića (onemogućiti anketu dva puta lokalno)",
    sendResultOnPageNext: "Pošaljite rezultate ankete na sljedeću stranicu",
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
    showPrevButton: "Prikagnite prethodni gumb (korisnik se može vratiti na prethodnu stranicu)",
    firstPageIsStarted: "Prva stranica u anketi je početna stranica.",
    showCompletedPage: "Prikagušite dovršenu stranicu na kraju (completedHtml)",
    goNextPageAutomatic: "Kada odgovarate na sva pitanja, idite automatski na sljedeću stranicu",
    showProgressBar: "Pokaži traku napretka",
    questionTitleLocation: "Lokacija naslova pitanja",
    requiredText: "Pitanje je zahtijevalo simbole",
    questionStartIndex: "Indeks pokretanja pitanja (1, 2 ili 'A', 'a')",
    showQuestionNumbers: "Prikazate brojeve pitanja",
    questionTitleTemplate: "Predložak naslova pitanja, zadano je: '{no}. {require} {title}'",
    questionErrorLocation: "Mjesto pogreške u pitanju",
    focusFirstQuestionAutomatic: "Usredotočite prvo pitanje na promjenu stranice",
    questionsOrder: "Redoslijed elemenata na stranici",
    maxTimeToFinish: "Maksimalno vrijeme za dovršaje ankete",
    maxTimeToFinishPage: "Maksimalno vrijeme za dovršanje stranice u anketi",
    image: {
      imageHeight: "Visina slike (u CSS-prihvaćenim vrijednostima)",
      imageWidth: "Širina slike (u CSS-prihvaćenim vrijednostima)"
    },
    // survey templates
    survey: {
      title: "Naslov"
    },
    page: {
      title: "Naslov",
      maxTimeToFinish: "Vremensko ograničenje za dovršetak stranice (u sekundama)"
    },
    question: {
      page: "Nadređena stranica"
    },
    panel: {
      page: "Nadređena stranica",
      indent: "Dodavanje vanjskih uvlaka"
    },
    showTimerPanel: "Pokaži ploču timera",
    showTimerPanelMode: "Prikazate način rada timer panela",
    renderMode: "Način prikaza",
    allowAddPanel: "Dopustite dodavanje ploče",
    allowRemovePanel: "Dopustite uklanjanje ploče",
    noEntriesText: "Prazan tekst unosa",
    panelAddText: "Dodavanje teksta panela",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Uklanjanje teksta ploče",
    html: "Html",
    expression: "Izraz",
    setValue: "Odgovor",
    dataFormat: "Oblik slike",
    allowAddRows: "Dopusti dodavanje redaka",
    allowRemoveRows: "Dopusti uklanjanje redaka",
    allowRowsDragAndDrop: "Dopusti povlačenje i ispuštanje retka",
    responsiveImageSizeHelp: "Ne primjenjuje se ako navedete točnu širinu ili visinu slike.",
    minImageWidth: "Minimalna širina slike",
    maxImageWidth: "Maksimalna širina slike",
    minImageHeight: "Minimalna visina slike",
    maxImageHeight: "Maksimalna visina slike",
    minValue: "Minimalna vrijednost",
    maxValue: "Maksimalna vrijednost",
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
    maxOthersLength: "Maksimalna duljina komentara (u znakovima)",
    autoGrowComment: "Ako je potrebno, automatsko proširivanje područja komentara",
    allowResizeComment: "Dopusti korisnicima promjenu veličine tekstnih područja",
    textUpdateMode: "Ažuriranje vrijednosti tekstnog pitanja",
    focusOnFirstError: "Postavljanje fokusa na prvi odgovor koji nije valjan",
    checkErrorsMode: "Pokreni provjeru valjanosti",
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
    paneldynamic: {
      confirmDelete: "Potvrda brisanja ploče"
    },
    panelCount: "Početni broj ploča",
    minPanelCount: "Najmanji broj ploča",
    maxPanelCount: "Maksimalan broj ploča",
    panelsState: "Stanje proširenja unutarnje ploče",
    templateDescription: "Predložak opisa",
    templateTitle: "Predložak naslova",
    panelPrevText: "Opis alata gumba Prethodna ploča",
    panelNextText: "Opis alata gumba Sljedeća ploča",
    showRangeInProgress: "Pokaži traku tijeka",
    templateTitleLocation: "Mjesto naslova pitanja",
    panelRemoveButtonLocation: "Ukloni mjesto gumba ploče",
    hideIfRowsEmpty: "Sakrij pitanje ako nema redaka",
    hideColumnsIfEmpty: "Sakrij stupce ako nema redaka",
    rateValues: "Vrijednosti prilagođene stope",
    rateCount: "Broj stopa",
    autoGenerate: "Kako odrediti vrijednosti stope?",
    hideIfChoicesEmpty: "Sakrij pitanje ako ne sadrži izbora",
    hideNumber: "Sakrij broj pitanja",
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
    showClearButton: "Prikaz gumba Očisti",
    showNumber: "Pokaži broj ploče",
    logoWidth: "Širina logotipa (u CSS-prihvaćenim vrijednostima)",
    logoHeight: "Visina logotipa (u CSS-prihvaćenim vrijednostima)",
    readOnly: "Samo za čitanje",
    enableIf: "Može se uređivati ako",
    emptyRowsText: "Poruka \"Bez redaka\"",
    size: "Veličina polja unosa (u znakovima)",
    separateSpecialChoices: "Razdvoji posebne odabire (Ništa, Ostalo, Odaberi sve)",
    choicesFromQuestion: "Kopiraj odabire iz sljedećeg pitanja",
    choicesFromQuestionMode: "Koje izbore kopirati?",
    showCommentArea: "Prikaz područja komentara",
    commentPlaceholder: "Rezervirano mjesto područja komentara",
    displayRateDescriptionsAsExtremeItems: "Opisi brzine prikaza kao ekstremne vrijednosti",
    rowsOrder: "Redoslijed redaka",
    columnsLayout: "Izgled stupca",
    columnColCount: "Broj ugniježđenih stupaca",
    state: "Stanje proširenja ploče",
    correctAnswer: "Točan odgovor",
    defaultPanelValue: "Zadane vrijednosti",
    cells: "Tekstovi ćelija",
    keyName: "Stupac ključa",
    itemvalue: {
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
    tabs: {
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
      others: "Drugi"
    },
    editProperty: "Uređivanje objekta '{0}'",
    items: "[ Stavke: {0} ]",
    choicesVisibleIf: "Izbori su vidljivi ako",
    choicesEnableIf: "Izbori se mogu odabrati ako",
    columnsEnableIf: "Stupci su vidljivi ako",
    rowsEnableIf: "Reci su vidljivi ako",
    indent: "Dodavanje uvlaka",
    innerIndent: "Dodavanje unutarnjih uvlaka",
    defaultValueFromLastRow: "Uzimanje zadanih vrijednosti iz posljednjeg retka",
    defaultValueFromLastPanel: "Preuzimanje zadanih vrijednosti s posljednje ploče",
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
    signatureWidth: "Širina potpisa",
    signatureHeight: "Visina potpisa",
    verticalAlign: "Okomito poravnanje",
    alternateRows: "Zamjenski reci",
    columnsVisibleIf: "Stupci su vidljivi ako",
    rowsVisibleIf: "Reci su vidljivi ako",
    otherPlaceholder: "Rezervirano mjesto područja komentara",
    signaturepad: {
      showPlaceholder: "Pokaži rezervirano mjesto",
      placeholder: "Tekst rezerviranog mjesta",
      signatureWidth: "Širina područja potpisa",
      signatureHeight: "Visina područja potpisa",
      signatureAutoScaleEnabled: "Automatsko mijenjanje područja potpisa",
      penMinWidth: "Minimalna širina olovke",
      penMaxWidth: "Maksimalna širina olovke"
    },
    filePlaceholder: "Tekst rezerviranog mjesta datoteke",
    photoPlaceholder: "Tekst rezerviranog mjesta za fotografije",
    fileOrPhotoPlaceholder: "Tekst rezerviranog mjesta za datoteku ili fotografiju",
    rateType: "Vrsta stope"
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
    decimal: "decimala",
    currency: "valuta",
    percent: "posto",
    firstExpanded: "firstExpanded",
    off: "isključeno",
    onpanel: "Započni na svakoj ploči",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "popis",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Tabulatori",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "oba",
    left: "lijevo",
    right: "Desno",
    leftRight: "Lijevo i desno",
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
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Kada se pitanje ili njegova ploča/stranica sakriju",
    contain: "Sadržavati",
    cover: "Pokriti",
    fill: "Ispuniti",
    clearInvisibleValues: {
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
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Prije promjene odgovora",
    standard: "standard",
    singlePage: "single page",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
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
    showNavigationButtons: {
      none: "Skriven"
    },
    showProgressBar: {
      off: "Skriven"
    },
    showTimerPanel: {
      none: "Skriven"
    },
    showTimerPanelMode: {
      all: "Oba"
    },
    detailPanelMode: {
      none: "Skriven"
    },
    addRowLocation: {
      default: "Ovisi o izgledu matrice"
    },
    panelsState: {
      default: "Korisnici ne mogu proširiti ili sažeti ploče",
      collapsed: "Sve ploče su urušene",
      expanded: "Sve ploče su proširene"
    },
    widthMode: {
      auto: "Automobil",
      static: "Statički",
      responsive: "Odgovarajući"
    },
    imageFit: {
      none: "Nijedan",
      contain: "Sadržavati",
      cover: "Pokriti",
      fill: "Ispuniti"
    },
    contentMode: {
      auto: "Automobil",
      image: "Slika",
      video: "Video",
      youtube: "YouTube"
    },
    displayMode: {
      auto: "Automobil",
      buttons: "Gumbe",
      dropdown: "Padajući izbornik"
    },
    rateColorMode: {
      default: "Propust"
    },
    autoGenerate: {
      "true": "Generirati",
      "false": "Ručno unesite"
    },
    rateType: {
      labels: "Natpise",
      stars: "Zvijezde",
      smileys: "Smajlići"
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
  pehelp: {
    cookieName: "Kolačići sprječavaju korisnike da dvaput ispune istu anketu.",
    size: "Mijenja veličinu vidljivog područja polja unosa. Da biste ograničili duljinu unosa, koristite postavku <b>Provjera valjanosti → maksimalnu duljinu</b>.",
    format: "Koristite {0} kao rezervirano mjesto za stvarnu vrijednost.",
    totalText: "Vidljivo samo ako barem jedan stupac ima izraz Vrsta zbroja ili Ukupno.",
    acceptedTypes: "Dodatne informacije potražite u opisu atributa [accept](https://www.w3schools.com/tags/att_input_accept.asp).",
    columnColCount: "Primjenjivo samo na vrste ćelija Radiogrupa i Potvrdni okvir.",
    autocomplete: "Dodatne informacije potražite u opisu atributa [samodovršetak](https://developer.mozilla.org/en-US/docs/Web/HTML/atributi/samodovršetak).",
    valueName: "Ako ne postavite ovo svojstvo, odgovor će biti pohranjen u polju određenom svojstvom Naziv .",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Ako navedeni stupac sadrži identične vrijednosti, anketa odbacuje pogrešku \"Nejedinstvena vrijednost ključa\".",
    filePlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke\" ili kada kamera nije dostupna",
    photoPlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Kamera\".",
    fileOrPhotoPlaceholder: "Primjenjuje se kada je \"Vrsta izvora\" \"Lokalne datoteke ili kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "title",
      title: "Ostavite prazno, ako je isto kao 'Name'"
    },
    multiSelect: "Dopusti višestruki odabir",
    showLabel: "Pokaži opise slika",
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
    titleLocation: "titleLocation",
    descriptionLocation: "Mjesto opisa",
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
    isUnique: "Jedinstven je",
    showInMultipleColumns: "Prikaži u više stupaca",
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
    itemSize: "itemSize",
    elements: "Elemenata",
    content: "Sadržaj",
    navigationButtonsVisibility: "navigationButtonsVisibility",
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
    allowCameraAccess: "Dopusti pristup kameri",
    scaleColorMode: "Način skaliranja boje",
    rateColorMode: "Način ocjenjivanja boja",
    templateTabTitle: "Naslov kartice Predložak",
    templateVisibleIf: "Predložak vidljiv ako",
    copyDisplayValue: "Kopiraj vrijednost prikaza"
  },
  theme: {
    "--background": "Boja pozadine",
    "--background-dim-light": "Pozadina prigušena svijetla boja",
    "--primary-foreground": "Primarna boja prednjeg plana",
    "--foreground": "Boja prednjeg plana",
    "--base-unit": "Osnovna jedinica",
    advancedMode: "Napredni način rada",
    groupGeneral: "Općenito",
    groupHeader: "Zaglavlje",
    groupBackground: "Pozadina",
    groupAppearance: "Izgled",
    themeName: "Tema",
    themeMode: "Izgled pitanja",
    themeModePanels: "Propust",
    themeModeLightweight: "Bez panela",
    themePaletteLight: "Svjetlo",
    themePaletteDark: "Mračan",
    primaryColor: "Boja isticanja",
    primaryDefaultColor: "Propust",
    primaryDarkColor: "Lebdjeti",
    primaryLightColor: "Odabrani",
    coverTitleForecolor: "Naslovna prednja strana",
    coverDescriptionForecolor: "Opis prednje boje",
    coverOverlapEnabled: "Preklapanje",
    backgroundDimColor: "Boja pozadine",
    backgroundImage: "Pozadinska slika",
    backgroundImageFitAuto: "Automobil",
    backgroundImageFitCover: "Pokriti",
    backgroundImageFitContain: "Sadržavati",
    backgroundImageFitFill: "Parcela",
    backgroundImageFitTile: "Crijep",
    backgroundOpacity: "Neprozirnost",
    backgroundImageAttachmentFixed: "Fiksirane",
    backgroundImageAttachmentScroll: "Svitak",
    panelBackgroundTransparency: "Neprozirnost pozadine ploče",
    questionBackgroundTransparency: "Pitanje neprozirnosti pozadine",
    questionTitle: "Font naslova pitanja",
    editorPanel: "Ulazni element",
    backgroundCornerRadius: "Polumjer pozadine i kuta",
    backcolor: "Zadana pozadina",
    hovercolor: "Pozadina držanja pokazivača miša",
    borderDecoration: "Uređenje obruba",
    accentBackground: "Pozadina isticanja",
    accentForeground: "Isticanje u prvom planu",
    primaryForecolor: "Zadana boja",
    primaryForecolorLight: "Onemogućena boja",
    colorsTitle: "Boje",
    font: "Krstionica",
    lines: "Linije",
    borderDefault: "Tamnije",
    borderLight: "Upaljač",
    fontFamily: "Obitelj fontova",
    fontSize: "Veličina fonta",
    color: "Boja",
    placeholderColor: "Boja rezerviranog mjesta",
    size: "Veličina",
    fontWeightRegular: "Redovan",
    fontWeightHeavy: "Težak",
    fontWeightSemiBold: "Polupodebljano",
    fontWeightBold: "Odvažan",
    scale: "Vaga",
    cornerRadius: "Kutni radijus",
    surveyTitle: "Font naslova upitnika",
    surveyDescription: "Font opisa upitnika",
    pageTitle: "Font naslova stranice",
    titleFont: "Font naslova",
    descriptionFont: "Font opisa",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Dodaj efekt sjene",
    opacity: "Neprozirnost",
    boxShadowBlur: "Mrlja",
    boxShadowSpread: "Širenje",
    boxShadowDrop: "Ispustiti",
    boxShadowInner: "Unutarnji",
    shadow: "Efekti sjene",
    headerView: "Pogled",
    headerViewBasic: "Osnovni",
    headerViewAdvanced: "Napredan",
    coverInheritWidthFrom: "Širina područja sadržaja",
    coverInheritWidthFromSurvey: "Isto kao i anketa",
    coverInheritWidthFromContainer: "Prilagodi spremniku",
    coverTextAreaWidth: "Širina teksta",
    coverBackgroundColorSwitch: "Boja pozadine",
    coverBackgroundColorNone: "Nijedan",
    coverBackgroundColorAccentColor: "Boja isticanja",
    coverBackgroundColorCustom: "Običaj",
    horizontalAlignmentLeft: "Lijevo",
    horizontalAlignmentCenter: "Središte",
    horizontalAlignmentRight: "Desno",
    verticalAlignmentTop: "Vrh",
    verticalAlignmentMiddle: "Sredina",
    verticalAlignmentBottom: "Dno",
    logoPosition: "Položaj logotipa",
    coverTitlePosition: "Položaj naslova",
    coverDescriptionPosition: "Položaj opisa",
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
      green: "Zelen"
    }
  }
};
editorLocalization.locales["hr"] = hrStrings;

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
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Vremensko ograničenje za dovršetak stranice (u sekundama)"
// question.page: "Parent page" => "Nadređena stranica"
// pe.noEntriesText: "Empty entries text" => "Prazan tekst unosa"
// pe.setValue: "Answer" => "Odgovor"
// pe.dataFormat: "Image format" => "Oblik slike"
// pe.allowAddRows: "Allow adding rows" => "Dopusti dodavanje redaka"
// pe.allowRemoveRows: "Allow removing rows" => "Dopusti uklanjanje redaka"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Dopusti povlačenje i ispuštanje retka"
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
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Maksimalna duljina komentara (u znakovima)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Ako je potrebno, automatsko proširivanje područja komentara"
// pe.allowResizeComment: "Allow users to resize text areas" => "Dopusti korisnicima promjenu veličine tekstnih područja"
// pe.textUpdateMode: "Update text question value" => "Ažuriranje vrijednosti tekstnog pitanja"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Postavljanje fokusa na prvi odgovor koji nije valjan"
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
// pe.panelPrevText: "Previous Panel button tooltip" => "Opis alata gumba Prethodna ploča"
// pe.panelNextText: "Next Panel button tooltip" => "Opis alata gumba Sljedeća ploča"
// pe.showRangeInProgress: "Show progress bar" => "Pokaži traku tijeka"
// pe.templateTitleLocation: "Question title location" => "Mjesto naslova pitanja"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Ukloni mjesto gumba ploče"
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
// pe.showClearButton: "Show the Clear button" => "Prikaz gumba Očisti"
// pe.showNumber: "Show panel number" => "Pokaži broj ploče"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Širina logotipa (u CSS-prihvaćenim vrijednostima)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Visina logotipa (u CSS-prihvaćenim vrijednostima)"
// pe.readOnly: "Read-only" => "Samo za čitanje"
// pe.enableIf: "Editable if" => "Može se uređivati ako"
// pe.emptyRowsText: "\"No rows\" message" => "Poruka \"Bez redaka\""
// pe.size: "Input field size (in characters)" => "Veličina polja unosa (u znakovima)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Razdvoji posebne odabire (Ništa, Ostalo, Odaberi sve)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopiraj odabire iz sljedećeg pitanja"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Koje izbore kopirati?"
// pe.showCommentArea: "Show the comment area" => "Prikaz područja komentara"
// pe.commentPlaceholder: "Comment area placeholder" => "Rezervirano mjesto područja komentara"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Opisi brzine prikaza kao ekstremne vrijednosti"
// pe.rowsOrder: "Row order" => "Redoslijed redaka"
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
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Uzimanje zadanih vrijednosti iz posljednjeg retka"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Preuzimanje zadanih vrijednosti s posljednje ploče"
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
// addRowLocation.default: "Depends on matrix layout" => "Ovisi o izgledu matrice"
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
// theme.groupGeneral: "General" => "Općenito"
// theme.groupAdvanced: "Advanced" => "Napredan"
// theme.themeName: "Theme" => "Tema"
// theme.themeMode: "Question appearance" => "Izgled pitanja"
// theme.themeModePanels: "Default" => "Propust"
// theme.themeModeLightweight: "Without Panels" => "Bez panela"
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
// theme.surveyTitle: "Survey title font" => "Font naslova upitnika"
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
// theme.groupHeader: "Header" => "Zaglavlje"
// theme.coverTitleForecolor: "Title forecolor" => "Naslovna prednja strana"
// theme.coverOverlapEnabled: "Overlap" => "Preklapanje"
// theme.backgroundImageFitFill: "Stretch" => "Parcela"
// theme.backgroundImageFitTile: "Tile" => "Crijep"
// theme.headerView: "View" => "Pogled"
// theme.headerViewBasic: "Basic" => "Osnovni"
// theme.headerViewAdvanced: "Advanced" => "Napredan"
// theme.coverInheritWidthFrom: "Content area width" => "Širina područja sadržaja"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Isto kao i anketa"
// theme.coverInheritWidthFromPage: "Fit to page" => "Prilagodi stranici"
// theme.coverTextAreaWidth: "Text width" => "Širina teksta"
// theme.coverBackgroundColorSwitch: "Background color" => "Boja pozadine"
// theme.coverBackgroundColorNone: "None" => "Nijedan"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Boja isticanja"
// theme.coverBackgroundColorCustom: "Custom" => "Običaj"
// theme.horizontalAlignmentLeft: "Left" => "Lijevo"
// theme.horizontalAlignmentCenter: "Center" => "Središte"
// theme.horizontalAlignmentRight: "Right" => "Desno"
// theme.verticalAlignmentTop: "Top" => "Vrh"
// theme.verticalAlignmentMiddle: "Middle" => "Sredina"
// theme.verticalAlignmentBottom: "Bottom" => "Dno"
// theme.logoPosition: "Logo Position" => "Položaj logotipa"
// theme.coverTitlePosition: "Title Position" => "Položaj naslova"
// theme.coverDescriptionPosition: "Description Position" => "Položaj opisa"
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
// theme.groupBackground: "Background" => "Pozadina"
// theme.groupAppearance: "Appearance" => "Izgled"
// theme.coverDescriptionForecolor: "Description forecolor" => "Opis prednje boje"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Želite li zaista resetirati temu? Sve prilagodbe bit će izgubljene."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Da, resetirajte temu"
// theme.groupBackground: "Background" => "Pozadina"
// theme.groupAppearance: "Appearance" => "Izgled"
// theme.coverDescriptionForecolor: "Description forecolor" => "Opis prednje boje"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Prilagodi spremniku"
// signaturepad.showPlaceholder: "Show the placeholder" => "Pokaži rezervirano mjesto"
// signaturepad.placeholder: "Placeholder text" => "Tekst rezerviranog mjesta"
// theme.surveyDescription: "Survey description font" => "Font opisa upitnika"

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