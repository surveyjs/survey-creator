# YAML Support for SurveyJS Creator

This document describes the YAML support functionality added to SurveyJS Creator.

## Overview

YAML support allows users to work with survey definitions in YAML format as an alternative to JSON. This includes:

- Converting between JSON and YAML formats
- Importing survey definitions from YAML files
- Exporting survey definitions to YAML files
- YAML editor tab in the Creator UI

## Key Components

### 1. SurveyYAML Utility Class (`src/yaml-utils.ts`)

The core utility for YAML operations:

```typescript
import { SurveyYAML } from 'survey-creator-core';

// Parse YAML string to object
const surveyObj = SurveyYAML.parse(yamlString);

// Convert object to YAML string
const yamlString = SurveyYAML.stringify(surveyObj);

// Validate YAML
const isValid = SurveyYAML.isValidYAML(yamlString);

// Convert between formats
const yamlFromJson = SurveyYAML.jsonToYaml(jsonString);
const jsonFromYaml = SurveyYAML.yamlToJson(yamlString);
```

### 2. SurveyCreatorBase Extensions

New properties and methods added to the main creator class:

```typescript
import { SurveyCreatorModel } from 'survey-creator-core';

const creator = new SurveyCreatorModel();

// Get/Set survey as YAML
creator.yamlText = yamlString;
const yamlString = creator.yamlText;

// Export/Import methods
creator.exportToYAMLFile('my-survey.yml');
creator.importFromYAMLFileDOM(); // Opens file dialog

// Programmatic import
creator.importFromYAMLFile(file).then(() => {
  console.log('Survey imported from YAML');
});

// Utility methods
const yamlString = creator.toYAML();
creator.fromYAML(yamlString);
```

### 3. YAML Editor Plugin (`src/components/tabs/yaml-editor-plugin.ts`)

A new editor tab that extends the JSON editor functionality:

```typescript
import { TabYamlEditorPlugin } from 'survey-creator-core';

// The plugin provides:
// - YAML syntax highlighting (when integrated with code editors)
// - YAML validation with error reporting
// - Export/Import actions in the toolbar
// - Real-time conversion between YAML and survey model
```

### 4. File Operations (`src/components/yaml-export-import.ts`)

Helper functions for file import/export:

```typescript
import { YAMLFileHelper, createExportYAMLAction, createImportYAMLAction } from 'survey-creator-core';

// Create actions for toolbars
const exportAction = createExportYAMLAction(() => {
  // Export logic
});

const importAction = createImportYAMLAction(() => {
  // Import logic
}, true); // needSeparator

// File operations
YAMLFileHelper.exportToYAMLFile(surveyObj, 'survey.yml');
YAMLFileHelper.importFromYAMLFile(file).then(obj => {
  // Handle imported object
});
```

## Usage Examples

### Basic Survey Definition in YAML

```yaml
title: Customer Satisfaction Survey
description: Please help us improve our service
pages:
  - name: page1
    title: Basic Information
    elements:
      - type: text
        name: firstName
        title: First Name
        isRequired: true
      - type: text
        name: lastName
        title: Last Name
        isRequired: true
      - type: dropdown
        name: country
        title: Country
        choices:
          - value: us
            text: United States
          - value: ca
            text: Canada
          - value: uk
            text: United Kingdom

  - name: page2
    title: Feedback
    elements:
      - type: rating
        name: satisfaction
        title: Overall Satisfaction
        rateMin: 1
        rateMax: 10
        rateStep: 1
      - type: comment
        name: suggestions
        title: Additional Comments
        placeholder: Please share your suggestions...
```

### Advanced Features

```yaml
# Survey with logic and calculated values
title: Advanced Survey Example
pages:
  - name: demographics
    elements:
      - type: radiogroup
        name: hasChildren
        title: Do you have children?
        choices:
          - value: yes
            text: "Yes"
          - value: no
            text: "No"
      
      - type: text
        name: numberOfChildren
        title: How many children do you have?
        inputType: number
        visibleIf: "{hasChildren} = 'yes'"

# Triggers
triggers:
  - type: complete
    expression: "{satisfaction} >= 8"

# Calculated values
calculatedValues:
  - name: totalScore
    expression: "{satisfaction} + {likelihood}"

# Custom CSS
css:
  question:
    title: "font-weight: bold;"
```

### Error Handling

```typescript
try {
  const surveyObj = SurveyYAML.parse(yamlString);
  creator.JSON = surveyObj;
} catch (error) {
  console.error('YAML parsing failed:', error.message);
  // Handle error - show user-friendly message
}
```

## Integration with Existing Code

The YAML support is designed to be a seamless extension of existing JSON functionality:

1. **No Breaking Changes**: All existing JSON APIs continue to work
2. **Interchangeable Formats**: Easily convert between JSON and YAML
3. **Consistent API**: YAML methods follow the same patterns as JSON methods
4. **Error Handling**: Comprehensive error messages for debugging

## File Format Support

Supported file extensions:
- `.yaml`
- `.yml`

MIME type: `text/yaml`

## Localization

New localization keys added to English translation:
- `yamlExportButton`: "Export to YAML"
- `yamlImportButton`: "Import from YAML"

## Testing

Comprehensive test coverage includes:
- YAML parsing and stringification
- Round-trip conversion (JSON ↔ YAML ↔ JSON)
- Error handling for invalid YAML
- File import/export operations
- Special characters and Unicode support
- Empty and null value handling

## Browser Compatibility

The YAML functionality works in all modern browsers that support:
- ES6 features (Promise, const/let, arrow functions)
- File API for file import/export
- Blob API for file downloads

## Dependencies

- `js-yaml`: ^4.1.0 - Core YAML parsing and stringification
- `@types/js-yaml`: ^4.0.5 - TypeScript type definitions