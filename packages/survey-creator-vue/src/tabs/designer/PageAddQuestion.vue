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
  >
    <span class="svc-text svc-text--normal svc-text--bold">
      {{ item.data.addNewQuestionText }}
    </span>
    <button v-if="needRenderPopup"
      type="button"
      v-on:click="
        (e) => {
          item.data.questionTypeSelectorModel.action();
          e.stopPropagation();
        }
      "
      :title="item.title"
      v-key2click
      :aria-label="item.title"
      class="svc-element__question-type-selector"
    >
      <sv-svg-icon
        class="svc-element__question-type-selector-icon"
        v-bind="{
          iconName: item.data.questionTypeSelectorModel.iconName,
          size: 24,
          title: item.data.questionTypeSelectorModel.title,
        }"
      ></sv-svg-icon>
      <sv-popup v-if="needRenderPopup"
        :model="item.data.questionTypeSelectorModel.popupModel"
      ></sv-popup>
    </button>
  </div>
  <button v-if="!needRenderPopup"
    type="button"
    v-on:click="
      (e) => {
        item.data.questionTypeSelectorModel.action();
        e.stopPropagation();
      }
    "
    :title="item.title"
    v-key2click
    :aria-label="item.title"
    class="svc-element__question-type-selector"
  >
    <sv-svg-icon
      class="svc-element__question-type-selector-icon"
      v-bind="{
        iconName: item.data.questionTypeSelectorModel.iconName,
        size: 24,
        title: item.data.questionTypeSelectorModel.title,
      }"
    ></sv-svg-icon>
    <sv-popup v-if="needRenderPopup"
      :model="item.data.questionTypeSelectorModel.popupModel"
    ></sv-popup>
  </button>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { Action } from "survey-core";
import type {} from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: Action, buttonClass: string, renderPopup: any}>();
useBase(() => props.item.data);
const rootCss = computed(() => 'svc-element__add-new-question ' + (props.buttonClass || 'svc-btn'));
const needRenderPopup = computed(() => props.renderPopup === undefined || props.renderPopup !== false);
</script>
