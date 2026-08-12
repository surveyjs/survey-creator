<template>
  <div v-if="model" class="spg-launch">
    <button class="spg-launch__card" @click="model.onClick()">
      <div class="spg-launch__container">
        <div class="spg-launch__text">{{ model.title }}</div>
        <div class="spg-launch__text2">{{ model.description }}</div>
      </div>
      <div class="spg-launch__icon">
        <div class="spg-launch__chevron-right-16-x-16">
          <div class="spg-launch__icon2">
            <SvComponent
              :is="'sv-svg-icon'"
              size="auto"
              iconName="chevrondown-24x24"
            />
          </div>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";

defineProps<{
  model: { onClick: () => void; title: string; description: string };
}>();
</script>
