<template>
  <div
    class="svc-item-value-wrapper"
    @pointerdown="adorner.onPointerDown($event)"
    :data-sv-drop-target-item-value="adorner.isDraggable ? item.value : null"
    ref="root"
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
        <SvComponent
          :is="'sv-svg-icon'"
          class="svc-item-value-controls__drag-icon"
          :iconName="'icon-drag-24x24'"
          :size="'auto'"
          :title="adorner.dragTooltip"
        ></SvComponent>
      </span>
      <span
        v-if="adorner.allowAdd"
        class="svc-item-value-controls__button svc-item-value-controls__add"
        v-key2click
        @click="adorner.add(adorner)"
        :aria-label="undefined"
        ><SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-add_16x16'"
          :size="'auto'"
          :title="undefined"
        ></SvComponent
      ></span>
      <span
        v-if="adorner.allowRemove"
        class="svc-item-value-controls__button svc-item-value-controls__remove"
        v-key2click
        @click="adorner.remove(adorner)"
        @blur="adorner.onFocusOut($event)"
        :aria-label="undefined"
        ><SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-remove_16x16'"
          :size="'auto'"
          :title="undefined"
        ></SvComponent
      ></span>
    </div>
    <div class="svc-item-value__item" @click="adorner.select(adorner, $event)">
      <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { ItemValue, QuestionSelectBase } from "survey-core";
import {
  ItemValueWrapperViewModel,
  type SurveyCreatorModel,
} from "survey-creator-core";
import {
  computed,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";

const root = ref<HTMLElement>();
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

const stopWatch = watch(
  () => item.value,
  (newValue, oldValue) => {
    if (newValue && root.value) {
      newValue.setRootElement(root.value);
    }
    if (oldValue) {
      oldValue.setRootElement(undefined as any);
    }
  }
);
onMounted(() => {
  if (root.value && item.value) {
    item.value.setRootElement(root.value);
  }
});
onUnmounted(() => {
  item.value.setRootElement(undefined as any);
});
const adorner = useCreatorModel(
  () =>
    new ItemValueWrapperViewModel(creator.value, question.value, item.value),
  [() => creator.value, () => question.value, () => item.value],
  (value) => {
    value.dispose();
  }
);

onBeforeUnmount(() => {
  stopWatch();
});
</script>
