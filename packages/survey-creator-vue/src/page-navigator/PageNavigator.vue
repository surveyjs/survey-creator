<template>
  <div class="svc-page-navigator" v-show="model.visible" ref="root">
    <div>
      <SvComponent :is="'sv-action-bar-item-dropdown'" :item="model.selectorAction"></SvComponent>
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
    if(el) {
      modelValue.attachToUI(el);
    }
  }
});

onBeforeUnmount(() => {
  const modelValue = model.value;
  modelValue.stopItemsContainerHeightObserver();
  modelValue.setScrollableContainer(undefined as any);
});
onUnmounted(() => {
  const modelValue = model.value;
  modelValue.dispose();
});
</script>
