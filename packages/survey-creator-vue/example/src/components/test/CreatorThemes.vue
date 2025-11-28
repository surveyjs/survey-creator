
<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never', showLogicTab: true, showTranslationTab: true, propertyGridNavigationMode: 'buttons', allowZoom: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import { registerCreatorTheme } from 'survey-creator-core';
import Common from './Common.vue';
import SurveyCreatorTheme from 'survey-creator-core/themes';
registerCreatorTheme(SurveyCreatorTheme);
</script>