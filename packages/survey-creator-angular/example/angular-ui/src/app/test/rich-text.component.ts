import { Component, ViewEncapsulation } from "@angular/core";
import { Serializer } from "survey-core";
import { RichText } from "survey-core/rich-text";
import { TestDefaultComponent } from "./default.component";

const richStringAreas = ["designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey", "translation-tab:target-survey", "matrix-cell-question-popup-editor"];

@Component({
  selector: "test-rich-text",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestRichTextComponent extends TestDefaultComponent {
  protected createCreator(): void {
    super.createCreator();
    Serializer.findProperty("survey", "description").type = "html";
    Serializer.findProperty("page", "description").type = "html";
    Serializer.findProperty("question", "title").type = "inlinehtml";
    Serializer.findProperty("itemvalue", "text").type = "inlinehtml";
    this.creator.registerRichTextEditor(RichText);
    this.creator.onSurveyInstanceCreated.add((_, options) => {
      if (richStringAreas.indexOf(options.area) > -1) {
        options.survey.onTextMarkdown.add(RichText.renderStringHandler);
      }
    });
  }
}
