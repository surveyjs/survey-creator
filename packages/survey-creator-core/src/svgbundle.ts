export var svgBundle: {V1?: string, V2?: string} = {};

svgBundle.V1 = (<any>require).context("./images-v1", true, /\.svg$/);
svgBundle.V2 = (<any>require).context("./images-v2", true, /\.svg$/);