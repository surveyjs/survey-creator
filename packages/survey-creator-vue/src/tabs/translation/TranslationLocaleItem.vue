<template>
  <div class="svc-translation-locale-item">
    <span class="svc-translation-locale-item__name">
      <SvComponent :is="'survey-string'" :locString="item.locTitle"></SvComponent>
    </span>
    <span v-if="!!progress" class="svc-translation-locale-item__progress">{{
      progress
    }}</span>
  </div>
</template>
<script setup lang="ts">
import { SvComponent, useBase } from "survey-vue3-ui";
import type { ItemValue, ListModel } from "survey-core";
import { getTranslationLocaleProgress } from "survey-creator-core";
import { computed } from "vue";

// An item of the target language dropdown: the language name and, at the right edge, how much of
// the survey is already translated into it. The counts are precomputed on the choices themselves
// (see updateTargetLocaleChoices) - a language with no translations carries none.
const props = defineProps<{ model: ListModel; item: ItemValue }>();
useBase(() => props.item);
const progress = computed(() => getTranslationLocaleProgress(props.item));
</script>
