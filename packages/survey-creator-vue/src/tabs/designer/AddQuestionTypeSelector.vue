<template>
  <span class="svc-question-type-selector">
    <button
      class="svc-question-type-selector__button"
      v-on:click="
        (e) => {
          questionTypeSelectorModel.action();
          e.stopPropagation();
        }
      "
      :title="questionTypeSelectorModel.title"
      v-key2click
      :aria-label="questionTypeSelectorModel.title"
    >
      <SvComponent
        :is="'sv-svg-icon'"
        class="svc-question-type-selector__icon"
        v-bind="{
          iconName: questionTypeSelectorModel.iconName,
          size: 'auto',
          title: questionTypeSelectorModel.title,
        }"
      ></SvComponent>
    </button>
    <SvComponent
      v-if="renderPopup"
      :is="'sv-popup'"
      :model="questionTypeSelectorModel.popupModel"
    ></SvComponent>
  </span>
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
