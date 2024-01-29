<template>
  <div
    tabindex="-1"
    class="svc-matrix-cell"
    @click="adorner?.selectContext(adorner, $event)"
    @mouseover="adorner?.hover($event, $event.currentTarget)"
    @mouseleave="adorner?.hover($event, $event.currentTarget)"
  >
    <div
      class="svc-matrix-cell--selected"
      :class="{ 'svc-visible': adorner?.isSelected }"
    ></div>
    <slot></slot>
    <div
      v-if="adorner?.isSupportCellEditor"
      class="svc-matrix-cell__question-controls"
    >
      <span
        class="svc-matrix-cell__question-controls-button"
        @click="adorner.editQuestion(adorner, $event)"
        v-key2click
      >
        <sv-svg-icon :iconName="'icon-edit'" :size="24"></sv-svg-icon>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SurveyCreatorModel, MatrixCellWrapperViewModel } from "survey-creator-core";
import type { QuestionSelectBase } from "survey-core";
import { computed } from "vue";
import { useCreatorModel } from "@/creator-model";

const props = defineProps<{
  componentData: any;
}>();
const creator = computed<SurveyCreatorModel>(() => props.componentData.creator);
const row = computed(() => props.componentData.row);
const column = computed(() => props.componentData.column);
const element = computed<QuestionSelectBase>(() => props.componentData.element);
const question = computed<QuestionSelectBase>(
  () => props.componentData.question
);
const adorner = useCreatorModel(
  () =>
    props.componentData
      ? new MatrixCellWrapperViewModel(
          creator.value,
          element.value,
          question.value,
          row.value,
          column.value || element.value.cell?.column
        )
      : undefined,
  [
    () => creator.value,
    () => row.value,
    () => column.value,
    () => question.value,
  ]
);
</script>
