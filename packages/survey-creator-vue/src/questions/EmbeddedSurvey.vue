<template>
  <SvComponent
    :is="'survey-page'"
    v-if="!!question && !!survey && survey.currentPage"
    :page="survey.currentPage"
    :survey="survey"
  ></SvComponent>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { QuestionEmbeddedSurveyModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { computed, ref } from "vue";
const props = defineProps<{ question: QuestionEmbeddedSurveyModel }>();
const root = ref<HTMLElement>();
useQuestion(props, root);
const survey = computed(() => props.question.embeddedSurvey);
</script>
