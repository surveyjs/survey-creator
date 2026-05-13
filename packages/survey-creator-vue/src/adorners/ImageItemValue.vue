<template>
  <div
    @pointerdown="adorner.onPointerDown($event)"
    :class="adorner.getRootCss()"
    :data-sv-drop-target-item-value="adorner.isDraggable ? item.value : null"
    ref="root"
    @dragstart="preventDragHandler"
    @dragenter="adorner.onDragEnter($event)"
    @dragover="adorner.onDragOver($event)"
    @dragleave="adorner.onDragLeave($event)"
    @drop="adorner.onDrop($event)"
  >
    <div
      class="svc-image-item-value-wrapper__ghost"
      :style="newItemStyle"
    ></div>

    <div class="svc-image-item-value-wrapper__content">
      <input
        type="file"
        aria-hidden="true"
        tabindex="-1"
        :accept="adorner.acceptedTypes"
        class="svc-choose-file-input"
      />

      <template v-if="!adorner.isNew && !adorner.isUploading">
        <div v-if="!adorner.isNew" class="svc-image-item-value__item">
          <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
        </div>
        <SvComponent :is="'sv-action-bar'" :model="adorner.topActionsContainer" v-if="adorner.canRenderControls"></SvComponent>
      </template>
      <template v-else>
        <div
          class="svc-image-item-value__item"
        >
          <div class="sd-imagepicker__item sd-imagepicker__item--inline">
            <label class="sd-imagepicker__label">
              <div :style="newItemStyle" class="sd-imagepicker__image">
                <div
                  class="svc-image-item-value__loading"
                  v-if="adorner.isUploading"
                >
                  <SvComponent :is="'sv-loading-indicator'"></SvComponent>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div
          class="svc-image-item-value-controls"
          @pointerdown="(event) => event.stopPropagation()"
          v-if="adorner.allowAdd && !adorner.isUploading"
        >
          <span class="svc-image-item-value__placeholder" v-if="adorner.showPlaceholder">{{adorner.placeholderText}}</span>
          <SvComponent :is="'sv-action-bar'" :model="adorner.actionsContainer"></SvComponent>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { ImageItemValue, QuestionImagePickerModel } from "survey-core";
import {
  SurveyCreatorModel,
  ImageItemValueWrapperViewModel,
} from "survey-creator-core";
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  componentName: string;
  componentData: {
    data: {
      creator: SurveyCreatorModel;
    };
    question: QuestionImagePickerModel;
    item: ImageItemValue;
  };
}>();
const creator = computed(() => props.componentData.data.creator);
const question = computed(() => props.componentData.question);
const item = computed(() => props.componentData.item);
const root = ref<HTMLDivElement>();
const adorner = useCreatorModel(
  () => {
    const viewModel = new ImageItemValueWrapperViewModel(
      creator.value,
      question.value,
      item.value,
      null as any,
      null as any
    );
    if (root?.value) {
      viewModel.itemsRoot = root.value;
    }
    return viewModel;
  },
  [() => creator.value, () => question.value, () => item.value],
  (value) => {
    value.dispose();
  }
);
const preventDragHandler = (e: Event) => {
  e.preventDefault();
}
const newItemStyle = computed(() => {
  const needStyle = !adorner.value.getIsNewItemSingle();
  return {
    width: needStyle ? question.value.renderedImageWidth + "px" : undefined,
    height: needStyle ? question.value.renderedImageHeight + "px" : undefined,
  };
});
onMounted(() => {
  if (root.value) {
    adorner.value.itemsRoot = root.value;
  }
});
</script>
