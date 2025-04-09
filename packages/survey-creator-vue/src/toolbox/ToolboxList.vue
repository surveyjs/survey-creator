<template>
  <div :class="model.cssClasses.root">
    <template v-for="(item, index) in model.renderedActions" :key="index">
      <SvComponent
        :is="'svc-toolbox-tool'"
        :creator="creator"
        :item="item"
        :parentModel="model"
        :isCompact="false"
      ></SvComponent>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent, useBase, useComputedArray } from "survey-vue3-ui";
import type { ListModel } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
import {
  computed
} from "vue";
const props = defineProps<{
  model: ListModel;
  creator: CreatorBase;
}>();
const renderedActions = useComputedArray(() => props.model.renderedActions);
useBase(() => props.model);
</script>
