<template>
  <input type="file" aria-hidden="true" tabindex="-1" :accept="model.acceptedTypes" class="svc-choose-file-input" />
  <SvComponent :is="'sv-action-bar'" v-if="!model.isUploading && !model.isEmptyElement"
    :model="model.imageActionsContainer"></SvComponent>
  <div class="svc-image-question__loading-placeholder" v-if="model.isUploading && !model.isEmptyElement">
    <div class="svc-image-question__loading">
      <SvComponent :is="'sv-loading-indicator'"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { QuestionImageModel } from "survey-core";
import type { QuestionImageAdornerViewModel } from "survey-creator-core";

defineProps<{
  model: QuestionImageAdornerViewModel;
  element: QuestionImageModel;
}>();
</script>
