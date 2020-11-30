export var __assign =
  Object["assign"] ||
  function(target) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) target[p] = s[p];
    }
    return target;
  };

export function __extends(thisClass, baseClass) {
  for (var p in baseClass)
    if (baseClass.hasOwnProperty(p)) thisClass[p] = baseClass[p];
  function __() {
    this.constructor = thisClass;
  }
  thisClass.prototype =
    baseClass === null
      ? Object.create(baseClass)
      : ((__.prototype = baseClass.prototype), new __());
}

export var __spreadArrays = function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}
