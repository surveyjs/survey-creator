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
        role="button"
        :aria-label="adorner.tooltip"
        ><SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-add_16x16'"
          :size="'auto'"
          :title="adorner.tooltip"
        ></SvComponent
      ></span>
      <span
        v-if="adorner.allowRemove"
        class="svc-item-value-controls__button svc-item-value-controls__remove"
        v-key2click
        @click="adorner.remove(adorner)"
        @blur="adorner.onFocusOut($event)"
        role="button"
        :aria-label="adorner.tooltip"
        ><SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-remove_16x16'"
          :size="'auto'"
          :title="adorner.tooltip"
        ></SvComponent
      ></span>
    </div>
    <div class="svc-item-value__item" @click="adorner.select(adorner, $event)">
      <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
    </div>
    <div v-if="adorner.canShowPanel()" class="svc-item-value-controls svc-choice-elements-button-container">
        <span
            role="button"
            class="svc-item-value-controls__button svc-item-value-controls__add svc-choice-elements-button"
            @click="adorner.togglePanel()"
            v-key2click
          >
            <SvComponent
              :is="'sv-svg-icon'"
              :iconName="adorner.showPanel ? 'icon-collapsepanel-16x16' : 'icon-expandpanel-16x16'"
              :size="'auto'"
            ></SvComponent>
          </span>
    </div>
  </div>
  <SvComponent
    v-if="adorner.showPanel"
    :is="getPanelComponentName(item.panel)"
    v-bind="getPanelComponentData(item.panel)"
  />
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { ItemValue, PanelModel, QuestionSelectBase, SurveyModel } from "survey-core";
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


const getPanelComponentName = (panel: PanelModel): string => {
  const survey = creator.value.survey;
  if (survey) {
    const name = survey.getElementWrapperComponentName(panel);
    if (name) {
      return name;
    }
  }
  return "panel";
};
const getPanelComponentData = (panel: PanelModel): any => {
  const survey = creator.value.survey;
  let data: any;
  if (survey) {
    data = survey.getElementWrapperComponentData(panel);
  }
  return {
    componentName: "survey-panel",
    componentData: {
      element: panel,
      data: data,
    },
  };
};
</script>
