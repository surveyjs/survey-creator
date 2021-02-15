export interface IJsonEditorModel {
  isJSONChanged: boolean;
  text: string;
  onEditorActivated(): void;
  processErrors(text: string): void;
  readOnly: boolean;
}