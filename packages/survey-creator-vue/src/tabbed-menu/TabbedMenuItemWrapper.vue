<template>
  <span
    class="svc-tabbed-menu-item-container"
    :class="[!item.isVisible ? 'sv-action--hidden' : '', item.css]"
    ref="root"
  >
    <div class="sv-action__content">
      <SvComponent
        :is="item.component || 'svc-tabbed-menu-item'"
        :item="item"
      ></SvComponent>
    </div>
  </span>
</template>
<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { TabbedMenuItem } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { nextTick, onMounted, onUnmounted, ref } from "vue";
const root = ref<HTMLDivElement>();
const props = defineProps<{ item: TabbedMenuItem }>();
useBase(() => props.item);
onMounted(() => {
  const item = props.item;
  item.updateModeCallback = (mode, callback) => {
    item.mode = mode;
    nextTick(() => callback(mode, root.value as HTMLDivElement));
  };
  item.afterRender();
});
onUnmounted(() => {
  const item = props.item;
  item.updateModeCallback = undefined as any;
});
</script>
