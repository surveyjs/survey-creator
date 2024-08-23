<template>
  <button type="button"
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
    <sv-svg-icon
      class="svc-element__question-type-selector-icon"
      v-bind="{
        iconName: questionTypeSelectorModel.iconName,
        size: 24,
        title: questionTypeSelectorModel.title,
      }"
    ></sv-svg-icon>
    <sv-popup v-if="renderPopup"
      :model="questionTypeSelectorModel.popupModel"
    ></sv-popup>
  </button>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { Action } from "survey-core";
import type {} from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ questionTypeSelectorModel: any, renderPopup: any}>();
useBase(() => props.questionTypeSelectorModel);
</script>
