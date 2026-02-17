<template>
  <div style="display: 'contents'" ref="root">
    <SvComponent
      :is="'sv-page'"
      v-if="!!question && !!survey && survey.currentPage"
      :page="survey.currentPage"
      :survey="survey"
    ></SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { QuestionEmbeddedSurveyModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { computed, onMounted, ref } from "vue";
const props = defineProps<{ question: QuestionEmbeddedSurveyModel }>();
const root = ref<HTMLElement>();
useQuestion(props, root);
const survey = computed(() => props.question.embeddedSurvey);
onMounted(() => {
  survey.value.rootElement = root.value as HTMLElement;
});
</script>
