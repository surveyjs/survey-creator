<template>
  <SvComponent
    :is="'svc-toolbox-item'"
    :viewModel="viewModel"
    :item="item"
    :creator="creator"
    :isCompact="isCompact"
  ></SvComponent>
  <div class="svc-toolbox__item-submenu-button" @mouseover="hover">
    <SvComponent :is="'sv-svg-icon'" :iconName="item.subitemsButtonIcon" :size="item.iconSize"></SvComponent>
  </div>
  <SvComponent
    :is="'sv-popup'"
    :model="item.popupModel"
    :getArea="item.getArea"
  ></SvComponent>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type {
  SurveyCreatorModel,
  IQuestionToolboxItem,
  ToolboxToolViewModel,
  QuestionToolboxItem,
} from "survey-creator-core";
const props = defineProps<{
  creator: SurveyCreatorModel;
  item: QuestionToolboxItem;
  isCompact: boolean;
  viewModel: ToolboxToolViewModel;
}>();
const hover = (event: MouseEvent) => {
  props.viewModel.onMouseOver(props.item as QuestionToolboxItem, event);
};
</script>
