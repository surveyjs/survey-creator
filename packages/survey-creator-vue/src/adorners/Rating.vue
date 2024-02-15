<template>
  <div class="svc-rating-question-content">
    <div :class="model?.controlsClassNames">
      <sv-svg-icon
        v-if="model?.allowRemove"
        :iconName="'icon-remove_16x16'"
        :size="16"
        v-key2click
        @click="model?.removeItem(model)"
        :class="model?.removeClassNames"
        :title="model?.removeTooltip"
        :aria-label="model?.removeTooltip"
      ></sv-svg-icon>
      <sv-svg-icon
        v-if="model?.allowAdd"
        :iconName="'icon-add_16x16'"
        :size="16"
        v-key2click
        @click="model?.addItem(model)"
        :class="model?.addClassNames"
        :title="model?.addTooltip"
        :aria-label="model?.addTooltip"
      ></sv-svg-icon>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
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
