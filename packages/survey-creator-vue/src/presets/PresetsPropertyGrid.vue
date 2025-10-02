<template>
  <div v-if="model">
    <div class="sps-launch">
      <button class="sps-launch__card" @click="showPresets">
        <div class="sps-launch__container">
          <div class="sps-launch__text">Set up Creator Presets</div>
          <div class="sps-launch__text2">Global UI customization</div>
          <div class="sps-launch__icon">
            <div class="sps-launch__chevron-right-16-x-16">
              <div class="sps-launch__icon2">
                <SvComponent
                  :is="'sv-svg-icon'"
                  size="auto"
                  iconName="chevrondown-24x24"
                />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
    <SvComponent :is="'svc-property-grid'" :model="model" />
  </div>
</template>

<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import type { PropertyGridViewModel } from "survey-creator-core";

const props = defineProps<{
  model: PropertyGridViewModel;
}>();

const showPresets = () => {
  (props.model as any)["showPresets"]?.();
};
</script>
