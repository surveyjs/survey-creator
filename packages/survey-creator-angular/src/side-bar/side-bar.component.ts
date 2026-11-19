import { SidebarModel } from "survey-creator-core";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { BaseAngular, SurveyBaseProviders } from "survey-angular-ui";

@Component({
  selector: "svc-side-bar",
  templateUrl: "./side-bar.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class SidebarComponent extends BaseAngular<SidebarModel> {
  @Input() model!: SidebarModel;
  @ViewChild("container") container!: ElementRef<HTMLElement>;
  protected getModel(): SidebarModel {
    return this.model;
  }

  override ngOnDestroy(): void {
    this.model.resetResizeManager();
    super.ngOnDestroy();
  }
  protected override afterViewInit(): void {
    this.model.initResizeManager(this.container.nativeElement as HTMLDivElement);
  }
}