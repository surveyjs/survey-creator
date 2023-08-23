import { onBeforeUnmount, shallowRef, type ShallowRef, watch } from "vue";

export function useCreatorModel<T>(
  props: any,
  createModel: () => T,
  getUpdatedModelProps: () => Array<string>
): ShallowRef<T> {
  const model = shallowRef<T>(undefined as T);
  const stopWatch = watch(
    getUpdatedModelProps().map((propName) => () => props[propName]),
    () => {
      model.value = createModel();
    }
  );
  onBeforeUnmount(() => {
    stopWatch();
  });
  return model;
}
