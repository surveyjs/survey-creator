<template>
  <div
    class="svc-toolbox__item"
    role="button"
    :aria-label="item.tooltip"
    :title="item.tooltip"
    :class="item.className"
    @click="viewModel.click($event)"
    v-key2click
  >
    <span class="svc-toolbox__item-container">
      <sv-svg-icon v-if="item.iconName"
        :iconName="item.iconName"
        :size="24"
        :title="item.tooltip"
      ></sv-svg-icon>
    </span>
    <span v-if="isCompact" class="svc-toolbox__item-banner svc-item__banner">
      <sv-svg-icon
        :iconName="item.iconName"
        :size="24"
        :title="item.tooltip"
        class="svc-toolbox__item-icon"
      ></sv-svg-icon>
      <span class="svc-toolbox__item-title">{{ item.title }}</span>
    </span>
    <span v-if="!isCompact" class="svc-toolbox__item-title">
      {{ item.title }}
    </span>
  </div>
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
