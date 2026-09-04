import { Base, property } from "survey-core";
import {
  getRules, lintSurvey, ILintFinding, ILintRuleInfo, ISurveyLintOptions, ISurveyLintResult,
} from "survey-core/linter";
import type { SurveyCreatorModel } from "../creator-base";
import { composeFindingMessage } from "./linter-messages";

// Which run asked for the analysis. "editor" - the JSON tab's own debounced run over the
// authored text; "save" - a save attempt; "api" - creator.lintSurvey().
export type LintReason = "editor" | "save" | "api";

export interface ILintRunOptions {
  json: any;
  reason: LintReason;
  // When set, a result already computed for the same key is reused instead of running the
  // linter again. The JSON tab passes its editor text, which it has for free; the save path
  // passes nothing and relies on invalidate() instead.
  key?: string;
  // Per-call options. A run that overrides the creator-wide lintOptions is never cached.
  lintOptions?: ISurveyLintOptions;
}

// The one place survey-core/linter is called from. Everything the creator shows - the JSON
// tab's check list, the save gate, creator.lintSurvey() - goes through here, so the linter
// runs once per JSON and a host can replace the run entirely with creator.lintSurveyFunc.
export class SurveyLinterService extends Base {
  @property({ defaultValue: 0 }) errorCount: number;
  @property({ defaultValue: 0 }) warningCount: number;
  @property({ defaultValue: 0 }) infoCount: number;
  @property({ defaultValue: 0 }) issueCount: number;

  private resultValue: ISurveyLintResult;
  private keyValue: string;
  // True until a run fills the result, and again after every change to the survey: a result
  // computed for the previous JSON may not answer for the current one.
  private isStaleValue: boolean = true;

  constructor(private creator: SurveyCreatorModel) {
    super();
  }

  public get result(): ISurveyLintResult {
    return this.resultValue;
  }

  public get isStale(): boolean {
    return this.isStaleValue;
  }

  public getRules(): Array<ILintRuleInfo> {
    return getRules();
  }

  public invalidate(): void {
    this.isStaleValue = true;
    this.keyValue = undefined;
  }

  public reset(): void {
    this.invalidate();
    this.resultValue = undefined;
    this.updateCounts();
  }

  public composeMessage(finding: ILintFinding): string {
    return composeFindingMessage(finding);
  }

  // Analyses the JSON with the creator-wide lintOptions and returns the result. Always the
  // built-in linter: an on-demand call that may or may not answer later would need a second
  // method, and a host that has its own linter calls it itself.
  public runSync(json?: any, lintOptions?: ISurveyLintOptions): ISurveyLintResult {
    const target = json === undefined ? this.creator.JSON : json;
    const res = this.lintCore(target, this.getLintOptions(lintOptions));
    this.setResult(res, { json: target, reason: "api", lintOptions: lintOptions });
    this.notifyLinted("api", target, res);
    return res;
  }

  public run(options: ILintRunOptions, onDone: (result: ISurveyLintResult) => void): void {
    const cached = this.getCachedResult(options);
    if (!!cached) {
      onDone(cached);
      return;
    }
    const lintOptions = this.getLintOptions(options.lintOptions);
    const done = (result: ISurveyLintResult) => {
      this.setResult(result, options);
      this.notifyLinted(options.reason, options.json, result);
      onDone(result);
    };
    const func = this.creator.lintSurveyFunc;
    if (!!func) {
      func(options.json, lintOptions, (result: ISurveyLintResult) => done(result));
      return;
    }
    done(this.lintCore(options.json, lintOptions));
  }

  private getLintOptions(lintOptions: ISurveyLintOptions): ISurveyLintOptions {
    return lintOptions || this.creator.lintOptions || {};
  }

  // lintSurvey throws a TypeError on anything but a survey JSON object. A save attempt must
  // never fail on that, so the input is checked here and an unusable one has no result.
  private lintCore(json: any, lintOptions: ISurveyLintOptions): ISurveyLintResult {
    if (!json || typeof json !== "object" || Array.isArray(json)) return undefined;
    return lintSurvey(json, lintOptions);
  }

  private getCachedResult(options: ILintRunOptions): ISurveyLintResult {
    if (!!options.lintOptions || !this.resultValue) return undefined;
    if (options.key !== undefined) {
      return this.keyValue === options.key ? this.resultValue : undefined;
    }
    return this.isStaleValue ? undefined : this.resultValue;
  }

  private setResult(result: ISurveyLintResult, options: ILintRunOptions): void {
    // a run with its own options answers for that run only and must not become the result
    // every other consumer reads
    if (!!options.lintOptions) return;
    this.resultValue = result;
    this.keyValue = options.key;
    this.isStaleValue = false;
    this.updateCounts();
  }

  private updateCounts(): void {
    const res = this.resultValue;
    this.errorCount = !!res ? res.errorCount : 0;
    this.warningCount = !!res ? res.warningCount : 0;
    this.infoCount = !!res ? res.infoCount : 0;
    this.issueCount = !!res ? res.findings.length : 0;
  }

  private notifyLinted(reason: LintReason, json: any, result: ISurveyLintResult): void {
    if (!result || this.creator.onSurveyLinted.isEmpty) return;
    this.creator.onSurveyLinted.fire(this.creator, { reason: reason, json: json, result: result });
  }
}
