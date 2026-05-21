<template>
  <div v-if="props.model.wrapped" ref="rootRef" :class="props.model.cssClass">
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
    <div v-if="props.model.scrollable" ref="rootRef">
      <SvComponent :is="'sv-scroll'">
        <SvComponent
          :is="element.componentName"
          v-bind="element.componentData"
          v-for="(element, index) in props.model.elements"
          :key="index"
        />
      </SvComponent>
    </div>
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
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  model: ComponentContainerModel;
}>();

const rootRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (rootRef.value) {
    props.model.attachScrollListener(rootRef.value);
  }
});

onBeforeUnmount(() => {
  props.model.detachScrollListener();
});
</script>
