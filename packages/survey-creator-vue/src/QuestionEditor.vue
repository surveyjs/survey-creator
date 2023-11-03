<template>
  <component :is="componentName" v-bind="componentData"></component>
</template>
<script lang="ts" setup>
import type { SurveyModel } from "survey-core";
import { computed } from "vue";

const props = defineProps<{ survey: SurveyModel }>();

const question = computed(() => props.survey?.getAllQuestions()[0]);

const componentName = computed(() => {
  const survey = props.survey;
  if (survey && question.value) {
    const name = survey.getElementWrapperComponentName(question.value);
    if (name) {
      return name;
    }
  }
  return "survey-question";
});
const componentData = computed(() => {
  const survey = props.survey;
  let data: any;
  if (survey && question.value) {
    data = survey.getElementWrapperComponentData(question.value);
  }
  return {
    componentName: "survey-question",
    componentData: {
      element: question.value,
      data: data,
    },
  };
});
</script>
