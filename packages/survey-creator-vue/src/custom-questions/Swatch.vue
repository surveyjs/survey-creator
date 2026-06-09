<template>
  <component :is="rootTag" :class="rootClassName">
    <div class="sd-color-swatch__content" :style="rootStyle">
      <SvComponent
        v-if="showIcon"
        :is="'sv-svg-icon'"
        :iconName="swatchIcon ?? 'icon-dropper-16x16'"
        :class="iconClassName ?? 'sd-color-swatch__icon'"
        :size="'auto'"
      />
      <input
        v-if="colorInputChange"
        type="color"
        :disabled="inputDisabled"
        :value="colorInputValue"
        :class="colorInputClassName"
        tabindex="-1"
        v-bind="arias"
        @change="colorInputChange"
      />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { SvComponent } from "survey-vue3-ui";

const props = withDefaults(defineProps<{
  color: string;
  showIcon?: boolean;
  className?: string;
  swatchIcon?: string;
  iconClassName?: string;
  colorInputClassName?: string;
  colorInputValue?: string;
  inputDisabled?: boolean;
  colorInputChange?: (event: Event) => void;
  arias?: Record<string, any>;
}>(), {
  showIcon: false,
});

const rootTag = computed(() => props.colorInputChange ? "label" : "div");
const rootClassName = computed(() => props.className ?? "sd-color-swatch");
const rootStyle = computed(() => ({ backgroundColor: props.color }));
</script>
