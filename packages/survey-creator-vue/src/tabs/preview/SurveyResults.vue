<template>
  <div class="svd-test-results" v-if="model">
    <div class="svd-test-results__content">
      <div class="svd-test-results__header">
        <div class="svd-test-results__header-text">
          {{ model.surveyResultsText }}
        </div>
        <div class="svd-test-results__header-types">
          <SvComponent
            :is="'svc-action-button'"
            :text="model.surveyResultsTableText"
            :click="model.selectTableClick"
            :disabled="false"
            :selected="model.isTableSelected"
          ></SvComponent>
          <SvComponent
            :is="'svc-action-button'"
            :text="model.surveyResultsJsonText"
            :click="model.selectJsonClick"
            :disabled="false"
            :selected="model.isJsonSelected"
          ></SvComponent>
        </div>
      </div>
      <div
        class="svd-test-results__text svd-light-bg-color"
        v-show="model.resultViewType === 'text'"
      >
        <div>{{ model.resultText }}</div>
      </div>
      <div
        class="svd-test-results__table svd-light-bg-color"
        v-show="model.resultViewType === 'table'"
      >
        <table>
          <thead>
            <tr class="svd-light-background-color">
              <th class="svd-dark-border-color">{{ model.resultsTitle }}</th>
              <th class="svd-dark-border-color">
                {{ model.resultsDisplayValue }}
              </th>
            </tr>
          </thead>
          <tbody>
            <SvComponent
              :is="'survey-results-table-row'"
              v-for="(row, index) in model.resultData"
              :model="row"
              :key="index"
            ></SvComponent>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { SurveyModel } from "survey-core";
import { SurveyResultsModel } from "survey-creator-core";
const props = defineProps<{ survey?: SurveyModel }>();
const model = useCreatorModel(
  () => (props.survey ? new SurveyResultsModel(props.survey) : undefined),
  [() => props.survey]
);
</script>
