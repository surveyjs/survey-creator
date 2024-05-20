import { SurveySimulatorModel } from "../simulator";
import { Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, ITheme, ItemValue, ImageFit, ImageAttachment, QuestionDropdownModel, ValueChangingEvent, ValueChangedEvent, EventBase, Serializer, Question, IHeader, IElement, PanelModel, PanelModelBase, QuestionFileModel } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { ColorCalculator, assign, ingectAlpha, notShortCircuitAnd, parseColor } from "../../utils/utils";
import { settings } from "../../creator-settings";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
import { PredefinedColors, PredefinedThemes, Themes } from "./themes";
import { updateCustomQuestionJSONs } from "./theme-custom-questions";
import * as LibraryThemes from "survey-core/themes";
import { createBoxShadowReset } from "./theme-custom-questions/boxshadow-settings";
import { QuestionFileEditorModel } from "../../custom-questions/question-file";
import { SurveyHelper } from "../../survey-helper";
import { IAddPropertyGridEditorParams } from "./theme-plugin";
import { Switcher } from "../switcher/switcher";

require("./theme-builder.scss");

// TODO: rename to ThemeTabViewModel 
export class ThemeEditorModel extends Base {
  // public static DefaultTheme = Themes["default-light"];
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public testAgainAction: Action;
  public nextPageAction: Action;
  private advancedModeSwitcher: Switcher;
  // private themeEditorSurveyValue: SurveyModel;
  private themeCssVariablesChanges: { [index: string]: string } = {};
  private colorCalculator = new ColorCalculator();
  private blockChanges = true;
  private _availableThemes = PredefinedThemes;
  private prevQuestionValues: { [index: string]: any } = {};

