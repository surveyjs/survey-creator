<template>
  <div :class="item.css">
    <div
      class="svc-toolbox__category-separator"
      v-if="item.needSeparator && !creator.toolbox.showCategoryTitles"
    ></div>
    <div
      class="svc-toolbox__tool-content sv-action__content"
      @pointerdown="model?.onPointerDown"
    >
      <SvComponent
        :viewModel="model"
        :is="model?.itemComponent"
        :item="item"
        :creator="creator"
        :isCompact="isCompact"
      ></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import {
  QuestionToolboxItem,
  ToolboxToolViewModel,
  type SurveyCreatorModel,
} from "survey-creator-core";
import type { ActionContainer } from "survey-core";
import { useCreatorModel } from "@/creator-model";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{
  creator: SurveyCreatorModel;
  item: QuestionToolboxItem;
  parentModel: ActionContainer;
  isCompact: boolean;
}>();
const model = useCreatorModel(
  () =>
    new ToolboxToolViewModel(
      props.item as any,
      props.creator,
      props.parentModel
    ),
  [() => props.creator, () => props.item],
  (model) => {
    model.dispose();
  }
);
useBase(() => props.item);
</script>
