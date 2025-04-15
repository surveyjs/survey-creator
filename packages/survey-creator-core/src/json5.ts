// This file is based on JSON5, http://json5.org/
// The modification for getting object and properties location 'at' were maden.

export class SurveyJSON5 {
  public static positionName = "pos";
  private static escapee = {
    "'": "'",
    '"': '"',
    "\\": "\\",
    "/": "/",
    "\n": "", // Replace escaped newlines in strings w/ empty string
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t"
  };
  private static ws = [" ", "\t", "\r", "\n", "\v", "\f", "\xA0", "\uFEFF"];
  private endAt: number;
  private at: number; // The index of the current character
  private ch: any; // The current character
  private text: string;
  private parseType: number; // 0 - stadard, 1 - get information about objects, 2 - get information about all properties
  constructor(parseType: number = 0) {
    this.parseType = parseType;
  }
  public parse(
    source: any,
    reviver: any = null,
    startFrom: number = 0,
    endAt: number = -1
  ): any {
    var result;

    this.text = String(source);
    this.at = startFrom;
    this.endAt = endAt;
    this.ch = " ";
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

    return typeof reviver === "function"
      ? (function walk(holder, key) {
        var k,
          v,
          value = holder[key];
        if (value && typeof value === "object") {
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
      })({ "": result }, "")
      : result;
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
    if (this.endAt > -1 && this.at >= this.endAt) return "";
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
    if (
      this.ch !== "_" &&
      this.ch !== "$" &&
      (this.ch < "a" || this.ch > "z") &&
      (this.ch < "A" || this.ch > "Z")
    ) {
      this.error("Bad identifier");
    }

    // Subsequent characters can contain digits.
    while(
      this.next() &&
      (this.ch === "_" ||
        this.ch === "$" ||
        (this.ch >= "a" && this.ch <= "z") ||
        (this.ch >= "A" && this.ch <= "Z") ||
        (this.ch >= "0" && this.ch <= "9"))
    ) {
      key += this.ch;
    }

    return key;
  }
  private number() {
    // Parse a number value.

    var number,
      sign = "",
      string = "",
      base = 10;

    if (this.ch === "-" || this.ch === "+") {
      sign = this.ch;
      this.next(this.ch);
    }

    // support for Infinity (could tweak to allow other words):
    if (this.ch === "I") {
      number = this.word();
      if (typeof number !== "number" || isNaN(number)) {
        this.error("Unexpected word for number");
      }
      return sign === "-" ? -number : number;
    }

    // support for NaN
    if (this.ch === "N") {
      number = this.word();
      if (!isNaN(number)) {
        this.error("expected word to be NaN");
      }
      // ignore sign as -NaN also is NaN
      return number;
    }

    if (this.ch === "0") {
      string += this.ch;
      this.next();
      if (this.ch === "x" || this.ch === "X") {
        string += this.ch;
        this.next();
        base = 16;
      } else if (this.ch >= "0" && this.ch <= "9") {
        this.error("Octal literal");
      }
    }

    switch(base) {
      case 10:
        while(this.ch >= "0" && this.ch <= "9") {
          string += this.ch;
          this.next();
        }
        if (this.ch === ".") {
          string += ".";
          while(this.next() && this.ch >= "0" && this.ch <= "9") {
            string += this.ch;
          }
        }
        if (this.ch === "e" || this.ch === "E") {
          string += this.ch;
          this.next();
          if (this.ch === "-" || this.ch === "+") {
            string += this.ch;
            this.next();
          }
          while(this.ch >= "0" && this.ch <= "9") {
            string += this.ch;
            this.next();
          }
        }
        break;
      case 16:
        while(
          (this.ch >= "0" && this.ch <= "9") ||
          (this.ch >= "A" && this.ch <= "F") ||
          (this.ch >= "a" && this.ch <= "f")
        ) {
          string += this.ch;
          this.next();
        }
        break;
    }

    if (sign === "-") {
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
      string = "",
      delim, // double quote or single quote
      uffff;

    // When parsing for string values, we must look for ' or " and \ characters.

    if (this.ch === '"' || this.ch === "'") {
      delim = this.ch;
      while(this.next()) {
        if (this.ch === delim) {
          this.next();
          return string;
        } else if (this.ch === "\\") {
          this.next();
          if (this.ch === "u") {
            uffff = 0;
            for (i = 0; i < 4; i += 1) {
              hex = parseInt(this.next(), 16);
              if (!isFinite(hex)) {
                break;
              }
              uffff = uffff * 16 + hex;
            }
            string += String.fromCharCode(uffff);
          } else if (this.ch === "\r") {
            if (this.peek() === "\n") {
              this.next();
            }
          } else if (typeof SurveyJSON5.escapee[this.ch] === "string") {
            string += SurveyJSON5.escapee[this.ch];
          } else {
            break;
          }
        } else if (this.ch === "\n") {
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

    if (this.ch !== "/") {
      this.error("Not an inline comment");
    }

    do {
      this.next();
      if (this.ch === "\n" || this.ch === "\r") {
        this.next();
        return;
      }
    } while(this.ch);
  }
  private blockComment() {
    // Skip a block comment, assuming this is one. The current character should be
    // the * character in the /* pair that begins this block comment.
    // To finish the block comment, we look for an ending */ pair of characters,
    // but we also watch for the end of text before the comment is terminated.

    if (this.ch !== "*") {
      this.error("Not a block comment");
    }

    do {
      this.next();
      while(this.ch === "*") {
        this.next("*");
        if (this.ch === "/") {
          this.next("/");
          return;
        }
      }
    } while(this.ch);

    this.error("Unterminated block comment");
  }
  private comment() {
    // Skip a comment, whether inline or block-level, assuming this is one.
    // Comments always begin with a / character.

    if (this.ch !== "/") {
      this.error("Not a comment");
    }

    this.next("/");

    if (this.ch === "/") {
      this.inlineComment();
    } else if (this.ch === "*") {
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

    while(this.ch) {
      if (this.ch === "/") {
        this.comment();
      } else if (SurveyJSON5.ws.indexOf(this.ch) >= 0) {
        this.next();
      } else {
        return;
      }
    }
  }
  private word(): any {
    // true, false, or null.

    switch(this.ch) {
      case "t":
        this.next("t");
        this.next("r");
        this.next("u");
        this.next("e");
        return true;
      case "f":
        this.next("f");
        this.next("a");
        this.next("l");
        this.next("s");
        this.next("e");
        return false;
      case "n":
        this.next("n");
        this.next("u");
        this.next("l");
        this.next("l");
        return null;
      case "I":
        this.next("I");
        this.next("n");
        this.next("f");
        this.next("i");
        this.next("n");
        this.next("i");
        this.next("t");
        this.next("y");
        return Infinity;
      case "N":
        this.next("N");
        this.next("a");
        this.next("N");
        return NaN;
    }
    this.error("Unexpected '" + this.ch + "'");
  }
  private array() {
    // Parse an array value.

    var array = [];

    if (this.ch === "[") {
      this.next("[");
      this.white();
      while(this.ch) {
        if (this.ch === "]") {
          this.next("]");
          return array; // Potentially empty array
        }
        // ES5 allows omitting elements in arrays, e.g. [,] and
        // [,null]. We don't allow this in JSON5.
        if (this.ch === ",") {
          this.error("Missing array element");
        } else {
          array.push(this.value());
        }
        this.white();
        // If there's no comma after this value, this needs to
        // be the end of the array.
        if (this.ch !== ",") {
          this.next("]");
          return array;
        }
        this.next(",");
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
    if (this.ch === "{") {
      this.next("{");
      this.white();
      start = this.at - 1;
      while(this.ch) {
        if (this.ch === "}") {
          if (this.parseType > 0) {
            object[SurveyJSON5.positionName].end = start;
          }
          this.next("}");
          return object; // Potentially empty object
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
          object[SurveyJSON5.positionName][key] = {
            start: start,
            valueStart: this.at
          };
        }
        this.next(":");
        object[key] = this.value();
        if (this.parseType > 1) {
          start = this.at - 1;
          object[SurveyJSON5.positionName][key].valueEnd = start;
          object[SurveyJSON5.positionName][key].end = start;
        }
        this.white();
        // If there's no comma after this pair, this needs to be
        // the end of the object.
        if (this.ch !== ",") {
          if (this.parseType > 1) {
            object[SurveyJSON5.positionName][key].valueEnd--;
            object[SurveyJSON5.positionName][key].end--;
          }
          if (this.parseType > 0) {
            object[SurveyJSON5.positionName].end = this.at - 1;
          }
          this.next("}");
          return object;
        }
        if (this.parseType > 1) {
          object[SurveyJSON5.positionName][key].valueEnd--;
          if (!isFirstProperty) {
            object[SurveyJSON5.positionName][key].end--;
          }
        }
        this.next(",");
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
    switch(this.ch) {
      case "{":
        return this.object();
      case "[":
        return this.array();
      case '"':
      case "'":
        return this.string();
      case "-":
      case "+":
      case ".":
        return this.number();
      default:
        return this.ch >= "0" && this.ch <= "9" ? this.number() : this.word();
    }
  }

  private replacer: any;
  private indentStr: string;
  private objStack;

  public stringify(obj: any, replacer: any = null, space: any = null) {
    if (
      replacer &&
      (typeof replacer !== "function" && !this.isArray(replacer))
    ) {
      throw new Error("Replacer must be a function or an array");
    }
    this.replacer = replacer;
    this.indentStr = this.getIndent(space);
    this.objStack = [];
    // special case...when undefined is used inside of
    // a compound object/array, return null.
    // but when top-level, return undefined
    var topLevelHolder = { "": obj };
    if (obj === undefined) {
      return this.getReplacedValueOrUndefined(topLevelHolder, "", true);
    }
    return this.internalStringify(topLevelHolder, "", true);
  }
  private getIndent(space: any): string {
    if (space) {
      if (typeof space === "string") {
        return space;
      } else if (typeof space === "number" && space >= 0) {
        return this.makeIndent(" ", space, true);
      }
    }
    return "";
  }
  private getReplacedValueOrUndefined(
    holder: any,
    key: any,
    isTopLevel: boolean
  ) {
    var value = holder[key];

    // Replace the value with its toJSON value first, if possible
    if (value && value.toJSON && typeof value.toJSON === "function") {
      value = value.toJSON();
    }

    // If the user-supplied replacer if a function, call it. If its an array, check objects' string keys for
    // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
    if (typeof this.replacer === "function") {
      return this.replacer.call(holder, key, value);
    } else if (this.replacer) {
      if (
        isTopLevel ||
        this.isArray(holder) ||
        this.replacer.indexOf(key) >= 0
      ) {
        return value;
      } else {
        return undefined;
      }
    } else {
      return value;
    }
  }

  private isWordChar(char: any): boolean {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9") ||
      char === "_" ||
      char === "$"
    );
  }

  private isWordStart(char: any): boolean {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      char === "_" ||
      char === "$"
    );
  }

  private isWord(key: any): boolean {
    if (typeof key !== "string") {
      return false;
    }
    if (!this.isWordStart(key[0])) {
      return false;
    }
    var i = 1,
      length = key.length;
    while(i < length) {
      if (!this.isWordChar(key[i])) {
        return false;
      }
      i++;
    }
    return true;
  }
  // polyfills
  private isArray(obj: any): boolean {
    if (Array.isArray) {
      return Array.isArray(obj);
    } else {
      return Object.prototype.toString.call(obj) === "[object Array]";
    }
  }

  private isDate(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Date]";
  }

  private isNaN(val: any): boolean {
    return typeof val === "number" && val !== val;
  }

  private checkForCircular(obj: any) {
    for (var i = 0; i < this.objStack.length; i++) {
      if (this.objStack[i] === obj) {
        throw new TypeError("Converting circular structure to JSON");
      }
    }
  }
  private makeIndent(str: string, num: number, noNewLine: boolean = false) {
    if (!str) {
      return "";
    }
    // indentation no more than 10 chars
    if (str.length > 10) {
      str = str.substring(0, 10);
    }

    var indent = noNewLine ? "" : "\n";
    for (var i = 0; i < num; i++) {
      indent += str;
    }

    return indent;
  }

  // Copied from Crokford's implementation of JSON
  // See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
  // Begin
  // eslint-disable-next-line
  private static cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  // eslint-disable-next-line
  private static escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  private static meta = {
    // table of character substitutions
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  };
  private escapeString(str: string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    SurveyJSON5.escapable.lastIndex = 0;
    return SurveyJSON5.escapable.test(str)
      ? '"' +
          str.replace(SurveyJSON5.escapable, function(a) {
            var c = SurveyJSON5.meta[a];
            return typeof c === "string"
              ? c
              : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          }) +
          '"'
      : '"' + str + '"';
  }
  // End

  private internalStringify(holder: any, key: any, isTopLevel: boolean) {
    var buffer, res;

    // Replace the value, if necessary
    var obj_part = this.getReplacedValueOrUndefined(holder, key, isTopLevel);

    if (obj_part && !this.isDate(obj_part)) {
      // unbox objects
      // don't unbox dates, since will turn it into number
      obj_part = obj_part.valueOf();
    }
    switch(typeof obj_part) {
      case "boolean":
        return obj_part.toString();

      case "number":
        if (isNaN(obj_part) || !isFinite(obj_part)) {
          return "null";
        }
        return obj_part.toString();

      case "string":
        return this.escapeString(obj_part.toString());

      case "object":
        if (obj_part === null) {
          return "null";
        } else if (this.isArray(obj_part)) {
          this.checkForCircular(obj_part);
          buffer = "[";
          this.objStack.push(obj_part);

          for (var i = 0; i < obj_part.length; i++) {
            res = this.internalStringify(obj_part, i, false);
            buffer += this.makeIndent(this.indentStr, this.objStack.length);
            if (res === null || typeof res === "undefined") {
              buffer += "null";
            } else {
              buffer += res;
            }
            if (i < obj_part.length - 1) {
              buffer += ",";
            } else if (this.indentStr) {
              buffer += "\n";
            }
          }
          this.objStack.pop();
          buffer +=
            this.makeIndent(this.indentStr, this.objStack.length, true) + "]";
        } else {
          this.checkForCircular(obj_part);
          buffer = "{";
          var nonEmpty = false;
          this.objStack.push(obj_part);
          for (var prop in obj_part) {
            if (obj_part.hasOwnProperty(prop)) {
              var value = this.internalStringify(obj_part, prop, false);
              isTopLevel = false;
              if (typeof value !== "undefined" && value !== null) {
                buffer += this.makeIndent(this.indentStr, this.objStack.length);
                nonEmpty = true;
                var propKey = this.isWord(prop)
                  ? prop
                  : this.escapeString(prop);
                buffer +=
                  propKey + ":" + (this.indentStr ? " " : "") + value + ",";
              }
            }
          }
          this.objStack.pop();
          if (nonEmpty) {
            buffer =
              buffer.substring(0, buffer.length - 1) +
              this.makeIndent(this.indentStr, this.objStack.length) +
              "}";
          } else {
            buffer = "{}";
          }
        }
        return buffer;
      default:
        // functions and undefined should be ignored
        return undefined;
    }
  }
}
