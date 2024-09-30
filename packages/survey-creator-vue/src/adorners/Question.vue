<template>
  <QuestionBase
    :createModel="createModel"
    :element="componentData.element"
    :component-name="componentName"
    :component-data="componentData"
  ></QuestionBase>
</template>
<script lang="ts" setup>
import type { Question } from "survey-core";
import type { SurveyCreatorModel } from "survey-creator-core";
import { QuestionAdornerViewModel } from "survey-creator-core";
import QuestionBase from "./QuestionBase.vue";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const createModel = () =>
  new QuestionAdornerViewModel(
    props.componentData.data as SurveyCreatorModel,
    props.componentData.element as Question,
    null as any
  );
</script>
