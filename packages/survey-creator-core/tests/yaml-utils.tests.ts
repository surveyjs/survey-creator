import { SurveyYAML } from "../src/yaml-utils";

describe("SurveyYAML Utility Tests", () => {
  test("should parse valid YAML string", () => {
    const yamlString = `
name: testSurvey
pages:
  - name: page1
    elements:
      - type: text
        name: firstName
        title: First Name
`;
    
    const result = SurveyYAML.parse(yamlString);
    expect(result).toBeDefined();
    expect(result.name).toBe("testSurvey");
    expect(result.pages).toBeDefined();
    expect(Array.isArray(result.pages)).toBe(true);
    expect(result.pages.length).toBe(1);
    expect(result.pages[0].name).toBe("page1");
    expect(result.pages[0].elements.length).toBe(1);
    expect(result.pages[0].elements[0].type).toBe("text");
    expect(result.pages[0].elements[0].name).toBe("firstName");
  });

  test("should stringify object to YAML", () => {
    const obj = {
      name: "testSurvey",
      pages: [{
        name: "page1",
        elements: [{
          type: "text",
          name: "firstName",
          title: "First Name"
        }, {
          type: "dropdown",
          name: "country",
          title: "Select Country",
          choices: [
            { value: "us", text: "United States" },
            { value: "ca", text: "Canada" }
          ]
        }]
      }]
    };
    
    const yamlString = SurveyYAML.stringify(obj);
    expect(yamlString).toBeDefined();
    expect(typeof yamlString).toBe("string");
    expect(yamlString).toContain("name: testSurvey");
    expect(yamlString).toContain("pages:");
    expect(yamlString).toContain("- name: page1");
    expect(yamlString).toContain("type: text");
    expect(yamlString).toContain("name: firstName");
    expect(yamlString).toContain("type: dropdown");
    expect(yamlString).toContain("choices:");
  });

  test("should throw error for invalid YAML", () => {
    const invalidYaml = `
pages:
  - name: page1
    elements:
      invalid: yaml: structure:
      more: invalid: syntax
`;
    
    expect(() => SurveyYAML.parse(invalidYaml)).toThrow("YAML parsing error");
  });

  test("should validate YAML correctly", () => {
    const validYaml = "name: test\nvalue: 123\narray:\n  - item1\n  - item2";
    const invalidYaml = "name: test\ninvalid: yaml: structure:";
    
    expect(SurveyYAML.isValidYAML(validYaml)).toBe(true);
    expect(SurveyYAML.isValidYAML(invalidYaml)).toBe(false);
    expect(SurveyYAML.isValidYAML("")).toBe(true); // Empty string is valid YAML
  });

  test("should convert JSON string to YAML", () => {
    const jsonString = JSON.stringify({
      pages: [{
        name: "page1",
        elements: [{
          type: "text",
          name: "firstName"
        }]
      }]
    });
    
    const yamlString = SurveyYAML.jsonToYaml(jsonString);
    expect(yamlString).toBeDefined();
    expect(yamlString).toContain("pages:");
    expect(yamlString).toContain("name: page1");
    expect(yamlString).toContain("type: text");
  });

  test("should convert YAML string to JSON", () => {
    const yamlString = `
pages:
  - name: page1
    elements:
      - type: text
        name: firstName
      - type: rating
        name: satisfaction
        rateMin: 1
        rateMax: 5
`;
    
    const jsonString = SurveyYAML.yamlToJson(yamlString);
    const obj = JSON.parse(jsonString);
    expect(obj.pages).toBeDefined();
    expect(obj.pages[0].name).toBe("page1");
    expect(obj.pages[0].elements[0].type).toBe("text");
    expect(obj.pages[0].elements[1].rateMin).toBe(1);
    expect(obj.pages[0].elements[1].rateMax).toBe(5);
  });

  test("should handle round-trip conversion", () => {
    const originalObj = {
      title: "Customer Satisfaction Survey",
      pages: [{
        name: "page1",
        elements: [{
          type: "text",
          name: "firstName",
          title: "First Name",
          isRequired: true
        }, {
          type: "dropdown",
          name: "country",
          title: "Country",
          choices: [
            { value: "us", text: "United States" },
            { value: "ca", text: "Canada" },
            { value: "uk", text: "United Kingdom" }
          ]
        }, {
          type: "rating",
          name: "satisfaction",
          title: "Overall Satisfaction",
          rateMin: 1,
          rateMax: 10,
          rateStep: 1
        }]
      }]
    };
    
    // Convert to YAML and back
    const yamlString = SurveyYAML.stringify(originalObj);
    const roundTripObj = SurveyYAML.parse(yamlString);
    
    // Compare key properties
    expect(roundTripObj.title).toBe(originalObj.title);
    expect(roundTripObj.pages.length).toBe(originalObj.pages.length);
    expect(roundTripObj.pages[0].name).toBe(originalObj.pages[0].name);
    expect(roundTripObj.pages[0].elements.length).toBe(originalObj.pages[0].elements.length);
    
    // Check each element
    const originalElements = originalObj.pages[0].elements;
    const roundTripElements = roundTripObj.pages[0].elements;
    
    for (let i = 0; i < originalElements.length; i++) {
      expect(roundTripElements[i].type).toBe(originalElements[i].type);
      expect(roundTripElements[i].name).toBe(originalElements[i].name);
      expect(roundTripElements[i].title).toBe(originalElements[i].title);
    }
  });

  test("should handle special characters and Unicode", () => {
    const obj = {
      title: "Survey with Special Characters: !@#$%^&*()",
      description: "Unicode test: 你好世界 🌍 こんにちは",
      pages: [{
        name: "page1",
        elements: [{
          type: "text",
          name: "email",
          title: "Email Address (user@domain.com)",
          placeholder: "Enter your email..."
        }]
      }]
    };
    
    const yamlString = SurveyYAML.stringify(obj);
    const parsedObj = SurveyYAML.parse(yamlString);
    
    expect(parsedObj.title).toBe(obj.title);
    expect(parsedObj.description).toBe(obj.description);
    expect(parsedObj.pages[0].elements[0].placeholder).toBe(obj.pages[0].elements[0].placeholder);
  });

  test("should handle nested objects and arrays", () => {
    const complexObj = {
      pages: [{
        name: "page1",
        elements: [{
          type: "matrixdynamic",
          name: "matrix",
          title: "Matrix Question",
          columns: [
            { name: "col1", title: "Column 1", cellType: "text" },
            { name: "col2", title: "Column 2", cellType: "dropdown", 
              choices: ["Option 1", "Option 2"] }
          ],
          choices: [1, 2, 3, 4, 5],
          cellType: "text",
          confirmDelete: true
        }]
      }],
      triggers: [{
        type: "complete",
        expression: "{question1} = 'yes'"
      }],
      calculatedValues: [{
        name: "var1",
        expression: "{question1} + {question2}"
      }]
    };
    
    const yamlString = SurveyYAML.stringify(complexObj);
    const parsedObj = SurveyYAML.parse(yamlString);
    
    expect(parsedObj.pages[0].elements[0].columns.length).toBe(2);
    expect(parsedObj.pages[0].elements[0].columns[0].cellType).toBe("text");
    expect(parsedObj.pages[0].elements[0].columns[1].choices.length).toBe(2);
    expect(parsedObj.triggers.length).toBe(1);
    expect(parsedObj.calculatedValues.length).toBe(1);
  });

  test("should handle custom YAML options", () => {
    const obj = {
      title: "Test Survey",
      pages: [{ name: "page1", elements: [] }]
    };
    
    const customOptions = {
      indent: 4,
      lineWidth: 80,
      sortKeys: true
    };
    
    const yamlString = SurveyYAML.stringify(obj, customOptions);
    expect(yamlString).toBeDefined();
    expect(typeof yamlString).toBe("string");
    
    // Verify we can still parse it back
    const parsedObj = SurveyYAML.parse(yamlString);
    expect(parsedObj.title).toBe(obj.title);
  });

  test("should handle empty and null values", () => {
    const obj = {
      title: "",
      description: null,
      pages: [],
      variables: {},
      showTitle: false,
      maxValue: 0
    };
    
    const yamlString = SurveyYAML.stringify(obj);
    const parsedObj = SurveyYAML.parse(yamlString);
    
    expect(parsedObj.title).toBe("");
    expect(parsedObj.description).toBe(null);
    expect(Array.isArray(parsedObj.pages)).toBe(true);
    expect(parsedObj.pages.length).toBe(0);
    expect(parsedObj.showTitle).toBe(false);
    expect(parsedObj.maxValue).toBe(0);
  });
});