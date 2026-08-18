// Public surface of the collaboration feature, shipped as its own bundle so
// that a creator without collaboration pays nothing for it (neither JS nor
// CSS). Same split as ui-preset-editor: everything here reaches the creator
// through the "survey-creator-core" package name, which the bundle marks as
// external - so there is exactly one SurveyCreatorModel and one
// UndoRedoArrayAction at runtime (the stack guard compares with instanceof).
export * from "../plugins/collaboration";

import { checkLibraryVersion } from "survey-core";
export let Version: string;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Version = `${process.env.VERSION}`;
checkLibraryVersion(Version, "survey-creator-core-collaboration");
