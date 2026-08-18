<template>
  <!-- position:fixed, so the panel contributes nothing to the creator layout
       while still living inside the themed root. All geometry is model.style. -->
  <div
    v-if="model.visible"
    ref="root"
    :class="model.rootCss"
    :style="model.style"
    role="dialog"
    :aria-modal="false"
    :aria-labelledby="model.titleId"
    tabindex="-1"
    v-on:pointerdown.capture="model.bringToFront()"
  >
    <div
      :class="model.headerCss"
      v-on:pointerdown="onPointerDown"
      v-on:pointermove="onPointerMove"
      v-on:pointerup="onPointerUp"
      v-on:pointercancel="onPointerUp"
    >
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
import { DomDocumentHelper, DomWindowHelper } from "survey-core";
import type { FloatingPanelModel } from "survey-creator-core/collaboration";

const props = defineProps<{ model: FloatingPanelModel }>();
useBase(() => props.model);

const root = ref<HTMLElement | null>(null);

const updateViewport = (): void => {
  props.model.updateViewport({
    width: DomWindowHelper.getInnerWidth(),
    height: DomWindowHelper.getInnerHeight(),
  });
};

const onPointerDown = (e: PointerEvent): void => {
  // Header buttons stay clickable: a press on one is not a drag.
  if (!props.model.allowDrag || e.button !== 0) return;
  if (e.target instanceof Element && !!e.target.closest("button")) return;
  const node = root.value;
  if (!node) return;
  const rect = node.getBoundingClientRect();
  props.model.startDrag(
    { x: e.clientX, y: e.clientY },
    { left: rect.left, top: rect.top, width: rect.width, height: rect.height }
  );
  const header: any = e.currentTarget;
  if (typeof header.setPointerCapture === "function" && typeof e.pointerId === "number") {
    header.setPointerCapture(e.pointerId);
  }
  e.preventDefault();
};
const onPointerMove = (e: PointerEvent): void => {
  props.model.drag({ x: e.clientX, y: e.clientY });
};
const onPointerUp = (): void => props.model.endDrag();

// Move the caret into the panel once on open so keyboard and screen-reader
// users land on the content they just asked for. Focus is never trapped: the
// panel is non-modal and the user can tab straight back out.
const onVisibleChanged = (_: any, options: { visible: boolean }): void => {
  if (!options.visible) return;
  DomWindowHelper.requestAnimationFrame(() => {
    if (props.model.visible && !!root.value) root.value.focus();
  });
};

// Escape closes the panel from anywhere, not just while focus is inside it:
// the panel is non-modal, so the user is normally editing elsewhere. The model
// no-ops the key when the panel is already hidden.
const onDocumentKeyDown = (e: KeyboardEvent): void => props.model.onKeyDown(e);
let doc: Document | undefined;

onMounted(() => {
  updateViewport();
  DomWindowHelper.addEventListener("resize", updateViewport);
  props.model.onVisibleChanged.add(onVisibleChanged);
  doc = DomDocumentHelper.isAvailable() ? DomDocumentHelper.getDocument() : undefined;
  if (!!doc) doc.addEventListener("keydown", onDocumentKeyDown);
});
onUnmounted(() => {
  DomWindowHelper.removeEventListener("resize", updateViewport);
  props.model.onVisibleChanged.remove(onVisibleChanged);
  if (!!doc) doc.removeEventListener("keydown", onDocumentKeyDown);
});
</script>
