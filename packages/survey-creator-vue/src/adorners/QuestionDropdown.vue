<template>
  <QuestionBase
    v-if="model"
    :model="model"
    :element="componentData.element"
    :component-name="componentName"
    :component-data="componentData"
    :adorner-component="'svc-dropdown-question-adorner'"
  ></QuestionBase>
</template>
<script lang="ts" setup>
import QuestionBase from "./QuestionBase.vue";
import { useCreatorModel } from "../creator-model";
import {
  SurveyCreatorModel,
  QuestionDropdownAdornerViewModel,
} from "survey-creator-core";
import type { Question } from "survey-core";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const model = useCreatorModel(
  () =>
    new QuestionDropdownAdornerViewModel(
      props.componentData.data as SurveyCreatorModel,
      props.componentData.element as Question,
      null as any
    ),
  [() => props.componentName, () => props.componentData],
  (value) => {
    value.dispose();
  }
);
</script>
