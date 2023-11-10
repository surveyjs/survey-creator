<template>
  <div
    class="svc-tabbed-menu-item"
    :class="{
      'svc-tabbed-menu-item--selected': item.active,
      'svc-tabbed-menu-item--disabled': item.disabled,
    }"
    @click="item.action"
    v-key2click
  >
    <span
      class="svc-text svc-text--normal svc-tabbed-menu-item__text"
      :class="{ 'svc-text--bold': item.active }"
    >
      {{ item.title }}
    </span>
  </div>
</template>
<script setup lang="ts">
import type { TabbedMenuItem } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: TabbedMenuItem }>();
useBase(() => props.item);
</script>
