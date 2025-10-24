import { Component, Input } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { QuestionTextModel } from "survey-core";
import { CreatorModelComponent } from "../src/creator-model.component";

@Component({
  selector: "sv-ng-test-base",
  template: ""
})
class TestBase extends CreatorModelComponent<QuestionTextModel> {
  @Input() input1: string = "";
  public model: QuestionTextModel;
  modelChangedLog: string = "";
  protected createModel(): void {
    this.model = new QuestionTextModel("test");
  }
  protected getPropertiesToTrack(): string[] {
    return ["input1"];
  }
  protected getModel(): QuestionTextModel {
    return this.model;
  }
  protected override onModelChanged(): void {
    this.modelChangedLog += "->modelChanged";
  }

}

describe("base tests", () => {
  it("check base makeBaseElementAngular behavior", () => {
    expect(false).toBe(false);
  });
  it("check CreatorModelComponent behavior", () => {
    const fixture = TestBed.createComponent(TestBase);
    const component = fixture.componentInstance;
    expect(component.modelChangedLog).toBe("");
    expect(!!component.model).toBe(false);
    fixture.detectChanges();
    let firstModelCreated = component.model;
    expect(component.modelChangedLog).toBe("->modelChanged");
    expect(!!firstModelCreated).toBe(true);
    expect(firstModelCreated["onPropertyValueCoreChanged"].length).toBe(1);
    component.input1 = "test";
    fixture.detectChanges();
    let secondModelCreated = component.model;
    expect(component.modelChangedLog).toBe("->modelChanged->modelChanged");
    expect(!!secondModelCreated).toBe(true);
    expect(secondModelCreated !== firstModelCreated).toBe(true);
    expect(secondModelCreated["onPropertyValueCoreChanged"].length).toBe(1);
    expect(firstModelCreated["onPropertyValueCoreChanged"]).toBe(undefined);
    component.input1 = "test";
    fixture.detectChanges();
    expect(component.modelChangedLog).toBe("->modelChanged->modelChanged");
    expect(!!component.model).toBe(true);
    expect(component.model === secondModelCreated).toBe(true);
  });
});