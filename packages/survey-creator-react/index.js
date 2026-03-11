Survey.ComponentCollection.Instance.add({ name: "newrating", title: "SuperRating", elementsJSON: [{ "type": "rating", "name": "superrating", "title": "1", "isRequired": true, "rateMin": 0, "rateMax": 10, "minRateDescription": "1", "maxRateDescription": "2" }] });
Survey.ComponentCollection.Instance.add({ name: "d2", title: "DDD", questionJSON: { "type": "dropdown", "name": "superrating", "title": "1", "isRequired": true, choices: [1, 2, 3] } });

let json = {
  showProgressBar: true,
  progressBarLocation: "topBottom",
  description: "Survey Description",
  title: "Survey New Design Test",
  logo: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg",
  logoPosition: "left",
  elements: [
    {
      name: "signature",
      type: "signaturepad",
      title: "Sign here",
      isRequired: true
    },
    {
      name: "name",
      type: "text",
      title: "Text",
      placeHolder: "Jon Snow",
      isRequired: true
    },
    {
      name: "birthdate",
      type: "text",
      inputType: "date",
      title: "Text Date",
      isRequired: true
    },
    {
      name: "color",
      type: "text",
      inputType: "color",
      title: "Text Color"
    },
    {
      name: "email",
      type: "text",
      inputType: "email",
      title: "Text Email",
      placeHolder: "jon.snow@nightwatch.org",
      isRequired: true,
      validators: [
        {
          type: "email"
        }
      ]
    },
    {
      type: "dropdown",
      name: "cars",
      title: "Dropdown",
      isRequired: true,
      showNoneItem: true,
      colCount: 4,
      choices: [
        "Ford",
        "Vauxhall",
        "Volkswagen",
        "Nissan",
        "Audi",
        "Mercedes-Benz",
        "BMW",
        "Peugeot",
        "Toyota",
        "Citroen"
      ]
    },
    {
      type: "tagbox",
      name: "cars2",
      title: "Tagbox",
      showNoneItem: true,
      choices: [
        "Ford",
        "Vauxhall",
        "Volkswagen",
        "Nissan",
        "Audi",
        "Mercedes-Benz",
        "BMW",
        "Peugeot",
        "Toyota",
        "Citroen"
      ]
    },
    {
      type: "checkbox",
      name: "car",
      title: "Checkbox",
      isRequired: true,
      showNoneItem: true,
      colCount: 4,
      showSelectAllItem: true,
      choices: [
        "Ford",
        "Vauxhall",
        "Volkswagen",
        "Nissan",
        "Audi",
        "Mercedes-Benz",
        "BMW",
        "Peugeot",
        "Toyota",
        "Citroen"
      ]
    },
    {
      type: "radiogroup",
      name: "carss",
      title: "Radiogroup",
      isRequired: true,
      colCount: 4,
      choices: [
        "None",
        "Ford",
        "Vauxhall",
        "Volkswagen",
        "Nissan",
        "Audi",
        "Mercedes-Benz",
        "BMW",
        "Peugeot",
        "Toyota",
        "Citroen"
      ]
    },
    {
      type: "image",
      name: "banner",
      imageHeight: "300px",
      imageWidth: "450px",
      imageLink:
            "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
    },
    {
      type: "image",
      name: "banner",
      "contentMode": "video",
      imageHeight: "300px",
      imageWidth: "450px",
      imageLink:
            "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
    },
    {
      type: "imagepicker",
      name: "choosepicture",
      title: "Imagepicker",
      imageHeight: "150px",
      imageWidth: "225px",
      choices: [
        {
          value: "lion",
          imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
        },
        {
          value: "giraffe",
          imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
        },
        {
          value: "panda",
          imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
        },
        {
          value: "camel",
          imageLink:
                "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
        }
      ]
    },
    {
      type: "imagepicker",
      name: "choosevideo",
      title: "Imagepicker",
      imageHeight: "300px",
      imageWidth: "450px",
      "contentMode": "video",
      choices: [
        {
          value: "short_but_high",
          imageLink:
                "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
        },
        {
          value: "long_but_poor",
          imageLink:
                "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4"
        }
      ]
    },
    {
      type: "boolean",
      name: "bool",
      title: "Boolean",
      label: "Are you 21 or older?",
      isRequired: true
    },
    {
      type: "matrix",
      name: "Quality",
      title: "Matrix",
      columns: [
        {
          value: 1,
          text: "Strongly Disagree"
        },
        {
          value: 2,
          text: "Disagree"
        },
        {
          value: 3,
          text: "Neutral"
        },
        {
          value: 4,
          text: "Agree"
        },
        {
          value: 5,
          text: "Strongly Agree"
        }
      ],
      rows: [
        {
          value: "affordable",
          text: "Product is affordable"
        },
        {
          value: "does what it claims",
          text: "Product does what it claims"
        },
        {
          value: "better than others",
          text: "Product is better than other products on the market"
        },
        {
          value: "easy to use",
          text: "Product is easy to use"
        }
      ]
    },
    {
      type: "matrix",
      name: "planningPerformance",
      title: "Matrix Rubric",
      columns: [
        "Ineffective",
        "Improvement Necessary",
        "Effective",
        "Highly Effective"
      ],
      rows: [
        {
          value: "dataToPlan",
          text: "Utilizes Assessment Data to Plan"
        },
        {
          value: "ambitiousGoals",
          text: "Ambitious and Measurable Achievement Goal"
        },
        {
          value: "developsStandards",
          text:
                "Develops Standards.<br/>Based Unit Plans and Assessments.<br/>Evaluation Values."
        },
        {
          value: "createsObjective",
          text: "Creates Objective - Driven Lesson Plans and Assessments"
        }
      ],
      cells: {
        dataToPlan: {
          Ineffective:
                "Teacher rarely or never uses formal and informal assessment data when planning",
          "Improvement Necessary":
                "Teacher uses formal and informal assessment data to formulate <br/> - Achievement goals, unit plans, or lesson plans, but not all of these",
          Effective:
                "Teacher uses formal and informal assessment data to formulate <br/>- Achievement goals, unit plans, and lesson plans",
          "Highly Effective":
                "Teacher uses formal and informal assessment data to formulate achievement goals, unit plans, and lesson plans<br/>- Incorporates differentiated instructional strategies in planning to reach every student at his/her level of understanding"
        },
        ambitiousGoals: {
          Ineffective:
                "Teacher rarely or never develops achievement goals for the class, or goals are developed but are too general to be helpful for planning purposes",
          "Improvement Necessary":
                "Teacher develops an annual student achievement goalthat lacks one or more of these traits:<br/>- Measurable<br/>- Aligned to content standards<br/>- Includes benchmarks to help monitor learning and inform interventions throughout the year",
          Effective:
                "Teacher develops an annual student achievement goal that<br/>- Is measurable<br/>- Is aligned to content standards<br/>- Includes benchmarks to help monitor learning and inform interventions throughout the year",
          "Highly Effective":
                "Teacher develops an annual student achievement goal that<br/>- Is measurable<br/>- Is aligned to content standards where applicable<br/>- Includes benchmarks to help monitor learning and informinterventions throughout the year"
        },
        developsStandards: {
          Ineffective:
                "Teacher rarely or never plans by identifying content standards that students will master in each unit, or there is little to no evidence that teacher plans units at all",
          "Improvement Necessary":
                "Based on achievement goals, teacher plans units but omits one or more of these steps:<br/>- Identifying content standards that students will master in each unit<br/>- Creating assessments before planning units<br/>- Allocating an instructionally appropriate amount of time for each unit",
          Effective:
                "Based on achievement goals, teacher plans units by<br/>- Identifying content standards that students will master in each unit<br/>- Creating assessments before each unit begins for backwards planning<br/>- Allocating an instructionally appropriate amount of time for each unit",
          "Highly Effective":
                "Based on achievement goals, teacher plans units by<br/>- Identifying content standards that students will master in each unit<br/>- Creating assessments before each unit begins for backwards planning<br/>- Allocating an instructionally appropriate amount of time for each unit"
        },
        createsObjective: {
          Ineffective:
                "Teacher rarely or never uses a system to track student assessment/progress data and/or has an ineffective grading system",
          "Improvement Necessary":
                "Teacher uses a data tracking system to record student assessment / progress data and maintain a grading system but fails in one or more of the following steps<br/>- Use data to analyze student progress toward mastery or to plan future lessons / units<br/>- Have a grading system that appropriately aligns with student learning goals",
          Effective:
                "Teacher uses an effective data tracking system for<br/>- Recording student assessment / progress data<br/>- Analyzing student progress towards mastery and planning future lessons/units accordingly<br/>- Maintaining a grading system aligned to student learning goals",
          "Highly Effective":
                "Teacher uses an effective data tracking system that<br/>- Records student assessment / progress data<br/>- Analyzes student progress toward mastery and plans future lessons/units accordingly<br/>- Maintains a grading system aligned to student learning goals"
        }
      }
    },
    {
      type: "matrix Dropdown",
      name: "frameworksRate",
      title: "Matrixdropdown",
      choices: ["Excelent", "Good", "Average", "Fair", "Poor"],
      columns: [
        {
          name: "using",
          title: "Do you use it?",
          choices: ["Yes", "No"],
          cellType: "radiogroup"
        },
        {
          name: "experience",
          title: "How long do you use it?",
          choices: [
            {
              value: 5,
              text: "3-5 years"
            },
            {
              value: 2,
              text: "1-2 years"
            },
            {
              value: 1,
              text: "less than a year"
            }
          ]
        },
        {
          name: "strength",
          title: "What is main strength?",
          choices: ["Easy", "Compact", "Fast", "Powerfull"],
          cellType: "checkbox"
        },
        {
          name: "knowledge",
          title: "Please describe your experience",
          cellType: "text"
        },
        {
          name: "rate",
          title: "Please rate the framework itself"
        }
      ],
      rows: [
        {
          value: "angularv1",
          text: "angularjs v1.x"
        },
        {
          value: "angularv2",
          text: "angularjs v2"
        },
        {
          value: "knockoutjs"
        },
        {
          value: "reactjs"
        }
      ]
    },
    {
      type: "matrixdynamic",
      name: "teachersRate",
      title: "Matrix Dynamic",
      addRowText: "Add Subject",
      horizontalScroll: true,
      columnMinWidth: "130px",
      columnColCount: 1,
      cellType: "radiogroup",
      choices: [
        {
          value: 1,
          text: "Yes"
        },
        {
          value: 0,
          text: "Sometimes"
        },
        {
          value: -1,
          text: "No"
        }
      ],
      columns: [
        {
          name: "subject",
          cellType: "dropdown",
          title: "Select a subject",
          isRequired: true,
          minWidth: "300px",
          choices: [
            "English: American Literature",
            "English: British and World Literature",
            "Math: Consumer Math",
            "Math: Practical Math",
            "Math: Developmental Algebra",
            "Math: Continuing Algebra",
            "Math: Pre-Algebra",
            "Math: Algebra",
            "Math: Geometry",
            "Math: Integrated Mathematics",
            "Science: Physical Science",
            "Science: Earth Science",
            "Science: Biology",
            "Science: Chemistry",
            "History: World History",
            "History: Modern World Studies",
            "History: U.S. History",
            "History: Modern U.S. History",
            "Social Sciences: U.S. Government and Politics",
            "Social Sciences: U.S. and Global Economics",
            "World Languages: Spanish",
            "World Languages: French",
            "World Languages: German",
            "World Languages: Latin",
            "World Languages: Chinese",
            "World Languages: Japanese"
          ]
        },
        {
          name: "explains",
          title: "Clearly explains the objectives"
        },
        {
          name: "interesting",
          title: "Makes class interesting"
        },
        {
          name: "effective",
          title: "Uses class time effectively"
        },
        {
          name: "knowledge",
          title: "Knows the subject matter"
        },
        {
          name: "recognition",
          title: "Recognizes and acknowledges effort"
        },
        {
          name: "inform",
          title: "Keeps me informed of my progress"
        },
        {
          name: "opinion",
          title: "Encourages and accepts different opinions"
        },
        {
          name: "respect",
          title: "Has the respect of the student"
        },
        {
          name: "cooperation",
          title: "Encourages cooperation and participation"
        },
        {
          name: "parents",
          title: "Communicates with my parents"
        },
        {
          name: "selfthinking",
          title: "Encourages me to think for myself"
        },
        {
          name: "frusturation",
          cellType: "comment",
          title: "Is there anything about this class that frustrates you?",
          minWidth: "250px"
        },
        {
          name: "likeTheBest",
          cellType: "comment",
          title: "What do you like best about this class and/or teacher?",
          minWidth: "250px"
        },
        {
          name: "improvements",
          cellType: "comment",
          title:
                "What do you wish this teacher would do differently that would improve this class?",
          minWidth: "250px"
        }
      ],
      rowCount: 2
    },
    {
      type: "matrixdynamic",
      name: "Current Level of Function",
      title: "Matrix Dynamic (vertical columns)",
      transposeData: true,
      minRowCount: 1,
      maxRowCount: 5,
      columns: [
        {
          name: "Date",
          title: "Date",
          cellType: "text",
          inputType: "date"
        },
        {
          name: "AmbDistance",
          title: "Amb Distance",
          cellType: "text"
        },
        {
          name: "Amb Assistance",
          cellType: "dropdown",
          choices: ["D", "MAX", "MOD", "MIN"]
        },
        {
          name: "Standing Tolerance",
          cellType: "text"
        },
        {
          name: "UE Strength",
          cellType: "text"
        },
        {
          name: "Cognitive Function",
          cellType: "comment"
        }
      ],
      choices: [1],
      cellType: "comment",
      confirmDelete: true,
      addRowText: "Add Date +",
      removeRowText: "Remove"
    },
    {
      type: "matrixdynamic",
      name: "orderList",
      rowCount: 1,
      minRowCount: 1,
      title: "Matrix Dynamic (totals)",
      addRowText: "Add new item",
      columns: [
        {
          name: "id",
          title: "Id",
          cellType: "expression",
          expression: "{rowIndex}"
        },
        {
          name: "phone_model",
          title: "Phone model",
          isRequired: true,
          totalType: "count",
          totalFormat: "Items count: {0}",
          choices: [
            {
              value: "iPhone7-32",
              text: "iPhone 7, 32GB",
              price: 449
            },
            {
              value: "iPhone7-128",
              text: "iPhone 7, 128GB",
              price: 549
            },
            {
              value: "iPhone7Plus-32",
              text: "iPhone 7 Plus, 32GB",
              price: 569
            },
            {
              value: "iPhone7Plus-128",
              text: "iPhone 7 Plus, 128GB",
              price: 669
            },
            {
              value: "iPhone8-64",
              text: "iPhone 8, 64GB",
              price: 599
            },
            {
              value: "iPhone8-256",
              text: "iPhone 8, 256GB",
              price: 749
            },
            {
              value: "iPhone8Plus-64",
              text: "iPhone 8 Plus, 64GB",
              price: 699
            },
            {
              value: "iPhone8Plus-256",
              text: "iPhone 8 Plus, 256GB",
              price: 849
            },
            {
              value: "iPhoneXR-64",
              text: "iPhone XR, 64GB",
              price: 749
            },
            {
              value: "iPhoneXR-128",
              text: "iPhone XR, 128GB",
              price: 799
            },
            {
              value: "iPhoneXR-256",
              text: "iPhone XR, 256GB",
              price: 899
            },
            {
              value: "iPhoneXS-64",
              text: "iPhone XS, 64GB",
              price: 999
            },
            {
              value: "iPhoneXS-256",
              text: "iPhone XS, 256GB",
              price: 1149
            },
            {
              value: "iPhoneXS-512",
              text: "iPhone XS, 512GB",
              price: 1349
            },
            {
              value: "iPhoneXSMAX-64",
              text: "iPhone XS Max, 64GB",
              price: 1099
            },
            {
              value: "iPhoneXSMAX-256",
              text: "iPhone XS Max, 256GB",
              price: 1249
            },
            {
              value: "iPhoneXSMAX-512",
              text: "iPhone XS, 512GB",
              price: 1449
            }
          ]
        },
        {
          name: "price",
          title: "Price",
          cellType: "expression",
          expression: "getItemPrice('phone_model')",
          displayStyle: "currency"
        },
        {
          name: "quantity",
          title: "Quantity",
          isRequired: true,
          cellType: "text",
          inputType: "number",
          totalType: "sum",
          totalFormat: "Total phones: {0}",
          validators: [
            {
              type: "numeric",
              minValue: 1,
              maxValue: 100
            }
          ]
        },
        {
          name: "total",
          title: "Total",
          cellType: "expression",
          expression: "{row.quantity} * {row.price}",
          displayStyle: "currency",
          totalType: "sum",
          totalDisplayStyle: "currency",
          totalFormat: "Total: {0}"
        }
      ]
    },
    {
      name: "vatProcents",
      type: "text",
      title: "VAT (in %)",
      defaultValue: 20,
      inputType: "number",
      validators: [
        {
          type: "numeric",
          minValue: 0,
          maxValue: 40
        }
      ]
    },
    {
      name: "vatTotal",
      type: "expression",
      title: "VAT",
      expression: "{orderList-total.total} * {vatProcents} / 100",
      displayStyle: "currency",
      startWithNewLine: false
    },
    {
      name: "total",
      type: "expression",
      title: "Total",
      expression: "{orderList-total.total} + {vatTotal}",
      displayStyle: "currency",
      startWithNewLine: false
    },
    {
      type: "multipletext",
      name: "pricelimit",
      title: "Multipletext",
      colCount: 2,
      items: [
        {
          name: "mostamount",
          title: "Most amount you would every pay for a product like ours"
        },
        {
          name: "leastamount",
          title: "The least amount you would feel comfortable paying"
        }
      ]
    },
    {
      type: "rating",
      name: "satisfaction",
      title: "Rating",
      minRateDescription: "Not Satisfied",
      maxRateDescription: "Completely satisfied"
    },
    {
      type: "ranking",
      name: "smartphone-features",
      title: "Please rank the following smartphone features in order of importance:",
      choices: [
        "Battery life",
        "Screen size",
        "Storage space",
        "Camera quality",
        "Durability",
        "Processor power",
        "Price",
      ],
    },
    {
      type: "comment",
      name: "suggestions",
      title: "Comment"
    },
    {
      type: "file",
      title: "File",
      name: "image",
      storeDataAsText: false,
      showPreview: true,
      imageWidth: 150,
      maxSize: 102400
    },
    {
      type: "panel",
      title: "Panel",
      innerIndent: 1,
      state: "expanded",
      elements: [
        {
          type: "checkbox",
          choices: [
            {
              value: "1",
              text: "Customer relationship"
            },
            {
              value: "2",
              text: "Service quality"
            },
            {
              value: "3",
              text: "Support response time"
            }
          ],
          name: "What should be improved?"
        },
        {
          type: "comment",
          name: "suggestions",
          title: "What would make you more satisfied with the Product?"
        }
      ]
    },
    {
      type: "paneldynamic",
      name: "relatives",
      title: "Panel Dynamic",
      displayMode: "carousel",
      templateTitle: "Information about: {panel.relativeType}",
      templateElements: [
        {
          name: "relativeType",
          type: "dropdown",
          title: "Relative",
          choices: [
            "father",
            "mother",
            "brother",
            "sister",
            "son",
            "daughter"
          ],
          isRequired: true
        },
        {
          name: "isalive",
          type: "radiogroup",
          title: "Alive?",
          startWithNewLine: false,
          isRequired: true,
          colCount: 0,
          choices: ["Yes", "No"]
        },
        {
          name: "liveage",
          type: "dropdown",
          title: "Age",
          isRequired: true,
          startWithNewLine: false,
          visibleIf: "{panel.isalive} = 'Yes'",
          choicesMin: 1,
          choicesMax: 115
        },
        {
          name: "deceasedage",
          type: "dropdown",
          title: "Deceased Age",
          isRequired: true,
          startWithNewLine: false,
          visibleIf: "{panel.isalive} = 'No'",
          choices: [
            {
              value: -1,
              text: "Unknown"
            }
          ],
          choicesMin: 1,
          choicesMax: 115
        },
        {
          name: "causeofdeathknown",
          type: "radiogroup",
          title: "Cause of Death Known?",
          isRequired: true,
          colCount: 0,
          startWithNewLine: false,
          visibleIf: "{panel.isalive} = 'No'",
          choices: ["Yes", "No"]
        },
        {
          name: "causeofdeath",
          type: "text",
          title: "Cause of Death",
          isRequired: true,
          startWithNewLine: false,
          visibleIf:
                "{panel.isalive} = 'No' and {panel.causeofdeathknown} = 'Yes'"
        },
        {
          type: "panel",
          name: "moreInfo",
          state: "expanded",
          title: "Detail Information about: {panel.relativeType}",
          elements: [
            {
              type: "matrixdynamic",
              name: "relativeillness",
              title: "Describe the illness or condition.",
              rowCount: 0,
              columns: [
                {
                  name: "illness",
                  cellType: "dropdown",
                  title: "Illness/Condition",
                  choices: [
                    "Cancer",
                    "Heart Disease",
                    "Diabetes",
                    "Stroke/TIA",
                    "High Blood Pressure",
                    "High Cholesterol or Triglycerides",
                    "Liver Disease",
                    "Alcohol or Drug Abuse",
                    "Anxiety, Depression or Psychiatric Illness",
                    "Tuberculosis",
                    "Anesthesia Complications",
                    "Genetic Disorder",
                    "Other – describe"
                  ],
                  isRequired: true
                },
                {
                  name: "description",
                  cellType: "text",
                  title: "Describe",
                  isRequired: true
                }
              ]
            }
          ]
        }
      ],
      panelCount: 2,
      addPanelText: "Add a blood relative",
      removePanelText: "Remove the relative"
    },
    {
      type: "panel",
      title: "Expression Example Panel",
      innerIndent: 1,
      elements: [
        {
          type: "paneldynamic",
          name: "items",
          title: "Items",
          keyName: "name",
          showQuestionNumbers: "none",
          templateTitle: "item #{panelIndex}",
          templateElements: [
            {
              type: "text",
              name: "name",
              title: "Name:",
              isRequired: true
            },
            {
              type: "text",
              name: "cost",
              inputType: "number",
              title: "Item Cost:",
              isRequired: true,
              startWithNewLine: false
            },
            {
              type: "text",
              name: "vendor",
              title: "Vendor:",
              isRequired: true
            },
            {
              type: "text",
              name: "quantity",
              inputType: "number",
              title: "Quantity:",
              isRequired: true,
              startWithNewLine: false
            },
            {
              type: "text",
              name: "link",
              title: "Link:",
              isRequired: true
            },
            {
              type: "expression",
              name: "total",
              title: "Total Item Cost:",
              expression: "{panel.cost} * {panel.quantity}",
              displayStyle: "currency",
              currency: "EUR",
              startWithNewLine: false
            }
          ],
          minPanelCount: 1,
          panelAddText: "Add another  item",
          panelRemoveText: "Remove item"
        },
        {
          type: "panel",
          title: "Totals",
          elements: [
            {
              type: "expression",
              name: "totalQuantity",
              title: "Total  Quantity:",
              expression: "sumInArray({items}, 'quantity'"
            },
            {
              type: "expression",
              name: "totalCost",
              title: "Total Cost:",
              expression: "sumInArray({items}, 'total'",
              displayStyle: "currency",
              currency: "EUR",
              startWithNewLine: false
            }
          ]
        }
      ]
    }
  ]
};


