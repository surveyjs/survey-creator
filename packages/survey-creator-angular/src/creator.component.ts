import { ChangeDetectorRef, Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyContentComponent } from "survey-angular-ui";
import { CreatorBase } from "survey-creator-core";

@Component({
  selector: "svc-creator",
  templateUrl: "./creator.component.html",
  styleUrls: []
})
export class CreatorComponent extends BaseAngular<CreatorBase> {
  @Input() model!: CreatorBase;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
    changeDetectorRef.detach();
  }
  protected getModel(): CreatorBase {
    return this.model;
  }
  public get creator(): CreatorBase {
    return this.model;
  }
  protected override onModelChanged(): void {
    this.changeDetectorRef.detectChanges();
  }
}

AngularComponentFactory.Instance.registerComponent("survey-widget", SurveyContentComponent);
