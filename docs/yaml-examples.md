# Example: Using YAML Support in SurveyJS Creator

This example demonstrates how to use the new YAML support features.

## HTML Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>Survey Creator with YAML Support</title>
    <script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
    <script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
</head>
<body>
    <div id="creator-container"></div>
    
    <script>
        // Create Survey Creator instance
        const creator = new SurveyCreator.SurveyCreator({
            showJSONEditorTab: true,
            autoSaveEnabled: false
        });
        
        // Sample YAML survey definition
        const sampleYAML = `
title: Customer Feedback Survey
description: Help us improve our services
pages:
  - name: page1
    title: Your Information
    elements:
      - type: text
        name: customerName
        title: Full Name
        isRequired: true
      - type: dropdown
        name: customerType
        title: Customer Type
        choices:
          - value: new
            text: New Customer
          - value: returning
            text: Returning Customer
          - value: premium
            text: Premium Customer

  - name: page2
    title: Feedback
    elements:
      - type: rating
        name: serviceRating
        title: Rate Our Service
        rateMin: 1
        rateMax: 5
        minRateDescription: Poor
        maxRateDescription: Excellent
      - type: comment
        name: additionalComments
        title: Additional Comments
        placeholder: Tell us more about your experience...
`;

        // Set survey using YAML
        try {
            creator.yamlText = sampleYAML;
            console.log('Survey loaded from YAML successfully');
        } catch (error) {
            console.error('Failed to load YAML:', error);
        }
        
        // Add custom toolbar buttons
        creator.toolbox.addItem({
            name: "yaml-export",
            title: "Export YAML",
            tooltip: "Export survey as YAML file",
            iconName: "icon-download",
            action: () => {
                creator.exportToYAMLFile('my-survey.yml');
            }
        });
        
        creator.toolbox.addItem({
            name: "yaml-import",
            title: "Import YAML",
            tooltip: "Import survey from YAML file",
            iconName: "icon-load",
            action: () => {
                creator.importFromYAMLFileDOM();
            }
        });
        
        // Handle survey changes
        creator.onModified.add((sender, options) => {
            // Get current survey in different formats
            const jsonText = creator.text;
            const yamlText = creator.yamlText;
            
            console.log('Survey modified');
            console.log('JSON length:', jsonText.length);
            console.log('YAML length:', yamlText.length);
        });
        
        // Render creator
        creator.render('creator-container');
    </script>
</body>
</html>
```

## React Example

```jsx
import React, { useRef, useEffect } from 'react';
import { SurveyCreatorModel } from 'survey-creator-core';

const YAMLSurveyCreator = () => {
    const creatorRef = useRef(null);
    const creator = useRef(null);

    useEffect(() => {
        // Initialize creator
        creator.current = new SurveyCreatorModel({
            showJSONEditorTab: true
        });

        // Sample YAML
        const yamlSurvey = `
title: React YAML Survey
pages:
  - name: page1
    elements:
      - type: text
        name: userName
        title: Your Name
      - type: rating
        name: experience
        title: Rate your experience
        rateMax: 5
`;

        // Load YAML
        creator.current.yamlText = yamlSurvey;

        // Render
        creator.current.render(creatorRef.current);

        return () => {
            creator.current?.dispose();
        };
    }, []);

    const exportToYAML = () => {
        creator.current?.exportToYAMLFile('react-survey.yml');
    };

    const importFromYAML = () => {
        creator.current?.importFromYAMLFileDOM();
    };

    const logCurrentYAML = () => {
        console.log('Current YAML:');
        console.log(creator.current?.yamlText);
    };

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={exportToYAML}>Export YAML</button>
                <button onClick={importFromYAML}>Import YAML</button>
                <button onClick={logCurrentYAML}>Log YAML</button>
            </div>
            <div ref={creatorRef} style={{ height: '600px' }}></div>
        </div>
    );
};

export default YAMLSurveyCreator;
```

## Node.js Example

```javascript
const { SurveyYAML, SurveyCreatorModel } = require('survey-creator-core');
const fs = require('fs');

// Read YAML file
const yamlContent = fs.readFileSync('survey.yml', 'utf8');

// Parse YAML to object
const surveyDefinition = SurveyYAML.parse(yamlContent);

// Create creator and set survey
const creator = new SurveyCreatorModel();
creator.JSON = surveyDefinition;

// Make some modifications
creator.survey.title = "Modified Survey Title";

// Export back to YAML
const updatedYAML = creator.yamlText;
fs.writeFileSync('updated-survey.yml', updatedYAML);

console.log('Survey processed and saved');
```

## Converting Existing JSON Surveys to YAML

```javascript
const { SurveyYAML } = require('survey-creator-core');
const fs = require('fs');

// Read existing JSON survey
const jsonContent = fs.readFileSync('existing-survey.json', 'utf8');

// Convert to YAML
const yamlContent = SurveyYAML.jsonToYaml(jsonContent);

// Save as YAML file
fs.writeFileSync('converted-survey.yml', yamlContent);

console.log('Conversion complete!');
```

## Error Handling Example

```javascript
function loadSurveyFromYAML(yamlString) {
    try {
        // Validate YAML first
        if (!SurveyYAML.isValidYAML(yamlString)) {
            throw new Error('Invalid YAML format');
        }

        // Parse YAML
        const surveyObj = SurveyYAML.parse(yamlString);
        
        // Validate required fields
        if (!surveyObj.pages || !Array.isArray(surveyObj.pages)) {
            throw new Error('Survey must have pages array');
        }

        // Set in creator
        creator.JSON = surveyObj;
        
        return { success: true };
    } catch (error) {
        console.error('Failed to load survey:', error.message);
        return { 
            success: false, 
            error: error.message 
        };
    }
}
```

## Sample YAML Survey Files

### Basic Survey
```yaml
# survey-basic.yml
title: Basic Customer Survey
description: We value your feedback
pages:
  - name: feedback
    elements:
      - type: text
        name: name
        title: Your Name
        isRequired: true
      - type: rating
        name: satisfaction
        title: Satisfaction Rating
        rateMax: 5
      - type: comment
        name: comments
        title: Additional Comments
```

### Advanced Survey with Logic
```yaml
# survey-advanced.yml
title: Product Feedback Survey
pages:
  - name: product-usage
    elements:
      - type: radiogroup
        name: hasUsedProduct
        title: Have you used our product?
        choices:
          - value: yes
            text: "Yes"
          - value: no
            text: "No"
      
      - type: dropdown
        name: productVersion
        title: Which version did you use?
        visibleIf: "{hasUsedProduct} = 'yes'"
        choices:
          - v1.0
          - v2.0
          - v3.0
      
      - type: matrix
        name: features
        title: Rate these features
        visibleIf: "{hasUsedProduct} = 'yes'"
        columns:
          - value: 1
            text: Poor
          - value: 2
            text: Fair
          - value: 3
            text: Good
          - value: 4
            text: Very Good
          - value: 5
            text: Excellent
        rows:
          - value: usability
            text: Ease of Use
          - value: performance
            text: Performance
          - value: design
            text: Design

triggers:
  - type: skip
    expression: "{hasUsedProduct} = 'no'"
    gotoName: feedback
    
  - type: complete
    expression: "{hasUsedProduct} = 'yes' and {features.usability} >= 4"

calculatedValues:
  - name: avgRating
    expression: "({features.usability} + {features.performance} + {features.design}) / 3"
```