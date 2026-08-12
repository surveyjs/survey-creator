<template>
  <template v-for="(action, index) in model.actions" :key="index">
    <SvComponent :is="'svc-tab-button'" :model="action"></SvComponent>
  </template>
</template>

<script lang="ts" setup>
import type { ActionContainer, Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
const props = defineProps<{ model: ActionContainer<Action> }>();
useBase(() => props.model);
</script>
