<template>
  <template v-if="model.visible">
    <component :is="model.componentName" :model="model.model"></component>
  </template>
</template>

<script lang="ts" setup>
import type { SidebarTabModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarTabModel }>();
useBase(() => props.model);
</script>
