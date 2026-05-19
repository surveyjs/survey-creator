
<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never', showLogicTab: true, showTranslationTab: true, propertyGridNavigationMode: 'buttons', allowZoom: true }" :use-slk="true" :use-original-theme="true"></Common>
</template>
<script lang="ts" setup>
import { registerCreatorTheme } from 'survey-creator-core';
import Common from './Common.vue';
import SurveyTheme from 'survey-core/themes';
</script>