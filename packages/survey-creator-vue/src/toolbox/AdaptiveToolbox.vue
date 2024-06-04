<template>
  <div
    class="svc-toolbox"
    :class="{ 'svc-toolbox--compact': toolbox.isCompact }"
    @scroll="(e) => { toolbox.onScroll(toolbox, e); }"
    ref="root"
  >
    <div class="svc-toolbox__container">
      <template
        v-if="
          !(
            toolbox.isCompact ||
            toolbox.categories.length == 1 ||
            !toolbox.showCategoryTitles
          )
        "
      >
        <svc-toolbox-category
          v-for="(category, index) in toolbox.categories"
          :key="index"
          :category="category"
          :toolbox="toolbox"
        ></svc-toolbox-category>
      </template>
      <template
        v-if="
          toolbox.isCompact ||
          toolbox.categories.length == 1 ||
          !toolbox.showCategoryTitles
        "
      >
        <div class="svc-toolbox__category">
          <template v-for="(item, index) in renderedActions" :key="index">
            <div
              v-if="item.needSeparator && !creator.toolbox.showCategoryTitles"
              class="svc-toolbox__category-separator"
            ></div>
            <svc-toolbox-tool
              :creator="creator"
              :item="item"
              :parentModel="toolbox"
              :isCompact="toolbox.isCompact"
            ></svc-toolbox-tool>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { VerticalResponsivityManager } from "survey-core";
import type { SurveyCreatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed, onMounted, onUnmounted, ref } from "vue";
const props = defineProps<{ creator: SurveyCreatorModel }>();
const toolbox = computed(() => {
  return props.creator.toolbox;
});

const root = ref<HTMLDivElement>();

useBase(() => toolbox.value);
let responsivityManager: VerticalResponsivityManager;
onMounted(() => {
  responsivityManager = new VerticalResponsivityManager(
    root.value as HTMLDivElement,
    toolbox.value,
    ".svc-toolbox__tool:not(.sv-dots)"
  );
});
onUnmounted(() => {
  responsivityManager?.dispose();
});
const renderedActions = computed(() => toolbox.value.renderedActions);
</script>
