<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never',  showLogicTab: true, showTranslationTab: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from "./Common.vue";
import * as widgets from "surveyjs-widgets";
import * as SurveyCore from "survey-core";
import ("icheck");
widgets.sortablejs(SurveyCore);
</script>