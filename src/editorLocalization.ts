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
        }
    }
    editorLocalization.locales["en"] = defaultStrings;
}