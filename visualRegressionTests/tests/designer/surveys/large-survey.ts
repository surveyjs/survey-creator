export const largeSurvey = {
  "title": "Patient Past Medical, Social & Family History",
  "pages": [
    {
      "name": "introduction",
      "elements": [
        {
          "type": "panel",
          "name": "patienName",
          "elements": [
            {
              "type": "text",
              "name": "patientLastName",
              "title": "(Last)",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "patienFirstName",
              "startWithNewLine": false,
              "title": "(First)",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "patientMiddleName",
              "title": "(M.I)"
            }
          ],
          "questionTitleLocation": "bottom",
          "title": "Patient Name"
        },
        {
          "type": "panel",
          "name": "panel2",
          "elements": [
            {
              "type": "text",
              "name": "socialsecurity",
              "title": "Social Security #:",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "birthDate",
              "startWithNewLine": false,
              "title": "Date of birth:",
              "isRequired": true,
              "inputType": "date"
            },
            {
              "type": "radiogroup",
              "name": "sex",
              "title": "Sex:",
              "isRequired": true,
              "choices": [
                {
                  "value": "male",
                  "text": "Male"
                },
                {
                  "value": "female",
                  "text": "Female"
                }
              ],
              "colCount": 0
            }
          ],
          "questionTitleLocation": "left",
          "title": "Social Security & Birth Date"
        },
        {
          "type": "panel",
          "name": "panel1",
          "elements": [
            {
              "type": "radiogroup",
              "name": "completedBy",
              "title": "Who completed this form:",
              "isRequired": true,
              "choices": [
                {
                  "value": "patient",
                  "text": "Patient"
                },
                {
                  "value": "spouse",
                  "text": "Spouse"
                }
              ],
              "showOtherItem": true,
              "otherText": "Other (specify)",
              "colCount": 0
            },
            {
              "type": "text",
              "name": "completedByOtherName",
              "visibleIf": "{completedBy} != \"patient\"",
              "startWithNewLine": false,
              "title": "Name (if other than patient):",
              "isRequired": true
            }
          ],
          "title": "Completed By"
        }
      ],
      "title": "Introduction"
    },
    {
      "name": "medicalHistory",
      "elements": [
        {
          "type": "radiogroup",
          "name": "everhospitalized",
          "title": "Have you ever been hospitalized?",
          "isRequired": true,
          "choices": [
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "yes",
              "text": "Yes"
            }
          ],
          "colCount": 0
        },
        {
          "type": "radiogroup",
          "name": "injuriesbrokenbones",
          "title": "Have you had any serious injuries and/or broken bones?",
          "isRequired": true,
          "choices": [
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "yes",
              "text": "Yes"
            }
          ],
          "colCount": 0
        },
        {
          "type": "comment",
          "name": "injuriesbrokenbones_describe",
          "visible": false,
          "visibleIf": "{injuriesbrokenbones} = \"yes\"",
          "startWithNewLine": false,
          "title": "Describe",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "bloodtransfusion",
          "title": "Have you ever received a blood transfusion?",
          "isRequired": true,
          "choices": [
            {
              "value": "unknown",
              "text": "Unknown"
            },
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "yes",
              "text": "Yes"
            }
          ],
          "colCount": 0
        },
        {
          "type": "text",
          "name": "bloodtransfusion_years",
          "visible": false,
          "visibleIf": "{bloodtransfusion}=\"yes\"",
          "startWithNewLine": false,
          "title": "Approximate year(s)"
        },
        {
          "type": "radiogroup",
          "name": "ousideUSACanada",
          "title": "Have you ever traveled or lived outside the United States or Canada?",
          "isRequired": true,
          "choices": [
            {
              "value": "no",
              "text": "No"
            },
            {
              "value": "yes",
              "text": "Yes"
            }
          ],
          "colCount": 0
        },
        {
          "type": "comment",
          "name": "ousideUSACanada_describe",
          "visible": false,
          "visibleIf": "{ousideUSACanada} = \"yes\"",
          "startWithNewLine": false,
          "title": "Describe",
          "isRequired": true
        },
        {
          "type": "matrixdropdown",
          "name": "immunizations",
          "title": "Have you received the following IMMUNIZATIONS?  If yes, indicate the approximate year it was last given:",
          "titleLocation": "top",
          "columns": [
            {
              "name": "answer",
              "title": "Please select",
              "cellType": "radiogroup",
              "isRequired": true,
              "choices": [
                {
                  "value": "unknown",
                  "text": "Unknown"
                },
                {
                  "value": "no",
                  "text": "No"
                },
                {
                  "value": "yes",
                  "text": "Yes"
                }
              ]
            },
            {
              "name": "year",
              "title": "Year",
              "cellType": "text",
              "isRequired": true,
              "visibleIf": "{row.answer} = \"yes\""
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rows": [
            "Pneumococcal (for pneumonia)",
            "Hepatitis A",
            "Hepatitis B",
            "Tetanus/Diphtheria within last 10 years",
            "Influenza (flu)",
            "Measles",
            "Mumps",
            "Rubella",
            "Polio"
          ]
        },
        {
          "type": "matrixdynamic",
          "name": "problems1",
          "title": "Have you ever had any of the following?",
          "titleLocation": "top",
          "columns": [
            {
              "name": "problem",
              "title": "Problem",
              "cellType": "dropdown",
              "choices": [
                "Abnormal chest x-ray",
                "Anesthesia complications",
                "Anxiety, depression or mental illness",
                "Blood problems (abnormal bleeding, anemia, high or low white count)",
                "Diabetes",
                "Growth removed from the colon or rectum (polyp or tumor)",
                "High blood pressure",
                "High cholesterol or triglycerides",
                "Sexually transmitted disease",
                "Stroke or TIA",
                "Treatment for alcohol and/or drug abuse",
                "Tuberculosis or positive tuberculin skin test",
                "Cosmetic or plastic surgery"
              ]
            },
            {
              "name": "answer",
              "title": "Please answer",
              "cellType": "radiogroup",
              "isRequired": true,
              "choices": [
                {
                  "value": "no",
                  "text": "No"
                },
                {
                  "value": "yes",
                  "text": "Yes"
                }
              ]
            },
            {
              "name": "description",
              "title": "Describe the problem",
              "cellType": "comment",
              "isRequired": true,
              "visibleIf": "{row.answer} = \"yes\""
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rowCount": 1
        },
        {
          "type": "matrixdynamic",
          "name": "problems2",
          "title": "Indicate whether you have ever had a medical problem and/or surgery related to each of the following",
          "titleLocation": "top",
          "columns": [
            {
              "name": "problem",
              "title": "Problem",
              "cellType": "dropdown",
              "isRequired": true,
              "maxWidth": "300px",
              "choices": [
                "Eyes (cataracts, glaucoma)",
                "Ears, nose, sinuses, or tonsils",
                "Thyroid or parathyroid glands",
                "Heart valves or abnormal heart rhythm",
                "Coronary (heart) arteries (angina)",
                "Arteries (aorta, arteries to head, arms, legs) ",
                "Veins or blood clots in the veins",
                "Lungs",
                "Esophagus or stomach (ulcer)",
                "Bowel (small & large intestine)",
                "Appendix",
                "Liver or gallbladder (including hepatitis)",
                "Hernia",
                "Kidneys or bladder",
                "Bones, joints or muscles",
                "Back, neck or spine",
                "Brain",
                "Skin",
                "Breasts",
                "Females: uterus, tubes, ovaries",
                "Males: prostate, penis, testes, vasectomy",
                "Other: Describe"
              ],
              "choicesOrder": "asc"
            },
            {
              "name": "type",
              "title": "Type",
              "cellType": "checkbox",
              "isRequired": true,
              "choices": [
                {
                  "value": "medical",
                  "text": "Medical Problem"
                },
                {
                  "value": "surgery",
                  "text": "Surgery"
                }
              ]
            },
            {
              "name": "year",
              "title": "Year(s) of Surgery",
              "cellType": "text",
              "isRequired": true,
              "visibleIf": "{row.type} contains \"surgery\""
            },
            {
              "name": "describe",
              "title": "Describe",
              "cellType": "comment",
              "isRequired": true
            }
          ],
          "choices": [
            1,
            2,
            3,
            4,
            5
          ],
          "rowCount": 1,
          "addRowText": "Add Problem"
        }
      ],
      "questionTitleLocation": "left",
      "title": "Past Medical History"
    },
    {
      "name": "socialHistory",
      "elements": [
        {
          "type": "panel",
          "name": "education",
          "elements": [
            {
              "type": "dropdown",
              "name": "schoolYearsCompleted",
              "title": "How many yeas of school have you completed?",
              "isRequired": true,
              "choicesMax": 12
            }
          ],
          "title": "Education"
        },
        {
          "type": "panel",
          "name": "occupations",
          "elements": [
            {
              "type": "radiogroup",
              "name": "employmentStatus",
              "title": "Your current employment status:",
              "isRequired": true,
              "choices": [
                "Retired",
                "Unemployed",
                "Homemaker",
                "Employed"
              ],
              "colCount": 0
            },
            {
              "type": "text",
              "name": "currentOcupation",
              "visible": false,
              "visibleIf": "{employmentStatus} = 'Employed'",
              "title": "Current Ocupation(s):",
              "isRequired": true
            },
            {
              "type": "comment",
              "name": "previousOccupations",
              "title": "Previous Occupations/Jobs:"
            }
          ],
          "title": "Occupations"
        },
        {
          "type": "panel",
          "name": "disability",
          "elements": [
            {
              "type": "radiogroup",
              "name": "disabled",
              "title": "Are you disabled?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "comment",
              "name": "disableInfo",
              "visible": false,
              "visibleIf": "{disabled} = 'Yes'",
              "title": "Info:"
            }
          ],
          "title": "Disability"
        },
        {
          "type": "panel",
          "name": "abuse",
          "elements": [
            {
              "type": "radiogroup",
              "name": "abused",
              "title": "Have you even been physically, sexually, or emotionally abused?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "comment",
              "name": "abusedInfo",
              "visible": false,
              "visibleIf": "{abused} = 'Yes'",
              "title": "Info:"
            },
            {
              "type": "matrixdropdown",
              "name": "subsctancesUsing",
              "title": "Have you used any of the following substances?",
              "titleLocation": "top",
              "columns": [
                {
                  "name": "current",
                  "title": "Currently Use?",
                  "cellType": "radiogroup",
                  "isRequired": true,
                  "width": "200px",
                  "choices": [
                    "No",
                    "Yes"
                  ]
                },
                {
                  "name": "previous",
                  "title": "Previously Used?",
                  "cellType": "radiogroup",
                  "isRequired": true,
                  "width": "200px",
                  "choices": [
                    "No",
                    "Yes"
                  ]
                },
                {
                  "name": "amount",
                  "title": "Type/Amount/Frequancy",
                  "cellType": "text",
                  "isRequired": true,
                  "width": "200px",
                  "visibleIf": "{row.current} = 'Yes' or {row.previous} = 'Yes'"
                },
                {
                  "name": "long",
                  "title": "How Long? (Years)",
                  "cellType": "text",
                  "isRequired": true,
                  "width": "200px",
                  "visibleIf": "{row.current} = 'Yes' or {row.previous} = 'Yes'"
                },
                {
                  "name": "stopped",
                  "title": "When stopped? (Year)",
                  "cellType": "text",
                  "isRequired": true,
                  "width": "200px",
                  "visibleIf": "{row.previous} = 'Yes'"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rows": [
                "Caffeine: coffee, tea, soda",
                "Tobacco",
                "Alcohol - bear, wine, liquor",
                "Recreational/Street drugs"
              ],
              "rowTitleWidth": "200px"
            }
          ],
          "title": "Abuse"
        },
        {
          "type": "panel",
          "name": "maritalStatus",
          "elements": [
            {
              "type": "radiogroup",
              "name": "currentlyMarried",
              "title": "Are you currently married?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "text",
              "name": "currentMarriageYear",
              "visible": false,
              "visibleIf": "{currentlyMarried} = 'Yes'",
              "startWithNewLine": false,
              "title": "In what year did this marriage occure?",
              "isRequired": true
            },
            {
              "type": "paneldynamic",
              "name": "previousMarriages",
              "title": "List all previous marriages",
              "templateElements": [
                {
                  "type": "text",
                  "name": "previousMarriageYear",
                  "title": "Year married:",
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "previousMarriageDuration",
                  "startWithNewLine": false,
                  "title": "Duration (in Years):",
                  "isRequired": true
                }
              ],
              "panelCount": 1,
              "addPanelText": "Add marriage"
            },
            {
              "type": "panel",
              "name": "currentSpouse",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "currentSpouseStatus",
                  "title": " ",
                  "isRequired": true,
                  "choices": [
                    "Not applicable",
                    "Alive",
                    "Deceased"
                  ],
                  "colCount": 0
                },
                {
                  "type": "text",
                  "name": "currentSpouseAge",
                  "visible": false,
                  "visibleIf": "{currentSpouseStatus} = 'Alive'",
                  "startWithNewLine": false,
                  "title": "Age",
                  "isRequired": true
                },
                {
                  "type": "comment",
                  "name": "currentSpouseHelthProblems",
                  "visibleIf": "{currentSpouseStatus} != 'Not applicable' ",
                  "title": "Health problems or cause of death:",
                  "isRequired": true,
                  "rows": 2
                },
                {
                  "type": "radiogroup",
                  "name": "currentSpouseEmploymentStatus",
                  "visible": false,
                  "visibleIf": "{currentSpouseStatus} = 'Alive'",
                  "title": "Current employment status:",
                  "isRequired": true,
                  "choices": [
                    "Retired",
                    "Unemployed",
                    "Homemaker",
                    "Employed"
                  ],
                  "colCount": 0
                }
              ],
              "title": "Current Spouse Information"
            },
            {
              "type": "text",
              "name": "currentSpouseOccupation",
              "visible": false,
              "visibleIf": "{currentSpouseEmploymentStatus} = 'Employed'",
              "title": "Current occupation(s):",
              "isRequired": true
            }
          ],
          "title": "Marital Status"
        }
      ],
      "questionTitleLocation": "left",
      "title": "Social History"
    },
    {
      "name": "familyHistory",
      "elements": [
        {
          "type": "radiogroup",
          "name": "adopted",
          "title": "Are you adopted?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ],
          "colCount": 0
        },
        {
          "type": "html",
          "name": "adoptedInfo",
          "visible": false,
          "visibleIf": "{adopted} = 'Yes'",
          "html": "If known, complete the following information about your <b>blood</b> relatives (include children).  Exclude adoptive parents, siblings and   adopted children."
        },
        {
          "type": "html",
          "name": "nonAdoptedInfo",
          "visible": false,
          "visibleIf": "{adopted} = 'No'",
          "html": "Complete the following information about your <b>blood</b> relatives.  Exclude adoptive siblings and adopted children. "
        },
        {
          "type": "paneldynamic",
          "name": "bloodRelativesInfo",
          "title": "Blood relatives information",
          "templateElements": [
            {
              "type": "dropdown",
              "name": "relativeType",
              "title": "Blood Relative:",
              "isRequired": true,
              "choices": [
                "Father",
                "Mother",
                "Brother",
                "Sister",
                "Son",
                "Daughter"
              ]
            },
            {
              "type": "radiogroup",
              "name": "relativeStatus",
              "startWithNewLine": false,
              "title": "Is he/she:",
              "isRequired": true,
              "choices": [
                "Alive",
                "Deceased",
                "Unknown"
              ],
              "colCount": 0
            },
            {
              "type": "text",
              "name": "relativeAge",
              "visible": false,
              "visibleIf": "{panel.relativeStatus} = 'Alive'",
              "startWithNewLine": false,
              "title": "Current age:",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "relativeAgeOfDeath",
              "visible": false,
              "visibleIf": "{panel.relativeStatus} = 'Deceased'",
              "startWithNewLine": false,
              "title": "Age of death:",
              "isRequired": true
            },
            {
              "type": "panel",
              "name": "relativeDeathInfo",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "relativeCauseOfDeath",
                  "title": "Cause of death:",
                  "isRequired": true,
                  "choices": [
                    "Known",
                    "Unknown"
                  ],
                  "colCount": 0
                },
                {
                  "type": "comment",
                  "name": "relativeCauseOfDeathDescription",
                  "visible": false,
                  "visibleIf": "{panel.relativeCauseOfDeath} = 'Known'",
                  "title": "Description:",
                  "isRequired": true
                }
              ],
              "visible": false,
              "visibleIf": "{panel.relativeStatus} = 'Deceased'"
            },
            {
              "type": "matrixdynamic",
              "name": "relativeCondition",
              "title": "Describe the illness or conditios",
              "titleLocation": "top",
              "columns": [
                {
                  "name": "name",
                  "title": "Illness/Condition",
                  "cellType": "dropdown",
                  "isRequired": true,
                  "choices": [
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
                    "Other"
                  ]
                },
                {
                  "name": "description",
                  "title": "Describe",
                  "cellType": "comment",
                  "isRequired": true
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rowCount": 1,
              "addRowText": "Add illness"
            }
          ],
          "panelCount": 1,
          "addPanelText": "Add Family Member"
        },
        {
          "type": "comment",
          "name": "relativesAdditionalInfo",
          "title": "Other information about your family which you want us to know: "
        }
      ],
      "questionTitleLocation": "left",
      "title": "Family History"
    },
    {
      "name": "healthcareProvider",
      "elements": [
        {
          "type": "radiogroup",
          "name": "primaryCareProvider",
          "title": "Do you have a Primary Care Provider?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ],
          "colCount": 0
        },
        {
          "type": "panel",
          "name": "primaryCareProviderInfo",
          "elements": [
            {
              "type": "text",
              "name": "primaryCareProviderName",
              "title": "Name:",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "primaryCareProviderPhone",
              "startWithNewLine": false,
              "title": "Phone:",
              "isRequired": true
            },
            {
              "type": "comment",
              "name": "primaryCareProviderAddress",
              "title": "Address:"
            },
            {
              "type": "radiogroup",
              "name": "primaryCareProviderSent",
              "title": "Do you want a summary of your visit sent to this person?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            }
          ],
          "visible": false,
          "visibleIf": "{primaryCareProvider} = 'Yes'",
          "title": "Primary Care Provider"
        },
        {
          "type": "radiogroup",
          "name": "primaryCareProviderRecommend",
          "title": "Did a non-Vanderbilt physician or healthcare provider recommend or arrange this visit for you?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ],
          "colCount": 0
        },
        {
          "type": "panel",
          "name": "primaryCareProviderRecommendInfo",
          "elements": [
            {
              "type": "radiogroup",
              "name": "primaryCareProviderWhoSent",
              "title": "Who sent you?",
              "isRequired": true,
              "choices": [
                {
                  "value": "primary",
                  "text": "Your Primary Care Provider (as listed above) "
                },
                {
                  "value": "other",
                  "text": "Other physician or healthcare provider"
                }
              ],
              "colCount": 0
            },
            {
              "type": "panel",
              "name": "primaryCareProviderOtherInfo",
              "elements": [
                {
                  "type": "text",
                  "name": "primaryCareProviderOtherName",
                  "title": "Name:",
                  "isRequired": true
                },
                {
                  "type": "text",
                  "name": "primaryCareProviderOtherPhone",
                  "startWithNewLine": false,
                  "title": "Phone:",
                  "isRequired": true
                },
                {
                  "type": "comment",
                  "name": "primaryCareProviderOtherAddress",
                  "title": "Address:"
                },
                {
                  "type": "radiogroup",
                  "name": "primaryCareProviderOtherSent",
                  "title": "Do you want a summary of your visit sent to this person?",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                }
              ],
              "visible": false,
              "visibleIf": "{primaryCareProviderWhoSent} = 'other'",
              "title": "Other physician or healthcare provider"
            }
          ],
          "visible": false,
          "visibleIf": "{primaryCareProviderRecommend} = 'Yes'"
        }
      ],
      "questionTitleLocation": "left",
      "title": "Healthcare Provider Information"
    },
    {
      "name": "medications",
      "elements": [
        {
          "type": "panel",
          "name": "currentUsingMedication",
          "elements": [
            {
              "type": "radiogroup",
              "name": "currentMedication",
              "title": "Are you currently taking any prescription and/or non-prescription medications including vitamins, nutritional supplements, oral contraceptives, pain relievers, diuretics, laxatives, herbal remedies, and cold medications? ",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "matrixdynamic",
              "name": "currentMedicationList",
              "visible": false,
              "visibleIf": "{currentMedication} = 'Yes'",
              "title": "Medication list",
              "description": "Please add all medication you are currently taking",
              "columns": [
                {
                  "name": "name",
                  "title": "Name of Medication",
                  "cellType": "text",
                  "isRequired": true
                },
                {
                  "name": "dose",
                  "title": "Dose",
                  "cellType": "text",
                  "isRequired": true
                },
                {
                  "name": "often",
                  "title": "How Often Taken",
                  "cellType": "text",
                  "isRequired": true
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rowCount": 1,
              "addRowText": "Add medication"
            }
          ],
          "title": "Medications currently using"
        },
        {
          "type": "panel",
          "name": "recentlyUsedMedication",
          "elements": [
            {
              "type": "radiogroup",
              "name": "recentlyUsedMedication",
              "title": "Are there other medications you have recently used?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "matrixdynamic",
              "name": "recentlyUsedMedicationList",
              "visible": false,
              "visibleIf": "{recentlyUsedMedication} = 'Yes'",
              "title": "Medication list",
              "description": "Please add all medication you have recently used",
              "columns": [
                {
                  "name": "name",
                  "title": "Name of Medication",
                  "cellType": "text",
                  "isRequired": true
                },
                {
                  "name": "dose",
                  "title": "Dose",
                  "cellType": "text",
                  "isRequired": true
                },
                {
                  "name": "often",
                  "title": "How Often Taken",
                  "cellType": "text",
                  "isRequired": true
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rowCount": 1,
              "addRowText": "Add medication"
            }
          ],
          "title": "Medication recently used"
        },
        {
          "type": "radiogroup",
          "name": "aspirinContainingProducts",
          "title": "Have you taken aspirin-containing products in the last two weeks?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ],
          "colCount": 0
        },
        {
          "type": "radiogroup",
          "name": "steroidDrugs",
          "title": "Have you taken steroid or cortisone-type drugs within the last year?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ],
          "colCount": 0
        }
      ],
      "title": "Medications"
    },
    {
      "name": "allergies",
      "elements": [
        {
          "type": "panel",
          "name": "allergiesMedication",
          "elements": [
            {
              "type": "radiogroup",
              "name": "hasAllergiesMedication",
              "title": "Have you had hives, skin rash, breathing problems, or other allergic reactions to medications?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "matrixdynamic",
              "name": "allergiesMedicationList",
              "visible": false,
              "visibleIf": "{hasAllergiesMedication} = 'Yes'",
              "title": "Medication list",
              "columns": [
                {
                  "name": "name",
                  "title": "Name of Medication",
                  "cellType": "text",
                  "isRequired": true
                },
                {
                  "name": "description",
                  "title": "Describe Allergic Reaction",
                  "cellType": "comment",
                  "isRequired": true
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rowCount": 1,
              "addRowText": "Add medication"
            }
          ],
          "title": "Allergies to Medication"
        },
        {
          "type": "panel",
          "name": "unpleasentToMedication",
          "elements": [
            {
              "type": "radiogroup",
              "name": "hasUnpleasantMedication",
              "title": "Are there medications, other than those you are allergic to, that you would prefer not to take due to prior unpleasant side effects?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "matrixdynamic",
              "name": "unpleasantMedicationList",
              "visible": false,
              "visibleIf": "{hasUnpleasantMedication} = 'Yes'",
              "title": "Medication list",
              "columns": [
                {
                  "name": "name",
                  "title": "Name of Medication",
                  "cellType": "text",
                  "isRequired": true
                },
                {
                  "name": "description",
                  "title": "Describe the Reaction",
                  "cellType": "text",
                  "isRequired": true
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rowCount": 1,
              "addRowText": "Add medication"
            },
            {
              "type": "panel",
              "name": "allergiesReaction",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "allergicReactionXRay",
                  "title": "Iodine or X-ray contrast dye",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                },
                {
                  "type": "radiogroup",
                  "name": "allergicReactionBee",
                  "startWithNewLine": false,
                  "title": "Bee or wasp stings",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                },
                {
                  "type": "radiogroup",
                  "name": "allergicReactionLatext",
                  "title": "Latex or Rubber",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                },
                {
                  "type": "radiogroup",
                  "name": "allergicReactionTape",
                  "startWithNewLine": false,
                  "title": "Adhesive tape",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                }
              ],
              "questionTitleLocation": "left",
              "title": "Have you had an allergic reaction to:"
            }
          ],
          "title": "Unpleasant Side Effects to Medications"
        },
        {
          "type": "panel",
          "name": "foodAllergiesInfo",
          "elements": [
            {
              "type": "radiogroup",
              "name": "hasFoodAllergies",
              "title": "Do you have any food allergies?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "comment",
              "name": "foodAllergiesDescription",
              "visible": false,
              "visibleIf": "{hasFoodAllergies} = 'Yes'",
              "title": "Describe"
            }
          ],
          "questionTitleLocation": "left",
          "title": "Food Allergies"
        }
      ],
      "title": "Allergies"
    },
    {
      "name": "systemsReview",
      "elements": [
        {
          "type": "matrix",
          "name": "sympthoms",
          "title": "Indicate whether you have experienced the following symptoms during recent months, unless otherwise specified",
          "titleLocation": "top",
          "isRequired": true,
          "columns": [
            "No",
            "Yes"
          ],
          "rows": [
            "Skin rash, sore, excessive bruising or change of a mole?",
            "Excessive thirst or urination?",
            "Change in sexual drive or performance?",
            "Significant headaches, seizures, slurred speech or difficulty moving an arm or leg?",
            "Eye problems such as double or blurred vision, cataracts or glaucoma?",
            "Diminished hearing, dizziness, hoarseness or sinus problems?",
            {
              "value": "dentures",
              "text": "Do you wear dentures?"
            },
            "Bothered with cough, shortness of breath, wheezing or asthma?",
            "Coughing up sputum or blood?",
            "Exposed to anyone with tuberculosis?",
            "“Blacked out” or lost consciousness?",
            "Chest pain or pressure, rapid or irregular heart beats, or known difficulty with a heart valve?",
            "Awakening at night with shortness of breath?",
            "Abnormal swelling in the legs or feet?",
            "Pain in the calves of your legs when you walk?",
            "Difficulty with swallowing, heartburn, nausea, vomiting or stomach trouble?",
            "Significant problems with constipation, diarrhea, blood/changes in bowel movements?",
            {
              "value": "colon_rectum_x-ray",
              "text": "Have you had a colon or rectum x-ray or instrument examination (proctoscopy, sigmoidoscopy, colonoscopy)?"
            },
            {
              "value": "endoscopy",
              "text": "Have you had an upper endoscopy to evaluate the stomach for varices?"
            },
            "Have you had any treatment for varices? (sclerotherapy, banding)",
            "Difficulty starting your urinary stream, completely emptying your bladder or leaking urine from your bladder?",
            "Burning or pain when urinating?",
            "Pain, stiffness or swelling in your back, joints or muscles?",
            "Fever within the last month?",
            "Enlarged glands (lymph nodes)?",
            "Feel you are at risk for HIV or AIDS?",
            "Immunized for influenza, tetanus/diphtheria and/or pneumonia within the last year?",
            "Experiencing an unusually stressful situation?",
            "Weight gain or loss of more than 10 pounds during the last 6 months?",
            "Problems falling asleep, staying asleep, sleep apnea or disruptive snoring?",
            "Have you ever felt a need to cut down on your alcohol consumption?",
            "Do relatives/friends worry or complain about your alcohol consumption?",
            "Have you been physically, sexually, or emotionally abused?"
          ],
          "eachRowRequired": true
        },
        {
          "type": "radiogroup",
          "name": "howWearDentures",
          "visible": false,
          "visibleIf": "{sympthoms.dentures}  = 'Yes'",
          "title": "How do you wear dentures?",
          "isRequired": true,
          "choices": [
            " Ful",
            "Upper",
            "Lower",
            "Partial"
          ],
          "colCount": 0
        },
        {
          "type": "multipletext",
          "name": "colonRectumDate",
          "visible": false,
          "visibleIf": "{sympthoms.colon_rectum_x-ray} = 'Yes'",
          "title": "Whe did you do a colon or rectum x-ray or instrument examination (proctoscopy, sigmoidoscopy, colonoscopy)?  Approximate date:",
          "isRequired": true,
          "items": [
            {
              "name": "mo",
              "title": "Month"
            },
            {
              "name": "year",
              "title": "Year"
            }
          ],
          "colCount": 2
        },
        {
          "type": "multipletext",
          "name": "endoscopyDate",
          "visible": false,
          "visibleIf": "{sympthoms.endoscopy} = 'Yes'",
          "title": "Whe did you have an upper endoscopy to evaluate the stomach for varices?  Approximate date:",
          "isRequired": true,
          "items": [
            {
              "name": "mo",
              "title": "Month"
            },
            {
              "name": "year",
              "title": "Year"
            }
          ],
          "colCount": 2
        },
        {
          "type": "panel",
          "name": "questionsToFemale",
          "elements": [
            {
              "type": "radiogroup",
              "name": "abnormalPapSmear",
              "title": "Have you ever had an abnormal Pap smear?",
              "isRequired": true,
              "choices": [
                "Unknown",
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "radiogroup",
              "name": "menopause",
              "title": "Have you experienced menopause or had a hysterectomy?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ],
              "colCount": 0
            },
            {
              "type": "panel",
              "name": "panelNoMenopause",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "concernedAboutMenstrualPeriods",
                  "title": "Are you concerned about your menstrual periods?",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                },
                {
                  "type": "radiogroup",
                  "name": "pregnant",
                  "title": "Might you be pregnant at this time?",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ],
                  "colCount": 0
                },
                {
                  "type": "text",
                  "name": "lastMenstrualPeriod",
                  "title": "Date of onset of your last menstrual period:",
                  "inputType": "date"
                },
                {
                  "type": "panel",
                  "name": "panelPapSmearExam",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "papSmearExam",
                      "title": "Have you ever done Pap smear and pelvic exam:",
                      "isRequired": true,
                      "choices": [
                        "No",
                        "Yes"
                      ],
                      "colCount": 0
                    },
                    {
                      "type": "multipletext",
                      "name": "papSmearExamDate",
                      "visible": false,
                      "visibleIf": "{papSmearExam} = 'Yes'",
                      "title": "Approximate date of your last Pap smear and pelvic exam:",
                      "isRequired": true,
                      "items": [
                        {
                          "name": "mo",
                          "title": "Month"
                        },
                        {
                          "name": "year",
                          "title": "Year"
                        }
                      ],
                      "colCount": 2
                    },
                    {
                      "type": "radiogroup",
                      "name": "mammogram",
                      "title": "Have you ever done mammogram:",
                      "isRequired": true,
                      "choices": [
                        "No",
                        "Yes"
                      ],
                      "colCount": 0
                    },
                    {
                      "type": "multipletext",
                      "name": "mammogramDate",
                      "visible": false,
                      "visibleIf": "{mammogram} = 'Yes'",
                      "title": "Approximate date of your last mammogram:",
                      "isRequired": true,
                      "items": [
                        {
                          "name": "mo",
                          "title": "Month"
                        },
                        {
                          "name": "year",
                          "title": "Year"
                        }
                      ],
                      "colCount": 2
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "panelPregnancies",
                  "elements": [
                    {
                      "type": "text",
                      "name": "pregnancies",
                      "title": "Pregnancies:",
                      "isRequired": true,
                      "inputType": "number"
                    },
                    {
                      "type": "text",
                      "name": "liveBirths",
                      "startWithNewLine": false,
                      "title": "Live Births:",
                      "isRequired": true,
                      "inputType": "number"
                    },
                    {
                      "type": "text",
                      "name": "abortions",
                      "startWithNewLine": false,
                      "title": "Miscarriages/abortions:",
                      "isRequired": true,
                      "inputType": "number",
                      "min": 0
                    }
                  ],
                  "title": "Number of:"
                }
              ],
              "visible": false,
              "visibleIf": "{menopause} = 'No'"
            }
          ],
          "visible": false,
          "visibleIf": "{sex} = 'female'",
          "title": "For Female Patients"
        }
      ],
      "questionTitleLocation": "left",
      "title": "System Review"
    },
    {
      "name": "selfCare",
      "elements": [
        {
          "type": "matrix",
          "name": "performingActivities",
          "title": "Do you have difficulty performing these activities by YOURSELF?",
          "columns": [
            "No",
            "Yes"
          ],
          "rows": [
            "Eating",
            "Bathing",
            "Dressing",
            "Walking",
            "Using Toilet",
            "Housekeeping"
          ],
          "eachRowRequired": true
        },
        {
          "type": "radiogroup",
          "name": "specialDietary",
          "title": "Do you have any special dietary needs?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ],
          "colCount": 0
        },
        {
          "type": "comment",
          "name": "specialDietaryDescription",
          "visible": false,
          "visibleIf": "{specialDietary} = 'Yes'",
          "title": "Please describe your special dietery:",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "livingArrangement",
          "title": "What is your current living arrangement?",
          "isRequired": true,
          "choices": [
            "House",
            "Apartment",
            "Nursing Home"
          ],
          "showOtherItem": true,
          "colCount": 0
        },
        {
          "type": "radiogroup",
          "name": "liveWithWhom",
          "title": "Do you live?",
          "isRequired": true,
          "choices": [
            "Alone",
            "With Spouse/Family",
            "With others"
          ],
          "colCount": 0
        },
        {
          "type": "comment",
          "name": "liveWithWhomDescription",
          "visible": false,
          "visibleIf": "{liveWithWhom} = 'With others'",
          "title": "Please describe with whom do you live:",
          "isRequired": true
        },
        {
          "type": "comment",
          "name": "peopleProvidedAssistence",
          "title": "List family or friends able to provide assistance with your homecare needs if you would ever require such assistance:",
          "titleLocation": "top"
        }
      ],
      "questionTitleLocation": "top",
      "title": "Self-Care/Home Environment Assessment"
    },
    {
      "name": "educationalNeeds",
      "elements": [
        {
          "type": "checkbox",
          "name": "interestedInTopics",
          "title": "Are you interested in more information about a specific topic(s)?",
          "choices": [
            "How to stop smoking",
            "Exercise",
            "Stress",
            "Safe sexual practices",
            "Safety (seat belts, smoke detectors, firearms)",
            "Nutrition",
            "Weight control",
            "Violent & abusive behavior",
            "Living wills",
            "Diabetes",
            "Cancer screening   "
          ],
          "showOtherItem": true,
          "colCount": 3
        }
      ],
      "title": "Educational Needs"
    }
  ],
  "partialSendEnabled": true,
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom",
  "showProgressBar": "top"
};