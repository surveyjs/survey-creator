<template>
  <SurveyComponent :model="surveyModel"></SurveyComponent>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { SurveyModel } from "survey-core";
import { SurveyComponent } from "survey-vue3-ui";

// Survey.vue prefers its "survey" prop over "model", while a layout element container passes
// both: "survey" is the hosting survey and "model" is the element's own data. So the widget
// used as a layout element (the translation tab puts a survey into "contentTop") would render
// the hosting survey again instead of its own model. The props are declared here - and not
// left to the attribute fallthrough - so that "survey" never reaches Survey.vue on its own.
const props = defineProps<{
  model?: SurveyModel;
  survey?: SurveyModel;
  container?: string;
}>();
const surveyModel = computed(
  () => (props.model || props.survey) as SurveyModel
);
</script>
