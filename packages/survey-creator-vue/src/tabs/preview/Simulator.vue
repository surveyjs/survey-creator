<template>
  <div
    :class="model.getRootCss()"
    @keydown="model.tryToZoom(undefined, $event)"
    @mouseover="activateZoom()"
    @mouseout="deactivateZoom()"
  >
    <div v-if="!model.hasFrame" class="svd-simulator-content" :style="shellStyle">
      <SvComponent :is="'survey-widget'" :model="model.survey"></SvComponent>
    </div>
    <div
      v-if="model.hasFrame"
      class="svd-simulator-wrapper"
      id="svd-simulator-wrapper"
      :style="{
        width: simulatorFrame.frameWidth + 'px',
        height: simulatorFrame.frameHeight + 'px',
      }"
    >
      <div
        class="svd-simulator"
        :style="{
          width: simulatorFrame.deviceWidth + 'px',
          height: simulatorFrame.deviceHeight + 'px',
          transform:
            'scale(' + simulatorFrame.scale + ') translate(-50%, -50%)',
        }"
      >
        <div class="svd-simulator-content" :style="shellStyle">
          <SvComponent
            :is="'survey-widget'"
            :model="model.survey"
          ></SvComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { SurveySimulatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
const props = defineProps<{ model: SurveySimulatorModel }>();
useBase(() => props.model);
const simulatorFrame = computed(() => props.model.simulatorFrame);
const shellStyle = computed(() => {
  const h = props.model.popupOverlayHeight;
  return h ? { "--sv-popup-overlay-height": h } : {};
});
onMounted(() => props.model.queueSurveyLayoutRefresh());
onUpdated(() => props.model.queueSurveyLayoutRefresh());
onUnmounted(() => props.model.cancelSurveyLayoutRefresh());
const activateZoom = () => {
  if (props.model.device !== "desktop") {
    props.model.activateZoom();
  }
};
const deactivateZoom = () => {
  if (props.model.device !== "desktop") {
    props.model.deactivateZoom();
  }
};
</script>
