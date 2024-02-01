<template>
  <div :class="model.cssClasses">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { QuestionRowModel } from "survey-core";
import { SurveyCreatorModel, RowViewModel } from "survey-creator-core";
import { computed } from "vue";

const props = defineProps<{
  componentData: { creator: SurveyCreatorModel; row: QuestionRowModel };
}>();

const creator = computed(() => props.componentData.creator);
const row = computed(() => props.componentData.row);

const model = useCreatorModel(
  () => new RowViewModel(creator.value, row.value, undefined as any),
  [() => creator.value, () => row.value],
  (value) => {
    value.dispose();
  }
);
</script>
