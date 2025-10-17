<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never',  showLogicTab: true, showTranslationTab: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from './Common.vue';

import "survey-creator-vue/presets";
import "survey-creator-core/presets/index.css";
import { TabPresetsPlugin } from "survey-creator-core/presets";
(window as any).creator.value.showOneCategoryInPropertyGrid = false;
new TabPresetsPlugin((window as any).creator);
</script>