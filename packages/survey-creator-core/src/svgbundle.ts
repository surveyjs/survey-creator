// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import iconsV1Data from "iconsV1";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import iconsV2Data from "iconsV2";

export var svgBundle: {V1?: string, V2?: string} = {};

export const iconsV1: { [index:string]: string } = iconsV1Data;
export const iconsV2: { [index:string]: string } = iconsV2Data;