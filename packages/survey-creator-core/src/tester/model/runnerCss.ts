// The class names the reused models render under in this application.
//
// A ListModel and an ActionContainer each carry a map of class names, and it is settable - that is what
// it is for. Setting it is how a reused component is made to look like it belongs here, and it is the
// alternative to the thing this application does not do: overriding "sv-list__item" and "sd-action" in
// a stylesheet to beat the library's own theme. Two reasons that matters more than tidiness:
//
//   * One answer, in the layer that decides everything else. The class on a row is a statement about
//     the row, so it belongs beside the rest of what the row says about itself rather than in a
//     stylesheet that has to guess. And a *reset* of a library rule is only ever as good as the
//     library's next release.
//   * Nothing to reset. The runner's chrome is drawn outside a survey root, where the library's theme
//     custom properties are not all defined, so its default classes were half-painted anyway. Under
//     names of our own there is nothing to undo.
//
// Every key the library reads is given a value here, because these maps replace the defaults rather
// than merging with them - see setCssClasses(map, false) at the call sites.

// The three toolbars: the run bar, the list header, and a row's verbs.
export const runnerActionBarCss = {
  root: "svt-bar",
  // The library's two size modifiers are how it picks a spacing scale. This bar has one size.
  defaultSizeMode: "",
  smallSizeMode: "",
  containerItem: "svt-bar__item",
  containerItemSpace: "svt-bar__item--space",
  containerItemHidden: "svt-bar__item--hidden",
  containerItemContent: "svt-bar__item-content",
  item: "svt-bar__button",
  itemAppearancePrefix: "svt-bar__button",
  itemWithTitle: "",
  itemAsIcon: "svt-bar__button--icon",
  itemActive: "svt-bar__button--active",
  itemPopupActive: "svt-bar__button--open",
  itemIcon: "svt-bar__icon",
  itemTitle: "svt-bar__title",
  itemTitleWithIcon: "",
};

// The test list and the step list of every row. Neither is a dropdown of options: a row is a checkbox,
// a run button, an expander and a whole expansion, so nothing here paints a selection or a hover - the
// row says all of that in its own markup, off its own model.
export const runnerListCss = {
  root: "svt-list",
  itemsContainer: "svt-list__items",
  itemsContainerFiltering: "svt-list__items--filtering",
  item: "svt-list__item",
  itemBody: "svt-list__body",
  itemSelected: "svt-list__item--selected",
  itemGroup: "svt-list__item--group",
  itemGroupSelected: "svt-list__item--group-selected",
  itemWithIcon: "svt-list__item--with-icon",
  itemDisabled: "svt-list__item--disabled",
  itemFocused: "svt-list__item--focused",
  itemHovered: "svt-list__item--hovered",
  itemLabel: "svt-list__item--label",
  itemTextWrap: "svt-list__item--wrap",
  itemCustomValue: "svt-list__item--custom",
  itemIcon: "svt-list__item-icon",
  itemMarkerIcon: "svt-list__item-marker",
  itemSeparator: "svt-list__separator",
  loadingIndicator: "svt-list__loading",
  filter: "svt-list__filter",
  filterBox: "svt-list__filter-box",
  filterIcon: "svt-list__filter-icon",
  filterInput: "svt-list__filter-input",
  searchClearButtonIcon: "svt-list__filter-clear",
  emptyContainer: "svt-list__empty",
  emptyText: "svt-list__empty-text",
};

// The Recorder's check menu: the searchable list an adorner opens. It is a list of properties to
// assert, so it paints a hover and a keyboard focus like a menu does - but never a selection, because
// what is ticked is written in the case and read back off the document, not held in the list. The names
// carry the svt- namespace like every other class this layer hands out; the check menu itself arrives
// in prompt 05 and finds them already written.
export const checkListCss = {
  root: "svt-checks__box",
  itemsContainer: "svt-checks__list",
  itemsContainerFiltering: "svt-checks__list--filtering",
  item: "svt-check-row",
  itemBody: "svt-check-row__hit",
  itemSelected: "svt-check-row--selected",
  itemGroup: "svt-check-row--group",
  itemGroupSelected: "svt-check-row--group-selected",
  itemWithIcon: "svt-check-row--with-icon",
  itemDisabled: "svt-check-row--off",
  itemFocused: "svt-check-row--focused",
  itemHovered: "svt-check-row--hovered",
  itemLabel: "svt-check-row--label",
  itemTextWrap: "svt-check-row--wrap",
  itemCustomValue: "svt-check-row--custom",
  itemIcon: "svt-check-row__icon",
  itemMarkerIcon: "svt-check-row__marker",
  itemSeparator: "svt-check-row__separator",
  loadingIndicator: "svt-checks__loading",
  filter: "svt-checks__filter",
  filterBox: "svt-checks__filterbox",
  filterIcon: "svt-checks__filtericon",
  filterInput: "svt-checks__search",
  searchClearButtonIcon: "svt-checks__clear",
  emptyContainer: "svt-checks__empty",
  emptyText: "svt-checks__emptytext",
};

// The run-mode picker's menu. This one *is* a list of options - two of them, one chosen - so unlike the
// two above it paints a selection.
export const runnerMenuCss = {
  ...runnerListCss,
  root: "svt-menu",
  itemsContainer: "svt-menu__items",
  item: "svt-menu__item",
  itemBody: "svt-menu__body",
  itemSelected: "svt-menu__item--selected",
  itemFocused: "svt-menu__item--focused",
  itemHovered: "svt-menu__item--hovered",
  emptyContainer: "svt-menu__empty",
  emptyText: "svt-menu__empty-text",
};
