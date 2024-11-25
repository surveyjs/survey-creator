export var svgBundle: {V1?: string, V2?: string} = {};

function getIconsData(path) {
  const icons: { [index: string]: string } = {};
  path.keys().forEach((key: string) => {
    icons[key.substring(2, key.length - 4).toLowerCase()] = path(key);
  });
  return icons;
}

export const iconsV1 = getIconsData((<any>require).context("./images-v1", true, /\.svg$/));
export const iconsV2 = getIconsData((<any>require).context("./images-v2", true, /\.svg$/));
