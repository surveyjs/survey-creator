<template>
  <div class="svc-tabbed-menu" ref="container">
    <template v-for="action in model.renderedActions" :key="action.id">
      <svc-tabbed-menu-item-wrapper
        :item="action"
      ></svc-tabbed-menu-item-wrapper>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ResponsivityManager } from "survey-core";
import type { TabbedMenuContainer } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { onMounted, onUnmounted, ref } from "vue";
const props = defineProps<{ model: TabbedMenuContainer }>();
let responsivityManager: ResponsivityManager = undefined as any;
const container = ref();
useBase(() => props.model);
onMounted(() => {
  responsivityManager = new ResponsivityManager(
    container.value,
    props.model,
    ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content"
  );
});
onUnmounted(() => {
  responsivityManager.dispose();
});
</script>
