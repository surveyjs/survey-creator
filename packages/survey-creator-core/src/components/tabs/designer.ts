import {
  ActionBarItem,
  Base,
  IActionBarItem,
  PageModel,
  property,
  SurveyModel
} from "survey-core";
import { ICreatorPlugin, CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import "./designer.scss";

export class TabDesignerViewModel<T extends SurveyModel> extends Base {
  @property() newPage: PageModel;
  public creator: CreatorBase<T>;

  private createNewPage() {
    if (!this.survey) return;
    const newPage: PageModel = this.survey.createNewPage("");
    newPage.setSurveyImpl(this.survey);
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage["_addToSurvey"] = () => {
      newPage["_addToSurvey"] = undefined;
      this.survey.addPage(newPage);
      this.createNewPage();
    };
    this.newPage = newPage;
  }

  constructor(creator: CreatorBase<T>) {
    super();
    this.creator = creator;
  }
  get survey() {
    return this.creator.survey;
  }
  public initSurvey() {
    this.createNewPage();
  }
  public get showNewPage(): boolean {
    const pages: PageModel[] = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].rows.length > 0;
  }
}

export class TabDesignerPlugin<T extends SurveyModel>
  implements ICreatorPlugin
{
  public model: TabDesignerViewModel<T>;
  private undoAction: ActionBarItem;
  private redoAction: ActionBarItem;
  private surveySettingsAction: ActionBarItem;
  constructor(private creator: CreatorBase<T>) {
    this.model = new TabDesignerViewModel<T>(creator);
    creator.tabs.push({
      id: "designer",
      title: getLocString("ed.designer"),
      componentContent: "svc-tab-designer",
      data: this.model,
      action: () => this.creator.makeNewViewActive("designer"),
      active: () => this.creator.viewType === "designer"
    });
    creator.plugins["designer"] = this;
  }
  public activate(): void {}
  public deactivate(): boolean {
    return true;
  }
  public designerSurveyCreated(): void {
    this.model.initSurvey();
    if (!!this.creator.undoRedoManager) {
      this.creator.undoRedoManager.canUndoRedoCallback = () => {
        this.updateUndeRedoActions();
      };
    }
  }
  public createActions(items: Array<IActionBarItem>) {
    this.undoAction = new ActionBarItem({
      id: "icon-undo",
      iconName: "icon-undo",
      title: "Undo",
      showTitle: false,
      visible: () => this.creator.viewType === "designer",
      action: () => this.creator.undo()
    });
    this.redoAction = new ActionBarItem({
      id: "icon-redo",
      iconName: "icon-redo",
      title: "Redo",
      showTitle: false,
      visible: () => this.creator.viewType === "designer",
      action: () => this.creator.redo()
    });
    this.surveySettingsAction = new ActionBarItem({
      id: "icon-settings",
      iconName: "icon-settings",
      needSeparator: true,
      action: () => this.creator.selectElement(this.creator.survey),
      active: this.isSurveySelected,
      visible: () => this.creator.viewType === "designer",
      title: "Settings",
      showTitle: false
    });
    items.push(this.undoAction);
    items.push(this.redoAction);
    items.push(this.surveySettingsAction);
    this.updateUndeRedoActions();
    this.creator.onSelectedElementChanged.add((sender, options) => {
      this.surveySettingsAction.active = this.isSurveySelected;
    });
  }
  private updateUndeRedoActions() {
    if (!this.creator.undoRedoManager) return;
    this.undoAction.active = this.creator.undoRedoManager.canUndo();
    this.redoAction.active = this.creator.undoRedoManager.canRedo();
  }
  private get isSurveySelected(): boolean {
    return this.creator.isElementSelected(<any>this.creator.survey);
  }
}
