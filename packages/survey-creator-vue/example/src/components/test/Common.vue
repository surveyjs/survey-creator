<template>
  <div style="position: fixed; top: 0; bottom: 0; right: 0; left: 0;" id="survey-creator">
    <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
  </div>
</template>
<script lang="ts" setup>
import { slk } from "survey-core";
import { registerSurveyTheme, registerCreatorTheme, SurveyCreatorModel, type ICreatorOptions } from "survey-creator-core";
import SurveyThemes from "survey-core/themes";
import SurveyCreatorTestTheme from "survey-creator-core/themes/test";
registerSurveyTheme(SurveyThemes);
registerCreatorTheme(SurveyCreatorTestTheme);
import "survey-core/survey.i18n";
import "survey-creator-core/survey-creator-core.i18n";
import { shallowRef } from "vue";
import { SurveyCreatorComponent } from "survey-creator-vue";
const props = defineProps<{options: ICreatorOptions, useSlk: boolean}>()
if (props.useSlk) {
  slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2LDg9MjAzNC0xMC0xNg==");
}
const creator = shallowRef(new SurveyCreatorModel(props.options));
creator.value.applyCreatorTheme(SurveyCreatorTestTheme);
(window as any).creator = creator.value;
creator.value.tabResponsivenessMode = "menu";
creator.value["animationEnabled"] = false;
if(props.options.propertyGridNavigationMode != 'buttons') {
  creator.value.showOneCategoryInPropertyGrid = false;
}
creator.value.allowZoom = props.options.allowZoom === undefined ? false : props.options.allowZoom!;
(window as any).updateCreatorModel = (options: any, json: any) => {
  (window as any).prevCreator = creator.value;
  const newCreator = new SurveyCreatorModel(options);
  newCreator.JSON = json;
  creator.value = newCreator;
  creator.value.applyCreatorTheme(SurveyCreatorTestTheme);
  creator.value.tabResponsivenessMode = "menu";
  creator.value["animationEnabled"] = false;
  if(props.options.propertyGridNavigationMode != 'buttons') {
    creator.value.showOneCategoryInPropertyGrid = false;
  }
  creator.value.allowZoom = props.options.allowZoom === undefined ? false : props.options.allowZoom!;
  (window as any).creator = creator.value;
}
</script>
