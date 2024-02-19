<template>
  <template v-if="!model.isCreatorDisposed">
    <survey-popup-modal></survey-popup-modal>
    <div
      class="svc-creator"
      :class="{
        'svc-creator--mobile': model.isMobileView,
      }"
      ref="root"
    >
      <div>
        <sv-svg-bundle></sv-svg-bundle>
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
              <div class="svc-tabbed-menu-wrapper" v-show="model.showTabs">
                <svc-tabbed-menu :model="model.tabbedMenu"></svc-tabbed-menu>
              </div>
              <div
                v-if="model.showToolbar"
                class="svc-toolbar-wrapper"
                :v-show="model.showToolbar"
              >
                <sv-action-bar :model="model.toolbar"></sv-action-bar>
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
                    class="svc-creator-tab"
                    v-bind:key="tab.id"
                    v-if="model.viewType == tab.id && tab.visible"
                    :id="'scrollableDiv-' + tab.id"
                    :class="{
                      'svc-creator__toolbox--right':
                        model.toolboxLocation == 'right',
                    }"
                  >
                    <component
                      :is="tab.componentContent"
                      :model="tab.data.model"
                    ></component>
                  </div>
                </template>
              </div>
            </div>
            <div v-if="model.isMobileView" class="svc-footer-bar">
              <div class="svc-toolbar-wrapper" :v-show="model.isMobileView">
                <sv-action-bar :model="model.footerToolbar"></sv-action-bar>
              </div>
            </div>
          </div>
          <div
            v-if="model.sidebar"
            :class="{ 'sv-mobile-side-bar': model.isMobileView }"
          >
            <svc-side-bar :model="model.sidebar"></svc-side-bar>
          </div>
        </div>
        <div class="svc-creator__banner" v-if="!model.haveCommercialLicense">
          <span
            class="svc-creator__non-commercial-text"
            v-html="model.licenseText"
          ></span>
        </div>
        <sv-notifier :model="model.notifier"></sv-notifier>
      </div>
    </div>
  </template>
</template>
<script setup lang="ts">
import type { SurveyCreatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed, onMounted, onUnmounted, ref, toRaw, watch } from "vue";
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
