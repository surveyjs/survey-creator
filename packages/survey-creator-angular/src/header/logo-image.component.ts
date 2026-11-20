import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { CreatorModelComponent } from "../creator-model.component";
import { SurveyModel } from "survey-core";
import { SurveyCreatorModel, LogoImageViewModel } from "survey-creator-core";
import { AngularComponentFactory, SurveyBaseProviders } from "survey-angular-ui";

@Component({
  selector: "svc-logo-image",
  templateUrl: "./logo-image.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class CreatorLogoImageComponent extends CreatorModelComponent<LogoImageViewModel> {
  @Input() data!: SurveyCreatorModel;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>;
  public model!: LogoImageViewModel;
  protected createModel(): void {
    this.model = new LogoImageViewModel(this.creator, null as any);
  }
  protected getModel(): LogoImageViewModel {
    return this.model;
  }
  protected override getPropertiesToTrack(): string[] {
    return ["data"];
  }
  public get creator(): SurveyCreatorModel {
    return this.data;
  }
  public get survey(): SurveyModel {
    return this.creator.survey;
  }
  onChangeHandler = (): void => {
    this.detectChanges();
  };
  override ngOnInit() {
    super.ngOnInit();
    this.survey.locLogo.onStringChanged.add(this.onChangeHandler);
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
    this.survey.locLogo.onStringChanged.remove(this.onChangeHandler);
  }
  protected override afterViewInit(): void {
    this.model.root = this.container.nativeElement;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-logo-image", CreatorLogoImageComponent);