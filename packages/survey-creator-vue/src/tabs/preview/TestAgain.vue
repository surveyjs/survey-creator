<template>
  <div
    role="button"
    class="svc-preview__test-again svc-btn"
    @click="model.action()"
    v-key2click
  >
    <span class="svc-text svc-text--normal svc-text--bold">
      {{ model.title }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: Action }>();
useBase(() => props.model);
</script>
