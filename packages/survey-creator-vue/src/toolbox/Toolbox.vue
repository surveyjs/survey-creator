<template>
  <div class="svc-toolbox">
    <div class="svc-toolbox__container">
      <template
        v-if="!(toolbox.categories.length == 1 || !toolbox.showCategoryTitles)"
      >
        <SvComponent
          :is="'svc-toolbox-category'"
          v-for="(category, index) in toolbox.categories"
          :category="category"
          :key="index"
          :toolbox="toolbox"
        ></SvComponent>
      </template>

      <template
        v-if="toolbox.categories.length == 1 || !toolbox.showCategoryTitles"
      >
        <div class="svc-toolbox__category">
          <SvComponent
            :is="'svc-toolbox-tool'"
            v-for="(item, index) in toolbox.visibleActions"
            :creator="model"
            :key="index"
            :item="item"
            :parentModel="toolbox"
            :isCompact="toolbox.isCompact"
          ></SvComponent>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { SurveyCreatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: SurveyCreatorModel }>();
const toolbox = computed(() => {
  return props.model.toolbox;
});
useBase(() => toolbox.value);
</script>
