<template>
  <div
    class="svc-toolbox__category"
    :class="{ 'svc-toolbox__category--collapsed': category.collapsed, 'svc-toolbox__category--empty': category.empty }"
  >
    <div
      class="svc-toolbox__category-header"
      @click="category.toggleState()"
      v-key2click
      :class="{
        'svc-toolbox__category-header--collapsed':
          toolbox.canCollapseCategories,
      }"
    >
      <span class="svc-toolbox__category-title">{{ category.title }}</span>
      <div
        v-if="toolbox.canCollapseCategories"
        class="svc-toolbox__category-header__controls"
      >
        <sv-svg-icon
          :iconName="'icon-arrow-down'"
          class="svc-toolbox__category-header__button svc-string-editor__button--expand"
          :size="24"
          v-show="category.collapsed"
        ></sv-svg-icon>
        <sv-svg-icon
          :iconName="'icon-arrow-up'"
          class="svc-toolbox__category-header__button svc-string-editor__button--collapse"
          :size="24"
          v-show="!category.collapsed"
        ></sv-svg-icon>
      </div>
    </div>
    <svc-toolbox-tool
      v-for="(item, index) in category.items"
      :item="item"
      :key="index"
      :creator="toolbox.creator"
      :parentModel="toolbox"
      :isCompact="false"
    ></svc-toolbox-tool>
  </div>
</template>
<script lang="ts" setup>
import type {
  QuestionToolbox,
  QuestionToolboxCategory,
} from "survey-creator-core";
import { useBase } from "survey-vue3-ui";

const props = defineProps<{
  category: QuestionToolboxCategory;
  toolbox: QuestionToolbox;
}>();
useBase(() => props.category);
</script>
