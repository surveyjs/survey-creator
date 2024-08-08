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
        <SvComponent
          :name="'sv-svg-icon'"
          class="svc-question__drag-element"
          :iconName="'icon-drag-area-indicator_24x16'"
          :size="24"
        ></SvComponent>
      </div>
      <div class="svc-widget__content">
        <SvComponent :name="componentName" v-bind="componentData"></SvComponent>
      </div>
      <div v-if="model.isEmptyElement" class="svc-panel__placeholder_frame">
        <div
          class="svc-panel__placeholder"
          data-bind="text: placeholderText"
        ></div>
      </div>
      <div class="svc-question__content-actions">
        <SvComponent
          :name="'sv-action-bar'"
          :model="model.actionContainer"
          :handleClick="false"
        ></SvComponent>
      </div>
    </div>

    <template v-if="!model.element.isInteractiveDesignElement">
      <SvComponent :name="componentName" v-bind="componentData"></SvComponent>
      <div v-if="model.isEmptyElement" class="svc-panel__placeholder_frame">
        <div class="svc-panel__placeholder">{{ model.placeholderText }}</div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { Question } from "survey-core";
import {
  SurveyCreatorModel,
  QuestionAdornerViewModel,
} from "survey-creator-core";

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
