<template>
  <div :class="model.cssClasses.root">
    <template v-for="(item, index) in model.renderedActions" :key="index">
      <SvComponent
        :name="'svc-toolbox-tool'"
        :creator="toolbox.creator"
        :item="item"
        :parentModel="toolbox"
        :isCompact="false"
      ></SvComponent>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { ListModel } from "survey-core";
import type { QuestionToolbox } from "survey-creator-core";
defineProps<{
  model: ListModel;
  toolbox: QuestionToolbox;
}>();
</script>
