<template>
  <div
    class="svc-toolbox__tool"
    @pointerdown="model?.onPointerDown"
    @mousemove="(e) => { model?.onMouseOver(item, e); }"
    @mouseleave="(e) => { model?.onMouseLeave(item, e); }"
    :class="toolboxCss"
  >
    <div class="sv-action__content">
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
const toolboxCss = computed(
  () =>
    ((props.item.classNames || "") + " " ?? "") +
    (!props.item.isVisible ? "sv-action--hidden" : "")
);
</script>
