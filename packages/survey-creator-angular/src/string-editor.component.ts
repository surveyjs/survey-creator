import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, ViewContainerRef } from "@angular/core";
import { LocalizableString, CharacterCounter } from "survey-core";
import { StringEditorViewModelBase, SurveyCreatorModel, editableStringRendererName } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";
import { AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "svc-string-editor",
  templateUrl: "./string-editor.component.html",
  styles: [":host { display: none; }"]
})
export class StringEditorComponent extends CreatorModelComponent<StringEditorViewModelBase> implements AfterViewInit {
  public baseModel!: StringEditorViewModelBase;
  private justFocused: boolean = false;
  @Input() model!: any;
  @ViewChild("container") container!: ElementRef<HTMLElement>;

  // The 4 [attr.*] bindings on the inner editable span (aria-placeholder,
  // aria-label, contenteditable, tabIndex) are not required for the first
  // paint of a matrix cell. Setting them synchronously during ngOnInit is
  // the dominant cost when many StringEditor instances are created at once
  // (e.g. deleting a row in a property-grid matrix). We render the cell
  // synchronously with these getters returning null (Angular emits a no-op
  // removeAttribute on a fresh element) and apply the real values
  // asynchronously, in time-bounded chunks per animation frame so the
  // browser can paint between batches.
  private _attrsActive: boolean = false;
  private _isDestroyed: boolean = false;

  private static _pendingActivation: StringEditorComponent[] = [];
  private static _activationScheduled: boolean = false;
  private static scheduleActivation(c: StringEditorComponent, ngZone: NgZone): void {
    StringEditorComponent._pendingActivation.push(c);
    if (StringEditorComponent._activationScheduled) return;
    StringEditorComponent._activationScheduled = true;
    ngZone.runOutsideAngular(() => {
      const flush = (): void => {
        const start = performance.now();
        const queue = StringEditorComponent._pendingActivation;
        while(queue.length > 0 && performance.now() - start < 8) {
          const editor = queue.shift()!;
          if (!editor._isDestroyed) editor.activateAttributes();
        }
        if (queue.length > 0) {
          requestAnimationFrame(flush);
        } else {
          StringEditorComponent._activationScheduled = false;
        }
      };
      requestAnimationFrame(flush);
    });
  }
  private activateAttributes(): void {
    if (this._attrsActive || this._isDestroyed || !this.embeddedView) return;
    this._attrsActive = true;
    // Re-run CD once so the (now non-null) attribute bindings are applied.
    this.embeddedView.reattach();
    this.embeddedView.detectChanges();
    this.embeddedView.detach();
  }

  constructor(cdr: ChangeDetectorRef, vcr: ViewContainerRef, private ngZone: NgZone) {
    super(cdr, vcr);
  }
  public createModel(): void {
    this.baseModel = new StringEditorViewModelBase(this.locString, this.creator);
    this.baseModel.setLocString(this.locString);
    this.baseModel.blurEditor = () => {
      this.container.nativeElement.blur();
      this.container.nativeElement.spellcheck = false;
    };
    this.baseModel.getEditorElement = () => this.container.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.baseModel.afterRender());
    });
  }
  public get locString(): LocalizableString {
    return this.model.locStr;
  }
  public get creator(): SurveyCreatorModel {
    return this.model.creator;
  }
  protected getModel(): StringEditorViewModelBase {
    return this.baseModel;
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "locString"];
  }
  public get placeholder(): string | null {
    return this._attrsActive ? this.baseModel.placeholder : null;
  }
  public get contentEditable(): boolean | null {
    return this._attrsActive ? this.baseModel.contentEditable : null;
  }
  public get tabIndex(): number | null {
    return this._attrsActive ? this.baseModel.tabIndex : null;
  }
  public get characterCounter(): CharacterCounter {
    return this.baseModel.characterCounter;
  }
  public get showCharacterCounter(): boolean {
    return this.baseModel.showCharacterCounter;
  }
  public get getCharacterCounterClass(): string {
    return this.baseModel.getCharacterCounterClass;
  }

  public get className(): string {
    return this.baseModel.className(this.locString.renderedHtml);
  }
  public get errorText(): string {
    return this.baseModel.errorText;
  }
  onChangeHandler = (): void => {
    this.detectChanges();
  };
  public onBlur(event: any): string {
    this.container.nativeElement.spellcheck = false;
    (<any>this.locString).__isEditing = false;
    this.justFocused = false;
    this.baseModel.onBlur(event);
    return this.baseModel.errorText;
  }
  public onFocus(event: any): void {
    this.activateAttributes();
    this.baseModel.onFocus(event);
    this.justFocused = true;
  }
  public onPaste(event: any): void {
    this.baseModel.onPaste(event);
  }
  public done(event: any): void {
    this.baseModel.done(event);
    (<any>this.locString).__isEditing = false;
  }
  public edit(event: any): void {
    this.activateAttributes();
    this.container.nativeElement.focus();
    (<any>this.locString).__isEditing = true;
    this.baseModel.onClick(event);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.locString?.onStringChanged.add(this.onChangeHandler);
    // Defer the 4 [attr.*] bindings (aria-placeholder, aria-label,
    // contenteditable, tabIndex) off the synchronous initial-render path.
    // See _attrsActive comment for rationale.
    StringEditorComponent.scheduleActivation(this, this.ngZone);
  }
  ngAfterViewInit(): void {
    if ((<any>this.locString).__isEditing) {
      this.activateAttributes();
      this.container.nativeElement.focus();
    }
  }
  override ngOnDestroy(): void {
    this._isDestroyed = true;
    this.baseModel.blurEditor = undefined as any;
    this.baseModel.getEditorElement = undefined as any;
    this.baseModel.dispose();
    this.locString?.onStringChanged.remove(this.onChangeHandler);
    super.ngOnDestroy();
  }
  get ariaLabel(): string | null {
    return this._attrsActive ? (this.baseModel.placeholder || "content editable") : null;
  }
}

AngularComponentFactory.Instance.registerComponent(editableStringRendererName, StringEditorComponent);