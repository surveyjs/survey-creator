<template>
  <!-- See the React FloatingPanel for what this is. Markup only: the root node
       goes to the model, the header's raw pointerdown is forwarded, and
       everything else - geometry, listeners, focus, hiding - lives in the
       model, which is why the root is always rendered. -->
  <div
    ref="root"
    :class="model.rootCss"
    :style="model.style"
    role="dialog"
    :aria-modal="false"
    :aria-labelledby="model.titleId"
    tabindex="-1"
    v-on:pointerdown.capture="model.bringToFront()"
  >
    <div :class="model.headerCss" v-on:pointerdown="model.onPointerDown($event)">
      <span :id="model.titleId" class="svc-floating-panel__title">{{ model.titleText }}</span>
      <span class="svc-floating-panel__drag" aria-hidden="true">
        <SvComponent :is="'sv-svg-icon'" :iconName="'icon-draghorizontal-24x16'" :size="'auto'" />
      </span>
      <SvComponent :is="'sv-action-bar'" :model="model.headerToolbar" />
    </div>
    <div :class="model.bodyCss">
      <SvComponent :is="model.contentComponentName" v-bind="model.contentComponentData" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { SvComponent, useBase } from "survey-vue3-ui";
import type { FloatingPanelModel } from "survey-creator-core/collaboration";

const props = defineProps<{ model: FloatingPanelModel }>();
useBase(() => props.model);

const root = ref<HTMLElement | null>(null);

onMounted(() => {
  if (root.value) {
    props.model.setComponentElement(root.value);
  }
});
onUnmounted(() => {
  props.model.resetComponentElement();
});
</script>
