<template>
  <div style="position: fixed; top: 0; bottom: 0; right: 0; left: 0;" id="survey-creator">
    <SurveyCreatorComponent v-if="creatorVisible" :model="creator"></SurveyCreatorComponent>
  </div>
</template>
<script lang="ts" setup>
import { slk } from "survey-core";
import { registerSurveyTheme, SurveyCreatorModel, registerCreatorTheme, type ICreatorOptions } from "survey-creator-core";
import SurveyThemes from "survey-core/themes";
registerSurveyTheme(SurveyThemes);
registerCreatorTheme(SurveyThemes);
import "survey-core/survey.i18n";
import "survey-creator-core/survey-creator-core.i18n";
import { nextTick, ref, shallowRef } from "vue";
import { SurveyCreatorComponent } from "survey-creator-vue";
const props = defineProps<{options: ICreatorOptions, useSlk: boolean, useOriginalTheme?: boolean, resetForReuse?: boolean}>()
if (props.useSlk) {
  slk("ZG9tYWluczoxMjcuMC4wLjE7MT0yMDM2LTAzLTE5LDI9MjAzNi0wMy0xOSw0PTIwMzYtMDMtMTksOD0yMDM2LTAzLTE5");
}
// The page's creator. The first load and resetCreatorForReuse() both build it here, so they can't drift apart.
const setupCreator = (newCreator: SurveyCreatorModel) => {
  newCreator.tabResponsivenessMode = "menu";
  newCreator["animationEnabled"] = false;
  if(props.options.propertyGridNavigationMode != 'buttons') {
    newCreator.showOneCategoryInPropertyGrid = false;
  }
  newCreator.allowZoom = props.options.allowZoom === undefined ? false : props.options.allowZoom!;
};
const createCreator = () => {
  const newCreator = new SurveyCreatorModel(props.options);
  setupCreator(newCreator);
  return newCreator;
};
const creator = shallowRef(createCreator());
const creatorVisible = ref(true);
(window as any).creator = creator.value;
if (props.resetForReuse) {
  (window as any).creatorResetCount = 0;
  // Used by the e2e fixture (e2e/helper.ts) to reuse the default test page for the next test. After a test,
  // releaseCreatorForReuse() unmounts the creator and disposes it (and the one updateCreatorModel replaced); the
  // next test's resetCreatorForReuse() renders a new creator in a new component instance. Each bumps
  // window.creatorResetCount once it's done. The creators are disposed in a timer of their own, so an error there
  // is an uncaught page error, not one Vue's scheduler only logs.
  (window as any).releaseCreatorForReuse = () => {
    const oldCreators: Array<SurveyCreatorModel | undefined> = [creator.value, (window as any).prevCreator];
    creatorVisible.value = false;
    nextTick(() => setTimeout(() => {
      try {
        oldCreators.forEach(c => c && !c.isDisposed && c.dispose());
      } finally {
        (window as any).creatorResetCount++;
      }
    }));
    return true;
  };
  (window as any).resetCreatorForReuse = () => {
    creator.value = createCreator();
    (window as any).creator = creator.value;
    (window as any).prevCreator = undefined;
    creatorVisible.value = true;
    nextTick(() => (window as any).creatorResetCount++);
    return true;
  };
}
(window as any).updateCreatorModel = (options: any, json: any) => {
  (window as any).prevCreator = creator.value;
  const newCreator = new SurveyCreatorModel(options);
  newCreator.JSON = json;
  creator.value = newCreator;
  setupCreator(creator.value);
  (window as any).creator = creator.value;
}
</script>
