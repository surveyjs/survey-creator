import {
  FilterAIFeature, IExpressionResponse, buildFilterAIContext, buildFilterAIInstruction, buildFilterAISystemPrompt,
} from "survey-core";
import { IExpressionAssistantFeature } from "./expression-assistant";

// A Filter Control preset's expression for the expression assistant. Its variables are the fields
// of the records the control filters, not the survey's questions, so the AI part is survey-core's
// filter one - the same the control's own AI uses: the control's fields, operators and choices as the
// context, the filter prompt and answer format, and the filter check (an answer in the fields form is
// checked as conditions, any other only for its syntax). The survey linter does not apply.
// control: the QuestionFilterModel the preset belongs to.
export function createFilterExpressionFeature(control: any): IExpressionAssistantFeature {
  const feature = new FilterAIFeature(() => control.getFilterFields());
  return {
    createRequest: (action: "generate" | "modify", prompt: string, expression: string) => {
      const context = buildFilterAIContext(control);
      return {
        feature: feature,
        instruction: buildFilterAIInstruction(action, prompt, expression),
        context: context,
        systemPrompt: buildFilterAISystemPrompt(context),
        buildSystemPrompt: buildFilterAISystemPrompt,
        // the event's own fields (FilterAIRequestEvent): the expression the request is about and the control
        getFields: (retryOf?: IExpressionResponse) => ({ expression: !!retryOf ? retryOf.expression : expression || "", question: control }),
      };
    },
    check: (expression: string) => feature.validate({ expression: expression, title: "", explanation: "" }, "generate"),
  };
}