json = {
  "logo": "data:image/svg+xml,%3Csvg height='100%25' width='100%25' viewBox='0 0 162 66' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M161.579 0H0.420532V50.1402H143.407L161.579 66V0Z' fill='%2319B394'%3E%3C/path%3E%3Cpath d='M38.9962 26.02C39.2441 26.5983 39.4093 27.3417 39.4093 28.1677C39.4093 29.159 39.2441 30.0676 38.831 30.7284C38.418 31.4719 37.9224 32.0501 37.2616 32.4631C36.6007 32.8761 35.8573 33.2065 35.0313 33.4543C34.2053 33.6195 33.2966 33.7847 32.388 33.7847C30.9837 33.7847 29.5795 33.5369 28.1752 33.1239C26.771 32.7109 25.5319 32.1327 24.4581 31.3066L26.1101 28.1677C26.2753 28.3329 26.5231 28.4981 26.9362 28.8285C27.3492 29.0764 27.8448 29.3242 28.423 29.572C29.0012 29.8198 29.5795 30.0676 30.3229 30.2328C30.9837 30.398 31.7272 30.4806 32.4706 30.4806C34.4531 30.4806 35.4443 29.8198 35.4443 28.5807C35.4443 28.1677 35.3617 27.8373 35.1139 27.5895C34.8661 27.3417 34.5357 27.0939 34.1226 26.8461C33.7096 26.5983 33.214 26.4331 32.5532 26.2678C31.975 26.1026 31.3141 25.9374 30.5707 25.6896C29.6621 25.4418 28.9186 25.194 28.2578 24.8636C27.597 24.5332 27.0188 24.2028 26.6058 23.8724C26.1927 23.4593 25.8623 23.0463 25.6145 22.4681C25.3667 21.9725 25.2841 21.3117 25.2841 20.5682C25.2841 19.577 25.4493 18.7509 25.7797 18.0075C26.1101 17.2641 26.6058 16.6859 27.2666 16.1902C27.9274 15.6946 28.5882 15.2816 29.4143 15.0338C30.2403 14.786 31.1489 14.6208 32.0576 14.6208C33.3792 14.6208 34.6183 14.8686 35.6921 15.2816C36.766 15.6946 37.7572 16.1902 38.5832 16.7685L36.9312 19.7422C36.8486 19.6596 36.6007 19.4118 36.2703 19.2466C35.9399 18.9988 35.5269 18.8336 35.1139 18.5857C34.6183 18.4205 34.1226 18.1727 33.627 18.0901C33.0488 17.9249 32.5532 17.8423 31.975 17.8423C30.9837 17.8423 30.2403 18.0075 29.7447 18.4205C29.2491 18.7509 29.0012 19.3292 29.0012 19.99C29.0012 20.403 29.0839 20.7334 29.2491 20.9812C29.4143 21.229 29.6621 21.4769 30.0751 21.6421C30.4881 21.8073 30.9011 21.9725 31.3967 22.1377C31.975 22.3029 32.5532 22.4681 33.2966 22.6333C34.2053 22.8811 35.0313 23.1289 35.7747 23.4593C36.5181 23.7071 37.179 24.1202 37.6746 24.5332C38.3354 24.9462 38.7484 25.4418 38.9962 26.02ZM54.6909 29.4894V19.7422H51.1389V28.3329C50.7259 29.159 50.2303 29.8198 49.5695 30.2328C48.9086 30.6458 48.2478 30.8936 47.587 30.8936C46.0175 30.8936 45.2741 29.8198 45.2741 27.6721V19.7422H41.7221V28.4155C41.7221 30.2328 42.0526 31.5545 42.796 32.4631C43.5394 33.3717 44.6133 33.8673 46.0175 33.8673C47.174 33.8673 48.2478 33.6195 49.239 33.1239C50.2303 32.6283 50.9737 31.9675 51.6345 30.9762L51.7171 32.0501C51.7997 32.5457 52.0476 32.9587 52.378 33.2891C52.791 33.6195 53.2866 33.7021 53.9474 33.7021C54.1126 33.7021 54.3604 33.7021 54.6083 33.7021C54.8561 33.7021 55.1039 33.6195 55.5169 33.5369V30.5632C55.1865 30.5632 55.0213 30.4806 54.8561 30.3154C54.6909 30.1502 54.6909 29.9024 54.6909 29.4894ZM65.6771 19.4944C65.3467 19.4944 64.9337 19.577 64.5206 19.7422C64.1076 19.9074 63.6946 20.0726 63.3642 20.403C62.9512 20.6508 62.6208 20.9812 62.2904 21.3943C61.9599 21.8073 61.6295 22.2203 61.3817 22.7159V19.7422H58.1602V33.6195H61.7121V25.194C62.0425 24.368 62.7034 23.7897 63.5294 23.3767C64.3554 22.9637 65.3467 22.7985 66.4205 22.7159V19.4944C66.3379 19.4944 66.2553 19.4944 66.1727 19.4944C66.0901 19.4944 65.9249 19.4944 65.6771 19.4944ZM74.1852 30.6458L70.6333 19.6596H66.9987L72.1201 33.5369H75.9199L81.0413 19.6596H77.7372L74.1852 30.6458ZM95.5795 23.8724C95.9099 24.6984 96.0751 25.607 96.0751 26.5983C96.0751 26.8461 96.0751 27.0113 96.0751 27.2591C96.0751 27.5069 96.0751 27.6721 95.9925 27.7547H85.2541C85.3367 28.3329 85.4193 28.7459 85.6671 29.2416C85.9149 29.6546 86.1627 29.985 86.4931 30.3154C86.8235 30.6458 87.2365 30.811 87.6496 30.9762C88.0626 31.1414 88.4756 31.224 88.9712 31.224C89.7146 31.224 90.3755 31.0588 90.9537 30.7284C91.6145 30.398 92.0275 29.9024 92.2753 29.4068L95.3317 30.2328C94.836 31.3066 94.01 32.1327 92.8536 32.8761C91.6971 33.5369 90.3755 33.8673 88.8886 33.8673C87.8148 33.8673 86.7409 33.7021 85.9149 33.2891C85.0889 32.8761 84.2628 32.3805 83.602 31.7197C82.9412 31.0588 82.4456 30.3154 82.1151 29.4068C81.7847 28.5807 81.6195 27.6721 81.6195 26.6809C81.6195 25.6896 81.7847 24.781 82.1151 23.8724C82.4456 22.9637 82.9412 22.2203 83.602 21.5595C84.2628 20.8986 85.0063 20.403 85.9149 19.99C86.8235 19.577 87.8148 19.4118 88.9712 19.4118C90.1277 19.4118 91.1189 19.577 92.0275 19.99C92.9362 20.403 93.6796 20.8986 94.3404 21.5595C94.836 22.3029 95.2491 23.0463 95.5795 23.8724ZM92.4405 25.4418C92.3579 24.368 91.9449 23.5419 91.2841 22.9637C90.6233 22.3855 89.7972 22.0551 88.806 22.0551C88.3104 22.0551 87.8974 22.1377 87.4844 22.3029C87.0713 22.4681 86.7409 22.7159 86.4105 22.9637C86.0801 23.2115 85.8323 23.6245 85.6671 24.0376C85.5019 24.4506 85.3367 24.9462 85.3367 25.4418H92.4405ZM107.144 19.7422L103.84 30.5632L100.123 19.7422H96.4881L101.94 33.6195C101.775 34.1978 101.61 34.6934 101.444 35.1064C101.279 35.5194 101.114 35.7672 100.949 36.015C100.783 36.2628 100.618 36.428 100.453 36.5106C100.288 36.5933 100.04 36.6759 99.7922 36.6759C99.627 36.6759 99.3792 36.6759 99.0488 36.5933C98.801 36.5106 98.4706 36.5106 98.1402 36.428V39.4844C98.4706 39.567 98.801 39.6496 99.0488 39.7322C99.3792 39.8148 99.627 39.8148 99.8748 39.8148C101.114 39.8148 102.105 39.4844 102.849 38.9061C103.675 38.3279 104.253 37.5019 104.583 36.5106L110.365 19.9074H107.144V19.7422Z' fill='white'%3E%3C/path%3E%3Cpath d='M109.787 29.7372C110.035 29.9024 110.448 30.0676 111.026 30.3154C111.605 30.5632 112.265 30.6458 113.009 30.6458C113.752 30.6458 114.33 30.4806 114.743 30.2328C115.156 29.985 115.487 29.572 115.735 29.0764C115.983 28.5807 116.148 27.9199 116.148 27.0939C116.23 26.3504 116.23 25.3592 116.23 24.368V14.786H119.865V24.368C119.865 25.7722 119.782 27.0939 119.617 28.2503C119.452 29.4068 119.121 30.398 118.626 31.224C118.13 32.0501 117.469 32.7109 116.561 33.1239C115.652 33.5369 114.413 33.7847 112.844 33.7847C111.274 33.7847 109.87 33.3717 108.796 32.6283L109.787 29.7372ZM134.899 19.7422C134.816 19.6596 134.568 19.4118 134.238 19.2466C133.907 19.0814 133.494 18.8336 133.081 18.5857C132.586 18.4205 132.09 18.1727 131.595 18.0901C131.016 17.9249 130.521 17.8423 129.942 17.8423C128.951 17.8423 128.208 18.0075 127.712 18.4205C127.217 18.7509 126.969 19.3292 126.969 19.99C126.969 20.403 127.051 20.7334 127.217 20.9812C127.382 21.229 127.63 21.4769 128.043 21.6421C128.373 21.8073 128.869 21.9725 129.364 22.1377C129.942 22.3029 130.521 22.4681 131.264 22.6333C132.173 22.8811 132.999 23.1289 133.742 23.4593C134.486 23.7071 135.146 24.1202 135.642 24.5332C136.138 24.9462 136.551 25.4418 136.881 26.02C137.129 26.5983 137.294 27.3417 137.294 28.1677C137.294 29.159 137.129 30.0676 136.716 30.7284C136.303 31.4719 135.807 32.0501 135.146 32.4631C134.486 32.8761 133.742 33.2065 132.916 33.4543C132.09 33.6195 131.182 33.7847 130.273 33.7847C128.869 33.7847 127.464 33.5369 126.06 33.1239C124.656 32.7109 123.417 32.1327 122.343 31.3066L123.995 28.1677C124.16 28.3329 124.408 28.4981 124.821 28.8285C125.234 29.0764 125.73 29.3242 126.308 29.572C126.886 29.8198 127.464 30.0676 128.208 30.2328C128.869 30.398 129.612 30.4806 130.355 30.4806C132.338 30.4806 133.329 29.8198 133.329 28.5807C133.329 28.1677 133.247 27.8373 132.999 27.5895C132.751 27.3417 132.421 27.0939 132.008 26.8461C131.595 26.5983 131.099 26.4331 130.438 26.2678C129.86 26.1026 129.199 25.9374 128.456 25.6896C127.547 25.4418 126.804 25.194 126.143 24.8636C125.482 24.5332 124.904 24.2028 124.491 23.8724C124.078 23.4593 123.747 23.0463 123.499 22.4681C123.252 21.9725 123.169 21.3117 123.169 20.5682C123.169 19.577 123.334 18.7509 123.665 18.0075C123.995 17.2641 124.491 16.6859 125.151 16.1903C125.812 15.6946 126.473 15.2816 127.299 15.0338C128.125 14.786 129.034 14.6208 129.942 14.6208C131.264 14.6208 132.503 14.8686 133.577 15.2816C134.651 15.6946 135.642 16.1902 136.468 16.7685L134.899 19.7422Z' fill='white'%3E%3C/path%3E%3C/svg%3E",
  "logoWidth": "600px",
  "logoHeight": "auto",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "text",
          "name": "question1"
        }
      ]
    }
  ],
  "showQuestionNumbers": "on"
}

