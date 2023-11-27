<template>
    <Common :options="{ showLogicTab: true, showTranslationTab: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from "./Common.vue";
import { StylesManager } from "survey-core";
import * as widgets from "surveyjs-widgets";
import * as SurveyCore from "survey-core";
import ("icheck");
StylesManager.applyTheme("default");
widgets.sortablejs(SurveyCore);
</script>