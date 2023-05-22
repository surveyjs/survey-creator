import { SurveySimulatorModel } from "../simulator";
import { surveyLocalization, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, createDropdownActionModel, Serializer, ComponentCollection } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { notShortCircuitAnd } from "../../utils/utils";
require("./theme.scss");

export const Themes = {
  "default-light": {
    "--sjs-primary-backcolor": "#19b394",
    "--background": "#ffffff",
    "--background-dim": "#f3f3f3",
    "--background-dim-light": "#f9f9f9",
    "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
    "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45);",
    "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91);",
    "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45);",
    "--sjs-editor-background": "#f9f9f9",
    "--sjs-question-background": "#ffffff",
    "--sjs-primary-forecolor": "#ffffff",
    "--foreground": "#161616",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px"
  },
  "default-dark": {
    "--sjs-primary-backcolor": "#1ab7fa",
    "--background": "#555555",
    "--background-dim": "#4d4d4d",
    "--background-dim-light": "#4d4d4d",
    "--sjs-general-forecolor": "rgba(255, 255, 255, 0.78)",
    "--sjs-general-forecolor-light": "rgba(255, 255, 255, 0.42)",
    "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 0.79)",
    "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 0.45)",
    "--sjs-editor-background": "#4d4d4d",
    "--sjs-question-background": "#555555",
    "--sjs-primary-forecolor": "#ffffff",
    "--foreground": "#ededed",
    "--base-unit": "8px",
    "--sjs-corner-radius": "4px"
  }
};

