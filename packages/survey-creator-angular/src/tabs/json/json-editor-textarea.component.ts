import { TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "survey-creator-core";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-tab-json-editor-textarea",
  templateUrl: "./json-editor-textarea.component.html",
  styles: [":host { display: none; }"]
})
export class TextareaJsonEditorComponent extends BaseAngular<TextareaJsonEditorModel> implements OnInit {
  @Input() model!: TextareaJsonEditorModel;
  @ViewChild("inputEl") inputEl!: ElementRef<HTMLTextAreaElement>;
  protected getModel(): TextareaJsonEditorModel {
    return this.model;
  }
  public override ngOnInit(): void {
    this.model.canShowErrors = false;
    super.ngOnInit();
  }
  public ngAfterViewInit() {
    this.model.textElement = this.inputEl.nativeElement;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-json-editor-textarea", TextareaJsonEditorComponent);