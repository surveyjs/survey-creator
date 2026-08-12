<template>
  <div v-if="props.model.wrapped" :class="props.model.cssClass">
    <SvComponent :is="'sv-scroll'" v-if="props.model.scrollable">
      <SvComponent
        :is="element.componentName"
        v-bind="element.componentData"
        v-for="(element, index) in props.model.elements"
        :key="index"
      />
    </SvComponent>
    <template v-else>
      <SvComponent
        :is="element.componentName"
        v-bind="element.componentData"
        v-for="(element, index) in props.model.elements"
        :key="index"
      />
    </template>
  </div>
  <template v-else>
    <SvComponent :is="'sv-scroll'" v-if="props.model.scrollable">
      <SvComponent
        :is="element.componentName"
        v-bind="element.componentData"
        v-for="(element, index) in props.model.elements"
        :key="index"
      />
    </SvComponent>
    <template v-else>
      <SvComponent
        :is="element.componentName"
        v-bind="element.componentData"
        v-for="(element, index) in props.model.elements"
        :key="index"
      />
    </template>
  </template>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { ComponentContainerModel } from 'survey-creator-core';

const props = defineProps<{
  model: ComponentContainerModel;
}>();
</script>
