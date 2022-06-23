/**
 * Creator options that you can pass in Creator constructor
 */
export interface ICreatorOptions {
  [index: string]: any;
  //Default is true
  showDesignerTab?: boolean;
  //Default is true
  showPreviewTab?: boolean;
  //Default is true
  showJSONEditorTab?: boolean;
  //Default is false
  showLogicTab?: boolean;
  //Default is false
  showEmbeddedSurveyTab?: boolean;
  //Default is false
  showTranslationTab?: boolean;
  //Default is false
  haveCommercialLicense?: boolean;
  //Default is false
  isAutoSave?: boolean;
  //Default is false
  isRTL?: boolean;
  // //Default is false
  // //Deprecated. Use isRTL instead
  // isRTLValue?: boolean;
  //Default is true
  showSurveyTitle?: boolean;
  // //Default is true
  // allowEditSurveyTitle?: boolean;
  //Default is true
  allowEditExpressionsInTextEditor?: boolean;
  // //Default is false
  // showOptions?: boolean;
  //Default is false
  showTitlesInExpressions?: boolean;
  // //Default is false
  // useTabsInElementEditor?: boolean;
  //Default is true
  showErrorOnFailedSave?: boolean;
  //Default is true
  generateValidJSON?: boolean;
  //Default is false
  readOnly?: boolean;
  // //Default is true
  // showPagesInTestSurveyTab?: boolean;
  //Default is true
  showPagesInPreviewTab?: boolean;
  //Default is true
  showSimulatorInTestSurveyTab?: boolean; //undefined
  //Default is "defaultV2"
  themeForPreview?: string;
  //Default is true
  showSimulatorInPreviewTab?: boolean;
  //Default is "auto"
  showDefaultLanguageInPreviewTab?: boolean | string;
  //Default is true
  showInvisibleElementsInPreviewTab?: boolean;
  //Default is false
  showObjectTitles?: boolean;
  //Default is false
  showHeaderInEmptySurvey?: boolean;
  //Default is true
  allowModifyPages?: boolean;
  //Default is settings.propertyGrid.maximumColumnsCount
  maximumColumnsCount?: number;
  //Default is settings.propertyGrid.maximumChoicesCount
  maximumChoicesCount?: number;
  //Default is settings.propertyGrid.maximumRowsCount
  maximumRowsCount?: number;
  //Default is settings.propertyGrid.maximumRateValues
  maximumRateValues?: number;
  //Defulat is -1 (unlimited)
  maxLogicItemsInCondition?: number;
  //Default is true
  allowChangeThemeInPreview?: boolean;
}