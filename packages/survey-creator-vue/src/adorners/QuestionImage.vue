<template>
  <QuestionBase
    :create-model="createModel"
    :element="props.componentData.element"
    :show-placeholder-component="true"
    :component-data="componentData"
    :component-name="componentName"
    :placeholder-component="'survey-file'"
    :get-placeholder-component-data="getPlaceholderComponentData"
    :adorner-component="'svc-image-question-adorner'"
  ></QuestionBase>
</template>
<script lang="ts" setup>
import QuestionBase from "./QuestionBase.vue";
import {
  SurveyCreatorModel,
  QuestionImageAdornerViewModel,
  QuestionAdornerViewModel,
} from "survey-creator-core";
import type { Question } from "survey-core";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const createModel = () => {
  return new QuestionImageAdornerViewModel(
    props.componentData.data as SurveyCreatorModel,
    props.componentData.element as Question,
    null as any
  );
};
const getPlaceholderComponentData = (model: QuestionAdornerViewModel) => {
  return {
    question: (model as QuestionImageAdornerViewModel)?.filePresentationModel,
  };
};
</script>
