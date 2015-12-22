var SurveyEditor;
(function (SurveyEditor_1) {
    var SurveyEditor = (function () {
        function SurveyEditor(renderedElement) {
            if (renderedElement === void 0) { renderedElement = null; }
            if (renderedElement) {
                this.render(renderedElement);
            }
        }
        Object.defineProperty(SurveyEditor.prototype, "survey", {
            get: function () {
                return this.surveyValue;
            },
            enumerable: true,
            configurable: true
        });
        SurveyEditor.prototype.render = function (element) {
            if (element === void 0) { element = null; }
            var self = this;
            if (element && typeof element == "string") {
                element = document.getElementById(element);
            }
            if (element) {
                this.renderedElement = element;
            }
            element = this.renderedElement;
            if (!element)
                return;
            element.innerHTML = templateEditor.ko.html;
            self.applyBinding();
        };
        SurveyEditor.prototype.applyBinding = function () {
            if (this.renderedElement == null)
                return;
            ko.cleanNode(this.renderedElement);
            ko.applyBindings(this, this.renderedElement);
            this.jsonEditor = ace.edit("surveyjsEditor");
            this.initJsonEditor();
            this.surveyValue = new Survey.Survey({ questions: [{ type: 'text', name: 'temp' }] }, "surveyjsExample");
        };
        SurveyEditor.prototype.initJsonEditor = function () {
            var self = this;
            this.jsonEditor.setTheme("ace/theme/monokai");
            this.jsonEditor.session.setMode("ace/mode/json");
            this.jsonEditor.setShowPrintMargin(false);
            this.jsonEditor.getSession().on("change", function () {
                self.onJsonEditorChanged();
            });
            this.jsonEditor.getSession().setUseWorker(true);
            this.jsonEditor.setValue("{ questions: [{ type: 'text', name: 'temp' }] }");
        };
        SurveyEditor.prototype.onJsonEditorChanged = function () {
            this.processJson(this.jsonEditor.getValue());
        };
        SurveyEditor.prototype.processJson = function (text) {
            this.jsonValue = null;
            var oldOnError = window.onerror;
            var jsonObj = null;
            var annotations = [];
            window.onerror = function (message, fileURL, lineNumber) {
                annotations.push({ row: lineNumber, column: 0, text: message, type: "error" });
            };
            try {
                eval("jsonObj = " + text);
            }
            catch (Error) {
                annotations.push({ row: 0, column: 0, text: Error.message, type: "error" });
            }
            window.onerror = oldOnError;
            if (annotations.length > 0) {
                this.jsonEditor.getSession().setAnnotations(annotations);
                return;
            }
            var srv = new Survey.Survey(jsonObj);
            if (srv.jsonErrors != null) {
                for (var i = 0; i < srv.jsonErrors.length; i++) {
                    var error = srv.jsonErrors[i];
                    annotations.push({ row: 0, column: 0, text: error.message + '\n' + error.description, type: "error" });
                }
            }
            this.jsonEditor.getSession().setAnnotations(annotations);
        };
        return SurveyEditor;
    })();
    SurveyEditor_1.SurveyEditor = SurveyEditor;
})(SurveyEditor || (SurveyEditor = {}));
