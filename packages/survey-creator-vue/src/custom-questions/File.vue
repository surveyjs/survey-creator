<template>
  <div
    :class="question.cssClasses.root"
    @dragenter="question.onDragEnter"
    @dragover="question.onDragOver"
    @drop="question.onDrop"
    @dragleave="question.onDragLeave"
    @keydown="question.onKeyDown"
    ref="root"
  >
    <input
      type="text"
      :disabled="question.isInputReadOnly"
      :class="question.cssClasses.control"
      :value="question.renderedValue || ''"
      @change="question.onInputChange"
      @blur="question.onInputBlur"
      :placeholder="question.renderedPlaceholder"
    />
    <input
      type="file"
      :disabled="question.isInputReadOnly"
      :class="question.cssClasses.fileInput"
      :id="question.inputId"
      :aria-required="question.ariaRequired"
      :aria-label="question.ariaLabel"
      :aria-invalid="question.ariaInvalid"
      :aria-describedby="question.ariaDescribedBy"
      :multiple="false"
      :title="question.inputTitle"
      :tabindex="-1"
      :accept="question.acceptedTypes"
      @change="question.onFileInputChange"
    />
    <div :class="question.cssClasses.buttonsContainer">
      <button
        :title="question.clearButtonCaption"
        :class="question.cssClasses.clearButton"
        v-key2click
        :disabled="question.getIsClearButtonDisabled()"
        @click="question.doClean"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          :iconName="question.cssClasses.clearButtonIcon"
          :size="'auto'"
        ></SvComponent>
      </button>
      <label
        :class="question.getChooseButtonCss()"
        :for="question.inputId"
        :aria-label="question.chooseButtonCaption"
        @click="question.chooseFiles"
        v-key2click
      >
        <SvComponent
          :is="'sv-svg-icon'"
          :iconName="question.cssClasses.chooseButtonIcon"
          :size="'auto'"
          :title="question.chooseButtonCaption"
        ></SvComponent>
      </label>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import type { QuestionFileEditorModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";

const root = ref<HTMLElement>();

const props = defineProps<{ question: QuestionFileEditorModel }>();
useQuestion(props, root);
</script>
