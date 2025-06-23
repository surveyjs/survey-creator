import { MatrixDropdownRowModel, MatrixDynamicRowModel, SurveyModel, settings } from "survey-core";
import { CreatorPresetEditableBase } from "../src/presets/presets-editable-base";
import { CreatorPresetBase } from "../src/presets-creator/presets-base";
import { QuestionMatrixDynamicModel } from "survey-core";

// Mock settings object
jest.mock("survey-core", () => {
  const originalModule = jest.requireActual("survey-core");
  return {
    ...originalModule,
    settings: {
      ...originalModule.settings,
      showDialog: jest.fn()
    }
  };
});

describe("CreatorPresetEditableBase", () => {
  let base: CreatorPresetEditableBase;
  let mockPreset: CreatorPresetBase;
  let mockRow: MatrixDynamicRowModel;
  let mockMatrix: QuestionMatrixDynamicModel;
  let mockRootElement: HTMLElement;
  let mockDetailPanel: SurveyModel;
  let mockShowDialog: jest.SpyInstance;

  beforeEach(() => {
    // Create mock preset
    mockPreset = {
      getPath: () => "test-preset"
    } as CreatorPresetBase;

    // Create mock detail panel
    mockDetailPanel = new SurveyModel({
      questions: [
        {
          type: "text",
          name: "question1",
          isRequired: true
        }
      ]
    });

    // Create mock matrix
    mockMatrix = new QuestionMatrixDynamicModel("matrix");
    mockMatrix.fromJSON({
      detailElements: [{ type: "text", name: "question1", isRequired: true }]
    });
    mockMatrix.value = [{ question1: "initial value" }];
    mockRow = mockMatrix.visibleRows[0] as any;

    // Create mock root element
    mockRootElement = document.createElement("div");

    // Create spy for settings.showDialog
    mockShowDialog = jest.spyOn(settings, "showDialog");

    // Create instance of CreatorPresetEditableBase
    base = new CreatorPresetEditableBase(mockPreset);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("showDetailPanelInPopup", () => {
    it("should hide detail panel and create popup with survey", () => {
      // Act
      base["showDetailPanelInPopup"](mockMatrix, mockRow, mockRootElement);

      // Assert
      expect(mockRow.isDetailPanelShowing).toBeFalsy();
      expect(mockShowDialog).toHaveBeenCalledWith(
        expect.objectContaining({
          componentName: "survey",
          cssClass: "svc-property-editor svc-creator-popup",
          title: "Detail",
          displayMode: "popup"
        }),
        mockRootElement
      );
    });

    it("should create survey with correct configuration", () => {
      // Act
      base["showDetailPanelInPopup"](mockMatrix, mockRow, mockRootElement);

      // Assert
      const dialogOptions = mockShowDialog.mock.calls[0][0];
      const survey = dialogOptions.data.survey;

      expect(survey).toBeInstanceOf(SurveyModel);
      expect(survey.fitToContainer).toBeFalsy();
      expect(survey.showNavigationButtons).toBeFalsy();
      expect(survey.data).toEqual(mockMatrix.value[0]);
    });

    it("should update row value when applying valid data", () => {
      // Arrange
      const newValue = { question1: "new value" };
      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      // Act
      base["showDetailPanelInPopup"](mockMatrix, mockRow, mockRootElement);
      const survey = mockShowDialog.mock.calls[0][0].data.survey;
      survey.data = newValue;

      // Assert
      expect(onApplyCallback).toBeDefined();
      expect(onApplyCallback!()).toBeTruthy();
      expect(mockMatrix.value[0]).toEqual(newValue);
    });

    it("should not update row value when survey validation fails", () => {
      // Arrange
      let onApplyCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onApplyCallback = options.onApply;
        return { dispose: jest.fn() };
      });

      // Act
      base["showDetailPanelInPopup"](mockMatrix, mockRow, mockRootElement);
      const survey = mockShowDialog.mock.calls[0][0].data.survey;
      survey.data = { question1: "" }; // Empty value will fail validation

      // Assert
      expect(onApplyCallback).toBeDefined();
      expect(onApplyCallback!()).toBeFalsy();
      expect(mockMatrix.value[0]).toEqual({ question1: "initial value" });
    });

    it("should handle cancel action", () => {
      // Arrange
      let onCancelCallback: (() => boolean) | undefined;

      mockShowDialog.mockImplementation((options) => {
        onCancelCallback = options.onCancel;
        return { dispose: jest.fn() };
      });

      // Act
      base["showDetailPanelInPopup"](mockMatrix, mockRow, mockRootElement);

      // Assert
      expect(onCancelCallback).toBeDefined();
      expect(onCancelCallback!()).toBeTruthy();
    });
  });
});