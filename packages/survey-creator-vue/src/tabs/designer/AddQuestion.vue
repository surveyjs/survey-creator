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
    <svc-add-question-type-selector v-if="needRenderPopup" :questionTypeSelectorModel="item.data.questionTypeSelectorModel" :renderPopup="needRenderPopup"></svc-add-question-type-selector>
  </div>
  <svc-add-question-type-selector v-if="!needRenderPopup" :questionTypeSelectorModel="item.data.questionTypeSelectorModel" :renderPopup="needRenderPopup"></svc-add-question-type-selector>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { Action } from "survey-core";
import type {} from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: Action, buttonClass?: string, renderPopup?: any}>();
useBase(() => props.item.data);
const rootCss = computed(() => 'svc-element__add-new-question ' + (props.buttonClass || 'svc-btn'));
const needRenderPopup = computed(() => props.renderPopup === undefined || props.renderPopup !== false);
</script>
