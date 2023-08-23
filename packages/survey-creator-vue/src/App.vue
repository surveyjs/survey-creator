<script lang="ts">
import { defineComponent } from "vue";
import { StylesManager } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

StylesManager.applyTheme("defaultV2");

//window.survey = new SurveyModel(json);

export default defineComponent({
  name: "App",
  data() {
    const creator = new SurveyCreatorModel({});
    debugger;
    return {
      creator: creator as SurveyCreatorModel,
    };
  },
});
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
