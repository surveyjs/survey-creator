import * as yaml from "js-yaml";

/**
 * Utility class for YAML operations in Survey Creator
 */
export class SurveyYAML {
  /**
   * Parse YAML string to JavaScript object
   * @param yamlString - The YAML string to parse
   * @returns Parsed JavaScript object
   * @throws Error if YAML parsing fails
   */
  public static parse(yamlString: string): any {
    try {
      return yaml.load(yamlString);
    } catch (error) {
      throw new Error(`YAML parsing error: ${error.message}`);
    }
  }

  /**
   * Convert JavaScript object to YAML string
   * @param obj - The object to convert to YAML
   * @param options - Optional YAML stringification options
   * @returns YAML string representation
   */
  public static stringify(obj: any, options?: yaml.DumpOptions): string {
    try {
      const defaultOptions: yaml.DumpOptions = {
        indent: 2,
        lineWidth: 120,
        noRefs: true,
        sortKeys: false,
        ...options
      };
      return yaml.dump(obj, defaultOptions);
    } catch (error) {
      throw new Error(`YAML stringification error: ${error.message}`);
    }
  }

  /**
   * Check if a string is valid YAML
   * @param yamlString - The string to validate
   * @returns true if valid YAML, false otherwise
   */
  public static isValidYAML(yamlString: string): boolean {
    try {
      yaml.load(yamlString);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Convert JSON string to YAML string
   * @param jsonString - JSON string to convert
   * @returns YAML string
   */
  public static jsonToYaml(jsonString: string): string {
    try {
      const obj = JSON.parse(jsonString);
      return this.stringify(obj);
    } catch (error) {
      throw new Error(`JSON to YAML conversion error: ${error.message}`);
    }
  }

  /**
   * Convert YAML string to JSON string
   * @param yamlString - YAML string to convert
   * @returns JSON string
   */
  public static yamlToJson(yamlString: string): string {
    try {
      const obj = this.parse(yamlString);
      return JSON.stringify(obj, null, 2);
    } catch (error) {
      throw new Error(`YAML to JSON conversion error: ${error.message}`);
    }
  }
}