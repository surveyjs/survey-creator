<template>
  <div
    class="svc-image-question-controls"
    v-if="!model.isUploading && !model.isEmptyElement"
  >
    <template v-if="model.allowEdit">
      <input
        type="file"
        aria-hidden="true"
        tabindex="-1"
        :accept="model.acceptedTypes"
        class="svc-choose-file-input"
      />
      <span
        class="svc-context-button"
        v-key2click
        :title="undefined"
        :aria-label="undefined"
      >
        <sv-svg-icon
          :iconName="'icon-file'"
          :size="24"
          @click="model.chooseFile(model)"
        ></sv-svg-icon>
      </span>
    </template>
  </div>
  <div
    class="svc-image-question__loading-placeholder"
    v-if="model.isUploading && !model.isEmptyElement"
  >
    <div class="svc-image-question__loading">
      <sv-loading-indicator></sv-loading-indicator>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { QuestionImageModel } from "survey-core";
import type { QuestionImageAdornerViewModel } from "survey-creator-core";

defineProps<{
  model: QuestionImageAdornerViewModel;
  element: QuestionImageModel;
}>();
</script>
