
import { AceJsonEditorModel, TabJsonEditorAcePlugin } from "survey-creator-core";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";

@Component({
  selector: "svc-tab-json-editor-ace",
  templateUrl: "./json-editor-ace.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class AceJsonEditorComponent extends BaseAngular<AceJsonEditorModel> {
  @Input() model!: AceJsonEditorModel;
  @ViewChild("inputEl") inputEl!: ElementRef<HTMLElement>;
  protected getModel(): AceJsonEditorModel {
    return this.model;
  }

  protected override afterViewInit(): void {
    //todo fix ts
    this.model.init((<any>window).ace.edit(
      this.inputEl.nativeElement
    ));
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-json-editor-ace", AceJsonEditorComponent);