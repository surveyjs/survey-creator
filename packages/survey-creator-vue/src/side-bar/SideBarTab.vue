<template>
  <component
    v-if="model.visible"
    :is="model.componentName"
    :model="model.model"
  ></component>
</template>

<script lang="ts" setup>
import type { SidebarTabModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarTabModel }>();
useBase(() => props.model);
</script>
