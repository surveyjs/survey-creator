<template>
  <div :class="question.getRootClass()">
    <component :is="getComponentName()" :question="question"></component>
    <button
      :class="question.cssClasses.resetButton"
      :disabled="question.resetValueAdorner.isDisabled"
      @click="question.resetValueAdorner.resetValue"
      :title="question.resetValueAdorner.caption"
    >
      <sv-svg-icon
        :iconName="question.cssClasses.resetButtonIcon"
        :size="'auto'"
      ></sv-svg-icon>
    </button>
  </div>
</template>
<script lang="ts" setup>
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
