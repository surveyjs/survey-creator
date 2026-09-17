import "./variables-viewer.scss";

// The content of the read-only variables dialog (the Preview toolbar's View button without a preset
// definition): a plain read-only textarea. The values are fixed for the life of the dialog, so the
// model is a plain object and not a Base - there is nothing for a renderer to subscribe to.
export class VariablesViewerModel {
  constructor(public readonly text: string, public readonly ariaLabel: string) {
  }
}
