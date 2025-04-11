<template>
  <div :class="model.cssClasses">
    <div class="svc-row__drop-indicator svc-row__drop-indicator--top"></div>
    <div class="svc-row__drop-indicator svc-row__drop-indicator--bottom"></div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { QuestionRowModel } from "survey-core";
import { SurveyCreatorModel, RowViewModel } from "survey-creator-core";
import { computed, onMounted, onUnmounted } from "vue";

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

onMounted(() => {
  model.value && model.value.subscribeElementChanges();
});
onUnmounted(() => {
  model.value && model.value.unsubscribeElementChanges();
});

</script>
