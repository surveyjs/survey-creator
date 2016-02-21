module SurveyEditor {

    export class SurveyObjectItem {
        public value: Survey.Base;
        public text: any;
    }

    export class SurveyObjects {
        public static intend: string = "...";
        surveyValue: Survey.Survey;

        constructor(public koObjects: any, public koSelected: any) {
        }
        public get survey(): Survey.Survey { return this.surveyValue; }
        public set survey(value: Survey.Survey) {
            if (this.survey == value) return;
            this.surveyValue = value;
            this.rebuild();
        }
        public addPage(page: Survey.Page) {
            var pageItem = this.createPage(page);
            var index = this.survey.pages.indexOf(page);
            if (index > 0) {
                var prevPage = this.survey.pages[index - 1];
                index = this.getItemIndex(prevPage) + 1;
                index += prevPage.questions.length;
            } else {
                index = 1; //0 - Survey
            }
            this.addItem(pageItem, index);
            index++;
            for (var i = 0; i < page.questions.length; i++) {
                var item = this.createQuestion(page.questions[i]);
                this.addItem(item, index + i);
            }
            this.koSelected(pageItem);
        }
        public addQuestion(page: Survey.Page, question: Survey.Question) {
            var index = this.getItemIndex(page);
            if (index < 0) return;
            var questionIndex = page.questions.indexOf(question) + 1;
            index += questionIndex;
            var item = this.createQuestion(question);
            this.addItem(item, index);
            this.koSelected(item);
        }
        public selectObject(obj: Survey.Base) {
            var objs = this.koObjects();
            for (var i = 0; i < objs.length; i++) {
                if (objs[i].value == obj) {
                    this.koSelected(objs[i]);
                    return;
                }
            }
        }
        public removeObject(obj: Survey.Base) {
            var index = this.getItemIndex(obj);
            if (index < 0) return;
            var countToRemove = 1;
            if (obj.getType() == 'page') {
                var page: Survey.Page = <Survey.Page>obj;
                countToRemove += page.questions.length;
            }
            this.koObjects.splice(index, countToRemove);
        }
        public nameChanged(obj: Survey.Base) {
            var index = this.getItemIndex(obj);
            if (index < 0) return;
            this.koObjects()[index].text(this.getText(obj));
        }
        private addItem(item: SurveyObjectItem, index: number) {
            if (index > this.koObjects().length) {
                this.koObjects.push(item);
            } else {
                this.koObjects.splice(index, 0, item);
            }
        }
        private rebuild() {
            var objs = [];
            if (this.survey == null) {
                this.koObjects(objs);
                this.koSelected(null);
                return;
            }
            objs.push(this.createItem(this.survey, "Survey"));
            for (var i = 0; i < this.survey.pages.length; i++) {
                var page = this.survey.pages[i];
                objs.push(this.createPage(page));
                for (var j = 0; j < page.questions.length; j++) {
                    objs.push(this.createQuestion(page.questions[j]));
                }
            }
            this.koObjects(objs);
            this.koSelected(this.survey);
        }
        private createPage(page: Survey.Page) {
            return this.createItem(page, this.getText(page));
        }
        private createQuestion(question: Survey.Question) {
            return this.createItem(question, this.getText(question));
        }
        private createItem(value: Survey.Base, text: string) {
            var item = new SurveyObjectItem();
            item.value = value;
            item.text = ko.observable(text);
            return item;
        }
        private getItemIndex(value: Survey.Base): number {
            var objs = this.koObjects();
            for (var i = 0; i < objs.length; i++) {
                if (objs[i].value == value) return i;
            }
            return -1;
        }
        private getText(obj: Survey.Base): string {
            var intend = SurveyObjects.intend;
            if (obj.getType() != "page") {
                intend += SurveyObjects.intend;
            }
            return intend + obj["name"];
        }
    }
}