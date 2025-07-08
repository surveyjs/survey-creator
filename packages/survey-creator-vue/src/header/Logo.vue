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
            <use xlink:href="#icon-image-48x48"></use>
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
            <SvComponent
              :is="'sv-svg-icon'"
              :iconName="'icon-choosefile'"
              :size="'auto'"
            ></SvComponent>
          </span>
          <span
            class="svc-context-button svc-context-button--danger"
            @click="model.remove(model)"
            v-key2click
            :title="undefined"
            :aria-label="undefined"
          >
            <SvComponent
              :is="'sv-svg-icon'"
              :iconName="'icon-clear'"
              :size="'auto'"
            ></SvComponent>
          </span>
        </div>
        <SvComponent :is="'sv-logo-image'" :data="survey"></SvComponent>
      </div>
    </template>
    <div class="svc-logo-image__loading" v-if="model.isUploading">
      <SvComponent :is="'sv-loading-indicator'"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import { SurveyCreatorModel, LogoImageViewModel } from "survey-creator-core";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
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
onUnmounted(() => {
  if (model.value) {
    model.value.root = undefined as any;
  }
});
</script>
