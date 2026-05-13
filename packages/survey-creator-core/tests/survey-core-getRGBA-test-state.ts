export const getRGBaColorTestBridge = {
  real: null as null | ((value: any) => any),
  useIdentity: false,
  apply(value: any): any {
    if (this.useIdentity) {
      return value;
    }
    if (!this.real) {
      throw new Error("survey-core getRGBaColor test bridge: real implementation not initialized");
    }
    return this.real(value);
  }
};
