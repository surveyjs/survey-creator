module SurveyEditor {
    export class TextParserPropery {
        isFound: boolean;
        start: number;
        end: number;
        valueStart: number;
    }
    export class SurveyTextParser {
        constructor(public text: string) { }
        public getPropertyInfo(start: number, end: number, name: string): TextParserPropery {
            var result = new TextParserPropery();
            var pos = this.text.indexOf(name, start);
            if (pos < 0 && pos >= end) return result;
            result.isFound = pos >= start;
            if (!result.isFound) return result;
            result.start = this.findPropertyStart(start, pos - 1);
            result.valueStart = this.findValueStart(end, pos + name.length);
            result.end = this.findPropertyEnd(end, result.valueStart);
            return result;
        }
        private findPropertyStart(start: number, cur: number): number {
            while (cur > start + 1) {
                var ch = this.text[cur];
                if (ch == ',') return cur;
                cur--;
            }
            return cur;
        }
        private findValueStart(end: number, cur: number): number {
            while (cur < end - 1) {
                var ch = this.text[cur];
                if (ch == ':') return cur + 1;
                cur++;
            }
            return cur;
        }
        private findPropertyEnd(end: number, cur: number): number {
            while (cur < end) {
                var ch = this.text[cur];
                if (ch == ',' || ch == '}') return cur - 1;
                cur++;
            }
            return cur - 1;
        }
    }
}