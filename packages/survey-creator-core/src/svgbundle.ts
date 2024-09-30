export var svgBundle;

svgBundle.V1 = getRequireContext("./images");
svgBundle.V2 = getRequireContext("./images-v2");

function getRequireContext(path) {
  return (<any>require).context(path, true, /\.svg$/);
}