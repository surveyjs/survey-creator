import { getIconsData } from "./icons";

export default getIconsData((<any>require).context("../images-v2", true, /\.svg$/));