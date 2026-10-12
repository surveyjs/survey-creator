// Whether two arrays hold the same members in the same order, by identity.
//
// It exists because the models are refreshed on every render and a @propertyArray assigned a fresh
// array is a change every time: a projection that notified on every render and re-rendered on every
// notification would drive itself round for ever. Identity is the right test here - every member of
// every list this guards is an object the tester built once and hands out unchanged.
export function sameMembers(left: ReadonlyArray<any>, right: ReadonlyArray<any>): boolean {
  return left.length === right.length && left.every((item, at) => item === right[at]);
}
