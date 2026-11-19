import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, SimpleChanges, ViewChild, ViewContainerRef } from "@angular/core";
import { LocalizableString, CharacterCounter } from "survey-core";
import { StringEditorViewModelBase, SurveyCreatorModel, editableStringRendererName } from "survey-creator-core";
import { CreatorModelComponent, compareComponentData } from "./creator-model.component";
import { AngularComponentFactory, COMPONENT_DEPTH, SurveyBaseProviders } from "survey-angular-ui";
import { Inject } from "@angular/core";
import { Optional } from "@angular/core";

@Component({
  selector: "svc-string-editor",
  templateUrl: "./string-editor.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class StringEditorComponent extends CreatorModelComponent<StringEditorViewModelBase> {
  public baseModel!: StringEditorViewModelBase;
  private justFocused: boolean = false;
  @Input() model!: any;
  @ViewChild("container") container!: ElementRef<HTMLElement>;
  constructor(cdr: ChangeDetectorRef, vcr: ViewContainerRef, private ngZone: NgZone, @Optional() @Inject(COMPONENT_DEPTH) depth?: number | null) {
    super(cdr, vcr, depth);
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
  protected override shouldUpdateModel(changes: SimpleChanges) {
    return compareComponentData(changes, ["locStr", "creator"], "model");
  }
  public get placeholder(): string {
    return this.baseModel.placeholder;
  }
  public get contentEditable(): boolean {
    return this.baseModel.contentEditable;
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
    this.container.nativeElement.focus();
    (<any>this.locString).__isEditing = true;
    this.baseModel.onClick(event);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.locString?.onStringChanged.add(this.onChangeHandler);
  }
  protected override afterViewInit(): void {
    if ((<any>this.locString).__isEditing) {
      this.container.nativeElement.focus();
    }
  }
  override ngOnDestroy(): void {
    this.baseModel.blurEditor = undefined as any;
    this.baseModel.getEditorElement = undefined as any;
    this.baseModel.dispose();
    this.locString?.onStringChanged.remove(this.onChangeHandler);
    super.ngOnDestroy();
  }
  get ariaLabel(): string {
    return this.placeholder || "content editable";
  }
}

AngularComponentFactory.Instance.registerComponent(editableStringRendererName, StringEditorComponent);