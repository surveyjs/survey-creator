<template>
  <template v-if="model.isVisible">
    <sv-list :model="model.list"></sv-list>
  </template>
</template>
<script lang="ts" setup>
import type { ObjectSelectorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: ObjectSelectorModel }>();
useBase(() => props.model);
</script>
