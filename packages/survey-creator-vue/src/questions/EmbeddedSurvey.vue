<template>
  <survey-page
    v-if="!!question && !!survey && survey.currentPage"
    :page="survey.currentPage"
    :survey="survey"
  ></survey-page>
</template>
<script lang="ts" setup>
import type { QuestionEmbeddedSurveyModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { computed, ref } from "vue";
const props = defineProps<{ question: QuestionEmbeddedSurveyModel }>();
const root = ref<HTMLElement>();
useQuestion(props, root);
const survey = computed(() => props.question.embeddedSurvey);
</script>
