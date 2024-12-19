<template>
  <div class="svc-page-navigator" v-show="model.visible" ref="root">
    <div
      role="button"
      class="svc-page-navigator__selector svc-page-navigator__button"
      @click="model.togglePageSelector($event)"
      v-key2click
      :title="model.pageSelectorCaption"
      :class="{ 'svc-page-navigator__button--pressed': model.isPopupOpened }"
    >
      <SvComponent
        :is="'sv-svg-icon'"
        class="svc-page-navigator__button-icon"
        :iconName="model.icon"
        :size="'auto'"
      ></SvComponent>
      <SvComponent :is="'sv-popup'" :model="model.popupModel"></SvComponent>
    </div>
    <div>
      <SvComponent
        :is="'svc-page-navigator-item'"
        v-for="item in model.visibleItems"
        :key="item.id"
        :model="item"
      ></SvComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import {
  PageNavigatorViewModel,
  type PagesController,
} from "survey-creator-core";
import { onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
  pagesController: PagesController;
  pageEditMode: string;
}>();
const model = useCreatorModel(
  () => new PageNavigatorViewModel(props.pagesController, props.pageEditMode),
  [() => props.pagesController, () => props.pageEditMode]
);
const root = ref<HTMLDivElement>();

onMounted(() => {
  if (props.pageEditMode !== "bypage") {
    const el = root.value;
    const modelValue = model.value;
    modelValue.attachToUI(el);
  }
});

onBeforeUnmount(() => {
  const el = root.value;
  const modelValue = model.value;
  modelValue.stopItemsContainerHeightObserver();
  modelValue.setScrollableContainer(undefined as any);
});
onUnmounted(() => {
  const modelValue = model.value;
  modelValue.dispose();
});
</script>
