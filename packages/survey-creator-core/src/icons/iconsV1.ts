import { getIconsData } from "./icons";

export default getIconsData((<any>require).context("../images-v1", true, /\.svg$/));