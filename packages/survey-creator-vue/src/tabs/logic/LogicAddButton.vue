<template>
  <div
    role="button"
    class="svc-logic-tab__content-action svc-btn"
    @click="onClick"
    v-key2click
    :class="{
      'svc-logic-tab__content-action--disabled':
        model.enabled !== undefined && !model.enabled,
    }"
  >
    <span class="svc-btn__text">
      {{ model.title }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: Action }>();
useBase(() => props.model);
const onClick = (event: Event) => {
  event.stopPropagation();
  props.model.action();
};
</script>
