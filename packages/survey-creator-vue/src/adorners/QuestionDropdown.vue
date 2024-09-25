<template>
  <QuestionBase
    :create-model="createModel"
    :element="componentData.element"
    :component-name="componentName"
    :component-data="componentData"
    :adorner-component="'svc-dropdown-question-adorner'"
  ></QuestionBase>
</template>
<script lang="ts" setup>
import QuestionBase from "./QuestionBase.vue";
import {
  SurveyCreatorModel,
  QuestionDropdownAdornerViewModel,
} from "survey-creator-core";
import type { Question } from "survey-core";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const createModel = () =>
  new QuestionDropdownAdornerViewModel(
    props.componentData.data as SurveyCreatorModel,
    props.componentData.element as Question,
    null as any
  );
</script>
