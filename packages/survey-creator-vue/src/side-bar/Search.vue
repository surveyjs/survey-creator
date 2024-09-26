<template>
  <div v-if="model.isVisible" class="spg-search-editor_container">
    <div class="spg-search-editor_search-icon">
      <SvComponent
        :is="'sv-svg-icon'"
        :iconName="'icon-search'"
        :size="'auto'"
      ></SvComponent>
    </div>
    <input
      type="text"
      class="spg-search-editor_input"
      v-model="filterString"
      :aria-label="model.filterStringPlaceholder"
      :placeholder="model.filterStringPlaceholder"
    />
    <div class="spg-search-editor_toolbar">
      <div class="spg-search-editor_toolbar-counter">
        {{ model.matchCounterText }}
      </div>
      <SvComponent
        :is="'sv-action-bar'"
        :model="model.searchActionBar"
      ></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { SearchManager } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: SearchManager }>();
useBase(() => props.model);
const filterString = computed({
  get: () => props.model.filterString,
  set: (val: string) => {
    const model = props.model;
    model.filterString = val;
  },
});
</script>
