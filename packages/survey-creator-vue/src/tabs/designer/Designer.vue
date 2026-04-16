<template>
  <div class="svc-flex-column">
    <SvComponent
      :is="'svc-toolbox'"
      v-if="model.isToolboxVisible"
      :model="model.creator"
    />
  </div>
  <div
    class="svc-tab-designer"
    :class="model.getRootCss()"
    @click="model.clickDesigner"
  >
    <SvComponent :is="'sv-scroll'">
      <SvComponent
        :is="model.surfaceComponentName"
        :model="model.surfaceData"
      />
    </SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { TabDesignerViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: TabDesignerViewModel }>();
const survey = computed(() => props.model.survey);
useBase(() => props.model);
useBase(() => survey.value);
</script>
