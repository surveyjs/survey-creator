<template>
  <div style="position: fixed; top: 0; bottom: 0; right: 0; left: 0;">
    <SurveyCreatorComponent :model="creator"></SurveyCreatorComponent>
  </div>
</template>
<script lang="ts" setup>
import { slk } from "survey-core";
import { CreatorBase, type ICreatorOptions } from "survey-creator-core";
const props = defineProps<{options: ICreatorOptions, useSlk: boolean}>()
if (props.useSlk) {
  slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2");
}
const creator = new CreatorBase(props.options);
(window as any).creator = creator;
</script>