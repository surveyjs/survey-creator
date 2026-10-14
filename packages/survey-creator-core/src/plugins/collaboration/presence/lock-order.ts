import { IPresencePeer } from "./presence-state";

// One participant's claim on a lockable target (a designer element, a logic
// rule key). `peer` is null for the local participant.
export interface ILockClaim<T> {
  clientId: string;
  target: T;
  peer: IPresencePeer | null;
}

// The deterministic arbitration every editing lock shares: claims are ordered
// by clientId and accepted greedily unless they overlap an accepted one. Every
// client runs it on the same roster, so all of them agree on the holders - two
// participants who claimed overlapping targets within the network latency end
// up with the smaller clientId holding. A local claim with an unknown (empty)
// clientId sorts after every real one: it yields each tie.
export function acceptClaims<T>(claims: Array<ILockClaim<T>>, overlaps: (a: T, b: T) => boolean):
  { accepted: Array<ILockClaim<T>>, localAccepted: boolean } {
  const rank = (claim: ILockClaim<T>): string => claim.clientId === "" && !claim.peer ? null : claim.clientId;
  const ordered = claims.slice().sort((a, b) => {
    const ra = rank(a), rb = rank(b);
    if (ra === rb) return 0;
    if (ra === null) return 1;
    if (rb === null) return -1;
    return ra < rb ? -1 : 1;
  });
  const accepted: Array<ILockClaim<T>> = [];
  let localAccepted = false;
  ordered.forEach((claim) => {
    if (accepted.some((a) => overlaps(a.target, claim.target))) return;
    accepted.push(claim);
    if (!claim.peer) localAccepted = true;
  });
  return { accepted, localAccepted };
}
