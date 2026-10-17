export interface IExpressionResponse {
  expression: string;
  explanation?: string;
}

const fenceRegex = /^```[a-zA-Z]*[ \t]*\r?\n?([\s\S]*?)\r?\n?```$/;

// null: the text is a JSON object with neither an expression nor an explanation
function fromJson(text: string): IExpressionResponse | null | undefined {
  if (!text || text[0] !== "{") return undefined;
  let data: any;
  try {
    data = JSON.parse(text);
  } catch{
    return undefined;
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return undefined;
  const expression = typeof data.expression === "string" ? data.expression.trim() : "";
  const explanation = typeof data.explanation === "string" ? data.explanation.trim() : "";
  if (!expression && !explanation) return null;
  // an empty expression with an explanation is the AI saying why it has none - still an empty
  // result, but one the assistant can explain
  const res: IExpressionResponse = { expression: expression };
  if (!!explanation) res.explanation = explanation;
  return res;
}

function isOneLine(text: string): boolean {
  return !!text && text.indexOf("\n") < 0 && text.indexOf("\r") < 0;
}

// Reads the answer of a model: the JSON the system prompt asks for (also inside a ```json fence,
// extra keys ignored); a fenced block holding only the expression; a line "Expression: ..."; or a
// bare one-line expression. Anything else is undefined - an empty result; so is JSON whose expression
// is empty, except that its explanation is kept (expression ""). The expression is trimmed and never
// "repaired": the check judges it as it came.
export function parseExpressionResponse(text: string): IExpressionResponse | undefined {
  if (typeof text !== "string") return undefined;
  const trimmed = text.trim();
  if (!trimmed) return undefined;
  const json = fromJson(trimmed);
  if (json !== undefined) return json || undefined;
  const fence = trimmed.match(fenceRegex);
  if (!!fence) {
    const inner = fence[1].trim();
    const fencedJson = fromJson(inner);
    if (fencedJson !== undefined) return fencedJson || undefined;
    return isOneLine(inner) ? { expression: inner } : undefined;
  }
  const lines = trimmed.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].trim().match(/^expression\s*:\s*(.+)$/i);
    if (!!match) {
      const expression = match[1].trim().replace(/^`(.*)`$/, "$1").trim();
      return !!expression ? { expression: expression } : undefined;
    }
  }
  return isOneLine(trimmed) ? { expression: trimmed } : undefined;
}
