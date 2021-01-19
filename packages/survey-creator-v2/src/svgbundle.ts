export var SvgBundleViewModel: any;
if (!!document) {
  var svgTemplate = require("./svgbundle.html");
  var templateHolder = document.createElement("div");
  templateHolder.style.display = "none";
  templateHolder.innerHTML = svgTemplate;
  document.head.appendChild(templateHolder);
}
