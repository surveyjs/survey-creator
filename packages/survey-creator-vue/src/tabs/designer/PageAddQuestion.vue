<template>
  <div
    class="svc-page__add-new-question svc-btn"
    v-on:click="
      (e) => {
        item.data.addNewQuestion(item, e);
        e.stopPropagation();
      }
    "
    v-on:mouseleave="(e) => item.data.hoverStopper(e, e.currentTarget)"
    data-bind="click: addNewQuestion, key2click, clickBubble: false, event: { mouseover: function(m, e) { hoverStopper(e, $element); }}"
  >
    <span
      class="svc-text svc-text--normal svc-text--bold"
      data-bind="text: $data.addNewQuestionText"
    >
      {{ item.data.addNewQuestionText }}
    </span>
    <!-- ko with: questionTypeSelectorModel -->
    <button
      type="button"
      v-on:click="
        (e) => {
          item.data.questionTypeSelectorModel.action();
          e.stopPropagation();
        }
      "
      data-bind="click: action, key2click, clickBubble: false, attr: { title: title, 'aria-label': title }"
      class="svc-page__question-type-selector"
    >
      <sv-svg-icon
        class="svc-page__question-type-selector-icon"
        v-bind="{
          iconName: item.data.questionTypeSelectorModel.iconName,
          size: 24,
          title: item.data.questionTypeSelectorModel.title,
        }"
      ></sv-svg-icon>
      <sv-popup
        :model="item.data.questionTypeSelectorModel.popupModel"
      ></sv-popup>
    </button>
    <!-- /ko -->
  </div>
</template>
<script lang="ts" setup>
import type {} from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: any }>();
useBase(() => props.item);
</script>
