<template>
  <div ref="root" class="svc-scroll__wrapper">
      <div class="svc-scroll__scroller sv-drag-target-skipped" @scroll="() => model.onScrollContainer()">
        <div class="svc-scroll__container">
          <slot />
        </div>
      </div>
      <div class="svc-scroll__scrollbar" @scroll="() => model.onScrollScrollbar()">
        <div class="svc-scroll__scrollbar-sizer">
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { ScrollViewModel } from "survey-creator-core";
import { onMounted, onUnmounted, ref } from "vue";

const model = new ScrollViewModel();
const root = ref<HTMLDivElement>();
onMounted(() => {
  model.setRootElement(root.value as HTMLDivElement);
});
onUnmounted(() => {
  model.setRootElement(undefined as any);
  model.unsubscribeRootElement();
});
</script>


