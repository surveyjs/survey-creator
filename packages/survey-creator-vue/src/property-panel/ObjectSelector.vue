<template>
  <template v-if="model.isVisible">
    <SvComponent :is="'sv-list'" :model="model.list"></SvComponent>
  </template>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { ObjectSelectorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: ObjectSelectorModel }>();
useBase(() => props.model);
</script>
