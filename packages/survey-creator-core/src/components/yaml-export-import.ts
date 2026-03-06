import { Action } from "survey-core";
import { SurveyYAML } from "../yaml-utils";

/**
 * Creates an action for exporting survey to YAML file
 */
export function createExportYAMLAction(action: () => void, isInEditor: boolean = false): Action {
  return new Action({
    id: "svc-yaml-export",
    iconName: "icon-download",
    iconSize: "auto",
    locTitleName: "ed.yamlExportButton",
    locTooltipName: "ed.yamlExportButton",
    mode: isInEditor ? "large" : "small",
    component: "sv-action-bar-item",
    action: action
  });
}

/**
 * Creates an action for importing survey from YAML file
 */
export function createImportYAMLAction(action: () => void, needSeparator: boolean, isInEditor: boolean = false): Action {
  return new Action({
    id: "svc-yaml-import",
    iconName: "icon-load",
    iconSize: "auto",
    locTitleName: "ed.yamlImportButton",
    locTooltipName: "ed.yamlImportButton",
    mode: isInEditor ? "large" : "small",
    component: "sv-action-bar-item",
    needSeparator: needSeparator,
    action: action
  });
}

/**
 * Helper class for YAML file operations
 */
export class YAMLFileHelper {
  /**
   * Export object to YAML file
   */
  public static exportToYAMLFile(obj: any, fileName: string): void {
    if (typeof window === "undefined") return;
    
    try {
      const yamlData = SurveyYAML.stringify(obj);
      const blob = new Blob([yamlData], { type: "text/yaml" });
      
      if ((window.navigator as any)["msSaveOrOpenBlob"]) {
        (window.navigator as any)["msSaveBlob"](blob, fileName);
      } else {
        const elem = window.document.createElement("a");
        elem.href = window.URL.createObjectURL(blob);
        elem.download = fileName;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    } catch (error) {
      throw new Error(`Failed to export YAML file: ${(error as Error).message}`);
    }
  }

  /**
   * Import YAML file and parse to object
   */
  public static importFromYAMLFile(file: File): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const yamlString = event.target?.result as string;
          const obj = SurveyYAML.parse(yamlString);
          resolve(obj);
        } catch (error) {
          reject(new Error(`Failed to parse YAML file: ${(error as Error).message}`));
        }
      };
      
      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };
      
      reader.readAsText(file);
    });
  }

  /**
   * Create file input element for YAML import
   */
  public static createFileInput(onFileSelected: (file: File) => void): HTMLInputElement {
    if (typeof document === "undefined") {
      throw new Error("Document is not available");
    }
    
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = ".yaml,.yml";
    inputElement.style.display = "none";
    
    inputElement.onchange = () => {
      if (inputElement.files && inputElement.files.length > 0) {
        onFileSelected(inputElement.files[0]);
        inputElement.value = ""; // Reset for subsequent imports
      }
    };
    
    return inputElement;
  }
}