<template>
  <div
    role="button"
    class="svc-preview__test-again svc-btn"
    @click="action.action()"
    v-key2click
  >
    <span class="svc-btn__text">
      {{ action.title }}
    </span>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
defineOptions({ inheritAttrs: false });
const props = defineProps<{ model: { testAgainAction: Action } }>();
const action = computed(() => props.model.testAgainAction);
useBase(() => action.value);
</script>
