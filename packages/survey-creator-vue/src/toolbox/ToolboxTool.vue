<template>
  <div
    class="svc-toolbox__tool"
    @pointerdown="model?.onPointerDown"
    :class="toolboxCss"
  >
    <div class="sv-action__content">
      <div
        class="svc-toolbox__category-separator"
        v-if="item.needSeparator && !creator.toolbox.showCategoryTitles"
      ></div>
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
import { ToolboxToolViewModel, type CreatorBase } from "survey-creator-core";
import type { Action } from "survey-core";
import { useCreatorModel } from "@/creator-model";
import { computed } from "vue";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{
  creator: CreatorBase;
  item: Action;
  isCompact: boolean;
}>();
const model = useCreatorModel(
  () => new ToolboxToolViewModel(props.item as any, props.creator),
  [() => props.creator, () => props.item],
  (model) => {
    model.dispose();
  }
);
useBase(() => props.item);
const toolboxCss = computed(
  () =>
    ((props.item.css || "") + " " ?? "") +
    (!props.item.isVisible ? "sv-action--hidden" : "")
);
</script>
