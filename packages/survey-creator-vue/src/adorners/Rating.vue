<template>
  <div class="svc-rating-question-content">
    <SvComponent :is="'sv-action-bar'" :model="model.rateActionsContainer"></SvComponent>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { QuestionRatingModel } from "survey-core";
import {
  SurveyCreatorModel,
  QuestionRatingAdornerViewModel,
} from "survey-creator-core";
const props = defineProps<{
  componentData: { data: SurveyCreatorModel; question: QuestionRatingModel };
  componentName: string;
}>();
const model = useCreatorModel(
  () =>
    new QuestionRatingAdornerViewModel(
      props.componentData.data,
      props.componentData.question,
      null as any
    ),
  [() => props.componentData.data, () => props.componentData.question]
);
</script>
