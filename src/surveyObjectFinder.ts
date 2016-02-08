module SurveyEditor {

    export class SurveyObjectFinder {
        public constructor(public source: Survey.Survey, public destination: Survey.Survey) {
        }
        public findObject(srcObj: any): Survey.Base {
            if (!srcObj) return null;
            var type = srcObj.getType();
            if (!type) return null;
            if (type == 'page') {
                return this.findPage(<Survey.Page>srcObj);
            }
            return this.findQuestion(<Survey.Question>srcObj);
        }
        private findPage(srcPage: Survey.Page): Survey.Page {
            var index = this.source.pages.indexOf(srcPage);
            return index > - 1 && index < this.destination.pages.length ? this.destination.pages[index] : null;
        }
        private findQuestion(srcQuestion: Survey.Question): Survey.Question {
            var index = this.source.getAllQuestions().indexOf(srcQuestion);
            var questions = this.destination.getAllQuestions();
            return index > - 1 && index < questions.length ? <Survey.Question>questions[index] : null;
        }
    }
}