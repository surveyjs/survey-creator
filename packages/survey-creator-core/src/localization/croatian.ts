import { editorLocalization, defaultStrings } from "survey-creator-core";

export var hrStrings = {
  //survey templates
  survey: {
    edit: "Uređivanje",
    externalHelpLink: "Gledajte i saznajte kako stvoriti ankete",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
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
  //questionTypes
  qt: {
    default: "Zadani",
    checkbox: "Ček",
    comment: "Komentar",
    imagepicker: "Berač slika",
    image: "Slike",
    dropdown: "Padajući",
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
    flowpanel: "Ploča protoka",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Zadani ({0})",
    survey: "Anketa",
    settings: "Postavke ankete",
    settingsTooltip: "Otvaranje postavki ankete",
    //opjectPropertiesHeader: "Advanced",
    //showObjectProperties: "Show Object Properties",
    //hideObjectProperties: "Hide Object Properties",
    showPanel: "Pokaži ploču",
    hidePanel: "Sakrij ploču",
    //editSurvey: "Edit Survey",
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
    testSurveyAgain: "Ponovno probna anketa",
    testSurveyWidth: "Širina ankete: ",
    navigateToMsg: "Morao si navigirati do:",
    logic: "Logika ankete",
    embedSurvey: "Ugrađena anketa",
    translation: "Prijevod",
    saveSurvey: "Spremi anketu",
    saveSurveyTooltip: "Spremi anketu",
    designer: "Dizajner ankete",
    jsonEditor: "JSON urednik",
    undo: "Poništiti",
    redo: "Ponoviti",
    undoTooltip: "Poništi posljednju promjenu",
    redoTooltip: "Preusmjeti promjenu",
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
    toolboxGeneralCategory: "Općenito",
    //delSelObject: "Delete selected object",
    //editSelObject: "Edit selected object",
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
    translationAddLanguage: "Odaberite jezik za prevođenje",
    translationShowAllStrings: "Pokažite sve žice",
    translationShowAllPages: "Pokažite sve stranice",
    translationNoStrings: "Nema žica za prevođenje. Promijenite filtar.",
    translationExportToSCVButton: "Izvoz u CSV",
    translationImportFromSCVButton: "Uvoz iz CSV",
    translationMergeLocaleWithDefault:
      "Spajanje {0} sa zadanim lokalomwith default locale.",
    bold: "podebljano",
    italic: "kurziv",
    underline: "podcrtavanje",
    addNewQuestion: "Dodaj pitanje",
    selectPage: "Odaberite stranicu...",
    chooseElement: "Odaberite element...",
    //completedHtmlOnConditionItemText: "Show if:",
    lg: {
      //Logic tab strings
      page_visibilityName: "Vidljivost stranice",
      panel_visibilityName: "Vidljivost panela",
      panel_enableName: "Omogući/onemogući panel",
      question_visibilityName: "Vidljivost pitanja",
      question_enableName: "Pitanje omogućuje/onesposobljava",
      question_requireName: "Pitanje nije obavezno",
      trigger_completeName: "Potpuna anketa",
      trigger_setvalueName: "Postavite vrijednost pitanja",
      trigger_copyvalueName: "Kopiranje vrijednosti pitanja",
      trigger_skipName: "Prijeđite na pitanje",
      trigger_runExpressionName: "Pokretanje prilagođenog izraza",
      completedHtmlOnConditionName: "Prilagođeni 'Thank you page' tekst",

      page_visibilityDescription:
        "Učinite stranicu vidljivom kada se logička ekspresija vrati istinitom. Inače neka bude nevidljivo.",
      panel_visibilityDescription:
        "Učinite ploču vidljivom kada se logička ekspresija vrati istinitom. Inače ga držati nevidljivim.",
      panel_enableDescription:
        "Učinite ploču i sve elemente unutar nje omogućite kada se logička ekspresija vrati istinita. Inače ih držite onesposobljenima.",
      question_visibilityDescription:
        "Učinite pitanje vidljivim kada se logička ekspresija vrati istinita. Inače ga držati nevidljivim.",
      question_enableDescription:
        "Omogućite pitanje kada se logička ekspresija vrati istinita. Inače ga držati onemogućen.",
      question_requireDescription:
        "Pitanje postaje potrebno kada se logička ekspresija vrati istinita.",
      trigger_completeDescription:
        "Kada se logička ekspresija vrati istinita, anketa postaje dovršena i krajnji korisnik vidi 'Thank you page'.",
      trigger_setvalueDescription:
        "Kada se vrijednosti pitanja, koje se koriste u logičkom izrazu, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost postavlja na odabrano pitanje.",
      trigger_copyvalueDescription:
        "Kada se vrijednosti pitanja, koje se koriste u logičkoj ekspresiji, mijenjaju i logička ekspresija se vraća istinita, tada se vrijednost jednog odabranog pitanja kopira na drugo odabrano pitanje.",
      trigger_skipDescription:
        "Kada se logička ekspresija vrati istinita, anketa preskače na / fokusira odabrano pitanje.",
      trigger_runExpressionDescription:
        "Kada se logička ekspresija vrati istinita, tada se izvodi prilagođeni izraz. Taj rezultat izraza možete neobavezno postaviti u odabrano pitanje.",
      completedHtmlOnConditionDescription:
        "Ako se logička ekspresija vrati istinita, zadani tekst za 'Thank you page' mijenja se u zadani.",

      itemExpressionText: "Kada se izraz '{0}' vrati istinit", //{0} - the expression
      page_visibilityText: "Učinite stranicu {0} vidljivom", //{0} page name
      panel_visibilityText: "Učinite ploču {0} vidljivom", //{0} panel name
      panel_enableText: "Omogući panel x {0}", //{0} panel name
      question_visibilityText: "Učinite pitanje {0} vidljivim", //{0} question name
      question_enableText: "Omogući pitanje {0}", //{0} question name
      question_requireText: "Neka pitanje {0} bude potrebno", //{0} question name
      trigger_completeText: "Anketa se dovrša",
      trigger_setvalueText: "Postavljeno u pitanje: {0} vrijednost {1}", //{0} question name, {1} setValue
      trigger_copyvalueText:
        "Kopirajte u pitanje: {0} vrijednost od pitanja {1}", //{0} and {1} question names
      trigger_skipText: "Anketa preskače na pitanje {0}", //{0} question name
      trigger_runExpressionText1: "Pokretanje izraza: '{0}'", //{0} the expression
      trigger_runExpressionText2: " i dovela u pitanje svoj rezultat: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Prikazati prilagođeni tekst za 'Thank you page'.",

      conditions: "Stanje/Stanja",
      actions: "Akcije",
      expressionEditorTitle: "Definiranje uvjeta",
      actionsEditorTitle: "Definiranje radnji",

      deleteAction: "Brisanje radnje",
      addNewAction: "Dodavanje nove akcije",
      selectedActionCaption: "Odaberite radnju za dodavanje...",

      expressionInvalid:
        "Logička ekspresija je prazna ili nevažeća. Molim vas, ispravite to.",
      noActionError: "Molim vas, dodajte barem jednu akciju.",
      actionInvalid: "Molimo vas da riješite probleme u svojoj akciji.",
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
    apply: "Primijeniti",
    ok: "OK",
    save: "Spremiti",
    saveTooltip: "Spremiti",
    cancel: "Otkazati",
    reset: "Resetirati",
    refresh: "Osvježi",
    // close: "Close",
    delete: "Izbrisati",
    add: "Dodati",
    addNew: "Dodaj novo",
    addItem: "Kliknite da biste dodali stavku...",
    addOther: "Drugih",
    addSelectAll: "Odaberite sve",
    addNone: "Nitko",
    removeAll: "Uklonite sve",
    edit: "Uređivanje",
    back: "Povratak bez uštede",
    backTooltip: "Povratak bez uštede",
    saveAndBack: "Spremanje i vraćanje",
    saveAndBackTooltip: "Spremanje i vraćanje",
    // itemValueEdit: "Visible If",
    editChoices: "Uređivanje izbora",
    showChoices: "Pokažite izbore",
    move: "Premjestiti",
    empty: "<empty>",
    // notEmpty: "<edit value>",
    fastEntry: "Brzi unos",
    formEntry: "Unos obrasca",
    testService: "Testirajte uslugu",
    itemSelectorEmpty: "Odaberite element",
    conditionActionEmpty: "Odaberite radnju",
    conditionSelectQuestion: "Odaberite pitanje...",
    conditionSelectPage: "Odaberite stranicu...",
    conditionSelectPanel: "Odabir ploče...",
    conditionValueQuestionTitle: "Unesite/odaberite vrijednost",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Možete koristiti kovrčave nosače kako biste dobili pristup vrijednostima pitanja: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Funkcije možete koristiti kao: iif(), today(), age(), min(), max(), count(), avg() and others.",
    aceEditorHelp:
      "Pritisnite ctrl + prostor kako biste dobili savjet o završetku ekspresije",
    aceEditorRowTitle: "Trenutni redk",
    aceEditorPanelTitle: "Trenutna ploča",
    showMore: "Više detalja potražite u dokumentaciji",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Dostupna pitanja:",
    cellsEmptyRowsColumns: "Trebao bi postojati barem jedan stupac ili red",

    propertyIsEmpty: "Unesite vrijednost",
    propertyIsNoUnique: "Unesite jedinstvenu vrijednost",
    propertyNameIsNotUnique: "Unesite jedinstveno ime",
    listIsEmpty: "Dodavanje nove stavke",
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
    titleName: "Naziv naslova",
    titlePlaceholder: "Ulazni naslov ovdje",
    surveyTitlePlaceholder: "Naslov ulazne ankete ovdje",
    pageTitlePlaceholder: "Naslov ulazne stranice ovdje",
    descriptionPlaceholder: "Unesite opis",
    surveyDescriptionPlaceholder: "Unesite opis ankete",
    pageDescriptionPlaceholder: "Unesite opis stranice",

    hasOther: "Ima i drugu stavku",
    otherText: "Tekst druge stavke",
    hasNone: "Nema stavku",
    noneText: "Nijedan tekst stavke",
    hasSelectAll: "Sadrži odaberite sve stavke",
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
    isAllRowRequired: "Zahtijevati odgovor za sve redove",
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
    and: "I",
    or: "Ili",
    remove: "Ukloniti",
    addCondition: "Dodavanje stanja",

    //survey
    showTitle: "Pokaži/sakrij naslov",
    expandCollapseTitle: "Naslov proširenja/kolapsa",
    locale: "Zadani jezik",
    simulator: "Odaberite uređaj",
    landscapeOrientation: "Krajolik",
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
    showPrevButton:
      "Prikagnite prethodni gumb (korisnik se može vratiti na prethodnu stranicu)",
    firstPageIsStarted: "Prva stranica u anketi je početna stranica.",
    showCompletedPage: "Prikagušite dovršenu stranicu na kraju (completedHtml)",
    goNextPageAutomatic:
      "Kada odgovarate na sva pitanja, idite automatski na sljedeću stranicu",
    showProgressBar: "Pokaži traku napretka",
    questionTitleLocation: "Lokacija naslova pitanja",
    requiredText: "Pitanje je zahtijevalo simbole",
    questionStartIndex: "Indeks pokretanja pitanja (1, 2 ili 'A', 'a')",
    showQuestionNumbers: "Prikazate brojeve pitanja",
    questionTitleTemplate:
      "Predložak naslova pitanja, zadano je: '{no}. {require} {title}'",
    questionErrorLocation: "Mjesto pogreške u pitanju",
    focusFirstQuestionAutomatic:
      "Usredotočite prvo pitanje na promjenu stranice",
    questionsOrder: "Redoslijed elemenata na stranici",
    maxTimeToFinish: "Maksimalno vrijeme za dovršaje ankete",
    maxTimeToFinishPage: "Maksimalno vrijeme za dovršanje stranice u anketi",
    showTimerPanel: "Pokaži ploču timera",
    showTimerPanelMode: "Prikazate način rada timer panela",
    renderMode: "Način prikaza",
    allowAddPanel: "Dopustite dodavanje ploče",
    allowRemovePanel: "Dopustite uklanjanje ploče",
    panelAddText: "Dodavanje teksta panela",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Uklanjanje teksta ploče",
    html: "Html",
    expression: "Izraz",

    minValue: "Minimalna vrijednost",
    maxValue: "Maksimalna vrijednost",
    minLength: "Minimalna duljina",
    allowDigits: "Dopustite znamenke",
    minCount: "Minimalno brojanje",
    maxCount: "Maksimalni broj",
    regex: "Redoviti izraz",

    totalText: "Ukupan tekst",
    totalType: "Ukupna vrsta",
    totalExpression: "Ukupni izraz",
    totalDisplayStyle: "Ukupan stil prikaza",
    totalCurrency: "Ukupna valuta",
    totalFormat: "Ukupan format",

    // Header  adorner
    logoPosition: "Položaj logotipa",
    addLogo: "Dodavanje logotipa...",
    changeLogo: "Promjena logotipa...",
    logoPositions: {
      none: "Uklanjanje logotipa",
      left: "Lijevo",
      right: "Desno",
      top: "Na vrhu",
      bottom: "Na dnu",
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
      completedHtml: "Završio Html",
      completedHtmlOnCondition: "Završeno Html pod uvjetom",
      loadingHtml: "Učitavanje Html",
      timer: "Timer/Kviz",
      calculatedValues: "Izračunate vrijednosti",
      triggers: "Aktivira",
      templateTitle: "Naslov predloška",
      totals: "Zbrojeve",
      logic: "Logika",
      layout: "Izgled",
      data: "Podataka",
      validation: "Provjera valjanosti",
      cells: "Ćelije",
      showOnCompleted: "Prikazuje se na dovršenom",
      logo: "Logotip u naslovu ankete",
      slider: "Klizač",
      others: "Drugi",
    },
    editProperty: "Uređivanje objekta '{0}'",
    items: "[ Stavke: {0} ]",

    enterNewValue: "Unesite vrijednost.",
    noquestions: "U anketi nema nikakvog pitanja.",
    createtrigger: "Izradite okidač",
    titleKeyboardAdornerTip: "Pritisnite gumb za unos za uređivanje",
    keyboardAdornerTip:
      "Pritisnite gumb enter za uređivanje stavke, pritisnite gumb za brisanje stavke, pritisnite alt plus strelica prema gore ili strelica prema dolje za pomicanje stavke.",
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

    noFile: "Nema odabira datoteke",
  },
  //Property values
  pv: {
    true: "istina",
    false: "lažne",
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
    decimal: "decimalna",
    currency: "valute",
    percent: "posto",
    firstExpanded: "firstExpanded",
    off: "isključeno",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "popis",
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
    color: "boja",
    date: "datum",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    singlePage: "single page",
    standard: "standard",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
  },
  //Operators
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
    and: "and",
    or: "or",
  },
  //Embed window
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
    titleJavaScript: "JavaScript",
  },
  //Preview (Survey)
  ts: {
    selectPage: "Odaberite stranicu da biste je testirali:",
    showInvisibleElements: "Pokaži nevidljive elemente",
  },
  validators: {
    answercountvalidator: "broj odgovora",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text",
  },
  triggers: {
    completetrigger: "potpuna anketa",
    setvaluetrigger: "postavljena vrijednost",
    copyvaluetrigger: "vrijednost kopiranja",
    skiptrigger: "preskočiti na pitanje",
    runexpressiontrigger: "pokrenuti izraz",
    visibletrigger: "promjena vidljivosti (amortizirati)",
  },
  pehelp: {
    //expression:
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Ostavite prazno, ako je isto kao 'Name'",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
  },
};
editorLocalization.locales["hr"] = hrStrings;
