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
        "text": "Bootstrap theme"
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
      "type": "comment",
      "name": "scripts",
      "description": "Scripts and styles",
      "defaultValue": "<!-- Your platform (jquery) scripts. -->\n\n<link href=\"https://unpkg.com/survey-jquery@1.8.35/modern.css\" type=\"text/css\" rel=\"stylesheet\" />\n<script src=\"https://unpkg.com/survey-jquery@1.8.35/survey.jquery.min.js\"></script>",
      "readOnly": true
     },
     {
      "type": "comment",
      "name": "html",
      "description": "HTML",
      "defaultValue": "<div id=\"surveyContainer\"></div>",
      "readOnly": true,
      "rows": 1
     },
     {
      "type": "comment",
      "name": "javascript",
      "description": "JavaScript",
      "defaultValue": "Survey.StylesManager.applyTheme(\"modern\");\n\nvar surveyJSON = {\"pages\":[{\"name\":\"embed\",\"elements\":[{\"type\":\"dropdown\",\"name\":\"framework\",\"titleLocation\":\"hidden\",\"defaultValue\":\"jquery\",\"choices\":[{\"value\":\"angular\",\"text\":\"Use Angular version\"},{\"value\":\"jquery\",\"text\":\"Use jQuery version\"},{\"value\":\"knockout\",\"text\":\"Use Knockout version\"},{\"value\":\"react\",\"text\":\"Use React version\"},{\"value\":\"vue\",\"text\":\"Use Vue version\"}],\"showOptionsCaption\":false}]}],\"showNavigationButtons\":\"none\"}\n\nfunction sendDataToServer(survey) {\n    //send Ajax request to your web server.\n    alert(\"The results are:\" + JSON.stringify(survey.data));\n}\n\nvar survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").Survey({\n    model: survey,\n    onComplete: sendDataToServer\n});",
      "readOnly": true,
      "rows": 10
     }
    ]
   }
  ],
  "showNavigationButtons": "none"
};