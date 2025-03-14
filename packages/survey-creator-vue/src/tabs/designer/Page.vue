<template>
  <div
    :key="model.page.id"
    v-if="model.page"
    :id="model.page.id"
    class="svc-page__content"
    :class="model.css"
    :data-sv-drop-target-survey-page="model.dropTargetName"
    v-key2click
    @click="
      (e) => {
        model.select(model, e);
        e.stopPropagation();
      }
    "
    ref="root"
    @dblclick="(e) => model.dblclick(e)"
    @mouseover="hover"
    @mouseleave="hover"
  >
    <div
      class="svc-question__drop-indicator svc-question__drop-indicator--top"
    ></div>
    <div
      class="svc-question__drop-indicator svc-question__drop-indicator--bottom"
    ></div>
    <SvComponent
      :is="'survey-page'"
      :survey="model.creator.survey"
      :page="model.page"
    />
    <div v-if="model.showPlaceholder" class="svc-page__placeholder_frame">
      <div class="svc-panel__placeholder_frame">
        <div class="svc-panel__placeholder">{{ model.placeholderText }}</div>
      </div>
    </div>
    <div
      v-if="model.allowDragging && !model.isGhost"
      class="svc-question__drag-area"
      v-on:pointerdown="(e) => model.onPointerDown(e)"
    >
      <SvComponent
        :is="'sv-svg-icon'"
        class="svc-question__drag-element"
        v-bind="{
          css: 'svc-question__drag-element',
          iconName: 'icon-drag-area-indicator_24x16',
          size: 'auto',
        }"
      ></SvComponent>
      <div class="svc-page__content-actions">
        <SvComponent
          :is="'sv-action-bar'"
          :model="model.actionContainer"
        ></SvComponent>
        <SvComponent
          v-if="model.topActionContainer.hasActions"
          :is="'sv-action-bar'"
          :model="model.topActionContainer"
        ></SvComponent>
      </div>
    </div>
    <div
      v-if="!model.allowDragging || model.isGhost"
      class="svc-page__content-actions"
    >
      <SvComponent
        :is="'sv-action-bar'"
        :model="model.actionContainer"
      ></SvComponent>
      <SvComponent
        v-if="model.topActionContainer.hasActions"
        :is="'sv-action-bar'"
        :model="model.topActionContainer"
      ></SvComponent>
    </div>
    <SvComponent
      :is="'sv-action-bar'"
      :model="model.footerActionsBar"
    ></SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { SurveyModel, PageModel } from "survey-core";
import type { SurveyCreatorModel } from "survey-creator-core";
import { PageAdorner } from "survey-creator-core";
import { onMounted, onUpdated, ref, watch } from "vue";
const props = defineProps<{
  creator: SurveyCreatorModel;
  survey?: SurveyModel;
  page: PageModel;
  isGhost: boolean;
}>();
const root = ref();
const model = useCreatorModel(
  () => {
    const adorner = new PageAdorner(props.creator, props.page);
    adorner.isGhost = props.isGhost;
    return adorner;
  },
  [() => props.page],
  (value) => {
    value.dispose();
  }
);
watch(
  () => props.isGhost,
  () => {
    if (model.value) {
      model.value.isGhost = props.isGhost;
    }
  }
);
onUpdated(() => {
  if (root.value && model.value) {
    model.value.rootElement = root.value;
  }
});
onMounted(() => {
  if (root.value && model.value) {
    model.value.rootElement = root.value;
  }
});
const hover = (event: MouseEvent) => {
  model.value.hover(event, event.currentTarget);
};
</script>
