# Designer: WYSIWYG mode

## Summary

Add a boolean option to the Designer tab plugin (`TabDesignerPlugin`, `designer-plugin.ts`) that turns on a **WYSIWYG mode**. In this mode, questions on the design surface look the same as in the running survey: same width, same height, no extra rows or controls inline. All editing controls move into a floating question toolbar.

The default is `false`, so the current behavior doesn't change.

## Option

- Proposed name: `wysiwygMode: boolean` on `TabDesignerPlugin`, default `false`.
- It must be reactive. Switching it at runtime re-renders the adorners on the design surface without recreating the creator.
- When it's on, add a modifier CSS class (for example `svc-tab-designer--wysiwyg`) to the designer root, so the styles can be scoped.
- Adorners (`QuestionAdornerViewModel` and its descendants) read the flag through the creator, for example `creator.getPlugin("designer")`.

## 1. Element toolbar

The toolbar applies to questions, panels and dynamic panels.

### Visibility and position

- The toolbar is shown for the **selected** element and for the **hovered** element. When one element is selected and another is hovered, both show their toolbars at the same time.
- The hover toolbar appears with the existing hover delay (`creator.pageHoverDelay`, applied through the adorner's `hoverDelay`).
- It's positioned **absolutely** relative to the element adorner root, **below** the element. It doesn't take part in layout: showing or hiding it never shifts other elements.
- **Horizontal:** aligned to the right edge of the element, with a small inset (a creator spacing variable, about 8px).
- **Vertical:** the top of the toolbar sits half of the standard gap between questions below the element's bottom edge. That gap is `--sjs2-layout-component-page-content-area-gap-vertical` for page rows and `--sjs2-layout-component-panel-content-area-gap-vertical` inside panels.
- The toolbar overlays the next element (needs a suitable `z-index`). The element containers must not clip it (`overflow: visible`), including for the last element on a page or in a panel.

### Appearance

- The toolbar container looks like a standard **dropdown popup**: same background, border radius, shadow and padding as `sv-popup__container` in `svc-creator-popup`.
- Actions are always in **icon mode**: buttons show only the icon, and the title is a tooltip. Responsive shrinking is not used. This is the equivalent of `SurveyElementActionContainer.alwaysShrink = true` / `mode = "small"`, with no overflow (dots) menu.
- The three sections are separated by vertical separators.

### Section 1: Type

- The type dropdown is the existing `convertTo` action. In icon mode it shows the current toolbox item icon; this behavior already exists in `createConvertToAction`.
- The subtype dropdown is the existing `convertInputType` action, shown when the question type has subtypes.
- Both dropdowns keep their current list content and conversion logic (`updateQuestionTypeOrSubtypeListModel`, `convertQuestion`).
- Visibility follows `allowChangeType` and `allowChangeInputType` from `getElementAllowOperations`.

### Section 2: Actions

- The standard element actions: `isrequired`, `duplicate`, `settings`, `delete`. Custom actions added through `onElementGetActions` also appear here.
- The existing visibility rules are kept: `allowCopy`, `allowDelete`, `allowChangeRequired`, `allowShowSettings`, `readOnly`, property visibility, and so on.
- **"Add option item"** button, for radiogroup, checkbox, dropdown and tagbox questions:
  - The icon is the same one the choice adorner uses for adding an item: `icon-add_16x16`.
  - Clicking it opens a dropdown list of what can be added:
    - A regular new item. Its label is the name the next choice would get (`getNextItemText`, otherwise `creator.getNextItemValue`), not the word "Choice". Adding it reuses `creator.createNewItemValue`: `getNextItemValue`, the next item text, and the `onItemValueAdded` event.
    - **Select All** (checkbox only, sets `showSelectAllItem`).
    - **None** (`showNoneItem`).
    - **Other** (`showOtherItem`).
    - **Refuse** (`showRefuseItem`).
    - **Don't know** (`showDontKnowItem`).
  - An entry is listed only if all of these hold:
    - the question type supports it,
    - it isn't already enabled,
    - the property is visible in the property grid,
    - the property can be modified (`isCanModifyProperty`, `onIsPropertyReadOnlyCallback`),
    - for **Choice**, the `maxChoices` limit isn't reached.
  - If no entry is available, the button is hidden.
  - Every change goes through the regular property change path, so undo/redo and the modified state work.

### Section 3: Add

- A button with the text **"Add"**. It needs a localization string in `editorLocalization`; reuse an existing one if there is a suitable one.
- Clicking it always opens a dropdown and never adds a default type directly. The dropdown contains the whole toolbox, with categories, subtypes and the same filtering as the `convertTo` list. Reuse `creator.getQuestionTypeSelectorModel`.
- The chosen question is inserted **right after the current element**, in the same container (page or panel), and then selected.
- Visibility follows `allowEdit` and `creator.showAddQuestionButton`.
- In WYSIWYG mode, the existing in-adorner "Add Question" footer (`svc-question__content-actions`) is hidden, because this button replaces it.
- The page footer "Add Question" button (`svc-add-new-question-action`) is hidden too. It stays visible on the empty-survey ghost page: the page is a ghost and the survey has no pages (`isGhost` and `survey.pageCount === 0`). A trailing ghost page on a survey that already has pages stays hidden.

## 2. Elements on the design surface

### General rule

An element in WYSIWYG mode keeps the **same width and height** as in Preview. In practice:

- no extra rows, ghost items or inline buttons inside the question content;
- selection and hover are shown with outline or box-shadow, not with borders or padding that change the size;
- inline editing of texts (title, description, item texts) still works through the existing string editors.

Designer and preview questions look the same — the same sizes and visual paddings — and keep different markup and CSS. Do not add the survey frame classes (`sd-question--with-frame`, `sd-panel--nested`). The designer card (`.svc-question__content`) stays, and WYSIWYG CSS copies the preview metrics onto it:

- A question on a page uses the panel-simple content-area padding, background, shadow and the panel radius.
- A question inside a panel uses the nested panel-simple tokens. The designer dashed outline on that card is removed.
- A panel uses the panel background, shadow and radius, with no extra card padding. Its content padding and gaps come from the panel content tokens.

When an element is both selected and hovered, the selected border wins, including inside a panel. The hover shadow applies only when the element is not selected.

Exception: the empty-panel placeholder of panels and dynamic panels stays as it is.

### Element header

- The element **drag handle** stays visible, so elements can still be reordered by dragging.
- The **collapse button** stays visible according to the creator options (`expandCollapseButtonVisibility`, `allowExpandCollapse`).
- The header height must be adapted so that the header of an element in the designer has the same height as the header of the same element in the running survey.

### Radiogroup and checkbox

- The ghost items are **not** rendered: new item, Select All, None, Other, Refuse, Don't know. Implement this through the existing `setCanShowOptionItemCallback` in `question.ts`: in WYSIWYG mode it returns `false` for placeholder items. Items that are actually enabled (for example `showNoneItem: true`) are still rendered and editable.
- Adding items is done only through the "Add option item" button in section 2 of the toolbar.
- The item **drag indicator** and the item **remove button** are rendered, and both are `position: absolute`, so the theme item size and padding stay unchanged. The drag indicator sits to the left of the item.
- The remove button keeps its own size and is hidden by default. On item hover or focus-within, the checkbox or radio decorator is hidden and the remove button is shown with its center on the decorator center.
- Ranking and image picker are excluded: they keep their existing item controls.
- The item text stays editable inline.

### Dropdown and tagbox

- The flattened choice list and the "Show more / Show less" button (`DropdownChoicesViewModel`, `QuestionDropdownAdornerViewModel`) are not rendered. The question looks like a real, closed dropdown or tagbox control.
- The control can be **opened** in the designer. Today `DropdownListModel` blocks opening in design mode, so this needs an explicit design-time exception.
- Items are edited inside the opened popup list by rendering the `svc-item-value` adorners in the list rows. Inline text editing stays, and the same absolute drag indicator and remove button are used here as on radiogroup and checkbox items.
- The "Add option item" toolbar button works for these types as well.

## Scope of this iteration

- **Question types:** only the header and toolbar changes, plus radiogroup, checkbox, dropdown and tagbox editors. The design-time extras of other types stay unchanged for now: rating add/remove buttons, the image picker "add image" tile, matrix ghost rows and columns, ranking, image and HTML placeholders, and others.
- **Mobile view and touch:** no mobile- or touch-specific changes for now.
- **Renderers:** React only. Angular, Vue and the JS renderer follow later.
- **Tests:** unit tests and e2e/screenshot tests are not part of this iteration.
- **Code location:** logic lives in `survey-creator-core`, including the SCSS. The React renderer only gets the template changes it needs.
