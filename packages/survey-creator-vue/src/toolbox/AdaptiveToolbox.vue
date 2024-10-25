<template>
  <div :class="toolbox.classNames" ref="root">
    <div @focusout="(e) => toolbox.focusOut(e)" class="svc-toolbox__panel">
      <div v-if="toolbox.showSearch" class="svc-toolbox__search-container">
        <template v-if="toolbox.isCompactRendered">
          <SvComponent
            :is="'svc-toolbox-tool'"
            :creator="creator"
            key="searchitem"
            :item="toolbox.searchItem"
            :parentModel="toolbox"
            :isCompact="toolbox.isCompactRendered"
          ></SvComponent>
        </template>
        <SvComponent
            :is="'svc-search'"
            :model="toolbox.searchManager"
        ></SvComponent>
        <div
            class="svc-toolbox__category-separator svc-toolbox__category-separator--search"
          ></div>
      </div>
      <div @focusout="(e) => toolbox.focusOut(e)" class="svc-toolbox__scroll-wrapper">
        <div
          class="svc-toolbox__scroller sv-drag-target-skipped"
          @scroll="
            (e) => {
              toolbox.onScroll(toolbox, e);
            }
          "
        >
          <div v-if="toolbox.showPlaceholder" class="svc-toolbox__placeholder">
            {{ toolbox.toolboxNoResultsFound }}
          </div>
          <div class="svc-toolbox__container">
            <template v-if="!toolbox.showInSingleCategory">
              <SvComponent
                :is="'svc-toolbox-category'"
                v-for="(category, index) in toolbox.categories"
                :key="index"
                :category="category"
                :toolbox="toolbox"
              ></SvComponent>
            </template>
            <template v-if="toolbox.showInSingleCategory">
              <div class="svc-toolbox__category">
                <template v-for="(item, index) in renderedActions" :key="index">
                  <SvComponent
                    :is="'svc-toolbox-tool'"
                    :creator="creator"
                    :item="item"
                    :parentModel="toolbox"
                    :isCompact="toolbox.isCompactRendered"
                  ></SvComponent>
                </template>
              </div>
            </template>
          </div>
        </div>
        <div class="svc-toolbox__scrollbar" @scroll="
            (e) => {
              toolbox.onScrollbarScroll(e);
            }
          ">
          <div class="svc-toolbox__scrollbar-sizer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
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
  toolbox.value.setRootElement(root.value as HTMLDivElement);
  responsivityManager = new VerticalResponsivityManager(
    toolbox.value.containerElement as HTMLDivElement,
    toolbox.value,
    toolbox.value.itemSelector
  );
});
onUnmounted(() => {
  responsivityManager?.dispose();
  toolbox.value.unsubscribeRootElement();
});
const renderedActions = computed(() => toolbox.value.renderedActions);
</script>
