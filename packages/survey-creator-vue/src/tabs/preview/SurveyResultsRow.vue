<template>
  <tr @click="model.toggle" v-key2click>
    <td
      class="svd-dark-border-color"
      :style="{ paddingLeft: model.textMargin }"
    >
      <span
        v-if="model.isNode"
        class="svd-test-results__marker"
        :class="{ 'svd-test-results__marker--expanded': !model.collapsed }"
        :style="{ left: model.markerMargin }"
      >
        <sv-svg-icon :iconName="'icon-expand_16x16'" :size="16"></sv-svg-icon>
      </span>
      <survey-string v-if="model.question" :locString="model.question.locTitle"></survey-string>
      <span v-else>{{ model.title }}</span>
    </td>
    <td
      :class="{
        'svd-test-results__node-value': model.isNode,
        'svd-dark-border-color': !model.isNode,
      }"
    >
      {{ model.getString(model.displayValue) }}
    </td>
  </tr>
  <template v-if="model.isNode && !model.collapsed">
    <survey-results-table-row
      v-for="(row, index) in model.data"
      :model="row"
      :key="index + 1"
    ></survey-results-table-row>
  </template>
</template>

<script lang="ts" setup>
import type { SurveyResultsItemModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SurveyResultsItemModel }>();
useBase(() => props.model);
</script>
