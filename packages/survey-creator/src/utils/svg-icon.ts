import * as ko from "knockout";

export var SVGIconBinding;

ko.components.register("svg-icon", {
    viewModel: {
        createViewModel: (params, componentInfo) => {
        ko.computed(() => {
            var size = ko.unwrap(params.size);
            var width = ko.unwrap(params.width);
            var height = ko.unwrap(params.height);
            var svgElem: any = componentInfo.element.childNodes[0];
            svgElem.style.width = (size || width || 16) + "px";
            svgElem.style.height = (size || height || 16) + "px";
            var node: any = svgElem.childNodes[0];
            node.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            "#" + ko.unwrap(params.iconName)
            );
        });
        },
    },
    template: "<svg class='svd-svg-icon'><use></use></svg>",
});
  
  