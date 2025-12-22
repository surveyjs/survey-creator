<script lang="ts" setup>
import { SurveyCreatorModel } from 'survey-creator-core';
import { SurveyCreatorComponent } from "survey-creator-vue";
import "survey-creator-vue/ui-preset-editor";
import "survey-creator-core/ui-preset-editor/index.css";
import { UIPresetEditor } from "survey-creator-core/ui-preset-editor";
const creator = new SurveyCreatorModel({ pageEditMode: "bypage", showLogicTab: true, showJSONEditorTab: true, showTranslationTab: true, showThemeTab: true });
creator.toolbox.searchEnabled = false;
creator.toolbox.overflowBehavior = "hideInMenu";
creator.expandCollapseButtonVisibility = "onhover";
new UIPresetEditor(creator)
</script>
<template>
    <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh">
        <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
    </div>
</template>