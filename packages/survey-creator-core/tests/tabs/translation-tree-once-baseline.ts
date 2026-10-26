// The translation model state recorded on faa307505, the commit before the translation tree was
// built once per reset (see translation-tree-once-helper.ts for the snapshot format).
export const treeOnceBaseline: any = {
  defaultMode: {
    all: {
      root: "survey_props",
      tree: [
        "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}",
        "page1_props: title=\"Page 1\"",
        "page1_panel1_props: title=\"Panel 1\"",
        "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}",
        "page1_q2_props: title=\"Question 2\"",
        "q2_choices: item1=\"Item 1\"; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}",
        "page2_props: ",
        "page2_q3_props: title=\"Question 3\"",
        "q3_col1_props: title=\"Column 1\"",
        "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}",
        "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
        "page2_q4_props: title=\"Question 4\""
      ],
      strings: {
        questions: [
          "survey_props0: title",
          "survey_props1: description",
          "page1_props0: title",
          "page1_panel1_props0: title",
          "panel1_q1_props0: title",
          "page1_q2_props0: title",
          "q2_choices0: item1",
          "q2_choices1: item2",
          "page2_q3_props0: title",
          "q3_col1_props0: title",
          "q3_col2_props0: title",
          "q3_rows0: row1",
          "q3_rows1: row2",
          "page2_q4_props0: title"
        ],
        data: {
          survey_props0: {
            title: {
              default: "Survey title"
            }
          },
          survey_props1: {
            description: {
              default: "Survey description",
              de: "Umfragebeschreibung"
            }
          },
          page1_props0: {
            title: {
              default: "Page 1"
            }
          },
          page1_panel1_props0: {
            title: {
              default: "Panel 1"
            }
          },
          panel1_q1_props0: {
            title: {
              default: "Question 1",
              de: "Frage 1"
            }
          },
          page1_q2_props0: {
            title: {
              default: "Question 2"
            }
          },
          q2_choices0: {
            item1: {
              default: "Item 1"
            }
          },
          q2_choices1: {
            item2: {
              default: "Item 2",
              de: "Element 2"
            }
          },
          page2_q3_props0: {
            title: {
              default: "Question 3"
            }
          },
          q3_col1_props0: {
            title: {
              default: "Column 1"
            }
          },
          q3_col2_props0: {
            title: {
              default: "Column 2",
              de: "Spalte 2"
            }
          },
          q3_rows0: {
            row1: {
              default: "Row 1"
            }
          },
          q3_rows1: {
            row2: {
              default: "Row 2"
            }
          },
          page2_q4_props0: {
            title: {
              default: "Question 4"
            }
          }
        }
      },
      locales: [
        "",
        "de"
      ],
      showAllStrings: false,
      isEmpty: false
    },
    firstPage: {
      root: "survey_props",
      tree: [
        "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}",
        "page1_props: title=\"Page 1\"",
        "page1_panel1_props: title=\"Panel 1\"",
        "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}",
        "page1_q2_props: title=\"Question 2\"",
        "q2_choices: item1=\"Item 1\"; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}"
      ],
      strings: {
        questions: [
          "survey_props0: title",
          "survey_props1: description",
          "page1_props0: title",
          "page1_panel1_props0: title",
          "panel1_q1_props0: title",
          "page1_q2_props0: title",
          "q2_choices0: item1",
          "q2_choices1: item2"
        ],
        data: {
          survey_props0: {
            title: {
              default: "Survey title"
            }
          },
          survey_props1: {
            description: {
              default: "Survey description",
              de: "Umfragebeschreibung"
            }
          },
          page1_props0: {
            title: {
              default: "Page 1"
            }
          },
          page1_panel1_props0: {
            title: {
              default: "Panel 1"
            }
          },
          panel1_q1_props0: {
            title: {
              default: "Question 1",
              de: "Frage 1"
            }
          },
          page1_q2_props0: {
            title: {
              default: "Question 2"
            }
          },
          q2_choices0: {
            item1: {
              default: "Item 1"
            }
          },
          q2_choices1: {
            item2: {
              default: "Item 2",
              de: "Element 2"
            }
          }
        }
      },
      locales: [
        "",
        "de"
      ],
      filteredPage: "page1",
      showAllStrings: false,
      isEmpty: false
    },
    laterPage: {
      root: "page2_props",
      tree: [
        "page2_props: ",
        "q3_props: title=\"Question 3\"",
        "q3_col1_props: title=\"Column 1\"",
        "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}",
        "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
        "q4_props: title=\"Question 4\""
      ],
      strings: {
        questions: [
          "q3_props0: title",
          "q3_col1_props0: title",
          "q3_col2_props0: title",
          "q3_rows0: row1",
          "q3_rows1: row2",
          "q4_props0: title"
        ],
        data: {
          q3_props0: {
            title: {
              default: "Question 3"
            }
          },
          q3_col1_props0: {
            title: {
              default: "Column 1"
            }
          },
          q3_col2_props0: {
            title: {
              default: "Column 2",
              de: "Spalte 2"
            }
          },
          q3_rows0: {
            row1: {
              default: "Row 1"
            }
          },
          q3_rows1: {
            row2: {
              default: "Row 2"
            }
          },
          q4_props0: {
            title: {
              default: "Question 4"
            }
          }
        }
      },
      locales: [
        "",
        "de"
      ],
      filteredPage: "page2",
      showAllStrings: false,
      isEmpty: false
    },
    update: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}",
          "page1_props: title=\"Page 1\"",
          "page1_panel1_props: title=\"Panel 1\"",
          "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}",
          "page1_q2_props: title=\"Question 2\"",
          "q2_choices: item1=\"Item 1\"; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}",
          "page2_props: ",
          "page2_q3_props: title=\"Question 3\"",
          "q3_col1_props: title=\"Column 1\"",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "page2_q4_props: title=\"Question 4\""
        ],
        strings: {
          questions: [
            "survey_props0: title",
            "survey_props1: description",
            "page1_props0: title",
            "page1_panel1_props0: title",
            "panel1_q1_props0: title",
            "page1_q2_props0: title",
            "q2_choices0: item1",
            "q2_choices1: item2",
            "page2_q3_props0: title",
            "q3_col1_props0: title",
            "q3_col2_props0: title",
            "q3_rows0: row1",
            "q3_rows1: row2",
            "page2_q4_props0: title"
          ],
          data: {
            survey_props0: {
              title: {
                default: "Survey title"
              }
            },
            survey_props1: {
              description: {
                default: "Survey description",
                de: "Umfragebeschreibung"
              }
            },
            page1_props0: {
              title: {
                default: "Page 1"
              }
            },
            page1_panel1_props0: {
              title: {
                default: "Panel 1"
              }
            },
            panel1_q1_props0: {
              title: {
                default: "Question 1",
                de: "Frage 1"
              }
            },
            page1_q2_props0: {
              title: {
                default: "Question 2"
              }
            },
            q2_choices0: {
              item1: {
                default: "Item 1"
              }
            },
            q2_choices1: {
              item2: {
                default: "Item 2",
                de: "Element 2"
              }
            },
            page2_q3_props0: {
              title: {
                default: "Question 3"
              }
            },
            q3_col1_props0: {
              title: {
                default: "Column 1"
              }
            },
            q3_col2_props0: {
              title: {
                default: "Column 2",
                de: "Spalte 2"
              }
            },
            q3_rows0: {
              row1: {
                default: "Row 1"
              }
            },
            q3_rows1: {
              row2: {
                default: "Row 2"
              }
            },
            page2_q4_props0: {
              title: {
                default: "Question 4"
              }
            }
          }
        },
        locales: [
          "",
          "de"
        ],
        filteredPage: null,
        showAllStrings: false,
        isEmpty: false
      },
      action: {
        title: "All Pages",
        selected: null
      }
    }
  },
  sideBySide: {
    form: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}; completedHtml; completedBeforeHtml; loadingHtml; startSurveyText; pagePrevText; pageNextText; completeText; previewText; editText",
          "page1_props: title=\"Page 1\"; description; navigationTitle; navigationDescription",
          "page1_panel1_props: title=\"Panel 1\"; description; requiredErrorText",
          "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList",
          "page1_q2_props: title=\"Question 2\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; selectAllText",
          "q2_choices: item1=\"Item 1\"; item1.commentPlaceholder; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}; item2.commentPlaceholder",
          "page2_props: title; description; navigationTitle; navigationDescription",
          "page2_q3_props: title=\"Question 3\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; placeholder; keyDuplicationError; singleInputTitleTemplate; totalText",
          "q3_col1_props: title=\"Column 1\"; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "page2_q4_props: title=\"Question 4\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList"
        ],
        strings: null,
        locales: [],
        showAllStrings: true,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "0/103",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 4 / 14"
      ],
      copies: 103,
      editableCopies: 103
    },
    hiddenTitle: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}; completedHtml; completedBeforeHtml; loadingHtml; startSurveyText; pagePrevText; pageNextText; completeText; previewText; editText",
          "page1_props: title=\"Page 1\"; description; navigationTitle; navigationDescription",
          "page1_panel1_props: title=\"Panel 1\"; description; requiredErrorText",
          "panel1_q1_props: description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList",
          "page1_q2_props: title=\"Question 2\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; selectAllText",
          "q2_choices: item1=\"Item 1\"; item1.commentPlaceholder; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}; item2.commentPlaceholder",
          "page2_props: title; description; navigationTitle; navigationDescription",
          "page2_q3_props: title=\"Question 3\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; placeholder; keyDuplicationError; singleInputTitleTemplate; totalText",
          "q3_col1_props: title=\"Column 1\"; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "page2_q4_props: title=\"Question 4\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList"
        ],
        strings: null,
        locales: [],
        showAllStrings: true,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "0/102",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 3 / 13"
      ],
      copies: 102,
      editableCopies: 102
    },
    readOnly: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}; completedHtml; completedBeforeHtml; loadingHtml; startSurveyText; pagePrevText; pageNextText; completeText; previewText; editText",
          "page1_props: title=\"Page 1\"; description; navigationTitle; navigationDescription",
          "page1_panel1_props: title=\"Panel 1\"; description; requiredErrorText",
          "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList",
          "page1_q2_props: title=\"Question 2\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; selectAllText",
          "q2_choices: item1=\"Item 1\"; item1.commentPlaceholder; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}; item2.commentPlaceholder",
          "page2_props: title; description; navigationTitle; navigationDescription",
          "page2_q3_props: title=\"Question 3\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; placeholder; keyDuplicationError; singleInputTitleTemplate; totalText",
          "q3_col1_props: title=\"Column 1\"; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "page2_q4_props: title=\"Question 4\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList"
        ],
        strings: null,
        locales: [],
        showAllStrings: true,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "103/103",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 4 / 14"
      ],
      copies: 103,
      editableCopies: 103
    },
    hiddenTitleReadOnly: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}; completedHtml; completedBeforeHtml; loadingHtml; startSurveyText; pagePrevText; pageNextText; completeText; previewText; editText",
          "page1_props: title=\"Page 1\"; description; navigationTitle; navigationDescription",
          "page1_panel1_props: title=\"Panel 1\"; description; requiredErrorText",
          "panel1_q1_props: description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList",
          "page1_q2_props: title=\"Question 2\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; selectAllText",
          "q2_choices: item1=\"Item 1\"; item1.commentPlaceholder; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}; item2.commentPlaceholder",
          "page2_props: title; description; navigationTitle; navigationDescription",
          "page2_q3_props: title=\"Question 3\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; placeholder; keyDuplicationError; singleInputTitleTemplate; totalText",
          "q3_col1_props: title=\"Column 1\"; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}; requiredErrorText; totalFormat; defaultDisplayValue; description; commentText; commentPlaceholder; otherPlaceholder; noneText; refuseText; dontKnowText; otherText; otherErrorText; placeholder; createCustomChoiceText",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "page2_q4_props: title=\"Question 4\"; description; requiredErrorText; commentText; commentPlaceholder; defaultDisplayValue; minErrorText; maxErrorText; stepErrorText; placeholder; dataList"
        ],
        strings: null,
        locales: [],
        showAllStrings: true,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "102/102",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 3 / 13"
      ],
      copies: 102,
      editableCopies: 102
    },
    grid: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}",
          "page1_props: title=\"Page 1\"",
          "page1_panel1_props: title=\"Panel 1\"",
          "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}",
          "page1_q2_props: title=\"Question 2\"",
          "q2_choices: item1=\"Item 1\"; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}",
          "page2_props: ",
          "page2_q3_props: title=\"Question 3\"",
          "q3_col1_props: title=\"Column 1\"",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "page2_q4_props: title=\"Question 4\""
        ],
        strings: {
          questions: [
            "survey_props0: title",
            "survey_props1: description",
            "page1_props0: title",
            "page1_panel1_props0: title",
            "panel1_q1_props0: title",
            "page1_q2_props0: title",
            "q2_choices0: item1",
            "q2_choices1: item2",
            "page2_q3_props0: title",
            "q3_col1_props0: title",
            "q3_col2_props0: title",
            "q3_rows0: row1",
            "q3_rows1: row2",
            "page2_q4_props0: title"
          ],
          data: {
            survey_props0: {
              title: {
                default: "Survey title"
              }
            },
            survey_props1: {
              description: {
                default: "Survey description",
                de: "Umfragebeschreibung"
              }
            },
            page1_props0: {
              title: {
                default: "Page 1"
              }
            },
            page1_panel1_props0: {
              title: {
                default: "Panel 1"
              }
            },
            panel1_q1_props0: {
              title: {
                default: "Question 1",
                de: "Frage 1"
              }
            },
            page1_q2_props0: {
              title: {
                default: "Question 2"
              }
            },
            q2_choices0: {
              item1: {
                default: "Item 1"
              }
            },
            q2_choices1: {
              item2: {
                default: "Item 2",
                de: "Element 2"
              }
            },
            page2_q3_props0: {
              title: {
                default: "Question 3"
              }
            },
            q3_col1_props0: {
              title: {
                default: "Column 1"
              }
            },
            q3_col2_props0: {
              title: {
                default: "Column 2",
                de: "Spalte 2"
              }
            },
            q3_rows0: {
              row1: {
                default: "Row 1"
              }
            },
            q3_rows1: {
              row2: {
                default: "Row 2"
              }
            },
            page2_q4_props0: {
              title: {
                default: "Question 4"
              }
            }
          }
        },
        locales: [],
        showAllStrings: false,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "0/14",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 4 / 14"
      ],
      copies: 0,
      editableCopies: 0
    },
    gridFirstPage: {
      model: {
        root: "survey_props",
        tree: [
          "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}",
          "page1_props: title=\"Page 1\"",
          "page1_panel1_props: title=\"Panel 1\"",
          "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}",
          "page1_q2_props: title=\"Question 2\"",
          "q2_choices: item1=\"Item 1\"; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}"
        ],
        strings: {
          questions: [
            "survey_props0: title",
            "survey_props1: description",
            "page1_props0: title",
            "page1_panel1_props0: title",
            "panel1_q1_props0: title",
            "page1_q2_props0: title",
            "q2_choices0: item1",
            "q2_choices1: item2"
          ],
          data: {
            survey_props0: {
              title: {
                default: "Survey title"
              }
            },
            survey_props1: {
              description: {
                default: "Survey description",
                de: "Umfragebeschreibung"
              }
            },
            page1_props0: {
              title: {
                default: "Page 1"
              }
            },
            page1_panel1_props0: {
              title: {
                default: "Panel 1"
              }
            },
            panel1_q1_props0: {
              title: {
                default: "Question 1",
                de: "Frage 1"
              }
            },
            page1_q2_props0: {
              title: {
                default: "Question 2"
              }
            },
            q2_choices0: {
              item1: {
                default: "Item 1"
              }
            },
            q2_choices1: {
              item2: {
                default: "Item 2",
                de: "Element 2"
              }
            }
          }
        },
        locales: [],
        filteredPage: "page1",
        showAllStrings: false,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "0/8",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 4 / 14"
      ],
      copies: 0,
      editableCopies: 0
    },
    gridLaterPage: {
      model: {
        root: "page2_props",
        tree: [
          "page2_props: ",
          "q3_props: title=\"Question 3\"",
          "q3_col1_props: title=\"Column 1\"",
          "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}",
          "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
          "q4_props: title=\"Question 4\""
        ],
        strings: {
          questions: [
            "q3_props0: title",
            "q3_col1_props0: title",
            "q3_col2_props0: title",
            "q3_rows0: row1",
            "q3_rows1: row2",
            "q4_props0: title"
          ],
          data: {
            q3_props0: {
              title: {
                default: "Question 3"
              }
            },
            q3_col1_props0: {
              title: {
                default: "Column 1"
              }
            },
            q3_col2_props0: {
              title: {
                default: "Column 2",
                de: "Spalte 2"
              }
            },
            q3_rows0: {
              row1: {
                default: "Row 1"
              }
            },
            q3_rows1: {
              row2: {
                default: "Row 2"
              }
            },
            q4_props0: {
              title: {
                default: "Question 4"
              }
            }
          }
        },
        locales: [],
        filteredPage: "page2",
        showAllStrings: false,
        isEmpty: false
      },
      sourceLocale: "",
      targetLocale: "de",
      readOnlyItems: "0/6",
      usedStrings: [
        "title",
        "description",
        "title",
        "title",
        "title",
        "title",
        "item1",
        "item2",
        "title",
        "title",
        "title",
        "row1",
        "row2",
        "title"
      ],
      counters: [
        "de: 4 / 14"
      ],
      copies: 0,
      editableCopies: 0
    },
    gridUpdate: {
      state: {
        model: {
          root: "survey_props",
          tree: [
            "survey_props: title=\"Survey title\"; description={\"default\":\"Survey description\",\"de\":\"Umfragebeschreibung\"}",
            "page1_props: title=\"Page 1\"",
            "page1_panel1_props: title=\"Panel 1\"",
            "panel1_q1_props: title={\"default\":\"Question 1\",\"de\":\"Frage 1\"}",
            "page1_q2_props: title=\"Question 2\"",
            "q2_choices: item1=\"Item 1\"; item2={\"default\":\"Item 2\",\"de\":\"Element 2\"}",
            "page2_props: ",
            "page2_q3_props: title=\"Question 3\"",
            "q3_col1_props: title=\"Column 1\"",
            "q3_col2_props: title={\"default\":\"Column 2\",\"de\":\"Spalte 2\"}",
            "q3_rows: row1=\"Row 1\"; row2=\"Row 2\"",
            "page2_q4_props: title=\"Question 4\""
          ],
          strings: {
            questions: [
              "survey_props0: title",
              "survey_props1: description",
              "page1_props0: title",
              "page1_panel1_props0: title",
              "panel1_q1_props0: title",
              "page1_q2_props0: title",
              "q2_choices0: item1",
              "q2_choices1: item2",
              "page2_q3_props0: title",
              "q3_col1_props0: title",
              "q3_col2_props0: title",
              "q3_rows0: row1",
              "q3_rows1: row2",
              "page2_q4_props0: title"
            ],
            data: {
              survey_props0: {
                title: {
                  default: "Survey title"
                }
              },
              survey_props1: {
                description: {
                  default: "Survey description",
                  de: "Umfragebeschreibung"
                }
              },
              page1_props0: {
                title: {
                  default: "Page 1"
                }
              },
              page1_panel1_props0: {
                title: {
                  default: "Panel 1"
                }
              },
              panel1_q1_props0: {
                title: {
                  default: "Question 1",
                  de: "Frage 1"
                }
              },
              page1_q2_props0: {
                title: {
                  default: "Question 2"
                }
              },
              q2_choices0: {
                item1: {
                  default: "Item 1"
                }
              },
              q2_choices1: {
                item2: {
                  default: "Item 2",
                  de: "Element 2"
                }
              },
              page2_q3_props0: {
                title: {
                  default: "Question 3"
                }
              },
              q3_col1_props0: {
                title: {
                  default: "Column 1"
                }
              },
              q3_col2_props0: {
                title: {
                  default: "Column 2",
                  de: "Spalte 2"
                }
              },
              q3_rows0: {
                row1: {
                  default: "Row 1"
                }
              },
              q3_rows1: {
                row2: {
                  default: "Row 2"
                }
              },
              page2_q4_props0: {
                title: {
                  default: "Question 4"
                }
              }
            }
          },
          locales: [],
          filteredPage: null,
          showAllStrings: false,
          isEmpty: false
        },
        sourceLocale: "",
        targetLocale: "de",
        readOnlyItems: "0/14",
        usedStrings: [
          "title",
          "description",
          "title",
          "title",
          "title",
          "title",
          "item1",
          "item2",
          "title",
          "title",
          "title",
          "row1",
          "row2",
          "title"
        ],
        counters: [
          "de: 4 / 14"
        ],
        copies: 0,
        editableCopies: 0
      },
      action: {
        title: "All Pages",
        selected: null
      }
    }
  }
};
