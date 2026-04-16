<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never',  showLogicTab: true, showTranslationTab: true, showJSONEditorTab: false }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from './Common.vue';
import "survey-creator-core/ui-preset-editor/index.css";
import { UIPresetEditor } from "survey-creator-core/ui-preset-editor";
import SurveyCreatorUIPreset from "survey-creator-core/ui-presets";
import { settings } from "survey-core"
import { onMounted } from 'vue';
import { registerUIPreset, UIPreset } from 'survey-creator-core';
registerUIPreset(SurveyCreatorUIPreset);
onMounted(() => {
  (window as any).creator.showOneCategoryInPropertyGrid = true;
  settings.animationEnabled = false;
  new UIPreset(SurveyCreatorUIPreset.Expert).applyTo((window as any).creator);
  new UIPresetEditor((window as any).creator);
});
</script>