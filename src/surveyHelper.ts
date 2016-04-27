module SurveyEditor {
    export enum ObjType { Unknown, Survey, Page, Question }
    export class SurveyHelper {
        public static getNewPageName(objs: Array<any>) {
            return SurveyHelper.getNewName(objs, editorLocalization.getString("ed.newPageName"));
        }
        public static getNewQuestionName(objs: Array<any>) {
            return SurveyHelper.getNewName(objs, editorLocalization.getString("ed.newQuestionName"));
        }
        public static getNewName(objs: Array<any>, baseName: string): string {
            var hash = {};
            for (var i = 0; i < objs.length; i++) {
                hash[objs[i].name] = true;
            }
            var num = 1;
            while (true) {
                if (!hash[baseName + num.toString()]) break;
                num++;
            }
            return baseName + num.toString();
        }
        public static getObjectType(obj: any): ObjType {
            if (!obj || !obj["getType"]) return ObjType.Unknown;
            if (obj.getType() == "page") return ObjType.Page;
            if (obj.getType() == "survey") return ObjType.Survey;
            if (obj["koValue"]) return ObjType.Question;
            return ObjType.Unknown;
        }
        public static getObjectName(obj: any): string {
            if (obj["name"]) return obj["name"];
            var objType = SurveyHelper.getObjectType(obj);
            if (objType != ObjType.Page) return "";
            var data = <Survey.Survey>(<Survey.Page>obj).data;
            var index = data.pages.indexOf(<Survey.Page>obj);
            return "[Page " + (index + 1) + "]";
        }
    }
}