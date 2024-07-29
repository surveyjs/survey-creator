<template>
  <div :class="model.cssClasses.root">
    <template v-for="(item, index) in model.renderedActions" :key="index">
      <svc-toolbox-tool
        :creator="toolbox.creator"
        :item="item"
        :parentModel="toolbox"
        :isCompact="false"
      ></svc-toolbox-tool>
    </template>
  </div>
</template>
<script lang="ts" setup>
import type { ListModel } from "survey-core";
import type { QuestionToolbox } from "survey-creator-core";
defineProps<{
  model: ListModel;
  toolbox: QuestionToolbox;
}>();
</script>
