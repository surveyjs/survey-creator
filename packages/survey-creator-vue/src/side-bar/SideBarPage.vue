<template>
  <component
    v-if="model.visible"
    :is="model.componentName"
    :model="model.componentName"
  ></component>
</template>

<script lang="ts" setup>
import type { SidebarPageModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarPageModel }>();
useBase(() => props.model);
</script>
