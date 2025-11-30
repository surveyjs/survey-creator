<template>
        <Common :options="{ expandCollapseButtonVisibility: 'never', propertyGridNavigationMode: 'accordion', allowZoom: false, showThemeTab: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from './Common.vue';
</script>