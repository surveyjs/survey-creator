<template>
  <SvComponent
    v-if="model.visible"
    :name="model.componentName"
    :model="model.model"
  ></SvComponent>
</template>

<script lang="ts" setup>
 import { SvComponent } from "survey-vue3-ui";
import type { SidebarTabModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarTabModel }>();
useBase(() => props.model);
</script>
