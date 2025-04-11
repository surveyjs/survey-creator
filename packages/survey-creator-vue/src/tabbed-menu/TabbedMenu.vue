<template>
  <div class="svc-tabbed-menu" ref="container" role="tablist">
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
import { ResponsivityManager } from "survey-core";
import type { TabbedMenuContainer } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { onMounted, onUnmounted, ref } from "vue";
const props = defineProps<{ model: TabbedMenuContainer }>();
let responsivityManager: ResponsivityManager = undefined as any;
const container = ref();
useBase(() => props.model);
onMounted(() => {
  responsivityManager = new ResponsivityManager(container.value, props.model);
});
onUnmounted(() => {
  responsivityManager.dispose();
  responsivityManager = undefined as any;
});
</script>