  // private _setPGEditorPropertyValue(editor: Question, propertyName: string, value): void {
  //   if (!!editor) {
  //     editor[propertyName] = value;
  //   }
  // }

  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: ThemeEditorModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: ThemeEditorModel) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: ThemeEditorModel) => {
      if (!!val) {
        const survey = target.simulator.survey;
        if (survey.firstPageIsStarted) {
          if (val === survey.pages[0]) {
            survey.clear(false, true);
          } else {
            if (survey.state == "starting") {
              survey.setPropertyValue("isStartedState", false);
            }
          }
        }
        if (survey.state !== "starting") {
          survey.currentPage = val;
        }
      }
      target.updatePrevNextPageActionState();
    }
  })
  activePage: PageModel;

  public get survey(): SurveyModel {
    return this.simulator.survey;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }
  public get isPageToolbarVisible(): boolean {
    // return this.pages.visibleActions.length > 0 && !this.surveyProvider.isMobileView;
    return false;
  }
  // public get themeEditorSurvey(): SurveyModel {
  //   return this.themeEditorSurveyValue;
  // }
  public get currentTheme(): ITheme {
    return this.surveyProvider.theme;
  }
  public get currentThemeCssVariables(): { [index: string]: string } {
    return this.currentTheme.cssVariables || {};
  }

  constructor(private surveyProvider: SurveyCreatorModel, private startThemeClasses: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
    // this.themeName = ThemeEditorModel.DefaultTheme.themeName || "default";
    // updateCustomQuestionJSONs();
    // this.themeEditorSurveyValue = this.createThemeEditorSurvey();

    // this.surveyProvider.onPropertyChanged.add(this.creatorPropertyChanged);
  }

  public get isMobileView() {
    return this.surveyProvider.isMobileView;
  }
  public get showResults() {
    return !this.isRunning && !this.isMobileView;
  }

  // public loadTheme(theme: ITheme) {
  //   this.blockThemeChangedNotifications += 1;
  //   try {
  //     let probeThemeFullName = getThemeFullName(theme);
  //     const baseTheme = findSuitableTheme(theme.themeName, theme.colorPalette, theme.isPanelless ? "lightweight" : "panels", probeThemeFullName);
  //     const themeChanges = getThemeChanges(theme, baseTheme);
  //     if (this.currentTheme === theme) {
  //       this.themeCssVariablesChanges = themeChanges.cssVariables || {};
  //     }
  //     this.themeName = themeChanges.themeName;
  //     this.themePalette = themeChanges.colorPalette;
  //     this.themeMode = themeChanges.isPanelless === true ? "lightweight" : "panels";

  //     this.backgroundImage = theme.backgroundImage || this.backgroundImage;
  //     this.backgroundImageFit = theme.backgroundImageFit || this.backgroundImageFit;
  //     this.backgroundImageAttachment = theme.backgroundImageAttachment || this.backgroundImageAttachment;

  //     const effectiveThemeCssVariables = {};
  //     assign(effectiveThemeCssVariables, ThemeEditorModel.DefaultTheme.cssVariables || {}, baseTheme.cssVariables || {});
  //     assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);
  //     this.trimCssVariables(effectiveThemeCssVariables);
  //     const effectiveTheme: ITheme = {
  //       backgroundImage: this.backgroundImage || baseTheme.backgroundImage || "",
  //       backgroundImageFit: this.backgroundImageFit || baseTheme.backgroundImageFit,
  //       backgroundImageAttachment: this.backgroundImageAttachment || baseTheme.backgroundImageAttachment,
  //       backgroundOpacity: (this.backgroundOpacity / 100) || baseTheme.backgroundOpacity,
  //     };
  //     const effectiveHeaderSettings: IHeader = {} as any;
  //     assign(effectiveHeaderSettings, baseTheme.header || {}, this.currentTheme.header || {});
  //     if (Object.keys(effectiveHeaderSettings).length > 0) {
  //       effectiveTheme.header = effectiveHeaderSettings;
  //     }
  //     assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName, colorPalette: this.themePalette, isPanelless: this.themeMode === "lightweight" });
  //     this.surveyProvider.theme = effectiveTheme;

  //     // this.initializeColorCalculator();
  //     // this.loadThemeIntoPropertyGrid();
  //   }
  //   finally {
  //     this.blockThemeChangedNotifications -= 1;
  //   }
  // }

  // private _defaultSessionTheme = ThemeEditorModel.DefaultTheme;
  // public get defaultSessionTheme() {
  //   return this._defaultSessionTheme;
  // }
  // public set defaultSessionTheme(theme: ITheme) {
  //   this._defaultSessionTheme = theme;
  // }

  // public resetTheme() {
  //   this.setTheme({ themeName: this.defaultSessionTheme.themeName, isPanelless: this.defaultSessionTheme.isPanelless, colorPalette: this.defaultSessionTheme.colorPalette });
  // }

  // public setTheme(theme: ITheme) {
  //   const headerBackgroundColorValue = this.currentTheme.cssVariables["--sjs-header-backcolor"];
  //   this.themeCssVariablesChanges = {};
  //   if (headerBackgroundColorValue !== undefined) {
  //     this.themeCssVariablesChanges["--sjs-header-backcolor"] = headerBackgroundColorValue;
  //   }
  //   this.backgroundImage = "";
  //   this.backgroundImageFit = "cover";
  //   this.backgroundImageAttachment = "scroll";
  //   this.backgroundOpacity = 100;
  //   this.loadTheme(theme);
  //   this.themeModified({ theme });
  // }

  // public selectTheme(themeName: string, themePalette: string = "light", themeMode: string = "panels") {
  //   this.themeName = themeName;
  //   this.themePalette = themePalette;
  //   this.themeMode = themeMode;
  //   const theme = this.findSuitableTheme(themeName);
  //   this.setTheme(theme);
  // }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, "theme", this, (survey: SurveyModel): void => {
      survey.setCss(theme, false);
      survey.fitToContainer = true;
      survey.addLayoutElement({
        id: "complete-customization",
        container: "completePage" as any,
        component: "svc-complete-page",
        data: this
      });
      if (!!json && !!json.locale) {
        survey.locale = json.locale;
      }
      survey.applyTheme(this.currentTheme);
    });
    this.simulator.survey = newSurvey;
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: ThemeEditorModel = this;
    this.survey.onComplete.add((sender: SurveyModel) => {
      self.isRunning = false;
    });

    if (!!this.survey["onNavigateToUrl"]) {
      this.survey["onNavigateToUrl"].add(function (sender, options) {
        const url: string = options.url;
        options.url = "";
        if (!!url) {
          const message: string = getLocString("ed.navigateToMsg") + " '" + url + "'.";
          if (!!this.surveyProvider) {
            this.surveyProvider.notify(message);
          } else {
            alert(message);
          }
        }
      });
    }
    this.survey.onStarted.add((sender: SurveyModel) => {
      self.setActivePageItem(self.simulator.survey.activePage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: SurveyModel, options) => {
      self.activePage = options.newCurrentPage;
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: SurveyModel, options) => {
      self.updatePageItem(options.page);
      this.updatePrevNextPageActionState();
    });
  }

  public setJSON(json: any, currTheme: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.updateSimulatorSurvey(json, currTheme);
  }

  // public getPropertyGridCategory(categoryName: string): IElement | undefined {
  //   const themeEditorGroups = this.themeEditorSurvey.getPage(0).elements;
  //   const group = themeEditorGroups.filter(group => group.name === categoryName)[0];
  //   return group;
  // }

  // public removePropertyGridEditor(name: string): void {
  //   const element = this.themeEditorSurvey.findQuestionByName(name);
  //   if (!!element) {
  //     this.themeEditorSurvey.getPage(0).removeElement(element);
  //   }
  // }

  // public addPropertyGridEditor(params: IAddPropertyGridEditorParams): void {

  //   let category;
  //   let sibling;
  //   let insertIndex = -1;

  //   if (!!params.category) {
  //     category = this.getPropertyGridCategory(params.category) as PanelModel;
  //   }

  //   if (!!params.insertBefore) {
  //     sibling = (category || this.themeEditorSurvey).findQuestionByName(params.insertBefore);
  //     if (!!sibling) {
  //       insertIndex = sibling.parent.elements.indexOf(sibling) - 1;
  //     }
  //   }

  //   if (!!params.insertAfter) {
  //     sibling = (category || this.themeEditorSurvey).findQuestionByName(params.insertAfter);
  //     if (!!sibling) {
  //       insertIndex = sibling.parent.elements.indexOf(sibling) + 1;
  //     }
  //   }

  //   if (!!params.element) {
  //     if (!!sibling) {
  //       sibling.parent.addElement(params.element, insertIndex);
  //     } else if (!!category) {
  //       category.addElement(params.element);
  //     } else {
  //       SurveyHelper.warnText("No source found to add.");
  //     }
  //   }
  // }

  private blockThemeChangedNotifications = 0;
  public initialize(json: any, options: any) {
    this.blockChanges = true;
    try {
      this.setJSON(json, this.startThemeClasses);
      this.updatePageList();
      // this.updatePropertyGridEditors(this.themeEditorSurvey);
      // this.updatePropertyGridEditorsAvailability();
      this.buildActions();

      if (options.showPagesInTestSurveyTab !== undefined) {
        this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
      }
    }
    finally {
      this.blockChanges = false;
    }
  }
  private updatePageItem(page: PageModel) {
    const item = this.getPageItemByPage(page);
    if (item) {
      item.enabled = page.isVisible;
    }
  }
  private getCurrentPageItem(): IAction {
    return this.pageListItems[this.survey.pages.indexOf(this.survey.activePage)];
  }
  private getSelectPageTitle(): string {
    return (this.activePage && this.getPageTitle(this.activePage, "preview-tab:selected-page", "survey-tester-selected")) || getLocString("ts.selectPage");
  }
  private getPageTitle(page: PageModel, area = "preview-tab:page-list", reason = "survey-tester") {
    let title = this.surveyProvider.getObjectDisplayName(page, area, reason, page.title);
    if (title === page.name && title.indexOf("page") === 0) {
      const index: number = this.survey.pages.indexOf(page);
      return editorLocalization.getString("ed.pageTypeName") + " " + (index + 1);
    }
    return title;
  }
  private updatePageList() {
    const pages: Array<IAction> = [];
    for (let i: number = 0; i < this.survey.pages.length; i++) {
      const page: PageModel = this.survey.pages[i];
      pages.push({
        id: page.name,
        data: page,
        title: this.getPageTitle(page),
        enabled: page.isVisible,
        visible: true
      });
    }
    this.pageListItems = pages;
  }

  public show() {
    this.showInvisibleElements = false;
    this.activePage = this.survey.activePage;
    this.isRunning = true;
  }

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
    // this.updatePropertyGridEditors(this.themeEditorSurvey);
    this.show();
  }

  public buildActions() {
    const pageActions: Array<Action> = [];
    const setNearPage: (isNext: boolean) => void = (isNext: boolean) => {
      const currentIndex: number = this.survey.currentPageNo;
      const shift: number = isNext ? 1 : -1;
      let newIndex = currentIndex + shift;
      if (this.survey.state === "starting" && isNext) {
        newIndex = 0;
      }
      let nearPage: PageModel = this.survey.visiblePages[newIndex];
      if (!isNext && currentIndex === 0 && this.survey.firstPageIsStarted
        && this.survey.pages.length > 0) {
        nearPage = this.survey.pages[0];
      }
      const pageIndex: number = this.survey.pages.indexOf(nearPage);
      this.activePage = this.survey.pages[pageIndex];
    };

    if (this.prevPageAction) {
      this.prevPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const isRunning = this.survey.state === "running";
        const isActiveTab = this.surveyProvider.activeTab === "theme";
        return this.surveyProvider.isMobileView && notShortCircuitAnd(this.isRunning, isActiveTab, this.pageListItems.length > 1) && isRunning;
      });
      this.prevPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-left" : "icon-arrow-left_16x16";
      });
      this.prevPageAction.iconSize = <any>new ComputedUpdater<number>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.prevPageAction.action = () => setNearPage(false);
      pageActions.push(this.prevPageAction);
    }

    if (this.nextPageAction) {
      this.nextPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const isRunning = this.survey.state === "running";
        const isActiveTab = this.surveyProvider.activeTab === "theme";
        return this.surveyProvider.isMobileView && notShortCircuitAnd(this.isRunning, isActiveTab, this.pageListItems.length > 1) && isRunning;
      });
      this.nextPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-right" : "icon-arrow-right_16x16";
      });
      this.nextPageAction.iconSize = <any>new ComputedUpdater<number>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.nextPageAction.action = () => setNearPage(true);
      pageActions.push(this.nextPageAction);
    }
    this.pages.actions = pageActions;
    this.pages.containerCss = "sv-action-bar--pages";
    this.updatePrevNextPageActionState();
  }
  private updatePrevNextPageActionState() {
    if (!this.prevPageAction || !this.survey) return;
    const isPrevEnabled = this.survey.firstPageIsStarted && this.survey.state !== "starting" || (!this.survey.firstPageIsStarted && !this.survey.isFirstPage);
    this.prevPageAction.enabled = isPrevEnabled;
    const isNextEnabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1;
    this.nextPageAction.enabled = isNextEnabled;
  }

  private setActivePageItem(page: PageModel, val: boolean) {
    const item: IAction = this.getPageItemByPage(page);
    if (item) {
      item.active = val;
    }
  }
  private getPageItemByPage(page: PageModel): IAction {
    const items: IAction[] = this.pageListItems;
    for (let i = 0; i < items.length; i++) {
      if (items[i].data === page) return items[i];
    }
    return null;
  }

  /*
  protected createThemeEditorSurvey(): SurveyModel {
    const json = this.getThemeEditorSurveyJSON();
    setSurveyJSONForPropertyGrid(json, true, false);
    const themeEditorSurvey = this.surveyProvider.createSurvey({}, "theme_editor", this, (survey: SurveyModel): void => {
      survey.lazyRendering = true;
      survey.lazyRenderingFirstBatchSize = 1;
      survey.setJsonObject(json);
      survey.getCss().list = {};
      const themeBuilderCss = { ...propertyGridCss };
      themeBuilderCss.root += " spg-theme-builder-root";
      survey.css = themeBuilderCss;
      survey.enterKeyAction = "loseFocus";
    });
    themeEditorSurvey.onValueChanging.add((sender, options: ValueChangingEvent) => {
      if (this.blockChanges) return;

      this.prevQuestionValues[options.name] = options.oldValue;
    });

    themeEditorSurvey.onValueChanged.add((sender, options: ValueChangedEvent) => {
      if (options.name === "advancedMode") return;
      if (this.blockChanges) return;

      if (this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.startTransaction(options.name + " changed");
      }
      this.undoRedoManager.onPropertyValueChanged("value", this.prevQuestionValues[options.name], options.value, options.question, undefined);

      if (this.generalPropertiesChanged(options)) {
        if (this.blockThemeChangedNotifications == 0) {
          this.undoRedoManager.stopTransaction();
        }
        return;
      }

      if (options.name === "headerViewContainer") {
        this.headerViewContainerPropertiesChanged(options);
      }

      if (options.name === "--sjs-shadow-inner" || options.name === "--sjs-shadow-small") {
        this.shadowInnerPropertiesChanged(options);
      }

      this.cssVariablePropertiesChanged(options);

      this.blockThemeChangedNotifications += 1;
      const hasUpdatedDependentValues = this.updateDependentQuestionValues(options);

      const newCssVariables = {};
      assign(newCssVariables, this.currentTheme.cssVariables, this.themeCssVariablesChanges);
      this.trimCssVariables(newCssVariables);
      this.currentTheme.cssVariables = newCssVariables;

      this.blockThemeChangedNotifications -= 1;
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }

      if (hasUpdatedDependentValues) {
        this.themeModified(options);
      } else {
        this.updateSimulatorTheme();
      }
    });

    themeEditorSurvey.onOpenFileChooser.add((_, options) => {
      const context: any = {};
      assign(context, (options as any).context, { element: this.currentTheme as any, elementType: "theme" });
      if (options.element) {
        const question = options.element as QuestionFileModel;
        context.propertyName = question.name;
        if (question.parentQuestion) {
          context.elementType = question.parentQuestion.name === "headerViewContainer" ? "header" : question.parentQuestion.name;
        }
      }
      this.surveyProvider.chooseFiles(options.input, options.callback, context as any);
    });
    themeEditorSurvey.onUploadFiles.add((_, options) => {
      const callback = (status: string, data: any) => options.callback(status, [{ content: data, file: options.files[0] }]);
      const context: any = {};
      assign(context, (options as any).context, { element: this.currentTheme as any, elementType: "theme", propertyName: options.name });
      if (options.question && options.question.parentQuestion) {
        context.elementType = options.question.parentQuestion.name === "headerViewContainer" ? "header" : options.question.parentQuestion.name;
      }
      this.surveyProvider.uploadFiles(options.files, undefined, callback, context);
    });
    this.patchFileEditors(themeEditorSurvey);
    themeEditorSurvey.getAllQuestions().forEach(q => q.allowRootStyle = false);
    themeEditorSurvey.onQuestionCreated.add((_, opt) => {
      opt.question.allowRootStyle = false;
    });
    themeEditorSurvey.onGetPanelFooterActions.add((sender, opt) => {
      if (opt.question && opt.question.name == "headerViewContainer") {
        opt.actions = [];
      }
    });
    themeEditorSurvey.onGetPanelTitleActions.add((sender, opt) => {
      if (opt.panel && opt.panel.name == "groupAppearance") {
        this.createAppearanceAdvancedModeAction(opt.panel);
        opt.titleActions.push(this.advancedModeSwitcher);
      }
    });
    themeEditorSurvey.onUpdatePanelCssClasses.add((sender, options) => {
      if (options.panel.hasParent) {
        const parent = (options.panel.parent ?? options.panel.parentQuestion);
        if (!parent || parent.hasParent && !(parent.name === "headerViewContainer" || parent.parentQuestion?.name === "headerViewContainer")) {
          options.cssClasses.panel.container = "spg-panel-group";
          options.cssClasses.panel.content = "spg-panel-group__content";
          options.cssClasses.panel.title = "spg-panel-group__title";
        }
        else {
          options.cssClasses.panel.container = "spg-nested-panel";
          options.cssClasses.panel.content = "spg-nested-panel__content";
          options.cssClasses.panel.title = "spg-nested-panel__title";
        }
      }
    });
    return themeEditorSurvey;
  }
*/
  // private createAppearanceAdvancedModeAction(panel: PanelModelBase): void {
  //   const advancedMode = new Switcher({
  //     id: "advancedMode",
  //     component: "svc-switcher",
  //     ariaChecked: <any>new ComputedUpdater<boolean>(() => this.groupAppearanceAdvancedMode),
  //     ariaRole: "checkbox",
  //     css: "sv-theme-group_title-action",
  //     title: getLocString("theme.advancedMode"),
  //     visible: !this.surveyProvider.isMobileView,
  //     action: () => {
  //       this.groupAppearanceAdvancedMode = !this.groupAppearanceAdvancedMode;
  //       this._setPGEditorPropertyValue(panel.getQuestionByName("advancedMode"), "value", this.groupAppearanceAdvancedMode);
  //     }
  //   });
  //   this.registerFunctionOnPropertyValueChanged("groupAppearanceAdvancedMode",
  //     () => {
  //       advancedMode.checked = !advancedMode.checked;
  //     },
  //     "groupAppearanceAdvancedMode"
  //   );
  //   advancedMode.checked = false;
  //   this.advancedModeSwitcher = advancedMode;
  // }

  public dispose(): void {
    // this.surveyProvider.onPropertyChanged.remove(this.creatorPropertyChanged);
    // this.themeEditorSurveyValue?.dispose();
    this.simulator.dispose();
    super.dispose();
  }
}