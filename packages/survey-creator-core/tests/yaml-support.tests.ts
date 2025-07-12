import { SurveyCreatorModel } from "../src/creator-base";
import { SurveyYAML } from "../src/yaml-utils";

test("SurveyYAML - parse valid YAML", () => {
  const yamlString = `
pages:
  - name: "page1"
    elements:
      - type: "text"
        name: "firstName"
        title: "First Name"
      - type: "text"
        name: "lastName"  
        title: "Last Name"
`;
  
  const result = SurveyYAML.parse(yamlString);
  expect(result).toBeDefined();
  expect(result.pages).toBeDefined();
  expect(result.pages.length).toBe(1);
  expect(result.pages[0].elements.length).toBe(2);
  expect(result.pages[0].elements[0].name).toBe("firstName");
});

test("SurveyYAML - stringify object to YAML", () => {
  const obj = {
    pages: [{
      name: "page1",
      elements: [{
        type: "text",
        name: "firstName",
        title: "First Name"
      }]
    }]
  };
  
  const yamlString = SurveyYAML.stringify(obj);
  expect(yamlString).toBeDefined();
  expect(yamlString).toContain("pages:");
  expect(yamlString).toContain("name: page1");
  expect(yamlString).toContain("type: text");
  expect(yamlString).toContain("name: firstName");
});

test("SurveyYAML - parse invalid YAML throws error", () => {
  const invalidYaml = `
pages:
  - name: "page1"
    elements:
      invalid: yaml: structure:
`;
  
  expect(() => SurveyYAML.parse(invalidYaml)).toThrow("YAML parsing error");
});

test("SurveyYAML - isValidYAML returns correct values", () => {
  const validYaml = "key: value\narray:\n  - item1\n  - item2";
  const invalidYaml = "key: value\n  invalid: yaml: structure:";
  
  expect(SurveyYAML.isValidYAML(validYaml)).toBe(true);
  expect(SurveyYAML.isValidYAML(invalidYaml)).toBe(false);
});

test("SurveyYAML - jsonToYaml conversion", () => {
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
  expect(yamlString).toContain("pages:");
  expect(yamlString).toContain("name: page1");
  expect(yamlString).toContain("type: text");
});

test("SurveyYAML - yamlToJson conversion", () => {
  const yamlString = `
pages:
  - name: page1
    elements:
      - type: text
        name: firstName
`;
  
  const jsonString = SurveyYAML.yamlToJson(yamlString);
  const obj = JSON.parse(jsonString);
  expect(obj.pages).toBeDefined();
  expect(obj.pages[0].name).toBe("page1");
  expect(obj.pages[0].elements[0].type).toBe("text");
});

test("SurveyCreator - yamlText property getter", () => {
  const creator = new SurveyCreatorModel({});
  
  // Set a simple survey
  creator.JSON = {
    pages: [{
      name: "page1",
      elements: [{
        type: "text",
        name: "firstName",
        title: "First Name"
      }]
    }]
  };
  
  const yamlText = creator.yamlText;
  expect(yamlText).toBeDefined();
  expect(yamlText).toContain("pages:");
  expect(yamlText).toContain("name: page1");
  expect(yamlText).toContain("type: text");
  expect(yamlText).toContain("name: firstName");
});

test("SurveyCreator - yamlText property setter", () => {
  const creator = new SurveyCreatorModel({});
  
  const yamlString = `
pages:
  - name: testPage
    elements:
      - type: text
        name: testQuestion
        title: Test Question
`;
  
  creator.yamlText = yamlString;
  
  const json = creator.JSON;
  expect(json.pages).toBeDefined();
  expect(json.pages.length).toBe(1);
  expect(json.pages[0].name).toBe("testPage");
  expect(json.pages[0].elements.length).toBe(1);
  expect(json.pages[0].elements[0].name).toBe("testQuestion");
  expect(json.pages[0].elements[0].title).toBe("Test Question");
});

test("SurveyCreator - toYAML method", () => {
  const creator = new SurveyCreatorModel({});
  
  creator.JSON = {
    pages: [{
      name: "page1",
      elements: [{
        type: "text",
        name: "firstName"
      }]
    }]
  };
  
  const yamlString = creator.toYAML();
  expect(yamlString).toBeDefined();
  expect(yamlString).toContain("pages:");
  expect(yamlString).toContain("name: page1");
});

test("SurveyCreator - fromYAML method", () => {
  const creator = new SurveyCreatorModel({});
  
  const yamlString = `
pages:
  - name: testPage
    elements:
      - type: text
        name: testQuestion
`;
  
  creator.fromYAML(yamlString);
  
  const json = creator.JSON;
  expect(json.pages[0].name).toBe("testPage");
  expect(json.pages[0].elements[0].name).toBe("testQuestion");
});

test("SurveyCreator - yamlText getter/setter round trip", () => {
  const creator = new SurveyCreatorModel({});
  
  const originalYaml = `
pages:
  - name: testPage
    elements:
      - type: text
        name: testQuestion
        title: Test Question
      - type: dropdown
        name: testDropdown
        title: Test Dropdown
        choices:
          - value: option1
            text: Option 1
          - value: option2
            text: Option 2
`;
  
  // Set YAML
  creator.yamlText = originalYaml;
  
  // Get YAML back
  const retrievedYaml = creator.yamlText;
  
  // Parse both to objects for comparison (since formatting might differ)
  const originalObj = SurveyYAML.parse(originalYaml);
  const retrievedObj = SurveyYAML.parse(retrievedYaml);
  
  expect(retrievedObj.pages[0].name).toBe(originalObj.pages[0].name);
  expect(retrievedObj.pages[0].elements.length).toBe(originalObj.pages[0].elements.length);
  expect(retrievedObj.pages[0].elements[0].name).toBe(originalObj.pages[0].elements[0].name);
  expect(retrievedObj.pages[0].elements[1].choices.length).toBe(originalObj.pages[0].elements[1].choices.length);
});