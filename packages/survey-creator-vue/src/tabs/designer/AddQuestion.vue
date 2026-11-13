<template>
  <div
    :class="item.getActionBarItemCss()"
    v-on:click="onClick($event)"
    v-on:mouseover="(e) => onMouseOver(e)"
  >
    <button type="button" :class="item.getActionBarItemTitleCss() + ' svc-surface-btn__title-button'">
      {{ item.data.addNewQuestionText }}
    </button>
    <div :class="item.cssClasses.itemTypeSelector">
      <SvComponent :is="'sv-action-bar-item-dropdown'" :item="item.data.questionTypeSelectorModel"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Action } from "survey-core";
import { SvComponent } from "survey-vue3-ui";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{item: Action;}>();
useBase(() => props.item.data);
const onClick = (event: Event) => {
 props.item.data.addNewQuestion(props.item, event);
  event.stopPropagation();
}
const onMouseOver = (event: Event) => {
  props.item.data.hoverStopper && props.item.data.hoverStopper(event, event.currentTarget)
}
</script>
