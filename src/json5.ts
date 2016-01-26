// This file is based on JSON5, http://json5.org/
// The modification for getting object and properties location 'at' were maden.

module SurveyEditor {
    export class SurveyJSON5 {
        public static positionName = "pos";
        private endAt: number;
        private at: number;     // The index of the current character
        private ch: any;     // The current character
        private escapee = {
            "'": "'",
            '"': '"',
            '\\': '\\',
            '/': '/',
            '\n': '',       // Replace escaped newlines in strings w/ empty string
            b: '\b',
            f: '\f',
            n: '\n',
            r: '\r',
            t: '\t'
        };
        private ws = [
            ' ',
            '\t',
            '\r',
            '\n',
            '\v',
            '\f',
            '\xA0',
            '\uFEFF'
        ];
        private text: string;
        private parseType: number; // 0 - stadard, 1 - get information about objects, 2 - get information about all properties
        constructor(parseType: number = 0) {
            this.parseType = parseType;
        }
        public parse(source: any, reviver: any = null, startFrom: number = 0, endAt: number = -1): any {
            var result;

            this.text = String(source);
            this.at = startFrom;
            this.endAt = endAt;
            this.ch = ' ';
            result = this.value();
            this.white();
            if (this.ch) {
                this.error("Syntax error");
            }

            // If there is a reviver function, we recursively walk the new structure,
            // passing each name/value pair to the reviver function for possible
            // transformation, starting with a temporary root object that holds the result
            // in an empty key. If there is not a reviver function, we simply return the
            // result.

            return typeof reviver === 'function' ? (function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            } ({ '': result }, '')) : result;
        }
        private error(m: string) {
            // Call error when something is wrong.
            var error = new SyntaxError();
            error.message = m;
            error["at"] = this.at;
            throw error;
        }
        private next(c: any = null) {
            // If a c parameter is provided, verify that it matches the current character.
            if (c && c !== this.ch) {
                this.error("Expected '" + c + "' instead of '" + this.ch + "'");
            }
            // Get the this.next character. When there are no more characters,
            // return the empty string.
            this.ch = this.chartAt();
            this.at += 1;
            return this.ch;
        }
        private peek() {
            // Get the this.next character without consuming it or
            // assigning it to the this.ch varaible.
            return this.chartAt();
        }
        private chartAt() {
            if (this.endAt > -1 && this.at >= this.endAt) return '';
            return this.text.charAt(this.at);
        }
        private identifier() {
            // Parse an identifier. Normally, reserved words are disallowed here, but we
            // only use this for unquoted object keys, where reserved words are allowed,
            // so we don't check for those here. References:
            // - http://es5.github.com/#x7.6
            // - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
            // - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
            // TODO Identifiers can have Unicode "letters" in them; add support for those.
            var key = this.ch;

            // Identifiers must start with a letter, _ or $.
            if ((this.ch !== '_' && this.ch !== '$') &&
                (this.ch < 'a' || this.ch > 'z') &&
                (this.ch < 'A' || this.ch > 'Z')) {
                this.error("Bad identifier");
            }

            // Subsequent characters can contain digits.
            while (this.next() && (
                this.ch === '_' || this.ch === '$' ||
                (this.ch >= 'a' && this.ch <= 'z') ||
                (this.ch >= 'A' && this.ch <= 'Z') ||
                (this.ch >= '0' && this.ch <= '9'))) {
                key += this.ch;
            }

            return key;
        }
        private number() {

            // Parse a number value.

            var number,
                sign = '',
                string = '',
                base = 10;

            if (this.ch === '-' || this.ch === '+') {
                sign = this.ch;
                this.next(this.ch);
            }

            // support for Infinity (could tweak to allow other words):
            if (this.ch === 'I') {
                number = this.word();
                if (typeof number !== 'number' || isNaN(number)) {
                    this.error('Unexpected word for number');
                }
                return (sign === '-') ? -number : number;
            }

            // support for NaN
            if (this.ch === 'N') {
                number = this.word();
                if (!isNaN(number)) {
                    this.error('expected word to be NaN');
                }
                // ignore sign as -NaN also is NaN
                return number;
            }

            if (this.ch === '0') {
                string += this.ch;
                this.next();
                if (this.ch === 'x' || this.ch === 'X') {
                    string += this.ch;
                    this.next();
                    base = 16;
                } else if (this.ch >= '0' && this.ch <= '9') {
                    this.error('Octal literal');
                }
            }

            switch (base) {
                case 10:
                    while (this.ch >= '0' && this.ch <= '9') {
                        string += this.ch;
                        this.next();
                    }
                    if (this.ch === '.') {
                        string += '.';
                        while (this.next() && this.ch >= '0' && this.ch <= '9') {
                            string += this.ch;
                        }
                    }
                    if (this.ch === 'e' || this.ch === 'E') {
                        string += this.ch;
                        this.next();
                        if (this.ch === '-' || this.ch === '+') {
                            string += this.ch;
                            this.next();
                        }
                        while (this.ch >= '0' && this.ch <= '9') {
                            string += this.ch;
                            this.next();
                        }
                    }
                    break;
                case 16:
                    while (this.ch >= '0' && this.ch <= '9' || this.ch >= 'A' && this.ch <= 'F' || this.ch >= 'a' && this.ch <= 'f') {
                        string += this.ch;
                        this.next();
                    }
                    break;
            }

            if (sign === '-') {
                number = -string;
            } else {
                number = +string;
            }

            if (!isFinite(number)) {
                this.error("Bad number");
            } else {
                return number;
            }
        }
        private string() {

            // Parse a string value.

            var hex,
                i,
                string = '',
                delim,      // double quote or single quote
                uffff;

            // When parsing for string values, we must look for ' or " and \ characters.

            if (this.ch === '"' || this.ch === "'") {
                delim = this.ch;
                while (this.next()) {
                    if (this.ch === delim) {
                        this.next();
                        return string;
                    } else if (this.ch === '\\') {
                        this.next();
                        if (this.ch === 'u') {
                            uffff = 0;
                            for (i = 0; i < 4; i += 1) {
                                hex = parseInt(this.next(), 16);
                                if (!isFinite(hex)) {
                                    break;
                                }
                                uffff = uffff * 16 + hex;
                            }
                            string += String.fromCharCode(uffff);
                        } else if (this.ch === '\r') {
                            if (this.peek() === '\n') {
                                this.next();
                            }
                        } else if (typeof this.escapee[this.ch] === 'string') {
                            string += this.escapee[this.ch];
                        } else {
                            break;
                        }
                    } else if (this.ch === '\n') {
                        // unescaped newlines are invalid; see:
                        // https://github.com/aseemk/json5/issues/24
                        // TODO this feels special-cased; are there other
                        // invalid unescaped chars?
                        break;
                    } else {
                        string += this.ch;
                    }
                }
            }
            this.error("Bad string");
        }
        private inlineComment() {

            // Skip an inline comment, assuming this is one. The current character should
            // be the second / character in the // pair that begins this inline comment.
            // To finish the inline comment, we look for a newline or the end of the text.

            if (this.ch !== '/') {
                this.error("Not an inline comment");
            }

            do {
                this.next();
                if (this.ch === '\n' || this.ch === '\r') {
                    this.next();
                    return;
                }
            } while (this.ch);
        }
        private blockComment() {

            // Skip a block comment, assuming this is one. The current character should be
            // the * character in the /* pair that begins this block comment.
            // To finish the block comment, we look for an ending */ pair of characters,
            // but we also watch for the end of text before the comment is terminated.

            if (this.ch !== '*') {
                this.error("Not a block comment");
            }

            do {
                this.next();
                while (this.ch === '*') {
                    this.next('*');
                    if (this.ch === '/') {
                        this.next('/');
                        return;
                    }
                }
            } while (this.ch);

            this.error("Unterminated block comment");
        }
        private comment() {

            // Skip a comment, whether inline or block-level, assuming this is one.
            // Comments always begin with a / character.

            if (this.ch !== '/') {
                this.error("Not a comment");
            }

            this.next('/');

            if (this.ch === '/') {
                this.inlineComment();
            } else if (this.ch === '*') {
                this.blockComment();
            } else {
                this.error("Unrecognized comment");
            }
        }
        private white() {

            // Skip whitespace and comments.
            // Note that we're detecting comments by only a single / character.
            // This works since regular expressions are not valid JSON(5), but this will
            // break if there are other valid values that begin with a / character!

            while (this.ch) {
                if (this.ch === '/') {
                    this.comment();
                } else if (this.ws.indexOf(this.ch) >= 0) {
                    this.next();
                } else {
                    return;
                }
            }
        }
        private word(): any {

            // true, false, or null.

            switch (this.ch) {
                case 't':
                    this.next('t');
                    this.next('r');
                    this.next('u');
                    this.next('e');
                    return true;
                case 'f':
                    this.next('f');
                    this.next('a');
                    this.next('l');
                    this.next('s');
                    this.next('e');
                    return false;
                case 'n':
                    this.next('n');
                    this.next('u');
                    this.next('l');
                    this.next('l');
                    return null;
                case 'I':
                    this.next('I');
                    this.next('n');
                    this.next('f');
                    this.next('i');
                    this.next('n');
                    this.next('i');
                    this.next('t');
                    this.next('y');
                    return Infinity;
                case 'N':
                    this.next('N');
                    this.next('a');
                    this.next('N');
                    return NaN;
            }
            this.error("Unexpected '" + this.ch + "'");
        }
        private array() {

            // Parse an array value.

            var array = [];

            if (this.ch === '[') {
                this.next('[');
                this.white();
                while (this.ch) {
                    if (this.ch === ']') {
                        this.next(']');
                        return array;   // Potentially empty array
                    }
                    // ES5 allows omitting elements in arrays, e.g. [,] and
                    // [,null]. We don't allow this in JSON5.
                    if (this.ch === ',') {
                        this.error("Missing array element");
                    } else {
                        array.push(this.value());
                    }
                    this.white();
                    // If there's no comma after this value, this needs to
                    // be the end of the array.
                    if (this.ch !== ',') {
                        this.next(']');
                        return array;
                    }
                    this.next(',');
                    this.white();
                }
            }
            this.error("Bad array");
        }
        private object() {