const options = {
  showLogicTab: true,
  showTranslationTab: true,
  showThemeTab: true,
  showEmbeddedSurveyTab: true,
  showThemeTab: true,
  showCreatorThemeSettings: true,
  autoSaveEnabled: true
};

class CustomToolboxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }
  toggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            left: "100%",
            top: 0,
            padding: "16px",
            cursor: "pointer"
          }}
          title={this.state.collapsed ? "Show toolbox" : "Hide toolbox"}
          onClick={() => this.toggle()}
        >
          {this.state.collapsed ? ">>" : "<<"}
        </div>
        {this.state.collapsed ? null : (
          <SurveyCreator.SurveyCreatorToolbox
            creator={this.props.creator}
          ></SurveyCreator.SurveyCreatorToolbox>
        )}
      </div>
    );
  }
}

// class CustomPropertyGridWrapper extends React.Component {
//   constructor(props) {
//       super(props);
//       this.btnClick = this
//           .btnClick
//           .bind(this);
//   }
//   btnClick() {
//       alert("The Button is clicked");
//   }
//   render() {
//       const model = this.props.model;
//       if (!model) 
//           return null;
//       const btnStyle = {
//           width: "100%",
//           height: "32px"
//       };
//       return <div>
//           <button onClick={this.btnClick} style={btnStyle}>Click me...</button>
//           <SurveyCreator.PropertyGridComponent model={model}></SurveyCreator.PropertyGridComponent>
//       </div>;
//   }
// }

