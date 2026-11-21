// An object variable's value as JSON writes it ({ users: { tier } }): a plain object, not a Date or a class
// instance, whose keys are fields of the variable.
export function isPlainRecord(val: any): boolean {
  if (!val || typeof val !== "object" || Array.isArray(val)) return false;
  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}
// A copy of the plain objects and arrays in val; any other value is kept by reference.
export function copyPlainValue(val: any): any {
  if (Array.isArray(val)) return val.map(item => copyPlainValue(item));
  if (!isPlainRecord(val)) return val;
  const res: any = {};
  // "__proto__" would replace the copy's prototype; survey-core ignores a variable of that name too
  Object.keys(val).forEach(key => { if (key !== "__proto__") res[key] = copyPlainValue(val[key]); });
  return res;
}
