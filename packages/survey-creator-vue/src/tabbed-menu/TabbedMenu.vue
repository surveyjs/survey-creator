<template>
  <div class="svc-tabbed-menu" ref="container" role="tablist" :style="model.getRootStyle()">
    <template v-for="action in model.renderedActions" :key="action.renderedId">
      <SvComponent
        :is="'svc-tabbed-menu-item-wrapper'"
        :item="action"
      ></SvComponent>
    </template>
  </div>
</template>
<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { TabbedMenuContainer } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
const props = defineProps<{ model: TabbedMenuContainer }>();
const container = ref();
useBase(() => props.model);
onUpdated(() => {
  props.model.initResponsivityManager(container.value)
});
onMounted(() => {
  props.model.initResponsivityManager(container.value)
});
onUnmounted(() => {
  props.model.resetResponsivityManager();
});
</script>
