<template>
  <span class="spg-color-editor__color-swatch" :style="getStyle()"></span>
  <SvComponent :is="'survey-string'" :locString="item.locTitle"></SvComponent>
</template>
<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { ItemValue } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: ItemValue }>();
useBase(() => props.item);
const getStyle = () => {
  return { backgroundColor: props.item.value };
};
</script>
