<template>
  <div class="svc-logo-image" ref="root">
    <input
      type="file"
      aria-hidden="true"
      tabindex="-1"
      :accept="model.acceptedTypes"
      class="svc-choose-file-input"
    />
    <template v-if="!logoRenderedHtml">
      <template v-if="model.allowEdit && !model.isUploading">
        <div
          class="svc-logo-image-placeholder"
          @click="model.chooseFile(model)"
          v-key2click
        >
          <svg>
            <use xlink:href="#icon-logo"></use>
          </svg>
        </div>
      </template>
    </template>
    <template v-if="logoRenderedHtml && !model.isUploading">
      <div :class="model.containerCss">
        <div class="svc-context-container svc-logo-image-controls">
          <span
            class="svc-context-button"
            @click="model.chooseFile(model)"
            v-key2click
            :title="undefined"
            :aria-label="undefined"
          >
            <sv-svg-icon :iconName="'icon-file'" :size="24"></sv-svg-icon>
          </span>
          <span
            class="svc-context-button svc-context-button--danger"
            @click="model.remove(model)"
            v-key2click
            :title="undefined"
            :aria-label="undefined"
          >
            <sv-svg-icon :iconName="'icon-clear'" :size="24"></sv-svg-icon>
          </span>
        </div>
        <sv-logo-image :data="survey"></sv-logo-image>
      </div>
    </template>
    <div class="svc-logo-image__loading" v-if="model.isUploading">
      <sv-loading-indicator></sv-loading-indicator>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import { SurveyCreatorModel, LogoImageViewModel } from "survey-creator-core";
import { computed, onMounted, ref, watch } from "vue";
const props = defineProps<{ data: SurveyCreatorModel }>();
const creator = computed(() => props.data);
const survey = computed(() => creator.value.survey);
const root = ref<HTMLDivElement>();
const model = useCreatorModel(
  () => new LogoImageViewModel(creator.value, null as any),
  [() => creator.value]
);
const logoRenderedHtml = ref<string>();
const onStringChangedCallback = () => {
  logoRenderedHtml.value = survey.value.locLogo.renderedHtml;
};
watch(
  () => survey.value.locLogo,
  (value, oldValue) => {
    onStringChangedCallback();
    if (value) value.onStringChanged.add(onStringChangedCallback);
    if (oldValue) value.onStringChanged.remove(onStringChangedCallback);
  },
  {
    immediate: true,
  }
);
onMounted(() => {
  if (root.value) {
    model.value.root = root.value;
  }
});
</script>
