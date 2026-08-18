// The collaboration strip above the tabbed menu: its model, the participant
// avatar action, the Version History timeline and the shared types.
//
// There is no plugin here - the strip is contributed by the feature's
// `CollaborationPlugin` (`../index`), which builds `CollabBarModel`, publishes
// it as `creator.collabBar` and feeds it the presence roster.
export * from "./floating-panel/floating-panel-geometry";
export * from "./floating-panel/floating-panel-model";
export * from "./bar-types";
export * from "./bar-model";
export * from "./collab-row-action";
export * from "./version-history-model";
