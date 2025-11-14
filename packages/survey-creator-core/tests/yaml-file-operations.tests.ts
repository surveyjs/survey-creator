import { YAMLFileHelper, createExportYAMLAction, createImportYAMLAction } from "../src/components/yaml-export-import";

// Mock DOM environment for testing
const mockWindow = {
  document: {
    createElement: jest.fn(),
    body: {
      appendChild: jest.fn(),
      removeChild: jest.fn()
    }
  },
  URL: {
    createObjectURL: jest.fn(),
    revokeObjectURL: jest.fn()
  },
  navigator: {}
};

const mockBlob = jest.fn();
const mockFileReader = jest.fn();

// Mock globals
Object.defineProperty(global, 'window', { value: mockWindow });
Object.defineProperty(global, 'document', { value: mockWindow.document });
Object.defineProperty(global, 'Blob', { value: mockBlob });
Object.defineProperty(global, 'FileReader', { value: mockFileReader });

describe("YAML Export/Import Functionality", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup Blob mock
    mockBlob.mockImplementation((content, options) => ({
      content,
      type: options.type
    }));
    
    // Setup createElement mock
    mockWindow.document.createElement.mockImplementation((tagName) => {
      if (tagName === 'input') {
        return {
          type: '',
          accept: '',
          style: { display: '' },
          value: '',
          files: null,
          onchange: null,
          click: jest.fn()
        };
      }
      if (tagName === 'a') {
        return {
          href: '',
          download: '',
          click: jest.fn()
        };
      }
      return {};
    });
    
    // Setup URL mock
    mockWindow.URL.createObjectURL.mockReturnValue('blob:mock-url');
  });

  describe("YAMLFileHelper", () => {
    test("should create export YAML action", () => {
      const mockAction = jest.fn();
      const action = createExportYAMLAction(mockAction, false);
      
      expect(action).toBeDefined();
      expect(action.id).toBe("svc-yaml-export");
      expect(action.iconName).toBe("icon-download");
      expect(action.locTitleName).toBe("ed.yamlExportButton");
      expect(action.mode).toBe("small");
    });

    test("should create export YAML action for editor", () => {
      const mockAction = jest.fn();
      const action = createExportYAMLAction(mockAction, true);
      
      expect(action.mode).toBe("large");
    });

    test("should create import YAML action", () => {
      const mockAction = jest.fn();
      const action = createImportYAMLAction(mockAction, true, false);
      
      expect(action).toBeDefined();
      expect(action.id).toBe("svc-yaml-import");
      expect(action.iconName).toBe("icon-load");
      expect(action.locTitleName).toBe("ed.yamlImportButton");
      expect(action.needSeparator).toBe(true);
      expect(action.mode).toBe("small");
    });

    test("should export to YAML file", () => {
      const testObj = {
        title: "Test Survey",
        pages: [{
          name: "page1",
          elements: [{
            type: "text",
            name: "question1"
          }]
        }]
      };

      YAMLFileHelper.exportToYAMLFile(testObj, "test-survey.yml");

      expect(mockBlob).toHaveBeenCalledWith(
        expect.stringContaining("title: Test Survey"),
        { type: "text/yaml" }
      );
      expect(mockWindow.document.createElement).toHaveBeenCalledWith("a");
      expect(mockWindow.URL.createObjectURL).toHaveBeenCalled();
      expect(mockWindow.document.body.appendChild).toHaveBeenCalled();
      expect(mockWindow.document.body.removeChild).toHaveBeenCalled();
    });

    test("should handle export error gracefully", () => {
      // Mock an object that will cause YAML stringify to fail
      const circularObj = {};
      circularObj.self = circularObj;

      expect(() => {
        YAMLFileHelper.exportToYAMLFile(circularObj, "test.yml");
      }).toThrow("Failed to export YAML file");
    });

    test("should create file input for import", () => {
      const mockCallback = jest.fn();
      const mockInput = {
        type: '',
        accept: '',
        style: { display: '' },
        onchange: null
      };
      
      mockWindow.document.createElement.mockReturnValue(mockInput);
      
      const input = YAMLFileHelper.createFileInput(mockCallback);
      
      expect(input.type).toBe("file");
      expect(input.accept).toBe(".yaml,.yml");
      expect(input.style.display).toBe("none");
      expect(input.onchange).toBeDefined();
    });

    test("should handle file input callback", () => {
      const mockCallback = jest.fn();
      const mockFile = new File(['test: value'], 'test.yml', { type: 'text/yaml' });
      const mockInput = {
        type: 'file',
        accept: '.yaml,.yml',
        style: { display: 'none' },
        value: '',
        files: [mockFile],
        onchange: null
      };
      
      mockWindow.document.createElement.mockReturnValue(mockInput);
      
      const input = YAMLFileHelper.createFileInput(mockCallback);
      
      // Simulate file selection
      input.files = [mockFile];
      input.onchange();
      
      expect(mockCallback).toHaveBeenCalledWith(mockFile);
      expect(input.value).toBe('');
    });

    test("should import from YAML file", async () => {
      const yamlContent = `
title: Test Survey
pages:
  - name: page1
    elements:
      - type: text
        name: question1
`;
      
      const mockFile = new File([yamlContent], 'test.yml', { type: 'text/yaml' });
      
      // Mock FileReader
      const mockFileReader = {
        onload: null,
        onerror: null,
        readAsText: jest.fn(),
        result: yamlContent
      };
      
      global.FileReader = jest.fn(() => mockFileReader);
      
      const promise = YAMLFileHelper.importFromYAMLFile(mockFile);
      
      // Simulate FileReader onload
      mockFileReader.onload({ target: { result: yamlContent } });
      
      const result = await promise;
      
      expect(result).toBeDefined();
      expect(result.title).toBe("Test Survey");
      expect(result.pages[0].name).toBe("page1");
      expect(mockFileReader.readAsText).toHaveBeenCalledWith(mockFile);
    });

    test("should handle import file read error", async () => {
      const mockFile = new File(['test: value'], 'test.yml', { type: 'text/yaml' });
      
      const mockFileReader = {
        onload: null,
        onerror: null,
        readAsText: jest.fn()
      };
      
      global.FileReader = jest.fn(() => mockFileReader);
      
      const promise = YAMLFileHelper.importFromYAMLFile(mockFile);
      
      // Simulate FileReader error
      mockFileReader.onerror();
      
      await expect(promise).rejects.toThrow("Failed to read file");
    });

    test("should handle import YAML parse error", async () => {
      const invalidYaml = "invalid: yaml: structure:";
      const mockFile = new File([invalidYaml], 'test.yml', { type: 'text/yaml' });
      
      const mockFileReader = {
        onload: null,
        onerror: null,
        readAsText: jest.fn()
      };
      
      global.FileReader = jest.fn(() => mockFileReader);
      
      const promise = YAMLFileHelper.importFromYAMLFile(mockFile);
      
      // Simulate FileReader onload with invalid YAML
      mockFileReader.onload({ target: { result: invalidYaml } });
      
      await expect(promise).rejects.toThrow("Failed to parse YAML file");
    });

    test("should handle missing document for createFileInput", () => {
      const originalDocument = global.document;
      delete global.document;
      
      expect(() => {
        YAMLFileHelper.createFileInput(() => {});
      }).toThrow("Document is not available");
      
      global.document = originalDocument;
    });

    test("should handle missing window for export", () => {
      const originalWindow = global.window;
      delete global.window;
      
      const testObj = { test: "value" };
      
      // Should return early without throwing
      expect(() => {
        YAMLFileHelper.exportToYAMLFile(testObj, "test.yml");
      }).not.toThrow();
      
      global.window = originalWindow;
    });
  });
});