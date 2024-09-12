<template>
  <div class="svc-question__adorner">
    <div class="svc-question__content svc-question__content--in-popup">
      <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { QuestionDropdownModel } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";

const props = defineProps<{
  componentName: string;
  componentData: any;
}>();

const element = computed<QuestionDropdownModel>(
  () => props.componentData.element
);
useBase(() => element.value);
</script>
