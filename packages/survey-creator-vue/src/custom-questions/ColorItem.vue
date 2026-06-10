<template>
  <div class="sd-color-swatch-item">
    <div class="sd-color-swatch-item__label">
      <SvComponent :is="'survey-string'" :locString="item.locTitle"></SvComponent>
    </div>
    <Swatch :color="item.value" />
  </div>
</template>
<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { ItemValue, ListModel } from "survey-core";
import { useBase } from "survey-vue3-ui";
import Swatch from "./Swatch.vue";

const props = defineProps<{ model: ListModel; item: ItemValue }>();
useBase(() => props.item);
</script>
