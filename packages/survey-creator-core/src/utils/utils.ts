export function roundTo2Decimals(number: number): number {
  return Math.round(number * 100) / 100;
}

const endLineRegExp = new RegExp("(\\r\\n|\\n|\\r)", "gm");
export function clearNewLines(text: string) {
  return text.replace(endLineRegExp, "");
}

export function copyObject(dst: any, src: any) {
  for (let key in src) {
    let source = src[key];
    if (typeof source === "object") {
      source = {};
      copyObject(source, src[key]);
    }
    dst[key] = source;
  }
}
export function copyCssClasses(dest: any, source: any) {
  if (!source) return;
  if (typeof source === "string" || source instanceof String) {
    dest["root"] = source;
  } else {
    copyObject(dest, source);
  }
}

export function capitalize(str: string): string {
  if (!str) return str;
  str = str.replace(/[\s]+/g, " ");
  str = str.replace(/([\s]|^)(\S)/g, (_, p1, p2) => {
    return p1 + p2.toUpperCase();
  });
  return str;
}

export function notShortCircuitAnd(...args: Array<boolean>): boolean {
  return args.every((val) => val === true);
}

export const imageMimeTypes = "image/png, image/gif, image/jpeg, image/apng, image/avif, image/svg+xml, image/webp";

export function getAcceptedTypesByContentMode(contentMode: string) {
  if (["auto", "image"].indexOf(contentMode) > -1) {
    return imageMimeTypes;
  } else if (contentMode == "video") {
    return "video/*";
  } else {
    return "";
  }
}

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

export function getOS(): "Mac OS" | "iOS" | "Windows" | "Android" | "Linux" {
  const userAgent = window.navigator.userAgent,
    platform = (window.navigator as any)?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

export function cssVariablesToString(cssVariables: { [key: string]: string } | null | undefined): string {
  if (!cssVariables) {
    return "";
  }
  return Object.keys(cssVariables)
    .map(key => `${key}: ${cssVariables[key]}`)
    .join("; ");
}