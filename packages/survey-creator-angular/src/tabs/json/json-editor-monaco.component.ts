import { MonacoJsonEditorModel } from "survey-creator-core";
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-tab-json-editor-monaco",
  templateUrl: "./json-editor-monaco.component.html",
  styles: [":host { display: none; }"]
})
export class MonacoJsonEditorComponent extends BaseAngular<MonacoJsonEditorModel> implements AfterViewInit {
  @Input() model!: MonacoJsonEditorModel;
  @ViewChild("inputEl") inputEl!: ElementRef<HTMLElement>;
  protected getModel(): MonacoJsonEditorModel {
    return this.model;
  }

  public ngAfterViewInit(): void {
    this.model.init(this.inputEl.nativeElement);
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-json-editor-monaco", MonacoJsonEditorComponent);
