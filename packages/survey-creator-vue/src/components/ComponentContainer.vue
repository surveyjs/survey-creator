<template>

  <div class="svc-component-container" >
    <SvComponent :is="element.componentName" :model="element.componentData" v-for="(element, index) in props.model.elements" :key="index" />
  </div>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { ComponentContainerModel } from 'survey-creator-core';

const props = defineProps<{
  model: ComponentContainerModel;
}>();
</script>
