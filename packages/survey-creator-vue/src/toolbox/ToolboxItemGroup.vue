<template>
  <svc-toolbox-item
    :viewModel="viewModel"
    :item="item"
    :creator="creator"
    :isCompact="isCompact"
  ></svc-toolbox-item>
  <sv-popup :model="item.popupModel" :getArea="item.getArea"></sv-popup>
</template>
<script lang="ts" setup>
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
