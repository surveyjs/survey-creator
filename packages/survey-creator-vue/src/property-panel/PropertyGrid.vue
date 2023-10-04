<template>
  <survey v-if="!!model.survey" :survey="model.survey"></survey>
</template>
<script lang="ts" setup>
import type { PropertyGridViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: PropertyGridViewModel }>();
useBase(() => props.model);
</script>
