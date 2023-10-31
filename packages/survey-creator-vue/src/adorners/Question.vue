<template>
  <QuestionBase
    v-if="model"
    :model="model"
    :element="componentData.element"
    :component-name="componentName"
    :component-data="componentData"
  ></QuestionBase>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { Question } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
import { QuestionAdornerViewModel } from "survey-creator-core";
import QuestionBase from "./QuestionBase.vue";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
// useBase(() => new PageAdorner(props.creator, props.page));
const model = useCreatorModel(
  () =>
    new QuestionAdornerViewModel(
      props.componentData.data as CreatorBase,
      props.componentData.element as Question,
      null as any
    ),
  [() => props.componentName, () => props.componentData]
);
</script>
