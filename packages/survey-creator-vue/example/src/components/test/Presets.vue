<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never',  showLogicTab: true, showTranslationTab: true, showJSONEditorTab: false }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from './Common.vue';
import "survey-creator-vue/presets";
import "survey-creator-core/ui-preset-editor/index.css";
import { UIPresetEditor } from "survey-creator-core/presets";
import { settings } from "survey-core"
import { onMounted } from 'vue';
onMounted(() => {
  (window as any).creator.showOneCategoryInPropertyGrid = true;
  settings.animationEnabled = false;
  new UIPresetEditor((window as any).creator);
});
</script>