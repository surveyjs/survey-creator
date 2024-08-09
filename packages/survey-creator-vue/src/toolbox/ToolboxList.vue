<template>
  <div :class="model.cssClasses.root">
    <template v-for="(item, index) in model.renderedActions" :key="index">
      <svc-toolbox-tool
        :creator="creator"
        :item="item"
        :parentModel="model"
        :isCompact="false"
      ></svc-toolbox-tool>
    </template>
  </div>
</template>
<script lang="ts" setup>
import type { ListModel } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
defineProps<{
  model: ListModel;
  creator: CreatorBase;
}>();
</script>
