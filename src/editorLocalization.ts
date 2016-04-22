module SurveyEditor {
    export var editorLocalization = {
        currentLocale: "",
        locales: {},
        getString: function (strName: string, locale: string = null) {
            if (!locale) locale = this.currentLocale;
            var loc = locale ? this.locales[this.currentLocale] : defaultStrings;
            if (!loc) loc = defaultStrings;
            var path = strName.split('.');
            var obj = loc;
            for (var i = 0; i < path.length; i++) {
                obj = obj[path[i]];
                if (!obj) {
                    if (loc === defaultStrings) return path[i];
                    return this.getString(strName, "en");
                }
            }
            return obj;
        },
        getLocales: function (): Array<string> {
            var res = [];
            res.push("");
            for (var key in this.locales) {
                res.push(key);
            }
            return res;
        }
    };
    export var defaultStrings = {
        //survey templates
        survey: {
            dropQuestion: "Please drop a question here.",
            copy: "Copy"
        },
        //questionTypes
        qt: {
            checkbox: "Checkbox",
            comment: "Comment",
            dropdown: "Dropdown",
            html: "Html",
            matrix: "Matrix (single choice)",
            matrixdropdown: "Matrix (multiple choice)",
            multipletext: "Multiple Text",
            radiogroup: "Radiogroup",
            rating: "Rating",
            text: "Text"
        },
        //Strings in Editor
        ed: {
            runSurvey: " Run Survey",
            embedSurvey: "Embed Survey",
            saveSurvey: "Save Survey",
            designer: "Designer",
            jsonEditor: "JSON Editor",
            toolbox: "Toolbox",
            delSelObject: "Delete selected object",
            correctJSON: "Please correct JSON.",
            surveyResults: "Survey Result: "
        },
        //Property Editors
        pe: {
            apply: "Apply",
            close: "Close",
            delete: "Delete",
            addNew: "Add New",
            removeAll: "Remove All",
            edit: "Edit",

            value: "Value",
            text: "Text",
            choices: "Choices",
            name: "Name",
            title: "Title",

            editProperty: "Edit property '{0}'",
            items: "[ Items: {0} ]",

            enterNewValue: "Please, enter the value.",
            noquestions: "There is no any question in the survey.",
            createtrigger: "Please create a trigger",
            triggerOn: "On ",
            triggerMakePagesVisible: "Make pages visible:",
            triggerMakeQuestionsVisible: "Make questions visible:",
            triggerNotSet: "The trigger is not set",
            triggerRunIf: "Run if",
            verbChangeType: "Change type ",
            verbChangePage: "Change page "
        },
        //Operators
        op: {
            empty: "is empty",
            notempty: "is not empty",
            equal: "equals",
            notequal: "not equals",
            contains: "contains", 
            notcontains: "not contains",
            greater: "greater", 
            less: "less",
            greaterorequal: "greater or equals", 
            lessorequal: "Less or Equals"
        },
        //Embed window
        ew: {
            bootstrap: "For bootstrap framework",
            standard: "No bootstrap",
            showOnPage: "Show survey on a page",
            showInWindow: "Show survey in a window",
            loadFromServer: "Load Survey JSON from server",
            titleScript: "Scripts and styles",
            titleHtml: "HTML",
            titleJavaScript: "JavaScript"
        }
    }
    editorLocalization.locales["en"] = defaultStrings;
}