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
    <span class="svc-text svc-text--normal svc-text--bold">
      {{ model.title }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: Action }>();
useBase(() => props.model);
const onClick = (event: Event) => {
  event.stopPropagation();
  props.model.action();
};
</script>
