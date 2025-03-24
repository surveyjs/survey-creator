<template>
  <div
    :class="rootCss"
    v-on:click="
      (e) => {
        item.data.addNewQuestion(item, e);
        e.stopPropagation();
      }
    "
    v-key2click
    v-on:mouseover="(e) => item.data.hoverStopper && item.data.hoverStopper(e, e.currentTarget)"
    role="button"
  >
    <SvComponent
      :is="'sv-svg-icon'"
      class="svc-panel__add-new-question-icon"
      :iconName="'icon-add_24x24'"
      :size="'auto'"
    ></SvComponent>
    <span class="svc-add-new-item-button__text">
      {{ item.data.addNewQuestionText }}
    </span>
    <SvComponent
      :is="'svc-add-question-type-selector'"
      v-if="needRenderPopup" 
      :questionTypeSelectorModel="item.data.questionTypeSelectorModel" :renderPopup="needRenderPopup"
    ></SvComponent>
  </div>
  <SvComponent
    :is="'svc-add-question-type-selector'"
    v-if="!needRenderPopup" :questionTypeSelectorModel="item.data.questionTypeSelectorModel" :renderPopup="needRenderPopup"
  ></SvComponent>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { Action } from "survey-core";
import type {} from "survey-creator-core";
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: Action, buttonClass?: string, renderPopup?: any}>();
useBase(() => props.item.data);
const rootCss = computed(() => 'svc-element__add-new-question ' + (props.buttonClass || 'svc-btn'));
const needRenderPopup = computed(() => props.renderPopup === undefined || props.renderPopup !== false);
</script>
