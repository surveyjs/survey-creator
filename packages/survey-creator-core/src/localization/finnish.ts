import { setupLocale } from "survey-creator-core";

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
  // Creator tabs
  tabs: {
    preview: "Testaa kysely",
    theme: "Teemoja",
    translation: "Käännös",
    designer: "Kyselyn suunnittelija",
    json: "JSON Editori",
    logic: "Kyselyn logiikka"
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
  toolboxCategories: {
    general: "Yleinen",
    choice: "Valintaa koskevat kysymykset",
    text: "Tekstinsyöttökysymykset",
    containers: "Säiliöt",
    matrix: "Matriisin kysymykset",
    misc: "Muut"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Vakio ({0})",
    survey: "Kysely",
    settings: "Kyselyn asetukset",
    settingsTooltip: "Avaa kyselyn asetukset",
    surveySettings: "Kyselyn asetukset",
    surveySettingsTooltip: "Kyselyn asetukset",
    themeSettings: "Teeman asetukset",
    themeSettingsTooltip: "Teeman asetukset",
    creatorSettingTitle: "Sisällöntuottajan asetukset",
    showPanel: "Näytä Paneeli",
    hidePanel: "Piilota Paneeli",
    prevSelected: "Valitse edellinen",
    nextSelected: "Valitse seuraava",
    prevFocus: "Keskity edelliseen",
    nextFocus: "Keskity seuraavaksi",
    surveyTypeName: "Kysely",
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
    newPageName: "Sivu",
    newQuestionName: "kysymys",
    newPanelName: "Paneeli",
    newTextItemName: "Teksti",
    defaultV2Theme: "Oletus",
    modernTheme: "Moderni",
    defaultTheme: "Oletus (vanha)",
    testSurveyAgain: "Testaa kysely uudestaan",
    testSurveyWidth: "Kyselyn leveys: ",
    navigateToMsg: "Sinun piti navigoida:",
    saveSurvey: "Tallenna kysely",
    saveSurveyTooltip: "Tallenna kysely",
    saveTheme: "Tallenna teema",
    saveThemeTooltip: "Tallenna teema",
    jsonHideErrors: "Piilota virheet",
    jsonShowErrors: "Näytä virheet",
    undo: "Kumoa",
    redo: "Tee uudelleen",
    undoTooltip: "Kumoa viimeinen muutos",
    redoTooltip: "Tee muutos uudelleen",
    expandTooltip: "Laajentaa",
    collapseTooltip: "Romahdus",
    expandAllTooltip: "Laajenna kaikki",
    collapseAllTooltip: "Kutista kaikki",
    zoomInTooltip: "Lähennä",
    zoom100Tooltip: "Zoomaa 100 %:iin",
    zoomOutTooltip: "Loitonna",
    lockQuestionsTooltip: "Lukitse laajenna/kutista tila kysymyksiä varten",
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
    "property-grid": "Ominaisuudet",
    toolboxFilteredTextPlaceholder: "Kirjoita etsiäksesi...",
    toolboxNoResultsFound: "Tuloksia ei löytynyt",
    propertyGridFilteredTextPlaceholder: "Kirjoita etsiäksesi...",
    propertyGridNoResultsFound: "Tuloksia ei löytynyt",
    propertyGridPlaceholderTitle: "Aloita lomakkeen määrittäminen",
    propertyGridPlaceholderDescription: "Napsauta mitä tahansa luokkakuvaketta tutustuaksesi kyselyn asetuksiin. Lisäasetukset ovat käytettävissä, kun lisäät mittauselementin suunnittelupintaan.",
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
    addLanguageTooltip: "Lisää kieli",
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
    translateUsigAIFrom: "Käännös: ",
    translationDialogTitle: "Kääntämättömät merkkijonot",
    translationMergeLocaleWithDefault: "Yhdistä {0} oletuskielellä",
    translationPlaceHolder: "Käännös...",
    translationSource: "Lähde: ",
    translationTarget: "Kohde: ",
    translationYouTubeNotSupported: "YouTube-linkkejä ei tueta.",
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
    pagePlaceHolder: "Sivu on tyhjä. Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    imagePlaceHolder: "Vedä ja pudota kuva tähän tai napsauta alla olevaa painiketta ja valitse ladattava kuva",
    surveyPlaceHolderMobile: "Napsauta alla olevaa Lisää kysymys -painiketta aloittaaksesi lomakkeen luomisen.",
    surveyPlaceholderTitle: "Lomake on tyhjä",
    surveyPlaceholderTitleMobile: "Lomake on tyhjä",
    surveyPlaceholderDescription: "Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    surveyPlaceholderDescriptionMobile: "Vedä elementti työkalupakista tai napsauta alla olevaa painiketta.",
    previewPlaceholderTitle: "Ei esikatselua",
    previewPlaceholderTitleMobile: "Ei esikatselua",
    previewPlaceholderDescription: "Kysely ei sisällä näkyviä elementtejä.",
    previewPlaceholderDescriptionMobile: "Kysely ei sisällä näkyviä elementtejä.",
    translationsPlaceholderTitle: "Ei käännettäviä merkkijonoja",
    translationsPlaceholderTitleMobile: "Ei käännettäviä merkkijonoja",
    translationsPlaceholderDescription: "Lisää elementtejä lomakkeeseen tai muuta työkalurivin merkkijonosuodatinta.",
    translationsPlaceholderDescriptionMobile: "Lisää elementtejä lomakkeeseen tai muuta työkalurivin merkkijonosuodatinta.",
    pagePlaceHolderMobile: "Napsauta alla olevaa Lisää kysymys -painiketta lisätäksesi sivulle uuden elementin.",
    panelPlaceHolderMobile: "Napsauta alla olevaa Lisää kysymys -painiketta lisätäksesi uuden elementin paneeliin.",
    imagePlaceHolderMobile: "Klikkaa alla olevaa painiketta ja valitse ladattava kuva",
    imageChooseImage: "Valitse kuva",
    addNewTypeQuestion: "Lisää {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    choices_Item: "Kohta ",
    selectFile: "Valitse tiedosto",
    removeFile: "Poista tiedosto",
    lg: {
      addNewItem: "Lisää uusi sääntö",
      empty_tab: "Luo sääntö kyselyn kulun mukauttamista varten.",
      logicPlaceholderTitle: "Ei loogisia sääntöjä",
      logicPlaceholderTitleMobile: "Ei loogisia sääntöjä",
      logicPlaceholderDescription: "Luo sääntö kyselyn kulun mukauttamista varten.",
      logicPlaceholderDescriptionMobile: "Luo sääntö kyselyn kulun mukauttamista varten.",
      page_visibilityName: "Sivun näkyvyys",
      page_enableName: "Ota käyttöön (poista käytöstä) sivu",
      page_requireName: "Tee sivusta pakollinen",
      panel_visibilityName: "Paneelin näkyvyys",
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
      trigger_runExpressionDescription: "Kun looginen lauseke palauttaa arvon tosi, mukautettu lauseke suoritetaan. Voit valinnaisesti asettaa tämän lausekkeen tuloksen valittuun kysymykseen.",
      completedHtmlOnConditionDescription: "Jos looginen lauseke palauttaa arvon tosi, 'Kiitos-sivun' oletusteksti muutetaan annetuksi tekstiksi.",
      itemExpressionText: "Kun lauseke: '{0}' palauttaa arvon tosi:", //{0} - the expression
      itemEmptyExpressionText: "Uusi sääntö",
      page_visibilityText: "Tee sivu {0} näkyväksi", //{0} page name
      panel_visibilityText: "Tee paneelista {0} näkyvä", //{0} panel name
      panel_enableText: "Ota paneeli {0} käyttöön", //{0} panel name
      question_visibilityText: "Tee kysymys {0} näkyväksi", //{0} question name
      question_enableText: "Ota kysymys {0} käyttöön", //{0} question name
      question_requireText: "Tee kysymyksestä {0} pakollinen", //{0} question name
      question_resetValueText: "Nollaa kysymyksen arvo: {0}", //{0} question name.
      question_setValueText: "Määritä arvo: {1} kysymykseen: {0}",
      column_visibilityText: "Tee kysymyksen {1} sarakkeesta {0} näkyvä", //{0} column name, {1} question name
      column_enableText: "Ota kysymyksen sarake {0} {1} käyttöön", //{0} column name, {1} question name
      column_requireText: "Tee kysymyksen sarake {0} {1} pakollinen", //{0} column name, {1} question name
      column_resetValueText: "Palauta sarakkeen soluarvo: {0}", //{0} column name
      column_setValueText: "Määritä solun arvo: {1} sarakkeeseen: {0}", //{0} column name and {1} setValueExpression
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
    panel: {
      name: "Paneelin nimi",
      title: "Paneelin otsikko",
      description: "Paneelin kuvaus",
      visibleIf: "Tee paneeli näkyväksi, jos",
      requiredIf: "Tee paneeli pakolliseksi, jos",
      questionOrder: "Kyselyjärjestys paneelissa",
      page: "Pääsivu",
      startWithNewLine: "Näytä paneeli uudella rivillä",
      state: "Paneelin tiivistystila",
      width: "Tekstiin sidotun paneelin leveys",
      minWidth: "Paneelin vähimmäisleveys",
      maxWidth: "Paneelin enimmäisleveys",
      showNumber: "Numeroi tämä paneeli"
    },
    panellayoutcolumn: {
      effectiveWidth: "Tehollinen leveys, %",
      questionTitleWidth: "Kysymyksen otsikon leveys, px"
    },
    paneldynamic: {
      name: "Paneelin nimi",
      title: "Paneelin otsikko",
      description: "Paneelin kuvaus",
      visibleIf: "Tee paneeli näkyväksi, jos",
      requiredIf: "Tee paneeli pakolliseksi, jos",
      page: "Paneelin siirtäminen sivulle",
      startWithNewLine: "Näytä paneeli uudella rivillä",
      state: "Paneelin tiivistystila",
      width: "Tekstiin sidotun paneelin leveys",
      minWidth: "Paneelin vähimmäisleveys",
      maxWidth: "Paneelin enimmäisleveys",
      confirmDelete: "Vahvista paneelin poisto",
      templateDescription: "Paneelin kuvauskuvio",
      templateTitle: "Paneelin otsikkomalli",
      noEntriesText: "Tyhjä paneelin teksti",
      templateTabTitle: "Välilehden otsikkomalli",
      tabTitlePlaceholder: "Välilehden otsikon paikkamerkki",
      templateVisibleIf: "Tee yksittäinen paneeli näkyväksi, jos",
      showNumber: "Paneelin numerointi",
      titleLocation: "Paneelin otsikon tasaus",
      descriptionLocation: "Paneelin kuvauksen tasaus",
      templateQuestionTitleLocation: "Kysymyksen otsikon tasaus",
      templateQuestionTitleWidth: "Kysymyksen otsikon leveys",
      templateErrorLocation: "Virhesanoman tasaus",
      newPanelPosition: "Uusi paneelin sijainti",
      showRangeInProgress: "Edistymispalkin näyttäminen",
      keyName: "Päällekkäisten vastausten estäminen seuraavassa kysymyksessä"
    },
    question: {
      name: "Kysymyksen nimi",
      title: "Kysymyksen otsikko",
      description: "Kysymyksen kuvaus",
      visibleIf: "Tee kysymys näkyväksi, jos",
      requiredIf: "Tee kysymys pakolliseksi, jos",
      page: "Pääsivu",
      state: "Kysymysruudun tiivistystila",
      showNumber: "Numeroi tämä kysymys",
      titleLocation: "Kysymyksen otsikon tasaus",
      descriptionLocation: "Kysymyksen kuvauksen tasaus",
      errorLocation: "Virhesanoman tasaus",
      indent: "Suurentaa sisintä sisennystä",
      width: "Tekstiin sitoutuvan kysymyksen leveys",
      minWidth: "Kysymyksen vähimmäisleveys",
      maxWidth: "Kysymyksen enimmäisleveys",
      textUpdateMode: "Päivitä syöttökentän arvo"
    },
    signaturepad: {
      signatureWidth: "Allekirjoitusalueen leveys",
      signatureHeight: "Allekirjoitusalueen korkeus",
      signatureAutoScaleEnabled: "Allekirjoitusalueen automaattinen skaalaus",
      showPlaceholder: "Paikkamerkin näyttäminen",
      placeholder: "Paikkamerkkiteksti",
      placeholderReadOnly: "Paikkamerkkiteksti vain luku -tilassa tai esikatselutilassa",
      allowClear: "Näytä Tyhjennä-painike allekirjoitusalueella",
      penMinWidth: "Kynän vähimmäisleveys",
      penMaxWidth: "Kynän enimmäisleveys",
      penColor: "Kynän väri"
    },
    comment: {
      rows: "Syöttökentän korkeus (viivoina)"
    },
    showQuestionNumbers: "Näytä kysymysnumerot",
    questionStartIndex: "Kysymyksen aloitus indeksi (1, 2 or 'A', 'a')",
    expression: {
      name: "Lausekkeen nimi",
      title: "Lausekkeen otsikko",
      description: "Lausekkeen kuvaus",
      expression: "Lauseke"
    },
    trigger: {
      expression: "Lauseke"
    },
    calculatedvalue: {
      expression: "Lauseke"
    },
    // survey templates
    survey: {
      title: "Kyselyn otsikko",
      description: "Kyselyn kuvaus",
      readOnly: "Tee kyselystä vain luku -muotoinen"
    },
    page: {
      name: "Sivun nimi",
      title: "Sivun otsikko",
      description: "Sivun kuvaus",
      visibleIf: "Tee sivusta näkyvä, jos",
      requiredIf: "Tee sivusta pakollinen, jos",
      timeLimit: "Sivun viimeistelyn aikaraja (sekunteina)",
      questionOrder: "Kyselyjärjestys sivulla"
    },
    matrixdropdowncolumn: {
      name: "Sarakkeen nimi",
      title: "Sarakkeen otsikko",
      isUnique: "Päällekkäisten vastausten estäminen",
      width: "Sarakeleveys",
      minWidth: "Sarakkeen vähimmäisleveys",
      rows: "Syöttökentän korkeus (viivoina)",
      visibleIf: "Tee sarakkeesta näkyvä, jos",
      requiredIf: "Tee sarakkeesta pakollinen, jos",
      showInMultipleColumns: "Jokainen vaihtoehto erillisessä sarakkeessa"
    },
    multipletextitem: {
      name: "Nimi",
      title: "Otsikko"
    },
    masksettings: {
      saveMaskedValue: "Peittoarvon tallentaminen kyselyn tuloksiin"
    },
    patternmask: {
      pattern: "Arvon kuvio"
    },
    datetimemask: {
      min: "Pienin arvo",
      max: "Suurin arvo"
    },
    numericmask: {
      allowNegativeValues: "Salli negatiiviset arvot",
      thousandsSeparator: "Tuhansien erotin",
      decimalSeparator: "Desimaalierotin",
      precision: "Arvon tarkkuus",
      min: "Pienin arvo",
      max: "Suurin arvo"
    },
    currencymask: {
      prefix: "Valuutan etuliite",
      suffix: "Valuutan jälkiliite"
    },
    imageHeight: "Kuvan korkeus",
    imageWidth: "Kuvan leveys",
    valueName: "Arvon nimi",
    defaultDisplayValue: "Dynaamisten tekstien oletusnäyttöarvo",
    rateDescriptionLocation: "Otsikon tasaus",
    size: "Syöttökentän leveys (merkkeinä)",
    cellErrorLocation: "Solun virhesanoman tasaus",
    enabled: "Käytössä",
    disabled: "Pois käytöstä",
    inherit: "Peri",
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
    close: "Sulje",
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
    "listIsEmpty@columns": "Sinulla ei ole vielä sarakkeita",
    "listIsEmpty@gridLayoutColumns": "Sinulla ei vielä ole asettelusarakkeita",
    "listIsEmpty@rows": "Sinulla ei ole vielä rivejä",
    "listIsEmpty@validators": "Sinulla ei ole vielä vahvistussääntöjä",
    "listIsEmpty@calculatedValues": "Sinulla ei ole vielä mukautettuja muuttujia",
    "listIsEmpty@triggers": "Sinulla ei ole vielä käynnistimiä",
    "listIsEmpty@navigateToUrlOnCondition": "Sinulla ei ole vielä linkkejä",
    "listIsEmpty@pages": "Sinulla ei ole vielä sivuja",
    "addNew@choices": "Lisää vaihtoehto",
    "addNew@columns": "Lisää uusi sarake",
    "addNew@rows": "Lisää uusi rivi",
    "addNew@validators": "Lisää uusi sääntö",
    "addNew@calculatedValues": "Lisää uusi muuttuja",
    "addNew@triggers": "Lisää uusi käynnistin",
    "addNew@navigateToUrlOnCondition": "Lisää uusi URL-osoite",
    "addNew@pages": "Lisää uusi sivu",
    expressionIsEmpty: "Lauseke on tyhjä",
    value: "Arvo",
    text: "Teksti",
    rowid: "Rivin ID",
    imageLink: "Kuvalinkki",
    columnEdit: "Muokkaa saraketta: {0}",
    itemEdit: "Muokkaa kohdetta: {0}",
    url: "URL",
    path: "Polku",
    choicesbyurl: {
      url: "Verkkopalvelun URL-osoite",
      valueName: "Hae arvot seuraavasta JSON-kentästä"
    },
    titleName: "Otsikon nimi",
    imageLinkName: "Hae kuvien URL-osoitteet seuraavasta JSON-kentästä",
    allowEmptyResponse: "Salli tyhjä vastaus",
    titlePlaceholder: "Syötä otsikko tähän",
    surveyTitlePlaceholder: "Syötä kyselyn otsikko tähän",
    pageTitlePlaceholder: "Syötä sivun otsikko tähän",
    startPageTitlePlaceholder: "Aloitussivu",
    descriptionPlaceholder: "Lisää kuvaus",
    surveyDescriptionPlaceholder: "Lisää kyselyn kuvaus",
    pageDescriptionPlaceholder: "Lisää sivun kuvaus",
    textWrapEnabled: "Kääri valinnat",
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
    allowCustomChoices: "Salli mukautetut valinnat",
    visible: "On näkyvä?",
    isRequired: "On vaadittu?",
    markRequired: "Merkitse pakollisesti",
    removeRequiredMark: "Poista vaadittu merkki",
    eachRowRequired: "Vaadi vastaus kaikille riveille",
    eachRowUnique: "Estä päällekkäiset vastaukset riveillä",
    requiredErrorText: "Vaadittu virheteksti",
    startWithNewLine: "Onko aloitus uudella rivillä?",
    rows: "Rivit",
    cols: "Sarakeet",
    placeholder: "Syötä paikkamerkintä",
    showPreview: "Näytä esikatselu",
    storeDataAsText: "Tallenna tiedostosisältö JSON-tulokseen tekstinä",
    maxSize: "Tiedoston enimmäiskoko tavuina",
    rowCount: "Rivien määrä",
    columnLayout: "Sarakkeiden asettelu",
    addRowButtonLocation: "Lisää rivipainikkeen sijainti",
    transposeData: "Rivien transponointi sarakkeisiin",
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
    clearInvisibleValues: "Tyhjennä näkymättömät arvot",
    cookieName: "Evästeen nimi (poistaaksesi kysely käytöstä suorita kysely kaksi kertaa paikallisesti)",
    partialSendEnabled: "Lähetä kyselyn tulokset seuraavalla sivulla",
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
    navigationButtonsLocation: "Siirtymispainikkeiden tasaus",
    showPrevButton: "Näytä edellinen -painike (käyttäjä voi palata edelliselle sivulle)",
    firstPageIsStartPage: "Kyselyn ensimmäinen sivu on aloitussivu.",
    showCompletePage: "Näytä valmis sivu lopussa (completeHtml)",
    autoAdvanceEnabled: "Kun vastaat kaikkiin kysymyksiin, siirry seuraavalle sivulle automaattisesti",
    autoAdvanceAllowComplete: "Vastaa kyselyyn automaattisesti",
    showProgressBar: "Näytä edistymispalkki",
    progressBarLocation: "Edistymispalkin tasaus",
    questionTitleLocation: "Kysymyksen otsikon sijainti",
    questionTitleWidth: "Kysymyksen otsikon leveys",
    requiredMark: "Kysymys vaadittu symboli (t)",
    questionTitleTemplate: "Kysymyksen otsikkomalli, oletusarvo: '{no}. {require} {title}'",
    questionErrorLocation: "Kysymyksen virheen sijainti",
    autoFocusFirstQuestion: "Fokusoi ensimmäiseen kysymykseen sivun vaihtuessa",
    questionOrder: "Elementtien järjestys sivulla",
    timeLimit: "Enimmäisaika saada kysely täytettyä",
    timeLimitPerPage: "Enimmäisaika kyselyn sivun täyttämiseen",
    showTimer: "Käytä ajastinta",
    timerLocation: "Näytä ajastus -paneeli",
    timerInfoMode: "Näytä ajastus -paneelin tila",
    renderMode: "Renderöinnin tila",
    allowAddPanel: "Salli paneelin lisääminen",
    allowRemovePanel: "Salli paneelin poistaminen",
    addPanelText: "Paneelin tekstin lisääminen",
    removePanelText: "Paneelin tekstin poistaminen",
    isSinglePage: "Näytä kaikki elementit yhdellä sivulla",
    html: "Html",
    setValue: "Vastata",
    dataFormat: "Kuvan muoto",
    allowAddRows: "Salli rivien lisääminen",
    allowRemoveRows: "Salli rivien poistaminen",
    allowRowReorder: "Salli rivin vetäminen ja pudottaminen",
    responsiveImageSizeHelp: "Ei sovelleta, jos määrität kuvan tarkan leveyden tai korkeuden.",
    minImageWidth: "Kuvan vähimmäisleveys",
    maxImageWidth: "Kuvan enimmäisleveys",
    minImageHeight: "Kuvan vähimmäiskorkeus",
    maxImageHeight: "Kuvan enimmäiskorkeus",
    minValue: "Vähimmäisarvo",
    maxValue: "Suurin arvo",
    caseInsensitive: "Isot ja pienet kirjaimet eivät ole merkitseviä",
    minLength: "Vähimmäispituus",
    allowDigits: "Salli numerot",
    minCount: "Vähimmäismäärä",
    maxCount: "Enimmäismäärä",
    regex: "Säännöllinen lauseke",
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
    maxCommentLength: "Kommentin enimmäispituus (merkkeinä)",
    commentAreaRows: "Kommenttialueen korkeus (riveinä)",
    autoGrowComment: "Laajenna kommenttialue tarvittaessa automaattisesti",
    allowResizeComment: "Salli käyttäjien muuttaa tekstialueiden kokoa",
    textUpdateMode: "Tekstikysymyksen arvon päivittäminen",
    maskType: "Syöttörajoitteen tyyppi",
    autoFocusFirstError: "Aseta kohdistus ensimmäiseen virheelliseen vastaukseen",
    checkErrorsMode: "Suorita vahvistus",
    validateVisitedEmptyFields: "Vahvista tyhjät kentät, kun kohdistus on kadonnut",
    navigateToUrl: "Siirry URL-osoitteeseen",
    navigateToUrlOnCondition: "Dynaaminen URL-osoite",
    completedBeforeHtml: "Merkintä, joka osoittaa, onko käyttäjä jo täyttänyt tämän kyselyn",
    completedHtml: "Kyselyn sivujen merkinnät suoritettu",
    completedHtmlOnCondition: "Dynaaminen kysely viimeistelee sivun merkinnät",
    loadingHtml: "Merkintä, joka näkyy, kun kyselymalli latautuu",
    commentText: "Kommenttialueen teksti",
    autocomplete: "Automaattisen täydennyksen tyyppi",
    labelTrue: "Tosi-merkintä",
    labelFalse: "Epätosi-merkintä",
    allowClear: "Näytä Tyhjennä-painike",
    searchMode: "Hakutila",
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
    panelCount: "Paneelien alkuperäinen määrä",
    minPanelCount: "Paneelien vähimmäismäärä",
    maxPanelCount: "Paneelien enimmäismäärä",
    panelsState: "Sisäpaneelin laajennustila",
    prevPanelText: "Edellinen paneeli -painikkeen työkaluvihje",
    nextPanelText: "Seuraava paneeli -painikkeen työkaluvihje",
    removePanelButtonLocation: "Poista paneelipainikkeen sijainti",
    hideIfRowsEmpty: "Piilota kysymys, jos rivejä ei ole",
    hideColumnsIfEmpty: "Piilota sarakkeet, jos rivejä ei ole",
    rateValues: "Muokatut hinta-arvot",
    rateCount: "Hintojen määrä",
    autoGenerate: "Miten korkoarvot määritetään?",
    hideIfChoicesEmpty: "Piilota kysymys, jos se ei sisällä vaihtoehtoja",
    minWidth: "Vähimmäisleveys (CSS-hyväksyttyinä arvoina)",
    maxWidth: "Suurin leveys (CSS-hyväksytyissä arvoissa)",
    width: "Leveys (CSS-hyväksytyissä arvoissa)",
    showHeader: "Näytä sarakeotsikot",
    horizontalScroll: "Näytä vaakasuora vierityspalkki",
    columnMinWidth: "Sarakkeen vähimmäisleveys (CSS-hyväksytyissä arvoissa)",
    rowTitleWidth: "Riviotsikon leveys (CSS-hyväksytyissä arvoissa)",
    valueTrue: "Tosi-arvo",
    valueFalse: "Epätosi-arvo",
    minErrorText: "Arvo on alle minimin -virhesanoma",
    maxErrorText: "\"Arvo ylittää maksimin\" -virhesanoma",
    otherErrorText: "Tyhjä kommentti -virhesanoma",
    keyDuplicationError: "Ei-yksilöllinen avainarvo -virhesanoma",
    minSelectedChoices: "Valitut valinnat vähintään:",
    maxSelectedChoices: "Valittujen vaihtoehtojen enimmäismäärä",
    logoWidth: "Logon leveys (CSS-hyväksytyissä arvoissa)",
    logoHeight: "Logon korkeus (CSS:n hyväksymissä arvoissa)",
    readOnly: "Vain luku -tilassa",
    enableIf: "Muokattavissa, jos",
    noRowsText: "Ei rivejä -viesti",
    separateSpecialChoices: "Erilliset erikoisvalinnat (Ei mitään, Muu, Valitse kaikki)",
    choicesFromQuestion: "Kopioi valinnat seuraavasta kysymyksestä",
    choicesFromQuestionMode: "Mitkä vaihtoehdot kopioidaan?",
    choiceValuesFromQuestion: "Käytä seuraavan matriisin sarakkeen tai paneelikysymyksen arvoja valintatunnuksina",
    choiceTextsFromQuestion: "Käytä seuraavan matriisin sarakkeen tai paneelikysymyksen arvoja valintateksteinä",
    progressBarShowPageTitles: "Sivujen otsikoiden näyttäminen edistymispalkissa",
    progressBarShowPageNumbers: "Sivunumeroiden näyttäminen edistymispalkissa",
    showCommentArea: "Näytä kommenttialue",
    commentPlaceholder: "Kommenttialueen paikkamerkki",
    displayRateDescriptionsAsExtremeItems: "Näytä nopeuskuvaukset ääriarvoina",
    rowOrder: "Rivien järjestys",
    columnsLayout: "Sarakkeen asettelu",
    columnColCount: "Sisäkkäisten sarakkeiden määrä",
    correctAnswer: "Oikea vastaus",
    defaultPanelValue: "Oletusarvot",
    cells: "Solujen tekstit",
    fileInputPlaceholder: "Valitse tiedosto tai liitä tiedostolinkki...",
    keyName: "Avainsarake",
    itemvalue: {
      visibleIf: "Tee vaihtoehto näkyväksi, jos",
      enableIf: "Tee vaihtoehdosta valittava, jos"
    },
    "itemvalue@rows": {
      visibleIf: "Tee rivistä näkyvä, jos",
      enableIf: "Tee rivistä muokattava, jos"
    },
    imageitemvalue: {
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
    previewMode: "Esikatselu-tila",
    gridLayoutEnabled: "Ota ruudukkoasettelu käyttöön",
    gridLayoutColumns: "Ruudukkoasettelun sarakkeet",
    maskSettings: "Maskin asetukset",
    detailErrorLocation: "Rivin laajennuksen virhesanoman tasaus",
    // Creator tabs
    tabs: {
      panel: {
        layout: "Paneelin asettelu"
      },
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
      matrixChoices: "Oletusvalinnat",
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
      mask: "Syöttörajoitteen asetukset",
      layout: {
        panel: "Asettelu",
        question: "Asettelu",
        base: "Asettelu"
      },
      data: "Data",
      validation: "Validointi",
      cells: "Solut",
      showOnCompleted: "Näytä kun valmis",
      logo: "Logo kyselyn otsikossa",
      slider: "Liukusäädin",
      expression: "Lauseke",
      questionSettings: "Kysymyksen asetukset",
      header: "Otsikko",
      background: "Tausta",
      appearance: "Ulkonäkö",
      accentColors: "Korostusvärit",
      surfaceBackground: "Surfacen tausta",
      scaling: "Skaalaus",
      others: "Muut"
    },
    editProperty: "Muokkaa ominaisuutta'{0}'",
    items: "[ Kohteet: {0} ]",
    choicesVisibleIf: "Valinnat näkyvät, jos",
    choicesEnableIf: "Valinnat ovat valittavissa, jos",
    columnsEnableIf: "Sarakkeet ovat näkyvissä, jos",
    rowsEnableIf: "Rivit ovat näkyvissä, jos",
    innerIndent: "Sisäisten sisennysten lisääminen",
    copyDefaultValueFromLastEntry: "Käytä viimeisen merkinnän vastauksia oletuksena",
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
    verticalAlign: "Pystysuuntainen tasaus",
    alternateRows: "Vaihtoehtoiset rivit",
    columnsVisibleIf: "Sarakkeet ovat näkyvissä, jos",
    rowsVisibleIf: "Rivit ovat näkyvissä, jos",
    otherPlaceholder: "Kommenttialueen paikkamerkki",
    filePlaceholder: "Tiedoston paikkamerkkiteksti",
    photoPlaceholder: "Valokuvan paikkamerkkiteksti",
    fileOrPhotoPlaceholder: "Tiedoston tai valokuvan paikkamerkkiteksti",
    rateType: "Hinnan tyyppi",
    url_placeholder: "Esimerkki: https://api.example.com/books",
    path_placeholder: "Esimerkki: categories.fiction",
    questionStartIndex_placeholder: "Esim.: a)",
    width_placeholder: "Esimerkki: 6 tuumaa",
    minWidth_placeholder: "Esimerkki: 600 pikseliä",
    maxWidth_placeholder: "Esimerkki: 50 %",
    imageHeight_placeholder: "auto",
    imageWidth_placeholder: "auto",
    itemTitleWidth_placeholder: "Esimerkki: 100px",
    theme: {
      themeName: "Teema",
      isPanelless: "Kysymyksen ulkonäkö",
      editorPanel: "Taustan ja kulman säde",
      questionPanel: "Taustan ja kulman säde",
      primaryColor: "Korostusväri",
      panelBackgroundTransparency: "Paneelin taustan peittävyys",
      questionBackgroundTransparency: "Taustan peittävyyden kyseenalaistaminen",
      fontSize: "Kirjasinkoko",
      scale: "Mittakaava",
      cornerRadius: "Kulman säde",
      advancedMode: "Edistynyt tila",
      pageTitle: "Otsikon fontti",
      pageDescription: "Kuvauksen fontti",
      questionTitle: "Otsikon fontti",
      questionDescription: "Kuvauksen fontti",
      editorFont: "Fontti",
      backgroundOpacity: "Läpikuultamattomuus",
      "--sjs-font-family": "Fonttiperhe",
      "--sjs-general-backcolor-dim": "Taustaväri",
      "--sjs-primary-backcolor": "Aksentti tausta",
      "--sjs-primary-forecolor": "Aksentti etualalla",
      "--sjs-special-red": "Virhesanomista",
      "--sjs-shadow-small": "Varjo-tehosteet",
      "--sjs-shadow-inner": "Varjo-tehosteet",
      "--sjs-border-default": "Värit"
    },
    "header@header": {
      headerView: "Näkymä",
      logoPosition: "Logon sijainti",
      surveyTitle: "Kyselyn otsikon fontti",
      surveyDescription: "Kyselyn kuvauksen fontti",
      headerTitle: "Kyselyn otsikon fontti",
      headerDescription: "Kyselyn kuvauksen fontti",
      inheritWidthFrom: "Sisältöalueen leveys",
      textAreaWidth: "Tekstin leveys",
      backgroundColorSwitch: "Taustaväri",
      backgroundImage: "Taustakuvan",
      backgroundImageOpacity: "Läpikuultamattomuus",
      overlapEnabled: "Limittyä",
      logoPositionX: "Logon sijainti",
      titlePositionX: "Otsikon sijainti",
      descriptionPositionX: "Kuvauksen sijainti"
    }
  },
  // Property values
  pv: {
    "true": "Tosi",
    "false": "Epätosi",
    file: "Paikalliset tiedostot",
    camera: "Kamera",
    "file-camera": "Paikalliset tiedostot tai kamera",
    inherit: "Peri",
    show: "Näytä",
    hide: "Piilota",
    default: "Oletus",
    initial: "Alkuperäinen",
    random: "Satunnainen",
    collapsed: "Pienennetty",
    expanded: "Laajennettu",
    none: "Ei mitään",
    asc: "Nouseva",
    desc: "Laskeva",
    indeterminate: "Määrittämätön",
    selected: "Valittu",
    unselected: "Valitsematta",
    decimal: "Desimaali",
    currency: "Valuutta",
    percent: "Prosentti",
    firstExpanded: "Ensimmäinen laajennettu",
    off: "Pois",
    list: "Lista",
    carousel: "Karuselli",
    tab: "Välilehdet",
    progressTop: "Edistyminen ylhäällä",
    progressBottom: "Edistyminen alhaalla",
    progressTopBottom: "Edistyminen ylhäällä ja alhaalla",
    horizontal: "Vaaka",
    vertical: "Pysty",
    top: "Ylhäällä",
    bottom: "Alhaalla",
    topBottom: "Ylhäällä ja alhaalla",
    both: "Molemmat",
    left: "Vasen",
    right: "Oikea",
    center: "Keskellä",
    leftRight: "Vasen ja oikea",
    middle: "Keskimmäinen",
    color: "Väri",
    date: "Päivämäärä",
    datetime: "Päivämäärä ja aika",
    "datetime-local": "datetime-local",
    email: "Sähköposti",
    month: "Kuukausi",
    number: "Numero",
    password: "Salasana",
    range: "Etäisyys",
    tel: "Puh",
    text: "Tekstiviesti",
    time: "Aika",
    url: "URL",
    week: "Viikko",
    hidden: "Piilotettu",
    edit: "Muokkaa",
    display: "Näytä",
    contain: "Sisältää",
    cover: "Peittää",
    fill: "Täyttää",
    next: "Seuraava",
    last: "Viimeinen",
    onComplete: "Valmistuessa",
    onHidden: "Piilotettaessa",
    onHiddenContainer: "Kun kysymys tai sen paneeli/sivu piilotetaan",
    clearInvisibleValues: {
      none: "Ei mitään"
    },
    clearIfInvisible: {
      none: "Ei mitään"
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
    autocomplete: {
      name: "Koko nimi",
      "honorific-prefix": "Etuliite",
      "given-name": "Etunimi",
      "additional-name": "Toinen nimi",
      "family-name": "Sukunimi",
      "honorific-suffix": "Suffiksi",
      nickname: "Lempinimi",
      "organization-title": "Tehtävänimike",
      username: "Käyttäjänimi",
      "new-password": "Uusi salasana",
      "current-password": "Nykyinen salasana",
      organization: "Organisaation nimi",
      "street-address": "Koko kadun osoite",
      "address-line1": "Osoite, rivi 1",
      "address-line2": "Osoite, rivi 2",
      "address-line3": "Osoite, rivi 3",
      "address-level4": "Tason 4 osoite",
      "address-level3": "Tason 3 osoite",
      "address-level2": "Tason 2 osoite",
      "address-level1": "Tason 1 osoite",
      country: "Maakoodi",
      "country-name": "Maan nimi",
      "postal-code": "Postinumero",
      "cc-name": "Kortinhaltijan nimi",
      "cc-given-name": "Kortinhaltijan etunimi",
      "cc-additional-name": "Kortinhaltijan toinen nimi",
      "cc-family-name": "Kortinhaltijan sukunimi",
      "cc-number": "Luottokortin numero",
      "cc-exp": "Vanhentumispäivä",
      "cc-exp-month": "Viimeinen voimassaolokuukausi",
      "cc-exp-year": "Vanhentumisvuosi",
      "cc-csc": "Kortin turvakoodi",
      "cc-type": "Luottokortin tyyppi",
      "transaction-currency": "Tapahtuman valuutta",
      "transaction-amount": "Tapahtuman summa",
      language: "Ensisijainen kieli",
      bday: "Syntymäpäivä",
      "bday-day": "Syntymäpäivä",
      "bday-month": "Syntymäpäivä kuukausi",
      "bday-year": "Syntymäpäivä vuosi",
      sex: "Sukupuoli",
      url: "Verkkosivuston URL-osoite",
      photo: "Profiilikuva",
      tel: "Puhelinnumero",
      "tel-country-code": "Puhelimen maakoodi",
      "tel-national": "Kansallinen puhelinnumero",
      "tel-area-code": "Suuntanumero",
      "tel-local": "Paikallinen puhelinnumero",
      "tel-local-prefix": "Paikallisen puhelimen etuliite",
      "tel-local-suffix": "Paikallisen puhelimen pääte",
      "tel-extension": "Puhelimen laajennus",
      email: "Sähköpostiosoite",
      impp: "Pikaviestiprotokolla"
    },
    maskType: {
      none: "Ei mitään",
      pattern: "Kuvio",
      numeric: "Numeerinen",
      datetime: "Päivämäärä ja kellonaika",
      currency: "Valuutta"
    },
    inputTextAlignment: {
      auto: "Automaattinen",
      left: "Vasen",
      right: "Oikea"
    },
    all: "Kaikki",
    page: "Sivu",
    survey: "Kysely",
    onNextPage: "Seuraavalla sivulla",
    onValueChanged: "Vastauksen muuttuessa",
    onValueChanging: "Ennen vastauksen muuttamista",
    questionsOnPageMode: {
      standard: "Alkuperäinen rakenne",
      singlePage: "Näytä kaikki kysymykset yhdellä sivulla",
      questionPerPage: "Näytä yksittäinen kysymys sivua kohden"
    },
    noPreview: "Ei esikatselua",
    showAllQuestions: "Näytä esikatselu kaikilla kysymyksillä",
    showAnsweredQuestions: "Näytä esikatselu vastatuilla kysymyksillä",
    allQuestions: "Näytä kaikki kysymykset",
    answeredQuestions: "Näytä vain vastatut kysymykset",
    pages: "Valmiit sivut",
    questions: "Vastatut kysymykset",
    requiredQuestions: "Vastatut vaaditut kysymykset",
    correctQuestions: "Oikeat vastaukset",
    buttons: "Valmiit sivut (painike Käyttöliittymä)",
    underInput: "Tulon alla",
    underTitle: "Otsikon alla",
    onBlur: "Sumennuksessa",
    onTyping: "Kirjoittamisen aikana",
    underRow: "Rivin alla",
    underRowSingle: "Rivin alla näkyy vain yksi paneeli",
    auto: "Automaattinen",
    showNavigationButtons: {
      none: "Ei mitään"
    },
    timerInfoMode: {
      combined: "Molemmat"
    },
    addRowButtonLocation: {
      default: "Riippuu matriisin asettelusta"
    },
    panelsState: {
      default: "Käyttäjät eivät voi laajentaa tai kutistaa paneeleja",
      collapsed: "Kaikki paneelit on tiivistetty",
      expanded: "Kaikki paneelit on laajennettu",
      firstExpanded: "Ensimmäinen laajennettu"
    },
    widthMode: {
      static: "Staattinen",
      responsive: "Responsiivinen"
    },
    contentMode: {
      image: "Kuva",
      video: "Video",
      youtube: "YouTubessa"
    },
    displayMode: {
      buttons: "Painikkeet",
      dropdown: "Avattava valikko"
    },
    rateColorMode: {
      default: "Oletus",
      scale: "Mittakaava"
    },
    scaleColorMode: {
      monochrome: "Yksivärinen",
      colored: "Värillinen"
    },
    autoGenerate: {
      "true": "Tosi",
      "false": "Kirjoita manuaalisesti"
    },
    rateType: {
      labels: "Otsikot",
      stars: "Tähdet",
      smileys: "Hymiöt"
    },
    state: {
      default: "Lukittu"
    },
    showQuestionNumbers: {
      default: "Automaattinen numerointi",
      on: "Automaattinen numerointi",
      onPage: "Nollaa jokaisella sivulla",
      onpanel: "Nollaa jokaisessa paneelissa",
      onPanel: "Nollaa jokaisessa paneelissa",
      recursive: "Rekursiivinen numerointi",
      onSurvey: "Jatka kyselyssä",
      off: "Ei numerointia"
    },
    descriptionLocation: {
      underTitle: "Kysymyksen otsikon alla",
      underInput: "Syöttökentän alla"
    },
    selectToRankAreasLayout: {
      horizontal: "Valintojen vieressä",
      vertical: "Yllä olevat valinnat"
    },
    displayStyle: {
      decimal: "Desimaali",
      currency: "Valuutta",
      percent: "Prosenttiosuus",
      date: "Päivämäärä"
    },
    totalDisplayStyle: {
      decimal: "Desimaali",
      currency: "Valuutta",
      percent: "Prosenttiosuus",
      date: "Päivämäärä"
    },
    rowOrder: {
      initial: "Alkuperäinen"
    },
    questionOrder: {
      initial: "Alkuperäinen"
    },
    progressBarLocation: {
      top: "Huippu",
      bottom: "Pohja",
      topbottom: "Ylhäällä ja alhaalla",
      aboveheader: "Otsikon yläpuolella",
      belowheader: "Otsikon alapuolella",
      off: "Piilevä"
    },
    sum: "Summa",
    count: "Laske",
    min: "Min",
    max: "Max",
    avg: "ka",
    searchMode: {
      contains: "Sisältää",
      startsWith: "Alkaa"
    },
    backgroundImageFit: {
      auto: "Auto",
      cover: "Peittää",
      contain: "Sisältää",
      fill: "Venyä",
      tile: "Laatta"
    },
    backgroundImageAttachment: {
      fixed: "Kiinteä",
      scroll: "Vierittää"
    },
    headerView: {
      basic: "Perus",
      advanced: "Edistynyt"
    },
    inheritWidthFrom: {
      survey: "Sama kuin kyselyssä",
      container: "Sovita konttiin"
    },
    backgroundColorSwitch: {
      none: "Ei mitään",
      accentColor: "Korostusväri",
      custom: "Tapa"
    },
    colorPalette: {
      light: "Vaalea",
      dark: "Tumma"
    },
    isPanelless: {
      "false": "Oletus",
      "true": "Ilman paneeleja"
    },
    progressBarInheritWidthFrom: {
      survey: "Sama kuin kyselyssä",
      container: "Sama kuin kontti"
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
  peplaceholder: {
    patternmask: {
      pattern: "Esimerkki: +1(999)-999-99-99"
    },
    datetimemask: {
      pattern: "Esimerkki: kk/pp/v"
    },
    currencymask: {
      prefix: "Esimerkki: $",
      suffix: "Esimerkki: USD"
    },
    panelbase: {
      questionTitleWidth: "Esimerkki: 200px"
    },
    panellayoutcolumn: {
      effectiveWidth: "Esimerkki: 30 %",
      questionTitleWidth: "Esimerkki: 200px"
    }
  },
  pehelp: {
    panel: {
      name: "Paneelin tunnus, joka ei näy vastaajille.",
      description: "Kirjoita paneelin tekstitys.",
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää paneelin näkyvyyden.",
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa paneelin vain luku -tilan käytöstä.",
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      questionTitleLocation: "Koskee kaikkia tämän paneelin kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      questionTitleWidth: "Määrittää kysymysten otsikoiden tasaisen leveyden, kun ne tasataan kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      questionErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kaikkiin paneelin kysymyksiin. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta.",
      questionOrder: "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta.",
      page: "Siirtää paneelin valitun sivun loppuun.",
      innerIndent: "Lisää tilaa tai reunuksen paneelin sisällön ja paneeliruudun vasemman reunan väliin.",
      startWithNewLine: "Poista valinta, jos haluat näyttää paneelin yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos paneeli on lomakkeen ensimmäinen elementti.",
      state: "Valitse seuraavista: \"Laajennettu\" - paneeli näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - paneeli näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - paneeli näkyy kokonaisuudessaan eikä sitä voi kutistaa.",
      width: "Asettaa paneelin leveyden suhteessa muihin saman rivin mittauselementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      showQuestionNumbers: "Määrittää numerot tässä paneelissa sisäkkäisille kysymyksille.",
      effectiveColSpan: "Määrittää, kuinka monta saraketta tämä paneeli kattaa ruudukkoasettelussa.",
      gridLayoutColumns: "Tämän taulukon avulla voit määrittää paneelin jokaisen ruudukkosarakkeen. Se määrittää automaattisesti kunkin sarakkeen leveysprosentin rivin elementtien enimmäismäärän perusteella. Jos haluat mukauttaa ruudukon asettelua, säädä näitä arvoja manuaalisesti ja määritä otsikon leveys kunkin sarakkeen kaikille kysymyksille."
    },
    paneldynamic: {
      name: "Paneelin tunnus, joka ei näy vastaajille.",
      description: "Kirjoita paneelin tekstitys.",
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää paneelin näkyvyyden.",
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa paneelin vain luku -tilan käytöstä.",
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      templateQuestionTitleLocation: "Koskee kaikkia tämän paneelin kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      templateQuestionTitleWidth: "Määrittää kysymysotsikoille yhtenäisen leveyden, kun ne on tasattu kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      templateErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      errorLocation: "Määrittää virhesanoman sijainnin suhteessa kaikkiin paneelin kysymyksiin. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta.",
      page: "Siirtää paneelin valitun sivun loppuun.",
      innerIndent: "Lisää tilaa tai reunuksen paneelin sisällön ja paneeliruudun vasemman reunan väliin.",
      startWithNewLine: "Poista valinta, jos haluat näyttää paneelin yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos paneeli on lomakkeen ensimmäinen elementti.",
      state: "Valitse seuraavista: \"Laajennettu\" - paneeli näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - paneeli näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - paneeli näkyy kokonaisuudessaan eikä sitä voi kutistaa.",
      width: "Asettaa paneelin leveyden suhteessa muihin saman rivin mittauselementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      templateTitle: "Kirjoita malli dynaamisten paneelien otsikoille. Käytä {panelIndex} paneelin yleistä sijaintia ja {visiblePanelIndex} sen järjestystä näkyvien paneelien joukossa. Lisää nämä paikkamerkit kuvioon lisätäksesi automaattisen numeroinnin.",
      templateTabTitle: "Kirjoita välilehtien otsikoiden malli. Käytä {panelIndex} paneelin yleistä sijaintia ja {visiblePanelIndex} sen järjestystä näkyvien paneelien joukossa. Lisää nämä paikkamerkit kuvioon lisätäksesi automaattisen numeroinnin.",
      tabTitlePlaceholder: "Välilehtien otsikoiden varateksti, jota käytetään, kun välilehden otsikkomalli ei tuota merkityksellistä arvoa.",
      templateVisibleIf: "Tämän asetuksen avulla voit hallita yksittäisten paneelien näkyvyyttä dynaamisessa paneelissa. {panel}-paikkamerkin avulla voit viitata lausekkeen nykyiseen paneeliin.",
      titleLocation: "Tämä asetus periytyy automaattisesti kaikkiin tämän paneelin kysymyksiin. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena).",
      descriptionLocation: "\"Peri\" -vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Paneelin otsikon alla\" oletuksena).",
      newPanelPosition: "Määrittää juuri lisätyn paneelin sijainnin. Oletuksena uudet paneelit lisätään loppuun. Valitse \"Seuraava\" lisätäksesi uuden paneelin nykyisen jälkeen.",
      copyDefaultValueFromLastEntry: "Monistaa edellisen paneelin vastaukset ja määrittää ne seuraavaan lisättyyn dynaamiseen paneeliin.",
      keyName: "Viittaa kysymyksen nimeen, jos haluat edellyttää, että käyttäjä antaa yksilöllisen vastauksen tähän kysymykseen kussakin paneelissa."
    },
    copyDefaultValueFromLastEntry: "Monistaa vastaukset viimeiseltä riviltä ja määrittää ne seuraavalle lisätylle dynaamiselle riville.",
    defaultValueExpression: "Tämän asetuksen avulla voit määrittää oletusarvoisen vastausarvon lausekkeen perusteella. Lauseke voi sisältää peruslaskutoimituksia - '{q1_id} + {q2_id}', totuusarvolausekkeita, kuten '{age} > 60', ja funktioita: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne. Tämän lausekkeen määrittämä arvo toimii alkuperäisenä oletusarvona, jonka vastaajan manuaalinen syöttö voi ohittaa.",
    resetValueIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää, milloin vastaajan syöte palautetaan arvoon \"Oletusarvolauseke\" tai \"Aseta arvolauseke\" tai \"Oletusvastaus\" -arvoon (jos jompikumpi on asetettu).",
    setValueIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää, milloin \"Aseta arvolauseke\" suoritetaan, ja määritä tuloksena oleva arvo dynaamisesti vastauksena.",
    setValueExpression: "Määritä lauseke, joka määrittää arvon, joka määritetään, kun Aseta arvo jos -säännön ehdot täyttyvät. Lauseke voi sisältää peruslaskutoimituksia - '{q1_id} + {q2_id}', totuusarvolausekkeita, kuten '{age} > 60', ja funktioita: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne. Tämän lausekkeen määrittämä arvo voidaan ohittaa vastaajan manuaalisella syötöllä.",
    gridLayoutEnabled: "Survey Creatorin avulla voit manuaalisesti säätää lomake-elementtien sisäisiä leveyksiä asettelun hallitsemiseksi. Jos tämä ei tuota toivottua tulosta, voit ottaa käyttöön ruudukkoasettelun, joka jäsentää elementtejä sarakepohjaisen järjestelmän avulla. Määritä asettelusarakkeet valitsemalla sivu tai paneeli ja käyttämällä \"Kysymysasetukset\" → \"Ruudukkosarakkeet\" -taulukkoa. Jos haluat säätää, kuinka monta saraketta kysymys kattaa, valitse se ja aseta haluamasi arvo \"Asettelu\" → \"Sarakeväli\" -kenttään.",
    question: {
      name: "Kysymystunnus, joka ei näy vastaajille.",
      description: "Kirjoita kysymyksen alaotsikko.",
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää kysymyksen näkyvyyden.",
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa kysymyksen vain luku -tilan käytöstä.",
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn etenemisen tai lähettämisen, ellei kysymykseen ole vastattu.",
      startWithNewLine: "Poista valinta, jos haluat näyttää kysymyksen yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos kysymys on lomakkeen ensimmäinen elementti.",
      page: "Sijoittaa kysymyksen uudelleen valitun sivun loppuun.",
      state: "Valitse seuraavista: \"Laajennettu\" - kysymysruutu näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - kysymysruutu näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - kysymysruutu näkyy kokonaisuudessaan eikä sitä voi kutistaa.",
      titleLocation: "Ohittaa paneeli-, sivu- tai kyselytasolla määritetyt otsikon tasaussäännöt. \"Peri\"-vaihtoehto käyttää kaikkia ylemmän tason asetuksia (jos määritetty) tai kyselytason asetuksia (\"Ylin\" oletuksena).",
      descriptionLocation: "\"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Kysymyksen otsikon alla\" oletuksena).",
      errorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena).",
      indent: "Lisää välilyönnin tai reunuksen kysymyksen sisällön ja kysymysruudun vasemman reunan väliin.",
      width: "Määrittää kysymyksen leveyden suhteessa saman rivin muihin kyselyelementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      surveyvalidator: {
        expression: "Käytä taikasauvakuvaketta asettaaksesi kysymyksen vahvistussäännön."
      },
      textUpdateMode: "Valitse seuraavista: \"Kadonneessa tarkennuksessa\" - arvo päivitetään, kun syöttökenttä menettää tarkennuksen; \"Kirjoitettaessa\" - arvo päivitetään reaaliajassa, kun käyttäjät kirjoittavat. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Oletusarvoisesti menetetty kohdistus\").",
      url: "Voit käyttää mitä tahansa verkkopalvelua tietolähteenä monivalintakysymyksissä. Voit täyttää valinta-arvot antamalla tiedot tarjoavan palvelun URL-osoitteen.",
      searchMode: "Vertailutoiminto, jota käytetään avattavan luettelon suodattamiseen.",
      textWrapEnabled: "Valintavaihtoehtojen pitkät tekstit luovat automaattisesti rivinvaihdot, jotka mahtuvat avattavaan valikkoon. Poista valinta, jos haluat leikata tekstit.",
      effectiveColSpan: "Määrittää, kuinka monta saraketta tämä kysymys kattaa ruudukkoasettelussa."
    },
    signaturepad: {
      signatureWidth: "Määrittää näytettävän allekirjoitusalueen ja tuloksena olevan kuvan leveyden.",
      signatureHeight: "Määrittää näytettävän allekirjoitusalueen ja tuloksena olevan kuvan korkeuden.",
      signatureAutoScaleEnabled: "Valitse tämä, jos haluat, että allekirjoitusalue täyttää kaiken kysymysruudussa käytettävissä olevan tilan säilyttäen oletusarvoisen 3:2-kuvasuhteen. Kun mukautetut leveys- ja korkeusarvot on määritetty, asetus säilyttää näiden mittojen kuvasuhteen."
    },
    file: {
      imageHeight: "Säätää kuvan korkeutta kyselyn tuloksissa.",
      imageWidth: "Säätää kuvan leveyttä kyselyn tuloksissa.",
      allowImagesPreview: "Näyttää ladattujen tiedostojen pikkukuvien esikatselut, kun mahdollista. Poista valinta, jos haluat näyttää tiedostokuvakkeet sen sijaan."
    },
    image: {
      contentMode: "\"Auto\" -vaihtoehto määrittää automaattisesti sopivan näyttötilan - Kuva, Video tai YouTube - annetun lähde-URL-osoitteen perusteella."
    },
    imagepicker: {
      imageHeight: "Ohittaa vähimmäis- ja enimmäiskorkeusarvot.",
      imageWidth: "Ohittaa vähimmäis- ja enimmäisleveysarvot.",
      choices: "\"Arvo\" toimii ehdollisissa säännöissä käytettynä tuotetunnuksena; \"Teksti\" näkyy vastaajille.",
      contentMode: "Valitse \"Kuva\" tai \"Video\" asettaaksesi mediavalitsimen sisältötilan. Jos \"Kuva\" on valittuna, varmista, että kaikki annetut vaihtoehdot ovat kuvatiedostoja seuraavissa muodoissa: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Samoin, jos \"Video\" on valittuna, varmista, että kaikki vaihtoehdot ovat suoria linkkejä videotiedostoihin seuraavissa muodoissa: MP4, MOV, WMV, FLV, AVI, MKV. Huomaa, että YouTube-linkkejä ei tueta videoasetuksissa."
    },
    text: {
      size: "Tämä asetus muuttaa vain syöttökentän kokoa eikä vaikuta kysymysruudun leveyteen. Jos haluat rajoittaa hyväksyttyä syötteen pituutta, siirry kohtaan <b>Vahvistus → merkkien enimmäismäärä</b>."
    },
    comment: {
      rows: "Määrittää syöttökentässä näytettävien rivien määrän. Jos tulo vie enemmän rivejä, vierityspalkki tulee näkyviin."
    },
    // survey templates
    survey: {
      readOnly: "Valitse tämä, jos haluat estää vastaajia vastaamasta kyselyyn.",
      progressBarLocation: "Määrittää edistymispalkin sijainnin. \"Auto\"-arvo näyttää edistymispalkin kyselyn otsikon ylä- tai alapuolella."
    },
    matrixdropdowncolumn: {
      name: "Sarakkeen tunnus, joka ei näy vastaajille.",
      isUnique: "Kun sarake on otettu käyttöön, vastaajan on annettava yksilöllinen vastaus jokaiseen tämän sarakkeen kysymykseen.",
      rows: "Määrittää syöttökentässä näytettävien rivien määrän. Jos tulo vie enemmän rivejä, vierityspalkki tulee näkyviin.",
      visibleIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka määrittää sarakkeen näkyvyyden.",
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa sarakkeen vain luku -tilan käytöstä.",
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      showInMultipleColumns: "Kun tämä asetus on valittuna, kullekin vaihtoehdolle luodaan oma sarake.",
      colCount: "Järjestää valintavaihtoehdot monisarakkeiseen asetteluun. Kun asetuksena on 0, asetukset näytetään yhdellä rivillä. Kun arvoksi on määritetty -1, todellinen arvo periytyy päämatriisin sisäkkäisten sarakkeiden määrä -ominaisuudesta."
    },
    caseInsensitive: "Valitse, onko säännöllisen lausekkeen isoja ja pieniä kirjaimia käsiteltävä vastaavina.",
    widthMode: "Valitse seuraavista: \"Staattinen\" - asettaa kiinteän leveyden; \"Reagoiva\" - tekee kyselystä koko näytön leveyden; \"Auto\" - soveltaa jompaakumpaa näistä kahdesta riippuen käytetyistä kysymystyypeistä.",
    cookieName: "Evästeet estävät käyttäjiä täyttämästä samaa kyselyä kahdesti.",
    logo: "Liitä kuvalinkki (ei kokorajoituksia) tai napsauta kansiokuvaketta selataksesi tiedostoa tietokoneeltasi (enintään 64 kt).",
    logoWidth: "Määrittää logon leveyden CSS-yksiköissä (px, %, in, pt jne.).",
    logoHeight: "Asettaa logon korkeuden CSS-yksiköinä (px, %, in, pt jne.).",
    logoFit: "Valitse seuraavista: \"Ei mitään\" - kuva säilyttää alkuperäisen kokonsa; \"Sisältää\" - kuvan kokoa muutetaan sopivaksi säilyttäen samalla kuvasuhteensa; \"Kansi\" - kuva täyttää koko laatikon säilyttäen samalla kuvasuhteensa; \"Täytä\" - kuva venytetään täyttämään laatikko säilyttämättä sen kuvasuhdetta.",
    autoAdvanceEnabled: "Valitse tämä, jos haluat, että kysely siirtyy automaattisesti seuraavalle sivulle, kun vastaaja on vastannut kaikkiin nykyisen sivun kysymyksiin. Tätä ominaisuutta ei käytetä, jos sivun viimeinen kysymys on avoin tai sallii useita vastauksia.",
    autoAdvanceAllowComplete: "Valitse, haluatko kyselyn täyttyvän automaattisesti, kun vastaaja on vastannut kaikkiin kysymyksiin.",
    showNavigationButtons: "Määrittää sivun navigointipainikkeiden näkyvyyden ja sijainnin.",
    navigationButtonsLocation: "Määrittää navigointipainikkeiden sijainnin sivulla.",
    showPreviewBeforeComplete: "Ota esikatselusivu käyttöön vain kaikilla kysymyksillä tai vastatuilla kysymyksillä.",
    questionTitleLocation: "Koskee kaikkia kyselyn kysymyksiä. Tämä asetus voidaan ohittaa otsikon tasaussäännöillä alemmilla tasoilla: paneeli, sivu tai kysymys. Alemman tason asetus ohittaa korkeammalla tasolla olevat.",
    requiredMark: "Symboli tai symbolisarja, joka osoittaa, että vastaus vaaditaan.",
    questionStartIndex: "Kirjoita numero tai kirjain, jolla haluat aloittaa numeroinnin.",
    questionErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan.",
    autoFocusFirstQuestion: "Valitse tämä, jos haluat, että kunkin sivun ensimmäinen syöttökenttä on valmis tekstinsyöttöä varten.",
    questionOrder: "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. Tämän asetuksen vaikutus näkyy vain Esikatselu-välilehdessä.",
    maxTextLength: "Vain tekstinsyöttökysymykset.",
    maxCommentLength: "Vain kysymysten kommentit.",
    commentAreaRows: "Määrittää kysymyskommenttien tekstialueilla näytettävien rivien määrän. Jos syöttö vie enemmän rivejä, vierityspalkki tulee näkyviin.",
    autoGrowComment: "Valitse tämä, jos haluat, että kysymysten kommentit ja pitkät tekstit -kysymykset kasvavat automaattisesti syötetyn tekstin pituuden perusteella.",
    allowResizeComment: "Vain kysymyskommentit ja pitkän tekstin kysymykset.",
    calculatedValues: "Mukautetut muuttujat toimivat väli- tai apumuuttujina, joita käytetään lomakelaskelmissa. He ottavat vastaajan syötteet lähdearvoina. Jokaisella mukautetulla muuttujalla on yksilöllinen nimi ja lauseke, johon se perustuu.",
    includeIntoResult: "Valitse tämä, jos haluat, että lausekkeen laskettu arvo tallennetaan yhdessä kyselyn tulosten kanssa.",
    triggers: "Käynnistin on tapahtuma tai ehto, joka perustuu lausekkeeseen. Kun lausekkeen arvoksi on arvioitu \"tosi\", käynnistin käynnistää toiminnon. Tällaisella toiminnalla voi valinnaisesti olla kohdekysymys, johon se vaikuttaa.",
    clearInvisibleValues: "Valitse, tyhjennetäänkö ehdollisen logiikan piilottamien kysymysten arvot ja milloin se tehdään.",
    textUpdateMode: "Valitse seuraavista: \"Kadonneessa tarkennuksessa\" - arvo päivitetään, kun syöttökenttä menettää tarkennuksen; \"Kirjoitettaessa\" - arvo päivitetään reaaliajassa, kun käyttäjät kirjoittavat.",
    columns: "Vasen arvo toimii ehdollisissa säännöissä käytettynä saraketunnuksena, oikea arvo näkyy vastaajille.",
    rows: "Vasen arvo toimii rivitunnuksena, jota käytetään ehdollisissa säännöissä, oikea arvo näytetään vastaajille.",
    columnMinWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    rowTitleWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    totalText: "Näkyy vain, kun vähintään yhdessä sarakkeessa on Summa-tyyppi tai Summa-lauseke.",
    cellErrorLocation: "Määrittää virhesanoman sijainnin suhteessa soluun, jonka syöte on virheellinen. \"Peri\" -vaihtoehto käyttää asetusta \"Virheilmoituksen kohdistus\" -ominaisuudesta.",
    detailErrorLocation: "Määrittää tieto-osiin sisältyvien kysymysten virhesanomien sijainnin. \"Peri\" -vaihtoehto käyttää asetusta \"Virheilmoituksen kohdistus\" -ominaisuudesta.",
    keyDuplicationError: "Kun Estä päällekkäiset vastaukset -ominaisuus on käytössä, vastaaja, joka yrittää lähettää merkinnän kaksoiskappaleen, saa seuraavan virhesanoman.",
    totalExpression: "Voit laskea kokonaisarvot lausekkeen perusteella. Lauseke voi sisältää peruslaskutoimituksia ('{q1_id} + {q2_id}'), totuusarvolausekkeita ('{age} > 60') ja funktioita ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne.).",
    confirmDelete: "Käynnistää kehotteen, jossa pyydetään vahvistamaan rivin poisto.",
    keyName: "Jos määritetty sarake sisältää samat arvot, kysely heittää \"Ei-yksilöllinen avainarvo\" -virheen.",
    description: "Kirjoita tekstitys.",
    locale: "Aloita kyselyn luominen valitsemalla kieli. Jos haluat lisätä käännöksen, vaihda uuteen kieleen ja käännä alkuperäinen teksti täällä tai Käännökset-välilehdessä.",
    detailPanelMode: "Määrittää tieto-osan sijainnin suhteessa riviin. Valitse seuraavista: \"Ei mitään\" - laajennusta ei lisätä; \"Rivin alla\" - matriisin jokaisen rivin alle sijoitetaan rivilaajennus; \"Näytä rivin alla vain yhden rivin laajennus\" - laajennus näkyy vain yhden rivin alla, loput rivilaajennukset kutistetaan.",
    imageFit: "Valitse seuraavista: \"Ei mitään\" - kuva säilyttää alkuperäisen kokonsa; \"Sisältää\" - kuvan kokoa muutetaan sopivaksi säilyttäen samalla kuvasuhteensa; \"Kansi\" - kuva täyttää koko laatikon säilyttäen samalla kuvasuhteensa; \"Täytä\" - kuva venytetään täyttämään laatikko säilyttämättä sen kuvasuhdetta.",
    autoGrow: "Lisää vähitellen syöttökentän korkeutta, kun tietoja syötetään. Ohittaa \"Syöttökentän korkeus (viivoina)\" -asetuksen.",
    allowResize: "Koonmuuttokahva (tai kahva) tulee näkyviin kulmaan, ja sitä vetämällä voit muuttaa syöttökentän kokoa.",
    timeLimit: "Sekunteina oleva aikaväli, jonka jälkeen kysely etenee automaattisesti Kiitos-sivulle.",
    timeLimitPerPage: "Sekunteina ilmaistu aikaväli, jonka jälkeen kysely siirtyy automaattisesti seuraavalle sivulle.",
    validateVisitedEmptyFields: "Ota tämä asetus käyttöön, jos haluat käynnistää vahvistuksen, kun käyttäjä keskittyy tyhjään syöttökenttään ja poistuu siitä tekemättä muutoksia.",
    page: {
      name: "Sivun tunnus, joka ei näy vastaajille.",
      description: "Kirjoita sivun alaotsikko.",
      navigationTitle: "Kuvateksti, joka näkyy edistymispalkin tai sisällysluettelon siirtymispainikkeessa. Jos jätät tämän kentän tyhjäksi, navigointipainike käyttää sivun otsikkoa tai nimeä. Ota edistymispalkki tai sisällysluettelo käyttöön siirtymällä kohtaan \"Kysely\" → \"Navigointi\".",
      timeLimit: "Sekunteina ilmaistu aikaväli, jonka jälkeen kysely siirtyy automaattisesti seuraavalle sivulle.",
      visibleIf: "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää sivun näkyvyyden.",
      enableIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa sivun vain luku -tilan käytöstä.",
      requiredIf: "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta.",
      questionTitleLocation: "Koskee kaikkia tämän sivun kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille tai paneeleille. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena).",
      questionTitleWidth: "Määrittää kysymysten otsikoiden tasaisen leveyden, kun ne tasataan kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
      questionErrorLocation: "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena).",
      questionOrder: "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. \"Peri\" -vaihtoehto käyttää kyselytason asetusta (\"Alkuperäinen\" oletuksena). Tämän asetuksen vaikutus näkyy vain Esikatselu-välilehdessä.",
      showNavigationButtons: "Määrittää navigointipainikkeiden näkyvyyden sivulla. \"Peri\" -vaihtoehto käyttää kyselytason asetusta, jonka oletusarvo on \"Näkyvä\".",
      gridLayoutColumns: "Tämän taulukon avulla voit määrittää sivun jokaisen ruudukkosarakkeen. Se määrittää automaattisesti kunkin sarakkeen leveysprosentin rivin elementtien enimmäismäärän perusteella. Jos haluat mukauttaa ruudukon asettelua, säädä näitä arvoja manuaalisesti ja määritä otsikon leveys kunkin sarakkeen kaikille kysymyksille."
    },
    timerLocation: "Määrittää ajastimen sijainnin sivulla.",
    panelsState: "Valitse seuraavista: \"Lukittu\" - käyttäjät eivät voi laajentaa tai kutistaa paneeleja; \"Kutista kaikki\" - kaikki paneelit alkavat romahtaneessa tilassa; \"Laajenna kaikki\" - kaikki paneelit alkavat laajennetussa tilassa; \"Ensimmäinen laajennettu\" - vain ensimmäistä paneelia laajennetaan aluksi.",
    imageLinkName: "Kirjoita jaetun ominaisuuden nimi objektiryhmään, joka sisältää valintaluettelossa näytettävät kuvan tai videotiedoston URL-osoitteet.",
    choices: "Vasen arvo toimii ehdollisissa säännöissä käytettynä kohteen tunnuksena, oikea arvo näytetään vastaajille.",
    title: "Kirjoita käyttäjäystävällinen otsikko näytettäväksi.",
    waitForUpload: "Varmistaa, että käyttäjät eivät vastaa kyselyyn, ennen kuin tiedostot on ladattu.",
    minWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    maxWidth: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    width: "Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    valueName: "Jos et määritä tätä ominaisuutta, vastaus tallennetaan Name-ominaisuuden määrittämään kenttään.",
    defaultDisplayValue: "Arvo, joka näkyy HTML-kysymyksissä ja kyselyn elementtien dynaamisissa otsikoissa ja kuvauksissa, kun kysymyksen arvo on tyhjä.",
    useDisplayValuesInDynamicTexts: "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Kun tämä asetus on valittuna, se näyttää tunnusarvon sijaan HTML-kysymyksissä ja kyselyelementtien dynaamisissa otsikoissa ja kuvauksissa.",
    clearIfInvisible: "Valitse, poistetaanko ehdollisen logiikan piilottamat kysymysarvot ja milloin se tehdään. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Kyselyn valmistuttua\" oletuksena).",
    choicesFromQuestionMode: "Valitse seuraavista: \"Kaikki\" - kopioi kaikki valintavaihtoehdot valitusta kysymyksestä; \"Valittu\" - kopioi dynaamisesti vain valitut valintavaihtoehdot; \"Ei valittu\" - kopioi dynaamisesti vain valitsemattomat valintavaihtoehdot. Vaihtoehdot \"Ei mitään\" ja \"Muut\" kopioidaan oletusarvoisesti, jos ne on otettu käyttöön lähdekysymyksessä.",
    choiceValuesFromQuestion: "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Tämä asetus määrittää, mikä matriisisarake tai paneelikysymys antaa tunnukset.",
    choiceTextsFromQuestion: "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Tämä asetus määrittää, mikä matriisisarake tai paneelikysymys sisältää näyttötekstit.",
    allowCustomChoices: "Valitse tämä, jos haluat, että vastaajat voivat lisätä omia vaihtoehtojaan, jos haluttu vaihtoehto ei ole käytettävissä avattavassa valikossa. Mukautetut valinnat tallennetaan vain väliaikaisesti nykyisen selainistunnon ajaksi.",
    showOtherItem: "Kun tämä on valittuna, käyttäjät voivat lisätä lisätietoja erilliseen kommenttiruutuun.",
    separateSpecialChoices: "Näyttää jokaisen erityisen valintavaihtoehdon (\"Ei mitään\", \"Muu\", \"Valitse kaikki\") uudella rivillä, vaikka käytettäisiin monisarakkeista asettelua.",
    path: "Määritä palvelutietojoukon sijainti, jossa objektien kohderyhmä sijaitsee. Jätä tyhjäksi, jos URL-osoite osoittaa jo matriisiin.",
    choicesbyurl: {
      valueName: " "
    },
    titleName: "Kirjoita objektimatriisiin yhtenäinen ominaisuuden nimi, joka sisältää valintaluettelossa näytettävät arvot.",
    allowEmptyResponse: "Valitse tämä, jos haluat, että palvelu palauttaa tyhjän vastauksen tai matriisin.",
    choicesVisibleIf: "Taikasauvakuvakkeen avulla voit määrittää ehdollisen säännön, joka määrittää kaikkien valintavaihtoehtojen näkyvyyden.",
    rateValues: "Vasen arvo toimii ehdollisissa säännöissä käytettynä kohteen tunnuksena, oikea arvo näytetään vastaajille.",
    rating: {
      displayMode: "\"Auto\" valitsee \"Painikkeet\" ja \"Avattava\" -tilojen välillä käytettävissä olevan leveyden perusteella. Kun leveys ei riitä painikkeiden näyttämiseen, kysymyksessä näkyy avattava valikko."
    },
    valuePropertyName: "Voit yhdistää kysymyksiä, jotka tuottavat tuloksia eri muodoissa. Kun tällaiset kysymykset linkitetään toisiinsa liitostunnuksen avulla, tähän jaettuun ominaisuuteen tallennetaan valitut kysymysarvot.",
    searchEnabled: "Valitse tämä, jos haluat päivittää avattavan valikon sisällön vastaamaan hakukyselyä, jonka käyttäjä kirjoittaa syöttökenttään.",
    valueTrue: "Arvo, joka tallennetaan kyselyn tuloksiin, kun vastaajat antavat myönteisen vastauksen.",
    valueFalse: "Arvo, joka tallennetaan kyselyn tuloksiin, kun vastaajat antavat kielteisen vastauksen.",
    showPreview: "Tätä asetusta ei suositella poistamaan käytöstä, koska se ohittaa esikatselukuvan ja vaikeuttaa käyttäjän ymmärtämistä, onko tiedostot ladattu.",
    needConfirmRemoveFile: "Käynnistää kehotteen, jossa pyydetään vahvistamaan tiedoston poistaminen.",
    selectToRankEnabled: "Ota käyttöön, jos haluat luokitella vain valitut vaihtoehdot. Käyttäjät vetävät valitut kohteet valintaluettelosta järjestääkseen ne sijoitusalueella.",
    dataList: "Kirjoita luettelo vaihtoehdoista, joita vastaajalle ehdotetaan syötteen aikana.",
    inputSize: "Asetus muuttaa vain syöttökenttien kokoa eikä vaikuta kysymysruudun leveyteen.",
    itemTitleWidth: "Määrittää yhdenmukaisen leveyden kaikille nimikeotsikoille. Hyväksyy CSS-arvot (px, %, in, pt jne.).",
    inputTextAlignment: "Valitse, miten syötteen arvo tasataan kenttään. Oletusasetus \"Auto\" kohdistaa syöttöarvon oikealle, jos valuuttaa tai numeerista peittoa käytetään, ja vasemmalle, jos ei.",
    altText: "Toimii korvikkeena, kun kuvaa ei voida näyttää käyttäjän laitteella, ja esteettömyyssyistä.",
    rateColorMode: "Määrittää valitun emojin värin, kun luokituskuvakkeen tyypiksi on asetettu \"Hymiöt\". Valitse seuraavista: \"Oletus\" - valittu emoji näkyy kyselyn oletusvärillä; \"Scale\" - valittu emoji perii värin luokitusasteikolta.",
    expression: {
      name: "Lausekkeen tunnus, joka ei näy vastaajille.",
      description: "Kirjoita lausekkeen alaotsikko.",
      expression: "Lauseke voi sisältää peruslaskutoimituksia ('{q1_id} + {q2_id}'), ehtoja ('{age} > 60') ja funktioita ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne.)."
    },
    storeOthersAsComment: "Valitse tämä, jos haluat tallentaa Muu-vaihtoehdon arvon erillisenä ominaisuutena kyselyn tuloksiin.",
    format: "Käytä {0} todellisen arvon paikkamerkkinä.",
    acceptedTypes: "Katso lisätietoja määritteen [accept](https://www.w3schools.com/tags/att_input_accept.asp) kuvauksesta.",
    columnColCount: "Koskee vain radioryhmä- ja valintaruutusolutyyppejä.",
    autocomplete: "Lisätietoja on [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) -määritteen kuvauksessa.",
    filePlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot\" tai kun kamera ei ole käytettävissä",
    photoPlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Kamera\".",
    fileOrPhotoPlaceholder: "Käytetään, kun \"Lähdetyyppi\" on \"Paikalliset tiedostot tai kamera\".",
    colCount: "Järjestää valintavaihtoehdot monisarakkeiseen asetteluun. Kun asetuksena on 0, asetukset näytetään yhdellä rivillä.",
    masksettings: {
      saveMaskedValue: "Valitse, haluatko tallentaa kyselyn tuloksiin kysymyksen arvon käyttämällä maskia."
    },
    patternmask: {
      pattern: "Kuvio voi sisältää merkkijonoliteraaleja ja seuraavia paikkamerkkejä: '9' - numerolle; \"a\" - isoille tai pienille kirjaimille; '#' - numerolle tai isolle tai pienelle kirjaimelle. Käytä kenoviivaa '\\' paetaksesi hahmoa."
    },
    datetimemask: {
      pattern: "Kuvio voi sisältää erotinmerkkejä ja seuraavia paikkamerkkejä:<br>'m' - Kuukauden numero.<br>'mm' - Kuukauden numero, jonka alussa on nolla yksinumeroisille arvoille. <br>'d' - kuukauden päivä. <br>'dd' - kuukauden päivä, jonka alussa on nolla yksinumeroisille arvoille. <br>'yy' - Vuoden kaksi viimeistä numeroa. <br>\"yyyy\" - nelinumeroinen vuosi. <br>'H' - Tunnit 24 tunnin muodossa. <br>\"HH\" - Tunnit 24 tunnin muodossa, jonka alussa on nolla yksinumeroisille arvoille. <br>'h' - Tunnit 12 tunnin muodossa. <br>\"hh\" - Tunnit 12 tunnin muodossa, jonka alussa on nolla yksinumeroisille arvoille. <br>'MM' - Pöytäkirja. <br>'ss' - sekuntia. <br>\"TT\" - 12 tunnin kellojakso isoilla kirjaimilla (AM/PM). <br>'TT' - 12 tunnin kellonaika pienillä kirjaimilla (am/pm)."
    },
    numericmask: {
      decimalSeparator: "Symboli, jota käytetään erottamaan murto-osa näytetyn luvun kokonaislukuosasta.",
      thousandsSeparator: "Symboli, jota käytetään erottamaan suuren luvun numerot kolmen ryhmiin.",
      precision: "Rajoittaa näytettävän luvun desimaalipilkun jälkeen säilytettävien numeroiden määrää."
    },
    currencymask: {
      prefix: "Yksi tai useampi symboli, joka näytetään ennen arvoa.",
      suffix: "Yksi tai useampi symboli, joka näytetään arvon jälkeen."
    },
    theme: {
      isPanelless: "Tämä asetus koskee vain paneelin ulkopuolisia kysymyksiä.",
      primaryColor: "Määrittää lisävärin, joka korostaa kyselyn tärkeimmät elementit.",
      panelBackgroundTransparency: "Säätää paneelien ja kysymysruutujen läpinäkyvyyttä suhteessa kyselyn taustaan.",
      questionBackgroundTransparency: "Säätää syöttöelementtien läpinäkyvyyttä suhteessa kyselyn taustaan.",
      cornerRadius: "Asettaa kulmasäteen kaikille suorakaiteen muotoisille elementeille. Ota edistynyt tila käyttöön, jos haluat määrittää syöttöelementtien tai paneelien ja kysymysruutujen yksittäiset kulmasäteen arvot.",
      "--sjs-general-backcolor-dim": "Määrittää kyselyn päätaustavärin."
    },
    header: {
      inheritWidthFrom: "Sama kuin säilö -vaihtoehto säätää automaattisesti otsikon sisältöalueen leveyttä sopimaan HTML-elementtiin, johon kysely sijoitetaan.",
      textAreaWidth: "Kyselyn otsikon ja kuvauksen sisältävän otsikkoalueen leveys pikseleinä mitattuna.",
      overlapEnabled: "Kun tämä asetus on käytössä, kyselyn yläosa peittää otsikon alaosan.",
      mobileHeight: "Kun arvoksi on määritetty 0, korkeus lasketaan automaattisesti otsikon sisällön mukaan."
    },
    progressBarInheritWidthFrom: "Sama kuin säilö -vaihtoehto säätää edistymispalkin alueen leveyttä automaattisesti sopimaan HTML-elementtiin, johon kysely sijoitetaan."
  },
  // Properties
  p: {
    title: {
      name: "otsikko",
      title: "Jätä se tyhjäksi, jos se on sama kuin 'Nimi'"
    },
    multiSelect: "Salli monivalinta",
    showLabel: "Näytä kuvatekstit",
    swapOrder: "Kyllä- ja Ei-järjestyksen vaihtaminen",
    value: "Arvo",
    tabAlign: "Sarkaimen tasaus",
    sourceType: "Lähteen tyyppi",
    fitToContainer: "Sovita konttiin",
    setValueExpression: "Arvolausekkeen määrittäminen",
    description: "Kuvaus",
    logoFit: "Logon sopivuus",
    pages: "Sivut",
    questions: "Kysymyksiä",
    triggers: "Triggerit",
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
    visibleIf: "Näkyvissä jos",
    defaultValueExpression: "Oletusarvon lauseke",
    requiredIf: "Vaadittu jos",
    resetValueIf: "Nollaa arvo, jos",
    setValueIf: "Aseta arvo, jos",
    validators: "Validoijat",
    bindings: "Siteet",
    renderAs: "Hahmonna muodossa",
    attachOriginalItems: "Alkuperäisten kohteiden liittäminen",
    choices: "Valinnat",
    choicesByUrl: "choicesByUrl",
    currency: "Valuutta",
    cellHint: "Solun vihje",
    totalMaximumFractionDigits: "Murtolukujen enimmäismäärä yhteensä",
    totalMinimumFractionDigits: "Murtolukujen vähimmäismäärä",
    columns: "Sarakkeet",
    detailElements: "Yksityiskohtaiset elementit",
    allowAdaptiveActions: "Salli mukautuvat toiminnot",
    defaultRowValue: "Rivin oletusarvo",
    detailPanelShowOnAdding: "Tietopaneeli näyttää lisäyksen yhteydessä",
    choicesLazyLoadEnabled: "Valinnat laiska kuorma käytössä",
    choicesLazyLoadPageSize: "Valinnat laiska lataussivun koko",
    inputFieldComponent: "Syöttökentän komponentti",
    itemComponent: "Kohteen osa",
    min: "Min",
    max: "Max",
    minValueExpression: "Pienin arvon lauseke",
    maxValueExpression: "Enimmäisarvon lauseke",
    step: "Askel",
    dataList: "Tietoluettelo",
    inputSize: "Kohteen koko",
    itemTitleWidth: "Kohteen otsikon leveys (px)",
    inputTextAlignment: "Syöttöarvon tasaus",
    elements: "Elementit",
    content: "Sisältö",
    navigationTitle: "Navigoinnin otsikko",
    navigationDescription: "Navigoinnin kuvaus",
    longTap: "Pitkä napautus",
    autoGrow: "Automaattinen kasvu",
    allowResize: "Salli koon muuttaminen",
    acceptCarriageReturn: "Hyväksy kursorin palautus",
    displayMode: "Näyttötila",
    rateType: "Hinnan tyyppi",
    label: "Merkintä",
    contentMode: "Sisältö-tila",
    imageFit: "Kuva sopii",
    altText: "Vaihtoehtoinen teksti",
    height: "Korkeus",
    mobileHeight: "Korkeus älypuhelimissa",
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
    selectToRankEmptyRankedAreaText: "Teksti, joka näyttää, onko kaikki asetukset valittu",
    selectToRankEmptyUnrankedAreaText: "Sijoitusalueen paikkamerkkiteksti",
    allowCameraAccess: "Salli kameran käyttö",
    scaleColorMode: "Skaalaa väriä -tila",
    rateColorMode: "Arvioi väritila",
    copyDisplayValue: "Kopioi näyttöarvo",
    effectiveColSpan: "Sarakkeen jänneväli",
    progressBarInheritWidthFrom: "Edistymispalkin alueen leveys"
  },
  theme: {
    advancedMode: "Edistynyt tila",
    pageTitle: "Sivun otsikon fontti",
    questionTitle: "Kysymyksen otsikon fontti",
    editorPanel: "Syötä elementti",
    lines: "Rivit",
    primaryDefaultColor: "Oletusväri",
    primaryDarkColor: "Tumma väri",
    primaryLightColor: "Vaalea väri",
    backgroundDimColor: "Taustan himmennysväri",
    cornerRadius: "Kulman säde",
    backcolor: "Taustan väri",
    hovercolor: "Vie hiiri taustalle",
    borderDecoration: "Reunusten koristelu",
    fontColor: "Fontin väri",
    backgroundColor: "Taustaväri",
    primaryForecolor: "Etuosan väri",
    primaryForecolorLight: "Vaalea etuosan väri",
    font: "Fontti",
    borderDefault: "Oletus",
    borderLight: "Ohut",
    fontFamily: "Fonttiperhe",
    fontWeightRegular: "Normaali",
    fontWeightHeavy: "Voimakas",
    fontWeightSemiBold: "Puoliksi lihavoitu",
    fontWeightBold: "Lihavoitu",
    color: "Väri",
    placeholderColor: "Paikkamerkin väri",
    size: "Koko",
    opacity: "Läpikuultavuus",
    boxShadowX: "X",
    boxShadowY: "Y",
    boxShadowAddRule: "Lisää varjotehoste",
    boxShadowBlur: "Hämärtyä",
    boxShadowSpread: "Leviäminen",
    boxShadowDrop: "Pisara",
    boxShadowInner: "Sisäinen",
    names: {
      default: "Oletus",
      sharp: "Terävä",
      borderless: "Reunukseton",
      flat: "Tasainen",
      plain: "Yksinkertainen",
      doubleborder: "Kaksinkertainen reunus",
      layered: "Kerroksellinen",
      solid: "Kiinteä",
      threedimensional: ".3D",
      contrast: "Kontrasti"
    },
    colors: {
      teal: "Turkoosi",
      blue: "Sininen",
      purple: "Purppura",
      orchid: "Orkidea",
      tulip: "Tulppaani",
      brown: "Ruskea",
      green: "Vihreä",
      gray: "Harmaa"
    }
  },
  creatortheme: {
    "--sjs-special-background": "Pinnan tausta",
    "--sjs-primary-background-500": "Ensisijainen",
    "--sjs-secondary-background-500": "Toissijainen",
    surfaceScale: "Pinta",
    userInterfaceBaseUnit: "Käyttöliittymä",
    fontScale: "Fontti",
    names: {
      sc2020: "Kyselyn laatija 2020",
      "default-light": "Valo",
      "default-dark": "Tumma",
      "default-contrast": "Kontrasti"
    }
  }
};
setupLocale({ localeCode: "fi", strings: fiStrings });

// The following strings have been translated by a machine translation service
// Remove those strings that you have corrected manually
// qt.tagbox: "Multi-Select Dropdown" => "Avattava monivalintavalikko"
// qt.buttongroup: "Button Group" => "Painike-ryhmä"
// ed.surveySettings: "Survey Settings" => "Kyselyn asetukset"
// ed.surveySettingsTooltip: "Open survey settings" => "Avaa kyselyn asetukset"
// ed.prevSelected: "Select previous" => "Valitse edellinen"
// ed.nextSelected: "Select next" => "Valitse seuraava"
// ed.pageTypeName: "Page" => "Sivu"
// ed.panelTypeName: "Panel" => "Paneeli"
// ed.questionTypeName: "Question" => "Kysymys"
// ed.columnTypeName: "Column" => "Sarake"
// ed.themeSurvey: "Themes" => "Teemoja"
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
// page.timeLimit: "Time limit to finish the page (in seconds)" => "Sivun viimeistelyn aikaraja (sekunteina)"
// question.page: "Parent page" => "Pääsivu"
// pe.noEntriesText: "Empty entries text" => "Tyhjät merkinnät -teksti"
// pe.setValue: "Answer" => "Vastata"
// pe.dataFormat: "Image format" => "Kuvan muoto"
// pe.allowAddRows: "Allow adding rows" => "Salli rivien lisääminen"
// pe.allowRemoveRows: "Allow removing rows" => "Salli rivien poistaminen"
// pe.allowRowReorder: "Allow row drag and drop" => "Salli rivin vetäminen ja pudottaminen"
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
// pe.maxCommentLength: "Maximum comment length (in characters)" => "Kommentin enimmäispituus (merkkeinä)"
// pe.autoGrowComment: "Auto-expand comment area if necessary" => "Laajenna kommenttialue tarvittaessa automaattisesti"
// pe.allowResizeComment: "Allow users to resize text areas" => "Salli käyttäjien muuttaa tekstialueiden kokoa"
// pe.textUpdateMode: "Update text question value" => "Tekstikysymyksen arvon päivittäminen"
// pe.autoFocusFirstError: "Set focus on the first invalid answer" => "Aseta kohdistus ensimmäiseen virheelliseen vastaukseen"
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
// pe.prevPanelText: "Previous Panel button tooltip" => "Edellinen paneeli -painikkeen työkaluvihje"
// pe.nextPanelText: "Next Panel button tooltip" => "Seuraava paneeli -painikkeen työkaluvihje"
// pe.showRangeInProgress: "Show progress bar" => "Näytä edistymispalkki"
// pe.templateQuestionTitleLocation: "Question title location" => "Kysymyksen otsikon sijainti"
// pe.removePanelButtonLocation: "Remove Panel button location" => "Poista paneelipainikkeen sijainti"
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
// pe.showNumber: "Show panel number" => "Näytä paneelin numero"
// pe.logoWidth: "Logo width (in CSS-accepted values)" => "Logon leveys (CSS-hyväksytyissä arvoissa)"
// pe.logoHeight: "Logo height (in CSS-accepted values)" => "Logon korkeus (CSS:n hyväksymissä arvoissa)"
// pe.readOnly: "Read-only" => "Vain luku -tilassa"
// pe.enableIf: "Editable if" => "Muokattavissa, jos"
// pe.noRowsText: "\"No rows\" message" => "Ei rivejä -viesti"
// pe.size: "Input field size (in characters)" => "Syöttökentän koko (merkkeinä)"
// pe.separateSpecialChoices: "Separate special choices (None, Other, Select All)" => "Erilliset erikoisvalinnat (Ei mitään, Muu, Valitse kaikki)"
// pe.choicesFromQuestion: "Copy choices from the following question" => "Kopioi valinnat seuraavasta kysymyksestä"
// pe.choicesFromQuestionMode: "Which choices to copy?" => "Mitkä vaihtoehdot kopioidaan?"
// pe.showCommentArea: "Show the comment area" => "Näytä kommenttialue"
// pe.commentPlaceholder: "Comment area placeholder" => "Kommenttialueen paikkamerkki"
// pe.displayRateDescriptionsAsExtremeItems: "Display rate descriptions as extreme values" => "Näytä nopeuskuvaukset ääriarvoina"
// pe.rowOrder: "Row order" => "Rivien järjestys"
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
// addRowButtonLocation.default: "Depends on matrix layout" => "Riippuu matriisin asettelusta"
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
// autoGenerate.false: "Enter manually" => "Kirjoita manuaalisesti"
// rateType.labels: "Labels" => "Otsikot"
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
// theme.groupAdvanced: "Advanced" => "Edistynyt"
// theme.themeName: "Theme" => "Teema"
// theme.isPanellessss: "Question appearance" => "Kysymyksen ulkonäkö"
// theme.isPanellessLightweight: "Without Panels" => "Ilman paneeleja"
// theme.themePaletteLight: "Light" => "Valo"
// theme.themePaletteDark: "Dark" => "Tumma"
// theme.primaryColor: "Accent color" => "Korostusväri"
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
// theme.hovercolor: "Hover background" => "Vie hiiri taustalle"
// theme.borderDecoration: "Border decoration" => "Reunusten koristelu"
// theme.accentBackground: "Accent background" => "Aksentti tausta"
// theme.accentForeground: "Accent foreground" => "Aksentti etualalla"
// theme.linesColors: "Minor line colors" => "Pienet viivan värit"
// theme.fontFamily: "Font family" => "Fonttiperhe"
// theme.fontSize: "Font size" => "Kirjasinkoko"
// theme.color: "Color" => "Väri"
// theme.size: "Size" => "Koko"
// theme.fontWeightSemiBold: "Semi-bold" => "Puoliksi lihavoitu"
// theme.scale: "Scale" => "Mittakaava"
// theme.cornerRadius: "Corner radius" => "Kulman säde"
// theme.surveyTitleFont: "Survey title font" => "Kyselyn otsikon fontti"
// theme.pageTitle: "Page title font" => "Sivun otsikon fontti"
// theme.pageDescription: "Page description font" => "Sivun kuvauksen fontti"
// theme.boxShadowX: "X" => "X"
// theme.boxShadowY: "Y" => "Y"
// theme.boxShadowAddRule: "Add Shadow Effect" => "Lisää varjotehoste"
// theme.boxShadowBlur: "Blur" => "Hämärtyä"
// theme.boxShadowSpread: "Spread" => "Leviäminen"
// theme.boxShadowDrop: "Drop" => "Pisara"
// theme.boxShadowInner: "Inner" => "Sisäinen"
// theme.questionShadow: "Shadow effects" => "Varjo-tehosteet"
// theme.editorShadow: "Input element shadow effects" => "Syöttöelementin varjotehosteet"
// names.contrast: "Contrast" => "Kontrasti"
// names.simple: "Simple" => "Yksinkertainen"
// names.blank: "Blank" => "Aihio"
// names.double: "Double" => "Kaksinkertainen"
// names.bulk: "Bulk" => "Massa"
// names.pseudo-3d: "Pseudo 3D" => "Pseudo 3D"
// names.playful: "Playful" => "Leikkisä"
// names.ultra: "Ultra" => "Ultra"
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
// theme.header: "Header" => "Otsikko"
// theme.backgroundImageFitFill: "Stretch" => "Venyä"
// theme.backgroundImageFitTile: "Tile" => "Laatta"
// theme.headerView: "View" => "Näkymä"
// theme.headerViewBasic: "Basic" => "Emäksinen"
// theme.headerViewAdvanced: "Advanced" => "Edistynyt"
// theme.headerInheritWidthFrom: "Content area width" => "Sisältöalueen leveys"
// theme.headerInheritWidthFromSurvey: "Same as survey" => "Sama kuin kyselyssä"
// theme.headerInheritWidthFromPage: "Fit to page" => "Sovita sivulle"
// theme.headerTextAreaWidth: "Text width" => "Tekstin leveys"
// theme.headerBackgroundColorSwitch: "Background color" => "Taustaväri"
// theme.headerBackgroundColorNone: "None" => "Ei lainkaan"
// theme.headerBackgroundColorAccentColor: "Accent color" => "Korostusväri"
// theme.headerBackgroundColorCustom: "Custom" => "Tapa"
// theme.horizontalAlignmentLeft: "Left" => "Vasen"
// theme.horizontalAlignmentCenter: "Center" => "Keskus"
// theme.horizontalAlignmentRight: "Right" => "Oikea"
// theme.verticalAlignmentTop: "Top" => "Huippu"
// theme.verticalAlignmentMiddle: "Middle" => "Keskus"
// theme.verticalAlignmentBottom: "Bottom" => "Pohja"
// theme.logoPosition: "Logo Position" => "Logon sijainti"
// theme.headerTitlePosition: "Title Position" => "Otsikon sijainti"
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
// ed.themeResetConfirmation: "Do you really want to reset the theme? All your customizations will be lost." => "Haluatko todella nollata teeman? Kaikki mukautuksesi menetetään."
// ed.themeResetConfirmationOk: "Yes, reset the theme" => "Kyllä, nollaa teema"
// theme.background: "Background" => "Tausta"
// theme.appearance: "Appearance" => "Ulkonäkö"
// theme.headerInheritWidthFromContainer: "Fit to container" => "Sovita konttiin"
// signaturepad.showPlaceholder: "Show the placeholder" => "Paikkamerkin näyttäminen"
// signaturepad.placeholder: "Placeholder text" => "Paikkamerkkiteksti"
// theme.surveyDescriptionFont: "Survey description font" => "Kyselyn kuvauksen fontti"r

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
// theme.headerDescriptionPosition: "Description position" => "Kuvauksen sijainti"
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
// ed.translateUsigAIFrom: "Translate from: " => "Käännös: "
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Salli Kieltäydy vastaamasta -vaihtoehto"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Salli En tiedä -vaihtoehto"
// pe.showRefuseItem: "Allow the Refuse to Answer option" => "Salli Kieltäydy vastaamasta -vaihtoehto"
// pe.showDontKnowItem: "Allow the Don't Know option" => "Salli En tiedä -vaihtoehto"
// pv.contain: "Contain" => "Sisältää"
// pv.cover: "Cover" => "Kansi"
// pv.fill: "Fill" => "Täyttää"

// pe.transposeData: "Transpose rows to columns" => "Rivien transponointi sarakkeisiin"
// layout.panel: "Layout" => "Asettelu"
// layout.question: "Layout" => "Asettelu"
// layout.base: "Layout" => "Asettelu"
// panel.name: "Panel name" => "Paneelin nimi"
// panel.title: "Panel title" => "Paneelin otsikko"
// panel.description: "Panel description" => "Paneelin kuvaus"
// panel.visibleIf: "Make the panel visible if" => "Tee paneeli näkyväksi, jos"
// panel.requiredIf: "Make the panel required if" => "Tee paneeli pakolliseksi, jos"
// panel.questionOrder: "Question order within the panel" => "Kyselyjärjestys paneelissa"
// panel.startWithNewLine: "Display the panel on a new line" => "Näytä paneeli uudella rivillä"
// panel.state: "Panel collapse state" => "Paneelin tiivistystila"
// panel.width: "Inline panel width" => "Tekstiin sidotun paneelin leveys"
// panel.minWidth: "Minimum panel width" => "Paneelin vähimmäisleveys"
// panel.maxWidth: "Maximum panel width" => "Paneelin enimmäisleveys"
// paneldynamic.name: "Panel name" => "Paneelin nimi"
// paneldynamic.title: "Panel title" => "Paneelin otsikko"
// paneldynamic.description: "Panel description" => "Paneelin kuvaus"
// paneldynamic.visibleIf: "Make the panel visible if" => "Tee paneeli näkyväksi, jos"
// paneldynamic.requiredIf: "Make the panel required if" => "Tee paneeli pakolliseksi, jos"
// paneldynamic.page: "Move the panel to page" => "Paneelin siirtäminen sivulle"
// paneldynamic.startWithNewLine: "Display the panel on a new line" => "Näytä paneeli uudella rivillä"
// paneldynamic.state: "Panel collapse state" => "Paneelin tiivistystila"
// paneldynamic.width: "Inline panel width" => "Tekstiin sidotun paneelin leveys"
// paneldynamic.minWidth: "Minimum panel width" => "Paneelin vähimmäisleveys"
// paneldynamic.maxWidth: "Maximum panel width" => "Paneelin enimmäisleveys"
// paneldynamic.templateDescription: "Panel description pattern" => "Paneelin kuvauskuvio"
// paneldynamic.templateTitle: "Panel title pattern" => "Paneelin otsikkomalli"
// paneldynamic.noEntriesText: "Empty panel text" => "Tyhjä paneelin teksti"
// paneldynamic.templateTabTitle: "Tab title pattern" => "Välilehden otsikkomalli"
// paneldynamic.templateVisibleIf: "Make an individual panel visible if" => "Tee yksittäinen paneeli näkyväksi, jos"
// paneldynamic.hideNumber: "Hide the panel number" => "Piilota paneelin numero"
// paneldynamic.titleLocation: "Panel title alignment" => "Paneelin otsikon tasaus"
// paneldynamic.descriptionLocation: "Panel description alignment" => "Paneelin kuvauksen tasaus"
// paneldynamic.templateQuestionTitleLocation: "Question title alignment" => "Kysymyksen otsikon tasaus"
// paneldynamic.templateErrorLocation: "Error message alignment" => "Virhesanoman tasaus"
// paneldynamic.newPanelPosition: "New panel location" => "Uusi paneelin sijainti"
// paneldynamic.keyName: "Prevent duplicate responses in the following question" => "Päällekkäisten vastausten estäminen seuraavassa kysymyksessä"
// question.name: "Question name" => "Kysymyksen nimi"
// question.title: "Question title" => "Kysymyksen otsikko"
// question.description: "Question description" => "Kysymyksen kuvaus"
// question.visibleIf: "Make the question visible if" => "Tee kysymys näkyväksi, jos"
// question.requiredIf: "Make the question required if" => "Tee kysymys pakolliseksi, jos"
// question.state: "Question box collapse state" => "Kysymysruudun tiivistystila"
// question.hideNumber: "Hide the question number" => "Piilota kysymyksen numero"
// question.titleLocation: "Question title alignment" => "Kysymyksen otsikon tasaus"
// question.descriptionLocation: "Question description alignment" => "Kysymyksen kuvauksen tasaus"
// question.errorLocation: "Error message alignment" => "Virhesanoman tasaus"
// question.indent: "Increase the inner indent" => "Suurentaa sisintä sisennystä"
// question.width: "Inline question width" => "Tekstiin sitoutuvan kysymyksen leveys"
// question.minWidth: "Minimum question width" => "Kysymyksen vähimmäisleveys"
// question.maxWidth: "Maximum question width" => "Kysymyksen enimmäisleveys"
// question.textUpdateMode: "Update input field value" => "Päivitä syöttökentän arvo"
// signaturepad.allowClear: "Show the Clear button within signature area" => "Näytä Tyhjennä-painike allekirjoitusalueella"
// signaturepad.penColor: "Stroke color" => "Iskun väri"
// comment.rows: "Input field height (in lines)" => "Syöttökentän korkeus (viivoina)"
// expression.name: "Expression name" => "Lausekkeen nimi"
// expression.title: "Expression title" => "Lausekkeen otsikko"
// expression.description: "Expression description" => "Lausekkeen kuvaus"
// expression.expression: "Expression" => "Lauseke"
// trigger.expression: "Expression" => "Lauseke"
// calculatedvalue.expression: "Expression" => "Lauseke"
// survey.description: "Survey description" => "Tutkimuksen kuvaus"
// page.name: "Page name" => "Sivun nimi"
// page.description: "Page description" => "Sivun kuvaus"
// page.visibleIf: "Make the page visible if" => "Tee sivusta näkyvä, jos"
// page.requiredIf: "Make the page required if" => "Tee sivusta pakollinen, jos"
// page.questionOrder: "Question order on the page" => "Kyselyjärjestys sivulla"
// matrixdropdowncolumn.name: "Column name" => "Sarakkeen nimi"
// matrixdropdowncolumn.title: "Column title" => "Sarakkeen otsikko"
// matrixdropdowncolumn.isUnique: "Prevent duplicate responses" => "Päällekkäisten vastausten estäminen"
// matrixdropdowncolumn.width: "Column width" => "Sarakeleveys"
// matrixdropdowncolumn.minWidth: "Minimum column width" => "Sarakkeen vähimmäisleveys"
// matrixdropdowncolumn.rows: "Input field height (in lines)" => "Syöttökentän korkeus (viivoina)"
// matrixdropdowncolumn.visibleIf: "Make the column visible if" => "Tee sarakkeesta näkyvä, jos"
// matrixdropdowncolumn.requiredIf: "Make the column required if" => "Tee sarakkeesta pakollinen, jos"
// matrixdropdowncolumn.showInMultipleColumns: "Each option in a separate column" => "Jokainen vaihtoehto erillisessä sarakkeessa"
// multipletextitem.name: "Name" => "Nimi"
// multipletextitem.title: "Title" => "Nimike"
// pe.rateDescriptionLocation: "Label alignment" => "Otsikon tasaus"
// pe.cellErrorLocation: "Cell error message alignment" => "Solun virhesanoman tasaus"
// pe.listIsEmpty@columns: "You don't have any columns yet" => "Sinulla ei ole vielä sarakkeita"
// pe.listIsEmpty@rows: "You don't have any rows yet" => "Sinulla ei ole vielä rivejä"
// pe.listIsEmpty@validators: "You don't have any validation rules yet" => "Sinulla ei ole vielä vahvistussääntöjä"
// pe.listIsEmpty@calculatedValues: "You don't have any custom variables yet" => "Sinulla ei ole vielä mukautettuja muuttujia"
// pe.listIsEmpty@triggers: "You don't have any triggers yet" => "Sinulla ei ole vielä käynnistimiä"
// pe.listIsEmpty@navigateToUrlOnCondition: "You don't have any links yet" => "Sinulla ei ole vielä linkkejä"
// pe.addNew@columns: "Add new column" => "Lisää uusi sarake"
// pe.addNew@rows: "Add new row" => "Lisää uusi rivi"
// pe.addNew@validators: "Add new rule" => "Lisää uusi sääntö"
// pe.addNew@calculatedValues: "Add new variable" => "Lisää uusi muuttuja"
// pe.addNew@triggers: "Add new trigger" => "Lisää uusi käynnistin"
// pe.addNew@navigateToUrlOnCondition: "Add new URL" => "Lisää uusi URL-osoite"
// choicesbyurl.url: "Web service's URL" => "Verkkopalvelun URL-osoite"
// pe.progressBarShowPageTitles: "Display page titles in progress bar" => "Sivujen otsikoiden näyttäminen edistymispalkissa"
// pe.progressBarShowPageNumbers: "Display page numbers in progress bar" => "Sivunumeroiden näyttäminen edistymispalkissa"
// itemvalue.visibleIf: "Make the option visible if" => "Tee vaihtoehto näkyväksi, jos"
// itemvalue.enableIf: "Make the option selectable if" => "Tee vaihtoehdosta valittava, jos"
// panel.layout: "Panel Layout" => "Paneelin asettelu"
// tabs.questionSettings: "Question Settings" => "Kysymyksen asetukset"
// pe.url_placeholder: "Ex.: https://api.example.com/books" => "Esimerkki: https://api.example.com/books"
// pe.path_placeholder: "Ex.: categories.fiction" => "Esimerkki: categories.fiction"
// pe.questionStartIndex_placeholder: "Ex.: a)" => "Esim.: a)"
// pe.width_placeholder: "Ex.: 6in" => "Esimerkki: 6 tuumaa"
// pe.minWidth_placeholder: "Ex.: 600px" => "Esimerkki: 600 pikseliä"
// pe.maxWidth_placeholder: "Ex.: 50%" => "Esimerkki: 50 %"
// pv.selected: "Selected" => "Valittu"
// pv.unselected: "Unselected" => "Valitsematta"
// pv.center: "Center" => "Keskus"
// pv.middle: "Middle" => "Keskus"
// pv.next: "Next" => "Seuraava"
// clearIfInvisible.none: "Never" => "Koskaan"
// questionsOnPageMode.standard: "Original structure" => "Alkuperäinen rakenne"
// questionsOnPageMode.singlePage: "Show all questions on one page" => "Näytä kaikki kysymykset yhdellä sivulla"
// questionsOnPageMode.questionPerPage: "Show single question per page" => "Näytä yksittäinen kysymys sivua kohden"
// panelsState.firstExpanded: "First expanded" => "Ensimmäinen laajennettu"
// rateColorMode.scale: "Scale" => "Mittakaava"
// scaleColorMode.monochrome: "Monochrome" => "Yksivärinen"
// scaleColorMode.colored: "Colored" => "Värillinen"
// state.default: "Locked" => "Lukittu"
// showQuestionNumbers.default: "Auto-numbering" => "Automaattinen numerointi"
// showQuestionNumbers.on: "Auto-numbering" => "Automaattinen numerointi"
// showQuestionNumbers.onPage: "Reset on each page" => "Nollaa jokaisella sivulla"
// showQuestionNumbers.onpanel: "Reset on each panel" => "Nollaa jokaisessa paneelissa"
// showQuestionNumbers.onPanel: "Reset on each panel" => "Nollaa jokaisessa paneelissa"
// showQuestionNumbers.onSurvey: "Continue across the survey" => "Jatka kyselyssä"
// showQuestionNumbers.off: "No numbering" => "Ei numerointia"
// descriptionLocation.underTitle: "Under the question title" => "Kysymyksen otsikon alla"
// descriptionLocation.underInput: "Under the input field" => "Syöttökentän alla"
// selectToRankAreasLayout.horizontal: "Next to choices" => "Valintojen vieressä"
// selectToRankAreasLayout.vertical: "Above choices" => "Yllä olevat valinnat"
// displayStyle.decimal: "Decimal" => "Desimaali"
// displayStyle.currency: "Currency" => "Valuutta"
// displayStyle.percent: "Percentage" => "Prosenttiosuus"
// displayStyle.date: "Date" => "Päivämäärä"
// totalDisplayStyle.decimal: "Decimal" => "Desimaali"
// totalDisplayStyle.currency: "Currency" => "Valuutta"
// totalDisplayStyle.percent: "Percentage" => "Prosenttiosuus"
// totalDisplayStyle.date: "Date" => "Päivämäärä"
// rowOrder.initial: "Original" => "Alkuperäinen"
// questionOrder.initial: "Original" => "Alkuperäinen"
// showProgressBar.aboveheader: "Above the header" => "Otsikon yläpuolella"
// showProgressBar.belowheader: "Below the header" => "Otsikon alapuolella"
// pv.sum: "Sum" => "Summa"
// pv.min: "Min" => "Min"
// pv.max: "Max" => "Max"
// pv.avg: "Avg" => "Avg"
// searchMode.contains: "Contains" => "Sisältää"
// searchMode.startsWith: "Starts with" => "Alkaa"
// panel.name: "A panel ID that is not visible to respondents." => "Paneelin tunnus, joka ei näy vastaajille."
// panel.description: "Type a panel subtitle." => "Kirjoita paneelin tekstitys."
// panel.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää paneelin näkyvyyden."
// panel.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa paneelin vain luku -tilan käytöstä."
// panel.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta."
// panel.questionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Koskee kaikkia tämän paneelin kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena)."
// panel.questionErrorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Määrittää virhesanoman sijainnin suhteessa kaikkiin paneelin kysymyksiin. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta."
// panel.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta."
// panel.page: "Repositions the panel to the end of a selected page." => "Siirtää paneelin valitun sivun loppuun."
// panel.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Lisää tilaa tai reunuksen paneelin sisällön ja paneeliruudun vasemman reunan väliin."
// panel.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Poista valinta, jos haluat näyttää paneelin yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos paneeli on lomakkeen ensimmäinen elementti."
// panel.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Valitse seuraavista: \"Laajennettu\" - paneeli näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - paneeli näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - paneeli näkyy kokonaisuudessaan eikä sitä voi kutistaa."
// panel.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Asettaa paneelin leveyden suhteessa muihin saman rivin mittauselementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// paneldynamic.name: "A panel ID that is not visible to respondents." => "Paneelin tunnus, joka ei näy vastaajille."
// paneldynamic.description: "Type a panel subtitle." => "Kirjoita paneelin tekstitys."
// paneldynamic.visibleIf: "Use the magic wand icon to set a conditional rule that determines panel visibility." => "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää paneelin näkyvyyden."
// paneldynamic.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the panel." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa paneelin vain luku -tilan käytöstä."
// paneldynamic.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta."
// paneldynamic.templateQuestionTitleLocation: "Applies to all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Koskee kaikkia tämän paneelin kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena)."
// paneldynamic.templateErrorLocation: "Sets the location of an error message in relation to a question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena)."
// paneldynamic.errorLocation: "Sets the location of an error message in relation to all questions within the panel. The \"Inherit\" option applies the page-level (if set) or survey-level setting." => "Määrittää virhesanoman sijainnin suhteessa kaikkiin paneelin kysymyksiin. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta."
// paneldynamic.page: "Repositions the panel to the end of a selected page." => "Siirtää paneelin valitun sivun loppuun."
// paneldynamic.innerIndent: "Adds space or margin between the panel content and the left border of the panel box." => "Lisää tilaa tai reunuksen paneelin sisällön ja paneeliruudun vasemman reunan väliin."
// paneldynamic.startWithNewLine: "Unselect to display the panel in one line with the previous question or panel. The setting doesn't apply if the panel is the first element in your form." => "Poista valinta, jos haluat näyttää paneelin yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos paneeli on lomakkeen ensimmäinen elementti."
// paneldynamic.state: "Choose from: \"Expanded\" - the panel is displayed in full and can be collapsed; \"Collapsed\" - the panel displays only the title and description and can be expanded; \"Locked\" - the panel is displayed in full and cannot be collapsed." => "Valitse seuraavista: \"Laajennettu\" - paneeli näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - paneeli näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - paneeli näkyy kokonaisuudessaan eikä sitä voi kutistaa."
// paneldynamic.width: "Sets the width of the panel in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Asettaa paneelin leveyden suhteessa muihin saman rivin mittauselementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// paneldynamic.templateTitle: "Type in a template for dynamic panel titles. Use {panelIndex} for the panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Kirjoita malli dynaamisten paneelien otsikoille. Käytä {panelIndex} paneelin yleistä sijaintia ja {visiblePanelIndex} sen järjestystä näkyvien paneelien joukossa. Lisää nämä paikkamerkit kuvioon lisätäksesi automaattisen numeroinnin."
// paneldynamic.templateTabTitle: "Type in a template for tab titles. Use {panelIndex} for a panel's general position and {visiblePanelIndex} for its order among visible panels. Insert these placeholders into the pattern to add automatic numbering." => "Kirjoita välilehtien otsikoiden malli. Käytä {panelIndex} paneelin yleistä sijaintia ja {visiblePanelIndex} sen järjestystä näkyvien paneelien joukossa. Lisää nämä paikkamerkit kuvioon lisätäksesi automaattisen numeroinnin."
// paneldynamic.templateVisibleIf: "This setting allows you to control the visibility of individual panels within the dynamic panel. Use the `{panel}` placeholder to reference the current panel in your expression." => "Tämän asetuksen avulla voit hallita yksittäisten paneelien näkyvyyttä dynaamisessa paneelissa. {panel}-paikkamerkin avulla voit viitata lausekkeen nykyiseen paneeliin."
// paneldynamic.titleLocation: "This setting is automatically inherited by all questions within this panel. If you want to override this setting, define title alignment rules for individual questions. The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Top\" by default)." => "Tämä asetus periytyy automaattisesti kaikkiin tämän paneelin kysymyksiin. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille. Peri-vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Ylin\" oletuksena)."
// paneldynamic.descriptionLocation: "The \"Inherit\" option applies the page-level (if set) or survey-level setting (\"Under the panel title\" by default)." => "\"Peri\" -vaihtoehto käyttää sivutason (jos määritetty) tai kyselytason asetusta (\"Paneelin otsikon alla\" oletuksena)."
// paneldynamic.newPanelPosition: "Defines the position of a newly added panel. By default, new panels are added to the end. Select \"Next\" to insert a new panel after the current one." => "Määrittää juuri lisätyn paneelin sijainnin. Oletuksena uudet paneelit lisätään loppuun. Valitse \"Seuraava\" lisätäksesi uuden paneelin nykyisen jälkeen."
// paneldynamic.copyDefaultValueFromLastEntry: "Duplicates answers from the last panel and assigns them to the next added dynamic panel." => "Monistaa edellisen paneelin vastaukset ja määrittää ne seuraavaan lisättyyn dynaamiseen paneeliin."
// paneldynamic.keyName: "Reference a question name to require a user to provide a unique response for this question in each panel." => "Viittaa kysymyksen nimeen, jos haluat edellyttää, että käyttäjä antaa yksilöllisen vastauksen tähän kysymykseen kussakin paneelissa."
// pehelp.defaultValueExpression: "This setting allows you to assign a default answer value based on an expression. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression serves as the initial default value that can be overridden by a respondent's manual input." => "Tämän asetuksen avulla voit määrittää oletusarvoisen vastausarvon lausekkeen perusteella. Lauseke voi sisältää peruslaskutoimituksia - '{q1_id} + {q2_id}', totuusarvolausekkeita, kuten '{age} > 60', ja funktioita: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne. Tämän lausekkeen määrittämä arvo toimii alkuperäisenä oletusarvona, jonka vastaajan manuaalinen syöttö voi ohittaa."
// pehelp.resetValueIf: "Use the magic wand icon to set a conditional rule that determines when a respondent's input is reset to the value based on the \"Default value expression\" or \"Set value expression\" or to the \"Default answer\" value (if either is set)." => "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää, milloin vastaajan syöte palautetaan arvoon \"Oletusarvolauseke\" tai \"Aseta arvolauseke\" tai \"Oletusvastaus\" -arvoon (jos jompikumpi on asetettu)."
// pehelp.setValueIf: "Use the magic wand icon to set a conditional rule that determines when to run the \"Set value expression\" and dynamically assign the resulting value as a response." => "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää, milloin \"Aseta arvolauseke\" suoritetaan, ja määritä tuloksena oleva arvo dynaamisesti vastauksena."
// pehelp.setValueExpression: "Specify an expression that defines the value to be set when the conditions in the \"Set value if\" rule are met. The expression can include basic calculations - `{q1_id} + {q2_id}`, Boolean expressions, such as `{age} > 60`, and functions: `iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc. The value determined by this expression can be overridden by a respondent's manual input." => "Määritä lauseke, joka määrittää arvon, joka määritetään, kun Aseta arvo jos -säännön ehdot täyttyvät. Lauseke voi sisältää peruslaskutoimituksia - '{q1_id} + {q2_id}', totuusarvolausekkeita, kuten '{age} > 60', ja funktioita: 'iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne. Tämän lausekkeen määrittämä arvo voidaan ohittaa vastaajan manuaalisella syötöllä."
// question.name: "A question ID that is not visible to respondents." => "Kysymystunnus, joka ei näy vastaajille."
// question.description: "Type a question subtitle." => "Kirjoita kysymyksen alaotsikko."
// question.visibleIf: "Use the magic wand icon to set a conditional rule that determines question visibility." => "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää kysymyksen näkyvyyden."
// question.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the question." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa kysymyksen vain luku -tilan käytöstä."
// question.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey advancing or submission unless the question received an answer." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn etenemisen tai lähettämisen, ellei kysymykseen ole vastattu."
// question.startWithNewLine: "Unselect to display the question in one line with the previous question or panel. The setting doesn't apply if the question is the first element in your form." => "Poista valinta, jos haluat näyttää kysymyksen yhdellä rivillä edellisen kysymyksen tai paneelin kanssa. Asetusta ei käytetä, jos kysymys on lomakkeen ensimmäinen elementti."
// question.page: "Repositions the question to the end of a selected page." => "Sijoittaa kysymyksen uudelleen valitun sivun loppuun."
// question.state: "Choose from: \"Expanded\" - the question box is displayed in full and can be collapsed; \"Collapsed\" - the question box displays only the title and description and can be expanded; \"Locked\" - the question box is displayed in full and cannot be collapsed." => "Valitse seuraavista: \"Laajennettu\" - kysymysruutu näytetään kokonaisuudessaan ja se voidaan kutistaa; \"Tiivistetty\" - kysymysruutu näyttää vain otsikon ja kuvauksen ja sitä voidaan laajentaa; \"Lukittu\" - kysymysruutu näkyy kokonaisuudessaan eikä sitä voi kutistaa."
// question.titleLocation: "Overrides title alignment rules defined on a panel, page or survey level. The \"Inherit\" option applies any higher-level settings (if set) or survey-level setting (\"Top\" by default)." => "Ohittaa paneeli-, sivu- tai kyselytasolla määritetyt otsikon tasaussäännöt. \"Peri\"-vaihtoehto käyttää kaikkia ylemmän tason asetuksia (jos määritetty) tai kyselytason asetuksia (\"Ylin\" oletuksena)."
// question.descriptionLocation: "The \"Inherit\" option applies the survey-level setting (\"Under the question title\" by default)." => "\"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Kysymyksen otsikon alla\" oletuksena)."
// question.errorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena)."
// question.indent: "Adds space or margin between the question content and the left border of the question box." => "Lisää välilyönnin tai reunuksen kysymyksen sisällön ja kysymysruudun vasemman reunan väliin."
// question.width: "Sets the width of the question in proportion to other survey elements in the same line. Accepts CSS values (px, %, in, pt, etc.)." => "Määrittää kysymyksen leveyden suhteessa saman rivin muihin kyselyelementteihin. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// surveyvalidator.expression: "Use the magic wand icon to set a validation rule for the question." => "Käytä taikasauvakuvaketta asettaaksesi kysymyksen vahvistussäännön."
// question.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing. The \"Inherit\" option applies the survey-level setting (\"On lost focus\" by default)." => "Valitse seuraavista: \"Kadonneessa tarkennuksessa\" - arvo päivitetään, kun syöttökenttä menettää tarkennuksen; \"Kirjoitettaessa\" - arvo päivitetään reaaliajassa, kun käyttäjät kirjoittavat. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Oletusarvoisesti menetetty kohdistus\")."
// question.url: "You can use any web service as a data source for multiple-choice questions. To populate choice values, enter the URL of the service providing the data." => "Voit käyttää mitä tahansa verkkopalvelua tietolähteenä monivalintakysymyksissä. Voit täyttää valinta-arvot antamalla tiedot tarjoavan palvelun URL-osoitteen."
// question.searchMode: "A comparison operation used to filter the drop-down list." => "Vertailutoiminto, jota käytetään avattavan luettelon suodattamiseen."
// signaturepad.signatureWidth: "Sets the width of the displayed signature area and the resulting image." => "Määrittää näytettävän allekirjoitusalueen ja tuloksena olevan kuvan leveyden."
// signaturepad.signatureHeight: "Sets the height of the displayed signature area and the resulting image." => "Määrittää näytettävän allekirjoitusalueen ja tuloksena olevan kuvan korkeuden."
// signaturepad.signatureAutoScaleEnabled: "Select if you want the signature area to fill all available space within the question box while maintaining the default 3:2 aspect ratio. When custom width and height values are set, the setting will keep the aspect ratio of these dimensions." => "Valitse tämä, jos haluat, että allekirjoitusalue täyttää kaiken kysymysruudussa käytettävissä olevan tilan säilyttäen oletusarvoisen 3:2-kuvasuhteen. Kun mukautetut leveys- ja korkeusarvot on määritetty, asetus säilyttää näiden mittojen kuvasuhteen."
// file.imageHeight: "Adjusts the height of the image in the survey results." => "Säätää kuvan korkeutta kyselyn tuloksissa."
// file.imageWidth: "Adjusts the width of the image in the survey results." => "Säätää kuvan leveyttä kyselyn tuloksissa."
// imagepicker.imageHeight: "Overrides the minimum and maximum height values." => "Ohittaa vähimmäis- ja enimmäiskorkeusarvot."
// imagepicker.imageWidth: "Overrides the minimum and maximum width values." => "Ohittaa vähimmäis- ja enimmäisleveysarvot."
// imagepicker.choices: "\"Value\" serves as an item ID used in conditional rules; \"Text\" is displayed to respondents." => "\"Arvo\" toimii ehdollisissa säännöissä käytettynä tuotetunnuksena; \"Teksti\" näkyy vastaajille."
// text.size: "This setting only resizes the input field and doesn't affect the width of the question box. To limit the accepted input length, go to <b>Validation → Maximum character limit</b>." => "Tämä asetus muuttaa vain syöttökentän kokoa eikä vaikuta kysymysruudun leveyteen. Jos haluat rajoittaa hyväksyttyä syötteen pituutta, siirry kohtaan <b>Vahvistus → merkkien enimmäismäärä</b>."
// comment.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Määrittää syöttökentässä näytettävien rivien määrän. Jos tulo vie enemmän rivejä, vierityspalkki tulee näkyviin."
// survey.mode: "Choose between: \"Editable\" - enables respondents to fill out your survey; \"Read-only\" - disables form editing." => "Valitse jompikumpi seuraavista: \"Muokattavissa\" - vastaajat voivat täyttää kyselysi; \"Vain luku\" - poistaa lomakkeen muokkauksen käytöstä."
// matrixdropdowncolumn.name: "A column ID that is not visible to respondents." => "Sarakkeen tunnus, joka ei näy vastaajille."
// matrixdropdowncolumn.isUnique: "When enabled for a column, a respondent is required to provide a unique response for each question within this column." => "Kun sarake on otettu käyttöön, vastaajan on annettava yksilöllinen vastaus jokaiseen tämän sarakkeen kysymykseen."
// matrixdropdowncolumn.rows: "Sets the number of displayed lines in the input field. If the input takes up more lines, the scroll bar will appear." => "Määrittää syöttökentässä näytettävien rivien määrän. Jos tulo vie enemmän rivejä, vierityspalkki tulee näkyviin."
// matrixdropdowncolumn.visibleIf: "Use the magic wand icon to set a conditional rule that determines column visibility." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka määrittää sarakkeen näkyvyyden."
// matrixdropdowncolumn.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the column." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa sarakkeen vain luku -tilan käytöstä."
// matrixdropdowncolumn.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta."
// matrixdropdowncolumn.showInMultipleColumns: "When selected, creates an individual column for each choice option." => "Kun tämä asetus on valittuna, kullekin vaihtoehdolle luodaan oma sarake."
// pehelp.widthMode: "Choose from: \"Static\" - sets a fixed width; \"Responsive\" - makes the survey occupy the full width of the screen; \"Auto\" - applies either of the two depending on the question types used." => "Valitse seuraavista: \"Staattinen\" - asettaa kiinteän leveyden; \"Reagoiva\" - tekee kyselystä koko näytön leveyden; \"Auto\" - soveltaa jompaakumpaa näistä kahdesta riippuen käytetyistä kysymystyypeistä."
// pehelp.logo: "Paste an image link (no size limits) or click the folder icon to browse a file from your computer (up to 64KB)." => "Liitä kuvalinkki (ei kokorajoituksia) tai napsauta kansiokuvaketta selataksesi tiedostoa tietokoneeltasi (enintään 64 kt)."
// pehelp.logoWidth: "Sets a logo width in CSS units (px, %, in, pt, etc.)." => "Määrittää logon leveyden CSS-yksiköissä (px, %, in, pt jne.)."
// pehelp.logoHeight: "Sets a logo height in CSS units (px, %, in, pt, etc.)." => "Asettaa logon korkeuden CSS-yksiköinä (px, %, in, pt jne.)."
// pehelp.logoFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Valitse seuraavista: \"Ei mitään\" - kuva säilyttää alkuperäisen kokonsa; \"Sisältää\" - kuvan kokoa muutetaan sopivaksi säilyttäen samalla kuvasuhteensa; \"Kansi\" - kuva täyttää koko laatikon säilyttäen samalla kuvasuhteensa; \"Täytä\" - kuva venytetään täyttämään laatikko säilyttämättä sen kuvasuhdetta."
// pehelp.showNavigationButtons: "Sets the visibility and location of navigation buttons on a page." => "Määrittää sivun navigointipainikkeiden näkyvyyden ja sijainnin."
// pehelp.showProgressBar: "Sets the visibility and location of a progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Määrittää edistymispalkin näkyvyyden ja sijainnin. \"Auto\"-arvo näyttää edistymispalkin kyselyn otsikon ylä- tai alapuolella."
// pehelp.showPreviewBeforeComplete: "Enable the preview page with all or answered questions only." => "Ota esikatselusivu käyttöön vain kaikilla kysymyksillä tai vastatuilla kysymyksillä."
// pehelp.questionTitleLocation: "Applies to all questions within the survey. This setting can be overridden by title alignment rules at lower levels: panel, page, or question. A lower-level setting will override those on a higher level." => "Koskee kaikkia kyselyn kysymyksiä. Tämä asetus voidaan ohittaa otsikon tasaussäännöillä alemmilla tasoilla: paneeli, sivu tai kysymys. Alemman tason asetus ohittaa korkeammalla tasolla olevat."
// pehelp.requiredMark: "A symbol or a sequence of symbols indicating that an answer is required." => "Symboli tai symbolisarja, joka osoittaa, että vastaus vaaditaan."
// pehelp.questionStartIndex: "Enter a number or letter with which you want to start numbering." => "Kirjoita numero tai kirjain, jolla haluat aloittaa numeroinnin."
// pehelp.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box." => "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan."
// pehelp.autoFocusFirstQuestion: "Select if you want the first input field on each page ready for text entry." => "Valitse tämä, jos haluat, että kunkin sivun ensimmäinen syöttökenttä on valmis tekstinsyöttöä varten."
// pehelp.questionOrder: "Keeps the original order of questions or randomizes them. The effect of this setting is only visible in the Preview tab." => "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. Tämän asetuksen vaikutus näkyy vain Esikatselu-välilehdessä."
// pehelp.maxTextLength: "For text entry questions only." => "Vain tekstinsyöttökysymykset."
// pehelp.maxCommentLength: "For question comments only." => "Vain kysymysten kommentit."
// pehelp.autoGrowComment: "Select if you want question comments and Long Text questions to auto-grow in height based on the entered text length." => "Valitse tämä, jos haluat, että kysymysten kommentit ja pitkät tekstit -kysymykset kasvavat automaattisesti syötetyn tekstin pituuden perusteella."
// pehelp.allowResizeComment: "For question comments and Long Text questions only." => "Vain kysymyskommentit ja pitkän tekstin kysymykset."
// pehelp.calculatedValues: "Custom variables serve as intermediate or auxiliary variables used in form calculations. They take respondent inputs as source values. Each custom variable has a unique name and an expression it's based on." => "Mukautetut muuttujat toimivat väli- tai apumuuttujina, joita käytetään lomakelaskelmissa. He ottavat vastaajan syötteet lähdearvoina. Jokaisella mukautetulla muuttujalla on yksilöllinen nimi ja lauseke, johon se perustuu."
// pehelp.includeIntoResult: "Select if you wish the calculated value of the expression to be saved along with survey results." => "Valitse tämä, jos haluat, että lausekkeen laskettu arvo tallennetaan yhdessä kyselyn tulosten kanssa."
// pehelp.triggers: "A trigger is an event or condition that is based on an expression. Once the expression is evaluated to \"true\", a trigger sets off an action. Such an action can optionally have a target question it affects." => "Käynnistin on tapahtuma tai ehto, joka perustuu lausekkeeseen. Kun lausekkeen arvoksi on arvioitu \"tosi\", käynnistin käynnistää toiminnon. Tällaisella toiminnalla voi valinnaisesti olla kohdekysymys, johon se vaikuttaa."
// pehelp.clearInvisibleValues: "Choose whether or not to clear values for questions hidden by conditional logic and when to do it." => "Valitse, tyhjennetäänkö ehdollisen logiikan piilottamien kysymysten arvot ja milloin se tehdään."
// pehelp.textUpdateMode: "Choose from: \"On lost focus\" - the value is updated when the input field loses focus; \"While typing\" - the value is updated in real-time, as users are typing." => "Valitse seuraavista: \"Kadonneessa tarkennuksessa\" - arvo päivitetään, kun syöttökenttä menettää tarkennuksen; \"Kirjoitettaessa\" - arvo päivitetään reaaliajassa, kun käyttäjät kirjoittavat."
// pehelp.columns: "The left value serves as a column ID used in conditional rules, the right value is displayed to respondents." => "Vasen arvo toimii ehdollisissa säännöissä käytettynä saraketunnuksena, oikea arvo näkyy vastaajille."
// pehelp.rows: "The left value serves as a row ID used in conditional rules, the right value is displayed to respondents." => "Vasen arvo toimii rivitunnuksena, jota käytetään ehdollisissa säännöissä, oikea arvo näytetään vastaajille."
// pehelp.columnMinWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// pehelp.rowTitleWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// pehelp.cellErrorLocation: "Sets the location of an error message in relation to a cell with invalid input. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Määrittää virhesanoman sijainnin suhteessa soluun, jonka syöte on virheellinen. \"Peri\" -vaihtoehto käyttää asetusta \"Virheilmoituksen kohdistus\" -ominaisuudesta."
// pehelp.keyDuplicationError: "When the \"Prevent duplicate responses\" property is enabled, a respondent attempting to submit a duplicate entry will receive the following error message." => "Kun Estä päällekkäiset vastaukset -ominaisuus on käytössä, vastaaja, joka yrittää lähettää merkinnän kaksoiskappaleen, saa seuraavan virhesanoman."
// pehelp.totalExpression: "Allows you to calculate total values based on an expression. The expression can include basic calculations (`{q1_id} + {q2_id}`), Boolean expressions (`{age} > 60`) and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Voit laskea kokonaisarvot lausekkeen perusteella. Lauseke voi sisältää peruslaskutoimituksia ('{q1_id} + {q2_id}'), totuusarvolausekkeita ('{age} > 60') ja funktioita ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne.)."
// pehelp.confirmDelete: "Triggers a prompt asking to confirm the row deletion." => "Käynnistää kehotteen, jossa pyydetään vahvistamaan rivin poisto."
// pehelp.copyDefaultValueFromLastEntry: "Duplicates answers from the last row and assigns them to the next added dynamic row." => "Monistaa vastaukset viimeiseltä riviltä ja määrittää ne seuraavalle lisätylle dynaamiselle riville."
// pehelp.description: "Type a subtitle." => "Kirjoita tekstitys."
// pehelp.locale: "Choose a language to begin creating your survey. To add a translation, switch to a new language and translate the original text here or in the Translations tab." => "Aloita kyselyn luominen valitsemalla kieli. Jos haluat lisätä käännöksen, vaihda uuteen kieleen ja käännä alkuperäinen teksti täällä tai Käännökset-välilehdessä."
// pehelp.detailPanelMode: "Sets the location of a details section in relation to a row. Choose from: \"None\" - no expansion is added; \"Under the row\" - a row expansion is placed under each row of the matrix; \"Under the row, display one row expansion only\" - an expansion is displayed under a single row only, the remaining row expansions are collapsed." => "Määrittää tieto-osan sijainnin suhteessa riviin. Valitse seuraavista: \"Ei mitään\" - laajennusta ei lisätä; \"Rivin alla\" - matriisin jokaisen rivin alle sijoitetaan rivilaajennus; \"Näytä rivin alla vain yhden rivin laajennus\" - laajennus näkyy vain yhden rivin alla, loput rivilaajennukset kutistetaan."
// pehelp.imageFit: "Choose from: \"None\" - image maintains its original size; \"Contain\" - image is resized to fit while maintaining its aspect ratio; \"Cover\" - image fills the entire box while maintaining its aspect ratio; \"Fill\" - image is stretched to fill the box without maintaining its aspect ratio." => "Valitse seuraavista: \"Ei mitään\" - kuva säilyttää alkuperäisen kokonsa; \"Sisältää\" - kuvan kokoa muutetaan sopivaksi säilyttäen samalla kuvasuhteensa; \"Kansi\" - kuva täyttää koko laatikon säilyttäen samalla kuvasuhteensa; \"Täytä\" - kuva venytetään täyttämään laatikko säilyttämättä sen kuvasuhdetta."
// pehelp.autoGrow: "Gradually increases the height of the input field as data is being entered. Overrides the \"Input field height (in lines)\" setting." => "Lisää vähitellen syöttökentän korkeutta, kun tietoja syötetään. Ohittaa \"Syöttökentän korkeus (viivoina)\" -asetuksen."
// pehelp.allowResize: "The resize handle (or grip) appears in the corner and can be dragged to alter the size of the input field." => "Koonmuuttokahva (tai kahva) tulee näkyviin kulmaan, ja sitä vetämällä voit muuttaa syöttökentän kokoa."
// pehelp.timeLimit: "A time interval in seconds after which the survey auto-advances to the Thank You page." => "Sekunteina oleva aikaväli, jonka jälkeen kysely etenee automaattisesti Kiitos-sivulle."
// pehelp.timeLimitPerPage: "A time interval in seconds after which the survey auto-advances to the next page." => "Sekunteina ilmaistu aikaväli, jonka jälkeen kysely siirtyy automaattisesti seuraavalle sivulle."
// page.timeLimit: "A time interval in seconds after which the survey auto-advances to the next page." => "Sekunteina ilmaistu aikaväli, jonka jälkeen kysely siirtyy automaattisesti seuraavalle sivulle."
// page.visibleIf: "Use the magic wand icon to set a conditional rule that determines page visibility." => "Käytä taikasauvakuvaketta asettaaksesi ehdollisen säännön, joka määrittää sivun näkyvyyden."
// page.enableIf: "Use the magic wand icon to set a conditional rule that disables the read-only mode for the page." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka poistaa sivun vain luku -tilan käytöstä."
// page.requiredIf: "Use the magic wand icon to set a conditional rule that prevents survey submission unless at least one nested question has an answer." => "Määritä taikasauvakuvakkeen avulla ehdollinen sääntö, joka estää kyselyn lähettämisen, ellei vähintään yhteen sisäkkäiseen kysymykseen ole vastausta."
// page.questionTitleLocation: "Applies to all questions within this page. If you want to override this setting, define title alignment rules for individual questions or panels. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Koskee kaikkia tämän sivun kysymyksiä. Jos haluat ohittaa tämän asetuksen, määritä otsikon tasaussäännöt yksittäisille kysymyksille tai paneeleille. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena)."
// page.questionErrorLocation: "Sets the location of an error message in relation to the question with invalid input. Choose between: \"Top\" - an error text is placed at the top of the question box; \"Bottom\" - an error text is placed at the bottom of the question box. The \"Inherit\" option applies the survey-level setting (\"Top\" by default)." => "Määrittää virhesanoman sijainnin suhteessa kysymykseen, jonka syöte on virheellinen. Valitse seuraavista: \"Top\" - virheteksti sijoitetaan kysymysruudun yläosaan; \"Pohja\" - virheteksti sijoitetaan kysymysruudun alaosaan. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Ylin\" oletuksena)."
// page.questionOrder: "Keeps the original order of questions or randomizes them. The \"Inherit\" option applies the survey-level setting (\"Original\" by default). The effect of this setting is only visible in the Preview tab." => "Säilyttää kysymysten alkuperäisen järjestyksen tai satunnaistaa ne. \"Peri\" -vaihtoehto käyttää kyselytason asetusta (\"Alkuperäinen\" oletuksena). Tämän asetuksen vaikutus näkyy vain Esikatselu-välilehdessä."
// page.showNavigationButtons: "Sets the visibility of navigation buttons on the page. The \"Inherit\" option applies the survey-level setting, which defaults to \"Visible\"." => "Määrittää navigointipainikkeiden näkyvyyden sivulla. \"Peri\" -vaihtoehto käyttää kyselytason asetusta, jonka oletusarvo on \"Näkyvä\"."
// pehelp.panelsState: "Choose from: \"Locked\" - users cannot expand or collapse panels; \"Collapse all\" - all panels start in a collapsed state; \"Expand all\" - all panels start in an expanded state; \"First expanded\" - only the first panel is initially expanded." => "Valitse seuraavista: \"Lukittu\" - käyttäjät eivät voi laajentaa tai kutistaa paneeleja; \"Kutista kaikki\" - kaikki paneelit alkavat romahtaneessa tilassa; \"Laajenna kaikki\" - kaikki paneelit alkavat laajennetussa tilassa; \"Ensimmäinen laajennettu\" - vain ensimmäistä paneelia laajennetaan aluksi."
// pehelp.imageLinkName: "Enter a shared property name within the array of objects that contains the image or video file URLs you want to display in the choice list." => "Kirjoita jaetun ominaisuuden nimi objektiryhmään, joka sisältää valintaluettelossa näytettävät kuvan tai videotiedoston URL-osoitteet."
// pehelp.choices: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Vasen arvo toimii ehdollisissa säännöissä käytettynä kohteen tunnuksena, oikea arvo näytetään vastaajille."
// pehelp.title: "Type a user-friendly title to display." => "Kirjoita käyttäjäystävällinen otsikko näytettäväksi."
// pehelp.waitForUpload: "Ensures that users won't complete the survey until files are uploaded." => "Varmistaa, että käyttäjät eivät vastaa kyselyyn, ennen kuin tiedostot on ladattu."
// pehelp.minWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// pehelp.maxWidth: "Accepts CSS values (px, %, in, pt, etc.)." => "Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// pehelp.width: "Accepts CSS values (px, %, in, pt, etc.)." => "Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// pehelp.useDisplayValuesInDynamicTexts: "In single- and multiple-selection question types, each choice option has an ID and display value. When selected, this setting shows a display value instead of an ID value in HTML questions and dynamic titles and descriptions of survey elements." => "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Kun tämä asetus on valittuna, se näyttää tunnusarvon sijaan HTML-kysymyksissä ja kyselyelementtien dynaamisissa otsikoissa ja kuvauksissa."
// pehelp.clearIfInvisible: "Choose whether or not to clear question values hidden by conditional logic and when to do it. The \"Inherit\" option applies the survey-level setting (\"Upon survey completion\" by default)." => "Valitse, poistetaanko ehdollisen logiikan piilottamat kysymysarvot ja milloin se tehdään. \"Peri\"-vaihtoehto käyttää kyselytason asetusta (\"Kyselyn valmistuttua\" oletuksena)."
// pehelp.choicesFromQuestionMode: "Choose from: \"All\" - copies all choice options from the selected question; \"Selected\" - dynamically copies only selected choice options; \"Unselected\" - dynamically copies only unselected choice options. The \"None\" and \"Other\" options are copied by default if enabled in the source question." => "Valitse seuraavista: \"Kaikki\" - kopioi kaikki valintavaihtoehdot valitusta kysymyksestä; \"Valittu\" - kopioi dynaamisesti vain valitut valintavaihtoehdot; \"Ei valittu\" - kopioi dynaamisesti vain valitsemattomat valintavaihtoehdot. Vaihtoehdot \"Ei mitään\" ja \"Muut\" kopioidaan oletusarvoisesti, jos ne on otettu käyttöön lähdekysymyksessä."
// pehelp.showOtherItem: "When selected, users can include additional input in a separate comment box." => "Kun tämä on valittuna, käyttäjät voivat lisätä lisätietoja erilliseen kommenttiruutuun."
// pehelp.separateSpecialChoices: "Displays each special choice option (\"None\", \"Other\", \"Select All\") on a new line, even when using a multiple-column layout." => "Näyttää jokaisen erityisen valintavaihtoehdon (\"Ei mitään\", \"Muu\", \"Valitse kaikki\") uudella rivillä, vaikka käytettäisiin monisarakkeista asettelua."
// pehelp.path: "Specify the location within the service dataset where the target array of objects is located. Leave empty if the URL already points to the array." => "Määritä palvelutietojoukon sijainti, jossa objektien kohderyhmä sijaitsee. Jätä tyhjäksi, jos URL-osoite osoittaa jo matriisiin."
// pehelp.titleName: "Enter a uniform property name within the array of objects that contains the values you want to display in the choice list." => "Kirjoita objektimatriisiin yhtenäinen ominaisuuden nimi, joka sisältää valintaluettelossa näytettävät arvot."
// pehelp.allowEmptyResponse: "Select to allow the service to return an empty response or array." => "Valitse tämä, jos haluat, että palvelu palauttaa tyhjän vastauksen tai matriisin."
// pehelp.choicesVisibleIf: "Use the magic wand icon to set a conditional rule that determines the visibility of all choice options." => "Taikasauvakuvakkeen avulla voit määrittää ehdollisen säännön, joka määrittää kaikkien valintavaihtoehtojen näkyvyyden."
// pehelp.rateValues: "The left value serves as an item ID used in conditional rules, the right value is displayed to respondents." => "Vasen arvo toimii ehdollisissa säännöissä käytettynä kohteen tunnuksena, oikea arvo näytetään vastaajille."
// rating.displayMode: "\"Auto\" selects between the \"Buttons\" and \"Dropdown\" modes based on the available width. When the width is insufficient to display buttons, the question displays a dropdown." => "\"Auto\" valitsee \"Painikkeet\" ja \"Avattava\" -tilojen välillä käytettävissä olevan leveyden perusteella. Kun leveys ei riitä painikkeiden näyttämiseen, kysymyksessä näkyy avattava valikko."
// pehelp.valuePropertyName: "Allows you to connect questions that produce results in different formats. When such questions are linked together using a join identifier, this shared property stores selected question values." => "Voit yhdistää kysymyksiä, jotka tuottavat tuloksia eri muodoissa. Kun tällaiset kysymykset linkitetään toisiinsa liitostunnuksen avulla, tähän jaettuun ominaisuuteen tallennetaan valitut kysymysarvot."
// pehelp.searchEnabled: "Select if you want to update the drop-down menu contents to match the search query that a user is typing in the input field." => "Valitse tämä, jos haluat päivittää avattavan valikon sisällön vastaamaan hakukyselyä, jonka käyttäjä kirjoittaa syöttökenttään."
// pehelp.valueTrue: "A value to save in survey results when respondents give a positive answer." => "Arvo, joka tallennetaan kyselyn tuloksiin, kun vastaajat antavat myönteisen vastauksen."
// pehelp.valueFalse: "A value to save in survey results when respondents give a negative answer." => "Arvo, joka tallennetaan kyselyn tuloksiin, kun vastaajat antavat kielteisen vastauksen."
// pehelp.showPreview: "It's not recommended to disable this option as it overrides the Preview image and makes it hard for a user to understand whether the files have been uploaded." => "Tätä asetusta ei suositella poistamaan käytöstä, koska se ohittaa esikatselukuvan ja vaikeuttaa käyttäjän ymmärtämistä, onko tiedostot ladattu."
// pehelp.needConfirmRemoveFile: "Triggers a prompt asking to confirm the file deletion." => "Käynnistää kehotteen, jossa pyydetään vahvistamaan tiedoston poistaminen."
// pehelp.selectToRankEnabled: "Enable to rank only selected choices. Users will drag selected items from the choice list to order them within the ranking area." => "Ota käyttöön, jos haluat luokitella vain valitut vaihtoehdot. Käyttäjät vetävät valitut kohteet valintaluettelosta järjestääkseen ne sijoitusalueella."
// pehelp.dataList: "Enter a list of choices that will be suggested to the respondent during input." => "Kirjoita luettelo vaihtoehdoista, joita vastaajalle ehdotetaan syötteen aikana."
// pehelp.inputSize: "The setting only resizes the input fields and doesn't affect the width of the question box." => "Asetus muuttaa vain syöttökenttien kokoa eikä vaikuta kysymysruudun leveyteen."
// pehelp.itemTitleWidth: "Sets consistent width for all item labels in pixels" => "Määrittää yhdenmukaisen leveyden kaikille tuoteotsikoille kuvapisteinä"
// pehelp.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"Auto\" -vaihtoehto määrittää automaattisesti sopivan näyttötilan - Kuva, Video tai YouTube - annetun lähde-URL-osoitteen perusteella."
// pehelp.altText: "Serves as a substitute when the image cannot be displayed on a user's device and for accessibility purposes." => "Toimii korvikkeena, kun kuvaa ei voida näyttää käyttäjän laitteella, ja esteettömyyssyistä."
// pehelp.rateColorMode: "Defines the color of the selected emoji when the Rating icon type is set to \"Smileys\". Choose between: \"Default\" - the selected emoji appears in default survey color; \"Scale\" - the selected emoji inherits color from the rating scale." => "Määrittää valitun emojin värin, kun luokituskuvakkeen tyypiksi on asetettu \"Hymiöt\". Valitse seuraavista: \"Oletus\" - valittu emoji näkyy kyselyn oletusvärillä; \"Scale\" - valittu emoji perii värin luokitusasteikolta."
// expression.name: "An expression ID that is not visible to respondents." => "Lausekkeen tunnus, joka ei näy vastaajille."
// expression.description: "Type an expression subtitle." => "Kirjoita lausekkeen alaotsikko."
// expression.expression: "An expression can include basic calculations (`{q1_id} + {q2_id}`), conditions (`{age} > 60`), and functions ('iif()`, `today()`, `age()`, `min()`, `max()`, `avg()`, etc.)." => "Lauseke voi sisältää peruslaskutoimituksia ('{q1_id} + {q2_id}'), ehtoja ('{age} > 60') ja funktioita ('iif()', 'today()', 'age()', 'min()', 'max()', 'avg()' jne.)."
// pehelp.storeOthersAsComment: "Select to store the \"Other\" option value as a separate property in survey results." => "Valitse tämä, jos haluat tallentaa Muu-vaihtoehdon arvon erillisenä ominaisuutena kyselyn tuloksiin."
// p.swapOrder: "Swap the order of Yes and No" => "Kyllä- ja Ei-järjestyksen vaihtaminen"
// p.itemTitleWidth: "Item label width (in px)" => "Nimikkeen otsikon leveys (px)"
// p.selectToRankEmptyRankedAreaText: "Text to show if all options are selected" => "Teksti, joka näyttää, onko kaikki asetukset valittu"
// p.selectToRankEmptyUnrankedAreaText: "Placeholder text for the ranking area" => "Sijoitusalueen paikkamerkkiteksti"
// pe.autoAdvanceAllowComplete: "Complete the survey automatically" => "Vastaa kyselyyn automaattisesti"
// pehelp.autoAdvanceAllowComplete: "Select if you want the survey to complete automatically after a respondent answers all questions." => "Valitse, haluatko kyselyn täyttyvän automaattisesti, kun vastaaja on vastannut kaikkiin kysymyksiin."
// masksettings.saveMaskedValue: "Save masked value in survey results" => "Peitetyn arvon tallentaminen kyselyn tuloksiin"
// patternmask.pattern: "Value pattern" => "Arvon kuvio"
// datetimemask.min: "Minimum value" => "Pienin arvo"
// datetimemask.max: "Maximum value" => "Suurin arvo"
// numericmask.allowNegativeValues: "Allow negative values" => "Salli negatiiviset arvot"
// numericmask.thousandsSeparator: "Thousands separator" => "Tuhansien erotin"
// numericmask.decimalSeparator: "Decimal separator" => "Desimaalierotin"
// numericmask.precision: "Value precision" => "Arvon tarkkuus"
// numericmask.min: "Minimum value" => "Pienin arvo"
// numericmask.max: "Maximum value" => "Suurin arvo"
// currencymask.prefix: "Currency prefix" => "Valuutan etuliite"
// currencymask.suffix: "Currency suffix" => "Valuutan jälkiliite"
// pe.maskType: "Input mask type" => "Syöttörajoitteen tyyppi"
// maskTypes.patternmask: "Pattern" => "Kuvio"
// maskTypes.numericmask: "Numeric" => "Numeerinen"
// maskTypes.datetimemask: "Date and Time" => "Päivämäärä ja kellonaika"
// maskTypes.currencymask: "Currency" => "Valuutta"
// tabs.mask: "Input Mask Settings" => "Syöttörajoitteen asetukset"
// pe.pattern_placeholder: "Ex.: +1(999)-999-99-99" => "Esimerkki: +1(999)-999-99-99"
// pe.datetimepattern_placeholder: "Ex.: mm/dd/yyyy" => "Esimerkki: kk/pp/v"
// pe.currencyprefix_placeholder: "Ex.: $" => "Esimerkki: $"
// pe.currencysuffix_placeholder: "Ex.: USD" => "Esimerkki: USD"
// pv.textWrapEnabled: "Wrap choices" => "Kääri valinnat"
// question.textWrapEnabled: "Long texts in choice options will automatically generate line breaks to fit within the drop-down menu. Unselect if you want the texts to clip." => "Valintavaihtoehtojen pitkät tekstit luovat automaattisesti rivinvaihdot, jotka mahtuvat avattavaan valikkoon. Poista valinta, jos haluat leikata tekstit."
// masksettings.saveMaskedValue: "Select if you want to store the question value with an applied mask in survey results." => "Valitse, haluatko tallentaa kyselyn tuloksiin kysymyksen arvon käyttämällä maskia."
// patternmask.pattern: "The pattern can contain string literals and the following placeholders: `9` - for a digit; `a` - for an upper- or lower-case letter; `#` - for a digit or an upper- or lower-case letter. Use backslash `\\` to escape a character." => "Kuvio voi sisältää merkkijonoliteraaleja ja seuraavia paikkamerkkejä: '9' - numerolle; \"a\" - isoille tai pienille kirjaimille; '#' - numerolle tai isolle tai pienelle kirjaimelle. Käytä kenoviivaa '\\' paetaksesi hahmoa."
// datetimemask.pattern: "The pattern can contain separator characters and the following placeholders: `m` - for month number; `mm` - for month number, with leading zero for single-digit values; `d` - for day of the month; `dd` - for day of the month, with leading zero for single-digit values; `yy` - for the last two digits of the year; `yyyy` - for a four-digit year." => "Kuvio voi sisältää erotinmerkkejä ja seuraavia paikkamerkkejä: 'm' - kuukauden numero; 'mm' - kuukauden numero, jonka alussa on nolla yksinumeroisille arvoille; \"d\" - kuukauden päivä; 'dd' - kuukauden päivä, jonka alussa on nolla yksinumeroisille arvoille; \"yy\" - vuoden kaksi viimeistä numeroa; \"VVVV\" - nelinumeroinen vuosi."
// numericmask.decimalSeparator: "A symbol used to separate the fractional part from the integer part of a displayed number." => "Symboli, jota käytetään erottamaan murto-osa näytetyn luvun kokonaislukuosasta."
// numericmask.thousandsSeparator: "A symbol used to separate the digits of a large number into groups of three." => "Symboli, jota käytetään erottamaan suuren luvun numerot kolmen ryhmiin."
// numericmask.precision: "Limits how many digits to retain after the decimal point for a displayed number." => "Rajoittaa näytettävän luvun desimaalipilkun jälkeen säilytettävien numeroiden määrää."
// currencymask.prefix: "One or several symbols to be displayed before the value." => "Yksi tai useampi symboli, joka näytetään ennen arvoa."
// currencymask.suffix: "One or several symbols to be displayed after the value." => "Yksi tai useampi symboli, joka näytetään arvon jälkeen."
// ed.translationSource: "Source: " => "Lähde: "
// ed.translationTarget: "Target: " => "Kohde: "
// ed.pagePlaceHolder: "The page is empty. Drag an element from the toolbox or click the button below." => "Sivu on tyhjä. Vedä elementti työkalupakista tai napsauta alla olevaa painiketta."
// maskTypes.none: "None" => "Ei lainkaan"
// itemvalue@rows.visibleIf: "Make the row visible if" => "Tee rivistä näkyvä, jos"
// itemvalue@rows.enableIf: "Make the row editable if" => "Tee rivistä muokattava, jos"
// signaturepad.placeholderReadOnly: "Placeholder text in read-only or preview mode" => "Paikkamerkkiteksti vain luku -tilassa tai esikatselutilassa"
// pe.textWrapEnabled: "Wrap choices" => "Kääri valinnat"
// image.contentMode: "The \"Auto\" option automatically determines the suitable mode for display - Image, Video, or YouTube - based on the source URL provided." => "\"Auto\" -vaihtoehto määrittää automaattisesti sopivan näyttötilan - Kuva, Video tai YouTube - annetun lähde-URL-osoitteen perusteella."
// imagepicker.contentMode: "Choose between \"Image\" and \"Video\" to set the content mode of the media selector. If \"Image\" is selected, ensure that all options provided are image files in the following formats: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Similarly, if \"Video\" is selected, ensure that all options are direct links to video files in the following formats: MP4, MOV, WMV, FLV, AVI, MKV. Please note that YouTube links are not supported for video options." => "Valitse \"Kuva\" tai \"Video\" asettaaksesi mediavalitsimen sisältötilan. Jos \"Kuva\" on valittuna, varmista, että kaikki annetut vaihtoehdot ovat kuvatiedostoja seuraavissa muodoissa: JPEG, GIF, PNG, APNG, SVG, BMP, ICO. Samoin, jos \"Video\" on valittuna, varmista, että kaikki vaihtoehdot ovat suoria linkkejä videotiedostoihin seuraavissa muodoissa: MP4, MOV, WMV, FLV, AVI, MKV. Huomaa, että YouTube-linkkejä ei tueta videoasetuksissa."
// ed.selectFile: "Select a file" => "Valitse tiedosto"
// ed.removeFile: "Remove the file" => "Poista tiedosto"
// pe.searchMode: "Search Mode" => "Hakutila"
// ed.surveyPlaceHolderMobile: "Click the \"Add Question\" button below to start creating your form." => "Napsauta alla olevaa Lisää kysymys -painiketta aloittaaksesi lomakkeen luomisen."
// ed.pagePlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the page." => "Napsauta alla olevaa Lisää kysymys -painiketta lisätäksesi sivulle uuden elementin."
// ed.panelPlaceHolderMobile: "Click the \"Add Question\" button below to add a new element to the panel." => "Napsauta alla olevaa Lisää kysymys -painiketta lisätäksesi uuden elementin paneeliin."
// ed.imagePlaceHolderMobile: "Click the button below and choose an image to upload" => "Klikkaa alla olevaa painiketta ja valitse ladattava kuva"
// coloralpha.opacity: "Opacity" => "Läpikuultamattomuus"
// font.family: "Font family" => "Fonttiperhe"
// font.color: "Color" => "Väri"
// font.placeholderColor: "Placeholder color" => "Paikkamerkin väri"
// font.size: "Size" => "Koko"
// theme.themeName: "Theme" => "Teema"
// theme.isPanelless: "Question appearance" => "Kysymyksen ulkonäkö"
// theme.editorPanel: "Background and corner radius" => "Taustan ja kulman säde"
// theme.questionPanel: "Background and corner radius" => "Taustan ja kulman säde"
// theme.primaryColor: "Accent color" => "Korostusväri"
// theme.panelBackgroundTransparency: "Panel background opacity" => "Paneelin taustan peittävyys"
// theme.questionBackgroundTransparency: "Question background opacity" => "Taustan peittävyyden kyseenalaistaminen"
// theme.fontSize: "Font size" => "Kirjasinkoko"
// theme.scale: "Scale" => "Mittakaava"
// theme.cornerRadius: "Corner radius" => "Kulman säde"
// theme.pageTitle: "Title font" => "Otsikon fontti"
// theme.pageDescription: "Description font" => "Kuvauksen fontti"
// theme.questionTitle: "Title font" => "Otsikon fontti"
// theme.questionDescription: "Description font" => "Kuvauksen fontti"
// theme.editorFont: "Font" => "Fontti"
// theme.backgroundOpacity: "Opacity" => "Läpikuultamattomuus"
// theme.--sjs-font-family: "Font family" => "Fonttiperhe"
// theme.--sjs-general-backcolor-dim: "Background color" => "Taustaväri"
// theme.--sjs-primary-backcolor: "Accent background" => "Aksentti tausta"
// theme.--sjs-primary-forecolor: "Accent foreground" => "Aksentti etualalla"
// theme.--sjs-shadow-small: "Shadow effects" => "Varjo-tehosteet"
// theme.--sjs-shadow-inner: "Shadow effects" => "Varjo-tehosteet"
// theme.--sjs-border-default: "Colors" => "Värit"
// header@header.headerView: "View" => "Näkymä"
// header@header.logoPosition: "Logo position" => "Logon sijainti"
// header@header.surveyTitle: "Survey title font" => "Kyselyn otsikon fontti"
// header@header.surveyDescription: "Survey description font" => "Kyselyn kuvauksen fontti"
// header@header.headerTitle: "Survey title font" => "Kyselyn otsikon fontti"
// header@header.headerDescription: "Survey description font" => "Kyselyn kuvauksen fontti"
// header@header.inheritWidthFrom: "Content area width" => "Sisältöalueen leveys"
// header@header.textAreaWidth: "Text width" => "Tekstin leveys"
// header@header.backgroundColorSwitch: "Background color" => "Taustaväri"
// header@header.backgroundImage: "Background image" => "Taustakuvan"
// header@header.backgroundImageOpacity: "Opacity" => "Läpikuultamattomuus"
// header@header.overlapEnabled: "Overlap" => "Limittyä"
// header@header.logoPositionX: "Logo position" => "Logon sijainti"
// header@header.titlePositionX: "Title position" => "Otsikon sijainti"
// header@header.descriptionPositionX: "Description position" => "Kuvauksen sijainti"
// weight.400: "Regular" => "Säännöllinen"
// weight.600: "Heavy" => "Raskas"
// weight.700: "Semi-bold" => "Puoliksi lihavoitu"
// weight.800: "Bold" => "Rohkea"
// backgroundImageFit.auto: "Auto" => "Auto"
// backgroundImageFit.cover: "Cover" => "Kansi"
// backgroundImageFit.contain: "Contain" => "Sisältää"
// backgroundImageFit.fill: "Stretch" => "Venyä"
// backgroundImageFit.tile: "Tile" => "Laatta"
// backgroundImageAttachment.fixed: "Fixed" => "Kiinteä"
// backgroundImageAttachment.scroll: "Scroll" => "Vierittää"
// headerView.advanced: "Advanced" => "Edistynyt"
// inheritWidthFrom.survey: "Same as survey" => "Sama kuin kyselyssä"
// inheritWidthFrom.container: "Fit to container" => "Sovita konttiin"
// backgroundColorSwitch.none: "None" => "Ei lainkaan"
// backgroundColorSwitch.accentColor: "Accent color" => "Korostusväri"
// backgroundColorSwitch.custom: "Custom" => "Tapa"
// colorPalette.light: "Light" => "Valo"
// colorPalette.dark: "Dark" => "Tumma"
// isPanelless.true: "Without Panels" => "Ilman paneeleja"
// theme.cornerRadius: "Corner radius" => "Kulman säde"
// theme.fontFamily: "Font family" => "Fonttiperhe"
// theme.fontWeightRegular: "Regular" => "Säännöllinen"
// theme.fontWeightHeavy: "Heavy" => "Raskas"
// theme.fontWeightSemiBold: "Semi-bold" => "Puoliksi lihavoitu"
// theme.fontWeightBold: "Bold" => "Rohkea"
// theme.color: "Color" => "Väri"
// theme.placeholderColor: "Placeholder color" => "Paikkamerkin väri"
// theme.size: "Size" => "Koko"
// theme.opacity: "Opacity" => "Läpikuultamattomuus"
// ed.toolboxFilteredTextPlaceholder: "Type to search..." => "Kirjoita etsiäksesi..."
// ed.toolboxNoResultsFound: "No results found" => "Tuloksia ei löytynyt"
// paneldynamic.tabTitlePlaceholder: "Tab title placeholder" => "Välilehden otsikon paikkamerkki"
// theme.--sjs-special-red: "Error messages" => "Virhesanomista"
// paneldynamic.tabTitlePlaceholder: "A fallback text for tab titles that applies when the tab title pattern doesn't produce a meaningful value." => "Välilehtien otsikoiden varateksti, jota käytetään, kun välilehden otsikkomalli ei tuota merkityksellistä arvoa."
// theme.fontColor: "Font color" => "Fontin väri"
// theme.backgroundColor: "Background color" => "Taustaväri"
// pe.questionTitleWidth: "Question title width" => "Kysymyksen otsikon leveys"
// pe.fileInputPlaceholder: "Select a file or paste a file link..." => "Valitse tiedosto tai liitä tiedostolinkki..."
// panelbase.questionTitleWidth: "Ex.: 200px" => "Esimerkki: 200px"
// panel.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Määrittää kysymysten otsikoiden tasaisen leveyden, kun ne tasataan kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// page.questionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Määrittää kysymysten otsikoiden tasaisen leveyden, kun ne tasataan kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// pe.commentAreaRows: "Comment area height (in lines)" => "Kommenttialueen korkeus (riveinä)"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. In the input takes up more lines, the scroll bar appears." => "Määrittää tekstialueilla näytettävien rivien määrän kysymyskommentteja varten. Tulossa vie enemmän rivejä, vierityspalkki tulee näkyviin."
// pe.enabled: "Enabled" => "Käytössä"
// pe.inherit: "Inherit" => "Periä"
// pe.validateVisitedEmptyFields: "Validate empty fields on lost focus" => "Vahvista tyhjät kentät, kun kohdistus on kadonnut"
// panellayoutcolumn.effectiveWidth: "Ex.: 30%" => "Esimerkki: 30 %"
// panellayoutcolumn.questionTitleWidth: "Ex.: 200px" => "Esimerkki: 200px"
// pehelp.validateVisitedEmptyFields: "Enable this option to trigger validation when a user focuses on an empty input field and then leaves it without making any changes." => "Ota tämä asetus käyttöön, jos haluat käynnistää vahvistuksen, kun käyttäjä keskittyy tyhjään syöttökenttään ja poistuu siitä tekemättä muutoksia."
// pehelp.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line." => "Järjestää valintavaihtoehdot monisarakkeiseen asetteluun. Kun asetuksena on 0, asetukset näytetään yhdellä rivillä."
// theme.isPanelless: "This setting applies only to questions outside of a panel." => "Tämä asetus koskee vain paneelin ulkopuolisia kysymyksiä."
// theme.primaryColor: "Sets a supplementary color that highlights key survey elements." => "Määrittää lisävärin, joka korostaa kyselyn tärkeimmät elementit."
// theme.panelBackgroundTransparency: "Adjusts the transparency of panels and question boxes relative to the survey background." => "Säätää paneelien ja kysymysruutujen läpinäkyvyyttä suhteessa kyselyn taustaan."
// theme.questionBackgroundTransparency: "Adjusts the transparency of input elements relative to the survey background." => "Säätää syöttöelementtien läpinäkyvyyttä suhteessa kyselyn taustaan."
// theme.cornerRadius: "Sets the corner radius for all rectangular elements. Enable the Advanced Mode if you want to set individual corner radius values for input elements or panels and question boxes." => "Asettaa kulmasäteen kaikille suorakaiteen muotoisille elementeille. Ota edistynyt tila käyttöön, jos haluat määrittää syöttöelementtien tai paneelien ja kysymysruutujen yksittäiset kulmasäteen arvot."
// theme.--sjs-general-backcolor-dim: "Sets the main background color of the survey." => "Määrittää kyselyn päätaustavärin."
// header.inheritWidthFrom: "The \"Same as container\" option auto-adjusts the header content area width to fit into the HTML element the survey is placed in." => "Sama kuin säilö -vaihtoehto säätää automaattisesti otsikon sisältöalueen leveyttä sopimaan HTML-elementtiin, johon kysely sijoitetaan."
// header.textAreaWidth: "The width of the header area that contains the survey title and description, measured in pixels." => "Kyselyn otsikon ja kuvauksen sisältävän otsikkoalueen leveys pikseleinä mitattuna."
// panellayoutcolumn.effectiveWidth: "Accepts values %." => "Hyväksyy arvot %."
// panellayoutcolumn.questionTitleWidth: "Accepts values px." => "Hyväksyy arvot px."
// p.effectiveColSpan: "Column span" => "Sarakkeen jänneväli"
// progressBarInheritWidthFrom.survey: "Same as survey" => "Sama kuin kyselyssä"
// progressBarInheritWidthFrom.container: "Same as container" => "Sama kuin kontti"
// file.allowImagesPreview: "Displays thumbnail previews for uploaded files when possible. Unselect if you want to show file icons instead." => "Näyttää ladattujen tiedostojen pikkukuvien esikatselut, kun mahdollista. Poista valinta, jos haluat näyttää tiedostokuvakkeet sen sijaan."
// pehelp.progressBarInheritWidthFrom: "The \"Same as container\" option auto-adjusts the progress bar area width to fit into the HTML element the survey is placed in." => "Sama kuin säilö -vaihtoehto säätää edistymispalkin alueen leveyttä automaattisesti sopimaan HTML-elementtiin, johon kysely sijoitetaan."
// p.progressBarInheritWidthFrom: "Progress bar area width" => "Edistymispalkin alueen leveys"
// maskType.none: "None" => "Ei lainkaan"
// maskType.pattern: "Pattern" => "Kuvio"
// maskType.numeric: "Numeric" => "Numeerinen"
// maskType.datetime: "Date and Time" => "Päivämäärä ja kellonaika"
// maskType.currency: "Currency" => "Valuutta"

// inputTextAlignment.auto: "Auto" => "Auto"
// inputTextAlignment.left: "Left" => "Vasen"
// inputTextAlignment.right: "Right" => "Oikea"
// pehelp.inputTextAlignment: "Select how to align input value within the field. The default setting \"Auto\" aligns the input value to the right if currency or numeric masking is applied and to the left if not." => "Valitse, miten syötteen arvo tasataan kenttään. Oletusasetus \"Auto\" kohdistaa syöttöarvon oikealle, jos valuuttaa tai numeerista peittoa käytetään, ja vasemmalle, jos ei."
// p.inputTextAlignment: "Input value alignment" => "Syöttöarvon tasaus"
// paneldynamic.showRangeInProgress: "Show the progress bar" => "Edistymispalkin näyttäminen"
// paneldynamic.showProgressBar: "Show the progress bar" => "Edistymispalkin näyttäminen"
// paneldynamic.progressBarLocation: "Progress bar alignment" => "Edistymispalkin tasaus"
// pv.carousel: "Carousel" => "Karuselli"
// progressBarLocation.top: "Top" => "Huippu"
// progressBarLocation.bottom: "Bottom" => "Pohja"
// progressBarLocation.topBottom: "Top and bottom" => "Ylhäällä ja alhaalla"
// matrixdropdowncolumn.colCount: "Arranges choice options in a multi-column layout. When set to 0, the options are displayed in a single line. When set to -1, the actual value is inherited from the \"Nested column count\" property of the parent matrix." => "Järjestää valintavaihtoehdot monisarakkeiseen asetteluun. Kun asetuksena on 0, asetukset näytetään yhdellä rivillä. Kun arvoksi on määritetty -1, todellinen arvo periytyy päämatriisin sisäkkäisten sarakkeiden määrä -ominaisuudesta."
// ed.translationYouTubeNotSupported: "YouTube links are not supported." => "YouTube-linkkejä ei tueta."
// ed.propertyGridPlaceholderTitle: "Start configuring your form" => "Aloita lomakkeen määrittäminen"
// ed.propertyGridPlaceholderDescription: "Click any category icon to explore survey settings. Additional settings will become available once you add a survey element to the design surface." => "Napsauta mitä tahansa luokkakuvaketta tutustuaksesi kyselyn asetuksiin. Lisäasetukset ovat käytettävissä, kun lisäät mittauselementin suunnittelupintaan."
// pe.caseInsensitive: "Case insensitive" => "Isot ja pienet kirjaimet eivät ole merkitseviä"
// pehelp.caseInsensitive: "Select if uppercase and lowercase letters in the regular expression must be treated as equivalent." => "Valitse, onko säännöllisen lausekkeen isoja ja pieniä kirjaimia käsiteltävä vastaavina."

// ed.surveyPlaceholderTitle: "Your form is empty" => "Lomake on tyhjä"
// ed.surveyPlaceholderTitleMobile: "Your form is empty" => "Lomake on tyhjä"
// ed.surveyPlaceholderDescription: "Drag an element from the toolbox or click the button below." => "Vedä elementti työkalupakista tai napsauta alla olevaa painiketta."
// ed.surveyPlaceholderDescriptionMobile: "Drag an element from the toolbox or click the button below." => "Vedä elementti työkalupakista tai napsauta alla olevaa painiketta."
// ed.previewPlaceholderTitle: "No preview" => "Ei esikatselua"
// ed.previewPlaceholderTitleMobile: "No preview" => "Ei esikatselua"
// ed.previewPlaceholderDescription: "The survey doesn't contain any visible elements." => "Kysely ei sisällä näkyviä elementtejä."
// ed.previewPlaceholderDescriptionMobile: "The survey doesn't contain any visible elements." => "Kysely ei sisällä näkyviä elementtejä."
// ed.translationsPlaceholderTitle: "No strings to translate" => "Ei käännettäviä merkkijonoja"
// ed.translationsPlaceholderTitleMobile: "No strings to translate" => "Ei käännettäviä merkkijonoja"
// ed.translationsPlaceholderDescription: "Add elements to your form or change the strings filter in the toolbar." => "Lisää elementtejä lomakkeeseen tai muuta työkalurivin merkkijonosuodatinta."
// ed.translationsPlaceholderDescriptionMobile: "Add elements to your form or change the strings filter in the toolbar." => "Lisää elementtejä lomakkeeseen tai muuta työkalurivin merkkijonosuodatinta."
// lg.logicPlaceholderTitle: "No logical rules" => "Ei loogisia sääntöjä"
// lg.logicPlaceholderTitleMobile: "No logical rules" => "Ei loogisia sääntöjä"
// lg.logicPlaceholderDescription: "Create a rule to customize the flow of the survey." => "Luo sääntö kyselyn kulun mukauttamista varten."
// lg.logicPlaceholderDescriptionMobile: "Create a rule to customize the flow of the survey." => "Luo sääntö kyselyn kulun mukauttamista varten."
// pe.showTimer: "Use a timer" => "Käytä ajastinta"
// theme.advancedMode: "Advanced mode" => "Edistynyt tila"
// pehelp.timerLocation: "Sets the location of a timer on a page." => "Määrittää ajastimen sijainnin sivulla."
// header.mobileHeight: "When set to 0, the height is calculated automatically to accommodate the header's content." => "Kun arvoksi on määritetty 0, korkeus lasketaan automaattisesti otsikon sisällön mukaan."
// p.mobileHeight: "Height on smartphones" => "Korkeus älypuhelimissa"
// header.overlapEnabled: "When enabled, the top of the survey overlays the bottom of the header." => "Kun tämä asetus on käytössä, kyselyn yläosa peittää otsikon alaosan."

// ed.creatorSettingTitle: "Creator Settings" => "Sisällöntuottajan asetukset"
// tabs.accentColors: "Accent colors" => "Korostusvärit"
// tabs.scaling: "Scaling" => "Skaalaus"
// panel.showQuestionNumbers: "Assigns numbers to questions nested within this panel." => "Määrittää numerot tässä paneelissa sisäkkäisille kysymyksille."
// creatortheme.--sjs-special-background: "Surface background" => "Pinnan tausta"
// creatortheme.--sjs-primary-background-500: "Primary" => "Ensisijainen"
// creatortheme.--sjs-secondary-background-500: "Secondary" => "Toissijainen"
// creatortheme.surfaceScale: "Surface" => "Pinta"
// creatortheme.userInterfaceBaseUnit: "User interface" => "Käyttöliittymä"
// creatortheme.fontScale: "Font" => "Fontti"
// names.sc2020: "Survey Creator 2020" => "Kyselyn laatija 2020"
// names.default-light: "Light" => "Valo"
// names.default-dark: "Dark" => "Tumma"
// names.default-contrast: "Contrast" => "Kontrasti"
// panel.showNumber: "Number this panel" => "Numeroi tämä paneeli"
// pehelp.autoAdvanceEnabled: "Select if you want the survey to auto-advance to the next page once a respondent has answered all questions on the current page. This feature won't apply if the last question on the page is open-ended or allows multiple answers." => "Valitse tämä, jos haluat, että kysely siirtyy automaattisesti seuraavalle sivulle, kun vastaaja on vastannut kaikkiin nykyisen sivun kysymyksiin. Tätä ominaisuutta ei käytetä, jos sivun viimeinen kysymys on avoin tai sallii useita vastauksia."
// autocomplete.name: "Full Name" => "Koko nimi"
// autocomplete.honorific-prefix: "Prefix" => "Etuliite"
// autocomplete.given-name: "First Name" => "Etunimi"
// autocomplete.additional-name: "Middle Name" => "Toinen nimi"
// autocomplete.family-name: "Last Name" => "Sukunimi"
// autocomplete.honorific-suffix: "Suffix" => "Suffiksi"
// autocomplete.nickname: "Nickname" => "Lempinimi"
// autocomplete.organization-title: "Job Title" => "Tehtävänimike"
// autocomplete.username: "User Name" => "Käyttäjänimi"
// autocomplete.new-password: "New Password" => "Uusi salasana"
// autocomplete.current-password: "Current Password" => "Nykyinen salasana"
// autocomplete.organization: "Organization Name" => "Organisaation nimi"
// autocomplete.street-address: "Full Street Address" => "Koko kadun osoite"
// autocomplete.address-line1: "Address Line 1" => "Osoite, rivi 1"
// autocomplete.address-line2: "Address Line 2" => "Osoite, rivi 2"
// autocomplete.address-line3: "Address Line 3" => "Osoite, rivi 3"
// autocomplete.address-level4: "Level 4 Address" => "Tason 4 osoite"
// autocomplete.address-level3: "Level 3 Address" => "Tason 3 osoite"
// autocomplete.address-level2: "Level 2 Address" => "Tason 2 osoite"
// autocomplete.address-level1: "Level 1 Address" => "Tason 1 osoite"
// autocomplete.country: "Country Code" => "Maakoodi"
// autocomplete.country-name: "Country Name" => "Maan nimi"
// autocomplete.postal-code: "Postal Code" => "Postinumero"
// autocomplete.cc-name: "Cardholder Name" => "Kortinhaltijan nimi"
// autocomplete.cc-given-name: "Cardholder First Name" => "Kortinhaltijan etunimi"
// autocomplete.cc-additional-name: "Cardholder Middle Name" => "Kortinhaltijan toinen nimi"
// autocomplete.cc-family-name: "Cardholder Last Name" => "Kortinhaltijan sukunimi"
// autocomplete.cc-number: "Credit Card Number" => "Luottokortin numero"
// autocomplete.cc-exp: "Expiration Date" => "Vanhentumispäivä"
// autocomplete.cc-exp-month: "Expiration Month" => "Viimeinen voimassaolokuukausi"
// autocomplete.cc-exp-year: "Expiration Year" => "Vanhentumisvuosi"
// autocomplete.cc-csc: "Card Security Code" => "Kortin turvakoodi"
// autocomplete.cc-type: "Credit Card Type" => "Luottokortin tyyppi"
// autocomplete.transaction-currency: "Transaction Currency" => "Tapahtuman valuutta"
// autocomplete.transaction-amount: "Transaction Amount" => "Tapahtuman summa"
// autocomplete.language: "Preferred Language" => "Ensisijainen kieli"
// autocomplete.bday: "Birthday" => "Syntymäpäivä"
// autocomplete.bday-day: "Birthday Day" => "Syntymäpäivä"
// autocomplete.bday-month: "Birthday Month" => "Syntymäpäivä kuukausi"
// autocomplete.bday-year: "Birthday Year" => "Syntymäpäivä vuosi"
// autocomplete.sex: "Gender" => "Sukupuoli"
// autocomplete.url: "Website URL" => "Verkkosivuston URL-osoite"
// autocomplete.photo: "Profile Photo" => "Profiilikuva"
// autocomplete.tel: "Telephone Number" => "Puhelinnumero"
// autocomplete.tel-country-code: "Country Code for Phone" => "Puhelimen maakoodi"
// autocomplete.tel-national: "National Telephone Number" => "Kansallinen puhelinnumero"
// autocomplete.tel-area-code: "Area Code" => "Suuntanumero"
// autocomplete.tel-local: "Local Phone Number" => "Paikallinen puhelinnumero"
// autocomplete.tel-local-prefix: "Local Phone Prefix" => "Paikallisen puhelimen etuliite"
// autocomplete.tel-local-suffix: "Local Phone Suffix" => "Paikallisen puhelimen pääte"
// autocomplete.tel-extension: "Phone Extension" => "Puhelimen laajennus"
// autocomplete.email: "Email Address" => "Sähköpostiosoite"
// autocomplete.impp: "Instant Messaging Protocol" => "Pikaviestiprotokolla"
// ed.lockQuestionsTooltip: "Lock expand/collapse state for questions" => "Lukitse laajenna/kutista tila kysymyksiä varten"
// pe.listIsEmpty@pages: "You don't have any pages yet" => "Sinulla ei ole vielä sivuja"
// pe.addNew@pages: "Add new page" => "Lisää uusi sivu"
// ed.zoomInTooltip: "Zoom In" => "Lähennä"
// ed.zoomOutTooltip: "Zoom Out" => "Loitonna"
// tabs.surfaceBackground: "Surface Background" => "Surfacen tausta"
// pe.copyDefaultValueFromLastEntry: "Use answers from the last entry as default" => "Käytä viimeisen merkinnän vastauksia oletuksena"
// colors.gray: "Gray" => "Harmaa"
// pe.navigationButtonsLocation: "Navigation buttons alignment" => "Siirtymispainikkeiden tasaus"
// pv.allQuestions: "Show all questions" => "Näytä kaikki kysymykset"
// pv.answeredQuestions: "Show answered questions only" => "Näytä vain vastatut kysymykset"
// pehelp.navigationButtonsLocation: "Sets the location of navigation buttons on a page." => "Määrittää navigointipainikkeiden sijainnin sivulla."
// pe.size: "Input field width (in characters)" => "Syöttökentän leveys (merkkeinä)"
// pe.choiceValuesFromQuestion: "Use values from the following matrix column or panel question as choice IDs" => "Käytä seuraavan matriisin sarakkeen tai paneelikysymyksen arvoja valintatunnuksina"
// pe.choiceTextsFromQuestion: "Use values from the following matrix column or panel question as choice texts" => "Käytä seuraavan matriisin sarakkeen tai paneelikysymyksen arvoja valintateksteinä"
// pehelp.choiceValuesFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the IDs." => "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Tämä asetus määrittää, mikä matriisisarake tai paneelikysymys antaa tunnukset."
// pehelp.choiceTextsFromQuestion: "In single- and multiple-selection question types, each choice option has an ID and display value. This setting specifies which matrix column or panel question should provide the display texts." => "Yksi- ja monivalintakysymystyypeissä kullakin valintavaihtoehdolla on tunnus ja näyttöarvo. Tämä asetus määrittää, mikä matriisisarake tai paneelikysymys sisältää näyttötekstit."
// pe.progressBarLocation: "Progress bar alignment" => "Edistymispalkin tasaus"
// progressBarLocation.topbottom: "Top and bottom" => "Ylhäällä ja alhaalla"
// progressBarLocation.aboveheader: "Above the header" => "Otsikon yläpuolella"
// progressBarLocation.belowheader: "Below the header" => "Otsikon alapuolella"
// progressBarLocation.off: "Hidden" => "Piilevä"
// survey.progressBarLocation: "Sets the location of the progress bar. The \"Auto\" value displays the progress bar above or below the survey header." => "Määrittää edistymispalkin sijainnin. \"Auto\"-arvo näyttää edistymispalkin kyselyn otsikon ylä- tai alapuolella."
// survey.readOnly: "Make the survey read-only" => "Tee kyselystä vain luku -muotoinen"
// survey.readOnly: "Select if you want to prevent respondents from filling out your survey." => "Valitse tämä, jos haluat estää vastaajia vastaamasta kyselyyn."
// paneldynamic.showNumber: "Number the panel" => "Paneelin numerointi"
// question.showNumber: "Number this question" => "Numeroi tämä kysymys"
// pe.previewMode: "Preview mode" => "Esikatselu-tila"
// pe.gridLayoutEnabled: "Enable the grid layout" => "Ota ruudukkoasettelu käyttöön"
// pe.maskSettings: "Mask settings" => "Maskin asetukset"
// pe.detailErrorLocation: "Row expansion error message alignment" => "Rivin laajennuksen virhesanoman tasaus"
// pehelp.detailErrorLocation: "Sets the location of error messages for questions nested in detail sections. The \"Inherit\" option applies the setting from the \"Error message alignment\" property." => "Määrittää tieto-osiin sisältyvien kysymysten virhesanomien sijainnin. \"Peri\" -vaihtoehto käyttää asetusta \"Virheilmoituksen kohdistus\" -ominaisuudesta."
// pe.gridLayoutColumns: "Grid layout columns" => "Ruudukkoasettelun sarakkeet"
// pe.startPageTitlePlaceholder: "Start Page" => "Aloitussivu"
// panellayoutcolumn.effectiveWidth: "Effective width, %" => "Tehollinen leveys, %"
// panellayoutcolumn.questionTitleWidth: "Question title width, px" => "Kysymyksen otsikon leveys, px"
// pe.listIsEmpty@gridLayoutColumns: "You don't have layout columns yet" => "Sinulla ei vielä ole asettelusarakkeita"
// panel.effectiveColSpan: "Specifies how many columns this panel spans within the grid layout." => "Määrittää, kuinka monta saraketta tämä paneeli kattaa ruudukkoasettelussa."
// panel.gridLayoutColumns: "This table lets you configure each grid column within the panel. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Tämän taulukon avulla voit määrittää paneelin jokaisen ruudukkosarakkeen. Se määrittää automaattisesti kunkin sarakkeen leveysprosentin rivin elementtien enimmäismäärän perusteella. Jos haluat mukauttaa ruudukon asettelua, säädä näitä arvoja manuaalisesti ja määritä otsikon leveys kunkin sarakkeen kaikille kysymyksille."
// pehelp.gridLayoutEnabled: "Survey Creator allows you to manually adjust the inline widths of form elements to control the layout. If this doesn't produce the desired outcome, you can enable the grid layout, which structures form elements using a column-based system. To configure layout columns, select a page or panel and use the \"Question Settings\" → \"Grid columns\" table. To adjust how many columns a question spans, select it and set the desired value in the \"Layout\" → \"Column span\" field." => "Survey Creatorin avulla voit manuaalisesti säätää lomake-elementtien sisäisiä leveyksiä asettelun hallitsemiseksi. Jos tämä ei tuota toivottua tulosta, voit ottaa käyttöön ruudukkoasettelun, joka jäsentää elementtejä sarakepohjaisen järjestelmän avulla. Määritä asettelusarakkeet valitsemalla sivu tai paneeli ja käyttämällä \"Kysymysasetukset\" → \"Ruudukkosarakkeet\" -taulukkoa. Jos haluat säätää, kuinka monta saraketta kysymys kattaa, valitse se ja aseta haluamasi arvo \"Asettelu\" → \"Sarakeväli\" -kenttään."
// question.effectiveColSpan: "Specifies how many columns this question spans within the grid layout." => "Määrittää, kuinka monta saraketta tämä kysymys kattaa ruudukkoasettelussa."
// page.gridLayoutColumns: "This table lets you configure each grid column on the page. It automatically sets the width percentage for each column based on the maximum number of elements in a row. To customize the grid layout, manually adjust these values and define the title width for all questions in each column." => "Tämän taulukon avulla voit määrittää sivun jokaisen ruudukkosarakkeen. Se määrittää automaattisesti kunkin sarakkeen leveysprosentin rivin elementtien enimmäismäärän perusteella. Jos haluat mukauttaa ruudukon asettelua, säädä näitä arvoja manuaalisesti ja määritä otsikon leveys kunkin sarakkeen kaikille kysymyksille."

// ed.expandTooltip: "Expand" => "Laajentaa"
// ed.collapseTooltip: "Collapse" => "Romahdus"
// pe.itemTitleWidth_placeholder: "Ex.: 100px" => "Esimerkki: 100px"
// pehelp.itemTitleWidth: "Sets consistent width for all item labels. Accepts CSS values (px, %, in, pt, etc.)." => "Määrittää yhdenmukaisen leveyden kaikille nimikeotsikoille. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// ed.zoom100Tooltip: "Zoom to 100%" => "Zoomaa 100 %:iin"
// ed.addLanguageTooltip: "Add Language" => "Lisää kieli"
// pehelp.commentAreaRows: "Sets the number of displayed lines in text areas for question comments. If the input takes up more lines, the scroll bar appears." => "Määrittää kysymyskommenttien tekstialueilla näytettävien rivien määrän. Jos syöttö vie enemmän rivejä, vierityspalkki tulee näkyviin."
// pe.defaultDisplayValue: "Default display value for dynamic texts" => "Dynaamisten tekstien oletusnäyttöarvo"
// pehelp.defaultDisplayValue: "A value displayed in HTML questions and in the dynamic titles and descriptions of survey elements when the question value is empty." => "Arvo, joka näkyy HTML-kysymyksissä ja kyselyn elementtien dynaamisissa otsikoissa ja kuvauksissa, kun kysymyksen arvo on tyhjä."
// showQuestionNumbers.recursive: "Recursive numbering" => "Rekursiivinen numerointi"
// paneldynamic.templateQuestionTitleWidth: "Question title width" => "Kysymyksen otsikon leveys"
// pe.allowCustomChoices: "Allow custom choices" => "Salli mukautetut valinnat"
// paneldynamic.templateQuestionTitleWidth: "Sets consistent width for question titles when they are aligned to the left of their question boxes. Accepts CSS values (px, %, in, pt, etc.)." => "Määrittää kysymysotsikoille yhtenäisen leveyden, kun ne on tasattu kysymysruutujen vasemmalle puolelle. Hyväksyy CSS-arvot (px, %, in, pt jne.)."
// page.name: "A page ID that is not visible to respondents." => "Sivun tunnus, joka ei näy vastaajille."
// page.description: "Type a page subtitle." => "Kirjoita sivun alaotsikko."
// page.navigationTitle: "A caption displayed on a navigation button in the progress bar or table of contents (TOC). If you leave this field empty, the navigation button will use the page title or page name. To enable the progress bar or TOC, go to \"Survey\" → \"Navigation\"." => "Kuvateksti, joka näkyy edistymispalkin tai sisällysluettelon siirtymispainikkeessa. Jos jätät tämän kentän tyhjäksi, navigointipainike käyttää sivun otsikkoa tai nimeä. Ota edistymispalkki tai sisällysluettelo käyttöön siirtymällä kohtaan \"Kysely\" → \"Navigointi\"."
// pehelp.allowCustomChoices: "Select to let respondents add their own choices if the desired option isn't available in the dropdown. Custom choices will only be stored temporarily for the duration of the current browser session." => "Valitse tämä, jos haluat, että vastaajat voivat lisätä omia vaihtoehtojaan, jos haluttu vaihtoehto ei ole käytettävissä avattavassa valikossa. Mukautetut valinnat tallennetaan vain väliaikaisesti nykyisen selainistunnon ajaksi."