ComponentCollection.Instance.add({
  name: "fontsettings",
  elementsJSON: [
    {
      type: "dropdown",
      name: "family",
      title: getLocString("theme.fontFamily"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      choices: ["Open Sans", "Arial"],
      defaultValue: "Open Sans",
      allowClear: false
    },
    {
      type: "buttongroup",
      name: "weight",
      titleLocation: "hidden",
      descriptionLocation: "hidden",
      choices: [
        { value: "400", text: getLocString("theme.fontWeightRegular") },
        { value: "500", text: getLocString("theme.fontWeightSemiBold") },
        { value: "700", text: getLocString("theme.fontWeightBold") },
      ],
      defaultValue: "400"
    },
    {
      type: "color",
      name: "color",
      title: getLocString("theme.color"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "size",
      title: getLocString("theme.size"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      min: 0,
    }
  ],
  onInit() {
  },
  onCreated(question) {
    const color = question.contentPanel.getQuestionByName("color");
    color.visible = question.name !== "surveyTitle";
  },
  onValueChanged(question, name, newValue) {
  },
});

ComponentCollection.Instance.add({
  name: "elementsettings",
  elementsJSON: [
    {
      type: "color",
      name: "backcolor",
      title: getLocString("theme.backcolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "color",
      name: "hovercolor",
      title: getLocString("theme.hovercolor"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    },
    {
      type: "spinedit",
      name: "corner",
      title: getLocString("theme.cornerRadius"),
      titleLocation: "left",
      descriptionLocation: "hidden",
      unit: "px",
      defaultValue: 4,
      min: 0
    },
    {
      type: "expression",
      name: "cornerRadius",
      expression: "{composite.corner}+\"px\"",
      visible: false
    }, {
      type: "text",
      name: "border",
      title: getLocString("theme.borderDecoration"),
      titleLocation: "left",
      descriptionLocation: "hidden"
    }
  ],
  onInit() {
  },
  onCreated(question) {
  },
  onValueChanged(question, name, newValue) {
  },
});
export class ThemeSurveyTabViewModel extends Base {
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public testAgainAction: Action;
  public nextPageAction: Action;
  private selectPageAction: Action;
  private themeEditorSurveyValue: SurveyModel;
  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: ThemeSurveyTabViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: ThemeSurveyTabViewModel) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: ThemeSurveyTabViewModel) => {
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
  public get activeLanguage(): string {
    return this.getPropertyValue("activeLanguage", this.survey.locale || surveyLocalization.defaultLocale);
  }
  public set activeLanguage(val: string) {
    if (val === this.activeLanguage) return;
    this.setPropertyValue("activeLanguage", val);
    this.survey.locale = val;
  }
  public get survey(): SurveyModel {
    return this.simulator.survey;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }
  public get isPageToolbarVisible(): boolean {
    return this.pages.visibleActions.length > 0 && !this.surveyProvider.isMobileView;
  }
  public get themeEditorSurvey(): SurveyModel {
    return this.themeEditorSurveyValue;
  }

  constructor(private surveyProvider: CreatorBase, private startTheme: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
    this.themeEditorSurveyValue = this.createThemeEditorSurvey();
  }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, "theme");
    newSurvey.setCss(theme, false);
    this.simulator.survey = newSurvey;
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: ThemeSurveyTabViewModel = this;
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

  public initialize(json: any, options: any) {
    this.setJSON(json, this.startTheme);
    this.updatePageList();

    if (options.showPagesInTestSurveyTab !== undefined) {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }

    this.buildActions();
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
    this.survey.locale = this.activeLanguage;
    this.isRunning = true;
  }

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
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
      this.selectPageAction.data.selectedItem = this.pageListItems[pageIndex];
    };

    if (this.prevPageAction) {
      this.prevPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.isRunning, this.surveyProvider.activeTab === "test", this.pageListItems.length > 1);
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

    this.selectPageAction = createDropdownActionModel({
      id: "pageSelector",
      css: "svc-page-selector",
      title: this.getSelectPageTitle(),
      visible: this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab
    }, {
      items: this.pageListItems,
      allowSelection: true,
      selectedItem: this.getCurrentPageItem(),
      onSelectionChanged: (item: IAction) => {
        this.activePage = item.data;
      },
      verticalPosition: "top",
      horizontalPosition: "center"
    });
    pageActions.push(this.selectPageAction);

    if (this.nextPageAction) {
      this.nextPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        return notShortCircuitAnd(this.isRunning, this.surveyProvider.activeTab === "test", this.pageListItems.length > 1);
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
  private updateResultsTemplate(theme: any) {
    this.simulator.survey.setCss(theme, false);
    this.simulator.survey.render();
  }
  public setTheme(themeName: string, themeMapper: any): void {
    const availableThemes = themeMapper.filter(item => item.name === themeName);
    let theme = <any>defaultV2Css;
    if (availableThemes.length > 0) {
      theme = availableThemes[0].theme;
    }
    this.isRunning ? this.updateSimulatorSurvey(this.json, theme) : this.updateResultsTemplate(theme);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.pages.hasActions) return;

    if (name === "activePage") {
      this.updatePrevNextPageActionState();
      this.selectPageAction.title = this.getSelectPageTitle();
    }
    if (name === "isRunning" || name === "pageListItems" || name === "showPagesInTestSurveyTab") {
      this.selectPageAction.popupModel.contentComponentData.model.items = this.pageListItems;
      this.selectPageAction.popupModel.contentComponentData.model.selectedItem = this.getCurrentPageItem();
      this.selectPageAction.visible = this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab;
    }
  }
  private updatePrevNextPageActionState() {
    if (!this.prevPageAction || !this.survey) return;
    const isPrevEnabled = this.survey.firstPageIsStarted && this.survey.state !== "starting"
      || (!this.survey.firstPageIsStarted && !this.survey.isFirstPage);
    this.prevPageAction.css = isPrevEnabled ? "sv-action-bar-item--secondary" : "";
    this.prevPageAction.enabled = isPrevEnabled;
    const isNextEnabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1;
    this.nextPageAction.css = isNextEnabled ? "sv-action-bar-item--secondary" : "";
    this.nextPageAction.enabled = isNextEnabled;
  }
  protected createThemeEditorSurvey(): SurveyModel {
    var json = this.getThemeEditorSurveyJSON();
    setSurveyJSONForPropertyGrid(json, true, false);
    var themeEditorSurvey = this.surveyProvider.createSurvey(json, "theme_editor");
    themeEditorSurvey.getCss().list = {};
    const themeBuilderCss = { ...propertyGridCss };
    themeBuilderCss.root += " spg-theme-builder-root";
    themeEditorSurvey.css = themeBuilderCss;
    themeEditorSurvey.mergeData(this.themeVariables);
    themeEditorSurvey.getQuestionByName("questionPanel").contentPanel.getQuestionByName("backcolor").value = this.themeVariables["--background"];
    themeEditorSurvey.getQuestionByName("editorPanel").contentPanel.getQuestionByName("backcolor").value = this.themeVariables["--background-dim-light"];

    themeEditorSurvey.onValueChanged.add((sender, options) => {
      if (["themeName", "themeMode", "themePalette"].indexOf(options.name) !== -1) {
        this[options.name] = options.value;
        themeEditorSurvey.mergeData(this.themeVariables);
      }
      if (options.name === "questionBackgroundTransparency" || options.name === "editorPanel") {
        let baseColor = themeEditorSurvey.getValue("--background-dim-light");
        let questionBackgroundTransparencyValue = themeEditorSurvey.getValue("questionBackgroundTransparency");
        themeEditorSurvey.setValue("--sjs-editor-background", ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100));
      }
      if (options.name === "panelBackgroundTransparency" || options.name === "questionPanel") {
        let baseColor = themeEditorSurvey.getValue("--background");
        let panelBackgroundTransparencyValue = themeEditorSurvey.getValue("panelBackgroundTransparency");
        themeEditorSurvey.setValue("--sjs-question-background", ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100));
      }
      if (["backgroundImage", "backgroundImageFit"].indexOf(options.name) !== -1) {
        this.survey[options.name] = options.value;
        return;
      }
      if (options.name === "backgroundOpacity") {
        this.survey.backgroundOpacity = options.value / 100;
        return;
      }
      if (options.name === "themeMode") {
        this.survey["isCompact"] = options.value === "lightweight";
        return;
      }
      const _data = sender.data;
      if (options.question?.getType() === "fontsettings") {
        Object.keys(options.value).forEach(key => {
          const innerQ = options.question.contentPanel.getQuestionByName(key);
          _data[`--sjs-font-${options.name.toLocaleLowerCase()}-${key}`] = options.value[key] + (innerQ.unit?.toString() || "");
        });
      }
      if (options.question?.getType() === "elementsettings") {
        Object.keys(options.value).forEach(key => {
          if (key === "corner") return;
          _data[`--sjs-${options.name.toLocaleLowerCase()}-${key}`] = options.value[key];
        });
      }
      this.simulator.themeVariables = _data;
    });
    themeEditorSurvey.getAllQuestions().map(q => q.allowRootStyle = false);
    themeEditorSurvey.onQuestionCreated.add((_, opt) => {
      opt.question.allowRootStyle = false;
    });
    return themeEditorSurvey;
  }

  @property({ defaultValue: "default" }) themeName;
  @property({ defaultValue: "light" }) themePalette;
  @property({ defaultValue: "panel" }) themeMode;

  get themeVariables(): any {
    return Themes[this.themeName + "-" + this.themePalette];
  }

  private getThemeEditorSurveyJSON() {
    const themeEditorSurveyJSON = {
      "clearInvisibleValues": "none",
      elements: [{
        type: "panel",
        state: "expanded",
        title: getLocString("theme.groupGeneral"),
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "dropdown",
                name: "themeName",
                title: getLocString("theme.themeName"),
                descriptionLocation: "hidden",
                choices: ["default", "contrast", "plain", "simple", "blank", "double", "ultra"],
                defaultValue: "default",
                allowClear: false
              },
              {
                type: "panel",
                name: "themeMode",
                title: getLocString("theme.themeMode"),
                elements: [
                  {
                    type: "buttongroup",
                    name: "themeMode",
                    titleLocation: "hidden",
                    choices: [
                      { value: "panels", text: getLocString("theme.themeModePanels") },
                      { value: "lightweight", text: getLocString("theme.themeModeLightweight") }],
                    defaultValue: "panels"
                  },
                  {
                    type: "buttongroup",
                    name: "themePalette",
                    titleLocation: "hidden",
                    choices: [
                      { value: "light", text: getLocString("theme.themePaletteLight") },
                      { value: "dark", text: getLocString("theme.themePaletteDark") }
                    ],
                    defaultValue: "light"
                  }
                ]
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "--sjs-primary-backcolor",
                title: getLocString("theme.primaryColor"),
                descriptionLocation: "hidden",
                defaultValue: "#19b394"
              },
              {
                type: "color",
                name: "--background-dim",
                title: getLocString("theme.backgroundDimColor"),
                descriptionLocation: "hidden",
                defaultValue: "#f3f3f3"
              },
              {
                type: "panel",
                name: "background",
                title: getLocString("theme.backgroundImage"),
                elements: [
                  {
                    type: "fileedit",
                    name: "backgroundImage",
                    titleLocation: "hidden",
                    placeholder: "Browse..."
                  },
                  {
                    type: "buttongroup",
                    name: "backgroundImageFit",
                    titleLocation: "hidden",
                    choices: [
                      { value: "auto", text: getLocString("theme.backgroundImageFitAuto") },
                      { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
                      { value: "cover", text: getLocString("theme.backgroundImageFitCover") }
                    ],
                    defaultValue: "cover"
                  },
                  {
                    type: "spinedit",
                    name: "backgroundOpacity",
                    titleLocation: "left",
                    title: getLocString("theme.backgroundOpacity"),
                    descriptionLocation: "hidden",
                    unit: "%",
                    defaultValue: 100,
                    min: 0,
                    max: 100,
                    step: 5
                  },
                ]
              },
              {
                type: "spinedit",
                name: "panelBackgroundTransparency",
                title: getLocString("theme.panelBackgroundTransparency"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                max: 100,
                step: 5
              },
              {
                type: "spinedit",
                name: "questionBackgroundTransparency",
                title: getLocString("theme.questionBackgroundTransparency"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                max: 100,
                step: 5
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "dropdown",
                name: "--font-family",
                title: getLocString("theme.fontFamily"),
                descriptionLocation: "hidden",
                choices: ["Open Sans", "Arial"],
                defaultValue: "Open Sans",
                allowClear: false
              },
              {
                type: "spinedit",
                name: "--font-size",
                title: getLocString("theme.fontSize"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                step: 5
              },
              {
                type: "expression",
                name: "--sjs-font-size",
                expression: "{--font-size}*16/100+\"px\"",
                visible: false
              },
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "spinedit",
                name: "commonScale",
                title: getLocString("theme.scale"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                step: 5
              },
              {
                type: "expression",
                name: "--base-unit",
                expression: "{commonScale}*8/100+\"px\"",
                visible: false
              },
              {
                type: "spinedit",
                name: "cornerRadius",
                title: getLocString("theme.cornerRadius"),
                descriptionLocation: "hidden",
                unit: "px",
                defaultValue: 4,
                min: 0
              },
              {
                type: "expression",
                name: "--sjs-corner-radius",
                expression: "{cornerRadius}+\"px\"",
                visible: false
              },
            ]
          }
        ]
      }, {
        type: "panel",
        title: getLocString("theme.groupAdvanced"),
        state: "collapsed",
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "--background-dim",
                title: getLocString("theme.backgroundDimColor"),
                descriptionLocation: "hidden",
                defaultValue: "#f3f3f3"
              }, {
                type: "fontSettings",
                name: "surveyTitle",
                title: getLocString("theme.surveyTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  weight: "700",
                  size: 32
                }
              }, {
                type: "fontSettings",
                name: "pageTitle",
                title: getLocString("theme.pageTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  weight: "700",
                  size: 24
                }
              }, {
                type: "fontSettings",
                name: "pageDescription",
                title: getLocString("theme.pageDescription"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "elementSettings",
                name: "questionPanel",
                title: getLocString("theme.questionPanel"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "#ffffff",
                  hovercolor: "#f8f8f8",
                  corner: 4,
                  border: "0 1 2 rgba(0, 0, 0, 0.15)"
                }
              }, {
                type: "expression",
                name: "--background",
                expression: "{questionPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "questionTitle",
                title: getLocString("theme.questionTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }, {
                type: "fontSettings",
                name: "questionDescription",
                title: getLocString("theme.questionDescription"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "elementSettings",
                name: "editorPanel",
                title: getLocString("theme.editorPanel"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "#ffffff",
                  hovercolor: "#f8f8f8",
                  corner: 4,
                  border: "0 1 2 rgba(0, 0, 0, 0.15)"
                }
              }, {
                type: "expression",
                name: "--background-dim-light",
                expression: "{editorPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "editorFont",
                title: getLocString("theme.editorFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  color: "#161616",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [{
              type: "panel",
              title: getLocString("theme.accentBackground"),
              elements: [
                {
                  type: "color",
                  name: "--sjs-primary-backcolor",
                  title: getLocString("theme.primaryDefaultColor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#19b394"
                },
                {
                  type: "color",
                  name: "--sjs-primary-backcolor-dark",
                  title: getLocString("theme.primaryDarkColor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#14A48B"
                },
                {
                  type: "color",
                  name: "--sjs-primary-backcolor-light",
                  title: getLocString("theme.primaryLightColor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#e8f7f4"
                }
              ]
            }, {
              type: "panel",
              title: getLocString("theme.accentForeground"),
              elements: [
                {
                  type: "color",
                  name: "--sjs-primary-forecolor",
                  title: getLocString("theme.primaryForecolor"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#ffffff"
                },
                {
                  type: "color",
                  name: "--sjs-primary-forecolor-light",
                  title: getLocString("theme.primaryForecolorLight"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#ffffff"
                }
              ]
            }]
          }, {
            type: "panel",
            elements: [{
              type: "panel",
              title: getLocString("theme.linesColors"),
              elements: [
                {
                  type: "color",
                  name: "--sjs-border-default",
                  title: getLocString("theme.borderDefault"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#d6d6d6"
                },
                {
                  type: "color",
                  name: "--sjs-border-light",
                  title: getLocString("theme.borderLight"),
                  titleLocation: "left",
                  descriptionLocation: "hidden",
                  defaultValue: "#e8e8e8"
                }
              ]
            }]
          }]
      }]
    };

    // Object.keys(this.themeVariables).forEach(varName => {
    //   themeEditorSurveyJSON.elements[1].elements[0].elements.push(<any>{
    //     type: "text",
    //     inputType: varName.indexOf("-unit") === -1 ? "color" : undefined,
    //     title: editorLocalization.getString("theme." + varName),
    //     name: varName,
    //     defaultValue: this.themeVariables[varName]
    //   });
    // });
    return themeEditorSurveyJSON;
  }
}

function ingectAlpha(baseColor: any, alpha: number): any {
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
