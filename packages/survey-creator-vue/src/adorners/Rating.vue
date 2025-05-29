<template>
  <div class="svc-rating-question-content">
    <div :class="model?.controlsClassNames">
      <span
        v-if="model?.allowRemove"
        v-key2click
        :class="model?.removeClassNames"
         @click="model?.removeItem(model)"
        role="button"
        :aria-label="model?.removeTooltip"
        ><SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-remove_16x16'"
          :size="'auto'"
          :title="model?.removeTooltip"
        ></SvComponent
      ></span>
      <span
        v-if="model?.allowAdd"
        v-key2click
        :class="model?.addClassNames"
        @click="model?.addItem(model)"
        role="button"
        :aria-label="model?.addTooltip"
        ><SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-add_16x16'"
          :size="'auto'"
          :title="model?.addTooltip"
        ></SvComponent
      ></span>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
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
