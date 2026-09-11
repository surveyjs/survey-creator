// The tokens of a currency pattern: the number, the currency symbol and the position of the
// minus sign in negative amounts.
const currencyNumberToken = "#";
const currencySignToken = "@";
const currencyNegativeToken = "-";

// Currency patterns differ between regions only in where the abstract currency sign sits, so a
// resolved pattern on its own reads the same in almost every region. The sample amount that
// follows it makes the difference visible and shows what the pattern produces. The caller passes
// the values the pattern is rendered with - resolved the way the mask resolves them - so that the
// example shows what the survey renders.
export function getCurrencyPatternPlaceholder(pattern: string, decimalSeparator: string,
  thousandsSeparator: string, symbol: string): string {
  if (!pattern) return "";
  const amount = "1" + (thousandsSeparator || "") + "234" + (decimalSeparator || "") + "56";
  // An empty symbol leaves the number bare when the pattern places a symbol, as the mask does; a
  // pattern without the symbol token is literal text and renders as it is.
  if (!symbol && pattern.indexOf(currencySignToken) > -1) return pattern + " (" + amount + ")";
  // All tokens are replaced in one pass over the pattern: a separator can be "@" and a symbol
  // can contain "#" or "-", so the text inserted for one token must never be read as another.
  // The example is a positive amount, so the minus sign position renders nothing.
  const tokens = { [currencyNumberToken]: amount, [currencySignToken]: symbol || "", [currencyNegativeToken]: "" };
  const example = pattern.replace(/[#@-]/g, (token: string): string => tokens[token]);
  return pattern + " (" + example + ")";
}
