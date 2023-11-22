<template>
  <span
    class="svc-tabbed-menu-item-container"
    :class="[!item.isVisible ? 'sv-action--hidden' : '', item.css]"
  >
    <div class="sv-action__content">
      <component
        :is="item.component || 'svc-tabbed-menu-item'"
        :item="item"
      ></component>
    </div>
  </span>
</template>
<script setup lang="ts">
import type { TabbedMenuItem } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: TabbedMenuItem }>();
useBase(() => props.item);
</script>
