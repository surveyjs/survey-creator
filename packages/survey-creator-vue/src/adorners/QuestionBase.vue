<template>
  <div
    v-if="model"
    class="svc-question__adorner"
    :class="model.rootCss()"
    ref="root"
    @dblclick="(e) => model.dblclick(e)"
    v-on:mouseover="(e) => model.hover(e, e.currentTarget)"
    v-on:mouseleave="(e) => model.hover(e, e.currentTarget)"
    :data-sv-drop-target-survey-element="model.element.name || null"
    data-bind="css: rootCss(), attr: { 'data-sv-drop-target-survey-element': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }"
  >
    <div v-if="model.showHiddenTitle" :class="model.cssCollapsedHiddenHeader">
      <SvComponent
          v-if="!!element.hasTitle"
          :is="'survey-element-title'"
          :element="element"
      />
      <div v-else :class="model.cssCollapsedHiddenTitle">
        <span class="svc-fake-title">{{ element.name }}</span>
      </div>
    </div>
    <div
      v-on:click="
        (e) => {
          model.select(model, e);
          e.stopPropagation();
        }
      "
      :class="model.css()"
      v-key2click="{ disableTabStop: true }"
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
        v-if="model.allowDragging"
        class="svc-question__drag-area"
        v-on:pointerdown="(e) => model.onPointerDown(e)"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          class="svc-question__drag-element"
          v-bind="{
            css: 'svc-question__drag-element',
            iconName: 'icon-drag-area-indicator_24x16',
            size: 'auto',
          }"
        ></SvComponent>
        <div class="svc-question__top-actions">
          <SvComponent
            :is="'sv-action-bar'"
            :model="model.topActionContainer"
            :handleClick="false"
          ></SvComponent>
        </div>
      </div>
      <template v-if="model.needToRenderContent">
      <SvComponent
        :is="'sv-template-renderer'"
        :componentName="componentName"
        :componentData="componentData"
      ></SvComponent>
      <div
        v-if="model.isEmptyElement && !showPlaceholderComponent"
        class="svc-panel__placeholder_frame-wrapper"
      >
        <div class="svc-panel__placeholder_frame">
          <div class="svc-panel__placeholder" data-bind="text: placeholderText">
            {{ model.placeholderText }}
          </div>
        </div>
      </div>
      <SvComponent
        v-if="model.isEmptyElement && showPlaceholderComponent"
        :is="placeholderComponent"
        v-bind="
          getPlaceholderComponentData && getPlaceholderComponentData(model)
        "
      ></SvComponent>
      <SvComponent
        v-if="adornerComponent"
        :is="adornerComponent"
        :model="model"
        :element="element"
      />
      <SvComponent
        :is="'svc-question-banner'"
        v-if="model.isBannerShowing"
        :model="questionBannerParams"
      ></SvComponent>
      <div
        class="svc-question__content-actions"
        v-on:focusin="onFocusIn"
      >
        <SvComponent
          :is="'sv-action-bar'"
          :model="model.actionContainer"
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
import { QuestionAdornerViewModel } from "survey-creator-core";
import { computed, onMounted, onUpdated, ref } from "vue";
import { useCreatorModel } from "@/creator-model";
const props = defineProps<{
  createModel: () => QuestionAdornerViewModel;
  element: any;
  adornerComponent?: string;
  showPlaceholderComponent?: boolean;
  placeholderComponent?: string;
  getPlaceholderComponentData?: (adorner: QuestionAdornerViewModel) => any;
  componentName: string;
  componentData: any;
}>();
const root = ref();

const model = useCreatorModel(
  () => props.createModel(),
  [() => props.componentName, () => props.componentData],
  (value) => {
    value.dispose();
  }
);
const questionBannerParams = computed(() =>
  model.value.isBannerShowing ? model.value.createBannerParams() : null
);
onUpdated(() => {
  if (root.value && model.value) {
    model.value.rootElement = root.value;
  }
});
onMounted(() => {
  if (root.value && model.value) {
    model.value.rootElement = root.value;
  }
});
const onFocusIn = (e: any) => {
  model.value.select(model.value, e);
  e.stopPropagation();
}
</script>
