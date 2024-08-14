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
      <SvComponent
        :name="'sv-svg-icon'"
        v-if="item.iconName"
        :iconName="item.iconName"
        :size="24"
        :title="item.tooltip"
      ></SvComponent>
    </span>
    <span v-if="isCompact" class="svc-toolbox__item-banner svc-item__banner">
      <SvComponent
        :name="'sv-svg-icon'"
        :iconName="item.iconName"
        :size="24"
        :title="item.tooltip"
        class="svc-toolbox__item-icon"
      ></SvComponent>
      <span class="svc-toolbox__item-title">{{ item.title }}</span>
    </span>
    <span v-if="!isCompact" class="svc-toolbox__item-title">
      {{ item.title }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
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
