<script lang="ts" setup>
import { SurveyCreatorModel } from 'survey-creator-core';
const creator = new SurveyCreatorModel({ pageEditMode: "bypage", showLogicTab: true, showJSONEditorTab: true, showTranslationTab: true, showThemeTab: true });
creator.toolbox.searchEnabled = false;
creator.toolbox.overflowBehavior = "hideInMenu";
creator.expandCollapseButtonVisibility = "onhover";
import { SurveyCreatorComponent } from "survey-creator-vue";
</script>
<template>
    <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh">
        <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
    </div>
</template>