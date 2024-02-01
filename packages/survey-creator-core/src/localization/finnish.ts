import { editorLocalization } from "survey-creator-core";

export var fiStrings = {
  // survey templates
  survey: {
    edit: "Muokkaa",
    externalHelpLink: "Katso ja opi luomaan kyselyjä",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Pudota kysymys Työkalupakista tähän.",
    addLogicItem: "Luo sääntö mukauttamaan kyselyn kulkua.",
    copy: "Kopioi",
    duplicate: "Monista",
    addToToolbox: "Lisää Työkalupakkiin",
    deletePanel: "Poista Paneeli",
    deleteQuestion: "Poista Kysymys",
    convertTo: "Konvertoi",
    drag: "Vedä elementtiä",
  },
  // Question types
  qt: {
    default: "Oletusarvo",
    checkbox: "Valintaruutu",
    comment: "Kommentti",
    imagepicker: "Kuvanvalitsin",
    ranking: "Sijoitus",
    image: "Kuva",
    dropdown: "Pudotusvalikko",
    tagbox: "Avattava monivalintavalikko",
    file: "Tiedosto",
    html: "Html",
    matrix: "Matrix (yksi valinta)",
    matrixdropdown: "Matrix (monivalinta)",
    matrixdynamic: "Matrix (dynaamiset rivit)",
    multipletext: "Useita tekstejä",
    panel: "Paneeli",
    paneldynamic: "Paneeli (dynaamiset paneelit)",
    radiogroup: "Radiopainikeryhmä",
    rating: "Luokitus",
    text: "Teksti",
    boolean: "Totuusarvomuuttuja",
    expression: "Lauseke(vain luku)",
    signaturepad: "Allekirjoitusalusta",
    buttongroup: "Painike-ryhmä"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Vakio ({0})",
    survey: "Kysely",
    settings: "Kyselyn asetukset",
    settingsTooltip: "Avaa kyselyn asetukset",
    surveySettings: "Kyselyn asetukset",
    surveySettingsTooltip: "Avaa kyselyn asetukset",
    themeSettings: "Teeman asetukset",
    themeSettingsTooltip: "Avaa teema-asetukset",
    showPanel: "Näytä Paneeli",
    hidePanel: "Piilota Paneeli",
    prevSelected: "Valitse edellinen",
    nextSelected: "Valitse seuraava",
    prevFocus: "Keskity edelliseen",
    nextFocus: "Keskity seuraavaksi",
    surveyTypeName: "Tutkimus",
    pageTypeName: "Sivu",
    panelTypeName: "Paneeli",
    questionTypeName: "Kysymys",
    columnTypeName: "Sarake",
    addNewPage: "Lisää uusi sivu",
    moveRight: "Selaa oikealle",
    moveLeft: "Selaa vasemmalle",
    deletePage: "Poista sivu",
    editPage: "Muokkaa sivua",
    edit: "Muokkaa",
    newPageName: "sivu",
    newQuestionName: "kysymys",
    newPanelName: "paneeli",
    newTextItemName: "teksti",
    testSurvey: "Testaa kysely",
    themeSurvey: "Teemoja",
    defaultV2Theme: "Laiminlyönti",
    modernTheme: "Nykyaikainen",
    defaultTheme: "Oletus (vanha)",
    testSurveyAgain: "Testaa kysely uudestaan",
    testSurveyWidth: "Kyselyn laajuus: ",
    navigateToMsg: "Sinun piti navigoida:",
    logic: "Kysely logiikka",
    embedSurvey: "Upota kysely",
    translation: "Käännös",
    saveSurvey: "Tallenna kysely",
    saveSurveyTooltip: "Tallenna kysely",
    saveTheme: "Tallenna teema",
    saveThemeTooltip: "Tallenna teema",
    designer: "Kyselyn suunnittelija",
    jsonEditor: "JSON Editori",
    jsonHideErrors: "Piilota virheet",
    jsonShowErrors: "Näytä virheet",
    undo: "Kumoa",
    redo: "Tee uudelleen",
    undoTooltip: "Kumoa viimeinen muutos",
    redoTooltip: "Tee muutos uudelleen",
    showMoreChoices: "Näytä lisää",
    showLessChoices: "Näytä vähemmän",
    copy: "Kopioi",
    cut: "Leikkaa",
    paste: "Liitä",
    copyTooltip: "Kopioi valinta leikepöydälle",
    cutTooltip: "Leikkaa valinta leikepöydälle",
    pasteTooltip: "Liitä leikepöydältä",
    options: "Vaihtoehdot",
    generateValidJSON: "Luo kelvollinen JSON",
    generateReadableJSON: "Luo luettava JSON",
    toolbox: "Työkalupakki",
    "property-grid": "Properties",
    propertyGridFilteredTextPlaceholder: "Kirjoita etsiäksesi...",
    propertyGridNoResultsFound: "Tuloksia ei löytynyt",
    toolboxGeneralCategory: "Yleinen",
    toolboxChoiceCategory: "Valintaa koskevat kysymykset",
    toolboxTextCategory: "Tekstinsyöttökysymykset",
    toolboxContainersCategory: "Säiliöt",
    toolboxMatrixCategory: "Matriisin kysymykset",
    toolboxMiscCategory: "Muut",
    correctJSON: "Korjaa JSON.",
    surveyResults: "Kyselyn tulos:",
    surveyResultsTable: "Taulukossa",
    surveyResultsJson: "JSON:ssa",
    resultsTitle: "Kysymyksen otsikko",
    resultsName: "Kysymyksen nimi",
    resultsValue: "Vastauksen arvo",
    resultsDisplayValue: "Näytä arvo",
    modified: "Muokattu",
    saving: "Tallentaa",
    saved: "Tallennettu",
    propertyEditorError: "Virhe:",
    saveError: "Virhe! Editorin sisältöä ei ole tallennettu.",
    translationPropertyGridTitle: "Kieliasetukset",
    themePropertyGridTitle: "Teeman asetukset",
    translationLanguages: "Kielet",
    translationDeleteLanguage: "Oletko varma, että haluat poistaa kaikki merkkijonot tältä kieleltä?",
    translationAddLanguage: "Valitse käännettävä kieli",
    translationShowAllStrings: "Näytä kaikki merkkijonot",
    translationShowUsedStringsOnly: "Vain käytetyt merkkijonot",
    translationShowAllPages: "Näytä kaikki sivut",
    translationNoStrings: "Ei merkkijonoja käännettäväksi. Vaihda suodatin.",
    translationExportToSCVButton: "Vie (CSV)",
    translationImportFromSCVButton: "Tuo (CSV)",
    translateUsigAI: "Käännä kaikki automaattisesti",
    translationDialogTitle: "Kääntämättömät merkkijonot",
    translationMergeLocaleWithDefault: "Yhdistä {0} oletuskielellä",
    translationPlaceHolder: "Käännös...",
    themeExportButton: "Vienti",
    themeImportButton: "Tuoda",
    surveyJsonExportButton: "Vienti",
    surveyJsonImportButton: "Tuoda",
    surveyJsonCopyButton: "Kopioi leikepöydälle",
    themeResetButton: "Palauta teema-asetukset oletusasetuksiin",
    themeResetConfirmation: "Haluatko todella nollata teeman? Kaikki mukautuksesi menetetään.",
    themeResetConfirmationOk: "Kyllä, nollaa teema",
    bold: "Lihavoitu",
    italic: "Kursiivi",
    underline: "Alleviivaa",
    addNewQuestion: "Lisää kysymys",
    selectPage: "Valitse sivu...",
    carryForwardChoicesCopied: "Valinnat kopioidaan kohteesta",
    choicesLoadedFromWebText: "Valinnat ladataan verkkopalvelusta.",
    choicesLoadedFromWebLinkText: "Siirry asetuksiin",
    choicesLoadedFromWebPreviewTitle: "Ladattujen valintavaihtoehtojen esikatselu",
    htmlPlaceHolder: "HTML-sisältö on täällä.",
    panelPlaceHolder: "Pudota kysymys työkalupakista tähän.",
    surveyPlaceHolder: "Kysely on tyhjä. Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    imagePlaceHolder: "Vedä ja pudota kuva tähän tai napsauta alla olevaa painiketta ja valitse ladattava kuva",
    imageChooseImage: "Valitse kuva",
    addNewTypeQuestion: "Lisää {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    auto: "auto",
    choices_Item: "Kohta ",
    lg: {
      addNewItem: "Lisää uusi sääntö",
      empty_tab: "Luo sääntö kyselyn kulun mukauttamista varten.",
      page_visibilityName: "Sivun näkyvyys",
      page_enableName: "Ota käyttöön (poista käytöstä) sivu",
      page_requireName: "Tee sivusta pakollinen",
      panel_visibilityName: "Panelin näkyvyys",
      panel_enableName: "Paneeli käytössä/Ei käytössä",
      panel_requireName: "Tee sivusta pakollinen",
      question_visibilityName: "Kysymyksen näkyvyys",
      question_enableName: "Kysymys käytössä/Ei käytössä",
      question_requireName: "Kysymys valinnainen vaaditaan",
      question_resetValueName: "Palauta kysymyksen arvo",
      question_setValueName: "Aseta kysymyksen arvo",
      column_visibilityName: "Näytä (piilota) -sarake",
      column_enableName: "Ota käyttöön (poista käytöstä) sarake",
      column_requireName: "Tee sarakkeesta pakollinen",
      column_resetValueName: "Palauta sarakkeen arvo",
      column_setValueName: "Sarakkeen arvon määrittäminen",
      trigger_completeName: "Valmis kysely",
      trigger_setvalueName: "Aseta kysymyksen arvo",
      trigger_copyvalueName: "Kopioi kysymyksen arvo",
      trigger_skipName: "Ohita kysymys",
      trigger_runExpressionName: "Suorita mukautettu lauseke",
      completedHtmlOnConditionName: "Mukautettu Kiitos -sivuteksti",
      page_visibilityDescription: "Tee sivusta näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      panel_visibilityDescription: "Tee paneelista näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      panel_enableDescription: "Ota paneeli ja kaikki sen sisällä olevat elementit käyttöön, kun looginen lauseke palauttaa arvon tosi. Muuten pidä ne poissa käytöstä.",
      question_visibilityDescription: "Tee kysymyksestä näkyvä, kun looginen lauseke palauttaa arvon tosi. Muuten pidä se näkymättömänä.",
      question_enableDescription: "Ota kysymys käyttöön, kun looginen lauseke palauttaa arvon tosi. Muussa tapauksessa pidä se poissa käytöstä.",
      question_requireDescription: "Kysymys tulee pakolliseksi, kun looginen lauseke palauttaa arvon tosi.",
      trigger_completeDescription: "Kun looginen lauseke palauttaa arvon tosi, kysely valmistuu ja loppukäyttäjä näkee Kiitos -sivun.",
      trigger_setvalueDescription: "Kun loogisessa lausekkeessa käytettyjä kysymysarvoja muutetaan ja looginen lauseke palauttaa arvon tosi, arvo asetetaan valitulle kysymykselle.",
      trigger_copyvalueDescription: "Kun loogisessa lausekkeessa käytettyjä kysymysarvoja muutetaan ja looginen lauseke palauttaa arvon tosi, yhden valitun kysymyksen arvo kopioidaan toiseen valittuun kysymykseen.",
      trigger_skipDescription: "Kun looginen lauseke palauttaa arvon tosi, kysely siirtyy valittuun kysymykseen / kohdista valittu kysymys.",
      trigger_runExpressionDescription: "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription: "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",
      itemExpressionText: "Kun lauseke: '{0}' palauttaa arvon tosi:", //{0} - the expression
      itemEmptyExpressionText: "Uusi sääntö",
      page_visibilityText: "Tee sivu {0} näkyväksi", //{0} page name
      panel_visibilityText: "Tee paneelista {0} näkyvä", //{0} panel name
      panel_enableText: "Ota paneeli {0} käyttöön", //{0} panel name
      question_visibilityText: "Tee kysymys {0} näkyväksi", //{0} question name
      question_enableText: "Ota kysymys {0} käyttöön", //{0} question name
      question_requireText: "Tee kysymyksestä {0} pakollinen", //{0} question name
      question_resetValueText: "nollaa kysymyksen arvo: {0}",
      question_setValueText: "Määritä arvo: {1} kysymykseen: {0}",
      column_visibilityText: "Tee kysymyksen {1} sarakkeesta {0} näkyvä", //{0} column name, {1} question name
      column_enableText: "Ota kysymyksen sarake {0} {1} käyttöön", //{0} column name, {1} question name
      column_requireText: "Tee kysymyksen sarake {0} {1} pakollinen", //{0} column name, {1} question name
      column_resetValueText: "Palauta sarakkeen soluarvo: {0}",
      column_setValueText: "Määritä solun arvo: {1} sarakkeeseen: {0}",
      setValueExpressionPlaceholder: " Lauseke, jonka tulos määritetään kohdekysymykselle.",
      trigger_completeText: "Kyselystä tulee täytetty",
      trigger_setvalueText: "Laita arvo {1} kysymykseen {0}", //{0} question name, {1} setValue
      trigger_setvalueEmptyText: "Selkeän kysymyksen arvo: {0}", //{0} question name
      trigger_copyvalueText: "Kopioi kysymykseen: {0} arvo kysymyksestä {1}", //{0} and {1} question names
      trigger_skipText: "Siirry kyselyn kysymykseen {0}", //{0} question name
      trigger_runExpressionText1: "Suorita lauseke: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ja aseta sen tulos kysymykseen: {0}", //{0} question name
      completedHtmlOnConditionText: "Näytä mukautettu teksti Kiitos -sivulle.",
      showAllQuestions: "Kaikki kysymykset",
      showAllActionTypes: "Kaikki toimintotyypit",
      conditions: "Ehdot",
      actions: "Toiminnot",
      expressionEditorTitle: "Määritä olosuhteet",
      actionsEditorTitle: "Määritä toiminnot",
      deleteAction: "Poista toiminto",
      addNewAction: "Lisää uusi toiminto",
      selectedActionCaption: "Valitse lisättävä toiminto ...",
      expressionInvalid: "Looginen lauseke on tyhjä tai virheellinen. Korjaa se.",
      noActionError: "Lisää ainakin yksi toiminto.",
      actionInvalid: "Korjaa ongelmat toiminnoissa.",
      uncompletedRule_title: "Loogiset säännöt ovat epätäydellisiä",
      uncompletedRule_text: "Et ole suorittanut joitakin loogisia sääntöjä. Jos poistut välilehdestä nyt, muutokset menetetään. Haluatko silti poistua välilehdeltä suorittamatta muutoksia?",
      uncompletedRule_apply: "Kyllä",
      uncompletedRule_cancel: "Ei, haluan täyttää säännöt"
    }
  },
  // Property Editors
  pe: {
    apply: "Käytä",
    ok: "OK",
    save: "Tallenna",
    clear: "Selvä",
    saveTooltip: "Tallenna",
    cancel: "Peruuta",
    set: "Joukko",
    reset: "Nollaa",
    change: "Muuttaa",
    refresh: "Päivitä",
    close: "Sulkea",
    delete: "Poista",
    add: "Lisää",
    addNew: "Lisää uusi",
    addItem: "Klikkaa lisätäksesi uusi kohde...",
    removeItem: "Poista kohde napsauttamalla...",
    dragItem: "Kohteen vetäminen",
    addOther: "Muu",
    addSelectAll: "Valitse kaikki",
    addNone: "Ei mitään",
    removeAll: "Poista kaikki",
    edit: "Muokkaa",
    back: "Palaa tallentamatta",
    backTooltip: "Palaa tallentamatta",
    saveAndBack: "Tallenna ja palaa",
    saveAndBackTooltip: "Tallenna ja palaa",
    doneEditing: "Valmis",
    editChoices: "Muokkaa valintoja",
    showChoices: "Näytä valinnat",
    move: "Siirrä",
    empty: "<tyhjä>",
    emptyValue: "Arvo on tyhjä",
    fastEntry: "Nopea pääsy",
    fastEntryNonUniqueError: "Arvo \"{0}\" ei ole ainutkertainen",
    fastEntryChoicesCountError: "Rajoita tuotteiden määrä {0} {1}",
    fastEntryChoicesMinCountError: "Anna vähintään {0} kohdetta",
    fastEntryPlaceholder: "Voit asettaa tiedot seuraavassa muodossa:\narvo1|teksti\narvo2",
    formEntry: "Lomakkeen pääsy",
    testService: "Testaa palvelu",
    itemSelectorEmpty: "Valitse elementti",
    conditionActionEmpty: "Valitse toiminto",
    conditionSelectQuestion: "Valitse kysymys...",
    conditionSelectPage: "Valitse sivu...",
    conditionSelectPanel: "Valitse paneeli...",
    conditionValueQuestionTitle: "Syötä / valitse arvo",
    expressionHelp: "Voit käyttää aalto ​​sulkeita päästäksesi kysymysarvoihin: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). Voit käyttää funktioita: iif(), today(), age(), min(), max(), count(), avg() ja muita.",
    aceEditorHelp: "Paina ctrl + välilyönti saadaksesi lausekkeen täydennysvihje",
    aceEditorRowTitle: "Nykyinen rivi",
    aceEditorPanelTitle: "Nykyinen paneeli",
    showMore: "Katso lisätietoja dokumentaatiosta",
    assistantTitle: "Saatavilla olevat kysymykset:",
    cellsEmptyRowsColumns: "Sarakkeita tai rivejä on oltava vähintään yksi",
    showPreviewBeforeComplete: "Esikatsele vastauksia ennen kyselyn lähettämistä",
    overridingPropertyPrefix: "Asettaja ",
    resetToDefaultCaption: "Nollata",
    propertyIsEmpty: "Anna arvo",
    propertyIsNoUnique: "Anna yksilöllinen arvo",
    propertyNameIsNotUnique: "Anna yksilöllinen nimi",
    propertyNameIsIncorrect: "Älä käytä varattuja sanoja: \"kohde\", \"valinta\", \"paneeli\", \"rivi\".",
    listIsEmpty: "Lisää uusi kohde",
    "listIsEmpty@choices": "Vaihtoehtoja ei ole vielä lisätty",
    "addNew@choices": "Lisää vaihtoehto",
    expressionIsEmpty: "Lauseke on tyhjä",
    value: "Arvo",
    text: "Teksti",
    rowid: "Rivi ID",
    imageLink: "Kuvalinkki",
    columnEdit: "Muokkaa saraketta: {0}",
    itemEdit: "Muokkaa kohdetta: {0}",
    url: "URL",
    path: "Polku",
    valueName: "Arvon nimi",
    choicesbyurl: {
      valueName: "Hae arvot seuraavasta JSON-kentästä"
    },
    titleName: "Otsikon nimi",
    imageLinkName: "Hae kuvien URL-osoitteet seuraavasta JSON-kentästä",
    allowEmptyResponse: "Salli tyhjä vastaus",
    titlePlaceholder: "Syötä otsikko tähän",
    surveyTitlePlaceholder: "Syötä kyselyn otsikko tähän",
    pageTitlePlaceholder: "Syötä sivun otsikko tähän",
    descriptionPlaceholder: "Lisää kuvaus",
    surveyDescriptionPlaceholder: "Lisää kyselyn kuvaus",
    pageDescriptionPlaceholder: "Lisää sivun kuvaus",
    showOtherItem: "On muu",
    otherText: "Muu teksti",
    showNoneItem: "Ei mitään",
    showRefuseItem: "Salli Kieltäydy vastaamasta -vaihtoehto",
    showDontKnowItem: "Salli En tiedä -vaihtoehto",
    noneText: "Ei mitään tekstiä",
    showSelectAllItem: "On valinnut kaikki",
    selectAllText: "Valitse kaikki tekstit",
    choicesMin: "Automaattisesti luotujen valintojen vähimmäisarvo",
    choicesMax: "Automaattisesti luotujen valintojen enimmäisarvo",
    choicesStep: "Automaattisesti luotujen valintojen ero",
    name: "Nimi",
    title: "Otsikko",
    cellType: "Solutyyppi",
    colCount: "Sarakemäärä",
    choicesOrder: "Valitse valintojen järjestys",
    visible: "On näkyvä?",
    isRequired: "On vaadittu?",
    markRequired: "Merkitse pakollisesti",
    removeRequiredMark: "Poista vaadittu merkki",
    isAllRowRequired: "Vaadi vastaus kaikille riveille",
    eachRowUnique: "Estä päällekkäiset vastaukset riveillä",
    requiredErrorText: "Vaadittu virheteksti",
    startWithNewLine: "Onko aloitus uudella rivillä?",
    rows: "Rivit",
    cols: "Sarakeet",
    placeholder: "Syötä paikkamerkintä",
    showPreview: "Näytä esikatselu",
    storeDataAsText: "Tallenna tiedostosisältö JSON-tulokseen tekstinä",
    maxSize: "Tiedoston enimmäiskoko tavuina",
    imageHeight: "Kuvan korkeus",
    imageWidth: "Kuvan leveys",
    rowCount: "Rivien määrä",
    columnLayout: "Sarakkeiden asettelu",
    addRowLocation: "Lisää rivipainikkeen sijainti",
    addRowText: "Lisää rivipainikkeen teksti",
    removeRowText: "Poista rivipainikkeen teksti",
    rateMin: "Vähimmäismäärä",
    rateMax: "Enimmäismäärä",
    rateStep: "Arvostele askel",
    minRateDescription: "Vähimmäismäärän kuvaus",
    maxRateDescription: "Enimmäismäärän kuvaus",
    inputType: "Syötä tyyppi",
    optionsCaption: "Vaihtoehdot kuvateksti",
    defaultValue: "Oletusarvo",
    cellsDefaultRow: "Oletussolutekstit",
    surveyEditorTitle: "Muokkaa kyselyn asetuksia",
    qEditorTitle: "Muokkaa: {0}",
    maxLength: "Enimmäispituus",
    buildExpression: "Luo",
    editExpression: "Muokkaa",
    and: "ja",
    or: "tai",
    remove: "Poista",
    addCondition: "Lisää ehto",
    emptyLogicPopupMessage: "Aloita ehtojen määrittäminen valitsemalla kysymys.",
    if: "Jos",
    then: "sitten",
    setToName: "Kohteen kysymys",
    fromName: "Kysymys, josta vastaus kopioidaan",
    gotoName: "Kysymys, johon kannattaa siirtyä",
    ruleIsNotSet: "Sääntö on virheellinen",
    includeIntoResult: "Sisällytä kyselyn tuloksiin",
    showTitle: "Näytä/piilota otsikko",
    expandCollapseTitle: "Laajenna / tiivistä otsikkoa",
    locale: "Oletus kieli",
    simulator: "Valitse laite",
    landscapeOrientation: "Vaakasuunta",
    portraitOrientation: "Pystysuuntaan vaihtaminen",
    mode: "Tila (vain muokkaus / vain luku)",
    clearInvisibleValues: "Tyhjennä näkymättömät arvot",
    cookieName: "Evästeen nimi (poistaaksesi kysely käytöstä suorita kysely kaksi kertaa paikallisesti)",
    sendResultOnPageNext: "Lähetä kyselyn tulokset seuraavalla sivulla",
    storeOthersAsComment: "Tallenna 'muut' arvo erilliseen kenttään",
    showPageTitles: "Näytä sivun otsikot",
    showPageNumbers: "Näytä sivunumerot",
    pagePrevText: "Edellinen sivu -painikkeen teksti",
    pageNextText: "Seuraava sivu -painikkeen teksti",
    completeText: "Valmis -painikkeen teksti",
    previewText: "Esikatsele -painikkeen teksti",
    editText: "Muokkaa -painikkeen teksti",
    startSurveyText: "Aloita -painikkeen teksti",
    showNavigationButtons: "Näytä navigointipainikkeet (oletusnavigointi)",
    showPrevButton: "Näytä edellinen -painike (käyttäjä voi palata edelliselle sivulle)",
    firstPageIsStarted: "Kyselyn ensimmäinen sivu on aloitussivu.",
    showCompletedPage: "Näytä valmis sivu lopussa (completeHtml)",
    goNextPageAutomatic: "Kun vastaat kaikkiin kysymyksiin, siirry seuraavalle sivulle automaattisesti",
    showProgressBar: "Näytä edistymispalkki",
    questionTitleLocation: "Kysymyksen otsikon sijainti",
    requiredText: "Kysymys vaadittu symboli (t)",
    questionStartIndex: "Kysymyksen aloitus indeksi (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Näytä kysymysnumerot",
    questionTitleTemplate: "Kysymyksen otsikkomalli, oletusarvo: '{no}. {require} {title}'",
    questionErrorLocation: "Kysymyksen virheen sijainti",
    focusFirstQuestionAutomatic: "Fokusoi ensimmäiseen kysymykseen sivun vaihtuessa",
    questionsOrder: "Elementtien järjestys sivulla",
    maxTimeToFinish: "Enimmäisaika saada kysely täytettyä",
    maxTimeToFinishPage: "Enimmäisaika kyselyn sivun täyttämiseen",
    image: {
      imageHeight: "Kuvan korkeus (CSS:n hyväksymissä arvoissa)",
      imageWidth: "Kuvan leveys (CSS-hyväksytyissä arvoissa)"
    },
    // survey templates
    survey: {
      title: "Nimike"
    },
    page: {
      title: "Nimike",
      maxTimeToFinish: "Sivun viimeistelyn aikaraja (sekunteina)"
    },
    question: {
      page: "Pääsivu"
    },
    showTimerPanel: "Näytä ajastus -paneeli",
    showTimerPanelMode: "Näytä ajastus -paneelin tila",
    renderMode: "Renderöinnin tila",
    allowAddPanel: "Salli paneelin lisääminen",
    allowRemovePanel: "Salli paneelin poistaminen",
    noEntriesText: "Tyhjät merkinnät -teksti",
    panelAddText: "Paneelin tekstin lisääminen",
    panelRemoveText: "Paneelin tekstin poistaminen",
    isSinglePage: "Näytä kaikki elementit yhdellä sivulla",
    html: "Html",
    expression: "Lauseke",
    setValue: "Vastata",
    dataFormat: "Kuvan muoto",
    allowAddRows: "Salli rivien lisääminen",
    allowRemoveRows: "Salli rivien poistaminen",
    allowRowsDragAndDrop: "Salli rivin vetäminen ja pudottaminen",
    responsiveImageSizeHelp: "Ei sovelleta, jos määrität kuvan tarkan leveyden tai korkeuden.",
    minImageWidth: "Kuvan vähimmäisleveys",
    maxImageWidth: "Kuvan enimmäisleveys",
    minImageHeight: "Kuvan vähimmäiskorkeus",
    maxImageHeight: "Kuvan enimmäiskorkeus",
    minValue: "Vähimmäisarvo",
    maxValue: "Suurin arvo",
    minLength: "Vähimmäispituus",
    allowDigits: "Salli numerot",
    minCount: "Vähimmäismäärä",
    maxCount: "Enimmäismäärä",
    regex: "Regular expression",
    surveyvalidator: {
      text: "Virheviesti",
      expression: "Vahvistuksen lauseke"
    },
    totalText: "Rivin teksti yhteensä",
    totalType: "Tyyppi yhteensä",
    totalExpression: "Kokonaislauseke",
    totalDisplayStyle: "Kokonaisarvon näyttötyyli",
    totalCurrency: "Valuutta",
    totalFormat: "Muotoiltu merkkijono",
    logo: "Logo (URL-osoite tai base64-koodattu merkkijono)",
    questionsOnPageMode: "Kyselyn rakenne",
    maxTextLength: "Vastauksen enimmäispituus (merkkeinä)",
    maxOthersLength: "Kommentin enimmäispituus (merkkeinä)",
    autoGrowComment: "Laajenna kommenttialue tarvittaessa automaattisesti",
    allowResizeComment: "Salli käyttäjien muuttaa tekstialueiden kokoa",
    textUpdateMode: "Tekstikysymyksen arvon päivittäminen",
    focusOnFirstError: "Aseta kohdistus ensimmäiseen virheelliseen vastaukseen",
    checkErrorsMode: "Suorita vahvistus",
    navigateToUrl: "Siirry URL-osoitteeseen",
    navigateToUrlOnCondition: "Dynaaminen URL-osoite",
    completedBeforeHtml: "Merkintä, joka osoittaa, onko käyttäjä jo täyttänyt tämän kyselyn",
    completedHtml: "Kyselyn sivujen merkinnät suoritettu",
    completedHtmlOnCondition: "Dynaaminen kysely viimeistelee sivun merkinnät",
    loadingHtml: "Merkintä, joka näkyy, kun kyselymalli latautuu",
    commentText: "Kommenttialueen teksti",
    autocomplete: "Automaattisen täydennyksen tyyppi",
    labelTrue: "\"True\"-merkintä",
    labelFalse: "Epätosi-tunniste",
    allowClear: "Näytä Tyhjennä-painike",
    displayStyle: "Arvon näyttötyyli",
    format: "Muotoiltu merkkijono",
    maximumFractionDigits: "Murtolukujen enimmäismäärä",
    minimumFractionDigits: "Murtolukujen vähimmäismäärä",
    useGrouping: "Näytä ryhmittelyerottimet",
    allowMultiple: "Salli useita tiedostoja",
    allowImagesPreview: "Esikatsele kuvia",
    acceptedTypes: "Hyväksytyt tiedostotyypit",
    waitForUpload: "Odota, että lataus on valmis",
    needConfirmRemoveFile: "Vahvista tiedoston poistaminen",
    detailPanelMode: "Yksityiskohtapaneelin sijainti",
    minRowCount: "Rivien vähimmäismäärä",
    maxRowCount: "Rivien enimmäismäärä",
    confirmDelete: "Vahvista rivin poisto",
    confirmDeleteText: "Vahvistussanoma",
    paneldynamic: {
      confirmDelete: "Vahvista paneelin poisto"
    },
    panelCount: "Paneelien alkuperäinen määrä",
    minPanelCount: "Paneelien vähimmäismäärä",
    maxPanelCount: "Paneelien enimmäismäärä",
    panelsState: "Sisäpaneelin laajennustila",
    templateDescription: "Kuvaus-malli",
    templateTitle: "Otsikko-malli",
    panelPrevText: "Edellinen paneeli -painikkeen työkaluvihje",
    panelNextText: "Seuraava paneeli -painikkeen työkaluvihje",
    showRangeInProgress: "Näytä edistymispalkki",
    templateTitleLocation: "Kysymyksen otsikon sijainti",
    panelRemoveButtonLocation: "Poista paneelipainikkeen sijainti",
    hideIfRowsEmpty: "Piilota kysymys, jos rivejä ei ole",
    hideColumnsIfEmpty: "Piilota sarakkeet, jos rivejä ei ole",
    rateValues: "Muokatut hinta-arvot",
    rateCount: "Hintojen määrä",
    autoGenerate: "Miten korkoarvot määritetään?",
    hideIfChoicesEmpty: "Piilota kysymys, jos se ei sisällä vaihtoehtoja",
    hideNumber: "Piilota kysymyksen numero",
    minWidth: "Vähimmäisleveys (CSS-hyväksyttyinä arvoina)",
    maxWidth: "Suurin leveys (CSS-hyväksytyissä arvoissa)",
    width: "Leveys (CSS-hyväksytyissä arvoissa)",
    showHeader: "Näytä sarakeotsikot",
    horizontalScroll: "Näytä vaakasuora vierityspalkki",
    columnMinWidth: "Sarakkeen vähimmäisleveys (CSS-hyväksytyissä arvoissa)",
    rowTitleWidth: "Riviotsikon leveys (CSS-hyväksytyissä arvoissa)",
    valueTrue: "\"Tosi\"-arvo",
    valueFalse: "Epätosi-arvo",
    minErrorText: "Arvo on alle minimin -virhesanoma",
    maxErrorText: "\"Arvo ylittää maksimin\" -virhesanoma",
    otherErrorText: "Tyhjä kommentti -virhesanoma",
    keyDuplicationError: "Ei-yksilöllinen avainarvo -virhesanoma",
    minSelectedChoices: "Valitut valinnat vähintään:",
    maxSelectedChoices: "Valittujen vaihtoehtojen enimmäismäärä",
    showClearButton: "Näytä Tyhjennä-painike",
    showNumber: "Näytä paneelin numero",
    logoWidth: "Logon leveys (CSS-hyväksytyissä arvoissa)",
    logoHeight: "Logon korkeus (CSS:n hyväksymissä arvoissa)",
    readOnly: "Vain luku -tilassa",
    enableIf: "Muokattavissa, jos",
    emptyRowsText: "Ei rivejä -viesti",
    size: "Syöttökentän koko (merkkeinä)",
    separateSpecialChoices: "Erilliset erikoisvalinnat (Ei mitään, Muu, Valitse kaikki)",
    choicesFromQuestion: "Kopioi valinnat seuraavasta kysymyksestä",
    choicesFromQuestionMode: "Mitkä vaihtoehdot kopioidaan?",
    showCommentArea: "Näytä kommenttialue",
    commentPlaceholder: "Kommenttialueen paikkamerkki",
    displayRateDescriptionsAsExtremeItems: "Näytä nopeuskuvaukset ääriarvoina",
    rowsOrder: "Rivien järjestys",
    columnsLayout: "Sarakkeen asettelu",
    columnColCount: "Sisäkkäisten sarakkeiden määrä",
    state: "Paneelin laajenna tila",
    correctAnswer: "Oikea vastaus",
    defaultPanelValue: "Oletusarvot",
    cells: "Solujen tekstit",
    keyName: "Avainsarake",
    itemvalue: {
      text: "Vaihtoehtoinen teksti"
    },
    logoPosition: "Logo sijainti",
    addLogo: "Lisää logo...",
    changeLogo: "Muuta logo...",
    logoPositions: {
      none: "Poista logo",
      left: "Vasen",
      right: "Oikea",
      top: "Päällä",
      bottom: "Alla"
    },
    tabs: {
      general: "Yleinen",
      fileOptions: "Vaihtoehdot",
      html: "Html Editori",
      columns: "Sarakkeet",
      rows: "Rivit",
      choices: "Valinnat",
      items: "Kohteet",
      visibleIf: "Näkyvä jos",
      enableIf: "Käytössä jos",
      requiredIf: "Vaadittu jos",
      rateValues: "Järjestä arvot",
      choicesByUrl: "Valintoja verkosta",
      matrixChoices: "Oletus valinnat",
      multipleTextItems: "Tekstinsyötöt",
      numbering: "Numerointi",
      validators: "Validattorit",
      navigation: "Navigointi",
      question: "Kysymys",
      pages: "Sivut",
      timer: "Ajastin / tietovisa",
      calculatedValues: "Lasketut arvot",
      triggers: "Triggerit",
      templateTitle: "Mallin otsikko",
      totals: "Yhteensä",
      logic: "Logiikka",
      layout: "Layout",
      data: "Data",
      validation: "Validointi",
      cells: "Solut",
      showOnCompleted: "Näytä kun valmis",
      logo: "Logo kyselyn otsikossa",
      slider: "Liukusäädin",
      expression: "Lauseke",
      others: "Muut"
    },
    editProperty: "Muokkaa ominaisuutta'{0}'",
    items: "[ Kohteet: {0} ]",
    choicesVisibleIf: "Valinnat näkyvät, jos",
    choicesEnableIf: "Valinnat ovat valittavissa, jos",
    columnsEnableIf: "Sarakkeet ovat näkyvissä, jos",
    rowsEnableIf: "Rivit ovat näkyvissä, jos",
    indent: "Sisennysten lisääminen",
    panel: {
      indent: "Ulompien sisennysten lisääminen"
    },
    innerIndent: "Sisäisten sisennysten lisääminen",
    defaultValueFromLastRow: "Oletusarvojen ottaminen viimeiseltä riviltä",
    defaultValueFromLastPanel: "Ota oletusarvot viimeisestä paneelista",
    enterNewValue: "Anna arvo.",
    noquestions: "Kyselyssä ei ole yhtään kysymystä.",
    createtrigger: "Luo triggeri",
    titleKeyboardAdornerTip: "Paina Enter -painiketta muokataksesi",
    keyboardAdornerTip: "Voit muokata kohdetta painamalla Enter -painiketta, poistaa kohteen painamalla poistopainiketta, siirtää kohdetta painamalla Alt plus nuoli ylös tai nuoli alas",
    triggerOn: "Päällä ",
    triggerMakePagesVisible: "Tee sivuista näkyviä:",
    triggerMakeQuestionsVisible: "Tee elementit näkyviksi:",
    triggerCompleteText: "Valmista kysely, jos se on onnistunut.",
    triggerNotSet: "Triggeriä ei ole asetettu",
    triggerRunIf: "Suorita jos",
    triggerSetToName: "Muuta arvoa: ",
    triggerFromName: "Kopioi arvo kohteesta: ",
    triggerRunExpression: "Suorita tämä lauseke:",
    triggerSetValue: "kohtaan: ",
    triggerGotoName: "Siirry kysymykseen:",
    triggerIsVariable: "Älä lisää muuttujaa kyselyn tulokseen.",
    triggerRunExpressionEmpty: "Anna kelvollinen lauseke",
    emptyExpressionPlaceHolder: "Kirjoita lauseke tähän...",
    noFile: "Tiedostoa ei ole valittuna",
    clearIfInvisible: "Poista arvo, jos kysymys piilotetaan",
    valuePropertyName: "Arvo-ominaisuuden nimi",
    searchEnabled: "Ota haku käyttöön",
    hideSelectedItems: "Piilota valitut kohteet",
    closeOnSelect: "Sulkee valinnan jälkeisen avattavan valikon.",
    signatureWidth: "Allekirjoituksen leveys",
    signatureHeight: "Allekirjoituksen korkeus",
    verticalAlign: "Pystysuuntainen tasaus",
    alternateRows: "Vaihtoehtoiset rivit",
    columnsVisibleIf: "Sarakkeet ovat näkyvissä, jos",
    rowsVisibleIf: "Rivit ovat näkyvissä, jos",
    otherPlaceholder: "Kommenttialueen paikkamerkki",
    signaturepad: {
      showPlaceholder: "Paikkamerkin näyttäminen",
      placeholder: "Paikkamerkkiteksti",
      signatureWidth: "Allekirjoitusalueen leveys",
      signatureHeight: "Allekirjoitusalueen korkeus",
      signatureAutoScaleEnabled: "Allekirjoitusalueen automaattinen skaalaus",
      penMinWidth: "Kynän vähimmäisleveys",
      penMaxWidth: "Kynän enimmäisleveys"
    },
    filePlaceholder: "Tiedoston paikkamerkkiteksti",
    photoPlaceholder: "Valokuvan paikkamerkkiteksti",
    fileOrPhotoPlaceholder: "Tiedoston tai valokuvan paikkamerkkiteksti",
    rateType: "Hinnan tyyppi"
  },
  // Property values
  pv: {
    "true": "tosi",
    "false": "väärä",
    file: "Paikalliset tiedostot",
    camera: "Kamera",
    "file-camera": "Paikalliset tiedostot tai kamera",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "desimaali",
    currency: "valuutta",
    percent: "prosentti",
    firstExpanded: "firstExpanded",
    off: "off",
    onpanel: "Aloita jokaisesta paneelista",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    tab: "Välilehdet",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    right: "Oikea",
    leftRight: "Vasen ja oikea",
    color: "väri",
    date: "päivämäärä",
    datetime: "päivämäärä ja aika",
    "datetime-local": "datetime-local",
    email: "Sähköposti",
    month: "kuukausi",
    number: "numero",
    password: "salasana",
    range: "etäisyys",
    tel: "puh",
    text: "Tekstiviesti",
    time: "Aika",
    url: "URL",
    week: "viikko",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    onHiddenContainer: "Kun kysymys tai sen paneeli/sivu piilotetaan",
    contain: "Sisältää",
    cover: "Kansi",
    fill: "Täyttää",
    clearInvisibleValues: {
      none: "Koskaan"
    },
    inputType: {
      color: "Väri",
      date: "Päivämäärä",
      "datetime-local": "Päivämäärä ja kellonaika",
      email: "Sähköposti",
      month: "Kuukausi",
      number: "Numero",
      password: "Salasana",
      range: "Etäisyys",
      tel: "Puhelinnumero",
      text: "Tekstiviesti",
      time: "Aika",
      url: "URL",
      week: "Viikko"
    },
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    onValueChanging: "Ennen vastauksen muuttamista",
    standard: "standard",
    singlePage: "single page",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
    pages: "Valmiit sivut",
    questions: "Vastatut kysymykset",
    requiredQuestions: "Vastatut vaaditut kysymykset",
    correctQuestions: "Kelvolliset vastaukset",
    buttons: "Valmiit sivut (painike Käyttöliittymä)",
    underInput: "Tulon alla",
    underTitle: "Otsikon alla",
    onBlur: "Sumennuksessa",
    onTyping: "Kirjoittamisen aikana",
    underRow: "Rivin alla",
    underRowSingle: "Rivin alla näkyy vain yksi paneeli",
    showNavigationButtons: {
      none: "Piilevä"
    },
    showProgressBar: {
      off: "Piilevä"
    },
    showTimerPanel: {
      none: "Piilevä"
    },
    showTimerPanelMode: {
      all: "Molemmat"
    },
    detailPanelMode: {
      none: "Piilevä"
    },
    addRowLocation: {
      default: "Riippuu matriisin asettelusta"
    },
    panelsState: {
      default: "Käyttäjät eivät voi laajentaa tai kutistaa paneeleja",
      collapsed: "Kaikki paneelit on tiivistetty",
      expanded: "Kaikki paneelit on laajennettu"
    },
    widthMode: {
      auto: "Auto",
      static: "Staattinen",
      responsive: "Reagoiva"
    },
    imageFit: {
      none: "Ei lainkaan",
      contain: "Sisältää",
      cover: "Kansi",
      fill: "Täyttää"
    },
    contentMode: {
      auto: "Auto",
      image: "Kuva",
      video: "Video",
      youtube: "YouTubessa"
    },
    displayMode: {
      auto: "Auto",
      buttons: "Painikkeet",
      dropdown: "Avattava valikko"
    },
    rateColorMode: {
      default: "Laiminlyönti"
    },
    autoGenerate: {
      "true": "Synnyttää",
      "false": "Kirjoita manuaalisesti"
    },
    rateType: {
      labels: "Otsikot",
      stars: "Tähteä",
      smileys: "Hymiöt"
    }
  },
  // Operators
  op: {
    empty: "on tyhjä",
    notempty: "ei ole tyhjä",
    equal: "yhtäsuurikuin",
    notequal: "ei ole yhtäsuurikuin",
    contains: "sisältää",
    notcontains: "ei sisällä",
    anyof: "mikä tahansa",
    allof: "kaikki",
    greater: "suurempi",
    less: "vähemmän",
    greaterorequal: "suurempi tai yhtäsuurikuin",
    lessorequal: "vähemmän tai yhtäsuurikuin",
    and: "ja",
    or: "tai"
  },
  // Embed window
  ew: {
    angular: "Käytä Angular versiota",
    jquery: "Käytä jQuery versiota",
    knockout: "Käytä Knockout versiota",
    react: "Käytä React versiota",
    vue: "Käytä Vue versiota",
    bootstrap: "Bootstrap työkalulle",
    modern: "Moderni teema",
    default: "Oletus teema",
    orange: "Oranssi teema",
    darkblue: "Tummansininen teema",
    darkrose: "Tumma ruusu teema",
    stone: "Kiviteema",
    winter: "Talvi teema",
    winterstone: "Talvi-kivi-teema",
    showOnPage: "Näytä kysely sivulla",
    showInWindow: "Näytä kysely ikkunassa",
    loadFromServer: "Lataa kysely palvelimelta JSON muodossa",
    titleScript: "Skriptit ja tyylit",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Valitse sivu testataksesi sitä:",
    showInvisibleElements: "Näytä näkymätön elementti",
    hideInvisibleElements: "Piilota näkymättömät elementit"
  },
  validators: {
    answercountvalidator: "vastausten määrä",
    emailvalidator: "sähköposti",
    expressionvalidator: "lauseke",
    numericvalidator: "lukumääräinen",
    regexvalidator: "säännöllinen lauseke",
    textvalidator: "teksti"
  },
  triggers: {
    completetrigger: "valmis kysely",
    setvaluetrigger: "aseta arvo",
    copyvaluetrigger: "kopioi arvo",
    skiptrigger: "siirry kysymykseen",
    runexpressiontrigger: "suorita lauseke",
    visibletrigger: "muuta näkyvyyttä (vanhentunut)"
  },
  pehelp: {
    cookieName: "Evästeet estävät käyttäjiä täyttämästä samaa kyselyä kahdesti.",
    size: "Muuttaa syöttökentän näkyvän alueen kokoa. Käytä <b>Validointi → enimmäispituus</b> -asetusta rajoittaaksesi tulon pituutta.",
    format: "Käytä {0} todellisen arvon paikkamerkkinä.",
    totalText: "Näkyy vain, kun vähintään yhdessä sarakkeessa on Summa-tyyppi tai Summa-lauseke.",
    acceptedTypes: "Katso lisätietoja määritteen [accept](https://www.w3schools.com/tags/att_input_accept.asp) kuvauksesta.",
    columnColCount: "Koskee vain radioryhmä- ja valintaruutusolutyyppejä.",
    autocomplete: "Lisätietoja on [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) -määritteen kuvauksessa.",
    valueName: "Jos et määritä tätä ominaisuutta, vastaus tallennetaan Name-ominaisuuden määrittämään kenttään.",
    choicesbyurl: {
      valueName: " "
    },
    keyName: "Jos määritetty sarake sisältää samat arvot, kysely heittää \"Ei-yksilöllinen avainarvo\" -virheen.",
    filePlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot\" tai kun kamera ei ole käytettävissä",
    photoPlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Kamera\".",
    fileOrPhotoPlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot tai kamera\"."
  },
  // Properties
  p: {
    title: {
      name: "otsikko",
      title: "Jätä se tyhjäksi, jos se on sama kuin 'Nimi'"
    },
    multiSelect: "Salli monivalinta",
    showLabel: "Näytä kuvatekstit",
    value: "Arvo",
    tabAlign: "Sarkaimen tasaus",
    sourceType: "Lähteen tyyppi",
    fitToContainer: "Sovita konttiin",
    setValueExpression: "Arvolausekkeen määrittäminen",
    description: "description",
    logoFit: "Logon sopivuus",
    pages: "Sivut",
    questions: "Kysymyksiä",
    triggers: "triggers",
    calculatedValues: "Lasketut arvot",
    surveyId: "Kyselyn tunnus",
    surveyPostId: "Kyselyn viestin tunnus",
    surveyShowDataSaving: "Kysely näyttää tietojen tallennuksen",
    questionDescriptionLocation: "Kysymyksen kuvauksen sijainti",
    progressBarType: "Edistymispalkin tyyppi",
    showTOC: "Näytä sisällysluettelo",
    tocLocation: "Toc-sijainti",
    questionTitlePattern: "Kysymyksen otsikkomalli",
    widthMode: "Leveys-tila",
    showBrandInfo: "Näytä brändin tiedot",
    useDisplayValuesInDynamicTexts: "Näyttöarvojen käyttäminen dynaamisissa teksteissä",
    visibleIf: "visibleIf",
    titleLocation: "titleLocation",
    descriptionLocation: "Kuvaus, sijainti",
    defaultValueExpression: "Oletusarvon lauseke",
    requiredIf: "requiredIf",
    resetValueIf: "Nollaa arvo, jos",
    setValueIf: "Aseta arvo, jos",
    validators: "validators",
    bindings: "Siteet",
    renderAs: "Hahmonna muodossa",
    attachOriginalItems: "Alkuperäisten kohteiden liittäminen",
    choices: "choices",
    choicesByUrl: "choicesByUrl",
    currency: "currency",
    cellHint: "Solun vihje",
    isUnique: "On ainutlaatuinen",
    showInMultipleColumns: "Näytä useissa sarakkeissa",
    totalMaximumFractionDigits: "Murtolukujen enimmäismäärä yhteensä",
    totalMinimumFractionDigits: "Murtolukujen vähimmäismäärä",
    columns: "columns",
    detailElements: "Yksityiskohtaiset elementit",
    allowAdaptiveActions: "Salli mukautuvat toiminnot",
    defaultRowValue: "defaultRowValue",
    detailPanelShowOnAdding: "Tietopaneeli näyttää lisäyksen yhteydessä",
    choicesLazyLoadEnabled: "Valinnat laiska kuorma käytössä",
    choicesLazyLoadPageSize: "Valinnat laiska lataussivun koko",
    inputFieldComponent: "Syöttökentän komponentti",
    itemComponent: "Nimikkeen osa",
    min: "Min",
    max: "Max",
    minValueExpression: "Pienin arvon lauseke",
    maxValueExpression: "Enimmäisarvon lauseke",
    step: "Askel",
    dataList: "Tietoluettelo",
    itemSize: "itemSize",
    elements: "Luonnonvoimat",
    content: "Sisältö",
    navigationButtonsVisibility: "navigationButtonsVisibility",
    navigationTitle: "Navigoinnin otsikko",
    navigationDescription: "Navigoinnin kuvaus",
    longTap: "Pitkä napautus",
    autoGrow: "Automaattinen kasvu",
    allowResize: "Salli koon muuttaminen",
    acceptCarriageReturn: "Hyväksy vaunun palautus",
    displayMode: "Näyttötila",
    rateType: "Hinnan tyyppi",
    label: "label",
    contentMode: "Sisältö-tila",
    imageFit: "Kuva sopii",
    altText: "Vaihtoehtoinen teksti",
    height: "Korkeus",
    penColor: "Kynän väri",
    backgroundColor: "Taustaväri",
    templateElements: "Mallin elementit",
    operator: "Operaattori",
    isVariable: "On vaihteleva",
    runExpression: "Suorita lauseke",
    showCaption: "Näytä kuvateksti",
    iconName: "Kuvakkeen nimi",
    iconSize: "Kuvakkeen koko",
    precision: "Tarkkuus",
    matrixDragHandleArea: "Matriisin vetokahva-alue",
    backgroundImage: "Taustakuvan",
    backgroundImageFit: "Taustakuvan sovitus",
    backgroundImageAttachment: "Taustakuvan liite",
    backgroundOpacity: "Taustan peittävyys",
    selectToRankEnabled: "Valitse sijoitus käytössä",
    selectToRankAreasLayout: "Valitse alueiden asettelu",
    allowCameraAccess: "Salli kameran käyttö",
    scaleColorMode: "Skaalaa väriä -tila",
    rateColorMode: "Arvioi väritila",
    templateTabTitle: "Malli-välilehden otsikko",
    templateVisibleIf: "Malli näkyvissä, jos",
    copyDisplayValue: "Kopioi näyttöarvo"
  },
  theme: {
    "--background": "Taustaväri",
    "--background-dim-light": "Taustan himmeä vaalea väri",
    "--primary-foreground": "Ensisijainen etualan väri",
    "--foreground": "Edustan väri",
    "--base-unit": "Perusyksikkö",
    advancedMode: "Edistynyt tila",
    groupGeneral: "Yleiset",
    groupHeader: "Otsikko",
    groupBackground: "Tausta",
    groupAppearance: "Ulkonäkö",
    themeName: "Teema",
    themeMode: "Kysymyksen ulkonäkö",
    themeModePanels: "Laiminlyönti",
    themeModeLightweight: "Ilman paneeleja",
    themePaletteLight: "Valo",
    themePaletteDark: "Tumma",
    primaryColor: "Korostusväri",
    primaryDefaultColor: "Laiminlyönti",
    primaryDarkColor: "Häilyä",
    primaryLightColor: "Valittu",
    coverTitleForecolor: "Otsikon etuväri",
    coverDescriptionForecolor: "Kuvaus etuväri",
    coverOverlapEnabled: "Limittyä",
    backgroundDimColor: "Taustaväri",
    backgroundImage: "Taustakuvan",
    backgroundImageFitAuto: "Auto",
    backgroundImageFitCover: "Kansi",
    backgroundImageFitContain: "Sisältää",
    backgroundImageFitFill: "Venyä",
    backgroundImageFitTile: "Laatta",
    backgroundOpacity: "Läpikuultamattomuus",
    backgroundImageAttachmentFixed: "Kiinteä",
    backgroundImageAttachmentScroll: "Vierittää",
    panelBackgroundTransparency: "Paneelin taustan peittävyys",
    questionBackgroundTransparency: "Taustan peittävyyden kyseenalaistaminen",
    questionTitle: "Kysymyksen otsikon fontti",
    editorPanel: "Syötä elementti",
    backgroundCornerRadius: "Taustan ja kulman säde",
    backcolor: "Oletustausta",
    hovercolor: "Vie hiiri taustalle",
    borderDecoration: "Reunusten koristelu",
    accentBackground: "Aksentti tausta",
    accentForeground: "Aksentti etualalla",
    primaryForecolor: "Oletusväri",
    primaryForecolorLight: "Käytöstä poistettu väri",
    colorsTitle: "Värit",
    font: "Fontti",
    lines: "Rivit",
    borderDefault: "Tummempi",
    borderLight: "Sytytin",
    fontFamily: "Fonttiperhe",
    fontSize: "Kirjasinkoko",
    color: "Väri",
    placeholderColor: "Paikkamerkin väri",
    size: "Koko",
    fontWeightRegular: "Säännöllinen",
    fontWeightHeavy: "Raskas",
    fontWeightSemiBold: "Puoliksi lihavoitu",
    fontWeightBold: "Rohkea",
    scale: "Mittakaava",
    cornerRadius: "Kulman säde",
    surveyTitle: "Kyselyn otsikon fontti",
    surveyDescription: "Kyselyn kuvauksen fontti",
    pageTitle: "Sivun otsikon fontti",
    titleFont: "Otsikon fontti",
    descriptionFont: "Kuvauksen fontti",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Lisää varjotehoste",
    opacity: "Läpikuultamattomuus",
    boxShadowBlur: "Hämärtyä",
    boxShadowSpread: "Leviäminen",
    boxShadowDrop: "Pisara",
    boxShadowInner: "Sisäinen",
    shadow: "Varjo-tehosteet",
    headerView: "Näkymä",
    headerViewBasic: "Emäksinen",
    headerViewAdvanced: "Edistynyt",
    coverInheritWidthFrom: "Sisältöalueen leveys",
    coverInheritWidthFromSurvey: "Sama kuin kyselyssä",
    coverInheritWidthFromContainer: "Sovita konttiin",
    coverTextAreaWidth: "Tekstin leveys",
    coverBackgroundColorSwitch: "Taustaväri",
    coverBackgroundColorNone: "Ei lainkaan",
    coverBackgroundColorAccentColor: "Korostusväri",
    coverBackgroundColorCustom: "Tapa",
    horizontalAlignmentLeft: "Vasen",
    horizontalAlignmentCenter: "Keskus",
    horizontalAlignmentRight: "Oikea",
    verticalAlignmentTop: "Huippu",
    verticalAlignmentMiddle: "Keskus",
    verticalAlignmentBottom: "Pohja",
    logoPosition: "Logon sijainti",
    coverTitlePosition: "Otsikon sijainti",
    coverDescriptionPosition: "Kuvauksen sijainti",
    names: {
      default: "Laiminlyönti",
      sharp: "Terävä",
      borderless: "Reunukseton",
      flat: "Tasainen",
      plain: "Tasanko",
      doubleborder: "Kaksinkertainen reunus",
      layered: "Kerroksellinen",
      solid: "Kiinteä",
      threedimensional: ".3D",
      contrast: "Kontrasti"
    },
    colors: {
      teal: "Tavi",
      blue: "Sininen",
      purple: "Purppura",
      orchid: "Orkidea",
      tulip: "Tulppaani",
      brown: "Ruskea",
      green: "Vihreä"
    }
  }
};
// Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["fi"] = fiStrings;

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "Avattava monivalintavalikko"
// qt.buttongroup: "Button Group" => "Painike-ryhmä"
// ed.surveySettings: "Survey Settings" => "Kyselyn asetukset"
// ed.surveySettingsTooltip: "Open survey settings" => "Avaa kyselyn asetukset"
// ed.prevSelected: "Select previous" => "Valitse edellinen"
// ed.nextSelected: "Select next" => "Valitse seuraava"
// ed.surveyTypeName: "Survey" => "Tutkimus"
// ed.pageTypeName: "Page" => "Sivu"
// ed.panelTypeName: "Panel" => "Paneeli"
// ed.questionTypeName: "Question" => "Kysymys"
// ed.columnTypeName: "Column" => "Sarake"
// ed.themeSurvey: "Themes" => "Teemoja"
// ed.defaultV2Theme: "Default" => "Laiminlyönti"
// ed.modernTheme: "Modern" => "Nykyaikainen"
// ed.defaultTheme: "Default (legacy)" => "Oletus (vanha)"
// ed.jsonHideErrors: "Hide errors" => "Piilota virheet"
// ed.jsonShowErrors: "Show errors" => "Näytä virheet"
// ed.showMoreChoices: "Show more" => "Näytä lisää"
// ed.showLessChoices: "Show less" => "Näytä vähemmän"
// ed.propertyGridFilteredTextPlaceholder: "Type to search..." => "Kirjoita etsiäksesi..."
// ed.toolboxChoiceCategory: "Choice Questions" => "Valintaa koskevat kysymykset"
// ed.toolboxTextCategory: "Text Input Questions" => "Tekstinsyöttökysymykset"
// ed.toolboxContainersCategory: "Containers" => "Säiliöt"
// ed.toolboxMatrixCategory: "Matrix Questions" => "Matriisin kysymykset"
// ed.toolboxMiscCategory: "Misc" => "Muut"
// ed.translationPropertyGridTitle: "Language Settings" => "Kieliasetukset"
// ed.themePropertyGridTitle: "Theme Settings" => "Teeman asetukset"
// ed.translationLanguages: "Languages" => "Kielet"
// ed.translationShowUsedStringsOnly: "Used Strings Only" => "Vain käytetyt merkkijonot"
// ed.translationPlaceHolder: "Translation..." => "Käännös..."
// ed.themeExportButton: "Export" => "Vienti"
// ed.themeImportButton: "Import" => "Tuoda"
// ed.carryForwardChoicesCopied: "Choices are copied from" => "Valinnat kopioidaan kohteesta"
// ed.htmlPlaceHolder: "HTML content will be here." => "HTML-sisältö on täällä."
// ed.panelPlaceHolder: "Drop a question from the toolbox here." => "Pudota kysymys työkalupakista tähän."
// ed.surveyPlaceHolder: "The survey is empty. Drag an element from the toolbox or click the button below." => "Kysely on tyhjä. Vedä elementti työkalupakista tai napsauta alla olevaa painiketta."
// ed.imagePlaceHolder: "Drag and drop an image here or click the button below and choose an image to upload" => "Vedä ja pudota kuva tähän tai napsauta alla olevaa painiketta ja valitse ladattava kuva"
// ed.imageChooseImage: "Choose Image" => "Valitse kuva"
// ed.addNewTypeQuestion: "Add {0}" => "Lisää {0}"
// ed.chooseLogoPlaceholder: "[LOGO]" => "[LOGO]"
// ed.auto: "auto" => "auto"
// ed.choices_Item: "Item " => "Kohta "
// lg.addNewItem: "Add New Rule" => "Lisää uusi sääntö"
// lg.empty_tab: "Create a rule to customize the flow of the survey." => "Luo sääntö kyselyn kulun mukauttamista varten."
// lg.page_enableName: "Enable (disable) page" => "Ota käyttöön (poista käytöstä) sivu"
// lg.column_visibilityName: "Show (hide) column" => "Näytä (piilota) -sarake"
// lg.column_enableName: "Enable (disable) column" => "Ota käyttöön (poista käytöstä) sarake"
// lg.column_requireName: "Make column required" => "Tee sarakkeesta pakollinen"
// lg.itemEmptyExpressionText: "New rule" => "Uusi sääntö"
// lg.column_visibilityText: "make column {0} of question {1} visible" => "Tee kysymyksen {1} sarakkeesta {0} näkyvä"
// lg.column_enableText: "make column {0} of question {1} enable" => "Ota kysymyksen sarake {0} {1} käyttöön"
// lg.column_requireText: "make column {0} of question {1} required" => "Tee kysymyksen sarake {0} {1} pakollinen"
// lg.trigger_setvalueEmptyText: "clear question value: {0}" => "Selkeän kysymyksen arvo: {0}"
// lg.showAllQuestions: "All Questions" => "Kaikki kysymykset"
// lg.showAllActionTypes: "All Action Types" => "Kaikki toimintotyypit"
// lg.uncompletedRule_title: "Logical rules are incomplete" => "Loogiset säännöt ovat epätäydellisiä"
// lg.uncompletedRule_text: "You have not completed some of the logical rules. If you leave the tab now, the changes will be lost. Do you still want to leave the tab without completing the changes?" => "Et ole suorittanut joitakin loogisia sääntöjä. Jos poistut välilehdestä nyt, muutokset menetetään. Haluatko silti poistua välilehdeltä suorittamatta muutoksia?"
// lg.uncompletedRule_apply: "Yes" => "Kyllä"
// lg.uncompletedRule_cancel: "No, I want to complete the rules" => "Ei, haluan täyttää säännöt"
// pe.clear: "Clear" => "Selvä"
// pe.set: "Set" => "Joukko"
// pe.change: "Change" => "Muuttaa"
// pe.close: "Close" => "Sulkea"
// pe.removeItem: "Click to remove the item..." => "Poista kohde napsauttamalla..."
// pe.dragItem: "Drag the item" => "Kohteen vetäminen"
// pe.doneEditing: "Done" => "Valmis"
// pe.emptyValue: "Value is empty" => "Arvo on tyhjä"
// pe.fastEntryNonUniqueError: "Value '{0}' is not unique" => "Arvo \"{0}\" ei ole ainutkertainen"
// pe.fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}" => "Rajoita tuotteiden määrä {0} {1}"
// pe.fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2" => "Voit asettaa tiedot seuraavassa muodossa:\narvo1|teksti\narvo2"
// pe.showPreviewBeforeComplete: "Preview answers before submitting the survey" => "Esikatsele vastauksia ennen kyselyn lähettämistä"
// pe.overridingPropertyPrefix: "Set by " => "Asettaja "
// pe.propertyNameIsIncorrect: "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\"." => "Älä käytä varattuja sanoja: \"kohde\", \"valinta\", \"paneeli\", \"rivi\"."
// pe.listIsEmpty@choices: "No choices have been added yet" => "Vaihtoehtoja ei ole vielä lisätty"
// pe.addNew@choices: "Add a choice" => "Lisää vaihtoehto"
// choicesbyurl.valueName: "Get values from the following JSON field" => "Hae arvot seuraavasta JSON-kentästä"
// pe.imageLinkName: "Get image URLs from the following JSON field" => "Hae kuvien URL-osoitteet seuraavasta JSON-kentästä"
// pe.allowEmptyResponse: "Allow empty response" => "Salli tyhjä vastaus"
// pe.and: "and" => "ja"
// pe.or: "or" => "tai"
// pe.emptyLogicPopupMessage: "Select a question to start configuring conditions." => "Aloita ehtojen määrittäminen valitsemalla kysymys."
// pe.if: "If" => "Jos"
// pe.then: "then" => "sitten"
// pe.setToName: "Target question" => "Kohteen kysymys"
// pe.fromName: "Question to copy answer from" => "Kysymys, josta vastaus kopioidaan"
// pe.gotoName: "Question to skip to" => "Kysymys, johon kannattaa siirtyä"
// pe.ruleIsNotSet: "Rule is incorrect" => "Sääntö on virheellinen"
// pe.includeIntoResult: "Include into survey results" => "Sisällytä kyselyn tuloksiin"
// pe.portraitOrientation: "Switch to portrait orientation" => "Pystysuuntaan vaihtaminen"
// image.imageHeight: "Image height (in CSS-accepted values)" => "Kuvan korkeus (CSS:n hyväksymissä arvoissa)"
// image.imageWidth: "Image width (in CSS-accepted values)" => "Kuvan leveys (CSS-hyväksytyissä arvoissa)"
// page.maxTimeToFinish: "Time limit to finish the page (in seconds)" => "Sivun viimeistelyn aikaraja (sekunteina)"
// question.page: "Parent page" => "Pääsivu"
// pe.noEntriesText: "Empty entries text" => "Tyhjät merkinnät -teksti"
// pe.setValue: "Answer" => "Vastata"
// pe.dataFormat: "Image format" => "Kuvan muoto"
// pe.allowAddRows: "Allow adding rows" => "Salli rivien lisääminen"
// pe.allowRemoveRows: "Allow removing rows" => "Salli rivien poistaminen"
// pe.allowRowsDragAndDrop: "Allow row drag and drop" => "Salli rivin vetäminen ja pudottaminen"
// pe.responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height." => "Ei sovelleta, jos määrität kuvan tarkan leveyden tai korkeuden."
// pe.minImageWidth: "Minimum image width" => "Kuvan vähimmäisleveys"
// pe.maxImageWidth: "Maximum image width" => "Kuvan enimmäisleveys"
// pe.minImageHeight: "Minimum image height" => "Kuvan vähimmäiskorkeus"
// pe.maxImageHeight: "Maximum image height" => "Kuvan enimmäiskorkeus"
// surveyvalidator.text: "Error message" => "Virheviesti"
// surveyvalidator.expression: "Validation expression" => "Vahvistuksen lauseke"
// pe.totalText: "Total row text" => "Rivin teksti yhteensä"
// pe.totalType: "Total type" => "Tyyppi yhteensä"
// pe.totalExpression: "Total expression" => "Kokonaislauseke"
// pe.totalDisplayStyle: "Total value display style" => "Kokonaisarvon näyttötyyli"
// pe.totalCurrency: "Currency" => "Valuutta"
// pe.totalFormat: "Formatted string" => "Muotoiltu merkkijono"
// pe.logo: "Logo (URL or base64-encoded string)" => "Logo (URL-osoite tai base64-koodattu merkkijono)"
// pe.questionsOnPageMode: "Survey structure" => "Kyselyn rakenne"
// pe.maxTextLength: "Maximum answer length (in characters)" => "Vastauksen enimmäispituus (merkkeinä)"
// pe.maxOthersLength: "Maximum comment length (in characters)" => "Kommentin enimmäispituus (merkkeinä)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Laajenna kommenttialue tarvittaessa automaattisesti"
// pe.allowResizeComment: "Allow users to resize text areas" => "Salli käyttäjien muuttaa tekstialueiden kokoa"
// pe.textUpdateMode: "Update text question value" => "Tekstikysymyksen arvon päivittäminen"
// pe.focusOnFirstError: "Set focus on the first invalid answer" => "Aseta kohdistus ensimmäiseen virheelliseen vastaukseen"
// pe.checkErrorsMode: "Run validation" => "Suorita vahvistus"
// pe.navigateToUrl: "Navigate to URL" => "Siirry URL-osoitteeseen"
// pe.navigateToUrlOnCondition: "Dynamic URL" => "Dynaaminen URL-osoite"
// pe.completedBeforeHtml: "Markup to show if the user already filled out this survey" => "Merkintä, joka osoittaa, onko käyttäjä jo täyttänyt tämän kyselyn"
// pe.completedHtml: "Survey Complete page markup" => "Kyselyn sivujen merkinnät suoritettu"
// pe.completedHtmlOnCondition: "Dynamic Survey Complete page markup" => "Dynaaminen kysely viimeistelee sivun merkinnät"
// pe.loadingHtml: "Markup to show while survey model is loading" => "Merkintä, joka näkyy, kun kyselymalli latautuu"
// pe.commentText: "Comment area text" => "Kommenttialueen teksti"
// pe.autocomplete: "Autocomplete type" => "Automaattisen täydennyksen tyyppi"
// pe.labelTrue: "\"True\" label" => "\"True\"-merkintä"
// pe.labelFalse: "\"False\" label" => "Epätosi-tunniste"
// pe.allowClear: "Show the Clear button" => "Näytä Tyhjennä-painike"
// pe.displayStyle: "Value display style" => "Arvon näyttötyyli"
// pe.format: "Formatted string" => "Muotoiltu merkkijono"
// pe.maximumFractionDigits: "Maximum fractional digits" => "Murtolukujen enimmäismäärä"
// pe.minimumFractionDigits: "Minimum fractional digits" => "Murtolukujen vähimmäismäärä"
// pe.useGrouping: "Display grouping separators" => "Näytä ryhmittelyerottimet"
// pe.allowMultiple: "Allow multiple files" => "Salli useita tiedostoja"
// pe.allowImagesPreview: "Preview images" => "Esikatsele kuvia"
// pe.acceptedTypes: "Accepted file types" => "Hyväksytyt tiedostotyypit"
// pe.waitForUpload: "Wait for the upload to complete" => "Odota, että lataus on valmis"
// pe.needConfirmRemoveFile: "Confirm file deletion" => "Vahvista tiedoston poistaminen"
// pe.detailPanelMode: "Detail panel location" => "Yksityiskohtapaneelin sijainti"
// pe.minRowCount: "Minimum row count" => "Rivien vähimmäismäärä"
// pe.maxRowCount: "Maximum row count" => "Rivien enimmäismäärä"
// pe.confirmDelete: "Confirm row deletion" => "Vahvista rivin poisto"
// pe.confirmDeleteText: "Confirmation message" => "Vahvistussanoma"
// paneldynamic.confirmDelete: "Confirm panel deletion" => "Vahvista paneelin poisto"
// pe.panelCount: "Initial panel count" => "Paneelien alkuperäinen määrä"
// pe.minPanelCount: "Minimum panel count" => "Paneelien vähimmäismäärä"
// pe.maxPanelCount: "Maximum panel count" => "Paneelien enimmäismäärä"
// pe.panelsState: "Inner panel expand state" => "Sisäpaneelin laajennustila"
// pe.templateDescription: "Description template" => "Kuvaus-malli"
// pe.templateTitle: "Title template" => "Otsikko-malli"
// pe.panelPrevText: "Previous Panel button tooltip" => "Edellinen paneeli -painikkeen työkaluvihje"
// pe.panelNextText: "Next Panel button tooltip" => "Seuraava paneeli -painikkeen työkaluvihje"
// pe.showRangeInProgress: "Show progress bar" => "Näytä edistymispalkki"
// pe.templateTitleLocation: "Question title location" => "Kysymyksen otsikon sijainti"
// pe.panelRemoveButtonLocation: "Remove Panel button location" => "Poista paneelipainikkeen sijainti"
// pe.hideIfRowsEmpty: "Hide the question if there are no rows" => "Piilota kysymys, jos rivejä ei ole"
// pe.hideColumnsIfEmpty: "Hide columns if there are no rows" => "Piilota sarakkeet, jos rivejä ei ole"
// pe.rateValues: "Custom rate values" => "Muokatut hinta-arvot"
// pe.rateCount: "Rate count" => "Hintojen määrä"
// pe.autoGenerate: "How to specify rate values?" => "Miten korkoarvot määritetään?"
// pe.hideIfChoicesEmpty: "Hide the question if it contains no choices" => "Piilota kysymys, jos se ei sisällä vaihtoehtoja"
// pe.hideNumber: "Hide question number" => "Piilota kysymyksen numero"
// pe.minWidth: "Minimum width (in CSS-accepted values)" => "Vähimmäisleveys (CSS-hyväksyttyinä arvoina)"
// pe.maxWidth: "Maximum width (in CSS-accepted values)" => "Suurin leveys (CSS-hyväksytyissä arvoissa)"
// pe.width: "Width (in CSS-accepted values)" => "Leveys (CSS-hyväksytyissä arvoissa)"
// pe.showHeader: "Show column headers" => "Näytä sarakeotsikot"
// pe.horizontalScroll: "Show horizontal scrollbar" => "Näytä vaakasuora vierityspalkki"
// pe.columnMinWidth: "Minimum column width (in CSS-accepted values)" => "Sarakkeen vähimmäisleveys (CSS-hyväksytyissä arvoissa)"
// pe.rowTitleWidth: "Row header width (in CSS-accepted values)" => "Riviotsikon leveys (CSS-hyväksytyissä arvoissa)"
// pe.valueTrue: "\"True\" value" => "\"Tosi\"-arvo"
// pe.valueFalse: "\"False\" value" => "Epätosi-arvo"
// pe.minErrorText: "\"Value is below minimum\" error message" => "Arvo on alle minimin -virhesanoma"
// pe.maxErrorText: "\"Value exceeds maximum\" error message" => "\"Arvo ylittää maksimin\" -virhesanoma"
// pe.otherErrorText: "\"Empty comment\" error message" => "Tyhjä kommentti -virhesanoma"
// pe.keyDuplicationError: "\"Non-unique key value\" error message" => "Ei-yksilöllinen avainarvo -virhesanoma"
// pe.minSelectedChoices: "Minimum selected choices" => "Valitut valinnat vähintään:"
// pe.maxSelectedChoices: "Maximum selected choices" => "Valittujen vaihtoehtojen enimmäismäärä"
// pe.showClearButton: "Show the Clear button" => "Näytä Tyhjennä-painike"
// pe.showNumber: "Show panel number" => "Näytä paneelin numero"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logon leveys (CSS-hyväksytyissä arvoissa)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logon korkeus (CSS:n hyväksymissä arvoissa)"
// pe.readOnly: "Read-only" => "Vain luku -tilassa"
// pe.enableIf: "Editable if" => "Muokattavissa, jos"
// pe.emptyRowsText: "\"No rows\" message" => "Ei rivejä -viesti"
// pe.size: "Input field size (in characters)" => "Syöttökentän koko (merkkeinä)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Erilliset erikoisvalinnat (Ei mitään, Muu, Valitse kaikki)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopioi valinnat seuraavasta kysymyksestä"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Mitkä vaihtoehdot kopioidaan?"
// pe.showCommentArea: "Show the comment area" => "Näytä kommenttialue"
// pe.commentPlaceholder: "Comment area placeholder" => "Kommenttialueen paikkamerkki"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Näytä nopeuskuvaukset ääriarvoina"
// pe.rowsOrder: "Row order" => "Rivien järjestys"
// pe.columnsLayout: "Column layout" => "Sarakkeen asettelu"
// pe.columnColCount: "Nested column count" => "Sisäkkäisten sarakkeiden määrä"
// pe.state: "Panel expand state" => "Paneelin laajenna tila"
// pe.correctAnswer: "Correct Answer" => "Oikea vastaus"
// pe.defaultPanelValue: "Default Values" => "Oletusarvot"
// pe.cells: "Cell Texts" => "Solujen tekstit"
// pe.keyName: "Key column" => "Avainsarake"
// itemvalue.text: "Alt text" => "Vaihtoehtoinen teksti"
// tabs.expression: "Expression" => "Lauseke"
// pe.choicesVisibleIf: "Choices are visible if" => "Valinnat näkyvät, jos"
// pe.choicesEnableIf: "Choices are selectable if" => "Valinnat ovat valittavissa, jos"
// pe.columnsEnableIf: "Columns are visible if" => "Sarakkeet ovat näkyvissä, jos"
// pe.rowsEnableIf: "Rows are visible if" => "Rivit ovat näkyvissä, jos"
// pe.indent: "Add indents" => "Sisennysten lisääminen"
// panel.indent: "Add outer indents" => "Ulompien sisennysten lisääminen"
// pe.innerIndent: "Add inner indents" => "Sisäisten sisennysten lisääminen"
// pe.defaultValueFromLastRow: "Take default values from the last row" => "Oletusarvojen ottaminen viimeiseltä riviltä"
// pe.defaultValueFromLastPanel: "Take default values from the last panel" => "Ota oletusarvot viimeisestä paneelista"
// pe.emptyExpressionPlaceHolder: "Type expression here..." => "Kirjoita lauseke tähän..."
// pe.clearIfInvisible: "Clear the value if the question becomes hidden" => "Poista arvo, jos kysymys piilotetaan"
// pe.valuePropertyName: "Value property name" => "Arvo-ominaisuuden nimi"
// pe.searchEnabled: "Enable search" => "Ota haku käyttöön"
// pe.hideSelectedItems: "Hide selected items" => "Piilota valitut kohteet"
// pe.closeOnSelect: "Close the dropdown after selection" => "Sulkee valinnan jälkeisen avattavan valikon."
// pe.signatureWidth: "Signature width" => "Allekirjoituksen leveys"
// pe.signatureHeight: "Signature height" => "Allekirjoituksen korkeus"
// pe.verticalAlign: "Vertical alignment" => "Pystysuuntainen tasaus"
// pe.alternateRows: "Alternate rows" => "Vaihtoehtoiset rivit"
// pe.columnsVisibleIf: "Columns are visible if" => "Sarakkeet ovat näkyvissä, jos"
// pe.rowsVisibleIf: "Rows are visible if" => "Rivit ovat näkyvissä, jos"
// pe.otherPlaceholder: "Comment area placeholder" => "Kommenttialueen paikkamerkki"
// pe.rateType: "Rate type" => "Hinnan tyyppi"
// pv.true: "true" => "tosi"
// pv.false: "false" => "väärä"
// pv.decimal: "decimal" => "desimaali"
// pv.currency: "currency" => "valuutta"
// pv.percent: "percent" => "prosentti"
// pv.onpanel: "Start on each panel" => "Aloita jokaisesta paneelista"
// pv.tab: "Tabs" => "Välilehdet"
// pv.right: "Right" => "Oikea"
// pv.color: "color" => "väri"
// pv.date: "date" => "päivämäärä"
// pv.datetime: "datetime" => "päivämäärä ja aika"
// pv.datetime-local: "datetime-local" => "datetime-local"
// pv.email: "email" => "Sähköposti"
// pv.month: "month" => "kuukausi"
// pv.number: "number" => "numero"
// pv.password: "password" => "salasana"
// pv.range: "range" => "etäisyys"
// pv.tel: "tel" => "puh"
// pv.text: "text" => "Tekstiviesti"
// pv.time: "time" => "Aika"
// pv.url: "url" => "URL"
// pv.week: "week" => "viikko"
// pv.onHiddenContainer: "When the question or its panel/page becomes hidden" => "Kun kysymys tai sen paneeli/sivu piilotetaan"
// clearInvisibleValues.none: "Never" => "Koskaan"
// inputType.color: "Color" => "Väri"
// inputType.date: "Date" => "Päivämäärä"
// inputType.datetime-local: "Date and Time" => "Päivämäärä ja kellonaika"
// inputType.email: "Email" => "Sähköposti"
// inputType.month: "Month" => "Kuukausi"
// inputType.number: "Number" => "Numero"
// inputType.password: "Password" => "Salasana"
// inputType.range: "Range" => "Etäisyys"
// inputType.tel: "Phone Number" => "Puhelinnumero"
// inputType.text: "Text" => "Tekstiviesti"
// inputType.time: "Time" => "Aika"
// inputType.url: "URL" => "URL"
// inputType.week: "Week" => "Viikko"
// pv.onValueChanging: "Before an answer is changed" => "Ennen vastauksen muuttamista"
// pv.pages: "Completed pages" => "Valmiit sivut"
// pv.questions: "Answered questions" => "Vastatut kysymykset"
// pv.requiredQuestions: "Answered required questions" => "Vastatut vaaditut kysymykset"
// pv.correctQuestions: "Valid answers" => "Kelvolliset vastaukset"
// pv.buttons: "Completed pages (button UI)" => "Valmiit sivut (painike Käyttöliittymä)"
// pv.underInput: "Under the input" => "Tulon alla"
// pv.underTitle: "Under the title" => "Otsikon alla"
// pv.onBlur: "On blur" => "Sumennuksessa"
// pv.onTyping: "While typing" => "Kirjoittamisen aikana"
// pv.underRow: "Under the row" => "Rivin alla"
// pv.underRowSingle: "Under the row, only one panel is visible" => "Rivin alla näkyy vain yksi paneeli"
// showNavigationButtons.none: "Hidden" => "Piilevä"
// showProgressBar.off: "Hidden" => "Piilevä"
// showTimerPanel.none: "Hidden" => "Piilevä"
// showTimerPanelMode.all: "Both" => "Molemmat"
// detailPanelMode.none: "Hidden" => "Piilevä"
// addRowLocation.default: "Depends on matrix layout" => "Riippuu matriisin asettelusta"
// panelsState.default: "Users cannot expand or collapse panels" => "Käyttäjät eivät voi laajentaa tai kutistaa paneeleja"
// panelsState.collapsed: "All panels are collapsed" => "Kaikki paneelit on tiivistetty"
// panelsState.expanded: "All panels are expanded" => "Kaikki paneelit on laajennettu"
// widthMode.auto: "Auto" => "Auto"
// widthMode.static: "Static" => "Staattinen"
// widthMode.responsive: "Responsive" => "Reagoiva"
// imageFit.none: "None" => "Ei lainkaan"
// imageFit.contain: "Contain" => "Sisältää"
// imageFit.cover: "Cover" => "Kansi"
// imageFit.fill: "Fill" => "Täyttää"
// contentMode.auto: "Auto" => "Auto"
// contentMode.image: "Image" => "Kuva"
// contentMode.video: "Video" => "Video"
// contentMode.youtube: "YouTube" => "YouTubessa"
// displayMode.auto: "Auto" => "Auto"
// displayMode.buttons: "Buttons" => "Painikkeet"
// displayMode.dropdown: "Dropdown" => "Avattava valikko"
// rateColorMode.default: "Default" => "Laiminlyönti"
// autoGenerate.true: "Generate" => "Synnyttää"
// autoGenerate.false: "Enter manually" => "Kirjoita manuaalisesti"
// rateType.labels: "Labels" => "Otsikot"
// rateType.stars: "Stars" => "Tähteä"
// rateType.smileys: "Smileys" => "Hymiöt"
// op.and: "and" => "ja"
// op.or: "or" => "tai"
// ts.hideInvisibleElements: "Hide invisible elements" => "Piilota näkymättömät elementit"
// pehelp.cookieName: "Cookies prevent users from filling out the same survey twice." => "Evästeet estävät käyttäjiä täyttämästä samaa kyselyä kahdesti."
// pehelp.size: "Resizes the visible area of the input field. Please use the <b>Validation → Maximum length</b> setting to limit the input length." => "Muuttaa syöttökentän näkyvän alueen kokoa. Käytä <b>Validointi → enimmäispituus</b> -asetusta rajoittaaksesi tulon pituutta."
// pehelp.format: "Use {0} as a placeholder for the actual value." => "Käytä {0} todellisen arvon paikkamerkkinä."
// pehelp.totalText: "Visible only when at least one column has Total type or Total expression." => "Näkyy vain, kun vähintään yhdessä sarakkeessa on Summa-tyyppi tai Summa-lauseke."
// pehelp.acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information." => "Katso lisätietoja määritteen [accept](https://www.w3schools.com/tags/att_input_accept.asp) kuvauksesta."
// pehelp.columnColCount: "Applicable only to Radiogroup and Checkbox cell types." => "Koskee vain radioryhmä- ja valintaruutusolutyyppejä."
// pehelp.autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information." => "Lisätietoja on [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) -määritteen kuvauksessa."
// pehelp.valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property." => "Jos et määritä tätä ominaisuutta, vastaus tallennetaan Name-ominaisuuden määrittämään kenttään."
// choicesbyurl.valueName: " " => " "
// pehelp.keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error." => "Jos määritetty sarake sisältää samat arvot, kysely heittää \"Ei-yksilöllinen avainarvo\" -virheen."
// p.multiSelect: "Allow multiple selection" => "Salli monivalinta"
// p.showLabel: "Show image captions" => "Näytä kuvatekstit"
// p.value: "Value" => "Arvo"
// p.tabAlign: "Tab alignment" => "Sarkaimen tasaus"
// p.logoFit: "Logo fit" => "Logon sopivuus"
// p.pages: "Pages" => "Sivut"
// p.questions: "Questions" => "Kysymyksiä"
// p.calculatedValues: "Calculated values" => "Lasketut arvot"
// p.surveyId: "Survey id" => "Kyselyn tunnus"
// p.surveyPostId: "Survey post id" => "Kyselyn viestin tunnus"
// p.surveyShowDataSaving: "Survey show data saving" => "Kysely näyttää tietojen tallennuksen"
// p.questionDescriptionLocation: "Question description location" => "Kysymyksen kuvauksen sijainti"
// p.progressBarType: "Progress bar type" => "Edistymispalkin tyyppi"
// p.showTOC: "Show TOC" => "Näytä sisällysluettelo"
// p.tocLocation: "Toc location" => "Toc-sijainti"
// p.questionTitlePattern: "Question title pattern" => "Kysymyksen otsikkomalli"
// p.widthMode: "Width mode" => "Leveys-tila"
// p.showBrandInfo: "Show brand info" => "Näytä brändin tiedot"
// p.useDisplayValuesInDynamicTexts: "Use display values in dynamic texts" => "Näyttöarvojen käyttäminen dynaamisissa teksteissä"
// p.descriptionLocation: "Description location" => "Kuvaus, sijainti"
// p.defaultValueExpression: "Default value expression" => "Oletusarvon lauseke"
// p.bindings: "Bindings" => "Siteet"
// p.renderAs: "Render as" => "Hahmonna muodossa"
// p.attachOriginalItems: "Attach original items" => "Alkuperäisten kohteiden liittäminen"
// p.cellHint: "Cell hint" => "Solun vihje"
// p.isUnique: "Is unique" => "On ainutlaatuinen"
// p.showInMultipleColumns: "Show in multiple columns" => "Näytä useissa sarakkeissa"
// p.totalMaximumFractionDigits: "Total maximum fraction digits" => "Murtolukujen enimmäismäärä yhteensä"
// p.totalMinimumFractionDigits: "Total minimum fraction digits" => "Murtolukujen vähimmäismäärä"
// p.detailElements: "Detail elements" => "Yksityiskohtaiset elementit"
// p.allowAdaptiveActions: "Allow adaptive actions" => "Salli mukautuvat toiminnot"
// p.detailPanelShowOnAdding: "Detail panel show on adding" => "Tietopaneeli näyttää lisäyksen yhteydessä"
// p.choicesLazyLoadEnabled: "Choices lazy load enabled" => "Valinnat laiska kuorma käytössä"
// p.choicesLazyLoadPageSize: "Choices lazy load page size" => "Valinnat laiska lataussivun koko"
// p.inputFieldComponent: "Input field component" => "Syöttökentän komponentti"
// p.itemComponent: "Item component" => "Nimikkeen osa"
// p.min: "Min" => "Min"
// p.max: "Max" => "Max"
// p.minValueExpression: "Min value expression" => "Pienin arvon lauseke"
// p.maxValueExpression: "Max value expression" => "Enimmäisarvon lauseke"
// p.step: "Step" => "Askel"
// p.dataList: "Data list" => "Tietoluettelo"
// p.elements: "Elements" => "Luonnonvoimat"
// p.content: "Content" => "Sisältö"
// p.navigationTitle: "Navigation title" => "Navigoinnin otsikko"
// p.navigationDescription: "Navigation description" => "Navigoinnin kuvaus"
// p.longTap: "Long tap" => "Pitkä napautus"
// p.autoGrow: "Auto grow" => "Automaattinen kasvu"
// p.allowResize: "Allow resizing" => "Salli koon muuttaminen"
// p.acceptCarriageReturn: "Accept carriage return" => "Hyväksy vaunun palautus"
// p.displayMode: "Display mode" => "Näyttötila"
// p.rateType: "Rate type" => "Hinnan tyyppi"
// p.contentMode: "Content mode" => "Sisältö-tila"
// p.imageFit: "Image fit" => "Kuva sopii"
// p.altText: "Alt text" => "Vaihtoehtoinen teksti"
// p.height: "Height" => "Korkeus"
// p.penColor: "Pen color" => "Kynän väri"
// p.backgroundColor: "Background color" => "Taustaväri"
// p.templateElements: "Template elements" => "Mallin elementit"
// p.operator: "Operator" => "Operaattori"
// p.isVariable: "Is variable" => "On vaihteleva"
// p.runExpression: "Run expression" => "Suorita lauseke"
// p.showCaption: "Show caption" => "Näytä kuvateksti"
// p.iconName: "Icon name" => "Kuvakkeen nimi"
// p.iconSize: "Icon size" => "Kuvakkeen koko"
// p.precision: "Precision" => "Tarkkuus"
// p.matrixDragHandleArea: "Matrix drag handle area" => "Matriisin vetokahva-alue"
// p.backgroundImage: "Background image" => "Taustakuvan"
// p.backgroundImageFit: "Background image fit" => "Taustakuvan sovitus"
// p.backgroundImageAttachment: "Background image attachment" => "Taustakuvan liite"
// p.backgroundOpacity: "Background opacity" => "Taustan peittävyys"
// p.selectToRankEnabled: "Select to rank enabled" => "Valitse sijoitus käytössä"
// p.selectToRankAreasLayout: "Select to rank areas layout" => "Valitse alueiden asettelu"
// p.allowCameraAccess: "Allow camera access" => "Salli kameran käyttö"
// p.scaleColorMode: "Scale color mode" => "Skaalaa väriä -tila"
// p.rateColorMode: "Rate color mode" => "Arvioi väritila"
// p.templateTabTitle: "Template tab title" => "Malli-välilehden otsikko"
// p.templateVisibleIf: "Template visible if" => "Malli näkyvissä, jos"
// p.copyDisplayValue: "Copy display value" => "Kopioi näyttöarvo"
// theme.--background: "Background color" => "Taustaväri"
// theme.--background-dim-light: "Background dim light color" => "Taustan himmeä vaalea väri"
// theme.--primary-foreground: "Primary foreground color" => "Ensisijainen etualan väri"
// theme.--foreground: "Foreground color" => "Edustan väri"
// theme.--base-unit: "Base unit" => "Perusyksikkö"
// theme.groupGeneral: "General" => "Yleiset"
// theme.groupAdvanced: "Advanced" => "Edistynyt"
// theme.themeName: "Theme" => "Teema"
// theme.themeMode: "Question appearance" => "Kysymyksen ulkonäkö"
// theme.themeModePanels: "Default" => "Laiminlyönti"
// theme.themeModeLightweight: "Without Panels" => "Ilman paneeleja"
// theme.themePaletteLight: "Light" => "Valo"
// theme.themePaletteDark: "Dark" => "Tumma"
// theme.primaryColor: "Accent color" => "Korostusväri"
// theme.primaryDefaultColor: "Default" => "Laiminlyönti"
// theme.primaryDarkColor: "Hover" => "Häilyä"
// theme.primaryLightColor: "Selected" => "Valittu"
// theme.backgroundDimColor: "Background color" => "Taustaväri"
// theme.backgroundImage: "Background image" => "Taustakuvan"
// theme.backgroundImageFitAuto: "Auto" => "Auto"
// theme.backgroundImageFitCover: "Cover" => "Kansi"
// theme.backgroundImageFitContain: "Contain" => "Sisältää"
// theme.backgroundOpacity: "Opacity" => "Läpikuultamattomuus"
// theme.backgroundImageAttachmentFixed: "Fixed" => "Kiinteä"
// theme.backgroundImageAttachmentScroll: "Scroll" => "Vierittää"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Paneelin taustan peittävyys"
// theme.questionBackgroundTransparency: "Question background opacity" => "Taustan peittävyyden kyseenalaistaminen"
// theme.questionPanel: "Panel background and corner radius" => "Paneelin tausta ja kulmasäde"
// theme.questionTitle: "Question title font" => "Kysymyksen otsikon fontti"
// theme.questionDescription: "Question description font" => "Kysymyksen kuvauksen fontti"
// theme.editorPanel: "Input element" => "Syötä elementti"
// theme.editorFont: "Input element font" => "Syöttöelementin fontti"
// theme.backcolor: "Default background" => "Oletustausta"
// theme.hovercolor: "Hover background" => "Vie hiiri taustalle"
// theme.borderDecoration: "Border decoration" => "Reunusten koristelu"
// theme.accentBackground: "Accent background" => "Aksentti tausta"
// theme.accentForeground: "Accent foreground" => "Aksentti etualalla"
// theme.primaryForecolor: "Default color" => "Oletusväri"
// theme.primaryForecolorLight: "Disabled color" => "Käytöstä poistettu väri"
// theme.linesColors: "Minor line colors" => "Pienet viivan värit"
// theme.borderDefault: "Darker" => "Tummempi"
// theme.borderLight: "Lighter" => "Sytytin"
// theme.fontFamily: "Font family" => "Fonttiperhe"
// theme.fontSize: "Font size" => "Kirjasinkoko"
// theme.color: "Color" => "Väri"
// theme.size: "Size" => "Koko"
// theme.fontWeightRegular: "Regular" => "Säännöllinen"
// theme.fontWeightHeavy: "Heavy" => "Raskas"
// theme.fontWeightSemiBold: "Semi-bold" => "Puoliksi lihavoitu"
// theme.fontWeightBold: "Bold" => "Rohkea"
// theme.scale: "Scale" => "Mittakaava"
// theme.cornerRadius: "Corner radius" => "Kulman säde"
// theme.surveyTitle: "Survey title font" => "Kyselyn otsikon fontti"
// theme.pageTitle: "Page title font" => "Sivun otsikon fontti"
// theme.pageDescription: "Page description font" => "Sivun kuvauksen fontti"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Lisää varjotehoste"
// theme.opacity: "Opacity" => "Läpikuultamattomuus"
// theme.boxShadowBlur: "Blur" => "Hämärtyä"
// theme.boxShadowSpread: "Spread" => "Leviäminen"
// theme.boxShadowDrop: "Drop" => "Pisara"
// theme.boxShadowInner: "Inner" => "Sisäinen"
// theme.questionShadow: "Shadow effects" => "Varjo-tehosteet"
// theme.editorShadow: "Input element shadow effects" => "Syöttöelementin varjotehosteet"
// names.default: "Default" => "Laiminlyönti"
// names.contrast: "Contrast" => "Kontrasti"
// names.plain: "Plain" => "Tasanko"
// names.simple: "Simple" => "Yksinkertainen"
// names.blank: "Blank" => "Aihio"
// names.double: "Double" => "Kaksinkertainen"
// names.bulk: "Bulk" => "Massa"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Leikkisä"
// names.ultra: "Ultra" => "Ultra"
// colors.teal: "Teal" => "Tavi"
// colors.blue: "Blue" => "Sininen"
// colors.purple: "Purple" => "Purppura"
// colors.orchid: "Orchid" => "Orkidea"
// colors.tulip: "Tulip" => "Tulppaani"
// colors.brown: "Brown" => "Ruskea"
// colors.green: "Green" => "Vihreä"
// names.sharp: "Sharp" => "Terävä"
// names.borderless: "Borderless" => "Reunukseton"
// names.flat: "Flat" => "Tasainen"
// names.doubleborder: "Double Border" => "Kaksinkertainen reunus"
// names.layered: "Layered" => "Kerroksellinen"
// names.solid: "Solid" => "Kiinteä"
// names.threedimensional: "3D" => ".3D"
// ed.translationDeleteLanguage: "Are you certain you wish to delete all strings for this language?" => "Oletko varma, että haluat poistaa kaikki merkkijonot tältä kieleltä?"
// ed.themeResetButton: "Reset theme settings to default" => "Palauta teema-asetukset oletusasetuksiin"
// theme.placeholderColor: "Placeholder color" => "Paikkamerkin väri"
// ed.themeSettings: "Theme Settings" => "Teeman asetukset"
// ed.themeSettingsTooltip: "Open theme settings" => "Avaa teema-asetukset"
// pe.resetToDefaultCaption: "Reset" => "Nollata"
// pv.file: "Local files" => "Paikalliset tiedostot"
// pv.camera: "Camera" => "Kamera"
// pv.file-camera: "Local files or camera" => "Paikalliset tiedostot tai kamera"
// ed.translateUsigAI: "Auto-translate All" => "Käännä kaikki automaattisesti"
// ed.translationDialogTitle: "Untranslated strings" => "Kääntämättömät merkkijonot"
// pe.fastEntryChoicesMinCountError: "Please enter at least {0} items" => "Anna vähintään {0} kohdetta"
// lg.question_resetValueName: "Reset question value" => "Palauta kysymyksen arvo"
// lg.column_resetValue: "Reset column value" => "Palauta sarakkeen arvo"
// pe.markRequired: "Mark as required" => "Merkitse pakollisesti"
// pe.removeRequiredMark: "Remove the required mark" => "Poista vaadittu merkki"
// p.resetValueIf: "Reset value if" => "Nollaa arvo, jos"
// lg.question_setValueName: "Set question value" => "Aseta kysymyksen arvo"
// lg.column_resetValueName: "Reset column value" => "Palauta sarakkeen arvo"
// lg.column_setValueName: "Set column value" => "Sarakkeen arvon määrittäminen"
// lg.setValueExpressionPlaceholder: " An expression whose result will be assigned to the target question." => " Lauseke, jonka tulos määritetään kohdekysymykselle."
// survey.title: "Title" => "Nimike"
// page.title: "Title" => "Nimike"
// p.setValueIf: "Set value if" => "Aseta arvo, jos"
// theme.groupHeader: "Header" => "Otsikko"
// theme.coverTitleForecolor: "Title forecolor" => "Otsikon etuväri"
// theme.coverOverlapEnabled: "Overlap" => "Limittyä"
// theme.backgroundImageFitFill: "Stretch" => "Venyä"
// theme.backgroundImageFitTile: "Tile" => "Laatta"
// theme.headerView: "View" => "Näkymä"
// theme.headerViewBasic: "Basic" => "Emäksinen"
// theme.headerViewAdvanced: "Advanced" => "Edistynyt"
// theme.coverInheritWidthFrom: "Content area width" => "Sisältöalueen leveys"
// theme.coverInheritWidthFromSurvey: "Same as survey" => "Sama kuin kyselyssä"
// theme.coverInheritWidthFromPage: "Fit to page" => "Sovita sivulle"
// theme.coverTextAreaWidth: "Text width" => "Tekstin leveys"
// theme.coverBackgroundColorSwitch: "Background color" => "Taustaväri"
// theme.coverBackgroundColorNone: "None" => "Ei lainkaan"
// theme.coverBackgroundColorAccentColor: "Accent color" => "Korostusväri"
// theme.coverBackgroundColorCustom: "Custom" => "Tapa"
// theme.horizontalAlignmentLeft: "Left" => "Vasen"
// theme.horizontalAlignmentCenter: "Center" => "Keskus"
// theme.horizontalAlignmentRight: "Right" => "Oikea"
// theme.verticalAlignmentTop: "Top" => "Huippu"
// theme.verticalAlignmentMiddle: "Middle" => "Keskus"
// theme.verticalAlignmentBottom: "Bottom" => "Pohja"
// theme.logoPosition: "Logo Position" => "Logon sijainti"
// theme.coverTitlePosition: "Title Position" => "Otsikon sijainti"
// lg.question_resetValueText: "reset value for question: {0}" => "nollaa kysymyksen arvo: {0}"
// lg.question_setValueText: "assign value: {1} to question: {0}" => "Määritä arvo: {1} kysymykseen: {0}"
// lg.column_resetValueText: "reset cell value for column: {0}" => "Palauta sarakkeen soluarvo: {0}"
// lg.column_setValueText: "assign cell value: {1} to column: {0}" => "Määritä solun arvo: {1} sarakkeeseen: {0}"
// ed.surveyJsonExportButton: "Export" => "Vienti"
// ed.surveyJsonImportButton: "Import" => "Tuoda"
// ed.surveyJsonCopyButton: "Copy to clipboard" => "Kopioi leikepöydälle"
// pe.filePlaceholder: "File placeholder text" => "Tiedoston paikkamerkkiteksti"
// pe.photoPlaceholder: "Photo placeholder text" => "Valokuvan paikkamerkkiteksti"
// pe.fileOrPhotoPlaceholder: "File or photo placeholder text" => "Tiedoston tai valokuvan paikkamerkkiteksti"
// pehelp.filePlaceholder: "Applies when \"Source type\" is \"Local files\" or when camera is unavailable" => "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot\" tai kun kamera ei ole käytettävissä"
// pehelp.photoPlaceholder: "Applies when \"Source type\" is \"Camera\"." => "Käytetään, kun \"Lähdetyyppi\" on \"Kamera\"."
// pehelp.fileOrPhotoPlaceholder: "Applies when \"Source type\" is \"Local files or camera\"." => "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot tai kamera\"."
// theme.groupBackground: "Background" => "Tausta"
// theme.groupAppearance: "Appearance" => "Ulkonäkö"
// theme.coverDescriptionForecolor: "Description forecolor" => "Kuvaus etuväri"
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Haluatko todella nollata teeman? Kaikki mukautuksesi menetetään."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Kyllä, nollaa teema"
// theme.groupBackground: "Background" => "Tausta"
// theme.groupAppearance: "Appearance" => "Ulkonäkö"
// theme.coverDescriptionForecolor: "Description forecolor" => "Kuvaus etuväri"
// theme.coverInheritWidthFromContainer: "Fit to container" => "Sovita konttiin"
// signaturepad.showPlaceholder: "Show the placeholder" => "Paikkamerkin näyttäminen"
// signaturepad.placeholder: "Placeholder text" => "Paikkamerkkiteksti"
// theme.surveyDescription: "Survey description font" => "Kyselyn kuvauksen fontti"r

