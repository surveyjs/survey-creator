import { DomDocumentHelper } from "./utils/global_variables_utils";

export class CreatorDomHelper {
  private static inputFileElement: HTMLInputElement;
  public static openFileDialog(callback: (file: File) => void, accept: string = ""): void {
    if (!DomDocumentHelper.isAvailable) return;
    if (!this.inputFileElement) {
      this.inputFileElement = DomDocumentHelper.getDocument().createElement("input");
      this.inputFileElement.type = "file";
      this.inputFileElement.style.display = "none";
      this.inputFileElement.onchange = () => {
        if (this.inputFileElement.files.length < 1) return;
        callback(this.inputFileElement.files[0]);
        this.inputFileElement.value = "";
      };
    }
    this.inputFileElement.accept = accept;
    this.inputFileElement.click();
  }
}