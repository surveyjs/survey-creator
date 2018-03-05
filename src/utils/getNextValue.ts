export function getNextValue(prefix: string, values: string[]) {
  var index = values.reduce((res, val) => {
    if (typeof val === "string" && val.indexOf(prefix) === 0) {
      try {
        var candidate = parseInt(val.substring(prefix.length));
        if (candidate >= res) {
          return candidate + 1;
        }
      } catch (e) {}
    }
    return res;
  }, 1);
  return prefix + index;
}
