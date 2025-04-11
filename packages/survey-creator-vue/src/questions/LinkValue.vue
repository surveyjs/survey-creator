<template>
  <SvComponent
    :is="'svc-action-button'"
    :text="question.linkValueText"
    :click="question.doLinkClick.bind(question)"
    :selected="question.isSelected"
    :disabled="!question.isClickable"
    :classes="question.linkSetButtonCssClasses"
    :title="question.tooltip"
    :iconName="question.iconName"
  >
  </SvComponent>
  <SvComponent
    :is="'svc-action-button'"
    v-if="!question.isReadOnly && question.showClear"
    :text="clearCaption"
    :click="question.doClearClick.bind(question)"
    :disabled="false"
    :classes="question.linkClearButtonCssClasses"
  >
  </SvComponent>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
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
