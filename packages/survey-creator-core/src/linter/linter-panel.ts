import { Action, Base, ListModel, property } from "survey-core";
import type { ILintFinding } from "survey-core/linter";
import type { SurveyCreatorModel } from "../creator-base";
import { ComponentContainerModel } from "../components/component-container/component-container";
import { SidebarPageModel } from "../components/side-bar/side-bar-page-model";
import { buildLintActions, LintGroupBy } from "./linter-issue-list";
import { navigateToFinding } from "./linter-locator";

// The sidebar page that shows the linter results. The page belongs to the creator rather than
// to one tab: the JSON tab fills it with its own list, whose rows navigate to a position in
// the editor text, and the designer fills it with the list of this controller, whose rows
// select the element a finding points at.
export class LinterPanelController extends Base {
  public static pageId = "linter";

  @property({ defaultValue: "severity" }) groupBy: LintGroupBy;

  private pageValue: SidebarPageModel;
  private listValue: ListModel;

  constructor(private creator: SurveyCreatorModel) {
    super();
  }

  public get page(): SidebarPageModel {
    if (!this.pageValue) {
      this.pageValue = this.creator.sidebar.addPage(LinterPanelController.pageId,
        "svc-component-container");
      this.pageValue.locTitleName = "linter.panelTitle";
      this.pageValue.visible = false;
    }
    return this.pageValue;
  }

  public get list(): ListModel {
    if (!this.listValue) {
      this.listValue = new ListModel({
        items: [],
        onSelectionChanged: (action: Action) => {
          const finding: ILintFinding = action.data?.finding;
          if (!!finding && !!action.data?.navigable) {
            navigateToFinding(this.creator, finding);
          }
        },
        allowSelection: false,
        searchEnabled: false
      });
      this.listValue.cssClasses = {
        item: "svc-json-linter__item",
        itemBody: "svc-json-linter__item-body",
        itemsContainer: "svc-json-linter",
        itemIcon: "svc-json-linter__icon"
      };
      this.listValue.hasVerticalScroller = true;
    }
    return this.listValue;
  }

  public update(): void {
    this.list.setItems(buildLintActions(this.creator, this.creator.linter.result, this.groupBy));
  }

  // Puts a list into the panel and, unless told otherwise, makes the panel the active page.
  public showList(list: ListModel, activate: boolean = true): void {
    this.page.componentData = new ComponentContainerModel({
      elements: [{ componentName: "sv-list", componentData: { model: list } }]
    });
    if (activate) {
      this.creator.sidebar.activePage = this.page.id;
      this.page.visible = true;
    }
  }

  public hide(): void {
    if (!this.pageValue) return;
    this.pageValue.visible = false;
    this.pageValue.componentData = undefined;
  }

  // Opens the panel on the findings of the survey being designed. The analysis runs here when
  // the cached result no longer answers for the current JSON: the panel a user opens is worth
  // an analysis, while an analysis per keystroke is not.
  public show(): void {
    const linter = this.creator.linter;
    if (linter.isStale || !linter.result) {
      linter.run({ json: this.creator.JSON, reason: "api" }, () => this.update());
    } else {
      this.update();
    }
    this.creator.sidebar.expandSidebar();
    this.showList(this.list);
  }

  public dispose(): void {
    super.dispose();
    this.listValue = undefined;
    this.pageValue = undefined;
  }
}
