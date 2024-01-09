<template>
  <div class="svc-carry-forward-panel-wrapper">
    <div class="svc-carry-forward-panel">
      <span>{{ model.text }}{{ " " }}</span>
      <span class="svc-carry-forward-panel__link">
        <svc-action-button
          :text="model.actionText"
          :click="model.onClick.bind(model)"
        >
        </svc-action-button>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { QuestionBannerParams } from "survey-creator-core";
defineProps<{ model: QuestionBannerParams }>();
</script>
