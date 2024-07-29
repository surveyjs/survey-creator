<template>
  <div class="svc-toolbox">
    <div class="svc-toolbox__container">
      <template
        v-if="!(toolbox.categories.length == 1 || !toolbox.showCategoryTitles)"
      >
        <svc-toolbox-category
          v-for="(category, index) in toolbox.categories"
          :category="category"
          :key="index"
          :toolbox="toolbox"
        ></svc-toolbox-category>
      </template>

      <template
        v-if="toolbox.categories.length == 1 || !toolbox.showCategoryTitles"
      >
        <div class="svc-toolbox__category">
          <svc-toolbox-tool
            v-for="(item, index) in toolbox.visibleActions"
            :creator="model"
            :key="index"
            :item="item"
            :parentModel="toolbox"
            :isCompact="toolbox.isCompact"
          ></svc-toolbox-tool>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { SurveyCreatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: SurveyCreatorModel }>();
const toolbox = computed(() => {
  return props.model.toolbox;
});
useBase(() => toolbox.value);
</script>
