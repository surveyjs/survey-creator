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
        getPropertyName: function (strName: string, local: string = null) {
            var obj = this.getProperty(strName, local);
            if (obj["name"]) return obj["name"];
            return obj;
        },
        getPropertyTitle: function (strName: string, local: string = null) {
            var obj = this.getProperty(strName, local);
            if (obj["title"]) return obj["title"];
            return "";
        },
        getProperty: function (strName: string, local: string = null) {
            var obj = this.getString("p." + strName, local);
            if (obj !== strName) return obj;
            var pos = strName.indexOf('_');
            if (pos < -1) return obj;
            strName = strName.substr(pos + 1);
            return this.getString("p." + strName, local);
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
            file: "File",
            html: "Html",
            matrix: "Matrix (single choice)",
            matrixdropdown: "Matrix (multiple choice)",
            matrixdynamic: "Matrix (dynamic rows)",
            multipletext: "Multiple Text",
            radiogroup: "Radiogroup",
            rating: "Rating",
            text: "Text"
        },
        //Strings in Editor
        ed: {
            newPageName: "page",
            newQuestionName: "question",
            testSurvey: "Test Survey",
            testSurveyAgain: "Test Survey Again",
            testSurveyWidth: "Survey width: ",
            embedSurvey: "Embed Survey",
            saveSurvey: "Save Survey",
            designer: "Designer",
            jsonEditor: "JSON Editor",
            undo: "Undo",
            redo: "Redo",
            options: "Options",
            generateValidJSON: "Generate Valid JSON",
            generateReadableJSON: "Generate Readable JSON",
            toolbox: "Toolbox",
            delSelObject: "Delete selected object",
            correctJSON: "Please correct JSON.",
            surveyResults: "Survey Result: "
        },
        //Property Editors
        pe: {
            apply: "Apply",
            reset: "Reset",
            close: "Close",
            delete: "Delete",
            addNew: "Add New",
            removeAll: "Remove All",
            edit: "Edit",

            value: "Value",
            text: "Text",
            required: "Required?",
            hasOther: "Has Other Item",
            name: "Name",
            title: "Title",
            cellType: "Cell Type",
            colCount: "Column Count",

            editProperty: "Edit property '{0}'",
            items: "[ Items: {0} ]",

            enterNewValue: "Please, enter the value.",
            noquestions: "There is no any question in the survey.",
            createtrigger: "Please create a trigger",
            triggerOn: "On ",
            triggerMakePagesVisible: "Make pages visible:",
            triggerMakeQuestionsVisible: "Make questions visible:",
            triggerCompleteText: "Complete the survey if succeed.",
            triggerNotSet: "The trigger is not set",
            triggerRunIf: "Run if",
            triggerSetToName: "Change value of: ",
            triggerSetValue: "to: ",
            triggerIsVariable: "Do not put the variable into the survey result.",
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
            knockout: "Use Knockout version",
            react: "Use React version",
            bootstrap: "For bootstrap framework",
            standard: "No bootstrap",
            showOnPage: "Show survey on a page",
            showInWindow: "Show survey in a window",
            loadFromServer: "Load Survey JSON from server",
            titleScript: "Scripts and styles",
            titleHtml: "HTML",
            titleJavaScript: "JavaScript"
        },
        //Properties
        p: {
            name: "name",
            title: { name: "title", title: "Leave it empty, if it is the same as 'Name'" },
            survey_title: { name: "title", title: "It will be shown on every page." },
            page_title: { name: "title", title: "Page title" }
        }
    }
    editorLocalization.locales["en"] = defaultStrings;
}