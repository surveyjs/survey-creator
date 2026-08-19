// Collaboration carries its own English strings instead of adding ~55 keys to
// src/localization/english.ts. Two reasons: the feature ships as a separate
// bundle, so its text has no business sitting in the creator's default one; and
// a key added to english.ts is a key 36 locale files are expected to follow.
//
// Localization comes back later. The keys below are exactly the "ed.*" names
// the strings would get, so that migration is `getCollabString(key)` ->
// `editorLocalization.getString("ed." + key)` and nothing else.
//
// Strings that the creator already owns (tab names, question type names, locale
// names) are still read through editorLocalization at their call sites - those
// keys exist in core with or without this feature.
export const collaborationStrings: { [index: string]: string } = {
  collabLicense: "To use Collaborative Form Editing in your application, you need to add this feature to your existing SurveyJS license. <a href='https://surveyjs.io/pricing#collaboration' target='_blank'>View pricing</a> for details or contact us at <a href='mailto:info@surveyjs.io'>info@surveyjs.io</a> to get access.",
  collabMenu: "Collaboration",
  collabShowVersionHistory: "Show Version History",
  collabRoom: "Room: {0}",
  collabFramework: "Framework: {0}",
  collabBackToLobby: "Back to lobby",
  collabStatusConnecting: "Connecting...",
  collabStatusConnected: "Connected",
  collabStatusClosed: "Disconnected",
  collabParticipants: "Participants",
  collabNoParticipants: "No participants",
  collabParticipantTooltip: "{0} on {1}",
  collabInvite: "Invite",
  collabInviteTooltip: "Copy invite link",
  collabInviteCopied: "Copied",
  collabVersionHistory: "Version History",
  collabVersionCurrent: "Current Version",
  collabVersionSaved: "Saved version",
  collabVersionDocumentCreated: "Document created",
  collabVersionAutosavedOne: "{0} autosaved version",
  collabVersionAutosaved: "{0} autosaved versions",
  floatingPanelMinimize: "Minimize",
  floatingPanelRestore: "Restore",
  floatingPanelClose: "Close",
  translationDeleteLanguageInUseTitle: "Delete language?",
  translationDeleteLanguageInUse: "{0} is translating to {1}. Deleting this language will also discard their work. Delete the language and all its strings anyway?",
  translationDeleteLanguageInUseMany: "{0} are translating to {1}. Deleting this language will also discard their work. Delete the language and all its strings anyway?",
  translationDeleteLanguageInUseConfirm: "Delete language",
  translationDeleteLanguageInUseCancel: "Cancel",
  journalEdited: "Edited",
  journalSurveyEdited: "Survey edited",
  journalPropertyChanged: "Property \"{0}\" changed on \"{1}\"",
  journalSurveyPropertyChanged: "Survey property \"{0}\" changed",
  journalItemsReordered: "Items reordered",
  journalElementAdded: "{0} \"{1}\" added",
  journalElementAddedNoName: "{0} added",
  journalElementRemoved: "{0} \"{1}\" removed",
  journalElementRemovedNoName: "{0} removed",
  journalElementReordered: "{0} \"{1}\" reordered",
  journalElementReorderedNoName: "{0} reordered",
  journalElementConverted: "Question \"{0}\" changed to {1}",
  journalElementConvertedNoType: "Question \"{0}\" changed",
  journalElementMoved: "{0} \"{1}\" moved to \"{2}\"",
  journalElementMovedNoName: "{0} moved to \"{1}\"",
  journalElementMovedNoTarget: "{0} \"{1}\" moved",
  journalElementMovedBare: "{0} moved",
  journalNounPage: "Page",
  journalNounQuestion: "Question",
  journalNounPanel: "Panel",
  journalNounChoice: "Choice",
  journalNounColumn: "Column",
  journalNounRow: "Row",
  journalNounRateValue: "Rate value",
  journalNounTrigger: "Trigger",
  journalNounValidator: "Validator",
  journalNounCalculatedValue: "Calculated value",
  journalNounItem: "Item"
};

// Positional {0}-substitution, same shape as editorLocalization's strings so the
// call sites do not change when localization returns. An unknown key returns the
// key itself - loud enough to notice, quiet enough not to break a survey.
export function getCollabString(key: string, ...args: Array<any>): string {
  const text = collaborationStrings[key];
  if (text === undefined) return key;
  if (args.length === 0) return text;
  return text.replace(/\{(\d+)\}/g, (match: string, index: string) => {
    const arg = args[parseInt(index, 10)];
    return arg === undefined || arg === null ? match : String(arg);
  });
}
