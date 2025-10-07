<template>
  <template v-if="!model.isCreatorDisposed">
    <SvComponent :is="'survey-popup-modal'"></SvComponent>
    <div :class="model.getRootCss()" :style="model.themeVariables" ref="root">
      <div>
        <SvComponent :is="'sv-svg-bundle'"></SvComponent>
      </div>
      <div
        class="svc-full-container svc-creator__area svc-flex-column"
        :class="{
          'svc-creator__area--with-banner': !model.haveCommercialLicense,
        }"
      >
        <div
          class="svc-flex-row svc-full-container"
          :class="{
            'svc-creator__side-bar--left': model.sidebarLocation == 'left',
          }"
        >
          <div
            class="svc-flex-column svc-flex-row__element svc-flex-row__element--growing"
          >
            <div class="svc-top-bar">
              <div class="svc-tabbed-menu-wrapper" v-if="model.showTabs">
                <SvComponent
                  :is="'svc-tabbed-menu'"
                  :model="model.tabbedMenu"
                ></SvComponent>
              </div>
              <div
                v-if="model.showToolbar"
                class="svc-toolbar-wrapper"
                :v-show="model.showToolbar"
              >
                <SvComponent
                  :is="'sv-action-bar'"
                  :model="model.toolbar"
                ></SvComponent>
              </div>
            </div>
            <div
              class="svc-creator__content-wrapper svc-flex-row"
              :class="{
                'svc-creator__content-wrapper--footer-toolbar':
                  model.isMobileView,
              }"
            >
              <div class="svc-creator__content-holder svc-flex-column">
                <template v-for="tab in model.tabs">
                  <div
                    role="tabpanel"
                    class="svc-creator-tab"
                    v-bind:key="tab.id"
                    v-if="model.viewType == tab.id && tab.visible"
                    :aria-labelledby="'tab-' + tab.id"
                    :id="'scrollableDiv-' + tab.id"
                    :class="{
                      'svc-creator__toolbox--right':
                        model.toolboxLocation == 'right',
                    }"
                  >
                    <SvComponent
                      :is="tab.componentContent"
                      :model="tab.data.model"
                    ></SvComponent>
                  </div>
                </template>
              </div>
            </div>
            <div v-if="model.isMobileView" class="svc-footer-bar">
              <div class="svc-toolbar-wrapper" :v-show="model.isMobileView">
                <SvComponent
                  :is="'sv-action-bar'"
                  :model="model.footerToolbar"
                ></SvComponent>
              </div>
            </div>
          </div>
          <SvComponent
            :is="'svc-side-bar'"
            :model="model.sidebar"
            v-if="model.sidebar"
          ></SvComponent>
        </div>
        <div class="svc-creator__banner" v-if="!model.haveCommercialLicense">
          <span
            class="svc-creator__non-commercial-text"
            v-html="model.licenseText"
          ></span>
        </div>
        <SvComponent :is="'sv-notifier'" :model="model.notifier"></SvComponent>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { SurveyCreatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed, onMounted, onUnmounted, ref, toRaw } from "vue";
const props = defineProps<{ model: SurveyCreatorModel }>();
const model = computed(() => {
  return toRaw(props.model);
});
const root = ref<HTMLDivElement>();
useBase(
  () => model.value,
  (newValue, oldValue) => {
    if (oldValue) {
      oldValue.unsubscribeRootElement();
    }
    if (newValue && root.value) {
      newValue.setRootElement(root.value);
    }
  }
);
onMounted(() => {
  if (root.value) {
    props.model.setRootElement(root.value);
  }
});
onUnmounted(() => {
  props.model.unsubscribeRootElement();
});
</script>
