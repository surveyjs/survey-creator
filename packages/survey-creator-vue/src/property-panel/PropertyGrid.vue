<template>
  <div
    class="spg-container"
    :class="{ 'spg-container_search': model.searchEnabled }"
  >
    <SvComponent :name="'svc-search'" :model="model.searchManager"></SvComponent>
    <survey v-if="!!model.survey" :survey="model.survey"></survey>
  </div>
</template>
<script lang="ts" setup>
 import { SvComponent } from "survey-vue3-ui";
import type { PropertyGridViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: PropertyGridViewModel }>();
useBase(() => props.model);
</script>
