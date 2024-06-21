<template>
  <div
    :class="item.css"
  >
    <div
      class="svc-toolbox__category-separator"
      v-if="item.needSeparator && !creator.toolbox.showCategoryTitles"
    ></div>
    <div class="sv-action__content"
      @pointerdown="model?.onPointerDown"
      @mousemove="(e) => { model?.onMouseOver(item, e); }"
      @mouseleave="(e) => { model?.onMouseLeave(item, e); }"
    >
      <component
        :viewModel="model"
        :is="item.component || 'svc-toolbox-item'"
        :item="item"
        :creator="creator"
        :isCompact="isCompact"
      ></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { QuestionToolboxItem, ToolboxToolViewModel, type SurveyCreatorModel } from "survey-creator-core";
import type { Action, ActionContainer } from "survey-core";
import { useCreatorModel } from "@/creator-model";
import { computed } from "vue";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{
  creator: SurveyCreatorModel;
  item: QuestionToolboxItem;
  parentModel: ActionContainer;
  isCompact: boolean;
}>();
const model = useCreatorModel(
  () => new ToolboxToolViewModel(props.item as any, props.creator, props.parentModel),
  [() => props.creator, () => props.item],
  (model) => {
    model.dispose();
  }
);
useBase(() => props.item);
</script>
