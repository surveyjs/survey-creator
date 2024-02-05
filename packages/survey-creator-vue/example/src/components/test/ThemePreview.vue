<template>
        <Common :options="{ themeForPreview: 'modern' }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from './Common.vue';
document.body.style.setProperty("--sv-default-mark", "true");
document.body.style.setProperty("--sv-modern-mark", "true");
import ("survey-core/defaultV2.css");
// import ("survey-core/modern.css");
// import ("survey-core/survey.css");
import ("survey-creator-core/survey-creator-core.css");
</script>
S