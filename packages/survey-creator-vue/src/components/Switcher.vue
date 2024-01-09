<template>
  <button
    :class="item.getActionBarItemCss()"
    type="button"
    v-on:click="
      (args: any) => {
        item.action(item, !!args.pointerType);
      }
    "
    v-on:keyup="
      (evt) => {
        evt.stopPropagation();
      }
    "
    v-bind:disabled="item.disabled"
    v-bind:title="item.tooltip || item.title"
    v-bind:aria-checked="item.ariaChecked"
    v-bind:aria-expanded="item.ariaExpanded"
    v-bind:role="item.ariaRole"
    v-key2click="{ processEsc: false, disableTabStop: item.disableTabStop }"
  >
    <div :class="item.getSwitcherIconCss()">
      <div class="svc-switcher__icon-thumb"></div>
    </div>
    <span v-if="item.hasTitle" class="svc-switcher__title">{{ item.title }}</span>
  </button>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { useBase } from "survey-vue3-ui";
import type { Switcher } from "survey-creator-core";
const props = defineProps<{ item: Switcher }>();
useBase(() => props.item);
</script>
