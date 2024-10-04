<template>
  <div class="svc-side-bar" :class="model.rootCss" v-show="model.renderRoot">
    <div
      class="svc-side-bar__shadow"
      v-show="model.renderContainer"
      @click="() => model.collapseSidebar()"
    ></div>
    <div class="svc-flex-row svc-side-bar__wrapper">
      <div
        class="svc-side-bar__container-wrapper"
        v-show="model.renderContainer"
      >
        <div class="svc-side-bar__container" ref="root">
          <SvComponent
            :is="model.header.component"
            :model="model.header.componentModel"
          ></SvComponent>
          <div class="svc-side-bar__container-content">
            <template v-for="(page, index) in model.pages" :key="index">
              <SvComponent
                :is="'svc-side-bar-page'"
                :model="page"
              ></SvComponent>
            </template>
          </div>
        </div>
      </div>
      <SvComponent
        v-if="model.sideAreaComponentName"
        :is="model.sideAreaComponentName"
        :model="model.sideAreaComponentData"
      ></SvComponent>
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
