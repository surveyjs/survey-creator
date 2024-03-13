<template>
  <div
    v-if="model"
    class="svc-question__adorner"
    :class="model.rootCss()"
    @mouseover="model.hover($event, $event.currentTarget)"
    @mouseleave="model.hover($event, $event.currentTarget)"
    :data-sv-drop-target-survey-element="model.element.name || null"
  >
    <div
      v-if="model.element.isInteractiveDesignElement"
      class="svc-question__content"
      :class="model.css()"
      v-key2click
      @click="model.select(model, $event)"
      data-bind="clickBubble: false"
    >
      <div
        v-if="model.allowDragging"
        class="svc-question__drag-area"
        @pointerdown="model.onPointerDown($event)"
      >
        <sv-svg-icon
          class="svc-question__drag-element"
          :iconName="'icon-drag-area-indicator_24x16'"
          :size="24"
        ></sv-svg-icon>
      </div>
      <div class="svc-widget__content">
        <component :is="componentName" v-bind="componentData"></component>
      </div>
      <div v-if="model.isEmptyElement" class="svc-panel__placeholder_frame">
        <div
          class="svc-panel__placeholder"
          data-bind="text: placeholderText"
        ></div>
      </div>
      <div class="svc-question__content-actions">
        <sv-action-bar
          :model="model.actionContainer"
          :handleClick="false"
        ></sv-action-bar>
      </div>
    </div>

    <template v-if="!model.element.isInteractiveDesignElement">
      <component :is="componentName" v-bind="componentData"></component>
      <div v-if="model.isEmptyElement" class="svc-panel__placeholder_frame">
        <div class="svc-panel__placeholder">{{ model.placeholderText }}</div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { Question } from "survey-core";
import { SurveyCreatorModel, QuestionAdornerViewModel } from "survey-creator-core";

const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
// useBase(() => new PageAdorner(props.creator, props.page));
const model = useCreatorModel(
  () =>
    new QuestionAdornerViewModel(
      props.componentData.data as SurveyCreatorModel,
      props.componentData.element as Question,
      null as any
    ),
  [() => props.componentData.data, () => props.componentData.element],
  (value) => {
    value.dispose();
  }
);
</script>
