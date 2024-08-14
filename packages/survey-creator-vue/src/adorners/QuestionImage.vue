<template>
  <QuestionBase
    :model="(model as QuestionImageAdornerViewModel)"
    :element="props.componentData.element"
    :show-placeholder-component="true"
    :component-data="componentData"
    :component-name="componentName"
    :placeholder-component="'survey-file'"
    :placeholder-component-data="{ question: model?.filePresentationModel }"
    :adorner-component="'svc-image-question-adorner'"
    ref="root"
  ></QuestionBase>
</template>
<script lang="ts" setup>
import QuestionBase from "./QuestionBase.vue";
import { useCreatorModel } from "../creator-model";
import {
  SurveyCreatorModel,
  QuestionImageAdornerViewModel,
} from "survey-creator-core";
import { onMounted, ref } from "vue";
import type { Question } from "survey-core";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const root = ref();
const model = useCreatorModel(
  () =>
    new QuestionImageAdornerViewModel(
      props.componentData.data as SurveyCreatorModel,
      props.componentData.element as Question,
      null as any,
      null as any
    ),
  [() => props.componentName, () => props.componentData]
);
onMounted(() => {
  if (model.value && root.value) {
    model.value.questionRoot = root.value.questionRoot;
  }
});
</script>
