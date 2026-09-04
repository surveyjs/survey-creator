// "pages[0].elements[1].visibleIf" -> ["pages", 0, "elements", 1, "visibleIf"]
export function parseLintPath(path: string): Array<string | number> {
  const res: Array<string | number> = [];
  if (!path) return res;
  path.split(".").forEach(part => {
    if (!part) return;
    const bracket = part.indexOf("[");
    if (bracket < 0) {
      res.push(part);
      return;
    }
    const name = part.substring(0, bracket);
    if (!!name) res.push(name);
    const indexes = part.substring(bracket).match(/\[(\d+)\]/g) || [];
    indexes.forEach(entry => res.push(parseInt(entry.substring(1, entry.length - 1), 10)));
  });
  return res;
}
