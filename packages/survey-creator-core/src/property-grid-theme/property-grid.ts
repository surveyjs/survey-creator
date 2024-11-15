export var propertyGridCss = {
  root: "spg-root-modern",
  container: "spg-container-modern",
  header: "spg-title spg-container-modern__title",
  body: "spg-body",
  bodyEmpty: "spg-body spg-body--empty",
  footer: "spg-footer spg-body__footer spg-clearfix",
  title: "",
  description: "",
  logo: "spg-logo",
  logoImage: "spg-logo__image",
  headerText: "spg-header__text",
  navigationButton: "",
  completedPage: "spg-completedpage",
  navigation: {
    complete: "spg-btn spg-footer__complete-btn",
    prev: "spg-btn spg-footer__prev-btn",
    next: "spg-btn spg-footer__next-btn",
    start: "spg-btn spg-footer__start-btn",
    preview: "spg-btn spg-footer__preview-btn",
    edit: "spg-btn spg-footer__edit-btn"
  },
  panel: {
    expandableAnimating: "",
    title: "spg-title spg-panel__title",
    titleBar: "sd-action-title-bar spg-action-title-bar",
    contentEnter: "spg-panel__content--enter",
    contentLeave: "spg-panel__content--leave",
    titleExpandable: "spg-panel__title--expandable",
    titleExpanded: "spg-panel__title--expanded",
    titleCollapsed: "spg-panel__title--collapsed",
    titleOnError: "spg-panel__title--error",
    description: "spg-description spg-panel__description",
    container: "spg-panel spg-row__panel",
    content: "spg-panel__content",
    icon: "spg-panel__icon",
    iconExpanded: "spg-panel__icon--expanded",
    footer: "spg-panel__footer",
    requiredText: "spg-panel__required-text"
  },
  paneldynamic: {
    mainRoot: "spg-question spg-row__question",
    root: "spg-paneldynamic",
    navigation: "spg-paneldynamic__navigation",
    title: "spg-title spg-question__title",
    button: "spg-action-button spg-action-button--text",
    buttonRemove: "spg-action-button--danger",
    buttonAdd: "spg-paneldynamic__add-btn",
    panelsContainer: "",
    panelWrapper: "spg-paneldynamic__panel-wrapper",
    panelWrapperList: "",
    progressTop: "spg-paneldynamic__progress spg-paneldynamic__progress--top",
    progressBottom:
      "spg-paneldynamic__progress spg-paneldynamic__progress--bottom",
    buttonPrev: "spg-paneldynamic__prev-btn",
    buttonNext: "spg-paneldynamic__next-btn",
    progressContainer: "spg-paneldynamic__progress-container",
    progress: "spg-progress",
    progressBar: "spg-progress__bar",
    progressText: "spg-paneldynamic__progress-text",
    panelFooter: "spg-panel__footer",
    separator: "spg-paneldynamic__separator"
  },
  progress: "spg-progress spg-body__progress",
  progressBar: "spg-progress__bar",
  progressText: "spg-progress__text",
  progressTextInBar: "spg-hidden",
  page: {
    root: "spg-page spg-body__page",
    title: "spg-title spg-page__title",
    description: "spg-description spg-page__description"
  },
  pageTitle: "spg-title spg-page__title",
  pageDescription: "spg-description spg-page__description",
  row: "spg-row spg-clearfix",
  rowEnter: "spg-row--enter",
  rowLeave: "spg-row--leave",
  rowDelayedEnter: "spg-row--delayed-fade-in",
  rowMultiple: "spg-row--multiple",
  question: {
    mainRoot: "spg-question spg-row__question",
    flowRoot: "spg-question spg-row__question spg-row__question--flow",
    asCell: "spg-table__cell",
    header: "spg-question__header",
    headerLeft: "spg-question__header--location--left",
    headerTop: "spg-question__header--location--top",
    headerBottom: "spg-question__header--location--bottom",
    content: "spg-question__content",
    contentLeft: "spg-question__content--left",
    titleLeftRoot: "spg-question--location--left",
    titleOnAnswer: "spg-question__title--answer",
    titleOnError: "spg-question__title--error",
    title: "spg-title spg-question__title",
    titleBar: "sd-action-title-bar spg-action-title-bar",
    requiredText: "spg-question__required-text",
    number: "spg-question__num",
    description: "spg-description spg-question__description",
    descriptionUnderInput: "spg-description spg-question__description",
    comment: "spg-comment",
    required: "spg-question--required",
    titleRequired: "spg-question__title--required",
    indent: 0,
    footer: "spg-question__footer",
    formGroup: "spg-question__form-group",
    hasError: "",
    disabled: "spg-question--disabled"
  },
  image: { root: "spg-image", image: "sv_image_image" },
  error: {
    root: "spg-question__erbox",
    icon: "spg-question__erbox-icon",
    item: "",
    locationTop: "spg-question__erbox--location--top",
    locationBottom: "spg-question__erbox--location--bottom"
  },
  checkbox: {
    root: "spg-selectbase",
    item: "spg-item spg-checkbox spg-selectbase__item",
    itemSelectAll: "spg-checkbox--selectall",
    itemNone: "spg-checkbox--none",
    itemDisabled: "spg-item--disabled spg-checkbox--disabled",
    itemChecked: "spg-checkbox--checked",
    itemHover: "spg-checkbox--allowhover",
    itemInline: "spg-selectbase__item--inline",
    label: "spg-selectbase__label",
    // label: "spg-checkbox",
    itemSvgIconId: "#icon-v2check",
    labelChecked: "",
    //itemControl: "spg-visuallyhidden spg-item__control",
    itemControl: "spg-checkbox__control",
    itemDecorator: "spg-checkbox__svg",
    //itemDecorator: "spg-checkbox__hidden",
    //controlLabel: "spg-item__control-label",
    controlLabel: "spg-checkbox__caption",
    materialDecorator: "spg-checkbox__rectangle",
    //materialDecorator: "spg-item__decorator spg-checkbox__decorator",
    other: "spg-comment spg-question__other",
    column: "spg-selectbase__column"
  },
  radiogroup: {
    root: "spg-selectbase",
    item: "spg-item spg-radio spg-selectbase__item",
    itemInline: "spg-selectbase__item--inline",
    label: "spg-selectbase__label",
    labelChecked: "",
    itemDisabled: "spg-item--disabled spg-radio--disabled",
    itemChecked: "spg-radio--checked",
    itemHover: "spg-radio--allowhover",
    itemControl: "spg-visuallyhidden spg-item__control",
    itemDecorator: "spg-item__svg spg-radio__svg",
    controlLabel: "spg-item__control-label",
    materialDecorator: "spg-item__decorator spg-radio__decorator",
    other: "spg-comment spg-question__other",
    clearButton: "spg-btn spg-selectbase__clear-btn",
    column: "spg-selectbase__column"
  },
  boolean: {
    mainRoot: "spg-question spg-row__question spg-question--boolean",
    rootCheckbox: "spg-selectbase",
    checkboxItem: "spg-checkbox",
    checkboxItemChecked: "spg-checkbox--checked",
    checkboxitemIndeterminate: "spg-checkbox--indeterminate",
    checkboxItemDisabled: "spg-checkbox--disabled",
    svgIconId: "#icon-v2check",
    checkboxLabel: "spg-selectbase__label",
    controlCheckbox: "spg-checkbox__control",
    checkboxControlLabel: "spg-checkbox__caption",
    checkboxItemDecorator: "spg-checkbox__svg",
    checkboxMaterialDecorator: "spg-checkbox__rectangle"
  },
  text: {
    root: "spg-input spg-text",
    small: "spg-row__question--small",
    content: "spg-question__content spg-text__content",
    remainingCharacterCounter: "spg-remaining-character-counter",
    onError: "spg-input--error"
  },
  multipletext: {
    root: "spg-multipletext",
    item: "spg-multipletext__item",
    itemTitle: "spg-multipletext__item-title",
    content: "spg-multipletext__content spg-text__content",
    row: "spg-multipletext__row",
    cell: "spg-multipletext__cell"
  },
  dropdown: {
    root: "",
    popup: "spg-dropdown-popup svc-creator-popup",
    small: "spg-row__question--small sd-row__question--small",
    control: "spg-input spg-dropdown sd-input sd-dropdown",
    controlValue: "sd-dropdown__value spg-dropdown__value",
    filterStringInput: "sd-dropdown__filter-string-input spg-dropdown__filter-string-input",
    other: "spg-comment spg-question__other",
    onError: "spg-input--error",
    selectWrapper: "sv-dropdown_select-wrapper spg-dropdown_select-wrapper",
    chevronButton: "sd-dropdown_chevron-button spg-dropdown_chevron-button",
    chevronButtonSvg: "sd-dropdown_chevron-button-svg spg-dropdown_chevron-button-svg",
    chevronButtonIconId: "icon-chevron",
  },
  buttongroup: {
    root: "spg-button-group",
    item: "spg-button-group__item",
    itemIcon: "spg-button-group__item-icon",
    itemDecorator: "spg-button-group__item-decorator",
    itemCaption: "spg-button-group__item-caption",
    itemHover: "spg-button-group__item--hover",
    itemSelected: "spg-button-group__item--selected",
    itemDisabled: "spg-button-group__item--disabled",
    itemControl: "sv-visuallyhidden",
    disabled: "spg-question--disabled"
  },
  imagepicker: {
    root: "spg-imagepicker",
    item: "spg-imagepicker__item",
    itemInline: "spg-imagepicker__item--inline",
    itemChecked: "spg-imagepicker__item--checked",
    itemDisabled: "spg-imagepicker__item--disabled",
    itemHover: "spg-imagepicker__item--allowhover",
    label: "spg-imagepicker__label",
    itemControl: "spg-imagepicker__control",
    image: "spg-imagepicker__image",
    itemText: "spg-imagepicker__text",
    clearButton: "spg-btn",
    other: "spg-comment spg-question__other"
  },
  matrix: {
    tableWrapper: "spg-matrix spg-table-wrapper",
    root: "spg-table",
    rowError: "spg-matrix__row--error",
    cell: "spg-table__cell spg-matrix__cell",
    headerCell: "spg-table__cell spg-table__cell--header",
    label: "spg-item spg-radio spg-matrix__label",
    itemValue: "spg-visuallyhidden spg-item__control spg-radio__control",
    itemChecked: "spg-radio--checked",
    itemDisabled: "spg-item--disabled spg-radio--disabled",
    itemHover: "spg-radio--allowhover",
    materialDecorator: "spg-item__decorator spg-radio__decorator",
    itemDecorator: "spg-item__svg spg-radio__svg",
    cellText: "spg-matrix__text",
    cellTextSelected: "spg-matrix__text--checked",
    cellTextDisabled: "spg-matrix__text--disabled",
  },
  matrixdropdown: {
    tableWrapper: "spg-table-wrapper",
    root: "spg-table",
    cell: "spg-table__cell",
    headerCell: "spg-table__cell spg-table__cell--header",
    emptyCell: "spg-table__cell--empty",
    rowEnter: "spg-table__row--enter",
    rowLeave: "spg-table__row--leave",
  },
  matrixdynamic: {
    tableWrapper: "spg-table-wrapper",
    root: "spg-table spg-matrixdynamic",
    content: "spg-matrixdynamic__content spg-text__content",
    cell: "spg-table__cell",
    row: "spg-table__row",
    rowDisabled: "spg-table__row-disabled",
    rowReadOnly: "spg-table__row-readonly",
    headerCell: "spg-table__cell spg-table__cell--header",
    button: "spg-btn",
    detailRow: "spg-table__row spg-table__row--detail",
    detailButton: "spg-table__cell--detail-button",
    detailButtonExpanded: "spg-table__cell--detail-button--expanded",
    detailIcon: "spg-detail-panel__icon",
    detailIconExpanded: "spg-detail-panel__icon--expanded",
    detailPanelCell: "spg-table__cell--detail-panel",
    actionsCell: "spg-table__cell spg-table__cell--actions",
    buttonAdd: "spg-matrixdynamic__add-btn spg-action-button spg-action-button--large",
    buttonRemove: "spg-matrixdynamic__remove-btn",
    iconAdd: "",
    iconRemove: "",
    dragElementDecorator: "spg-drag-element__svg",
    iconDragElement: "#icon-drag-24x24",
    iconDrag: "spg-matrixdynamic__drag-element",
    footer: "",
    dragDropGhostPositionTop: "spg-matrixdynamic__drag-drop-ghost-position-top",
    dragDropGhostPositionBottom: "spg-matrixdynamic__drag-drop-ghost-position-bottom",
    emptyRowsSection: "spg-matrixdynamic__placeholder",
    emptyRowsText: "spg-matrixdynamic__placeholder-text",
    cellQuestionWrapper: "spg-table__question-wrapper",
    draggedRow: "spg-matrixdynamic__dragged-row",
    emptyCell: "spg-table__cell--empty",
    rowEnter: "spg-table__row--enter",
    rowLeave: "spg-table__row--leave",
  },
  rating: {
    root: "spg-rating",
    item: "spg-rating__item",
    selected: "spg-rating__item--selected",
    minText: "spg-rating__min-text",
    itemText: "spg-rating__item-text",
    maxText: "spg-rating__max-text",
    disabled: "spg-rating--disabled"
  },
  comment: {
    root: "spg-input spg-comment",
    content: "spg-question__content spg-comment__content",
    remainingCharacterCounter: "spg-remaining-character-counter",
    small: "spg-row__question--small",
    onError: "spg-input--error"
  },
  expression: "",
  file: {
    root: "spg-file",
    other: "spg-comment spg-question__other",
    placeholderInput: "spg-visuallyhidden",
    preview: "spg-file__preview",
    fileSign: "spg-hidden",
    fileSignBottom: "spg-file__sign",
    fileDecorator: "spg-file__decorator",
    fileInput: "spg-visuallyhidden",
    noFileChosen: "spg-description spg-file__no-file-chosen",
    chooseFile: "spg-btn spg-file__choose-btn",
    disabled: "spg-file__choose-btn--disabled",
    removeButton: "spg-hidden",
    removeButtonBottom: "spg-btn spg-file__clean-btn",
    removeFile: "spg-hidden",
    removeFileSvg: "spg-file__remove-svg",
    wrapper: "spg-file__wrapper"
  },
  signaturepad: {
    root: "spg-signaturepad sjs_sp_container",
    small: "spg-row__question--small",
    controls: "sjs_sp_controls",
    clearButton: "sjs_sp_clear"
  },
  propertygrid_bindings: {
    content: "spg-question__content spg-question__nopadding spg-question-group"
  },
  propertygrid_restfull: {
    content: "spg-question__content spg-question__nopadding spg-restfull"
  },
  propertygrid_masksettings: {
    content: "spg-question__content spg-question__nopadding spg-masksettings"
  },
  propertygrid_header: {
    mainRoot: "spg-header",
    content: "spg-question__content spg-question__nopadding"
  },
  coloralpha: {
    content: "spg-question__content spg-question__nopadding spg-question__content-coloralpha"
  },
  font: {
    content: "spg-question__content spg-question__nopadding spg-question-composite__content"
  },
  backgroundcornerradius: {
    content: "spg-question__content spg-question__nopadding spg-question-composite__content"
  },
  saveData: {
    root: "",
    saving: "",
    error: "",
    success: "",
    saveAgainButton: ""
  },
  window: {
    root: "sv_window",
    body: "sv_window_content",
    header: {
      root: "sv_window_title",
      title: "",
      button: "",
      buttonExpanded: "",
      buttonCollapsed: ""
    }
  },
  actionBar: {
    root: "spg-action-bar",
    item: "spg-action-button",
    itemPressed: "spg-action-button--pressed",
    itemAsIcon: "spg-action-button--icon",
    itemIcon: "spg-action-button__icon",
    itemTitle: "spg-action-button__title",
  },
  spinedit: {
    root: "spg-input spg-spin-editor spg-input-container",
    control: "spg-spin-editor__input spg-input-container__input",
    buttonsContainer: "spg-input-container__buttons-container",
    arrowButton: "spg-input__edit-button",
    increaseButtonIcon: "icon-arrow-up",
    decreaseButtonIcon: "icon-arrow-down"
  },
  color: {
    root: "spg-input spg-color-editor spg-input-container",
    swatch: "spg-color-editor__color-swatch",
    swatchDefault: "spg-color-editor__color-swatch--default",
    swatchDisabled: "spg-color-editor__color-swatch--disabled",
    colorInput: "spg-color-editor__color-input",
    control: "spg-color-editor__input spg-input-container__input",
    colorDropdown: "spg-input__edit-button",
    colorDropdownIcon: "icon-drop-down-arrow",
    colorItem: "spg-color-editor__color-item",
    swatchIcon: "icon-color-picker"
  },
  textwithreset: {
    root: "spg-input spg-input-container",
    rootMultiline: "spg-input-container--multiline",
    control: "spg-input-container__input",
    controlMultiline: "spg-input-container__input spg-comment",
    resetButton: "spg-input__edit-button",
    resetButtonIcon: "icon-reset",
    content: "spg-question__content spg-text__content",
    remainingCharacterCounter: "spg-remaining-character-counter",
    onError: "spg-input--error"
  },
  fileedit: {
    root: "spg-input spg-input-container spg-file-edit",
    control: "spg-input-container__input",
    buttonsContainer: "spg-input-container__buttons-container",
    chooseButtonIcon: "icon-choosefile",
    clearButtonIcon: "icon-cancel-24x24",
    fileInput: "sd-visuallyhidden",
    clearButton: "spg-input__edit-button",
    chooseButton: "spg-input__edit-button spg-file-edit__choose-button",
    chooseButtonDisabled: "spg-input__edit-button--disabled"
  },
  linkvalue: {
    content: "spg-link"
  }
};
