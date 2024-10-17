
export function trimEmptyFields(object: { [index: string]: string }): void {
  Object.keys(object).forEach(key => {
    if (object[key] === undefined || object[key] === null) {
      delete object[key];
    }
  });
}

export function assign(...inputs: Array<any>) {
  const objects = (inputs || []).filter(obj => !!obj);
  if (objects.length <= 1) {
    return;
  }
  if (objects.length == 2) {
    Object.keys(objects[1]).forEach(key => objects[0][key] = objects[1][key]);
    trimEmptyFields(inputs[0]);
    return;
  }
  for (let i = 1; i < objects.length; i++) {
    assign(objects[0], objects[i]);
  }
}