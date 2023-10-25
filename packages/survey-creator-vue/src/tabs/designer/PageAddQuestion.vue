<template>
  <div class="svc-page__add-new-question svc-btn"
    data-bind="click: addNewQuestion, key2click, clickBubble: false, event: { mouseover: function(m, e) { hoverStopper(e, $element); }}">
    <span class="svc-text svc-text--normal svc-text--bold" data-bind="text: $data.addNewQuestionText">
    {{item.data.addNewQuestionText}}
    </span>
    <!-- ko with: questionTypeSelectorModel -->
    <button type="button"
      data-bind="click: action, key2click, clickBubble: false, attr: { title: title, 'aria-label': title }"
      class="svc-page__question-type-selector">
      <sv-svg-icon class="svc-page__question-type-selector-icon" params="iconName: iconName, size: 24, title: title">
      </sv-svg-icon>
      <sv-popup :model="item.data.questionTypeSelectorModel.popupModel"></sv-popup>
    </button>
    <!-- /ko -->
  </div>
</template>
<script lang="ts" setup>
import type { } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: any }>();
useBase(() => props.item);
</script>
