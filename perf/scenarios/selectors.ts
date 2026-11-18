// The DOM of Survey Creator for React that the react scenarios act on and check (03), taken from the components'
// source (survey-creator-react/src, survey-creator-core/src, survey-react-ui/src), not from the e2e tests. Every
// react scenario names `selectors` in `uses`, so a change here changes its rev hash.
export const selectors = {
  // A tab of the tab strip (TabbedMenu.tsx: role="tab", id "tab-" + the tab id), and its content
  // (SurveyCreator.tsx: id "scrollableDiv-" + the tab id).
  tab: (id: string): string => "#tab-" + id,
  tabContent: (id: string): string => "#scrollableDiv-" + id,
  // A toolbox item (toolbox/ToolboxItem.tsx): the tool, its title and the clickable item.
  toolboxTool: ".svc-toolbox__tool",
  toolboxTitle: ".svc-toolbox__item-title",
  toolboxItem: ".svc-toolbox__item",
  // The designer's surface toolbar (tabs/designer.ts): the actions' css classes, with the expand typo of the
  // source; the button is the action's only one (survey-react-ui action-bar-item.tsx).
  collapseAll: ".sv-action--collapse-all button",
  expandAll: ".sv-sction--expande-all button",
  // The question and panel adorners (adorners/Question.tsx, components/question.ts), and the placeholder of a page
  // whose content is not rendered (components/page.ts).
  elementAdorner: (name: string): string => ".svc-question__adorner[data-sv-drop-target-survey-element=\"" + name + "\"]",
  pagePlaceholder: ".svc-page__loading-content",
  // A rendered page of the survey, and one shown collapsed (components/page.ts); the ghost page (the "add a page"
  // placeholder, svc-page__content--new) is left out: it is always shown collapsed.
  pageContent: ".svc-page__content:not(.svc-page__content--new)",
  collapsedPageContent: ".svc-page__content--collapsed:not(.svc-page__content--new)",
  // The inline title editor of a question (StringEditor.tsx inside the question header).
  titleEditor: (name: string): string => ".svc-question__adorner[data-sv-drop-target-survey-element=\"" + name + "\"] .sd-element__title .sv-string-editor",
  // A required question's title (survey-core defaultCss: titleRequired); a hidden title (q3978) keeps the class too.
  requiredTitle: (name: string): string => ".svc-question__adorner[data-sv-drop-target-survey-element=\"" + name + "\"] .sd-question__title--required",
  // The designer surface's scroll container (tabs/Designer.tsx renders it in a survey-react-ui Scroll).
  designerScroller: ".svc-tab-designer .sv-scroll__scroller",
  // The property grid header in the "buttons" layout, the default (side-bar/SideBarPropertyGridHeader.tsx): the
  // object selector button and the selected element's name (the action's tooltip).
  objectSelectorButton: ".svc-sidebar__header-object-selector",
  selectedElementName: ".svc-sidebar__header-object-selector .svc-sidebar__header-subtitle",
  // The object selector popup (property-grid-view-model.ts, cssClass "svc-object-selector"), its list items and
  // its search box (survey-react-ui list.tsx).
  objectSelectorPopup: ".svc-object-selector",
  objectSelectorContainer: ".svc-object-selector .sv-popup__container",
  objectSelectorItems: ".svc-object-selector li",
  objectSelectorSearch: ".svc-object-selector input"
};