// ed.prevFocus: "Focus previous" => "Keskity edelliseen"
// ed.nextFocus: "Focus next" => "Keskity seuraavaksi"
// ed.saveTheme: "Save Theme" => "Tallenna teema"
// ed.saveThemeTooltip: "Save Theme" => "Tallenna teema"
// lg.page_requireName: "Make page required" => "Tee sivusta pakollinen"
// lg.panel_requireName: "Make page required" => "Tee sivusta pakollinen"
// signaturepad.signatureWidth: "Signature area width" => "Allekirjoitusalueen leveys"
// signaturepad.signatureHeight: "Signature area height" => "Allekirjoitusalueen korkeus"
// signaturepad.signatureAutoScaleEnabled: "Auto-scale the signature area" => "Allekirjoitusalueen automaattinen skaalaus"
// signaturepad.penMinWidth: "Minimum pen width" => "Kynän vähimmäisleveys"
// signaturepad.penMaxWidth: "Maximum pen width" => "Kynän enimmäisleveys"
// theme.coverDescriptionPosition: "Description position" => "Kuvauksen sijainti"
// ed.propertyGridNoResultsFound: "No results found" => "Tuloksia ei löytynyt"
// pv.leftRight: "Left and right" => "Vasen ja oikea"
// p.sourceType: "Source type" => "Lähteen tyyppi"
// p.fitToContainer: "Fit to container" => "Sovita konttiin"
// p.setValueExpression: "Set value expression" => "Arvolausekkeen määrittäminen"
// ed.choicesLoadedFromWebText: "Choices are loaded from a web service." => "Valinnat ladataan verkkopalvelusta."
// ed.choicesLoadedFromWebLinkText: "Go to settings" => "Siirry asetuksiin"
// ed.choicesLoadedFromWebPreviewTitle: "Preview of loaded choice options" => "Ladattujen valintavaihtoehtojen esikatselu"
// pe.eachRowUnique: "Prevent duplicate responses in rows" => "Estä päällekkäiset vastaukset riveillä"
// theme.advancedMode: "Advanced mode" => "Edistynyt tila"
// theme.backgroundCornerRadius: "Background and corner radius" => "Taustan ja kulman säde"
// theme.colorsTitle: "Colors" => "Värit"
// theme.font: "Font" => "Fontti"
// theme.lines: "Lines" => "Rivit"
// theme.titleFont: "Title font" => "Otsikon fontti"
// theme.descriptionFont: "Description font" => "Kuvauksen fontti"
// theme.shadow: "Shadow effects" => "Varjo-tehosteet"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Salli Kieltäydy vastaamasta -vaihtoehto"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Salli En tiedä -vaihtoehto"
// pv.contain: "Contain" => "Sisältää"
// pv.cover: "Cover" => "Kansi"
// pv.fill: "Fill" => "Täyttää"