<template>
  <div v-if="item" class="svc-icon-item">
    <SvComponent
      :is="'sv-svg-icon'"
      class="svc-icon-item__icon"
      size="auto"
      :iconName="item.value"
    />
    <span class="svc-icon-item__text">{{ item.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { ItemValue } from "survey-core";

defineProps<{
  item: ItemValue;
}>();
</script>
