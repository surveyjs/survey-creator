<template>
  <SvComponent
    v-if="model.visible"
    :is="model.componentName"
    :model="model.componentData"
  ></SvComponent>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { SidebarPageModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarPageModel }>();
useBase(() => props.model);
</script>
