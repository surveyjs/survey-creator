import { Base, PopupModel, SurveyModel, property } from "survey-core";
import type { ISurveyTestOptions } from "survey-core/tester";
import { SETUP_SURVEY_ID_PREFIX } from "../core/elementIds";
import type { HostOptions } from "../core/hostOptions";
import { toRunnerOptions } from "../core/hostOptions";
import { testerText } from "../localization";
import { buildSetupSurveyJson, HOST_KEYS, NUMBER_KEYS, TEST_KEYS } from "./setupSurvey";

// The prototype's Setup tab, relocated. The widget has no tab strip - it is one screen with three
// faces - so the options live behind a "Settings" action on the runner's toolbar and open in a popup
// over the survey this file builds. The form itself is unchanged: SetupModel is this class under its
// final name (overview naming; see promts/creator-tester-notes.md entry 8, which held the rename for
// this prompt so that it happened once).
//
// Two things it owns beyond the form. The popup, because "where the form is shown" is a decision and
// not markup. And which members a person actually changed: the host supplies the defaults through
// ITesterHost.options, and what is changed here belongs to the widget's own state (prompt 03 section
// 6) rather than being written back into the host's defaults.

// The third of the widget's per-framework surface, and the whole of what this model names: the popup
// needs a content component and each renderer registers one under this string. tests-tester/checkLayers.ts
// allows it by name, the way it allows the two row components.
export const SETTINGS_COMPONENT = "svt-settings";

export interface ITesterSettingsHandlers {
  onTestOptions(next: ISurveyTestOptions): void;
  onHostOptions(next: HostOptions): void;
}

export class TesterSettingsModel extends Base {
  // "Resolved root options": what the runner is actually handed, which is not quite what is typed - an
  // empty locale is dropped rather than sent as "".
  @property({ defaultValue: "" }) resolvedText!: string;
  @property({ defaultValue: false }) isOpen!: boolean;

  public readonly survey: SurveyModel;
  // Where the form is shown. The Action that opens it belongs to the runner's toolbar - that is the bar
  // it sits on - and SurveyTesterModel hands this popup to it, so there is one Action and one popup and
  // neither has two owners.
  public readonly popup: PopupModel;

  private handlers: ITesterSettingsHandlers;
  private testOptions?: ISurveyTestOptions;
  private hostOptions?: HostOptions;
  // True while setOptions is writing the answers in. Without it every push from above would come
  // straight back out as an edit.
  private applying = false;
  // The members a person changed, per object. What the host handed in as a default stays a default:
  // getState() writes only what is in here.
  private changedTestKeys: Array<string> = [];
  private changedHostKeys: Array<string> = [];

  constructor(handlers: ITesterSettingsHandlers) {
    super();
    this.handlers = handlers;
    this.survey = new SurveyModel(buildSetupSurveyJson());
    // Assigned at creation, before anything renders: the ids are composed when they are read, so a
    // prefix set afterwards changes them under markup that has already been written. See elementIds.ts.
    this.survey.elementIdPrefix = SETUP_SURVEY_ID_PREFIX;
    this.survey.onValueChanged.add((_sender, options) => this.onAnswer(options.name, options.value));
    this.popup = new PopupModel(SETTINGS_COMPONENT, { model: this }, {
      verticalPosition: "bottom",
      horizontalPosition: "center",
      showPointer: true,
      cssClass: "svt-settings__popup",
    });
    this.popup.onVisibilityChanged.add((_sender, options) => { this.isOpen = options.isVisible; });
  }
  public getType(): string { return "svt-settings"; }

  // The two option objects, pushed in. The survey is the form; the widget still owns the answers,
  // because they are persisted by the host and because a sample that needs the server-validation
  // handler switches one of them on from somewhere else entirely.
  public setOptions(testOptions: ISurveyTestOptions, hostOptions: HostOptions): void {
    this.testOptions = testOptions;
    this.hostOptions = hostOptions;
    this.applying = true;
    try {
      this.survey.mergeData({
        locale: testOptions.locale ?? "",
        now: testOptions.now ?? "",
        randomSeed: testOptions.randomSeed ?? 1,
        clearInvisibleValues: testOptions.clearInvisibleValues ?? "onComplete",
        checkErrorsMode: testOptions.checkErrorsMode ?? "onNextPage",
        stopOnFirstFailure: testOptions.stopOnFirstFailure === true,
        asyncTimeout: testOptions.asyncTimeout ?? 5000,
        ...hostOptions,
      });
    } finally {
      this.applying = false;
    }
    this.resolvedText = stringify(toRunnerOptions(testOptions));
  }

  public toggle(): void { this.popup.toggleVisibility(); }
  public open(): void { this.popup.show(); }
  public close(): void { this.popup.hide(); }

  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // What §6 persists of this form: only what was changed, so a host that later ships different
  // defaults is not overruled by a state object that repeated the old ones.
  public getChangedTestOptions(): Partial<ISurveyTestOptions> {
    return pick(this.testOptions, this.changedTestKeys) as Partial<ISurveyTestOptions>;
  }
  public getChangedHostOptions(): Partial<HostOptions> {
    return pick(this.hostOptions, this.changedHostKeys) as Partial<HostOptions>;
  }
  // Restoring state is not a person changing something, but the members it restores are exactly the
  // members that were changed - so they are marked as such and travel on into the next getState().
  public markChanged(testKeys: Array<string>, hostKeys: Array<string>): void {
    testKeys.forEach(key => this.remember(this.changedTestKeys, key));
    hostKeys.forEach(key => this.remember(this.changedHostKeys, key));
  }

  public dispose(): void {
    this.popup.dispose();
    this.survey.dispose();
    super.dispose();
  }

  private onAnswer(name: string, value: any): void {
    if (this.applying || !this.testOptions || !this.hostOptions) return;
    const next = NUMBER_KEYS.indexOf(name) > -1 ? toNumber(value) : value;
    if (TEST_KEYS.indexOf(name as keyof ISurveyTestOptions) > -1) {
      this.remember(this.changedTestKeys, name);
      this.handlers.onTestOptions({ ...this.testOptions, [name]: next });
    } else if (HOST_KEYS.indexOf(name as keyof HostOptions) > -1) {
      this.remember(this.changedHostKeys, name);
      this.handlers.onHostOptions({ ...this.hostOptions, [name]: next });
    }
  }

  private remember(list: Array<string>, key: string): void {
    if (list.indexOf(key) < 0) list.push(key);
  }
}

function pick(source: any, keys: Array<string>): { [name: string]: any } {
  const res: { [name: string]: any } = {};
  if (!source) return res;
  keys.forEach(key => { if (source[key] !== undefined) res[key] = source[key]; });
  return res;
}

function toNumber(value: any): number {
  const parsed = Number(value);
  return isFinite(parsed) ? parsed : 0;
}

function stringify(value: any): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch{
    return String(value);
  }
}
