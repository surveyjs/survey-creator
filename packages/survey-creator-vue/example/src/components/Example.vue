<script lang="ts" setup>
import { SurveyCreatorModel } from 'survey-creator-core';
const creator = new SurveyCreatorModel({ pageEditMode: "bypage" });
import { SurveyCreatorComponent } from "survey-creator-vue";
</script>
<template>
    <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh">
        <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
    </div>
</template>