            // Parse an object value.

            var key,
                start,
                isFirstProperty = true,
                object = {};
            if (this.parseType > 0) {
                object[SurveyJSON5.positionName] = { start: this.at - 1 };
            }
            if (this.ch === '{') {
                this.next('{');
                this.white();
                start = this.at - 1;
                while (this.ch) {
                    if (this.ch === '}') {
                        this.next('}');
                        return object;   // Potentially empty object
                    }

                    // Keys can be unquoted. If they are, they need to be
                    // valid JS identifiers.
                    if (this.ch === '"' || this.ch === "'") {
                        key = this.string();
                    } else {
                        key = this.identifier();
                    }

                    this.white();
                    if (this.parseType > 1) {
                        object[SurveyJSON5.positionName][key] = { start: start, valueStart: this.at };
                    }
                    this.next(':');
                    object[key] = this.value();
                    if (this.parseType > 1) {
                        start = this.at - 1;
                        object[SurveyJSON5.positionName][key].end = start;
                    }
                    this.white();
                    // If there's no comma after this pair, this needs to be
                    // the end of the object.
                    if (this.ch !== ',') {
                        if (this.parseType > 1) {
                            object[SurveyJSON5.positionName][key].end--;
                        }
                        this.next('}');
                        if (this.parseType > 0) {
                            object[SurveyJSON5.positionName].end = this.at - 1;
                        }
                        return object;
                    }
                    if (this.parseType > 1 && !isFirstProperty) {
                        object[SurveyJSON5.positionName][key].end --;
                    }
                    this.next(',');
                    this.white();
                    isFirstProperty = false;
                }
            }
            this.error("Bad object");
        }
        private value(): any {

            // Parse a JSON value. It could be an object, an array, a string, a number,
            // or a word.

            this.white();
            switch (this.ch) {
                case '{':
                    return this.object();
                case '[':
                    return this.array();
                case '"':
                case "'":
                    return this.string();
                case '-':
                case '+':
                case '.':
                    return this.number();
                default:
                    return this.ch >= '0' && this.ch <= '9' ? this.number() : this.word();
            }
        }
    }
}