// SurveyReact
//   .ReactElementFactory
//   .Instance
//   .registerElement("svc-property-grid", (props) => {
//       return React.createElement(CustomPropertyGridWrapper, props);
//   });
/*
class CreatorSurveyPageComponent2 extends SurveyCreator.CreatorSurveyPageComponent {
  renderFooter() {
    return (<div>Some Text {super.renderFooter()}</div>);
  }
}

SurveyReact.ReactElementFactory.Instance.registerElement("svc-page", (props) => {
  return React.createElement(CreatorSurveyPageComponent2, props);
});
*/
SurveyCreatorCore.registerSurveyTheme(SurveyTheme);
SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme);
//SurveyCreatorCore.registerUIPreset(SurveyCreatorUIPreset);
const creator = new SurveyCreator.SurveyCreator(options);
creator.applyCreatorTheme(SurveyCreatorTheme.Test);
  creator.applySurfaceTheme(SurveyTheme.Test);
creator.onModified.add((sender, options) => {
  console.log(JSON.stringify(options, null, 3));
});
creator.onMachineTranslate.add((_, options) => {
  const translatedStrings = [];
  options.strings.forEach(str => { translatedStrings.push(options.toLocale + ": " + str); });
  options.callback(translatedStrings);
});
// creator.JSON = json;
// creator.locale = "de";
window.creator = creator;
creator.showOneCategoryInPropertyGrid = true;
creator.propertyGridNavigationMode = "buttons";
// creator.getPlugin("designer").showOneCategoryInPropertyGrid = true;
// creator.getPlugin("theme").showOneCategoryInPropertyGrid = true;

