<template>
  <div
    class="svc-toolbox__item"
    role="button"
    :aria-label="item.tooltip"
    :title="item.tooltip"
    :class="item.renderedCss"
    @click="viewModel.click($event)"
    v-key2click
  >
    <span class="svc-toolbox__item-container">
      <SvComponent
        :is="'sv-svg-icon'"
        v-if="item.iconName"
        :iconName="item.iconName"
        :size="'auto'"
        class="svc-toolbox__item-icon"
      ></SvComponent>
    </span>
    <span v-if="!isCompact" class="svc-toolbox__item-title">
      {{ item.title }}
    </span>
  </div>
  <span v-if="isCompact" class="svc-toolbox__item-banner" @click="viewModel.click($event)">
      <SvComponent
        :is="'sv-svg-icon'"
        :iconName="item.iconName"
        :size="24"
        class="svc-toolbox__item-icon"
      ></SvComponent>
      <span>{{ item.title }}</span>
  </span>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import type {
  SurveyCreatorModel,
  IQuestionToolboxItem,
  ToolboxToolViewModel,
  QuestionToolboxItem,
} from "survey-creator-core";
defineProps<{
  creator: SurveyCreatorModel;
  item: QuestionToolboxItem;
  isCompact: boolean;
  viewModel: ToolboxToolViewModel;
}>();
</script>
