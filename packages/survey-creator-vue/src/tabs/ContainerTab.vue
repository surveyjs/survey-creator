<template>
  <SvComponent :is="'svc-component-container'" :model="model.containerModel" />
</template>

<script lang="ts" setup>
import { SvComponent, useBase } from "survey-vue3-ui";
import type { TabContainerViewModel } from "survey-creator-core";

const props = defineProps<{ model: TabContainerViewModel }>();
useBase(() => props.model);
</script>

