<template>
  <div v-if="model.visible" class="svc-sidebar-tabs__item">
    <SvComponent :is="componentName" :item="model"> </SvComponent>
  </div>
</template>

<script lang="ts" setup>
import { Action } from "survey-core";
import {
  SvComponent,
  useBase
} from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: Action }>();
const componentName = computed(
  () => props.model.component || "sv-action-bar-item"
);
useBase(() => props.model);
</script>
