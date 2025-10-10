import { Action } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
import { SurveyYAML } from "../../yaml-utils";
import { saveToFileHandler } from "../../utils/html-element-utils";

export class YamlEditorModel extends JsonEditorBaseModel {
  protected getText(): string {
    try {
      return this.creator.yamlText;
    } catch (error) {
      return "# Error converting to YAML: " + (error as Error).message;
    }
  }
  
  protected setText(val: string): void {
    try {
      this.creator.yamlText = val;
      this.isJSONChanged = true;
    } catch (error) {
      // Don't set the text if there's an error, just mark as changed
      this.isJSONChanged = true;
    }
  }

  public processErrors(text: string): void {
    const errors: any[] = [];
    try {
      SurveyYAML.parse(text);
      this.setErrors([]);
    } catch (error) {
      errors.push({
        position: { start: 0, end: text.length },
        text: (error as Error).message
      });
      this.setErrors(errors);
    }
  }
}

export class TabYamlEditorPlugin extends TabJsonEditorBasePlugin implements ICreatorPlugin {
  public static id = "yaml-editor";
  private yamlModel: YamlEditorModel;

  constructor(creator: SurveyCreatorModel) {
    super(creator);
    this.yamlModel = new YamlEditorModel(creator);
  }

  public get model(): YamlEditorModel {
    return this.yamlModel;
  }

  public activate(): void {
    this.model.onPluginActivate();
  }

  public deactivate(): boolean {
    if (this.model.isJSONChanged) {
      this.model.processErrors(this.model.text);
      if (!this.model.hasErrors) {
        this.creator.yamlText = this.model.text;
      }
      this.model.isJSONChanged = false;
    }
    return true;
  }

  public createActions(): Action[] {
    const actions: Action[] = [];

    // Export to YAML file action
    const exportAction = new Action({
      id: "svd-yaml-export",
      iconName: "icon-download",
      iconSize: "auto",
      locTitleName: "ed.yamlExportButton",
      locTooltipName: "ed.yamlExportButton",
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.exportToYAMLFile("survey.yml");
      }
    });
    actions.push(exportAction);

    // Import from YAML file action
    const importAction = new Action({
      id: "svd-yaml-import",
      iconName: "icon-load",
      iconSize: "auto",
      locTitleName: "ed.yamlImportButton",
      locTooltipName: "ed.yamlImportButton",
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        this.importFromYAMLFileDOM();
      }
    });
    actions.push(importAction);

    // Copy YAML to clipboard action
    const copyAction = new Action({
      id: "svd-yaml-copy",
      iconName: "icon-copy",
      iconSize: "auto",
      locTitleName: "ed.copyToClipboard",
      locTooltipName: "ed.copyToClipboard",
      mode: "small",
      component: "sv-action-bar-item",
      action: () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(this.model.text);
        }
      }
    });
    actions.push(copyAction);

    return actions;
  }

  public exportToYAMLFile(fileName: string): void {
    if (this.model) {
      const yamlBlob = new Blob([this.model.text], { type: "text/yaml" });
      saveToFileHandler(fileName, yamlBlob);
    }
  }

  public importFromYAMLFile(file: File, callback?: (yaml: string) => void): void {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const yamlText = fileReader.result as string;
      if (this.model) {
        this.model.text = yamlText;
        this.model.isJSONChanged = true;
      }
      if (callback) callback(yamlText);
    };
    fileReader.readAsText(file);
  }

  public importFromYAMLFileDOM(): void {
    if (typeof document === "undefined") return;
    
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = ".yaml,.yml";
    inputElement.style.display = "none";
    
    inputElement.onchange = () => {
      if (inputElement.files && inputElement.files.length > 0) {
        this.importFromYAMLFile(inputElement.files[0]);
        inputElement.value = ""; // Reset for subsequent imports
      }
    };
    
    document.body.appendChild(inputElement);
    inputElement.click();
    document.body.removeChild(inputElement);
  }
}