<template>
  <span class="spg-color-editor__color-swatch" :style="getStyle()"></span>
  <survey-string :locString="item.locTitle"></survey-string>
</template>
<script setup lang="ts">
import type { ItemValue } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: ItemValue }>();
useBase(() => props.item);
const getStyle = () => {
  return { backgroundColor: props.item.value };
};
</script>
