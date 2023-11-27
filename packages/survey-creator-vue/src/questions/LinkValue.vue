<template>
  <svc-action-button
    :text="question.linkValueText"
    :click="question.doLinkClick.bind(question)"
    :selected="question.isSelected"
    :disabled="!question.isClickable"
    :classes="question.linkSetButtonCssClasses"
    :title="question.tooltip"
  >
  </svc-action-button>
  <svc-action-button
    v-if="!question.isReadOnly && question.showClear"
    :text="clearCaption"
    :click="question.doClearClick.bind(question)"
    :selected="question.isSelected"
    :disabled="false"
    :classes="question.linkClearButtonCssClasses"
  >
  </svc-action-button>
</template>
<script lang="ts" setup>
import {
  editorLocalization,
  type QuestionLinkValueModel,
} from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";
defineOptions({
  inheritAttrs: false,
});
const props = defineProps<{ question: QuestionLinkValueModel }>();
const root = ref<HTMLElement>();
const clearCaption = editorLocalization.getString("pe.clear");
useQuestion(props, root);
</script>
