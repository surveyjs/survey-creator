<template>
  <div v-if="item" class="sps-icon-item" style="display: flex">
    <SvComponent
      :is="'sv-svg-icon'"
      class="sps-icon-item__icon"
      size="auto"
      :iconName="item.value"
    />
    <span class="sps-icon-item__text">{{ item.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { ItemValue } from "survey-core";

defineProps<{
  item: ItemValue;
}>();
</script>
