<template>
  <div
    class="svc-question__adorner"
    :class="model.rootCss()"
    ref="root"
    @dblclick="(e) => model.dblclick(e)"
    v-on:mouseover="(e) => model.hover(e, e.currentTarget)"
    v-on:mouseleave="(e) => model.hover(e, e.currentTarget)"
    :data-sv-drop-target-survey-element="model.element.name || null"
    data-bind="css: rootCss(), attr: { 'data-sv-drop-target-survey-element': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }"
  >
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
        v-if="model.allowDragging"
        class="svc-question__drag-area"
        v-on:pointerdown="(e) => model.onPointerDown(e)"
      >
        <sv-svg-icon
          class="svc-question__drag-element"
          v-bind="{
            css: 'svc-question__drag-element',
            iconName: 'icon-drag-area-indicator_24x16',
            size: 24,
          }"
        ></sv-svg-icon>
        <div class="svc-question__top-actions">
          <sv-action-bar
            :model="model.topActionContainer"
            :handleClick="false"
          ></sv-action-bar>
        </div>
      </div>

      <sv-template-renderer
        :componentName="componentName"
        :componentData="componentData"
      ></sv-template-renderer>
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
      <component
        v-if="model.isEmptyElement && showPlaceholderComponent"
        :is="placeholderComponent"
        v-bind="placeholderComponentData"
      ></component>
      <!-- ko if: koIsEmptyElement() && !!$data.placeholderComponentData -->
      <!-- ko let: { question: placeholderComponentData.data }  -->
      <!-- ko component: { name: 'sv-template-renderer', params: { componentData: null, templateData: placeholderComponentData } } -->
      <!-- /ko -->
      <!-- /ko -->
      <!-- /ko -->

      <!-- ko if: adornerComponent -->
      <!-- ko component: { name: adornerComponent, params: { model: $data } } -->
      <!-- /ko -->
      <!-- /ko -->
      <component
        v-if="adornerComponent"
        :is="adornerComponent"
        :model="model"
        :element="element"
      />
      <svc-question-banner
        v-if="model.isBannerShowing"
        :model="questionBannerParams"
      ></svc-question-banner>
      <div
        class="svc-question__content-actions"
        v-on:focusin="
          (e) => {
            model.select(model, e);
            e.stopPropagation();
          }
        "
      >
        <sv-action-bar
          :model="model.actionContainer"
          :handleClick="false"
        ></sv-action-bar>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { QuestionAdornerViewModel } from "survey-creator-core";
import { computed, ref } from "vue";
const props = defineProps<{
  model: QuestionAdornerViewModel;
  element: any;
  adornerComponent?: string;
  showPlaceholderComponent?: boolean;
  placeholderComponent?: string;
  placeholderComponentData?: any;
  componentName: string;
  componentData: any;
}>();
const root = ref();
defineExpose({
  questionRoot: root,
});
const questionBannerParams = computed(() =>
  props.model.isBannerShowing ? props.model.createBannerParams() : null
);
</script>
