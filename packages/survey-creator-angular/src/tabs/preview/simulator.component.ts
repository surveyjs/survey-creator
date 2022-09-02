import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SurveySimulatorModel } from "survey-creator-core";

@Component({
  selector: "survey-simulator",
  templateUrl: "./simulator.component.html",
  styles: [":host { display: none; }"]
})
export class SimulatorComponent extends BaseAngular<SurveySimulatorModel> {
  @Input() model!: SurveySimulatorModel;
  protected getModel(): SurveySimulatorModel {
    return this.model;
  }
  public get simulatorFrame(): any {
    return this.model.simulatorFrame;
  }
  activateZoom() {
    if (this.model.device !== "desktop") {
      this.model.activateZoom();
    }
  }
  deactivateZoom() {
    if (this.model.device !== "desktop") {
      this.model.deactivateZoom();
    }
  }
}