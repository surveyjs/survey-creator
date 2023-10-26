<template>
  <div class="svc-question__adorner" :class="model.rootCss()" v-on:mouseover="e => model.hover(e, e.currentTarget)" v-on:mouseleave="e => model.hover(e, e.currentTarget)"
  :data-sv-drop-target-survey-element="model.element.name || null" data-bind="css: rootCss(), attr: { 'data-sv-drop-target-survey-element': element.name || null }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }">
    <div v-on:click="e => { model.select(model, e); e.stopPropagation(); }" :class="model.css()" data-bind="click: koSelect, key2click, clickBubble: false, css: css()">
      <div v-if="model.allowDragging" class="svc-question__drag-area" v-on:pointerdown="e => model.onPointerDown(e)" data-bind="event: {pointerdown: (model, event)=>{onPointerDown(event)}}">
        <sv-svg-icon class="svc-question__drag-element" v-bind="{ css: 'svc-question__drag-element', iconName: 'icon-drag-area-indicator_24x16', size: 24 }"></sv-svg-icon>
      </div>

      <sv-template-renderer :componentName="model.templateData.name" :componentData="model.templateData.data"></sv-template-renderer>
      <div v-if="model.isEmptyElement && !model.placeholderComponentData" class="svc-panel__placeholder_frame">
        <div class="svc-panel__placeholder" data-bind="text: placeholderText">{{model.placeholderText}}</div>
      </div>
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
        v-if="!!model.adornerComponent"
        :is="model.adornerComponent"
        :model="model"
      />

      <!-- ko if: isUsingCarryForward -->
      <!-- ko component: { name: 'svc-question-carryforward', params: $data } -->
      <!-- /ko -->
      <!-- /ko -->
      <div class="svc-question__content-actions">
        <sv-action-bar :model="model.actionContainer" :handleClick="false"></sv-action-bar>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { SurveyModel, Question } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
import { QuestionAdornerViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
// useBase(() => new PageAdorner(props.creator, props.page));
const model = useCreatorModel(() => new QuestionAdornerViewModel(
      props.componentData.data as CreatorBase,
      props.componentData.element as Question,
      { name: props.componentName, data: props.componentData }
    ), [() => props.componentName, () => props.componentData]);
</script>
