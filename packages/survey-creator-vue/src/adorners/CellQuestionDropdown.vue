<template>
  <div class="svc-question__adorner">
    <div class="svc-question__content svc-question__content--in-popup">
      <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
      <div class="svc-question__dropdown-choices">
        <div
          v-for="item in element.visibleChoices"
          :key="item.value"
          class="svc-question__dropdown-choice"
        >
          <SvComponent
            :is="getItemValueComponentName(item)"
            v-bind="getItemValueComponentData(item)"
          ></SvComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { ItemValue, QuestionDropdownModel } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";

const props = defineProps<{
  componentName: string;
  componentData: any;
}>();

const element = computed<QuestionDropdownModel>(
  () => props.componentData.element
);
const defaultItemComponentName = "survey-radiogroup-item";
const getItemValueComponentName = (item: ItemValue) => {
  return (
    element.value.getItemValueWrapperComponentName(item) ||
    defaultItemComponentName
  );
};
const getItemValueComponentData = (item: ItemValue) => {
  return {
    componentName: defaultItemComponentName,
    componentData: {
      question: element.value,
      item,
      data: element.value.getItemValueWrapperComponentData(item),
    },
  };
};
useBase(() => element.value);
</script>
