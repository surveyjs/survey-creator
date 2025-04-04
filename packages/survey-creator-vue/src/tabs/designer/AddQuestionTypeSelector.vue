<template>
  <button
    type="button"
    v-on:click="
      (e) => {
        questionTypeSelectorModel.action();
        e.stopPropagation();
      }
    "
    :title="questionTypeSelectorModel.title"
    v-key2click
    :aria-label="questionTypeSelectorModel.title"
    class="svc-element__question-type-selector"
  >
    <SvComponent
      :is="'sv-svg-icon'"
      class="svc-element__question-type-selector-icon"
      v-bind="{
        iconName: questionTypeSelectorModel.iconName,
        size: 'auto',
        title: questionTypeSelectorModel.title,
      }"
    ></SvComponent>
    <SvComponent
      v-if="renderPopup"
      :is="'sv-popup'"
      :model="questionTypeSelectorModel.popupModel"
    ></SvComponent>
  </button>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { useBase } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
const props = defineProps<{
  questionTypeSelectorModel: any;
  renderPopup: any;
}>();
useBase(() => props.questionTypeSelectorModel);
</script>
