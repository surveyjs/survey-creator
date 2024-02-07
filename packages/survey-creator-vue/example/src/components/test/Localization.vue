<template>
        <Common :options="{ showLogicTab: true, showTranslationTab: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import { localization } from 'survey-creator-core';
import Common from './Common.vue';
const loc = localization.getLocale("de");
loc.ed.logic = "Miner Logik";
localization.currentLocale = "de";
</script>