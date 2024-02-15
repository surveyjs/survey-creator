<template>
  <div class="svc-question__dropdown-choices--wrapper">
    <div>
      <div class="svc-question__dropdown-choices">
        <div
          v-for="item in model.getRenderedItems()"
          :key="item.value"
          :class="model.getChoiceCss()"
        >
          <component
            :is="getItemValueComponentName(item)"
            v-bind="getItemValueComponentData(item)"
          >
          </component>
        </div>
      </div>
      <svc-action-button
        v-if="model.needToCollapse"
        :text="model.getButtonText()"
        :click="model.switchCollapse.bind(model)"
        :allowBubble="true"
      >
      </svc-action-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type {
  ItemValue,
  QuestionDropdownModel,
  QuestionTagboxModel,
} from "survey-core";
import type { QuestionDropdownAdornerViewModel } from "survey-creator-core";

const props = defineProps<{
  model: QuestionDropdownAdornerViewModel;
  element: QuestionTagboxModel | QuestionDropdownModel;
}>();
const getItemValueComponentName = (item: ItemValue) => {
  return (
    props.element.getItemValueWrapperComponentName(item) ||
    props.model.itemComponent
  );
};
const getItemValueComponentData = (item: ItemValue) => {
  return {
    componentName: props.model.itemComponent,
    componentData: {
      question: props.element,
      item: item,
      data: props.element.getItemValueWrapperComponentData(item),
    },
  };
};
</script>
