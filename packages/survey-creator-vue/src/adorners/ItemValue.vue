<template>
  <div
    class="svc-item-value-wrapper"
    @pointerdown="adorner.onPointerDown($event)"
    :data-sv-drop-target-item-value="adorner.isDraggable ? item.value : null"
    :class="{
      'svc-item-value--new': adorner.isNew,
      'svc-item-value--dragging': adorner.isDragging,
      'svc-item-value--ghost': adorner.isDragDropGhost,
      'svc-item-value--movedown': adorner.isDragDropMoveDown,
      'svc-item-value--moveup': adorner.isDragDropMoveUp,
    }"
  >
    <div class="svc-item-value__ghost"></div>
    <div class="svc-item-value-controls">
      <span
        v-if="adorner.isDraggable"
        class="svc-item-value-controls__button svc-item-value-controls__drag"
      >
        <sv-svg-icon
          class="svc-item-value-controls__drag-icon"
          :iconName="'icon-drag-area-indicator'"
          :size="24"
          :title="adorner.dragTooltip"
        ></sv-svg-icon>
      </span>
      <span
        v-if="adorner.allowAdd"
        class="svc-item-value-controls__button svc-item-value-controls__add"
        v-key2click
        @click="adorner.add(adorner)"
        :aria-label="undefined"
        ><sv-svg-icon
          :iconName="'icon-add_16x16'"
          :size="16"
          :title="undefined"
        ></sv-svg-icon
      ></span>
      <span
        v-if="adorner.allowRemove"
        class="svc-item-value-controls__button svc-item-value-controls__remove"
        v-key2click
        @click="adorner.remove(adorner)"
        @blur="adorner.onFocusOut($event)"
        :aria-label="undefined"
        ><sv-svg-icon
          :iconName="'icon-remove_16x16'"
          :size="16"
          :title="undefined"
        ></sv-svg-icon
      ></span>
    </div>
    <div class="svc-item-value__item" @click="adorner.select(adorner, $event)">
      <component :is="componentName" v-bind="componentData"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { ItemValue, QuestionSelectBase } from "survey-core";
import {
  ItemValueWrapperViewModel,
  type SurveyCreatorModel,
} from "survey-creator-core";
import { computed } from "vue";

const props = defineProps<{
  componentName: string;
  componentData: {
    data: {
      creator: SurveyCreatorModel;
    };
    question: QuestionSelectBase;
    item: ItemValue;
  };
}>();
const creator = computed(() => props.componentData.data.creator);
const question = computed(() => props.componentData.question);
const item = computed(() => props.componentData.item);
const adorner = useCreatorModel(
  () =>
    new ItemValueWrapperViewModel(creator.value, question.value, item.value),
  [() => creator.value, () => question.value, () => item.value],
  (value) => {
    value.dispose();
  }
);
</script>
