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
      :disabled="question.isTextInputReadOnly"
      :class="question.cssClasses.control"
      :value="question.renderedValue || ''"
      @change="question.onInputChange"
      @blur="question.onInputBlur"
      :placeholder="question.renderedPlaceholder"
    />
    <SvComponent :is="'sv-action-bar'" :model="question.inputActionsContainer" v-if="question.hasVisibleInputActions"></SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent, useQuestion } from "survey-vue3-ui";
import type { QuestionFileEditorModel } from "survey-creator-core";
import { ref } from "vue";

const root = ref<HTMLElement>();

const props = defineProps<{ question: QuestionFileEditorModel }>();
useQuestion(props, root);
</script>
