
export type ConfigsHash<T> = { [index: string]: T | boolean, __surveyjs_internal_themes_hash: boolean };
export function registerConfig<T>(registerConfigCallback: (config: T) => void, ...configs: Array<T | ConfigsHash<T>>) {
  configs.forEach(config => {
    if ((config as ConfigsHash<T>).__surveyjs_internal_themes_hash) {
      const configsHash = config as ConfigsHash<T>;
      Object.keys(configsHash).forEach(key => {
        if (key != "__surveyjs_internal_configs_hash" && key != "default" && typeof configsHash[key] !== "boolean") {
          registerConfigCallback(configsHash[key]);
        }
      });
    } else {
      registerConfigCallback(config as T);
    }
  });
}
export function sortDefaultConfigs(defaultConfigsOrder: Array<string>, configs: Array<string>, resultArray: Array<string>): void {
  const sortedConfigNames = [].concat(configs).sort((t1, t2) => {
    const firstIndex = defaultConfigsOrder.indexOf(t1);
    const secondIndex = defaultConfigsOrder.indexOf(t2);
    return (firstIndex < 0 ? Number.MAX_VALUE : firstIndex) - (secondIndex < 0 ? Number.MAX_VALUE : secondIndex);
  });

  sortedConfigNames.forEach(configName => {
    if (resultArray.indexOf(configName) === -1) {
      resultArray.push(configName);
    }
  });
}