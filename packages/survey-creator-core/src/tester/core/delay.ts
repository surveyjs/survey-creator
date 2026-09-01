// Waiting is the host's job, and a host that can pause a run needs both of its waits to end the
// moment Stop is pressed. Neither of these rejects on abort: an aborted wait is read by the runner as
// cancellation either way, and resolving keeps the observer's own control flow readable.

export function delay(ms: number, signal?: AbortSignal): Promise<void> {
  if (ms <= 0 || (!!signal && signal.aborted)) return Promise.resolve();
  return new Promise<void>(resolve => {
    const finish = (): void => {
      clearTimeout(timer);
      if (!!signal) signal.removeEventListener("abort", finish);
      resolve();
    };
    const timer = setTimeout(finish, ms);
    if (!!signal) signal.addEventListener("abort", finish, { once: true });
  });
}

// "Pause on failure" is a promise the observer awaits, so the runner stops between two operations
// exactly as it does for a delay. Resume and Stop both release it.
export class PauseGate {
  private release?: () => void;
  public get isHolding(): boolean {
    return !!this.release;
  }
  public hold(signal?: AbortSignal): Promise<void> {
    if (!!signal && signal.aborted) return Promise.resolve();
    return new Promise<void>(resolve => {
      const finish = (): void => {
        if (!!signal) signal.removeEventListener("abort", finish);
        this.release = undefined;
        resolve();
      };
      this.release = finish;
      if (!!signal) signal.addEventListener("abort", finish, { once: true });
    });
  }
  public resume(): void {
    if (!!this.release) { this.release(); }
  }
}
