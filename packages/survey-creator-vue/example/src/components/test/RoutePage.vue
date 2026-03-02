<template>
  <RouterView></RouterView>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import * as Survey from "survey-core";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreatorUIPreset from "survey-creator-core/ui-presets";
import $ from 'jquery';
(window as any).jQuery = (window as any).$ = $;
(window as any).Survey = Object.assign({}, Survey);
(window as any).Survey = Survey;
(window as any).SurveyCreatorCore =  Object.assign({}, SurveyCreatorCore);
(window as any).SurveyCreatorUIPreset =  Object.assign({}, SurveyCreatorUIPreset);

</script>