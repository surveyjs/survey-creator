<template>
  <template v-for="(action, index) in model.actions" :key="index">
    <svc-tab-button :model="action"></svc-tab-button>
  </template>
</template>

<script lang="ts" setup>
import type { ActionContainer } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: ActionContainer }>();
useBase(() => props.model);
</script>
