<template>
  <div
    :key="model.page.id"
    v-if="model.page"
    :id="model.page.id"
    class="svc-page__content"
    :class="model.css"
    v-key2click
    @click="
      (e) => {
        model.select(model, e);
        e.stopPropagation();
      }
    "
    @dblclick="(e) => model.dblclick(e)"
    @mouseover="hover"
    @mouseleave="hover"
  >
    <div class="svc-page__content-actions">
      <SvComponent
        :name="'sv-action-bar'"
        :model="model.actionContainer"
      ></SvComponent>
    </div>
    <SvComponent
      :name="'survey-page'"
      :survey="model.creator.survey"
      :page="model.page"
    />
    <div v-if="model.showPlaceholder" class="svc-page__placeholder_frame">
      <div class="svc-panel__placeholder_frame">
        <div class="svc-panel__placeholder">{{ model.placeholderText }}</div>
      </div>
    </div>
    <SvComponent
      :name="'sv-action-bar'"
      :model="model.footerActionsBar"
    ></SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { SurveyModel, PageModel } from "survey-core";
import type { SurveyCreatorModel } from "survey-creator-core";
import { PageAdorner } from "survey-creator-core";
const props = defineProps<{
  creator: SurveyCreatorModel;
  survey?: SurveyModel;
  page: PageModel;
}>();
const model = useCreatorModel(
  () => new PageAdorner(props.creator, props.page),
  [() => props.page],
  (value) => {
    value.dispose();
  }
);
const hover = (event: MouseEvent) => {
  model.value.hover(event, event.currentTarget);
};
</script>