// Step 3: Add a custom adorner that saves a question configuration as a toolbox item
creator.onElementGetActions.add((_, options) => {
  if (options.element["isPage"]) return;
  const objToAdd = options.element;
  options.actions.unshift({
    id: "save-to-toolbox",
    title: "Save to Toolbox",
    iconName: "icon-toolbox",
    iconSize: 16,
    action: () => {
      //saveCustomItem(objToAdd);
    }
  });
});
creator.JSON = json;

function getCompositeInput(question) {
  return question.contentPanel.getQuestionByName("q1");
}

Survey.ComponentCollection.Instance.add({
  name: "myComposite",
  elementsJSON: [
    {
      name: "b1",
      type: "boolean",
      title: "N/A",
    },
    {
      name: "q1",
      type: "text",
      title: "Answer",
    },
  ],
  onInit() {
    Survey.Serializer.addProperties("myComposite", [
      {
        name: "maskType",
        category: "mask",
        default: "none",
        visibleIndex: 0,
        choices: ["none", "pattern", "datetime", "numeric", "currency"],
        onSetValue: function (obj, value) {
          obj.setPropertyValue("maskType", value);
          const q = getCompositeInput(obj);
          if (q) q.maskType = value;
        },
      },
      {
        name: "maskSettings:masksettings",
        category: "mask",
        visibleIndex: 1,
        dependsOn: ["maskType"],
        onGetValue: function (obj) {
          const q = getCompositeInput(obj);
          return q ? q.maskSettings : {};
        },
        onSetValue: function (obj, value) {
          const q = getCompositeInput(obj);
          if (q) {
            q.maskSettings.setData(value);
          }
        },
      },
    ]);
  },
});

creator.toolbox.searchEnabled = true;
creator.expandCollapseButtonVisibility = "onhover";
creator.onElementAllowOperations.add((sender, options) => {
  if (options.element.isPage) {
    options.allowDelete = sender.survey.pageCount > 1;
  }
});
//creator.toolboxLocation = "sidebar";
creator.animationEnabled = true;
creator.saveSurveyFunc = (no, callback) => {
  console.log(no);
  setTimeout(function () {
    callback(no, true);
  }, 1000);
};

if(window.SurveyCreatorUIPresetEditorCore) {
  //window.editor = new SurveyCreatorUIPresetEditorCore.UIPresetEditor(creator);
  //window.editor.addPreset(new SurveyCreatorCore.UIPreset({ presetName: "Custom Preset", json: {} }));
}

ReactDOM.render(
  <React.StrictMode>
    <SurveyCreator.SurveyCreatorComponent creator={creator} />
  </React.StrictMode>,
  document.getElementById("root")
);
// creator.toolbarItems.push(
//   new Survey.Action({
//     id: "toolboxCustomization",
//     visible: true,
//     title: "Toolbox Customization",
//     enabled: true,
//     action: function () {
//       alert("Hi!");
//     }
//   })
// );
// creator.toolbox.isCompact = true;