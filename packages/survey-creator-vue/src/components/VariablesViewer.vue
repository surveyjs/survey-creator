<template>
  <div class="svc-variables-viewer">
    <textarea
      class="svc-variables-viewer__text"
      :value="model.text"
      readonly
      spellcheck="false"
      :aria-label="model.ariaLabel"
    ></textarea>
  </div>
</template>

<script lang="ts" setup>
import type { VariablesViewerModel } from "survey-creator-core";
defineProps<{ model: VariablesViewerModel }>();
</script>
