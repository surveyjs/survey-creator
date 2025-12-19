<template>
  <div class="svc-flex-column">
    <SvComponent
      :is="'svc-toolbox'"
      v-if="creator.showToolbox"
      :model="creator"
    />
  </div>
  <div class="svc-tab-designer">
    <SvComponent :is="'survey'" :model="model" />
  </div>
</template>

<script setup lang="ts">
import { SvComponent } from "survey-vue3-ui";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";

const props = defineProps<{
  model: any;
}>();

const model = computed(() => props.model?.model);
const creator = computed(() => props.model?.creator);

useBase(() => model.value);
</script>
