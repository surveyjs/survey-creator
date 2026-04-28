<template>
  <div
    v-if="adorner && !adorner.isDisposed"
    class="svc-question__adorner"
    :class="adorner.rootCss()"
    @dblclick="(e) => adorner.dblclick(e)"
    @mouseover="adorner.hover($event, $event.currentTarget)"
    @mouseleave="adorner.hover($event, $event.currentTarget)"
    :data-sv-drop-target-survey-element="adorner.element.name || null"
    ref="root"
  >
    <div
      v-if="adorner.showHiddenTitle"
      :class="adorner.cssCollapsedHiddenHeader"
    >
      <SvComponent
        v-if="!!adorner.element.hasTitle"
        :is="'survey-element-title'"
        :element="adorner.element"
        :renderActions="false"
      />
      <div v-else :class="adorner.cssCollapsedHiddenTitle">
        <span class="svc-fake-title">{{ adorner.element.name }}</span>
      </div>
    </div>
    <div
      :class="adorner.css()"
      v-key2click="{ disableTabStop: true }"
      @click="
        adorner.element.isInteractiveDesignElement
          ? adorner.select(adorner, $event)
          : null
      "
    >
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--left"
      ></div>
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--right"
      ></div>
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--top"
      ></div>
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--bottom"
      ></div>
      <div
        v-if="
          adorner.allowDragging && adorner.element.isInteractiveDesignElement
        "
        class="svc-question__drag-area"
        @pointerdown="adorner.onPointerDown($event)"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          class="svc-question__drag-element"
          :iconName="'icon-drag-area-indicator_24x16'"
          :size="'auto'"
        ></SvComponent>
        <div class="svc-question__top-actions">
          <SvComponent
            :is="'sv-action-bar'"
            :model="adorner.topActionContainer"
            :handleClick="false"
          ></SvComponent>
        </div>
      </div>
      <template v-if="adorner.needToRenderContent">
        <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
        <div
          v-if="adorner.isEmptyElement"
          class="svc-panel__placeholder_frame-wrapper"
        >
          <div class="svc-panel__placeholder_frame">
            <div class="svc-panel__placeholder">
              {{ adorner.placeholderText }}
            </div>
            <SvComponent v-if="adorner.showAddQuestionButton" :is="'sv-action-bar'" :model="adorner.addQuestionActionsContainer"></SvComponent>
          </div>
        </div>
        <SvComponent v-if="!adorner.isEmptyElement && adorner.showAddQuestionButton" :is="'sv-action-bar'" :model="adorner.addQuestionActionsContainer"></SvComponent>
        <div
          v-if="adorner.element.isInteractiveDesignElement"
          class="svc-question__content-actions"
          @focusin="adorner.select(adorner, $event)"
        >
          <SvComponent
            :is="'sv-action-bar'"
            :model="adorner.actionContainer"
            :handleClick="false"
          ></SvComponent>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { Question } from "survey-core";
import {
  PanelAdornerViewModel,
  type SurveyCreatorModel,
} from "survey-creator-core";
import { onMounted, onUpdated, ref } from "vue";
const root = ref();
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const adorner = useCreatorModel(
  () =>
    new PanelAdornerViewModel(
      props.componentData.data as SurveyCreatorModel,
      props.componentData.element as Question,
      null as any
    ),
  [() => props.componentData.data, () => props.componentData.element],
  (value) => {
    value.dispose();
  }
);
onUpdated(() => {
  if (root.value && adorner.value) {
    adorner.value.rootElement = root.value;
  }
});
onMounted(() => {
  if (root.value && adorner.value) {
    adorner.value.rootElement = root.value;
  }
});
</script>
