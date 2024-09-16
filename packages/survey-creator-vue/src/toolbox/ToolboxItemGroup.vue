<template>
  <SvComponent
    :is="'svc-toolbox-item'"
    :viewModel="viewModel"
    :item="item"
    :creator="creator"
    :isCompact="isCompact"
  ></SvComponent>
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
} from "survey-creator-core";
defineProps<{
  creator: SurveyCreatorModel;
  item: IQuestionToolboxItem;
  isCompact: boolean;
  viewModel: ToolboxToolViewModel;
}>();
</script>
