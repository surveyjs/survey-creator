<template>
  <div :class="question.getRootClass()">
    <SvComponent :is="getComponentName()" :question="question"></SvComponent>
    <button
      :class="question.cssClasses.resetButton"
      :disabled="question.resetValueAdorner.isDisabled"
      @click="question.resetValueAdorner.resetValue"
      :title="question.resetValueAdorner.caption"
    >
      <SvComponent
        :is="'sv-svg-icon'"
        :iconName="question.cssClasses.resetButtonIcon"
        :size="'auto'"
      ></SvComponent>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type {
  QuestionTextWithResetModel,
  QuestionCommentWithResetModel,
} from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";

const props = defineProps<{
  question: QuestionTextWithResetModel | QuestionCommentWithResetModel;
}>();
const getComponentName = () => {
  return "survey-" + props.question.wrappedQuestionTemplate;
};
useQuestion(props, ref<HTMLElement>());
</script>
