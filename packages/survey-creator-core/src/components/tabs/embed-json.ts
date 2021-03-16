export const json: any = {
  "pages": [
   {
    "name": "embed",
    "elements": [
     {
      "type": "dropdown",
      "name": "framework",
      "width": "284px",
      "minWidth": "284px",
      "maxWidth": "284px",
      "titleLocation": "hidden",
      "defaultValue": "jquery",
      "choices": [
       {
        "value": "angular",
        "text": "Use Angular version"
       },
       {
        "value": "jquery",
        "text": "Use jQuery version"
       },
       {
        "value": "knockout",
        "text": "Use Knockout version"
       },
       {
        "value": "react",
        "text": "Use React version"
       },
       {
        "value": "vue",
        "text": "Use Vue version"
       }
      ],
      "showOptionsCaption": false
     },
     {
      "type": "dropdown",
      "name": "theme",
      "width": "284px",
      "minWidth": "284px",
      "maxWidth": "284px",
      "startWithNewLine": false,
      "titleLocation": "hidden",
      "defaultValue": "modern",
      "choices": [
       {
        "value": "modern",
        "text": "Modern theme"
       },
       {
        "value": "default",
        "text": "Default theme"
       },
       {
        "value": "orange",
        "text": "Orange theme"
       },
       {
        "value": "darkblue",
        "text": "Darkblue theme"
       },
       {
        "value": "darkrose",
        "text": "Darkrose theme"
       },
       {
        "value": "stone",
        "text": "Stone theme"
       },
       {
        "value": "winter",
        "text": "Winter theme"
       },
       {
        "value": "winter-stone",
        "text": "Winter-Stone theme"
       },
       {
        "value": "bootstrap",
        "text": "For bootstrap framework"
       }
      ],
      "showOptionsCaption": false
     },
     {
      "type": "dropdown",
      "name": "show",
      "width": "284px",
      "minWidth": "284px",
      "maxWidth": "284px",
      "startWithNewLine": false,
      "titleLocation": "hidden",
      "defaultValue": "page",
      "choices": [
       {
        "value": "page",
        "text": "Show survey on a page"
       },
       {
        "value": "window",
        "text": "Show survey in a window"
       }
      ],
      "showOptionsCaption": false
     },
     {
      "type": "expression",
      "name": "scripts_expression",
      "visible": false,
      "expression": "scriptsMarkup({framework}, {theme})"
     },
     {
      "type": "comment",
      "name": "scripts",
      "description": "Scripts and styles",
      "readOnly": true
     },
     {
      "type": "expression",
      "name": "html_expression",
      "visible": false,
      "expression": "htmlMarkup({framework})"
     },
     {
      "type": "comment",
      "name": "html",
      "visibleIf": "{framework} <> 'knockout' or {show} <> 'window'",
      "description": "HTML",
      "readOnly": true,
      "rows": 1
     },
     {
      "type": "comment",
      "name": "javascript",
      "description": "JavaScript",
      "readOnly": true,
      "rows": 10
     }
    ]
   }
  ],
  "triggers": [
   {
    "type": "copyvalue",
    "expression": "{scripts_expression} notempty",
    "setToName": "scripts",
    "fromName": "scripts_expression"
   },
   {
    "type": "copyvalue",
    "expression": "{html_expression} notempty",
    "setToName": "html",
    "fromName": "html_expression"
   }
  ],
  "showNavigationButtons": "none"
};