import { TestBed } from "@angular/core/testing";
import { SurveyCreatorModel, TranslationSideBySide } from "survey-creator-core";
import { SurveyCreatorModule } from "../src/angular-ui.module";
import { TranslationTabComponent } from "../src/tabs/translation/translation.component";

const json = {
  pages: [
    {
      name: "page1",
      elements: [{ type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } }]
    }
  ]
};

describe("translation tab", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SurveyCreatorModule] }).compileComponents();
  });

  it("side-by-side: the target pane is registered once a target language is selected", async () => {
    const creator = new SurveyCreatorModel({ showTranslationTab: true, translationMode: "sideBySide" });
    creator.JSON = json;
    creator.activeTab = "translation";
    const model = <TranslationSideBySide>(<any>creator.getPlugin("translation")).model;
    expect(model instanceof TranslationSideBySide).toBeTrue();
    // Start without a target language: no target pane in the DOM.
    model.targetLocale = "";
    expect(model.targetSurvey).toBeFalsy();
    const spy = spyOn(model, "setTargetScrollElement").and.callThrough();

    const fixture = TestBed.createComponent(TranslationTabComponent);
    // The template renders into an embedded view next to the host element, not inside it.
    const query = (selector: string): Element | null => (<Document>(<Element>fixture.nativeElement).getRootNode()).querySelector(selector);
    fixture.componentInstance.model = model;
    fixture.detectChanges();
    await fixture.whenStable();
    expect(query(".st-side-by-side__source")).toBeTruthy();
    expect(query(".st-side-by-side__target")).toBeFalsy();
    const registeredElements = (): Array<HTMLElement> => spy.calls.allArgs().map(args => args[0]).filter(el => !!el);
    expect(registeredElements().length).toBe(0);

    // The model renders the pane through its own change detection - no external
    // detectChanges: this is the path the running application takes.
    model.targetLocale = "de";
    expect(model.targetSurvey).toBeTruthy();
    await new Promise(resolve => setTimeout(resolve, 100));
    await fixture.whenStable();
    const targetPane = query(".st-side-by-side__target");
    expect(targetPane).toBeTruthy();
    expect(registeredElements().length).toBe(1);
    expect(registeredElements()[0]).toBe(<HTMLElement>targetPane);

    // Clearing the language removes the pane and detaches its registration.
    model.targetLocale = "";
    await new Promise(resolve => setTimeout(resolve, 100));
    await fixture.whenStable();
    expect(query(".st-side-by-side__target")).toBeFalsy();
    expect(spy.calls.mostRecent().args[0]).toBeFalsy();

    fixture.destroy();
    creator.dispose();
  });
});
