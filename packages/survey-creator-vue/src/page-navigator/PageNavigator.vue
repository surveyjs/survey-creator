<template>
  <div class="svc-page-navigator" v-show="model.visible" ref="root">
    <div
      class="svc-page-navigator__selector"
      @click="model.togglePageSelector($event)"
      v-key2click
      :title="model.pageSelectorCaption"
      :class="{ 'svc-page-navigator__selector--opened': model.isPopupOpened }"
    >
      <sv-svg-icon
        class="svc-page-navigator__navigator-icon"
        :iconName="model.icon"
        :size="24"
      ></sv-svg-icon>
      <sv-popup :model="model.popupModel"></sv-popup>
    </div>
    <div>
      <svc-page-navigator-item
        v-for="(item, index) in model.visibleItems"
        :key="index"
        :model="item"
      ></svc-page-navigator-item>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import {
  PageNavigatorViewModel,
  type PagesController,
} from "survey-creator-core";
import { onMounted, onUnmounted, ref } from "vue";

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
    if (!!el && !!el.parentElement?.parentElement?.parentElement) {
      const scrollableViewPort = el.parentElement.parentElement.parentElement;
      scrollableViewPort.onscroll = function (
        this: GlobalEventHandlers,
        ev: Event
      ) {
        return modelValue.onContainerScroll(ev.currentTarget as HTMLDivElement);
      };
      modelValue.setScrollableContainer(scrollableViewPort);
      modelValue.setItemsContainer(el.parentElement);
    }
  }
});

onUnmounted(() => {
  const el = root.value;
  const modelValue = model.value;
  if (!!el && !!el.parentElement?.parentElement?.parentElement) {
    el.parentElement.parentElement.parentElement.onscroll = undefined as any;
  }
  modelValue.stopItemsContainerHeightObserver();
  modelValue.dispose();
});
</script>
