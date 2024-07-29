<template>
  <span :class="className">
    <span class="svc-string-editor__content">
      <div class="svc-string-editor__border">
        <sv-svg-icon
          class="svc-string-editor__button svc-string-editor__button--edit"
          @click="edit"
          :iconName="'icon-edit'"
          :size="16"
        ></sv-svg-icon>
      </div>
      <span class="svc-string-editor__input">
        <span
          role="textbox"
          v-if="!locString.hasHtml"
          class="sv-string-editor"
          spellcheck="false"
          @focus="onFocus"
          @paste="onPaste"
          @blur="onBlur"
          @input="baseModel?.onInput"
          @keydown="baseModel?.onKeyDown"
          @keyup="baseModel?.onKeyUp"
          @compositionstart="baseModel?.onCompositionStart"
          @compositionend="baseModel?.onCompositionEnd"
          @mouseup="baseModel?.onMouseUp"
          @click="edit"
          :textContent="renderedHtml"
          :aria-placeholder="placeholder"
          :contenteditable="contentEditable"
          ref="root"
        ></span>
        <span
          role="textbox"
          v-if="locString.hasHtml"
          class="sv-string-editor sv-string-editor--html"
          spellcheck="false"
          @focus="onFocus"
          @blur="onBlur"
          @keydown="baseModel?.onKeyDown"
          @keyup="baseModel?.onKeyUp"
          @compositionstart="baseModel?.onCompositionStart"
          @compositionend="baseModel?.onCompositionEnd"
          @mouseup="baseModel?.onMouseUp"
          @click="edit"
          :aria-placeholder="placeholder"
          :contenteditable="contentEditable"
          v-html="renderedHtml"
          ref="root"
        ></span>
        <sv-character-counter
          v-if="showCharacterCounter"
          :counter="characterCounter"
          :remainingCharacterCounter="getCharacterCounterClass"
        ></sv-character-counter>
      </span>
    </span>
    <span v-if="errorText" class="svc-string-editor__error">{{
      errorText
    }}</span>
  </span>
</template>
<script setup lang="ts">
import type { LocalizableString } from "survey-core";
import {
  StringEditorViewModelBase,
  type SurveyCreatorModel,
} from "survey-creator-core";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useCreatorModel } from "./creator-model";

const props = defineProps<{ locString: any }>();
const locString = computed<LocalizableString>(() => {
  return props.locString.locStr;
});
const creator = computed<SurveyCreatorModel>(() => {
  return props.locString.creator;
});
const root = ref<HTMLElement>();

const renderedHtml = ref<string>();

const baseModel = useCreatorModel(
  () => {
    const baseModel = new StringEditorViewModelBase(
      locString.value,
      creator.value
    );
    baseModel.setLocString(locString.value);
    baseModel.blurEditor = () => {
      if (root.value) {
        root.value.blur();
        root.value.spellcheck = false;
      }
    };
    baseModel.getEditorElement = () => root.value as HTMLElement;
    setTimeout(() => baseModel.afterRender());
    return baseModel;
  },
  [() => creator.value, () => locString.value],
  (baseModel) => {
    if (baseModel) {
      baseModel.blurEditor = undefined as any;
      baseModel.getEditorElement = undefined as any;
      baseModel.dispose();
    }
  }
);


const errorText = computed(() => baseModel.value?.errorText);
const className = computed(() => {
  return baseModel.value?.className(locString.value.renderedHtml);
});
const placeholder = computed(() => baseModel.value?.placeholder);
const contentEditable = computed(() => baseModel.value?.contentEditable);
const characterCounter = computed(() => baseModel.value?.characterCounter);
const showCharacterCounter = computed(
  () => baseModel.value?.showCharacterCounter
);
const getCharacterCounterClass = computed(
  () => baseModel.value?.getCharacterCounterClass
);

const onBlur = (event: any) => {
  if (root.value) root.value.spellcheck = false;
  (locString.value as any).__isEditing = false;
  baseModel.value?.onBlur(event);
  return baseModel.value?.errorText;
};

const onFocus = (event: any): void => {
  baseModel.value?.onFocus(event);
};
const onPaste = (event: any): void => {
  baseModel.value?.onPaste(event);
};
const edit = (event: any): void => {
  root.value?.focus();
  (locString.value as any).__isEditing = true;
  baseModel.value?.onClick(event);
};

const onChangeHandler = (): void => {
  renderedHtml.value = locString.value.renderedHtml;
};
const stopWatch = watch(
  () => locString.value,
  (newValue, oldValue) => {
    if (oldValue) {
      newValue.onStringChanged.remove(onChangeHandler);
    }
    if (newValue) {
      newValue.onStringChanged.add(onChangeHandler);
      onChangeHandler();
    }
  },
  {
    immediate: true,
  }
);
onMounted(() => {
  if ((locString.value as any).__isEditing) {
    root.value?.focus();
  }
});
onUnmounted(() => {
  stopWatch();
  locString.value.onStringChanged.remove(onChangeHandler);
});
</script>
