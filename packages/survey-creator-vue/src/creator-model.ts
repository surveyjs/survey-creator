import type { Base } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { onBeforeUnmount, shallowRef, type ShallowRef, watch } from "vue";

export function useCreatorModel<T extends Base>(
  createModel: () => T | undefined,
  getUpdatedModelProps: () => Array<() => any>,
  clean?: (value: T) => void
): ShallowRef<T | undefined> {
  const model = shallowRef<T>();
  const stopWatch = watch(
    getUpdatedModelProps().map((propFunc) => () => propFunc()),
    () => {
      model.value = createModel();
    },
    {
      immediate: true,
    }
  );
  useBase(() => model.value as T, undefined, clean);
  onBeforeUnmount(() => {
    stopWatch();
  });
  return model as ShallowRef<T>;
}
