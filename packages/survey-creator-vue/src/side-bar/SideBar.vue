<template>
  <div
    class="svc-side-bar"
    :class="{ 'svc-flyout-side-bar': model.flyoutPanelMode }"
    v-show="model.hasVisibleTabs"
  >
    <div
      class="svc-side-bar__shadow"
      @click="() => model.collapseSidebar()"
    ></div>
    <div class="svc-flex-column svc-side-bar__wrapper">
      <div class="svc-side-bar__container" v-show="model.visible" ref="root">
        <div class="svc-side-bar__container-header">
          <div class="svc-side-bar__container-actions">
            <SvComponent :name="'sv-action-bar'" :model="model.toolbar"></SvComponent>
          </div>
          <div v-if="!!model.headerText" class="svc-side-bar__container-title">
            {{ model.headerText }}
          </div>
        </div>
        <div class="svc-side-bar__container-content">
          <template v-for="(tab, index) in model.tabs" :key="index">
            <SvComponent :name="'svc-side-bar-tab'" :model="tab"></SvComponent>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
 import { SvComponent } from "survey-vue3-ui";
import { onMounted, onUnmounted, ref } from "vue";
import type { SidebarModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarModel }>();
const root = ref<HTMLDivElement>();
useBase(() => props.model);
onMounted(() => {
  props.model.initResizeManager(root.value as HTMLDivElement);
});
onUnmounted(() => {
  props.model.resetResizeManager();
});
</script>
