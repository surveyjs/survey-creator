/*!
* surveyjs - Survey JavaScript library v0.10.2
* (c) Andrew Telnov - http://surveyjs.org/
* License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("knockout"));
	else
		root["Survey"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_36__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.__extends = exports.SurveyTemplateText = exports.SurveyWindow = exports.QuestionText = exports.QuestionRating = exports.QuestionRadiogroup = exports.QuestionMultipleText = exports.QuestionMultipleTextImplementor = exports.MultipleTextItem = exports.QuestionMatrixDynamic = exports.QuestionMatrixDynamicImplementor = exports.QuestionMatrixDropdown = exports.QuestionMatrix = exports.MatrixRow = exports.QuestionHtml = exports.QuestionFile = exports.QuestionDropdown = exports.QuestionComment = exports.QuestionCheckbox = exports.QuestionCheckboxBaseImplementor = exports.QuestionSelectBaseImplementor = exports.QuestionImplementor = exports.QuestionImplementorBase = exports.Page = exports.QuestionRow = exports.Survey = exports.defaultStandardCss = undefined;
	
	var _model = __webpack_require__(1);
	
	Object.keys(_model).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _model[key];
	    }
	  });
	});
	
	var _cssstandard = __webpack_require__(34);
	
	Object.defineProperty(exports, "defaultStandardCss", {
	  enumerable: true,
	  get: function get() {
	    return _cssstandard.defaultStandardCss;
	  }
	});
	
	var _kosurvey = __webpack_require__(35);
	
	Object.defineProperty(exports, "Survey", {
	  enumerable: true,
	  get: function get() {
	    return _kosurvey.Survey;
	  }
	});
	
	var _kopage = __webpack_require__(37);
	
	Object.defineProperty(exports, "QuestionRow", {
	  enumerable: true,
	  get: function get() {
	    return _kopage.QuestionRow;
	  }
	});
	Object.defineProperty(exports, "Page", {
	  enumerable: true,
	  get: function get() {
	    return _kopage.Page;
	  }
	});
	
	var _koquestionbase = __webpack_require__(39);
	
	Object.defineProperty(exports, "QuestionImplementorBase", {
	  enumerable: true,
	  get: function get() {
	    return _koquestionbase.QuestionImplementorBase;
	  }
	});
	
	var _koquestion = __webpack_require__(40);
	
	Object.defineProperty(exports, "QuestionImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion.QuestionImplementor;
	  }
	});
	
	var _koquestion_baseselect = __webpack_require__(41);
	
	Object.defineProperty(exports, "QuestionSelectBaseImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_baseselect.QuestionSelectBaseImplementor;
	  }
	});
	Object.defineProperty(exports, "QuestionCheckboxBaseImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_baseselect.QuestionCheckboxBaseImplementor;
	  }
	});
	
	var _koquestion_checkbox = __webpack_require__(42);
	
	Object.defineProperty(exports, "QuestionCheckbox", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_checkbox.QuestionCheckbox;
	  }
	});
	
	var _koquestion_comment = __webpack_require__(43);
	
	Object.defineProperty(exports, "QuestionComment", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_comment.QuestionComment;
	  }
	});
	
	var _koquestion_dropdown = __webpack_require__(44);
	
	Object.defineProperty(exports, "QuestionDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_dropdown.QuestionDropdown;
	  }
	});
	
	var _koquestion_file = __webpack_require__(45);
	
	Object.defineProperty(exports, "QuestionFile", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_file.QuestionFile;
	  }
	});
	
	var _koquestion_html = __webpack_require__(46);
	
	Object.defineProperty(exports, "QuestionHtml", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_html.QuestionHtml;
	  }
	});
	
	var _koquestion_matrix = __webpack_require__(47);
	
	Object.defineProperty(exports, "MatrixRow", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrix.MatrixRow;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrix", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrix.QuestionMatrix;
	  }
	});
	
	var _koquestion_matrixdropdown = __webpack_require__(48);
	
	Object.defineProperty(exports, "QuestionMatrixDropdown", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdropdown.QuestionMatrixDropdown;
	  }
	});
	
	var _koquestion_matrixdynamic = __webpack_require__(49);
	
	Object.defineProperty(exports, "QuestionMatrixDynamicImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdynamic.QuestionMatrixDynamicImplementor;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDynamic", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_matrixdynamic.QuestionMatrixDynamic;
	  }
	});
	
	var _koquestion_multipletext = __webpack_require__(50);
	
	Object.defineProperty(exports, "MultipleTextItem", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_multipletext.MultipleTextItem;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleTextImplementor", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_multipletext.QuestionMultipleTextImplementor;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleText", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_multipletext.QuestionMultipleText;
	  }
	});
	
	var _koquestion_radiogroup = __webpack_require__(51);
	
	Object.defineProperty(exports, "QuestionRadiogroup", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_radiogroup.QuestionRadiogroup;
	  }
	});
	
	var _koquestion_rating = __webpack_require__(52);
	
	Object.defineProperty(exports, "QuestionRating", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_rating.QuestionRating;
	  }
	});
	
	var _koquestion_text = __webpack_require__(53);
	
	Object.defineProperty(exports, "QuestionText", {
	  enumerable: true,
	  get: function get() {
	    return _koquestion_text.QuestionText;
	  }
	});
	
	var _koSurveyWindow = __webpack_require__(54);
	
	Object.defineProperty(exports, "SurveyWindow", {
	  enumerable: true,
	  get: function get() {
	    return _koSurveyWindow.SurveyWindow;
	  }
	});
	
	var _templateText = __webpack_require__(56);
	
	Object.defineProperty(exports, "SurveyTemplateText", {
	  enumerable: true,
	  get: function get() {
	    return _templateText.SurveyTemplateText;
	  }
	});
	
	var _extends = __webpack_require__(3);
	
	Object.defineProperty(exports, "__extends", {
	  enumerable: true,
	  get: function get() {
	    return _extends.__extends;
	  }
	});
	
	__webpack_require__(57);
	
	__webpack_require__(67);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _validator = __webpack_require__(2);
	
	Object.defineProperty(exports, "AnswerCountValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.AnswerCountValidator;
	  }
	});
	Object.defineProperty(exports, "EmailValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.EmailValidator;
	  }
	});
	Object.defineProperty(exports, "NumericValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.NumericValidator;
	  }
	});
	Object.defineProperty(exports, "RegexValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.RegexValidator;
	  }
	});
	Object.defineProperty(exports, "SurveyValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.SurveyValidator;
	  }
	});
	Object.defineProperty(exports, "TextValidator", {
	  enumerable: true,
	  get: function get() {
	    return _validator.TextValidator;
	  }
	});
	Object.defineProperty(exports, "ValidatorResult", {
	  enumerable: true,
	  get: function get() {
	    return _validator.ValidatorResult;
	  }
	});
	Object.defineProperty(exports, "ValidatorRunner", {
	  enumerable: true,
	  get: function get() {
	    return _validator.ValidatorRunner;
	  }
	});
	
	var _base = __webpack_require__(4);
	
	Object.defineProperty(exports, "Base", {
	  enumerable: true,
	  get: function get() {
	    return _base.Base;
	  }
	});
	Object.defineProperty(exports, "Event", {
	  enumerable: true,
	  get: function get() {
	    return _base.Event;
	  }
	});
	Object.defineProperty(exports, "ItemValue", {
	  enumerable: true,
	  get: function get() {
	    return _base.ItemValue;
	  }
	});
	Object.defineProperty(exports, "SurveyError", {
	  enumerable: true,
	  get: function get() {
	    return _base.SurveyError;
	  }
	});
	
	var _choicesRestfull = __webpack_require__(8);
	
	Object.defineProperty(exports, "ChoicesRestfull", {
	  enumerable: true,
	  get: function get() {
	    return _choicesRestfull.ChoicesRestfull;
	  }
	});
	
	var _conditions = __webpack_require__(9);
	
	Object.defineProperty(exports, "Condition", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.Condition;
	  }
	});
	Object.defineProperty(exports, "ConditionNode", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.ConditionNode;
	  }
	});
	Object.defineProperty(exports, "ConditionRunner", {
	  enumerable: true,
	  get: function get() {
	    return _conditions.ConditionRunner;
	  }
	});
	
	var _conditionsParser = __webpack_require__(10);
	
	Object.defineProperty(exports, "ConditionsParser", {
	  enumerable: true,
	  get: function get() {
	    return _conditionsParser.ConditionsParser;
	  }
	});
	
	var _error = __webpack_require__(5);
	
	Object.defineProperty(exports, "CustomError", {
	  enumerable: true,
	  get: function get() {
	    return _error.CustomError;
	  }
	});
	Object.defineProperty(exports, "ExceedSizeError", {
	  enumerable: true,
	  get: function get() {
	    return _error.ExceedSizeError;
	  }
	});
	Object.defineProperty(exports, "RequreNumericError", {
	  enumerable: true,
	  get: function get() {
	    return _error.RequreNumericError;
	  }
	});
	
	var _jsonobject = __webpack_require__(7);
	
	Object.defineProperty(exports, "JsonError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonError;
	  }
	});
	Object.defineProperty(exports, "JsonIncorrectTypeError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonIncorrectTypeError;
	  }
	});
	Object.defineProperty(exports, "JsonMetadata", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMetadata;
	  }
	});
	Object.defineProperty(exports, "JsonMetadataClass", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMetadataClass;
	  }
	});
	Object.defineProperty(exports, "JsonMissingTypeError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMissingTypeError;
	  }
	});
	Object.defineProperty(exports, "JsonMissingTypeErrorBase", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonMissingTypeErrorBase;
	  }
	});
	Object.defineProperty(exports, "JsonObject", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonObject;
	  }
	});
	Object.defineProperty(exports, "JsonObjectProperty", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonObjectProperty;
	  }
	});
	Object.defineProperty(exports, "JsonRequiredPropertyError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonRequiredPropertyError;
	  }
	});
	Object.defineProperty(exports, "JsonUnknownPropertyError", {
	  enumerable: true,
	  get: function get() {
	    return _jsonobject.JsonUnknownPropertyError;
	  }
	});
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	Object.defineProperty(exports, "MatrixDropdownCell", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownCell;
	  }
	});
	Object.defineProperty(exports, "MatrixDropdownColumn", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownColumn;
	  }
	});
	Object.defineProperty(exports, "MatrixDropdownRowModelBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.MatrixDropdownRowModelBase;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDropdownModelBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdownbase.QuestionMatrixDropdownModelBase;
	  }
	});
	
	var _question_matrixdropdown = __webpack_require__(17);
	
	Object.defineProperty(exports, "MatrixDropdownRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdown.MatrixDropdownRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDropdownModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdropdown.QuestionMatrixDropdownModel;
	  }
	});
	
	var _question_matrixdynamic = __webpack_require__(18);
	
	Object.defineProperty(exports, "MatrixDynamicRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdynamic.MatrixDynamicRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixDynamicModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrixdynamic.QuestionMatrixDynamicModel;
	  }
	});
	
	var _question_matrix = __webpack_require__(19);
	
	Object.defineProperty(exports, "MatrixRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrix.MatrixRowModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMatrixModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_matrix.QuestionMatrixModel;
	  }
	});
	
	var _question_multipletext = __webpack_require__(20);
	
	Object.defineProperty(exports, "MultipleTextItemModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_multipletext.MultipleTextItemModel;
	  }
	});
	Object.defineProperty(exports, "QuestionMultipleTextModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_multipletext.QuestionMultipleTextModel;
	  }
	});
	
	var _page = __webpack_require__(21);
	
	Object.defineProperty(exports, "PageModel", {
	  enumerable: true,
	  get: function get() {
	    return _page.PageModel;
	  }
	});
	Object.defineProperty(exports, "QuestionRowModel", {
	  enumerable: true,
	  get: function get() {
	    return _page.QuestionRowModel;
	  }
	});
	
	var _question = __webpack_require__(12);
	
	Object.defineProperty(exports, "Question", {
	  enumerable: true,
	  get: function get() {
	    return _question.Question;
	  }
	});
	
	var _questionbase = __webpack_require__(13);
	
	Object.defineProperty(exports, "QuestionBase", {
	  enumerable: true,
	  get: function get() {
	    return _questionbase.QuestionBase;
	  }
	});
	
	var _question_baseselect = __webpack_require__(15);
	
	Object.defineProperty(exports, "QuestionCheckboxBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_baseselect.QuestionCheckboxBase;
	  }
	});
	Object.defineProperty(exports, "QuestionSelectBase", {
	  enumerable: true,
	  get: function get() {
	    return _question_baseselect.QuestionSelectBase;
	  }
	});
	
	var _question_checkbox = __webpack_require__(22);
	
	Object.defineProperty(exports, "QuestionCheckboxModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_checkbox.QuestionCheckboxModel;
	  }
	});
	
	var _question_comment = __webpack_require__(23);
	
	Object.defineProperty(exports, "QuestionCommentModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_comment.QuestionCommentModel;
	  }
	});
	
	var _question_dropdown = __webpack_require__(24);
	
	Object.defineProperty(exports, "QuestionDropdownModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_dropdown.QuestionDropdownModel;
	  }
	});
	
	var _questionfactory = __webpack_require__(16);
	
	Object.defineProperty(exports, "QuestionFactory", {
	  enumerable: true,
	  get: function get() {
	    return _questionfactory.QuestionFactory;
	  }
	});
	
	var _question_file = __webpack_require__(25);
	
	Object.defineProperty(exports, "QuestionFileModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_file.QuestionFileModel;
	  }
	});
	
	var _question_html = __webpack_require__(26);
	
	Object.defineProperty(exports, "QuestionHtmlModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_html.QuestionHtmlModel;
	  }
	});
	
	var _question_radiogroup = __webpack_require__(27);
	
	Object.defineProperty(exports, "QuestionRadiogroupModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_radiogroup.QuestionRadiogroupModel;
	  }
	});
	
	var _question_rating = __webpack_require__(28);
	
	Object.defineProperty(exports, "QuestionRatingModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_rating.QuestionRatingModel;
	  }
	});
	
	var _question_text = __webpack_require__(29);
	
	Object.defineProperty(exports, "QuestionTextModel", {
	  enumerable: true,
	  get: function get() {
	    return _question_text.QuestionTextModel;
	  }
	});
	
	var _survey = __webpack_require__(30);
	
	Object.defineProperty(exports, "SurveyModel", {
	  enumerable: true,
	  get: function get() {
	    return _survey.SurveyModel;
	  }
	});
	
	var _trigger = __webpack_require__(32);
	
	Object.defineProperty(exports, "SurveyTrigger", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTrigger;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerComplete", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerComplete;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerSetValue", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerSetValue;
	  }
	});
	Object.defineProperty(exports, "SurveyTriggerVisible", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.SurveyTriggerVisible;
	  }
	});
	Object.defineProperty(exports, "Trigger", {
	  enumerable: true,
	  get: function get() {
	    return _trigger.Trigger;
	  }
	});
	
	var _surveyWindow = __webpack_require__(33);
	
	Object.defineProperty(exports, "SurveyWindowModel", {
	  enumerable: true,
	  get: function get() {
	    return _surveyWindow.SurveyWindowModel;
	  }
	});
	
	var _textPreProcessor = __webpack_require__(14);
	
	Object.defineProperty(exports, "TextPreProcessor", {
	  enumerable: true,
	  get: function get() {
	    return _textPreProcessor.TextPreProcessor;
	  }
	});
	
	var _dxSurveyService = __webpack_require__(31);
	
	Object.defineProperty(exports, "dxSurveyService", {
	  enumerable: true,
	  get: function get() {
	    return _dxSurveyService.dxSurveyService;
	  }
	});
	
	var _surveyStrings = __webpack_require__(6);
	
	Object.defineProperty(exports, "surveyLocalization", {
	  enumerable: true,
	  get: function get() {
	    return _surveyStrings.surveyLocalization;
	  }
	});
	Object.defineProperty(exports, "surveyStrings", {
	  enumerable: true,
	  get: function get() {
	    return _surveyStrings.surveyStrings;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.EmailValidator = exports.RegexValidator = exports.AnswerCountValidator = exports.TextValidator = exports.NumericValidator = exports.ValidatorRunner = exports.SurveyValidator = exports.ValidatorResult = undefined;
	
	var _base = __webpack_require__(4);
	
	var _error = __webpack_require__(5);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _jsonobject = __webpack_require__(7);
	
	var ValidatorResult = exports.ValidatorResult = function () {
	    function ValidatorResult(value, error) {
	        if (error === void 0) {
	            error = null;
	        }
	        this.value = value;
	        this.error = error;
	    }
	    return ValidatorResult;
	}();
	var SurveyValidator = exports.SurveyValidator = function (_super) {
	    __extends(SurveyValidator, _super);
	    function SurveyValidator() {
	        _super.call(this);
	        this.text = "";
	    }
	    SurveyValidator.prototype.getErrorText = function (name) {
	        if (this.text) return this.text;
	        return this.getDefaultErrorText(name);
	    };
	    SurveyValidator.prototype.getDefaultErrorText = function (name) {
	        return "";
	    };
	    SurveyValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        return null;
	    };
	    return SurveyValidator;
	}(_base.Base);
	var ValidatorRunner = exports.ValidatorRunner = function () {
	    function ValidatorRunner() {}
	    ValidatorRunner.prototype.run = function (owner) {
	        for (var i = 0; i < owner.validators.length; i++) {
	            var validatorResult = owner.validators[i].validate(owner.value, owner.getValidatorTitle());
	            if (validatorResult != null) {
	                if (validatorResult.error) return validatorResult.error;
	                if (validatorResult.value) {
	                    owner.value = validatorResult.value;
	                }
	            }
	        }
	        return null;
	    };
	    return ValidatorRunner;
	}();
	var NumericValidator = exports.NumericValidator = function (_super) {
	    __extends(NumericValidator, _super);
	    function NumericValidator(minValue, maxValue) {
	        if (minValue === void 0) {
	            minValue = null;
	        }
	        if (maxValue === void 0) {
	            maxValue = null;
	        }
	        _super.call(this);
	        this.minValue = minValue;
	        this.maxValue = maxValue;
	    }
	    NumericValidator.prototype.getType = function () {
	        return "numericvalidator";
	    };
	    NumericValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!value || !this.isNumber(value)) {
	            return new ValidatorResult(null, new _error.RequreNumericError());
	        }
	        var result = new ValidatorResult(parseFloat(value));
	        if (this.minValue && this.minValue > result.value) {
	            result.error = new _error.CustomError(this.getErrorText(name));
	            return result;
	        }
	        if (this.maxValue && this.maxValue < result.value) {
	            result.error = new _error.CustomError(this.getErrorText(name));
	            return result;
	        }
	        return typeof value === 'number' ? null : result;
	    };
	    NumericValidator.prototype.getDefaultErrorText = function (name) {
	        var vName = name ? name : "value";
	        if (this.minValue && this.maxValue) {
	            return _surveyStrings.surveyLocalization.getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
	        } else {
	            if (this.minValue) {
	                return _surveyStrings.surveyLocalization.getString("numericMin")["format"](vName, this.minValue);
	            }
	            return _surveyStrings.surveyLocalization.getString("numericMax")["format"](vName, this.maxValue);
	        }
	    };
	    NumericValidator.prototype.isNumber = function (value) {
	        return !isNaN(parseFloat(value)) && isFinite(value);
	    };
	    return NumericValidator;
	}(SurveyValidator);
	var TextValidator = exports.TextValidator = function (_super) {
	    __extends(TextValidator, _super);
	    function TextValidator(minLength) {
	        if (minLength === void 0) {
	            minLength = 0;
	        }
	        _super.call(this);
	        this.minLength = minLength;
	    }
	    TextValidator.prototype.getType = function () {
	        return "textvalidator";
	    };
	    TextValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (this.minLength <= 0) return;
	        if (value.length < this.minLength) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(name)));
	        }
	        return null;
	    };
	    TextValidator.prototype.getDefaultErrorText = function (name) {
	        return _surveyStrings.surveyLocalization.getString("textMinLength")["format"](this.minLength);
	    };
	    return TextValidator;
	}(SurveyValidator);
	var AnswerCountValidator = exports.AnswerCountValidator = function (_super) {
	    __extends(AnswerCountValidator, _super);
	    function AnswerCountValidator(minCount, maxCount) {
	        if (minCount === void 0) {
	            minCount = null;
	        }
	        if (maxCount === void 0) {
	            maxCount = null;
	        }
	        _super.call(this);
	        this.minCount = minCount;
	        this.maxCount = maxCount;
	    }
	    AnswerCountValidator.prototype.getType = function () {
	        return "answercountvalidator";
	    };
	    AnswerCountValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (value == null || value.constructor != Array) return null;
	        var count = value.length;
	        if (this.minCount && count < this.minCount) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(_surveyStrings.surveyLocalization.getString("minSelectError")["format"](this.minCount))));
	        }
	        if (this.maxCount && count > this.maxCount) {
	            return new ValidatorResult(null, new _error.CustomError(this.getErrorText(_surveyStrings.surveyLocalization.getString("maxSelectError")["format"](this.maxCount))));
	        }
	        return null;
	    };
	    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
	        return name;
	    };
	    return AnswerCountValidator;
	}(SurveyValidator);
	var RegexValidator = exports.RegexValidator = function (_super) {
	    __extends(RegexValidator, _super);
	    function RegexValidator(regex) {
	        if (regex === void 0) {
	            regex = null;
	        }
	        _super.call(this);
	        this.regex = regex;
	    }
	    RegexValidator.prototype.getType = function () {
	        return "regexvalidator";
	    };
	    RegexValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!this.regex || !value) return null;
	        var re = new RegExp(this.regex);
	        if (re.test(value)) return null;
	        return new ValidatorResult(value, new _error.CustomError(this.getErrorText(name)));
	    };
	    return RegexValidator;
	}(SurveyValidator);
	var EmailValidator = exports.EmailValidator = function (_super) {
	    __extends(EmailValidator, _super);
	    function EmailValidator() {
	        _super.call(this);
	        this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	    }
	    EmailValidator.prototype.getType = function () {
	        return "emailvalidator";
	    };
	    EmailValidator.prototype.validate = function (value, name) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (!value) return null;
	        if (this.re.test(value)) return null;
	        return new ValidatorResult(value, new _error.CustomError(this.getErrorText(name)));
	    };
	    EmailValidator.prototype.getDefaultErrorText = function (name) {
	        return _surveyStrings.surveyLocalization.getString("invalidEmail");
	    };
	    return EmailValidator;
	}(SurveyValidator);
	_jsonobject.JsonObject.metaData.addClass("surveyvalidator", ["text"]);
	_jsonobject.JsonObject.metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () {
	    return new NumericValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("textvalidator", ["minLength:number"], function () {
	    return new TextValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () {
	    return new AnswerCountValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("regexvalidator", ["regex"], function () {
	    return new RegexValidator();
	}, "surveyvalidator");
	_jsonobject.JsonObject.metaData.addClass("emailvalidator", [], function () {
	    return new EmailValidator();
	}, "surveyvalidator");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.__extends = __extends;
	function __extends(d, b) {
	    for (var p in b) {
	        if (b.hasOwnProperty(p)) d[p] = b[p];
	    }function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	if (typeof module !== 'undefined' && module.exports) {
	    exports = module.exports = __extends;
	}
	exports.__extends = __extends;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var ItemValue = exports.ItemValue = function () {
	    function ItemValue(value, text) {
	        if (text === void 0) {
	            text = null;
	        }
	        this.text = text;
	        this.value = value;
	    }
	    ItemValue.setData = function (items, values) {
	        items.length = 0;
	        for (var i = 0; i < values.length; i++) {
	            var value = values[i];
	            var item = new ItemValue(null);
	            if (typeof value.value !== 'undefined') {
	                var exception = null;
	                if (typeof value.getType !== 'undefined' && value.getType() == 'itemvalue') {
	                    value.itemValue = value.itemValue;
	                    item.itemText = value.itemText;
	                    exception = ItemValue.itemValueProp;
	                }
	                ItemValue.copyAttributes(value, item, exception);
	            } else {
	                item.value = value;
	            }
	            items.push(item);
	        }
	    };
	    ItemValue.getData = function (items) {
	        var result = new Array();
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item.hasText) {
	                result.push({ value: item.value, text: item.text });
	            } else {
	                result.push(item.value);
	            }
	        }
	        return result;
	    };
	    ItemValue.getItemByValue = function (items, val) {
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].value == val) return items[i];
	        }
	        return null;
	    };
	    ItemValue.copyAttributes = function (src, dest, exceptons) {
	        for (var key in src) {
	            if (typeof src[key] == 'function') continue;
	            if (exceptons && exceptons.indexOf(key) > -1) continue;
	            dest[key] = src[key];
	        }
	    };
	    ItemValue.prototype.getType = function () {
	        return "itemvalue";
	    };
	    Object.defineProperty(ItemValue.prototype, "value", {
	        get: function get() {
	            return this.itemValue;
	        },
	        set: function set(newValue) {
	            this.itemValue = newValue;
	            if (!this.itemValue) return;
	            var str = this.itemValue.toString();
	            var index = str.indexOf(ItemValue.Separator);
	            if (index > -1) {
	                this.itemValue = str.slice(0, index);
	                this.text = str.slice(index + 1);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ItemValue.prototype, "hasText", {
	        get: function get() {
	            return this.itemText ? true : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ItemValue.prototype, "text", {
	        get: function get() {
	            if (this.hasText) return this.itemText;
	            if (this.value) return this.value.toString();
	            return null;
	        },
	        set: function set(newText) {
	            this.itemText = newText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ItemValue.Separator = '|';
	    ItemValue.itemValueProp = ["text", "value", "hasText"];
	    return ItemValue;
	}();
	var Base = exports.Base = function () {
	    function Base() {}
	    Base.prototype.getType = function () {
	        throw new Error('This method is abstract');
	    };
	    return Base;
	}();
	var SurveyError = exports.SurveyError = function () {
	    function SurveyError() {}
	    SurveyError.prototype.getText = function () {
	        throw new Error('This method is abstract');
	    };
	    return SurveyError;
	}();
	var SurveyPageId = exports.SurveyPageId = "sq_page";
	var SurveyElement = exports.SurveyElement = function () {
	    function SurveyElement() {}
	    SurveyElement.ScrollElementToTop = function (elementId) {
	        if (!elementId) return false;
	        var el = document.getElementById(elementId);
	        if (!el || !el.scrollIntoView) return false;
	        var elemTop = el.getBoundingClientRect().top;
	        if (elemTop < 0) el.scrollIntoView();
	        return elemTop < 0;
	    };
	    SurveyElement.FocusElement = function (elementId) {
	        if (!elementId) return false;
	        var el = document.getElementById(elementId);
	        if (el) {
	            el.focus();
	            return true;
	        }
	        return false;
	    };
	    return SurveyElement;
	}();
	var Event = exports.Event = function () {
	    function Event() {}
	    Object.defineProperty(Event.prototype, "isEmpty", {
	        get: function get() {
	            return this.callbacks == null || this.callbacks.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Event.prototype.fire = function (sender, options) {
	        if (this.callbacks == null) return;
	        for (var i = 0; i < this.callbacks.length; i++) {
	            var callResult = this.callbacks[i](sender, options);
	        }
	    };
	    Event.prototype.add = function (func) {
	        if (this.callbacks == null) {
	            this.callbacks = new Array();
	        }
	        this.callbacks.push(func);
	    };
	    Event.prototype.remove = function (func) {
	        if (this.callbacks == null) return;
	        var index = this.callbacks.indexOf(func, 0);
	        if (index != undefined) {
	            this.callbacks.splice(index, 1);
	        }
	    };
	    return Event;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.CustomError = exports.ExceedSizeError = exports.RequreNumericError = exports.AnswerRequiredError = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var _base = __webpack_require__(4);
	
	var AnswerRequiredError = exports.AnswerRequiredError = function (_super) {
	    __extends(AnswerRequiredError, _super);
	    function AnswerRequiredError() {
	        _super.call(this);
	    }
	    AnswerRequiredError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("requiredError");
	    };
	    return AnswerRequiredError;
	}(_base.SurveyError);
	var RequreNumericError = exports.RequreNumericError = function (_super) {
	    __extends(RequreNumericError, _super);
	    function RequreNumericError() {
	        _super.call(this);
	    }
	    RequreNumericError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("numericError");
	    };
	    return RequreNumericError;
	}(_base.SurveyError);
	var ExceedSizeError = exports.ExceedSizeError = function (_super) {
	    __extends(ExceedSizeError, _super);
	    function ExceedSizeError(maxSize) {
	        _super.call(this);
	        this.maxSize = maxSize;
	    }
	    ExceedSizeError.prototype.getText = function () {
	        return _surveyStrings.surveyLocalization.getString("exceedMaxSize")["format"](this.getTextSize());
	    };
	    ExceedSizeError.prototype.getTextSize = function () {
	        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	        var fixed = [0, 0, 2, 3, 3];
	        if (this.maxSize == 0) return '0 Byte';
	        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
	        var value = this.maxSize / Math.pow(1024, i);
	        return value.toFixed(fixed[i]) + ' ' + sizes[i];
	    };
	    return ExceedSizeError;
	}(_base.SurveyError);
	var CustomError = exports.CustomError = function (_super) {
	    __extends(CustomError, _super);
	    function CustomError(text) {
	        _super.call(this);
	        this.text = text;
	    }
	    CustomError.prototype.getText = function () {
	        return this.text;
	    };
	    return CustomError;
	}(_base.SurveyError);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var surveyLocalization = exports.surveyLocalization = {
	    currentLocale: "",
	    locales: {},
	    getString: function getString(strName) {
	        var loc = this.currentLocale ? this.locales[this.currentLocale] : surveyStrings;
	        if (!loc || !loc[strName]) loc = surveyStrings;
	        return loc[strName];
	    },
	    getLocales: function getLocales() {
	        var res = [];
	        res.push("");
	        for (var key in this.locales) {
	            res.push(key);
	        }
	        res.sort();
	        return res;
	    }
	};
	var surveyStrings = exports.surveyStrings = {
	    pagePrevText: "Previous",
	    pageNextText: "Next",
	    completeText: "Complete",
	    otherItemText: "Other (describe)",
	    progressText: "Page {0} of {1}",
	    emptySurvey: "There is no any visible page or visible question in the survey.",
	    completingSurvey: "Thank You for Completing the Survey!",
	    loadingSurvey: "Survey is loading from the server...",
	    optionsCaption: "Choose...",
	    requiredError: "Please answer the question.",
	    requiredInAllRowsError: "Please answer questions in all rows.",
	    numericError: "The value should be a numeric.",
	    textMinLength: "Please enter at least {0} symbols.",
	    minRowCountError: "Please fill at least {0} rows.",
	    minSelectError: "Please select at least {0} variants.",
	    maxSelectError: "Please select not more than {0} variants.",
	    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
	    numericMin: "The '{0}' should be equal or more than {1}",
	    numericMax: "The '{0}' should be equal or less than {1}",
	    invalidEmail: "Please enter a valid e-mail.",
	    urlRequestError: "The request return error '{0}'. {1}",
	    urlGetChoicesError: "The request returns empty data or the 'path' property is incorrect",
	    exceedMaxSize: "The file size should not exceed {0}.",
	    otherRequiredError: "Please enter the others value.",
	    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
	    addRow: "Add Row",
	    removeRow: "Remove"
	};
	surveyLocalization.locales["en"] = surveyStrings;
	if (!String.prototype["format"]) {
	    String.prototype["format"] = function () {
	        var args = arguments;
	        return this.replace(/{(\d+)}/g, function (match, number) {
	            return typeof args[number] != 'undefined' ? args[number] : match;
	        });
	    };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var JsonObjectProperty = exports.JsonObjectProperty = function () {
	    function JsonObjectProperty(name) {
	        this.name = name;
	        this.typeValue = null;
	        this.choicesValue = null;
	        this.choicesfunc = null;
	        this.className = null;
	        this.classNamePart = null;
	        this.baseClassName = null;
	        this.defaultValue = null;
	        this.onGetValue = null;
	    }
	    Object.defineProperty(JsonObjectProperty.prototype, "type", {
	        get: function get() {
	            return this.typeValue ? this.typeValue : "string";
	        },
	        set: function set(value) {
	            this.typeValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
	        get: function get() {
	            return this.onGetValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.isDefaultValue = function (value) {
	        return this.defaultValue ? this.defaultValue == value : !value;
	    };
	    JsonObjectProperty.prototype.getValue = function (obj) {
	        if (this.onGetValue) return this.onGetValue(obj);
	        return null;
	    };
	    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
	        get: function get() {
	            return this.onSetValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
	        if (this.onSetValue) {
	            this.onSetValue(obj, value, jsonConv);
	        }
	    };
	    JsonObjectProperty.prototype.getObjType = function (objType) {
	        if (!this.classNamePart) return objType;
	        return objType.replace(this.classNamePart, "");
	    };
	    JsonObjectProperty.prototype.getClassName = function (className) {
	        return this.classNamePart && className.indexOf(this.classNamePart) < 0 ? className + this.classNamePart : className;
	    };
	    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
	        get: function get() {
	            if (this.choicesValue != null) return this.choicesValue;
	            if (this.choicesfunc != null) return this.choicesfunc();
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
	        this.choicesValue = value;
	        this.choicesfunc = valueFunc;
	    };
	    return JsonObjectProperty;
	}();
	var JsonMetadataClass = exports.JsonMetadataClass = function () {
	    function JsonMetadataClass(name, properties, creator, parentName) {
	        if (creator === void 0) {
	            creator = null;
	        }
	        if (parentName === void 0) {
	            parentName = null;
	        }
	        this.name = name;
	        this.creator = creator;
	        this.parentName = parentName;
	        this.properties = null;
	        this.requiredProperties = null;
	        this.properties = new Array();
	        for (var i = 0; i < properties.length; i++) {
	            var prop = this.createProperty(properties[i]);
	            if (prop) {
	                this.properties.push(prop);
	            }
	        }
	    }
	    JsonMetadataClass.prototype.find = function (name) {
	        for (var i = 0; i < this.properties.length; i++) {
	            if (this.properties[i].name == name) return this.properties[i];
	        }
	        return null;
	    };
	    JsonMetadataClass.prototype.createProperty = function (propInfo) {
	        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
	        if (!propertyName) return;
	        var propertyType = null;
	        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
	        if (typeIndex > -1) {
	            propertyType = propertyName.substring(typeIndex + 1);
	            propertyName = propertyName.substring(0, typeIndex);
	        }
	        propertyName = this.getPropertyName(propertyName);
	        var prop = new JsonObjectProperty(propertyName);
	        if (propertyType) {
	            prop.type = propertyType;
	        }
	        if ((typeof propInfo === "undefined" ? "undefined" : _typeof(propInfo)) === "object") {
	            if (propInfo.type) {
	                prop.type = propInfo.type;
	            }
	            if (propInfo.default) {
	                prop.defaultValue = propInfo.default;
	            }
	            if (propInfo.isRequired) {
	                this.makePropertyRequired(prop.name);
	            }
	            if (propInfo.choices) {
	                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
	                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
	                prop.setChoices(choicesValue, choicesFunc);
	            }
	            if (propInfo.onGetValue) {
	                prop.onGetValue = propInfo.onGetValue;
	            }
	            if (propInfo.onSetValue) {
	                prop.onSetValue = propInfo.onSetValue;
	            }
	            if (propInfo.className) {
	                prop.className = propInfo.className;
	            }
	            if (propInfo.baseClassName) {
	                prop.baseClassName = propInfo.baseClassName;
	            }
	            if (propInfo.classNamePart) {
	                prop.classNamePart = propInfo.classNamePart;
	            }
	        }
	        return prop;
	    };
	    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
	        if (propertyName.length == 0 || propertyName[0] != JsonMetadataClass.requiredSymbol) return propertyName;
	        propertyName = propertyName.slice(1);
	        this.makePropertyRequired(propertyName);
	        return propertyName;
	    };
	    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
	        if (!this.requiredProperties) {
	            this.requiredProperties = new Array();
	        }
	        this.requiredProperties.push(propertyName);
	    };
	    JsonMetadataClass.requiredSymbol = '!';
	    JsonMetadataClass.typeSymbol = ':';
	    return JsonMetadataClass;
	}();
	var JsonMetadata = exports.JsonMetadata = function () {
	    function JsonMetadata() {
	        this.classes = {};
	        this.childrenClasses = {};
	        this.classProperties = {};
	        this.classRequiredProperties = {};
	    }
	    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
	        if (creator === void 0) {
	            creator = null;
	        }
	        if (parentName === void 0) {
	            parentName = null;
	        }
	        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
	        this.classes[name] = metaDataClass;
	        if (parentName) {
	            var children = this.childrenClasses[parentName];
	            if (!children) {
	                this.childrenClasses[parentName] = [];
	            }
	            this.childrenClasses[parentName].push(metaDataClass);
	        }
	        return metaDataClass;
	    };
	    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
	        var metaDataClass = this.findClass(name);
	        if (metaDataClass) {
	            metaDataClass.creator = creator;
	        }
	    };
	    JsonMetadata.prototype.getProperties = function (name) {
	        var properties = this.classProperties[name];
	        if (!properties) {
	            properties = new Array();
	            this.fillProperties(name, properties);
	            this.classProperties[name] = properties;
	        }
	        return properties;
	    };
	    JsonMetadata.prototype.createClass = function (name) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return null;
	        return metaDataClass.creator();
	    };
	    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
	        if (canBeCreated === void 0) {
	            canBeCreated = false;
	        }
	        var result = [];
	        this.fillChildrenClasses(name, canBeCreated, result);
	        return result;
	    };
	    JsonMetadata.prototype.getRequiredProperties = function (name) {
	        var properties = this.classRequiredProperties[name];
	        if (!properties) {
	            properties = new Array();
	            this.fillRequiredProperties(name, properties);
	            this.classRequiredProperties[name] = properties;
	        }
	        return properties;
	    };
	    JsonMetadata.prototype.addProperty = function (className, propertyInfo) {
	        var metaDataClass = this.findClass(className);
	        if (!metaDataClass) return;
	        var property = metaDataClass.createProperty(propertyInfo);
	        if (property) {
	            this.addPropertyToClass(metaDataClass, property);
	            this.emptyClassPropertiesHash(metaDataClass);
	        }
	    };
	    JsonMetadata.prototype.removeProperty = function (className, propertyName) {
	        var metaDataClass = this.findClass(className);
	        if (!metaDataClass) return false;
	        var property = metaDataClass.find(propertyName);
	        if (property) {
	            this.removePropertyFromClass(metaDataClass, property);
	            this.emptyClassPropertiesHash(metaDataClass);
	        }
	    };
	    JsonMetadata.prototype.addPropertyToClass = function (metaDataClass, property) {
	        if (metaDataClass.find(property.name) != null) return;
	        metaDataClass.properties.push(property);
	    };
	    JsonMetadata.prototype.removePropertyFromClass = function (metaDataClass, property) {
	        var index = metaDataClass.properties.indexOf(property);
	        if (index < 0) return;
	        metaDataClass.properties.splice(index, 1);
	        if (metaDataClass.requiredProperties) {
	            index = metaDataClass.requiredProperties.indexOf(property.name);
	            if (index >= 0) {
	                metaDataClass.requiredProperties.splice(index, 1);
	            }
	        }
	    };
	    JsonMetadata.prototype.emptyClassPropertiesHash = function (metaDataClass) {
	        this.classProperties[metaDataClass.name] = null;
	        var childClasses = this.getChildrenClasses(metaDataClass.name);
	        for (var i = 0; i < childClasses.length; i++) {
	            this.classProperties[childClasses[i].name] = null;
	        }
	    };
	    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
	        var children = this.childrenClasses[name];
	        if (!children) return;
	        for (var i = 0; i < children.length; i++) {
	            if (!canBeCreated || children[i].creator) {
	                result.push(children[i]);
	            }
	            this.fillChildrenClasses(children[i].name, canBeCreated, result);
	        }
	    };
	    JsonMetadata.prototype.findClass = function (name) {
	        return this.classes[name];
	    };
	    JsonMetadata.prototype.fillProperties = function (name, list) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return;
	        if (metaDataClass.parentName) {
	            this.fillProperties(metaDataClass.parentName, list);
	        }
	        for (var i = 0; i < metaDataClass.properties.length; i++) {
	            this.addPropertyCore(metaDataClass.properties[i], list, list.length);
	        }
	    };
	    JsonMetadata.prototype.addPropertyCore = function (property, list, endIndex) {
	        var index = -1;
	        for (var i = 0; i < endIndex; i++) {
	            if (list[i].name == property.name) {
	                index = i;
	                break;
	            }
	        }
	        if (index < 0) {
	            list.push(property);
	        } else {
	            list[index] = property;
	        }
	    };
	    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
	        var metaDataClass = this.findClass(name);
	        if (!metaDataClass) return;
	        if (metaDataClass.requiredProperties) {
	            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
	        }
	        if (metaDataClass.parentName) {
	            this.fillRequiredProperties(metaDataClass.parentName, list);
	        }
	    };
	    return JsonMetadata;
	}();
	var JsonError = exports.JsonError = function () {
	    function JsonError(type, message) {
	        this.type = type;
	        this.message = message;
	        this.description = "";
	        this.at = -1;
	    }
	    JsonError.prototype.getFullDescription = function () {
	        return this.message + (this.description ? "\n" + this.description : "");
	    };
	    return JsonError;
	}();
	var JsonUnknownPropertyError = exports.JsonUnknownPropertyError = function (_super) {
	    __extends(JsonUnknownPropertyError, _super);
	    function JsonUnknownPropertyError(propertyName, className) {
	        _super.call(this, "unknownproperty", "The property '" + propertyName + "' in class '" + className + "' is unknown.");
	        this.propertyName = propertyName;
	        this.className = className;
	        var properties = JsonObject.metaData.getProperties(className);
	        if (properties) {
	            this.description = "The list of available properties are: ";
	            for (var i = 0; i < properties.length; i++) {
	                if (i > 0) this.description += ", ";
	                this.description += properties[i].name;
	            }
	            this.description += '.';
	        }
	    }
	    return JsonUnknownPropertyError;
	}(JsonError);
	var JsonMissingTypeErrorBase = exports.JsonMissingTypeErrorBase = function (_super) {
	    __extends(JsonMissingTypeErrorBase, _super);
	    function JsonMissingTypeErrorBase(baseClassName, type, message) {
	        _super.call(this, type, message);
	        this.baseClassName = baseClassName;
	        this.type = type;
	        this.message = message;
	        this.description = "The following types are available: ";
	        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
	        for (var i = 0; i < types.length; i++) {
	            if (i > 0) this.description += ", ";
	            this.description += "'" + types[i].name + "'";
	        }
	        this.description += ".";
	    }
	    return JsonMissingTypeErrorBase;
	}(JsonError);
	var JsonMissingTypeError = exports.JsonMissingTypeError = function (_super) {
	    __extends(JsonMissingTypeError, _super);
	    function JsonMissingTypeError(propertyName, baseClassName) {
	        _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + propertyName + "'.");
	        this.propertyName = propertyName;
	        this.baseClassName = baseClassName;
	    }
	    return JsonMissingTypeError;
	}(JsonMissingTypeErrorBase);
	var JsonIncorrectTypeError = exports.JsonIncorrectTypeError = function (_super) {
	    __extends(JsonIncorrectTypeError, _super);
	    function JsonIncorrectTypeError(propertyName, baseClassName) {
	        _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + propertyName + "'.");
	        this.propertyName = propertyName;
	        this.baseClassName = baseClassName;
	    }
	    return JsonIncorrectTypeError;
	}(JsonMissingTypeErrorBase);
	var JsonRequiredPropertyError = exports.JsonRequiredPropertyError = function (_super) {
	    __extends(JsonRequiredPropertyError, _super);
	    function JsonRequiredPropertyError(propertyName, className) {
	        _super.call(this, "requiredproperty", "The property '" + propertyName + "' is required in class '" + className + "'.");
	        this.propertyName = propertyName;
	        this.className = className;
	    }
	    return JsonRequiredPropertyError;
	}(JsonError);
	var JsonObject = exports.JsonObject = function () {
	    function JsonObject() {
	        this.errors = new Array();
	    }
	    Object.defineProperty(JsonObject, "metaData", {
	        get: function get() {
	            return JsonObject.metaDataValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    JsonObject.prototype.toJsonObject = function (obj) {
	        return this.toJsonObjectCore(obj, null);
	    };
	    JsonObject.prototype.toObject = function (jsonObj, obj) {
	        if (!jsonObj) return;
	        var properties = null;
	        if (obj.getType) {
	            properties = JsonObject.metaData.getProperties(obj.getType());
	        }
	        if (!properties) return;
	        for (var key in jsonObj) {
	            if (key == JsonObject.typePropertyName) continue;
	            if (key == JsonObject.positionPropertyName) {
	                obj[key] = jsonObj[key];
	                continue;
	            }
	            var property = this.findProperty(properties, key);
	            if (!property) {
	                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
	                continue;
	            }
	            this.valueToObj(jsonObj[key], obj, key, property);
	        }
	    };
	    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
	        if (!obj.getType) return obj;
	        var result = {};
	        if (property != null && !property.className) {
	            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
	        }
	        var properties = JsonObject.metaData.getProperties(obj.getType());
	        for (var i = 0; i < properties.length; i++) {
	            this.valueToJson(obj, result, properties[i]);
	        }
	        return result;
	    };
	    JsonObject.prototype.valueToJson = function (obj, result, property) {
	        var value = null;
	        if (property.hasToUseGetValue) {
	            value = property.getValue(obj);
	        } else {
	            value = obj[property.name];
	        }
	        if (value === undefined || value === null) return;
	        if (property.isDefaultValue(value)) return;
	        if (this.isValueArray(value)) {
	            var arrValue = [];
	            for (var i = 0; i < value.length; i++) {
	                arrValue.push(this.toJsonObjectCore(value[i], property));
	            }
	            value = arrValue.length > 0 ? arrValue : null;
	        } else {
	            value = this.toJsonObjectCore(value, property);
	        }
	        if (!property.isDefaultValue(value)) {
	            result[property.name] = value;
	        }
	    };
	    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
	        if (value == null) return;
	        if (property != null && property.hasToUseSetValue) {
	            property.setValue(obj, value, this);
	            return;
	        }
	        if (this.isValueArray(value)) {
	            this.valueToArray(value, obj, key, property);
	            return;
	        }
	        var newObj = this.createNewObj(value, property);
	        if (newObj.newObj) {
	            this.toObject(value, newObj.newObj);
	            value = newObj.newObj;
	        }
	        if (!newObj.error) {
	            obj[key] = value;
	        }
	    };
	    JsonObject.prototype.isValueArray = function (value) {
	        return value && value.constructor.toString().indexOf("Array") > -1;
	    };
	    JsonObject.prototype.createNewObj = function (value, property) {
	        var result = { newObj: null, error: null };
	        var className = value[JsonObject.typePropertyName];
	        if (!className && property != null && property.className) {
	            className = property.className;
	        }
	        className = property.getClassName(className);
	        result.newObj = className ? JsonObject.metaData.createClass(className) : null;
	        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
	        return result;
	    };
	    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
	        var error = null;
	        if (newObj) {
	            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
	            if (requiredProperties) {
	                for (var i = 0; i < requiredProperties.length; i++) {
	                    if (!value[requiredProperties[i]]) {
	                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
	                        break;
	                    }
	                }
	            }
	        } else {
	            if (property.baseClassName) {
	                if (!className) {
	                    error = new JsonMissingTypeError(property.name, property.baseClassName);
	                } else {
	                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
	                }
	            }
	        }
	        if (error) {
	            this.addNewError(error, value);
	        }
	        return error;
	    };
	    JsonObject.prototype.addNewError = function (error, jsonObj) {
	        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
	            error.at = jsonObj[JsonObject.positionPropertyName].start;
	        }
	        this.errors.push(error);
	    };
	    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
	        if (!this.isValueArray(obj[key])) {
	            obj[key] = [];
	        }
	        for (var i = 0; i < value.length; i++) {
	            var newValue = this.createNewObj(value[i], property);
	            if (newValue.newObj) {
	                obj[key].push(newValue.newObj);
	                this.toObject(value[i], newValue.newObj);
	            } else {
	                if (!newValue.error) {
	                    obj[key].push(value[i]);
	                }
	            }
	        }
	    };
	    JsonObject.prototype.findProperty = function (properties, key) {
	        if (!properties) return null;
	        for (var i = 0; i < properties.length; i++) {
	            if (properties[i].name == key) return properties[i];
	        }
	        return null;
	    };
	    JsonObject.typePropertyName = "type";
	    JsonObject.positionPropertyName = "pos";
	    JsonObject.metaDataValue = new JsonMetadata();
	    return JsonObject;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.ChoicesRestfull = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var ChoicesRestfull = exports.ChoicesRestfull = function (_super) {
	    __extends(ChoicesRestfull, _super);
	    function ChoicesRestfull() {
	        _super.call(this);
	        this.url = "";
	        this.path = "";
	        this.valueName = "";
	        this.titleName = "";
	        this.error = null;
	    }
	    ChoicesRestfull.prototype.run = function () {
	        if (!this.url || !this.getResultCallback) return;
	        this.error = null;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', this.url);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            if (xhr.status == 200) {
	                self.onLoad(JSON.parse(xhr.response));
	            } else {
	                self.onError(xhr.statusText, xhr.responseText);
	            }
	        };
	        xhr.send();
	    };
	    ChoicesRestfull.prototype.getType = function () {
	        return "choicesByUrl";
	    };
	    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
	        get: function get() {
	            return !this.url && !this.path && !this.valueName && !this.titleName;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ChoicesRestfull.prototype.setData = function (json) {
	        this.clear();
	        if (json.url) this.url = json.url;
	        if (json.path) this.path = json.path;
	        if (json.valueName) this.valueName = json.valueName;
	        if (json.titleName) this.titleName = json.titleName;
	    };
	    ChoicesRestfull.prototype.clear = function () {
	        this.url = "";
	        this.path = "";
	        this.valueName = "";
	        this.titleName = "";
	    };
	    ChoicesRestfull.prototype.onLoad = function (result) {
	        var items = [];
	        result = this.getResultAfterPath(result);
	        if (result && result["length"]) {
	            for (var i = 0; i < result.length; i++) {
	                var itemValue = result[i];
	                if (!itemValue) continue;
	                var value = this.getValue(itemValue);
	                var title = this.getTitle(itemValue);
	                items.push(new _base.ItemValue(value, title));
	            }
	        } else {
	            this.error = new _error.CustomError(_surveyStrings.surveyLocalization.getString("urlGetChoicesError"));
	        }
	        this.getResultCallback(items);
	    };
	    ChoicesRestfull.prototype.onError = function (status, response) {
	        this.error = new _error.CustomError(_surveyStrings.surveyLocalization.getString("urlRequestError")["format"](status, response));
	        this.getResultCallback([]);
	    };
	    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
	        if (!result) return result;
	        if (!this.path) return result;
	        var pathes = this.getPathes();
	        for (var i = 0; i < pathes.length; i++) {
	            result = result[pathes[i]];
	            if (!result) return null;
	        }
	        return result;
	    };
	    ChoicesRestfull.prototype.getPathes = function () {
	        var pathes = [];
	        if (this.path.indexOf(';') > -1) {
	            pathes = this.path.split(';');
	        } else {
	            pathes = this.path.split(',');
	        }
	        if (pathes.length == 0) pathes.push(this.path);
	        return pathes;
	    };
	    ChoicesRestfull.prototype.getValue = function (item) {
	        if (this.valueName) return item[this.valueName];
	        var len = Object.keys(item).length;
	        if (len < 1) return null;
	        return item[Object.keys(item)[0]];
	    };
	    ChoicesRestfull.prototype.getTitle = function (item) {
	        if (!this.titleName) return null;
	        return item[this.titleName];
	    };
	    return ChoicesRestfull;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () {
	    return new ChoicesRestfull();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ConditionRunner = exports.ConditionNode = exports.Condition = undefined;
	
	var _conditionsParser = __webpack_require__(10);
	
	var Condition = exports.Condition = function () {
	    function Condition() {
	        this.opValue = "equal";
	    }
	    Object.defineProperty(Condition, "operators", {
	        get: function get() {
	            if (Condition.operatorsValue != null) return Condition.operatorsValue;
	            Condition.operatorsValue = {
	                empty: function empty(left, right) {
	                    return !left;
	                },
	                notempty: function notempty(left, right) {
	                    return !!left;
	                },
	                equal: function equal(left, right) {
	                    return left == right;
	                },
	                notequal: function notequal(left, right) {
	                    return left != right;
	                },
	                contains: function contains(left, right) {
	                    return left && left["indexOf"] && left.indexOf(right) > -1;
	                },
	                notcontains: function notcontains(left, right) {
	                    return !left || !left["indexOf"] || left.indexOf(right) == -1;
	                },
	                greater: function greater(left, right) {
	                    return left > right;
	                },
	                less: function less(left, right) {
	                    return left < right;
	                },
	                greaterorequal: function greaterorequal(left, right) {
	                    return left >= right;
	                },
	                lessorequal: function lessorequal(left, right) {
	                    return left <= right;
	                }
	            };
	            return Condition.operatorsValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Condition.prototype, "operator", {
	        get: function get() {
	            return this.opValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (!Condition.operators[value]) return;
	            this.opValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Condition.prototype.perform = function (left, right) {
	        if (left === void 0) {
	            left = null;
	        }
	        if (right === void 0) {
	            right = null;
	        }
	        if (!left) left = this.left;
	        if (!right) right = this.right;
	        return Condition.operators[this.operator](this.getPureValue(left), this.getPureValue(right));
	    };
	    Condition.prototype.getPureValue = function (val) {
	        if (!val || typeof val != "string") return val;
	        var str = "";
	        if (val.length > 0 && (val[0] == "'" || val[0] == '"')) val = val.substr(1);
	        var len = val.length;
	        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"')) val = val.substr(0, len - 1);
	        return val;
	    };
	    Condition.operatorsValue = null;
	    return Condition;
	}();
	var ConditionNode = exports.ConditionNode = function () {
	    function ConditionNode() {
	        this.connectiveValue = "and";
	        this.children = [];
	    }
	    Object.defineProperty(ConditionNode.prototype, "connective", {
	        get: function get() {
	            return this.connectiveValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (value == "&" || value == "&&") value = "and";
	            if (value == "|" || value == "||") value = "or";
	            if (value != "and" && value != "or") return;
	            this.connectiveValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
	        get: function get() {
	            return this.children.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionNode.prototype.clear = function () {
	        this.children = [];
	        this.connective = "and";
	    };
	    return ConditionNode;
	}();
	var ConditionRunner = exports.ConditionRunner = function () {
	    function ConditionRunner(expression) {
	        this.root = new ConditionNode();
	        this.expression = expression;
	    }
	    Object.defineProperty(ConditionRunner.prototype, "expression", {
	        get: function get() {
	            return this.expressionValue;
	        },
	        set: function set(value) {
	            if (this.expression == value) return;
	            this.expressionValue = value;
	            new _conditionsParser.ConditionsParser().parse(this.expressionValue, this.root);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionRunner.prototype.run = function (values) {
	        this.values = values;
	        return this.runNode(this.root);
	    };
	    ConditionRunner.prototype.runNode = function (node) {
	        var onFirstFail = node.connective == "and";
	        for (var i = 0; i < node.children.length; i++) {
	            var res = this.runNodeCondition(node.children[i]);
	            if (!res && onFirstFail) return false;
	            if (res && !onFirstFail) return true;
	        }
	        return onFirstFail;
	    };
	    ConditionRunner.prototype.runNodeCondition = function (value) {
	        if (!value) return false;
	        if (value["children"]) return this.runNode(value);
	        if (value["left"]) return this.runCondition(value);
	        return false;
	    };
	    ConditionRunner.prototype.runCondition = function (condition) {
	        var left = condition.left;
	        var name = this.getValueName(left);
	        if (name) {
	            if (!(name in this.values)) return false;
	            left = this.values[name];
	        }
	        var right = condition.right;
	        name = this.getValueName(right);
	        if (name) {
	            if (!(name in this.values)) return false;
	            right = this.values[name];
	        }
	        return condition.perform(left, right);
	    };
	    ConditionRunner.prototype.getValueName = function (nodeValue) {
	        if (!nodeValue) return null;
	        if (typeof nodeValue !== 'string') return null;
	        if (nodeValue.length < 3 || nodeValue[0] != '{' || nodeValue[nodeValue.length - 1] != '}') return null;
	        return nodeValue.substr(1, nodeValue.length - 2);
	    };
	    return ConditionRunner;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ConditionsParser = undefined;
	
	var _conditions = __webpack_require__(9);
	
	var ConditionsParser = exports.ConditionsParser = function () {
	    function ConditionsParser() {}
	    ConditionsParser.prototype.parse = function (text, root) {
	        this.text = text;
	        this.root = root;
	        this.root.clear();
	        this.at = 0;
	        this.length = this.text.length;
	        var res = this.parseText();
	        return res;
	    };
	    ConditionsParser.prototype.toString = function (root) {
	        this.root = root;
	        return this.nodeToString(root);
	    };
	    ConditionsParser.prototype.toStringCore = function (value) {
	        if (!value) return "";
	        if (value["children"]) return this.nodeToString(value);
	        if (value["left"]) return this.conditionToString(value);
	        return "";
	    };
	    ConditionsParser.prototype.nodeToString = function (node) {
	        if (node.isEmpty) return "";
	        var res = "";
	        for (var i = 0; i < node.children.length; i++) {
	            var nodeText = this.toStringCore(node.children[i]);
	            if (nodeText) {
	                if (res) res += ' ' + node.connective + ' ';
	                res += nodeText;
	            }
	        }
	        if (node != this.root && node.children.length > 1) {
	            res = '(' + res + ')';
	        }
	        return res;
	    };
	    ConditionsParser.prototype.conditionToString = function (condition) {
	        if (!condition.right || !condition.operator) return "";
	        var left = condition.left;
	        if (left && !this.isNumeric(left)) left = "'" + left + "'";
	        var res = left + ' ' + this.operationToString(condition.operator);
	        if (this.isNoRightOperation(condition.operator)) return res;
	        var right = condition.right;
	        if (right && !this.isNumeric(right)) right = "'" + right + "'";
	        return res + ' ' + right;
	    };
	    ConditionsParser.prototype.operationToString = function (op) {
	        if (op == "equal") return "=";
	        if (op == "notequal") return "!=";
	        if (op == "greater") return ">";
	        if (op == "less") return "<";
	        if (op == "greaterorequal") return ">=";
	        if (op == "lessorequal") return "<=";
	        return op;
	    };
	    ConditionsParser.prototype.isNumeric = function (value) {
	        var val = parseFloat(value);
	        if (isNaN(val)) return false;
	        return isFinite(val);
	    };
	    ConditionsParser.prototype.parseText = function () {
	        this.node = this.root;
	        this.expressionNodes = [];
	        this.expressionNodes.push(this.node);
	        var res = this.readConditions();
	        return res && this.at >= this.length;
	    };
	    ConditionsParser.prototype.readConditions = function () {
	        var res = this.readCondition();
	        if (!res) return res;
	        var connective = this.readConnective();
	        if (connective) {
	            this.addConnective(connective);
	            return this.readConditions();
	        }
	        return true;
	    };
	    ConditionsParser.prototype.readCondition = function () {
	        if (!this.readExpression()) return false;
	        var left = this.readString();
	        if (!left) return false;
	        var op = this.readOperator();
	        if (!op) return false;
	        var c = new _conditions.Condition();
	        c.left = left;
	        c.operator = op;
	        if (!this.isNoRightOperation(op)) {
	            var right = this.readString();
	            if (!right) return false;
	            c.right = right;
	        }
	        this.addCondition(c);
	        return true;
	    };
	    ConditionsParser.prototype.readExpression = function () {
	        this.skip();
	        if (this.at >= this.length || this.ch != '(') return true;
	        this.at++;
	        this.pushExpression();
	        var res = this.readConditions();
	        if (res) {
	            this.skip();
	            res = this.ch == ')';
	            this.at++;
	            this.popExpression();
	        }
	        return res;
	    };
	    Object.defineProperty(ConditionsParser.prototype, "ch", {
	        get: function get() {
	            return this.text.charAt(this.at);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ConditionsParser.prototype.skip = function () {
	        while (this.at < this.length && this.isSpace(this.ch)) {
	            this.at++;
	        }
	    };
	    ConditionsParser.prototype.isSpace = function (c) {
	        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
	    };
	    ConditionsParser.prototype.isQuotes = function (c) {
	        return c == "'" || c == '"';
	    };
	    ConditionsParser.prototype.isOperatorChar = function (c) {
	        return c == '>' || c == '<' || c == '=' || c == '!';
	    };
	    ConditionsParser.prototype.isBrackets = function (c) {
	        return c == '(' || c == ')';
	    };
	    ConditionsParser.prototype.readString = function () {
	        this.skip();
	        if (this.at >= this.length) return null;
	        var start = this.at;
	        var hasQuotes = this.isQuotes(this.ch);
	        if (hasQuotes) this.at++;
	        var isFirstOpCh = this.isOperatorChar(this.ch);
	        while (this.at < this.length) {
	            if (!hasQuotes && this.isSpace(this.ch)) break;
	            if (this.isQuotes(this.ch)) {
	                if (hasQuotes) this.at++;
	                break;
	            }
	            if (!hasQuotes) {
	                if (isFirstOpCh != this.isOperatorChar(this.ch)) break;
	                if (this.isBrackets(this.ch)) break;
	            }
	            this.at++;
	        }
	        if (this.at <= start) return null;
	        var res = this.text.substr(start, this.at - start);
	        if (res) {
	            if (res.length > 1 && this.isQuotes(res[0])) {
	                var len = res.length - 1;
	                if (this.isQuotes(res[res.length - 1])) len--;
	                res = res.substr(1, len);
	            }
	        }
	        return res;
	    };
	    ConditionsParser.prototype.isNoRightOperation = function (op) {
	        return op == "empty" || op == "notempty";
	    };
	    ConditionsParser.prototype.readOperator = function () {
	        var op = this.readString();
	        if (!op) return null;
	        op = op.toLowerCase();
	        if (op == '>') op = "greater";
	        if (op == '<') op = "less";
	        if (op == '>=' || op == '=>') op = "greaterorequal";
	        if (op == '<=' || op == '=<') op = "lessorequal";
	        if (op == '=' || op == '==') op = "equal";
	        if (op == '<>' || op == '!=') op = "notequal";
	        if (op == 'contain') op = "contains";
	        if (op == 'notcontain') op = "notcontains";
	        return op;
	    };
	    ConditionsParser.prototype.readConnective = function () {
	        var con = this.readString();
	        if (!con) return null;
	        con = con.toLowerCase();
	        if (con == "&" || con == "&&") con = "and";
	        if (con == "|" || con == "||") con = "or";
	        if (con != "and" && con != "or") con = null;
	        return con;
	    };
	    ConditionsParser.prototype.pushExpression = function () {
	        var node = new _conditions.ConditionNode();
	        this.expressionNodes.push(node);
	        this.node = node;
	    };
	    ConditionsParser.prototype.popExpression = function () {
	        var node = this.expressionNodes.pop();
	        this.node = this.expressionNodes[this.expressionNodes.length - 1];
	        this.node.children.push(node);
	    };
	    ConditionsParser.prototype.addCondition = function (c) {
	        this.node.children.push(c);
	    };
	    ConditionsParser.prototype.addConnective = function (con) {
	        if (this.node.children.length < 2) {
	            this.node.connective = con;
	        } else {
	            if (this.node.connective != con) {
	                var oldCon = this.node.connective;
	                var oldChildren = this.node.children;
	                this.node.clear();
	                this.node.connective = con;
	                var oldNode = new _conditions.ConditionNode();
	                oldNode.connective = oldCon;
	                oldNode.children = oldChildren;
	                this.node.children.push(oldNode);
	                var newNode = new _conditions.ConditionNode();
	                this.node.children.push(newNode);
	                this.node = newNode;
	            }
	        }
	    };
	    return ConditionsParser;
	}();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdownModelBase = exports.MatrixDropdownRowModelBase = exports.MatrixDropdownCell = exports.MatrixDropdownColumn = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _question_baseselect = __webpack_require__(15);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixDropdownColumn = exports.MatrixDropdownColumn = function (_super) {
	    __extends(MatrixDropdownColumn, _super);
	    function MatrixDropdownColumn(name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this);
	        this.name = name;
	        this.choicesValue = [];
	        this.isRequired = false;
	        this.hasOther = false;
	        this.minWidth = "";
	        this.cellType = "default";
	        this.colCountValue = -1;
	    }
	    MatrixDropdownColumn.prototype.getType = function () {
	        return "matrixdropdowncolumn";
	    };
	    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(value) {
	            this.titleValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownColumn.prototype, "choices", {
	        get: function get() {
	            return this.choicesValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < -1 || value > 4) return;
	            this.colCountValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownColumn;
	}(_base.Base);
	var MatrixDropdownCell = exports.MatrixDropdownCell = function () {
	    function MatrixDropdownCell(column, row, data) {
	        this.column = column;
	        this.row = row;
	        this.questionValue = data.createQuestion(this.row, this.column);
	        this.questionValue.setData(row);
	    }
	    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
	        get: function get() {
	            return this.questionValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
	        get: function get() {
	            return this.question.value;
	        },
	        set: function set(value) {
	            this.question.value = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownCell;
	}();
	var MatrixDropdownRowModelBase = exports.MatrixDropdownRowModelBase = function () {
	    function MatrixDropdownRowModelBase(data, value) {
	        this.rowValues = {};
	        this.rowComments = {};
	        this.isSettingValue = false;
	        this.cells = [];
	        this.data = data;
	        this.value = value;
	        this.buildCells();
	    }
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
	        get: function get() {
	            return null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
	        get: function get() {
	            return this.rowValues;
	        },
	        set: function set(value) {
	            this.isSettingValue = true;
	            this.rowValues = {};
	            if (value != null) {
	                for (var key in value) {
	                    this.rowValues[key] = value[key];
	                }
	            }
	            for (var i = 0; i < this.cells.length; i++) {
	                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
	            }
	            this.isSettingValue = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
	        return this.rowValues[name];
	    };
	    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
	        if (this.isSettingValue) return;
	        if (newValue === "") newValue = null;
	        if (newValue != null) {
	            this.rowValues[name] = newValue;
	        } else {
	            delete this.rowValues[name];
	        }
	        this.data.onRowChanged(this, this.value);
	    };
	    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
	        return this.rowComments[name];
	    };
	    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
	        this.rowComments[name] = newValue;
	    };
	    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
	        get: function get() {
	            var val = this.value;
	            if (!val) return true;
	            for (var key in val) {
	                return false;
	            }return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixDropdownRowModelBase.prototype.buildCells = function () {
	        var columns = this.data.columns;
	        for (var i = 0; i < columns.length; i++) {
	            var column = columns[i];
	            this.cells.push(this.createCell(column));
	        }
	    };
	    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
	        return new MatrixDropdownCell(column, this, this.data);
	    };
	    return MatrixDropdownRowModelBase;
	}();
	var QuestionMatrixDropdownModelBase = exports.QuestionMatrixDropdownModelBase = function (_super) {
	    __extends(QuestionMatrixDropdownModelBase, _super);
	    function QuestionMatrixDropdownModelBase(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.columnsValue = [];
	        this.choicesValue = [];
	        this.isRowChanging = false;
	        this.cellTypeValue = "dropdown";
	        this.columnColCountValue = 0;
	        this.columnMinWidth = "";
	        this.horizontalScroll = false;
	    }
	    QuestionMatrixDropdownModelBase.prototype.getType = function () {
	        return "matrixdropdownbase";
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
	        get: function get() {
	            return this.columnsValue;
	        },
	        set: function set(value) {
	            this.columnsValue = value;
	            this.fireCallback(this.columnsChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
	        get: function get() {
	            return this.cellTypeValue;
	        },
	        set: function set(newValue) {
	            if (this.cellType == newValue) return;
	            this.cellTypeValue = newValue;
	            this.fireCallback(this.updateCellsCallbak);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
	        get: function get() {
	            return this.columnColCountValue;
	        },
	        set: function set(value) {
	            if (value < 0 || value > 4) return;
	            this.columnColCountValue = value;
	            this.fireCallback(this.updateCellsCallbak);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.getColumnTitle = function (column) {
	        var result = column.title;
	        if (column.isRequired && this.survey) {
	            var requireText = this.survey.requiredText;
	            if (requireText) requireText += " ";
	            result = requireText + result;
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
	        return column.minWidth ? column.minWidth : this.columnMinWidth;
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
	        get: function get() {
	            return this.choicesValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
	        get: function get() {
	            return this.optionsCaptionValue ? this.optionsCaptionValue : _surveyStrings.surveyLocalization.getString("optionsCaption");
	        },
	        set: function set(newValue) {
	            this.optionsCaptionValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        var column = new MatrixDropdownColumn(name, title);
	        this.columnsValue.push(column);
	        return column;
	    };
	    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
	        get: function get() {
	            this.generatedVisibleRows = this.generateRows();
	            return this.generatedVisibleRows;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModelBase.prototype.generateRows = function () {
	        return null;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createMatrixRow = function (name, text, value) {
	        return null;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) {
	        return !curValue ? {} : curValue;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (row, questionValue, create) {
	        if (create === void 0) {
	            create = false;
	        }
	        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
	        if (!result && create) {
	            result = {};
	            questionValue[row.rowName] = result;
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
	        if (this.isRowChanging || !this.generatedVisibleRows || this.generatedVisibleRows.length == 0) return;
	        this.isRowChanging = true;
	        var val = this.createNewValue(this.value);
	        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	            var row = this.generatedVisibleRows[i];
	            this.generatedVisibleRows[i].value = this.getRowValue(row, val);
	        }
	        this.isRowChanging = false;
	    };
	    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        var errosInColumns = this.hasErrorInColumns(fireCallback);
	        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
	    };
	    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
	        if (!this.generatedVisibleRows) return false;
	        var res = false;
	        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
	            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	                var cells = this.generatedVisibleRows[i].cells;
	                res = cells && cells[colIndex] && cells[colIndex].question && cells[colIndex].question.hasErrors(fireCallback) || res;
	            }
	        }
	        return res;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getFirstInputElementId = function () {
	        var question = this.getFirstCellQuestion(false);
	        return question ? question.inputId : _super.prototype.getFirstInputElementId.call(this);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getFirstErrorInputElementId = function () {
	        var question = this.getFirstCellQuestion(true);
	        return question ? question.inputId : _super.prototype.getFirstErrorInputElementId.call(this);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getFirstCellQuestion = function (onError) {
	        if (!this.generatedVisibleRows) return null;
	        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	            var cells = this.generatedVisibleRows[i].cells;
	            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
	                if (!onError) return cells[colIndex].question;
	                if (cells[colIndex].question.currentErrorCount > 0) return cells[colIndex].question;
	            }
	        }
	        return null;
	    };
	    //IMatrixDropdownData
	    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
	        var question = this.createQuestionCore(row, column);
	        question.name = column.name;
	        question.isRequired = column.isRequired;
	        question.hasOther = column.hasOther;
	        if (column.hasOther) {
	            if (question instanceof _question_baseselect.QuestionSelectBase) {
	                question.storeOthersAsComment = false;
	            }
	        }
	        return question;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
	        var cellType = column.cellType == "default" ? this.cellType : column.cellType;
	        var name = this.getQuestionName(row, column);
	        if (cellType == "checkbox") return this.createCheckbox(name, column);
	        if (cellType == "radiogroup") return this.createRadiogroup(name, column);
	        if (cellType == "text") return this.createText(name, column);
	        if (cellType == "comment") return this.createComment(name, column);
	        return this.createDropdown(name, column);
	    };
	    QuestionMatrixDropdownModelBase.prototype.getQuestionName = function (row, column) {
	        return row.rowName + "_" + column.name;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnChoices = function (column) {
	        return column.choices && column.choices.length > 0 ? column.choices : this.choices;
	    };
	    QuestionMatrixDropdownModelBase.prototype.getColumnOptionsCaption = function (column) {
	        return column.optionsCaption ? column.optionsCaption : this.optionsCaption;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createDropdown = function (name, column) {
	        var q = this.createCellQuestion("dropdown", name);
	        q.choices = this.getColumnChoices(column);
	        q.optionsCaption = this.getColumnOptionsCaption(column);
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createCheckbox = function (name, column) {
	        var q = this.createCellQuestion("checkbox", name);
	        q.choices = this.getColumnChoices(column);
	        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createRadiogroup = function (name, column) {
	        var q = this.createCellQuestion("radiogroup", name);
	        q.choices = this.getColumnChoices(column);
	        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
	        return q;
	    };
	    QuestionMatrixDropdownModelBase.prototype.createText = function (name, column) {
	        return this.createCellQuestion("text", name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.createComment = function (name, column) {
	        return this.createCellQuestion("comment", name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.createCellQuestion = function (questionType, name) {
	        return _questionfactory.QuestionFactory.Instance.createQuestion(questionType, name);
	    };
	    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
	        delete newValue[row.rowName];
	        return Object.keys(newValue).length == 0 ? null : newValue;
	    };
	    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, newRowValue) {
	        var newValue = this.createNewValue(this.value);
	        var rowValue = this.getRowValue(row, newValue, true);
	        for (var key in rowValue) {
	            delete rowValue[key];
	        }if (newRowValue) {
	            newRowValue = JSON.parse(JSON.stringify(newRowValue));
	            for (var key in newRowValue) {
	                rowValue[key] = newRowValue[key];
	            }
	        }
	        if (Object.keys(rowValue).length == 0) {
	            newValue = this.deleteRowValue(newValue, row);
	        }
	        this.isRowChanging = true;
	        this.setNewValue(newValue);
	        this.isRowChanging = false;
	    };
	    return QuestionMatrixDropdownModelBase;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("matrixdropdowncolumn", ["name", { name: "title", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, "optionsCaption", { name: "cellType", default: "default", choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment"] }, { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] }, "isRequired:boolean", "hasOther:boolean", "minWidth"], function () {
	    return new MatrixDropdownColumn("");
	});
	_jsonobject.JsonObject.metaData.addClass("matrixdropdownbase", [{ name: "columns:matrixdropdowncolumns", className: "matrixdropdowncolumn" }, "horizontalScroll:boolean", { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, { name: "optionsCaption", onGetValue: function onGetValue(obj) {
	        return obj.optionsCaptionValue;
	    } }, { name: "cellType", default: "dropdown", choices: ["dropdown", "checkbox", "radiogroup", "text", "comment"] }, { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] }, "columnMinWidth"], function () {
	    return new QuestionMatrixDropdownModelBase("");
	}, "question");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.Question = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionbase = __webpack_require__(13);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _validator = __webpack_require__(2);
	
	var _textPreProcessor = __webpack_require__(14);
	
	var Question = exports.Question = function (_super) {
	    __extends(Question, _super);
	    function Question(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.titleValue = null;
	        this.isRequiredValue = false;
	        this.hasCommentValue = false;
	        this.hasOtherValue = false;
	        this.commentTextValue = "";
	        this.errors = [];
	        this.validators = new Array();
	        this.isValueChangedInSurvey = false;
	    }
	    Object.defineProperty(Question.prototype, "hasTitle", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasInput", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "inputId", {
	        get: function get() {
	            return this.id + "i";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(newValue) {
	            this.titleValue = newValue;
	            this.fireCallback(this.titleChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "processedTitle", {
	        get: function get() {
	            return this.survey != null ? this.survey.processText(this.title) : this.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "fullTitle", {
	        get: function get() {
	            if (this.survey && this.survey.questionTitleTemplate) {
	                if (!this.textPreProcessor) {
	                    var self = this;
	                    this.textPreProcessor = new _textPreProcessor.TextPreProcessor();
	                    this.textPreProcessor.onHasValue = function (name) {
	                        return self.canProcessedTextValues(name.toLowerCase());
	                    };
	                    this.textPreProcessor.onProcess = function (name) {
	                        return self.getProcessedTextValue(name);
	                    };
	                }
	                return this.textPreProcessor.process(this.survey.questionTitleTemplate);
	            }
	            var requireText = this.requiredText;
	            if (requireText) requireText += " ";
	            var no = this.no;
	            if (no) no += ". ";
	            return no + requireText + this.processedTitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.focus = function (onError) {
	        if (onError === void 0) {
	            onError = false;
	        }
	        _base.SurveyElement.ScrollElementToTop(this.id);
	        var id = !onError ? this.getFirstInputElementId() : this.getFirstErrorInputElementId();
	        if (_base.SurveyElement.FocusElement(id)) {
	            this.fireCallback(this.focusCallback);
	        }
	    };
	    Question.prototype.getFirstInputElementId = function () {
	        return this.inputId;
	    };
	    Question.prototype.getFirstErrorInputElementId = function () {
	        return this.getFirstInputElementId();
	    };
	    Question.prototype.canProcessedTextValues = function (name) {
	        return name == "no" || name == "title" || name == "require";
	    };
	    Question.prototype.getProcessedTextValue = function (name) {
	        if (name == "no") return this.no;
	        if (name == "title") return this.processedTitle;
	        if (name == "require") return this.requiredText;
	        return null;
	    };
	    Question.prototype.supportComment = function () {
	        return false;
	    };
	    Question.prototype.supportOther = function () {
	        return false;
	    };
	    Object.defineProperty(Question.prototype, "isRequired", {
	        get: function get() {
	            return this.isRequiredValue;
	        },
	        set: function set(val) {
	            if (this.isRequired == val) return;
	            this.isRequiredValue = val;
	            this.fireCallback(this.titleChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasComment", {
	        get: function get() {
	            return this.hasCommentValue;
	        },
	        set: function set(val) {
	            if (!this.supportComment()) return;
	            this.hasCommentValue = val;
	            if (this.hasComment) this.hasOther = false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "commentText", {
	        get: function get() {
	            return this.commentTextValue ? this.commentTextValue : _surveyStrings.surveyLocalization.getString("otherItemText");
	        },
	        set: function set(value) {
	            this.commentTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "hasOther", {
	        get: function get() {
	            return this.hasOtherValue;
	        },
	        set: function set(val) {
	            if (!this.supportOther() || this.hasOther == val) return;
	            this.hasOtherValue = val;
	            if (this.hasOther) this.hasComment = false;
	            this.hasOtherChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.hasOtherChanged = function () {};
	    Object.defineProperty(Question.prototype, "no", {
	        get: function get() {
	            if (this.visibleIndex < 0) return "";
	            var startIndex = 1;
	            var isNumeric = true;
	            var str = "";
	            if (this.survey && this.survey.questionStartIndex) {
	                str = this.survey.questionStartIndex;
	                if (parseInt(str)) startIndex = parseInt(str);else if (str.length == 1) isNumeric = false;
	            }
	            if (isNumeric) return (this.visibleIndex + startIndex).toString();
	            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.onSetData = function () {
	        _super.prototype.onSetData.call(this);
	        this.onSurveyValueChanged(this.value);
	    };
	    Object.defineProperty(Question.prototype, "value", {
	        get: function get() {
	            return this.valueFromData(this.getValueCore());
	        },
	        set: function set(newValue) {
	            this.setNewValue(newValue);
	            this.fireCallback(this.valueChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "comment", {
	        get: function get() {
	            return this.getComment();
	        },
	        set: function set(newValue) {
	            if (this.comment == newValue) return;
	            this.setComment(newValue);
	            this.fireCallback(this.commentChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.getComment = function () {
	        return this.data != null ? this.data.getComment(this.name) : this.questionComment;
	    };
	    Question.prototype.setComment = function (newValue) {
	        this.setNewComment(newValue);
	    };
	    Question.prototype.isEmpty = function () {
	        return this.value == null;
	    };
	    Question.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        this.checkForErrors(fireCallback);
	        return this.errors.length > 0;
	    };
	    Object.defineProperty(Question.prototype, "currentErrorCount", {
	        get: function get() {
	            return this.errors.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Question.prototype, "requiredText", {
	        get: function get() {
	            return this.survey != null && this.isRequired ? this.survey.requiredText : "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Question.prototype.addError = function (error) {
	        this.errors.push(error);
	        this.fireCallback(this.errorsChangedCallback);
	    };
	    Question.prototype.checkForErrors = function (fireCallback) {
	        var errorLength = this.errors ? this.errors.length : 0;
	        this.errors = [];
	        this.onCheckForErrors(this.errors);
	        if (this.errors.length == 0 && this.value) {
	            var error = this.runValidators();
	            if (error) {
	                this.errors.push(error);
	            }
	        }
	        if (this.survey && this.errors.length == 0) {
	            var error = this.survey.validateQuestion(this.name);
	            if (error) {
	                this.errors.push(error);
	            }
	        }
	        if (fireCallback && (errorLength != this.errors.length || errorLength > 0)) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	    };
	    Question.prototype.onCheckForErrors = function (errors) {
	        if (this.hasRequiredError()) {
	            this.errors.push(new _error.AnswerRequiredError());
	        }
	    };
	    Question.prototype.hasRequiredError = function () {
	        return this.isRequired && this.isEmpty();
	    };
	    Question.prototype.runValidators = function () {
	        return new _validator.ValidatorRunner().run(this);
	    };
	    Question.prototype.setNewValue = function (newValue) {
	        this.setNewValueInData(newValue);
	        this.onValueChanged();
	    };
	    Question.prototype.setNewValueInData = function (newValue) {
	        if (!this.isValueChangedInSurvey) {
	            newValue = this.valueToData(newValue);
	            this.setValueCore(newValue);
	        }
	    };
	    Question.prototype.getValueCore = function () {
	        return this.data != null ? this.data.getValue(this.name) : this.questionValue;
	    };
	    Question.prototype.setValueCore = function (newValue) {
	        if (this.data != null) {
	            this.data.setValue(this.name, newValue);
	        } else {
	            this.questionValue = newValue;
	        }
	    };
	    Question.prototype.valueFromData = function (val) {
	        return val;
	    };
	    Question.prototype.valueToData = function (val) {
	        return val;
	    };
	    Question.prototype.onValueChanged = function () {};
	    Question.prototype.setNewComment = function (newValue) {
	        if (this.data != null) {
	            this.data.setComment(this.name, newValue);
	        } else this.questionComment = newValue;
	    };
	    //IQuestion
	    Question.prototype.onSurveyValueChanged = function (newValue) {
	        this.isValueChangedInSurvey = true;
	        this.value = this.valueFromData(newValue);
	        this.fireCallback(this.commentChangedCallback);
	        this.isValueChangedInSurvey = false;
	    };
	    //IValidatorOwner
	    Question.prototype.getValidatorTitle = function () {
	        return null;
	    };
	    return Question;
	}(_questionbase.QuestionBase);
	_jsonobject.JsonObject.metaData.addClass("question", [{ name: "title:text", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "commentText", onGetValue: function onGetValue(obj) {
	        return obj.commentTextValue;
	    } }, "isRequired:boolean", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], null, "questionbase");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {'use strict';
	
	exports.__esModule = true;
	exports.QuestionBase = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var _conditions = __webpack_require__(9);
	
	var QuestionBase = exports.QuestionBase = function (_super) {
	    __extends(QuestionBase, _super);
	    function QuestionBase(name) {
	        _super.call(this);
	        this.name = name;
	        this.conditionRunner = null;
	        this.visibleIf = "";
	        this.visibleValue = true;
	        this.startWithNewLine = true;
	        this.visibleIndexValue = -1;
	        this.width = "";
	        this.renderWidthValue = "";
	        this.rightIndentValue = 0;
	        this.indent = 0;
	        this.idValue = QuestionBase.getQuestionId();
	        this.onCreating();
	    }
	    QuestionBase.getQuestionId = function () {
	        return "sq_" + QuestionBase.questionCounter++;
	    };
	    Object.defineProperty(QuestionBase.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(val) {
	            if (val == this.visible) return;
	            this.visibleValue = val;
	            this.fireCallback(this.visibilityChangedCallback);
	            this.fireCallback(this.rowVisibilityChangedCallback);
	            if (this.survey) {
	                this.survey.questionVisibilityChanged(this, this.visible);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
	        get: function get() {
	            return this.visibleIndexValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionBase.prototype.hasErrors = function (fireCallback) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        return false;
	    };
	    Object.defineProperty(QuestionBase.prototype, "currentErrorCount", {
	        get: function get() {
	            return 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasInput", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "hasComment", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "id", {
	        get: function get() {
	            return this.idValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
	        get: function get() {
	            return this.renderWidthValue;
	        },
	        set: function set(val) {
	            if (val == this.renderWidth) return;
	            this.renderWidthValue = val;
	            this.fireCallback(this.renderWidthChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
	        get: function get() {
	            return this.rightIndentValue;
	        },
	        set: function set(val) {
	            if (val == this.rightIndent) return;
	            this.rightIndentValue = val;
	            this.fireCallback(this.renderWidthChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionBase.prototype.focus = function (onError) {
	        if (onError === void 0) {
	            onError = false;
	        }
	    };
	    QuestionBase.prototype.setData = function (newValue) {
	        this.data = newValue;
	        this.survey = newValue && newValue["questionAdded"] ? newValue : null;
	        this.onSetData();
	    };
	    QuestionBase.prototype.fireCallback = function (callback) {
	        if (callback) callback();
	    };
	    QuestionBase.prototype.onSetData = function () {};
	    QuestionBase.prototype.onCreating = function () {};
	    QuestionBase.prototype.runCondition = function (values) {
	        if (!this.visibleIf) return;
	        if (!this.conditionRunner) this.conditionRunner = new _conditions.ConditionRunner(this.visibleIf);
	        this.conditionRunner.expression = this.visibleIf;
	        this.visible = this.conditionRunner.run(values);
	    };
	    //IQuestion
	    QuestionBase.prototype.onSurveyValueChanged = function (newValue) {};
	    QuestionBase.prototype.onSurveyLoad = function () {};
	    QuestionBase.prototype.setVisibleIndex = function (value) {
	        if (this.visibleIndexValue == value) return;
	        this.visibleIndexValue = value;
	        this.fireCallback(this.visibleIndexChangedCallback);
	    };
	    QuestionBase.prototype.supportGoNextPageAutomatic = function () {
	        return false;
	    };
	    QuestionBase.questionCounter = 100;
	    return QuestionBase;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("questionbase", ["!name", { name: "visible:boolean", default: true }, "visibleIf:text", { name: "width" }, { name: "startWithNewLine:boolean", default: true }, { name: "indent:number", default: 0, choices: [0, 1, 2, 3] }]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var TextPreProcessorItem = exports.TextPreProcessorItem = function () {
	    function TextPreProcessorItem() {}
	    return TextPreProcessorItem;
	}();
	var TextPreProcessor = exports.TextPreProcessor = function () {
	    function TextPreProcessor() {}
	    TextPreProcessor.prototype.process = function (text) {
	        if (!text) return text;
	        if (!this.onProcess) return text;
	        var items = this.getItems(text);
	        for (var i = items.length - 1; i >= 0; i--) {
	            var item = items[i];
	            var name = this.getName(text.substring(item.start + 1, item.end));
	            if (!this.canProcessName(name)) continue;
	            if (this.onHasValue && !this.onHasValue(name)) continue;
	            var value = this.onProcess(name);
	            if (value == null) value = "";
	            text = text.substr(0, item.start) + value + text.substr(item.end + 1);
	        }
	        return text;
	    };
	    TextPreProcessor.prototype.getItems = function (text) {
	        var items = [];
	        var length = text.length;
	        var start = -1;
	        var ch = '';
	        for (var i = 0; i < length; i++) {
	            ch = text[i];
	            if (ch == '{') start = i;
	            if (ch == '}') {
	                if (start > -1) {
	                    var item = new TextPreProcessorItem();
	                    item.start = start;
	                    item.end = i;
	                    items.push(item);
	                }
	                start = -1;
	            }
	        }
	        return items;
	    };
	    TextPreProcessor.prototype.getName = function (name) {
	        if (!name) return;
	        return name.trim();
	    };
	    TextPreProcessor.prototype.canProcessName = function (name) {
	        if (!name) return false;
	        for (var i = 0; i < name.length; i++) {
	            var ch = name[i];
	            //TODO
	            if (ch == ' ' || ch == '-' || ch == '&') return false;
	        }
	        return true;
	    };
	    return TextPreProcessor;
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxBase = exports.QuestionSelectBase = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var _base = __webpack_require__(4);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _choicesRestfull = __webpack_require__(8);
	
	var QuestionSelectBase = exports.QuestionSelectBase = function (_super) {
	    __extends(QuestionSelectBase, _super);
	    function QuestionSelectBase(name) {
	        _super.call(this, name);
	        this.visibleChoicesCache = null;
	        this.otherItem = new _base.ItemValue("other", _surveyStrings.surveyLocalization.getString("otherItemText"));
	        this.choicesFromUrl = null;
	        this.cachedValueForUrlRequestion = null;
	        this.choicesValues = new Array();
	        this.otherErrorText = null;
	        this.storeOthersAsComment = true;
	        this.choicesOrderValue = "none";
	        this.isSettingComment = false;
	        this.choicesByUrl = this.createRestfull();
	        var self = this;
	        this.choicesByUrl.getResultCallback = function (items) {
	            self.onLoadChoicesFromUrl(items);
	        };
	    }
	    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
	        get: function get() {
	            return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.getHasOther = function (val) {
	        return val == this.otherItem.value;
	    };
	    QuestionSelectBase.prototype.createRestfull = function () {
	        return new _choicesRestfull.ChoicesRestfull();
	    };
	    QuestionSelectBase.prototype.getComment = function () {
	        if (this.getStoreOthersAsComment()) return _super.prototype.getComment.call(this);
	        return this.commentValue;
	    };
	    QuestionSelectBase.prototype.setComment = function (newValue) {
	        if (this.getStoreOthersAsComment()) _super.prototype.setComment.call(this, newValue);else {
	            if (!this.isSettingComment && newValue != this.commentValue) {
	                this.isSettingComment = true;
	                this.commentValue = newValue;
	                if (this.isOtherSelected) {
	                    this.setNewValueInData(this.cachedValue);
	                }
	                this.isSettingComment = false;
	            }
	        }
	    };
	    QuestionSelectBase.prototype.setNewValue = function (newValue) {
	        if (newValue) this.cachedValueForUrlRequestion = newValue;
	        _super.prototype.setNewValue.call(this, newValue);
	    };
	    QuestionSelectBase.prototype.valueFromData = function (val) {
	        if (this.getStoreOthersAsComment()) return _super.prototype.valueFromData.call(this, val);
	        this.cachedValue = this.valueFromDataCore(val);
	        return this.cachedValue;
	    };
	    QuestionSelectBase.prototype.valueToData = function (val) {
	        if (this.getStoreOthersAsComment()) return _super.prototype.valueToData.call(this, val);
	        this.cachedValue = val;
	        return this.valueToDataCore(val);
	    };
	    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
	        if (!this.hasUnknownValue(val)) return val;
	        if (val == this.otherItem.value) return val;
	        this.comment = val;
	        return this.otherItem.value;
	    };
	    QuestionSelectBase.prototype.valueToDataCore = function (val) {
	        if (val == this.otherItem.value && this.getComment()) {
	            val = this.getComment();
	        }
	        return val;
	    };
	    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
	        if (!val) return false;
	        var items = this.activeChoices;
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].value == val) return false;
	        }
	        return true;
	    };
	    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
	        get: function get() {
	            return this.choicesValues;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.choicesValues, newValue);
	            this.onVisibleChoicesChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.hasOtherChanged = function () {
	        this.onVisibleChoicesChanged();
	    };
	    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
	        get: function get() {
	            return this.choicesOrderValue;
	        },
	        set: function set(newValue) {
	            if (newValue == this.choicesOrderValue) return;
	            this.choicesOrderValue = newValue;
	            this.onVisibleChoicesChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
	        get: function get() {
	            return this.otherItem.text;
	        },
	        set: function set(value) {
	            this.otherItem.text = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
	        get: function get() {
	            if (!this.hasOther && this.choicesOrder == "none") return this.activeChoices;
	            if (!this.visibleChoicesCache) {
	                this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice());
	                if (this.hasOther) {
	                    this.visibleChoicesCache.push(this.otherItem);
	                }
	            }
	            return this.visibleChoicesCache;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
	        get: function get() {
	            return this.choicesFromUrl ? this.choicesFromUrl : this.choices;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionSelectBase.prototype.supportComment = function () {
	        return true;
	    };
	    QuestionSelectBase.prototype.supportOther = function () {
	        return true;
	    };
	    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (!this.isOtherSelected || this.comment) return;
	        var text = this.otherErrorText;
	        if (!text) {
	            text = _surveyStrings.surveyLocalization.getString("otherRequiredError");
	        }
	        errors.push(new _error.CustomError(text));
	    };
	    QuestionSelectBase.prototype.getStoreOthersAsComment = function () {
	        return this.storeOthersAsComment && (this.survey != null ? this.survey.storeOthersAsComment : true);
	    };
	    QuestionSelectBase.prototype.onSurveyLoad = function () {
	        if (this.choicesByUrl) this.choicesByUrl.run();
	    };
	    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
	        var errorCount = this.errors.length;
	        this.errors = [];
	        if (this.choicesByUrl && this.choicesByUrl.error) {
	            this.errors.push(this.choicesByUrl.error);
	        }
	        if (errorCount > 0 || this.errors.length > 0) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	        var newChoices = null;
	        if (array && array.length > 0) {
	            newChoices = new Array();
	            _base.ItemValue.setData(newChoices, array);
	        }
	        this.choicesFromUrl = newChoices;
	        this.onVisibleChoicesChanged();
	        if (this.cachedValueForUrlRequestion) {
	            this.value = this.cachedValueForUrlRequestion;
	        }
	    };
	    QuestionSelectBase.prototype.onVisibleChoicesChanged = function () {
	        this.visibleChoicesCache = null;
	        this.fireCallback(this.choicesChangedCallback);
	    };
	    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
	        var order = this.choicesOrder.toLowerCase();
	        if (order == "asc") return this.sortArray(array, 1);
	        if (order == "desc") return this.sortArray(array, -1);
	        if (order == "random") return this.randomizeArray(array);
	        return array;
	    };
	    QuestionSelectBase.prototype.sortArray = function (array, mult) {
	        return array.sort(function (a, b) {
	            if (a.text < b.text) return -1 * mult;
	            if (a.text > b.text) return 1 * mult;
	            return 0;
	        });
	    };
	    QuestionSelectBase.prototype.randomizeArray = function (array) {
	        for (var i = array.length - 1; i > 0; i--) {
	            var j = Math.floor(Math.random() * (i + 1));
	            var temp = array[i];
	            array[i] = array[j];
	            array[j] = temp;
	        }
	        return array;
	    };
	    return QuestionSelectBase;
	}(_question.Question);
	var QuestionCheckboxBase = exports.QuestionCheckboxBase = function (_super) {
	    __extends(QuestionCheckboxBase, _super);
	    function QuestionCheckboxBase(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.colCountValue = 1;
	    }
	    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < 0 || value > 4) return;
	            this.colCountValue = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionCheckboxBase;
	}(QuestionSelectBase);
	_jsonobject.JsonObject.metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean", { name: "choices:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.choices);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choices = value;
	    } }, { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] }, { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function onGetValue(obj) {
	        return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl;
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.choicesByUrl.setData(value);
	    } }, { name: "otherText", default: _surveyStrings.surveyLocalization.getString("otherItemText") }, "otherErrorText", { name: "storeOthersAsComment:boolean", default: true }], null, "question");
	_jsonobject.JsonObject.metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4] }], null, "selectbase");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var QuestionFactory = exports.QuestionFactory = function () {
	    function QuestionFactory() {
	        this.creatorHash = {};
	    }
	    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
	        this.creatorHash[questionType] = questionCreator;
	    };
	    QuestionFactory.prototype.getAllTypes = function () {
	        var result = new Array();
	        for (var key in this.creatorHash) {
	            result.push(key);
	        }
	        return result.sort();
	    };
	    QuestionFactory.prototype.createQuestion = function (questionType, name) {
	        var creator = this.creatorHash[questionType];
	        if (creator == null) return null;
	        return creator(name);
	    };
	    QuestionFactory.Instance = new QuestionFactory();
	    QuestionFactory.DefaultChoices = ["one", "two|second value", "three|third value"];
	    return QuestionFactory;
	}();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdownModel = exports.MatrixDropdownRowModel = undefined;
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixDropdownRowModel = exports.MatrixDropdownRowModel = function (_super) {
	    __extends(MatrixDropdownRowModel, _super);
	    function MatrixDropdownRowModel(name, text, data, value) {
	        _super.call(this, data, value);
	        this.name = name;
	        this.text = text;
	    }
	    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
	        get: function get() {
	            return this.name;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDropdownRowModel;
	}(_question_matrixdropdownbase.MatrixDropdownRowModelBase);
	var QuestionMatrixDropdownModel = exports.QuestionMatrixDropdownModel = function (_super) {
	    __extends(QuestionMatrixDropdownModel, _super);
	    function QuestionMatrixDropdownModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rowsValue = [];
	    }
	    QuestionMatrixDropdownModel.prototype.getType = function () {
	        return "matrixdropdown";
	    };
	    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
	        get: function get() {
	            return this.rowsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rowsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDropdownModel.prototype.generateRows = function () {
	        var result = new Array();
	        if (!this.rows || this.rows.length === 0) return result;
	        var val = this.value;
	        if (!val) val = {};
	        for (var i = 0; i < this.rows.length; i++) {
	            if (!this.rows[i].value) continue;
	            result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, val[this.rows[i].value]));
	        }
	        return result;
	    };
	    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (name, text, value) {
	        return new MatrixDropdownRowModel(name, text, this, value);
	    };
	    return QuestionMatrixDropdownModel;
	}(_question_matrixdropdownbase.QuestionMatrixDropdownModelBase);
	_jsonobject.JsonObject.metaData.addClass("matrixdropdown", [{ name: "rows:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rows);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rows = value;
	    } }], function () {
	    return new QuestionMatrixDropdownModel("");
	}, "matrixdropdownbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdropdown", function (name) {
	    var q = new QuestionMatrixDropdownModel(name);q.choices = [1, 2, 3, 4, 5];q.rows = ["Row 1", "Row 2"];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDynamicModel = exports.MatrixDynamicRowModel = undefined;
	
	var _question_matrixdropdownbase = __webpack_require__(11);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var MatrixDynamicRowModel = exports.MatrixDynamicRowModel = function (_super) {
	    __extends(MatrixDynamicRowModel, _super);
	    function MatrixDynamicRowModel(index, data, value) {
	        _super.call(this, data, value);
	        this.index = index;
	    }
	    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
	        get: function get() {
	            return "row" + this.index;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return MatrixDynamicRowModel;
	}(_question_matrixdropdownbase.MatrixDropdownRowModelBase);
	var QuestionMatrixDynamicModel = exports.QuestionMatrixDynamicModel = function (_super) {
	    __extends(QuestionMatrixDynamicModel, _super);
	    function QuestionMatrixDynamicModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rowCounter = 0;
	        this.rowCountValue = 2;
	        this.addRowTextValue = null;
	        this.removeRowTextValue = null;
	        this.minRowCount = 0;
	    }
	    QuestionMatrixDynamicModel.prototype.getType = function () {
	        return "matrixdynamic";
	    };
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
	        get: function get() {
	            return this.rowCountValue;
	        },
	        set: function set(val) {
	            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount) return;
	            this.rowCountValue = val;
	            if (this.value && this.value.length > val) {
	                var qVal = this.value;
	                qVal.splice(val);
	                this.value = qVal;
	            }
	            this.fireCallback(this.rowCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDynamicModel.prototype.addRow = function () {
	        if (this.generatedVisibleRows) {
	            this.generatedVisibleRows.push(this.createMatrixRow(null));
	        }
	        this.rowCount++;
	    };
	    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
	        if (index < 0 || index >= this.rowCount) return;
	        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
	            this.generatedVisibleRows.splice(index, 1);
	        }
	        if (this.value) {
	            var val = this.createNewValue(this.value);
	            val.splice(index, 1);
	            val = this.deleteRowValue(val, null);
	            this.value = val;
	        }
	        this.rowCount--;
	    };
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
	        get: function get() {
	            return this.addRowTextValue ? this.addRowTextValue : _surveyStrings.surveyLocalization.getString("addRow");
	        },
	        set: function set(value) {
	            this.addRowTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
	        get: function get() {
	            return this.removeRowTextValue ? this.removeRowTextValue : _surveyStrings.surveyLocalization.getString("removeRow");
	        },
	        set: function set(value) {
	            this.removeRowTextValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "cachedVisibleRows", {
	        get: function get() {
	            if (this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount) return this.generatedVisibleRows;
	            return this.visibleRows;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.hasErrorInRows()) {
	            errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("minRowCountError")["format"](this.minRowCount)));
	        }
	    };
	    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
	        if (this.minRowCount <= 0 || !this.generatedVisibleRows) return false;
	        var res = false;
	        var setRowCount = 0;
	        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
	            var row = this.generatedVisibleRows[rowIndex];
	            if (!row.isEmpty) setRowCount++;
	        }
	        return setRowCount < this.minRowCount;
	    };
	    QuestionMatrixDynamicModel.prototype.generateRows = function () {
	        var result = new Array();
	        if (this.rowCount === 0) return result;
	        var val = this.createNewValue(this.value);
	        for (var i = 0; i < this.rowCount; i++) {
	            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
	        }
	        return result;
	    };
	    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
	        return new MatrixDynamicRowModel(this.rowCounter++, this, value);
	    };
	    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
	        var result = curValue;
	        if (!result) result = [];
	        var r = [];
	        if (result.length > this.rowCount) result.splice(this.rowCount - 1);
	        for (var i = result.length; i < this.rowCount; i++) {
	            result.push({});
	        }
	        return result;
	    };
	    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
	        var isEmpty = true;
	        for (var i = 0; i < newValue.length; i++) {
	            if (Object.keys(newValue[i]).length > 0) {
	                isEmpty = false;
	                break;
	            }
	        }
	        return isEmpty ? null : newValue;
	    };
	    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
	        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
	    };
	    QuestionMatrixDynamicModel.prototype.getRowValue = function (row, questionValue, create) {
	        if (create === void 0) {
	            create = false;
	        }
	        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
	    };
	    QuestionMatrixDynamicModel.MaxRowCount = 100;
	    return QuestionMatrixDynamicModel;
	}(_question_matrixdropdownbase.QuestionMatrixDropdownModelBase);
	_jsonobject.JsonObject.metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 }, { name: "addRowText", onGetValue: function onGetValue(obj) {
	        return obj.addRowTextValue;
	    } }, { name: "removeRowText", onGetValue: function onGetValue(obj) {
	        return obj.removeRowTextValue;
	    } }], function () {
	    return new QuestionMatrixDynamicModel("");
	}, "matrixdropdownbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdynamic", function (name) {
	    var q = new QuestionMatrixDynamicModel(name);q.choices = [1, 2, 3, 4, 5];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixModel = exports.MatrixRowModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var _questionfactory = __webpack_require__(16);
	
	var MatrixRowModel = exports.MatrixRowModel = function (_super) {
	    __extends(MatrixRowModel, _super);
	    function MatrixRowModel(name, text, fullName, data, value) {
	        _super.call(this);
	        this.name = name;
	        this.text = text;
	        this.fullName = fullName;
	        this.data = data;
	        this.rowValue = value;
	    }
	    Object.defineProperty(MatrixRowModel.prototype, "value", {
	        get: function get() {
	            return this.rowValue;
	        },
	        set: function set(newValue) {
	            this.rowValue = newValue;
	            if (this.data) this.data.onMatrixRowChanged(this);
	            this.onValueChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MatrixRowModel.prototype.onValueChanged = function () {};
	    return MatrixRowModel;
	}(_base.Base);
	var QuestionMatrixModel = exports.QuestionMatrixModel = function (_super) {
	    __extends(QuestionMatrixModel, _super);
	    function QuestionMatrixModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.columnsValue = [];
	        this.rowsValue = [];
	        this.isRowChanging = false;
	        this.isAllRowRequired = false;
	    }
	    QuestionMatrixModel.prototype.getType = function () {
	        return "matrix";
	    };
	    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
	        get: function get() {
	            return this.rowsValue.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
	        get: function get() {
	            return this.columnsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.columnsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
	        get: function get() {
	            return this.rowsValue;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rowsValue, newValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
	        get: function get() {
	            var result = new Array();
	            var val = this.value;
	            if (!val) val = {};
	            for (var i = 0; i < this.rows.length; i++) {
	                if (!this.rows[i].value) continue;
	                result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, this.name + '_' + this.rows[i].value.toString(), val[this.rows[i].value]));
	            }
	            if (result.length == 0) {
	                result.push(this.createMatrixRow(null, "", this.name, val));
	            }
	            this.generatedVisibleRows = result;
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.hasErrorInRows()) {
	            this.errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("requiredInAllRowsError")));
	        }
	    };
	    QuestionMatrixModel.prototype.hasErrorInRows = function () {
	        if (!this.isAllRowRequired) return false;
	        var rows = this.generatedVisibleRows;
	        if (!rows) rows = this.visibleRows;
	        if (!rows) return false;
	        for (var i = 0; i < rows.length; i++) {
	            var val = rows[i].value;
	            if (!val) return true;
	        }
	        return false;
	    };
	    QuestionMatrixModel.prototype.createMatrixRow = function (name, text, fullName, value) {
	        return new MatrixRowModel(name, text, fullName, this, value);
	    };
	    QuestionMatrixModel.prototype.onValueChanged = function () {
	        if (this.isRowChanging || !this.generatedVisibleRows || this.generatedVisibleRows.length == 0) return;
	        this.isRowChanging = true;
	        var val = this.value;
	        if (!val) val = {};
	        if (this.rows.length == 0) {
	            this.generatedVisibleRows[0].value = val;
	        } else {
	            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
	                var row = this.generatedVisibleRows[i];
	                var rowVal = val[row.name] ? val[row.name] : null;
	                this.generatedVisibleRows[i].value = rowVal;
	            }
	        }
	        this.isRowChanging = false;
	    };
	    //IMatrixData
	    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
	        if (this.isRowChanging) return;
	        this.isRowChanging = true;
	        if (!this.hasRows) {
	            this.setNewValue(row.value);
	        } else {
	            var newValue = this.value;
	            if (!newValue) {
	                newValue = {};
	            }
	            newValue[row.name] = row.value;
	            this.setNewValue(newValue);
	        }
	        this.isRowChanging = false;
	    };
	    return QuestionMatrixModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("matrix", [{ name: "columns:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.columns);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.columns = value;
	    } }, { name: "rows:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rows);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rows = value;
	    } }, "isAllRowRequired:boolean"], function () {
	    return new QuestionMatrixModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrix", function (name) {
	    var q = new QuestionMatrixModel(name);q.rows = ["Row 1", "Row 2"];q.columns = ["Column 1", "Column 2", "Column 3"];return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMultipleTextModel = exports.MultipleTextItemModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _validator = __webpack_require__(2);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var MultipleTextItemModel = exports.MultipleTextItemModel = function (_super) {
	    __extends(MultipleTextItemModel, _super);
	    function MultipleTextItemModel(name, title) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this);
	        this.name = name;
	        this.validators = new Array();
	        this.title = title;
	    }
	    MultipleTextItemModel.prototype.getType = function () {
	        return "multipletextitem";
	    };
	    MultipleTextItemModel.prototype.setData = function (data) {
	        this.data = data;
	    };
	    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.name;
	        },
	        set: function set(newText) {
	            this.titleValue = newText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
	        get: function get() {
	            return this.data ? this.data.getMultipleTextValue(this.name) : null;
	        },
	        set: function set(value) {
	            if (this.data != null) {
	                this.data.setMultipleTextValue(this.name, value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {};
	    //IValidatorOwner
	    MultipleTextItemModel.prototype.getValidatorTitle = function () {
	        return this.title;
	    };
	    return MultipleTextItemModel;
	}(_base.Base);
	var QuestionMultipleTextModel = exports.QuestionMultipleTextModel = function (_super) {
	    __extends(QuestionMultipleTextModel, _super);
	    function QuestionMultipleTextModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.colCountValue = 1;
	        this.itemSize = 25;
	        this.itemsValues = new Array();
	        this.isMultipleItemValueChanging = false;
	        var self = this;
	        this.items.push = function (value) {
	            value.setData(self);
	            var result = Array.prototype.push.call(this, value);
	            self.fireCallback(self.colCountChangedCallback);
	            return result;
	        };
	    }
	    QuestionMultipleTextModel.prototype.getType = function () {
	        return "multipletext";
	    };
	    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
	        get: function get() {
	            return this.itemsValues;
	        },
	        set: function set(value) {
	            this.itemsValues = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMultipleTextModel.prototype.AddItem = function (name, title) {
	        if (title === void 0) {
	            title = null;
	        }
	        var item = this.createTextItem(name, title);
	        this.items.push(item);
	        return item;
	    };
	    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
	        get: function get() {
	            return this.colCountValue;
	        },
	        set: function set(value) {
	            if (value < 1 || value > 4) return;
	            this.colCountValue = value;
	            this.fireCallback(this.colCountChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionMultipleTextModel.prototype.getRows = function () {
	        var colCount = this.colCount;
	        var items = this.items;
	        var rows = [];
	        var index = 0;
	        for (var i = 0; i < items.length; i++) {
	            if (index == 0) {
	                rows.push([]);
	            }
	            rows[rows.length - 1].push(items[i]);
	            index++;
	            if (index >= colCount) {
	                index = 0;
	            }
	        }
	        return rows;
	    };
	    QuestionMultipleTextModel.prototype.onValueChanged = function () {
	        _super.prototype.onValueChanged.call(this);
	        this.onItemValueChanged();
	    };
	    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
	        return new MultipleTextItemModel(name, title);
	    };
	    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
	        if (this.isMultipleItemValueChanging) return;
	        for (var i = 0; i < this.items.length; i++) {
	            var itemValue = null;
	            if (this.value && this.items[i].name in this.value) {
	                itemValue = this.value[this.items[i].name];
	            }
	            this.items[i].onValueChanged(itemValue);
	        }
	    };
	    QuestionMultipleTextModel.prototype.runValidators = function () {
	        var error = _super.prototype.runValidators.call(this);
	        if (error != null) return error;
	        for (var i = 0; i < this.items.length; i++) {
	            error = new _validator.ValidatorRunner().run(this.items[i]);
	            if (error != null) return error;
	        }
	        return null;
	    };
	    //IMultipleTextData
	    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
	        if (!this.value) return null;
	        return this.value[name];
	    };
	    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
	        this.isMultipleItemValueChanging = true;
	        var newValue = this.value;
	        if (!newValue) {
	            newValue = {};
	        }
	        newValue[name] = value;
	        this.setNewValue(newValue);
	        this.isMultipleItemValueChanging = false;
	    };
	    return QuestionMultipleTextModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("multipletextitem", ["name", { name: "title", onGetValue: function onGetValue(obj) {
	        return obj.titleValue;
	    } }, { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () {
	    return new MultipleTextItemModel("");
	});
	_jsonobject.JsonObject.metaData.addClass("multipletext", [{ name: "!items:textitems", className: "multipletextitem" }, { name: "itemSize:number", default: 25 }, { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }], function () {
	    return new QuestionMultipleTextModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("multipletext", function (name) {
	    var q = new QuestionMultipleTextModel(name);q.AddItem("text1");q.AddItem("text2");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.PageModel = exports.QuestionRowModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _conditions = __webpack_require__(9);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionRowModel = exports.QuestionRowModel = function () {
	    function QuestionRowModel(page, question) {
	        this.page = page;
	        this.question = question;
	        this.visibleValue = false;
	        this.questions = [];
	        var self = this;
	        this.question.rowVisibilityChangedCallback = function () {
	            self.onRowVisibilityChanged();
	        };
	    }
	    Object.defineProperty(QuestionRowModel.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(val) {
	            if (val == this.visible) return;
	            this.visibleValue = val;
	            this.onVisibleChanged();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionRowModel.prototype.updateVisible = function () {
	        this.visible = this.calcVisible();
	        this.setWidth();
	    };
	    QuestionRowModel.prototype.addQuestion = function (q) {
	        this.questions.push(q);
	        this.updateVisible();
	    };
	    QuestionRowModel.prototype.onVisibleChanged = function () {
	        if (this.visibilityChangedCallback) this.visibilityChangedCallback();
	    };
	    QuestionRowModel.prototype.setWidth = function () {
	        var visCount = this.getVisibleCount();
	        if (visCount == 0) return;
	        var counter = 0;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.isQuestionVisible(this.questions[i])) {
	                this.questions[i].renderWidth = this.question.width ? this.question.width : Math.floor(100 / visCount) + '%';
	                this.questions[i].rightIndent = counter < visCount - 1 ? 1 : 0;
	                counter++;
	            }
	        }
	    };
	    QuestionRowModel.prototype.onRowVisibilityChanged = function () {
	        this.page.onRowVisibilityChanged(this);
	    };
	    QuestionRowModel.prototype.getVisibleCount = function () {
	        var res = 0;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.isQuestionVisible(this.questions[i])) res++;
	        }
	        return res;
	    };
	    QuestionRowModel.prototype.isQuestionVisible = function (q) {
	        return this.page.isQuestionVisible(q);
	    };
	    QuestionRowModel.prototype.calcVisible = function () {
	        return this.getVisibleCount() > 0;
	    };
	    return QuestionRowModel;
	}();
	var PageModel = exports.PageModel = function (_super) {
	    __extends(PageModel, _super);
	    function PageModel(name) {
	        if (name === void 0) {
	            name = "";
	        }
	        _super.call(this);
	        this.name = name;
	        this.rowValues = null;
	        this.conditionRunner = null;
	        this.questions = new Array();
	        this.data = null;
	        this.visibleIf = "";
	        this.title = "";
	        this.visibleIndex = -1;
	        this.numValue = -1;
	        this.visibleValue = true;
	        this.idValue = PageModel.getPageId();
	        var self = this;
	        this.questions.push = function (value) {
	            if (self.data != null) {
	                value.setData(self.data);
	            }
	            return Array.prototype.push.call(this, value);
	        };
	    }
	    PageModel.getPageId = function () {
	        return "sp_" + PageModel.pageCounter++;
	    };
	    Object.defineProperty(PageModel.prototype, "id", {
	        get: function get() {
	            return this.idValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "rows", {
	        get: function get() {
	            this.rowValues = this.buildRows();
	            return this.rowValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "isActive", {
	        get: function get() {
	            return !this.data || this.data.currentPage == this;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.isQuestionVisible = function (question) {
	        return question.visible || this.isDesignMode;
	    };
	    PageModel.prototype.createRow = function (question) {
	        return new QuestionRowModel(this, question);
	    };
	    Object.defineProperty(PageModel.prototype, "isDesignMode", {
	        get: function get() {
	            return this.data && this.data.isDesignMode;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.buildRows = function () {
	        var result = new Array();
	        var lastRowVisibleIndex = -1;
	        var self = this;
	        for (var i = 0; i < this.questions.length; i++) {
	            var q = this.questions[i];
	            result.push(this.createRow(q));
	            if (q.startWithNewLine) {
	                lastRowVisibleIndex = i;
	                result[i].addQuestion(q);
	            } else {
	                if (lastRowVisibleIndex < 0) lastRowVisibleIndex = i;
	                result[lastRowVisibleIndex].addQuestion(q);
	            }
	        }
	        for (var i = 0; i < result.length; i++) {
	            result[i].setWidth();
	        }
	        return result;
	    };
	    PageModel.prototype.onRowVisibilityChanged = function (row) {
	        if (!this.isActive || !this.rowValues) return;
	        var index = this.rowValues.indexOf(row);
	        for (var i = index; i >= 0; i--) {
	            if (this.rowValues[i].questions.indexOf(row.question) > -1) {
	                this.rowValues[i].updateVisible();
	                break;
	            }
	        }
	    };
	    Object.defineProperty(PageModel.prototype, "processedTitle", {
	        get: function get() {
	            return this.data != null ? this.data.processText(this.title) : this.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "num", {
	        get: function get() {
	            return this.numValue;
	        },
	        set: function set(value) {
	            if (this.numValue == value) return;
	            this.numValue = value;
	            this.onNumChanged(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PageModel.prototype, "visible", {
	        get: function get() {
	            return this.visibleValue;
	        },
	        set: function set(value) {
	            if (value === this.visible) return;
	            this.visibleValue = value;
	            if (this.data != null) {
	                this.data.pageVisibilityChanged(this, this.visible);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.getType = function () {
	        return "page";
	    };
	    Object.defineProperty(PageModel.prototype, "isVisible", {
	        get: function get() {
	            return this.getIsPageVisible(null);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PageModel.prototype.getIsPageVisible = function (exceptionQuestion) {
	        if (!this.visible) return false;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.questions[i] == exceptionQuestion) continue;
	            if (this.questions[i].visible) return true;
	        }
	        return false;
	    };
	    PageModel.prototype.addQuestion = function (question, index) {
	        if (index === void 0) {
	            index = -1;
	        }
	        if (question == null) return;
	        if (index < 0 || index >= this.questions.length) {
	            this.questions.push(question);
	        } else {
	            this.questions.splice(index, 0, question);
	        }
	        if (this.data != null) {
	            question.setData(this.data);
	            this.data.questionAdded(question, index);
	        }
	    };
	    PageModel.prototype.addNewQuestion = function (questionType, name) {
	        var question = _questionfactory.QuestionFactory.Instance.createQuestion(questionType, name);
	        this.addQuestion(question);
	        return question;
	    };
	    PageModel.prototype.removeQuestion = function (question) {
	        var index = this.questions.indexOf(question);
	        if (index < 0) return;
	        this.questions.splice(index, 1);
	        if (this.data != null) this.data.questionRemoved(question);
	    };
	    PageModel.prototype.focusFirstQuestion = function () {
	        for (var i = 0; i < this.questions.length; i++) {
	            var question = this.questions[i];
	            if (!question.visible || !question.hasInput) continue;
	            this.questions[i].focus();
	            break;
	        }
	    };
	    PageModel.prototype.focusFirstErrorQuestion = function () {
	        for (var i = 0; i < this.questions.length; i++) {
	            if (!this.questions[i].visible || this.questions[i].currentErrorCount == 0) continue;
	            this.questions[i].focus(true);
	            break;
	        }
	    };
	    PageModel.prototype.scrollToTop = function () {
	        _base.SurveyElement.ScrollElementToTop(_base.SurveyPageId);
	    };
	    PageModel.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
	        if (fireCallback === void 0) {
	            fireCallback = true;
	        }
	        if (focuseOnFirstError === void 0) {
	            focuseOnFirstError = false;
	        }
	        var result = false;
	        var firstErrorQuestion = null;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (this.questions[i].visible && this.questions[i].hasErrors(fireCallback)) {
	                if (focuseOnFirstError && firstErrorQuestion == null) {
	                    firstErrorQuestion = this.questions[i];
	                }
	                result = true;
	            }
	        }
	        if (firstErrorQuestion) firstErrorQuestion.focus(true);
	        return result;
	    };
	    PageModel.prototype.addQuestionsToList = function (list, visibleOnly) {
	        if (visibleOnly === void 0) {
	            visibleOnly = false;
	        }
	        if (visibleOnly && !this.visible) return;
	        for (var i = 0; i < this.questions.length; i++) {
	            if (visibleOnly && !this.questions[i].visible) continue;
	            list.push(this.questions[i]);
	        }
	    };
	    PageModel.prototype.runCondition = function (values) {
	        if (!this.visibleIf) return;
	        if (!this.conditionRunner) this.conditionRunner = new _conditions.ConditionRunner(this.visibleIf);
	        this.conditionRunner.expression = this.visibleIf;
	        this.visible = this.conditionRunner.run(values);
	    };
	    PageModel.prototype.onNumChanged = function (value) {};
	    PageModel.pageCounter = 100;
	    return PageModel;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("page", ["name", { name: "questions", baseClassName: "question" }, { name: "visible:boolean", default: true }, "visibleIf", "title"], function () {
	    return new PageModel();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var QuestionCheckboxModel = exports.QuestionCheckboxModel = function (_super) {
	    __extends(QuestionCheckboxModel, _super);
	    function QuestionCheckboxModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionCheckboxModel.prototype.getHasOther = function (val) {
	        if (!val) return false;
	        return val.indexOf(this.otherItem.value) >= 0;
	    };
	    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
	        if (!val || !val.length) return val;
	        for (var i = 0; i < val.length; i++) {
	            if (val[i] == this.otherItem.value) return val;
	            if (this.hasUnknownValue(val[i])) {
	                this.comment = val[i];
	                var newVal = val.slice();
	                newVal[i] = this.otherItem.value;
	                return newVal;
	            }
	        }
	        return val;
	    };
	    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
	        if (!val || !val.length) return val;
	        for (var i = 0; i < val.length; i++) {
	            if (val[i] == this.otherItem.value) {
	                if (this.getComment()) {
	                    var newVal = val.slice();
	                    newVal[i] = this.getComment();
	                    return newVal;
	                }
	            }
	        }
	        return val;
	    };
	    QuestionCheckboxModel.prototype.getType = function () {
	        return "checkbox";
	    };
	    return QuestionCheckboxModel;
	}(_question_baseselect.QuestionCheckboxBase);
	_jsonobject.JsonObject.metaData.addClass("checkbox", [], function () {
	    return new QuestionCheckboxModel("");
	}, "checkboxbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("checkbox", function (name) {
	    var q = new QuestionCheckboxModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCommentModel = undefined;
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionCommentModel = exports.QuestionCommentModel = function (_super) {
	    __extends(QuestionCommentModel, _super);
	    function QuestionCommentModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rows = 4;
	        this.cols = 50;
	    }
	    QuestionCommentModel.prototype.getType = function () {
	        return "comment";
	    };
	    QuestionCommentModel.prototype.isEmpty = function () {
	        return _super.prototype.isEmpty.call(this) || this.value == "";
	    };
	    return QuestionCommentModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("comment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 }], function () {
	    return new QuestionCommentModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("comment", function (name) {
	    return new QuestionCommentModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDropdownModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var _surveyStrings = __webpack_require__(6);
	
	var QuestionDropdownModel = exports.QuestionDropdownModel = function (_super) {
	    __extends(QuestionDropdownModel, _super);
	    function QuestionDropdownModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
	        get: function get() {
	            return this.optionsCaptionValue ? this.optionsCaptionValue : _surveyStrings.surveyLocalization.getString("optionsCaption");
	        },
	        set: function set(newValue) {
	            this.optionsCaptionValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionDropdownModel.prototype.getType = function () {
	        return "dropdown";
	    };
	    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionDropdownModel;
	}(_question_baseselect.QuestionSelectBase);
	_jsonobject.JsonObject.metaData.addClass("dropdown", [{ name: "optionsCaption", onGetValue: function onGetValue(obj) {
	        return obj.optionsCaptionValue;
	    } }], function () {
	    return new QuestionDropdownModel("");
	}, "selectbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("dropdown", function (name) {
	    var q = new QuestionDropdownModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionFileModel = undefined;
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _error = __webpack_require__(5);
	
	var _surveyStrings = __webpack_require__(6);
	
	var QuestionFileModel = exports.QuestionFileModel = function (_super) {
	    __extends(QuestionFileModel, _super);
	    function QuestionFileModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.showPreviewValue = false;
	        this.isUploading = false;
	    }
	    QuestionFileModel.prototype.getType = function () {
	        return "file";
	    };
	    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
	        get: function get() {
	            return this.showPreviewValue;
	        },
	        set: function set(value) {
	            this.showPreviewValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionFileModel.prototype.loadFile = function (file) {
	        var self = this;
	        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status) {
	            self.isUploading = status == "uploading";
	        })) return;
	        this.setFileValue(file);
	    };
	    QuestionFileModel.prototype.setFileValue = function (file) {
	        if (!FileReader) return;
	        if (!this.showPreview && !this.storeDataAsText) return;
	        if (this.checkFileForErrors(file)) return;
	        var fileReader = new FileReader();
	        var self = this;
	        fileReader.onload = function (e) {
	            if (self.showPreview) {
	                self.previewValue = self.isFileImage(file) ? fileReader.result : null;
	                self.fireCallback(self.previewValueLoadedCallback);
	            }
	            if (self.storeDataAsText) {
	                self.value = fileReader.result;
	            }
	        };
	        fileReader.readAsDataURL(file);
	    };
	    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
	        _super.prototype.onCheckForErrors.call(this, errors);
	        if (this.isUploading) {
	            this.errors.push(new _error.CustomError(_surveyStrings.surveyLocalization.getString("uploadingFile")));
	        }
	    };
	    QuestionFileModel.prototype.checkFileForErrors = function (file) {
	        var errorLength = this.errors ? this.errors.length : 0;
	        this.errors = [];
	        if (this.maxSize > 0 && file.size > this.maxSize) {
	            this.errors.push(new _error.ExceedSizeError(this.maxSize));
	        }
	        if (errorLength != this.errors.length || this.errors.length > 0) {
	            this.fireCallback(this.errorsChangedCallback);
	        }
	        return this.errors.length > 0;
	    };
	    QuestionFileModel.prototype.isFileImage = function (file) {
	        if (!file || !file.type) return;
	        var str = file.type.toLowerCase();
	        return str.indexOf("image") == 0;
	    };
	    return QuestionFileModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () {
	    return new QuestionFileModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("file", function (name) {
	    return new QuestionFileModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionHtmlModel = undefined;
	
	var _questionbase = __webpack_require__(13);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionHtmlModel = exports.QuestionHtmlModel = function (_super) {
	    __extends(QuestionHtmlModel, _super);
	    function QuestionHtmlModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionHtmlModel.prototype.getType = function () {
	        return "html";
	    };
	    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
	        get: function get() {
	            return this.htmlValue;
	        },
	        set: function set(value) {
	            this.htmlValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
	        get: function get() {
	            return this.survey ? this.survey.processHtml(this.html) : this.html;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionHtmlModel;
	}(_questionbase.QuestionBase);
	_jsonobject.JsonObject.metaData.addClass("html", ["html:html"], function () {
	    return new QuestionHtmlModel("");
	}, "questionbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("html", function (name) {
	    return new QuestionHtmlModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRadiogroupModel = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_baseselect = __webpack_require__(15);
	
	var QuestionRadiogroupModel = exports.QuestionRadiogroupModel = function (_super) {
	    __extends(QuestionRadiogroupModel, _super);
	    function QuestionRadiogroupModel(name) {
	        _super.call(this, name);
	        this.name = name;
	    }
	    QuestionRadiogroupModel.prototype.getType = function () {
	        return "radiogroup";
	    };
	    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    return QuestionRadiogroupModel;
	}(_question_baseselect.QuestionCheckboxBase);
	_jsonobject.JsonObject.metaData.addClass("radiogroup", [], function () {
	    return new QuestionRadiogroupModel("");
	}, "checkboxbase");
	_questionfactory.QuestionFactory.Instance.registerQuestion("radiogroup", function (name) {
	    var q = new QuestionRadiogroupModel(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRatingModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _question = __webpack_require__(12);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var QuestionRatingModel = exports.QuestionRatingModel = function (_super) {
	    __extends(QuestionRatingModel, _super);
	    function QuestionRatingModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.rates = [];
	        this.mininumRateDescription = null;
	        this.maximumRateDescription = null;
	    }
	    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
	        get: function get() {
	            return this.rates;
	        },
	        set: function set(newValue) {
	            _base.ItemValue.setData(this.rates, newValue);
	            this.fireCallback(this.rateValuesChangedCallback);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
	        get: function get() {
	            if (this.rateValues.length > 0) return this.rateValues;
	            return QuestionRatingModel.defaultRateValues;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionRatingModel.prototype.getType = function () {
	        return "rating";
	    };
	    QuestionRatingModel.prototype.supportComment = function () {
	        return true;
	    };
	    QuestionRatingModel.prototype.supportOther = function () {
	        return true;
	    };
	    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    QuestionRatingModel.defaultRateValues = [];
	    return QuestionRatingModel;
	}(_question.Question);
	_base.ItemValue.setData(QuestionRatingModel.defaultRateValues, [1, 2, 3, 4, 5]);
	_jsonobject.JsonObject.metaData.addClass("rating", ["hasComment:boolean", { name: "rateValues:itemvalues", onGetValue: function onGetValue(obj) {
	        return _base.ItemValue.getData(obj.rateValues);
	    }, onSetValue: function onSetValue(obj, value) {
	        obj.rateValues = value;
	    } }, "mininumRateDescription", "maximumRateDescription"], function () {
	    return new QuestionRatingModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("rating", function (name) {
	    return new QuestionRatingModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionTextModel = undefined;
	
	var _questionfactory = __webpack_require__(16);
	
	var _jsonobject = __webpack_require__(7);
	
	var _question = __webpack_require__(12);
	
	var QuestionTextModel = exports.QuestionTextModel = function (_super) {
	    __extends(QuestionTextModel, _super);
	    function QuestionTextModel(name) {
	        _super.call(this, name);
	        this.name = name;
	        this.size = 25;
	        this.inputType = "text";
	    }
	    QuestionTextModel.prototype.getType = function () {
	        return "text";
	    };
	    QuestionTextModel.prototype.isEmpty = function () {
	        return _super.prototype.isEmpty.call(this) || this.value == "";
	    };
	    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () {
	        return true;
	    };
	    QuestionTextModel.prototype.setNewValue = function (newValue) {
	        newValue = this.correctValueType(newValue);
	        _super.prototype.setNewValue.call(this, newValue);
	    };
	    QuestionTextModel.prototype.correctValueType = function (newValue) {
	        if (!newValue) return newValue;
	        if (this.inputType == "number" || this.inputType == "range") {
	            return this.isNumber(newValue) ? parseFloat(newValue) : "";
	        }
	        return newValue;
	    };
	    QuestionTextModel.prototype.isNumber = function (value) {
	        return !isNaN(parseFloat(value)) && isFinite(value);
	    };
	    return QuestionTextModel;
	}(_question.Question);
	_jsonobject.JsonObject.metaData.addClass("text", [{ name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] }, { name: "size:number", default: 25 }], function () {
	    return new QuestionTextModel("");
	}, "question");
	_questionfactory.QuestionFactory.Instance.registerQuestion("text", function (name) {
	    return new QuestionTextModel(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyModel = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _jsonobject = __webpack_require__(7);
	
	var _base = __webpack_require__(4);
	
	var _page = __webpack_require__(21);
	
	var _textPreProcessor = __webpack_require__(14);
	
	var _dxSurveyService = __webpack_require__(31);
	
	var _surveyStrings = __webpack_require__(6);
	
	var _error = __webpack_require__(5);
	
	var SurveyModel = exports.SurveyModel = function (_super) {
	    __extends(SurveyModel, _super);
	    function SurveyModel(jsonObj) {
	        if (jsonObj === void 0) {
	            jsonObj = null;
	        }
	        _super.call(this);
	        this.surveyId = null;
	        this.surveyPostId = null;
	        this.clientId = null;
	        this.cookieName = null;
	        this.sendResultOnPageNext = false;
	        this.commentPrefix = "-Comment";
	        this.title = "";
	        this.showNavigationButtons = true;
	        this.showTitle = true;
	        this.showPageTitles = true;
	        this.completedHtml = "";
	        this.requiredText = "*";
	        this.questionStartIndex = "";
	        this.questionTitleTemplate = "";
	        this.showProgressBar = "off";
	        this.storeOthersAsComment = true;
	        this.goNextPageAutomatic = false;
	        this.pages = new Array();
	        this.triggers = new Array();
	        this.clearInvisibleValues = false;
	        this.currentPageValue = null;
	        this.valuesHash = {};
	        this.variablesHash = {};
	        this.showPageNumbersValue = false;
	        this.showQuestionNumbersValue = "on";
	        this.questionTitleLocationValue = "top";
	        this.localeValue = "";
	        this.isCompleted = false;
	        this.isLoading = false;
	        this.processedTextValues = {};
	        this.isValidatingOnServerValue = false;
	        this.onComplete = new _base.Event();
	        this.onCurrentPageChanged = new _base.Event();
	        this.onValueChanged = new _base.Event();
	        this.onVisibleChanged = new _base.Event();
	        this.onPageVisibleChanged = new _base.Event();
	        this.onQuestionAdded = new _base.Event();
	        this.onQuestionRemoved = new _base.Event();
	        this.onValidateQuestion = new _base.Event();
	        this.onProcessHtml = new _base.Event();
	        this.onSendResult = new _base.Event();
	        this.onGetResult = new _base.Event();
	        this.onUploadFile = new _base.Event();
	        this.jsonErrors = null;
	        this.mode = "normal";
	        var self = this;
	        this.textPreProcessor = new _textPreProcessor.TextPreProcessor();
	        this.textPreProcessor.onHasValue = function (name) {
	            return self.processedTextValues[name.toLowerCase()];
	        };
	        this.textPreProcessor.onProcess = function (name) {
	            return self.getProcessedTextValue(name);
	        };
	        this.pages.push = function (value) {
	            value.data = self;
	            return Array.prototype.push.call(this, value);
	        };
	        this.triggers.push = function (value) {
	            value.setOwner(self);
	            return Array.prototype.push.call(this, value);
	        };
	        this.updateProcessedTextValues();
	        this.onBeforeCreating();
	        if (jsonObj) {
	            this.setJsonObject(jsonObj);
	            if (this.surveyId) {
	                this.loadSurveyFromService(this.surveyId);
	            }
	        }
	        this.onCreating();
	    }
	    SurveyModel.prototype.getType = function () {
	        return "survey";
	    };
	    Object.defineProperty(SurveyModel.prototype, "locale", {
	        get: function get() {
	            return this.localeValue;
	        },
	        set: function set(value) {
	            this.localeValue = value;
	            _surveyStrings.surveyLocalization.currentLocale = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.getLocString = function (str) {
	        return _surveyStrings.surveyLocalization.getString(str);
	    };
	    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
	        get: function get() {
	            return this.getLocString("emptySurvey");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
	        get: function get() {
	            return this.pagePrevTextValue ? this.pagePrevTextValue : this.getLocString("pagePrevText");
	        },
	        set: function set(newValue) {
	            this.pagePrevTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
	        get: function get() {
	            return this.pageNextTextValue ? this.pageNextTextValue : this.getLocString("pageNextText");
	        },
	        set: function set(newValue) {
	            this.pageNextTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "completeText", {
	        get: function get() {
	            return this.completeTextValue ? this.completeTextValue : this.getLocString("completeText");
	        },
	        set: function set(newValue) {
	            this.completeTextValue = newValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
	        get: function get() {
	            return this.showPageNumbersValue;
	        },
	        set: function set(value) {
	            if (value === this.showPageNumbers) return;
	            this.showPageNumbersValue = value;
	            this.updateVisibleIndexes();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
	        get: function get() {
	            return this.showQuestionNumbersValue;
	        },
	        set: function set(value) {
	            if (value === this.showQuestionNumbers) return;
	            this.showQuestionNumbersValue = value;
	            this.updateVisibleIndexes();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
	        get: function get() {
	            return this.questionTitleLocationValue;
	        },
	        set: function set(value) {
	            if (value === this.questionTitleLocationValue) return;
	            this.questionTitleLocationValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    ;
	    Object.defineProperty(SurveyModel.prototype, "data", {
	        get: function get() {
	            var result = {};
	            for (var key in this.valuesHash) {
	                result[key] = this.valuesHash[key];
	            }
	            return result;
	        },
	        set: function set(data) {
	            this.valuesHash = {};
	            if (data) {
	                for (var key in data) {
	                    this.valuesHash[key] = data[key];
	                    this.checkTriggers(key, data[key], false);
	                }
	            }
	            this.notifyAllQuestionsOnValueChanged();
	            this.runConditions();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "comments", {
	        get: function get() {
	            var result = {};
	            for (var key in this.valuesHash) {
	                if (key.indexOf(this.commentPrefix) > 0) {
	                    result[key] = this.valuesHash[key];
	                }
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
	        get: function get() {
	            if (this.isDesignMode) return this.pages;
	            var result = new Array();
	            for (var i = 0; i < this.pages.length; i++) {
	                if (this.pages[i].isVisible) {
	                    result.push(this.pages[i]);
	                }
	            }
	            return result;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
	        get: function get() {
	            return this.pages.length == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "PageCount", {
	        get: function get() {
	            return this.pages.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
	        get: function get() {
	            return this.visiblePages.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "currentPage", {
	        get: function get() {
	            var vPages = this.visiblePages;
	            if (this.currentPageValue != null) {
	                if (vPages.indexOf(this.currentPageValue) < 0) {
	                    this.currentPage = null;
	                }
	            }
	            if (this.currentPageValue == null && vPages.length > 0) {
	                this.currentPage = vPages[0];
	            }
	            return this.currentPageValue;
	        },
	        set: function set(value) {
	            var vPages = this.visiblePages;
	            if (value != null && vPages.indexOf(value) < 0) return;
	            if (value == this.currentPageValue) return;
	            var oldValue = this.currentPageValue;
	            this.currentPageValue = value;
	            this.currentPageChanged(value, oldValue);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "currentPageNo", {
	        get: function get() {
	            return this.visiblePages.indexOf(this.currentPage);
	        },
	        set: function set(value) {
	            var vPages = this.visiblePages;
	            if (value < 0 || value >= this.visiblePages.length) return;
	            this.currentPage = this.visiblePages[value];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.focusFirstQuestion = function () {
	        if (this.currentPageValue) {
	            this.currentPageValue.scrollToTop();
	            this.currentPageValue.focusFirstQuestion();
	        }
	    };
	    Object.defineProperty(SurveyModel.prototype, "state", {
	        get: function get() {
	            if (this.isLoading) return "loading";
	            if (this.isCompleted) return "completed";
	            return this.currentPage ? "running" : "empty";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.clear = function () {
	        this.data = null;
	        this.variablesHash = {};
	        this.isCompleted = false;
	        if (this.visiblePageCount > 0) {
	            this.currentPage = this.visiblePages[0];
	        }
	    };
	    SurveyModel.prototype.mergeValues = function (src, dest) {
	        if (!dest || !src) return;
	        for (var key in src) {
	            var value = src[key];
	            if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
	                if (!dest[key]) dest[key] = {};
	                this.mergeValues(value, dest[key]);
	            } else {
	                dest[key] = value;
	            }
	        }
	    };
	    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
	        this.onCurrentPageChanged.fire(this, { 'oldCurrentPage': oldValue, 'newCurrentPage': newValue });
	    };
	    SurveyModel.prototype.getProgress = function () {
	        if (this.currentPage == null) return 0;
	        var index = this.visiblePages.indexOf(this.currentPage) + 1;
	        return Math.ceil(index * 100 / this.visiblePageCount);
	    };
	    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
	        get: function get() {
	            return this.mode == "designer";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
	        get: function get() {
	            if (!this.cookieName) return false;
	            var cookies = document.cookie;
	            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.setCookie = function () {
	        if (!this.cookieName) return;
	        document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
	    };
	    SurveyModel.prototype.deleteCookie = function () {
	        if (!this.cookieName) return;
	        document.cookie = this.cookieName + "=;";
	    };
	    SurveyModel.prototype.nextPage = function () {
	        if (this.isLastPage) return false;
	        if (this.isCurrentPageHasErrors) return false;
	        if (this.doServerValidation()) return false;
	        this.doNextPage();
	        return true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            return this.currentPage.hasErrors(true, true);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.prevPage = function () {
	        if (this.isFirstPage) return false;
	        var vPages = this.visiblePages;
	        var index = vPages.indexOf(this.currentPage);
	        this.currentPage = vPages[index - 1];
	    };
	    SurveyModel.prototype.completeLastPage = function () {
	        if (this.isCurrentPageHasErrors) return false;
	        if (this.doServerValidation()) return false;
	        this.doComplete();
	        return true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            return this.visiblePages.indexOf(this.currentPage) == 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
	        get: function get() {
	            if (this.currentPage == null) return true;
	            var vPages = this.visiblePages;
	            return vPages.indexOf(this.currentPage) == vPages.length - 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.doComplete = function () {
	        if (this.clearInvisibleValues) {
	            this.clearInvisibleQuestionValues();
	        }
	        this.setCookie();
	        this.setCompleted();
	        this.onComplete.fire(this, null);
	        if (this.surveyPostId) {
	            this.sendResult();
	        }
	    };
	    Object.defineProperty(SurveyModel.prototype, "isValidatingOnServer", {
	        get: function get() {
	            return this.isValidatingOnServerValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.setIsValidatingOnServer = function (val) {
	        if (val == this.isValidatingOnServer) return;
	        this.isValidatingOnServerValue = val;
	        this.onIsValidatingOnServerChanged();
	    };
	    SurveyModel.prototype.onIsValidatingOnServerChanged = function () {};
	    SurveyModel.prototype.doServerValidation = function () {
	        if (!this.onServerValidateQuestions) return false;
	        var self = this;
	        var options = { data: {}, errors: {}, survey: this, complete: function complete() {
	                self.completeServerValidation(options);
	            } };
	        for (var i = 0; i < this.currentPage.questions.length; i++) {
	            var question = this.currentPage.questions[i];
	            if (!question.visible) continue;
	            var value = this.getValue(question.name);
	            if (value) options.data[question.name] = value;
	        }
	        this.setIsValidatingOnServer(true);
	        this.onServerValidateQuestions(this, options);
	        return true;
	    };
	    SurveyModel.prototype.completeServerValidation = function (options) {
	        this.setIsValidatingOnServer(false);
	        if (!options && !options.survey) return;
	        var self = options.survey;
	        var hasErrors = false;
	        if (options.errors) {
	            for (var name in options.errors) {
	                var question = self.getQuestionByName(name);
	                if (question && question["errors"]) {
	                    hasErrors = true;
	                    question["addError"](new _error.CustomError(options.errors[name]));
	                }
	            }
	        }
	        if (!hasErrors) {
	            if (self.isLastPage) self.doComplete();else self.doNextPage();
	        }
	    };
	    SurveyModel.prototype.doNextPage = function () {
	        this.checkOnPageTriggers();
	        if (this.sendResultOnPageNext && this.clientId) {
	            this.sendResult(this.surveyPostId, this.clientId, true);
	        }
	        var vPages = this.visiblePages;
	        var index = vPages.indexOf(this.currentPage);
	        this.currentPage = vPages[index + 1];
	    };
	    SurveyModel.prototype.setCompleted = function () {
	        this.isCompleted = true;
	    };
	    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
	        get: function get() {
	            if (this.completedHtml) {
	                return this.processHtml(this.completedHtml);
	            }
	            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
	        get: function get() {
	            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyModel.prototype, "progressText", {
	        get: function get() {
	            if (this.currentPage == null) return "";
	            var vPages = this.visiblePages;
	            var index = vPages.indexOf(this.currentPage) + 1;
	            return this.getLocString("progressText")["format"](index, vPages.length);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
	        var accept = true;
	        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
	        if (!accept) return false;
	        if (!storeDataAsText && this.surveyPostId) {
	            this.uploadFileCore(name, file, uploadingCallback);
	        }
	        return true;
	    };
	    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
	        var self = this;
	        if (uploadingCallback) uploadingCallback("uploading");
	        new _dxSurveyService.dxSurveyService().sendFile(this.surveyPostId, file, function (success, response) {
	            if (uploadingCallback) uploadingCallback(success ? "success" : "error");
	            if (success) {
	                self.setValue(name, response);
	            }
	        });
	    };
	    SurveyModel.prototype.getPage = function (index) {
	        return this.pages[index];
	    };
	    SurveyModel.prototype.addPage = function (page) {
	        if (page == null) return;
	        this.pages.push(page);
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.addNewPage = function (name) {
	        var page = this.createNewPage(name);
	        this.addPage(page);
	        return page;
	    };
	    SurveyModel.prototype.removePage = function (page) {
	        var index = this.pages.indexOf(page);
	        if (index < 0) return;
	        this.pages.splice(index, 1);
	        if (this.currentPageValue == page) {
	            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
	        }
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
	        if (caseInsensitive === void 0) {
	            caseInsensitive = false;
	        }
	        var questions = this.getAllQuestions();
	        if (caseInsensitive) name = name.toLowerCase();
	        for (var i = 0; i < questions.length; i++) {
	            var questionName = questions[i].name;
	            if (caseInsensitive) questionName = questionName.toLowerCase();
	            if (questionName == name) return questions[i];
	        }
	        return null;
	    };
	    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
	        if (caseInsensitive === void 0) {
	            caseInsensitive = false;
	        }
	        var result = [];
	        if (!names) return result;
	        for (var i = 0; i < names.length; i++) {
	            if (!names[i]) continue;
	            var question = this.getQuestionByName(names[i], caseInsensitive);
	            if (question) result.push(question);
	        }
	        return result;
	    };
	    SurveyModel.prototype.getPageByQuestion = function (question) {
	        for (var i = 0; i < this.pages.length; i++) {
	            var page = this.pages[i];
	            if (page.questions.indexOf(question) > -1) return page;
	        }
	        return null;
	    };
	    SurveyModel.prototype.getPageByName = function (name) {
	        for (var i = 0; i < this.pages.length; i++) {
	            if (this.pages[i].name == name) return this.pages[i];
	        }
	        return null;
	    };
	    SurveyModel.prototype.getPagesByNames = function (names) {
	        var result = [];
	        if (!names) return result;
	        for (var i = 0; i < names.length; i++) {
	            if (!names[i]) continue;
	            var page = this.getPageByName(names[i]);
	            if (page) result.push(page);
	        }
	        return result;
	    };
	    SurveyModel.prototype.getAllQuestions = function (visibleOnly) {
	        if (visibleOnly === void 0) {
	            visibleOnly = false;
	        }
	        var result = new Array();
	        for (var i = 0; i < this.pages.length; i++) {
	            this.pages[i].addQuestionsToList(result, visibleOnly);
	        }
	        return result;
	    };
	    SurveyModel.prototype.createNewPage = function (name) {
	        return new _page.PageModel(name);
	    };
	    SurveyModel.prototype.notifyQuestionOnValueChanged = function (name, newValue) {
	        var questions = this.getAllQuestions();
	        var question = null;
	        for (var i = 0; i < questions.length; i++) {
	            if (questions[i].name != name) continue;
	            question = questions[i];
	            this.doSurveyValueChanged(question, newValue);
	        }
	        this.onValueChanged.fire(this, { 'name': name, 'question': question, 'value': newValue });
	    };
	    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].name));
	        }
	    };
	    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
	        question.onSurveyValueChanged(newValue);
	    };
	    SurveyModel.prototype.checkOnPageTriggers = function () {
	        var questions = this.getCurrentPageQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            var question = questions[i];
	            var value = this.getValue(question.name);
	            this.checkTriggers(question.name, value, true);
	        }
	    };
	    SurveyModel.prototype.getCurrentPageQuestions = function () {
	        var result = [];
	        var page = this.currentPage;
	        if (!page) return result;
	        for (var i = 0; i < page.questions.length; i++) {
	            var question = page.questions[i];
	            if (!question.visible || !question.name) continue;
	            result.push(question);
	        }
	        return result;
	    };
	    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
	        for (var i = 0; i < this.triggers.length; i++) {
	            var trigger = this.triggers[i];
	            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
	                trigger.check(newValue);
	            }
	        }
	    };
	    SurveyModel.prototype.doQuestionsOnLoad = function () {
	        var questions = this.getAllQuestions(false);
	        for (var i = 0; i < questions.length; i++) {
	            questions[i].onSurveyLoad();
	        }
	    };
	    SurveyModel.prototype.runConditions = function () {
	        this.runConditionsForList(this.getAllQuestions(false));
	        this.runConditionsForList(this.pages);
	    };
	    SurveyModel.prototype.runConditionsForList = function (list) {
	        for (var i = 0; i < list.length; i++) {
	            list[i].runCondition(this.valuesHash);
	        }
	    };
	    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
	        if (postId === void 0) {
	            postId = null;
	        }
	        if (clientId === void 0) {
	            clientId = null;
	        }
	        if (isPartialCompleted === void 0) {
	            isPartialCompleted = false;
	        }
	        if (!postId && this.surveyPostId) {
	            postId = this.surveyPostId;
	        }
	        if (!postId) return;
	        if (clientId) {
	            this.clientId = clientId;
	        }
	        var self = this;
	        new _dxSurveyService.dxSurveyService().sendResult(postId, this.data, function (success, response) {
	            self.onSendResult.fire(self, { success: success, response: response });
	        }, this.clientId, isPartialCompleted);
	    };
	    SurveyModel.prototype.getResult = function (resultId, name) {
	        var self = this;
	        new _dxSurveyService.dxSurveyService().getResult(resultId, name, function (success, data, dataList, response) {
	            self.onGetResult.fire(self, { success: success, data: data, dataList: dataList, response: response });
	        });
	    };
	    SurveyModel.prototype.loadSurveyFromService = function (surveyId) {
	        if (surveyId === void 0) {
	            surveyId = null;
	        }
	        if (surveyId) {
	            this.surveyId = surveyId;
	        }
	        var self = this;
	        this.isLoading = true;
	        this.onLoadingSurveyFromService();
	        new _dxSurveyService.dxSurveyService().loadSurvey(this.surveyId, function (success, result, response) {
	            self.isLoading = false;
	            if (success && result) {
	                self.setJsonObject(result);
	                self.notifyAllQuestionsOnValueChanged();
	                self.onLoadSurveyFromService();
	            }
	        });
	    };
	    SurveyModel.prototype.onLoadingSurveyFromService = function () {};
	    SurveyModel.prototype.onLoadSurveyFromService = function () {};
	    SurveyModel.prototype.checkPageVisibility = function (question, oldQuestionVisible) {
	        var page = this.getPageByQuestion(question);
	        if (!page) return;
	        var newValue = page.isVisible;
	        if (newValue != page.getIsPageVisible(question) || oldQuestionVisible) {
	            this.pageVisibilityChanged(page, newValue);
	        }
	    };
	    SurveyModel.prototype.updateVisibleIndexes = function () {
	        this.updatePageVisibleIndexes(this.showPageNumbers);
	        if (this.showQuestionNumbers == "onPage") {
	            var visPages = this.visiblePages;
	            for (var i = 0; i < visPages.length; i++) {
	                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
	            }
	        } else {
	            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
	        }
	    };
	    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
	        var index = 0;
	        for (var i = 0; i < this.pages.length; i++) {
	            this.pages[i].visibleIndex = this.pages[i].visible ? index++ : -1;
	            this.pages[i].num = showIndex && this.pages[i].visible ? this.pages[i].visibleIndex + 1 : -1;
	        }
	    };
	    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
	        var index = 0;
	        for (var i = 0; i < questions.length; i++) {
	            questions[i].setVisibleIndex(showIndex && questions[i].visible && questions[i].hasTitle ? index++ : -1);
	        }
	    };
	    SurveyModel.prototype.setJsonObject = function (jsonObj) {
	        if (!jsonObj) return;
	        this.jsonErrors = null;
	        var jsonConverter = new _jsonobject.JsonObject();
	        jsonConverter.toObject(jsonObj, this);
	        if (jsonConverter.errors.length > 0) {
	            this.jsonErrors = jsonConverter.errors;
	        }
	        this.updateProcessedTextValues();
	        if (this.hasCookie) {
	            this.doComplete();
	        }
	        this.doQuestionsOnLoad();
	        this.runConditions();
	        this.updateVisibleIndexes();
	    };
	    SurveyModel.prototype.onBeforeCreating = function () {};
	    SurveyModel.prototype.onCreating = function () {};
	    SurveyModel.prototype.updateProcessedTextValues = function () {
	        this.processedTextValues = {};
	        var self = this;
	        this.processedTextValues["pageno"] = function (name) {
	            return self.currentPage != null ? self.visiblePages.indexOf(self.currentPage) + 1 : 0;
	        };
	        this.processedTextValues["pagecount"] = function (name) {
	            return self.visiblePageCount;
	        };
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            this.addQuestionToProcessedTextValues(questions[i]);
	        }
	    };
	    SurveyModel.prototype.addQuestionToProcessedTextValues = function (question) {
	        this.processedTextValues[question.name.toLowerCase()] = "question";
	    };
	    SurveyModel.prototype.getProcessedTextValue = function (name) {
	        var name = name.toLowerCase();
	        var val = this.processedTextValues[name];
	        if (!val) return null;
	        if (val == "question") {
	            var question = this.getQuestionByName(name, true);
	            return question != null ? this.getValue(question.name) : null;
	        }
	        if (val == "value") {
	            return this.getValue(name);
	        }
	        if (val == "variable") {
	            return this.getVariable(name);
	        }
	        return val(name);
	    };
	    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
	        var questions = this.getAllQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            if (questions[i].visible) continue;
	            this.setValue(questions[i].name, null);
	        }
	    };
	    SurveyModel.prototype.getVariable = function (name) {
	        if (!name) return null;
	        return this.variablesHash[name];
	    };
	    SurveyModel.prototype.setVariable = function (name, newValue) {
	        if (!name) return;
	        this.variablesHash[name] = newValue;
	        this.processedTextValues[name.toLowerCase()] = "variable";
	    };
	    //ISurvey data
	    SurveyModel.prototype.getUnbindValue = function (value) {
	        if (value && value instanceof Object) {
	            //do not return the same object instance!!!
	            return JSON.parse(JSON.stringify(value));
	        }
	        return value;
	    };
	    SurveyModel.prototype.getValue = function (name) {
	        if (!name || name.length == 0) return null;
	        var value = this.valuesHash[name];
	        return this.getUnbindValue(value);
	    };
	    SurveyModel.prototype.setValue = function (name, newValue) {
	        if (this.isValueEqual(name, newValue)) return;
	        if (newValue == "" || newValue == null) {
	            delete this.valuesHash[name];
	        } else {
	            newValue = this.getUnbindValue(newValue);
	            this.valuesHash[name] = newValue;
	            this.processedTextValues[name.toLowerCase()] = "value";
	        }
	        this.notifyQuestionOnValueChanged(name, newValue);
	        this.checkTriggers(name, newValue, false);
	        this.runConditions();
	        this.tryGoNextPageAutomatic(name);
	    };
	    SurveyModel.prototype.isValueEqual = function (name, newValue) {
	        if (newValue == "") newValue = null;
	        var oldValue = this.getValue(name);
	        if (newValue === null || oldValue === null) return newValue === oldValue;
	        return this.isTwoValueEquals(newValue, oldValue);
	    };
	    SurveyModel.prototype.isTwoValueEquals = function (x, y) {
	        if (x === y) return true;
	        if (!(x instanceof Object) || !(y instanceof Object)) return false;
	        for (var p in x) {
	            if (!x.hasOwnProperty(p)) continue;
	            if (!y.hasOwnProperty(p)) return false;
	            if (x[p] === y[p]) continue;
	            if (_typeof(x[p]) !== "object") return false;
	            if (!this.isTwoValueEquals(x[p], y[p])) return false;
	        }
	        for (p in y) {
	            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
	        }
	        return true;
	    };
	    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
	        if (!this.goNextPageAutomatic || !this.currentPage) return;
	        var question = this.getQuestionByName(name);
	        if (question && !question.supportGoNextPageAutomatic()) return;
	        var questions = this.getCurrentPageQuestions();
	        for (var i = 0; i < questions.length; i++) {
	            if (!this.getValue(questions[i].name)) return;
	        }
	        if (!this.currentPage.hasErrors(true, false)) {
	            if (!this.isLastPage) {
	                this.nextPage();
	            } else {
	                this.doComplete();
	            }
	        }
	    };
	    SurveyModel.prototype.getComment = function (name) {
	        var result = this.data[name + this.commentPrefix];
	        if (result == null) result = "";
	        return result;
	    };
	    SurveyModel.prototype.setComment = function (name, newValue) {
	        name = name + this.commentPrefix;
	        if (newValue == "" || newValue == null) {
	            delete this.valuesHash[name];
	        } else {
	            this.valuesHash[name] = newValue;
	            this.tryGoNextPageAutomatic(name);
	        }
	    };
	    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
	        this.updateVisibleIndexes();
	        this.onVisibleChanged.fire(this, { 'question': question, 'name': question.name, 'visible': newValue });
	        this.checkPageVisibility(question, !newValue);
	    };
	    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
	        this.updateVisibleIndexes();
	        this.onPageVisibleChanged.fire(this, { 'page': page, 'visible': newValue });
	    };
	    SurveyModel.prototype.questionAdded = function (question, index) {
	        this.updateVisibleIndexes();
	        this.addQuestionToProcessedTextValues(question);
	        this.onQuestionAdded.fire(this, { 'question': question, 'name': question.name, 'index': index });
	    };
	    SurveyModel.prototype.questionRemoved = function (question) {
	        this.updateVisibleIndexes();
	        this.onQuestionRemoved.fire(this, { 'question': question, 'name': question.name });
	    };
	    SurveyModel.prototype.validateQuestion = function (name) {
	        if (this.onValidateQuestion.isEmpty) return null;
	        var options = { name: name, value: this.getValue(name), error: null };
	        this.onValidateQuestion.fire(this, options);
	        return options.error ? new _error.CustomError(options.error) : null;
	    };
	    SurveyModel.prototype.processHtml = function (html) {
	        var options = { html: html };
	        this.onProcessHtml.fire(this, options);
	        return this.processText(options.html);
	    };
	    SurveyModel.prototype.processText = function (text) {
	        return this.textPreProcessor.process(text);
	    };
	    //ISurveyTriggerOwner
	    SurveyModel.prototype.getObjects = function (pages, questions) {
	        var result = [];
	        Array.prototype.push.apply(result, this.getPagesByNames(pages));
	        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
	        return result;
	    };
	    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
	        if (!name) return;
	        if (isVariable) {
	            this.setVariable(name, value);
	        } else {
	            this.setValue(name, value);
	        }
	    };
	    return SurveyModel;
	}(_base.Base);
	_jsonobject.JsonObject.metaData.addClass("survey", [{ name: "locale", choices: function choices() {
	        return _surveyStrings.surveyLocalization.getLocales();
	    } }, "title", "completedHtml:html", { name: "pages", className: "page" }, { name: "questions", baseClassName: "question", onGetValue: function onGetValue(obj) {
	        return null;
	    }, onSetValue: function onSetValue(obj, value, jsonConverter) {
	        var page = obj.addNewPage("");jsonConverter.toObject({ questions: value }, page);
	    } }, { name: "triggers:triggers", baseClassName: "surveytrigger", classNamePart: "trigger" }, "surveyId", "surveyPostId", "cookieName", "sendResultOnPageNext:boolean", { name: "showNavigationButtons:boolean", default: true }, { name: "showTitle:boolean", default: true }, { name: "showPageTitles:boolean", default: true }, "showPageNumbers:boolean", { name: "showQuestionNumbers", default: "on", choices: ["on", "onPage", "off"] }, { name: "questionTitleLocation", default: "top", choices: ["top", "bottom"] }, { name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] }, { name: "storeOthersAsComment:boolean", default: true }, "goNextPageAutomatic:boolean", "clearInvisibleValues:boolean", { name: "pagePrevText", onGetValue: function onGetValue(obj) {
	        return obj.pagePrevTextValue;
	    } }, { name: "pageNextText", onGetValue: function onGetValue(obj) {
	        return obj.pageNextTextValue;
	    } }, { name: "completeText", onGetValue: function onGetValue(obj) {
	        return obj.completeTextValue;
	    } }, { name: "requiredText", default: "*" }, "questionStartIndex", "questionTitleTemplate"]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var dxSurveyService = exports.dxSurveyService = function () {
	    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
	    function dxSurveyService() {}
	    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurvey?surveyId=' + surveyId);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        xhr.onload = function () {
	            var result = JSON.parse(xhr.response);
	            onLoad(xhr.status == 200, result, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
	        if (clientId === void 0) {
	            clientId = null;
	        }
	        if (isPartialCompleted === void 0) {
	            isPartialCompleted = false;
	        }
	        var xhr = new XMLHttpRequest();
	        xhr.open('POST', dxSurveyService.serviceUrl + '/post/');
	        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	        var data = { postId: postId, surveyResult: JSON.stringify(result) };
	        if (clientId) data['clientId'] = clientId;
	        if (isPartialCompleted) data['isPartialCompleted'] = true;
	        var dataStringify = JSON.stringify(data);
	        var self = this;
	        xhr.onload = xhr.onerror = function () {
	            if (!onSendResult) return;
	            onSendResult(xhr.status == 200, xhr.response);
	        };
	        xhr.send(dataStringify);
	    };
	    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
	        var xhr = new XMLHttpRequest();
	        xhr.onload = xhr.onerror = function () {
	            if (!onSendFile) return;
	            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
	        };
	        xhr.open("POST", dxSurveyService.serviceUrl + '/upload/', true);
	        var formData = new FormData();
	        formData.append("file", file);
	        formData.append("postId", postId);
	        xhr.send(formData);
	    };
	    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
	        var xhr = new XMLHttpRequest();
	        var data = 'resultId=' + resultId + '&name=' + name;
	        xhr.open('GET', dxSurveyService.serviceUrl + '/getResult?' + data);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            var result = null;
	            var list = null;
	            if (xhr.status == 200) {
	                result = JSON.parse(xhr.response);
	                list = [];
	                for (var key in result.QuestionResult) {
	                    var el = { name: key, value: result.QuestionResult[key] };
	                    list.push(el);
	                }
	            }
	            onGetResult(xhr.status == 200, result, list, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
	        var xhr = new XMLHttpRequest();
	        var data = 'resultId=' + resultId + '&clientId=' + clientId;
	        xhr.open('GET', dxSurveyService.serviceUrl + '/isCompleted?' + data);
	        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	        var self = this;
	        xhr.onload = function () {
	            var result = null;
	            if (xhr.status == 200) {
	                result = JSON.parse(xhr.response);
	            }
	            onIsCompleted(xhr.status == 200, result, xhr.response);
	        };
	        xhr.send();
	    };
	    dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";
	    return dxSurveyService;
	}();

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyTriggerSetValue = exports.SurveyTriggerComplete = exports.SurveyTriggerVisible = exports.SurveyTrigger = exports.Trigger = undefined;
	
	var _base = __webpack_require__(4);
	
	var _jsonobject = __webpack_require__(7);
	
	var Trigger = exports.Trigger = function (_super) {
	    __extends(Trigger, _super);
	    function Trigger() {
	        _super.call(this);
	        this.opValue = "equal";
	    }
	    Object.defineProperty(Trigger, "operators", {
	        get: function get() {
	            if (Trigger.operatorsValue != null) return Trigger.operatorsValue;
	            Trigger.operatorsValue = {
	                empty: function empty(value, expectedValue) {
	                    return !value;
	                },
	                notempty: function notempty(value, expectedValue) {
	                    return !!value;
	                },
	                equal: function equal(value, expectedValue) {
	                    return value == expectedValue;
	                },
	                notequal: function notequal(value, expectedValue) {
	                    return value != expectedValue;
	                },
	                contains: function contains(value, expectedValue) {
	                    return value && value["indexOf"] && value.indexOf(expectedValue) > -1;
	                },
	                notcontains: function notcontains(value, expectedValue) {
	                    return !value || !value["indexOf"] || value.indexOf(expectedValue) == -1;
	                },
	                greater: function greater(value, expectedValue) {
	                    return value > expectedValue;
	                },
	                less: function less(value, expectedValue) {
	                    return value < expectedValue;
	                },
	                greaterorequal: function greaterorequal(value, expectedValue) {
	                    return value >= expectedValue;
	                },
	                lessorequal: function lessorequal(value, expectedValue) {
	                    return value <= expectedValue;
	                }
	            };
	            return Trigger.operatorsValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Trigger.prototype, "operator", {
	        get: function get() {
	            return this.opValue;
	        },
	        set: function set(value) {
	            if (!value) return;
	            value = value.toLowerCase();
	            if (!Trigger.operators[value]) return;
	            this.opValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Trigger.prototype.check = function (value) {
	        if (Trigger.operators[this.operator](value, this.value)) {
	            this.onSuccess();
	        } else {
	            this.onFailure();
	        }
	    };
	    Trigger.prototype.onSuccess = function () {};
	    Trigger.prototype.onFailure = function () {};
	    Trigger.operatorsValue = null;
	    return Trigger;
	}(_base.Base);
	var SurveyTrigger = exports.SurveyTrigger = function (_super) {
	    __extends(SurveyTrigger, _super);
	    function SurveyTrigger() {
	        _super.call(this);
	        this.owner = null;
	    }
	    SurveyTrigger.prototype.setOwner = function (owner) {
	        this.owner = owner;
	    };
	    Object.defineProperty(SurveyTrigger.prototype, "isOnNextPage", {
	        get: function get() {
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyTrigger;
	}(Trigger);
	var SurveyTriggerVisible = exports.SurveyTriggerVisible = function (_super) {
	    __extends(SurveyTriggerVisible, _super);
	    function SurveyTriggerVisible() {
	        _super.call(this);
	        this.pages = [];
	        this.questions = [];
	    }
	    SurveyTriggerVisible.prototype.getType = function () {
	        return "visibletrigger";
	    };
	    SurveyTriggerVisible.prototype.onSuccess = function () {
	        this.onTrigger(this.onItemSuccess);
	    };
	    SurveyTriggerVisible.prototype.onFailure = function () {
	        this.onTrigger(this.onItemFailure);
	    };
	    SurveyTriggerVisible.prototype.onTrigger = function (func) {
	        if (!this.owner) return;
	        var objects = this.owner.getObjects(this.pages, this.questions);
	        for (var i = 0; i < objects.length; i++) {
	            func(objects[i]);
	        }
	    };
	    SurveyTriggerVisible.prototype.onItemSuccess = function (item) {
	        item.visible = true;
	    };
	    SurveyTriggerVisible.prototype.onItemFailure = function (item) {
	        item.visible = false;
	    };
	    return SurveyTriggerVisible;
	}(SurveyTrigger);
	var SurveyTriggerComplete = exports.SurveyTriggerComplete = function (_super) {
	    __extends(SurveyTriggerComplete, _super);
	    function SurveyTriggerComplete() {
	        _super.call(this);
	    }
	    SurveyTriggerComplete.prototype.getType = function () {
	        return "completetrigger";
	    };
	    Object.defineProperty(SurveyTriggerComplete.prototype, "isOnNextPage", {
	        get: function get() {
	            return true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyTriggerComplete.prototype.onSuccess = function () {
	        if (this.owner) this.owner.doComplete();
	    };
	    return SurveyTriggerComplete;
	}(SurveyTrigger);
	var SurveyTriggerSetValue = exports.SurveyTriggerSetValue = function (_super) {
	    __extends(SurveyTriggerSetValue, _super);
	    function SurveyTriggerSetValue() {
	        _super.call(this);
	    }
	    SurveyTriggerSetValue.prototype.getType = function () {
	        return "setvaluetrigger";
	    };
	    SurveyTriggerSetValue.prototype.onSuccess = function () {
	        if (!this.setToName || !this.owner) return;
	        this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable);
	    };
	    return SurveyTriggerSetValue;
	}(SurveyTrigger);
	_jsonobject.JsonObject.metaData.addClass("trigger", ["operator", "!value"]);
	_jsonobject.JsonObject.metaData.addClass("surveytrigger", ["!name"], null, "trigger");
	_jsonobject.JsonObject.metaData.addClass("visibletrigger", ["pages", "questions"], function () {
	    return new SurveyTriggerVisible();
	}, "surveytrigger");
	_jsonobject.JsonObject.metaData.addClass("completetrigger", [], function () {
	    return new SurveyTriggerComplete();
	}, "surveytrigger");
	_jsonobject.JsonObject.metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () {
	    return new SurveyTriggerSetValue();
	}, "surveytrigger");
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindowModel = undefined;
	
	var _base = __webpack_require__(4);
	
	var _survey = __webpack_require__(30);
	
	var SurveyWindowModel = exports.SurveyWindowModel = function (_super) {
	    __extends(SurveyWindowModel, _super);
	    function SurveyWindowModel(jsonObj) {
	        _super.call(this);
	        this.surveyValue = this.createSurvey(jsonObj);
	        this.surveyValue.showTitle = false;
	        this.windowElement = document.createElement("div");
	    }
	    SurveyWindowModel.prototype.getType = function () {
	        return "window";
	    };
	    Object.defineProperty(SurveyWindowModel.prototype, "survey", {
	        get: function get() {
	            return this.surveyValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "isShowing", {
	        get: function get() {
	            return this.isShowingValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "isExpanded", {
	        get: function get() {
	            return this.isExpandedValue;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SurveyWindowModel.prototype, "title", {
	        get: function get() {
	            return this.titleValue ? this.titleValue : this.survey.title;
	        },
	        set: function set(value) {
	            this.titleValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindowModel.prototype.expand = function () {
	        this.expandcollapse(true);
	    };
	    SurveyWindowModel.prototype.collapse = function () {
	        this.expandcollapse(false);
	    };
	    SurveyWindowModel.prototype.createSurvey = function (jsonObj) {
	        return new _survey.SurveyModel(jsonObj);
	    };
	    SurveyWindowModel.prototype.expandcollapse = function (value) {
	        this.isExpandedValue = value;
	    };
	    SurveyWindowModel.surveyElementName = "windowSurveyJS";
	    return SurveyWindowModel;
	}(_base.Base);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var surveyCss = exports.surveyCss = {
	    currentType: "",
	    getCss: function getCss() {
	        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
	        if (!loc) loc = defaultStandardCss;
	        return loc;
	    }
	};
	var defaultStandardCss = exports.defaultStandardCss = {
	    root: "sv_main",
	    header: "",
	    body: "sv_body",
	    footer: "sv_nav",
	    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
	    progress: "sv_progress", progressBar: "",
	    pageTitle: "sv_p_title",
	    row: "sv_row",
	    question: { root: "sv_q", title: "sv_q_title", comment: "", indent: 20 },
	    error: { root: "sv_q_erbox", icon: "", item: "" },
	    checkbox: { root: "sv_qcbc", item: "sv_q_checkbox", other: "sv_q_other" },
	    comment: "",
	    dropdown: "",
	    matrix: { root: "sv_q_matrix" },
	    matrixdropdown: { root: "sv_q_matrix" },
	    matrixdynamic: { root: "table", button: "" },
	    multipletext: { root: "", itemTitle: "", itemValue: "" },
	    radiogroup: { root: "sv_qcbc", item: "sv_q_radiogroup", other: "sv_q_other" },
	    rating: { root: "sv_q_rating", item: "sv_q_rating_item" },
	    text: "",
	    window: {
	        root: "sv_window", body: "sv_window_content",
	        header: {
	            root: "sv_window_title", title: "", button: "", buttonExpanded: "", buttonCollapsed: ""
	        }
	    }
	};
	surveyCss["standard"] = defaultStandardCss;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Survey = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _survey = __webpack_require__(30);
	
	var _base = __webpack_require__(4);
	
	var _kopage = __webpack_require__(37);
	
	var _cssstandard = __webpack_require__(34);
	
	var _templateKo = __webpack_require__(38);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Survey = exports.Survey = function (_super) {
	    __extends(Survey, _super);
	    function Survey(jsonObj, renderedElement, css) {
	        if (jsonObj === void 0) {
	            jsonObj = null;
	        }
	        if (renderedElement === void 0) {
	            renderedElement = null;
	        }
	        if (css === void 0) {
	            css = null;
	        }
	        _super.call(this, jsonObj);
	        this.onRendered = new _base.Event();
	        this.isFirstRender = true;
	        if (css) {
	            this.css = css;
	        }
	        if (renderedElement) {
	            this.renderedElement = renderedElement;
	        }
	        if (typeof ko === 'undefined') throw new Error('knockoutjs library is not loaded.');
	        this.render(renderedElement);
	    }
	    Object.defineProperty(Survey, "cssType", {
	        get: function get() {
	            return _cssstandard.surveyCss.currentType;
	        },
	        set: function set(value) {
	            _cssstandard.surveyCss.currentType = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Survey.prototype, "cssNavigationComplete", {
	        get: function get() {
	            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.complete);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Survey.prototype, "cssNavigationPrev", {
	        get: function get() {
	            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.prev);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Survey.prototype, "cssNavigationNext", {
	        get: function get() {
	            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.next);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Survey.prototype.getNavigationCss = function (main, btn) {
	        var res = "";
	        if (main) res = main;
	        if (btn) res += ' ' + btn;
	        return res;
	    };
	    Object.defineProperty(Survey.prototype, "css", {
	        get: function get() {
	            return _cssstandard.surveyCss.getCss();
	        },
	        set: function set(value) {
	            this.mergeValues(value, this.css);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Survey.prototype.render = function (element) {
	        if (element === void 0) {
	            element = null;
	        }
	        var self = this;
	        if (element && typeof element == "string") {
	            element = document.getElementById(element);
	        }
	        if (element) {
	            this.renderedElement = element;
	        }
	        element = this.renderedElement;
	        if (!element) return;
	        element.innerHTML = this.getTemplate();
	        self.applyBinding();
	        self.onRendered.fire(self, {});
	    };
	    Survey.prototype.loadSurveyFromService = function (surveyId, renderedElement) {
	        if (surveyId === void 0) {
	            surveyId = null;
	        }
	        if (renderedElement === void 0) {
	            renderedElement = null;
	        }
	        if (renderedElement) {
	            this.renderedElement = renderedElement;
	        }
	        _super.prototype.loadSurveyFromService.call(this, surveyId);
	    };
	    Survey.prototype.setCompleted = function () {
	        _super.prototype.setCompleted.call(this);
	        this.updateKoCurrentPage();
	    };
	    Survey.prototype.createNewPage = function (name) {
	        return new _kopage.Page(name);
	    };
	    Survey.prototype.getTemplate = function () {
	        return _templateKo.koTemplate.html;
	    };
	    Survey.prototype.onBeforeCreating = function () {
	        var self = this;
	        this.dummyObservable = ko.observable(0);
	        this.koCurrentPage = ko.computed(function () {
	            self.dummyObservable();return self.currentPage;
	        });
	        this.koIsFirstPage = ko.computed(function () {
	            self.dummyObservable();return self.isFirstPage;
	        });
	        this.koIsLastPage = ko.computed(function () {
	            self.dummyObservable();return self.isLastPage;
	        });
	        this.koProgressText = ko.computed(function () {
	            self.dummyObservable();return self.progressText;
	        });
	        this.koProgress = ko.computed(function () {
	            self.dummyObservable();return self.getProgress();
	        });
	        this.koState = ko.computed(function () {
	            self.dummyObservable();return self.state;
	        });
	    };
	    Survey.prototype.currentPageChanged = function (newValue, oldValue) {
	        this.updateKoCurrentPage();
	        _super.prototype.currentPageChanged.call(this, newValue, oldValue);
	        if (!this.isDesignMode) this.focusFirstQuestion();
	    };
	    Survey.prototype.pageVisibilityChanged = function (page, newValue) {
	        _super.prototype.pageVisibilityChanged.call(this, page, newValue);
	        this.updateKoCurrentPage();
	    };
	    Survey.prototype.onLoadSurveyFromService = function () {
	        this.render();
	    };
	    Survey.prototype.onLoadingSurveyFromService = function () {
	        this.render();
	    };
	    Survey.prototype.applyBinding = function () {
	        if (!this.renderedElement) return;
	        this.updateKoCurrentPage();
	        ko.cleanNode(this.renderedElement);
	        if (!this.isFirstRender) {
	            this.updateCurrentPageQuestions();
	        }
	        this.isFirstRender = false;
	        ko.applyBindings(this, this.renderedElement);
	    };
	    Survey.prototype.updateKoCurrentPage = function () {
	        this.dummyObservable(this.dummyObservable() + 1);
	    };
	    Survey.prototype.updateCurrentPageQuestions = function () {
	        var questions = this.currentPage ? this.currentPage.questions : [];
	        for (var i = 0; i < questions.length; i++) {
	            var q = questions[i];
	            if (q.visible) q["updateQuestion"]();
	        }
	    };
	    return Survey;
	}(_survey.SurveyModel);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.Page = exports.QuestionRow = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _page = __webpack_require__(21);
	
	var _jsonobject = __webpack_require__(7);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionRow = exports.QuestionRow = function (_super) {
	    __extends(QuestionRow, _super);
	    function QuestionRow(page, question) {
	        _super.call(this, page, question);
	        this.page = page;
	        this.question = question;
	        this.koVisible = ko.observable(this.visible);
	    }
	    QuestionRow.prototype.onVisibleChanged = function () {
	        this.koVisible(this.visible);
	    };
	    QuestionRow.prototype.koAfterRender = function (el, con) {
	        for (var i = 0; i < el.length; i++) {
	            var tEl = el[i];
	            var nName = tEl.nodeName;
	            if (nName == "#text") tEl.data = "";
	        }
	    };
	    return QuestionRow;
	}(_page.QuestionRowModel);
	var Page = exports.Page = function (_super) {
	    __extends(Page, _super);
	    function Page(name) {
	        if (name === void 0) {
	            name = "";
	        }
	        _super.call(this, name);
	        this.koNo = ko.observable("");
	        this.onCreating();
	    }
	    Page.prototype.createRow = function (question) {
	        return new QuestionRow(this, question);
	    };
	    Page.prototype.onCreating = function () {};
	    Page.prototype.onNumChanged = function (value) {
	        this.koNo(value > 0 ? value + ". " : "");
	    };
	    return Page;
	}(_page.PageModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("page", function () {
	    return new Page();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var koTemplate = exports.koTemplate = { html: "" };
	koTemplate.html = '<script type="text/html" id="survey-comment">  <input data-bind="value:$data.question.koComment, visible:$data.visible, css: $root.css.question.comment" /></script><div data-bind="css: $root.css.root">    <div data-bind="visible: (title.length > 0) && showTitle && koState() != \'completed\', css: $root.css.header">        <h3 data-bind="text:title"></h3>    </div>    <!-- ko if: koState() == "running" -->    <div data-bind="css: $root.css.body">        <div data-bind="visible: showProgressBar ==\'top\', template: { name: \'survey-progress\', data: $data }"></div>        <div id="sq_page" data-bind="template: { name: \'survey-page\', data: koCurrentPage }"></div>        <div style="margin-top:10px" data-bind="visible: showProgressBar ==\'bottom\', template: { name: \'survey-progress\', data: $data }"></div>    </div>    <div data-bind="visible: showNavigationButtons && !isDesignMode, css: $root.css.footer">        <input type="button" data-bind="value: pagePrevText, click: prevPage, visible: !koIsFirstPage(), css: $root.cssNavigationPrev" />        <input type="button" data-bind="value: pageNextText, click: nextPage, visible: !koIsLastPage(), css: $root.cssNavigationNext" />        <input type="button" data-bind="value: completeText, click: completeLastPage, visible: koIsLastPage(), css: $root.cssNavigationComplete" />    </div>    <!-- /ko -->    <!-- ko if: koState() == "completed" -->    <div data-bind="html: processedCompletedHtml"></div>    <!-- /ko -->    <!-- ko if: koState() == "loading" -->    <div data-bind="html: processedLoadingHtml"></div>    <!-- /ko -->    <!-- ko if: koState() == "empty" -->    <div data-bind="text:emptySurveyText, css: $root.css.body"></div>    <!-- /ko --></div><script type="text/html" id="survey-page">    <h4 data-bind="visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: $root.css.pageTitle"></h4>    <!-- ko foreach: { data: rows, as: \'row\'} -->    <div data-bind="visible: row.koVisible, css: $root.css.row">        <!-- ko foreach: { data: row.questions, as: \'question\' , afterRender: row.koAfterRender } -->            <!-- ko template: { name: \'survey-question\', data: question } --><!-- /ko -->        <!-- /ko -->    </div>    <!-- /ko --></script><script type="text/html" id="survey-progress">    <div style="width:60%;" data-bind="css: $root.css.progress">        <div data-bind="css: $root.css.progressBar, style:{width: koProgress() + \'%\'}"             role="progressbar" aria-valuemin="0"             aria-valuemax="100">            <span data-bind="text:koProgressText"></span>        </div>    </div></script><script type="text/html" id="survey-question-checkbox">    <form data-bind="css: $root.css.checkbox.root">        <!-- ko foreach: { data: question.koVisibleChoices, as: \'item\', afterRender: question.koAfterRender}  -->        <div data-bind="style:{width: question.koWidth, \'margin-right\': question.colCount == 0 ? \'5px\': \'0px\'}, css: $root.css.checkbox.item">            <label data-bind="css: $root.css.checkbox.item">                <input type="checkbox" data-bind="attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : \'\'}, checked: question.koValue" />                <span data-bind="text: item.text"></span>            </label>            <div data-bind="visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)">                <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }, css: $root.css.checkbox.other"></div>            </div>        </div>        <!-- /ko -->    </form></script><script type="text/html" id="survey-question-comment">    <textarea type="text" data-bind="attr: {cols: question.cols, rows: question.rows, id: question.inputId}, value:question.koValue, css: $root.css.comment" /></script><script type="text/html" id="survey-question-dropdown">    <select data-bind="attr: {id: question.inputId}, options: question.koVisibleChoices, optionsText: \'text\', optionsValue: \'value\', value: question.koValue, optionsCaption: question.optionsCaption, css: $root.css.dropdown"></select>    <div data-bind="visible: question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div>    </div></script><script type="text/html" id="survey-question-errors">    <div role="alert" data-bind="visible: koErrors().length > 0, foreach: { data: koErrors, as: \'error\'}, css: $root.css.error.root">        <div>            <span aria-hidden="true" data-bind="css: $root.css.error.icon"></span>            <span data-bind="text:error.getText(), css: $root.css.error.item"></span>        </div>    </div></script><script type="text/html" id="survey-question-file">    <input type="file" data-bind="attr: {id: question.inputId}, event: {change: dochange}">    <div>        <img data-bind="attr: { src: question.koData, height: question.imageHeight, width: question.imageWidth }, visible: question.koHasValue">    </div></script><script type="text/html" id="survey-question-html">    <div data-bind="html: question.processedHtml"></div></script><script type="text/html" id="survey-question-matrix">    <table data-bind="css: $root.css.matrix.root">        <thead>            <tr>                <th data-bind="visible: question.hasRows"></th>                <!-- ko foreach: question.columns -->                <th data-bind="text:$data.text"></th>                <!-- /ko -->            </tr>        </thead>        <tbody>            <!-- ko foreach: { data: question.visibleRows, as: \'row\' } -->            <tr>                <td data-bind="visible: question.hasRows, text:row.text"></td>                <!-- ko foreach: question.columns -->                <td>                    <input type="radio" data-bind="attr: {name: row.fullName, value: $data.value, id: ($index() == 0) && ($parentContext.$index() == 0) ? question.inputId : \'\'}, checked: row.koValue"/>                </td>                <!-- /ko -->            </tr>            <!-- /ko -->        </tbody>    </table></script><script type="text/html" id="survey-question-matrixdropdown">    <div data-bind="style: {overflowX: question.horizontalScroll? \'scroll\': \'\'}">        <table data-bind="css: $root.css.matrixdropdown.root">            <thead>                <tr>                    <th></th>                    <!-- ko foreach: question.columns -->                    <th data-bind="text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }"></th>                    <!-- /ko -->                </tr>            </thead>            <tbody>                <!-- ko foreach: { data: question.visibleRows, as: \'row\' } -->                <tr>                    <td data-bind="text:row.text"></td>                    <!-- ko foreach: row.cells-->                    <td>                        <!-- ko template: { name: \'survey-question-errors\', data: $data.question } -->                        <!-- /ko -->                        <!-- ko template: { name: \'survey-question-\' + $data.question.getType(), data: $data.question, as: \'question\' } -->                        <!-- /ko -->                    </td>                    <!-- /ko -->                </tr>                <!-- /ko -->            </tbody>        </table>    </div></script><script type="text/html" id="survey-question-matrixdynamic">    <div data-bind="style: {overflowX: question.horizontalScroll? \'scroll\': \'\'}">        <table data-bind="css: $root.css.matrixdynamic.root">            <thead>                <tr>                    <!-- ko foreach: question.columns -->                    <th data-bind="text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }"></th>                    <!-- /ko -->                    <th></th>                </tr>            </thead>            <tbody>                <!-- ko foreach: { data: question.koRows, as: \'row\' } -->                <tr>                    <!-- ko foreach: row.cells-->                    <td>                        <!-- ko template: { name: \'survey-question-errors\', data: $data.question } -->                        <!-- /ko -->                        <!-- ko template: { name: \'survey-question-\' + $data.question.getType(), data: $data.question, as: \'question\' } -->                        <!-- /ko -->                    </td>                    <!-- /ko -->                    <td><input type="button" data-bind="click:question.koRemoveRowClick, css: $root.css.matrixdynamic.button, value: question.removeRowText" /></td>                </tr>                <!-- /ko -->            </tbody>        </table>    </div>    <input type="button" data-bind="click:question.koAddRowClick, css: $root.css.matrixdynamic.button, value: question.addRowText" /></script><script type="text/html" id="survey-question-multipletext">    <table data-bind="css: $root.css.multipletext.root, foreach: { data:  question.koRows, as: \'row\' }">        <tr data-bind="foreach: { data: row, as: \'item\' }">            <td data-bind="text: item.title, css: $root.css.multipletext.itemTitle"></td>            <td><input type="text" style="float:left" data-bind="attr: {size: question.itemSize, id: ($index() == 0) ? question.inputId : \'\'}, value: item.koValue, css: $root.css.multipletext.itemValue" /></td>        </tr>    </table></script><script type="text/html" id="survey-question-radiogroup">    <form data-bind="css: $root.css.radiogroup.root">        <!-- ko foreach: { data: question.koVisibleChoices, as: \'item\', afterRender: question.koAfterRender}  -->        <div  data-bind="style:{width: question.koWidth, \'margin-right\': question.colCount == 0 ? \'5px\': \'0px\'}, css: $root.css.radiogroup.item">            <label data-bind="css: $root.css.radiogroup.item">                <input type="radio" data-bind="attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : \'\'}, checked: question.koValue" />                <span data-bind="text: item.text"></span>            </label>            <div data-bind="visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)">                <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible}}, css: $root.css.radiogroup.other"></div>            </div>        </div>        <!-- /ko -->    </form></script><script type="text/html" id="survey-question-rating">    <div data-bind="css: $root.css.rating.root">        <!-- ko foreach: question.koVisibleRateValues -->        <label data-bind="css: question.koGetCss($data)">            <input type="radio" style="display: none;"                    data-bind="attr: {name: question.name, id: question.name + $index(), value: $data.value}, event: { change: question.koChange}" />            <span data-bind="visible: $index() == 0, text: question.mininumRateDescription"></span>            <span data-bind="text: $data.text"></span>            <span data-bind="visible: $index() == (question.koVisibleRateValues().length-1), text: question.maximumRateDescription"></span>        </label>        <!-- /ko -->    </div>    <div data-bind="visible: question.hasOther">        <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question } }"></div>    </div></script><script type="text/html" id="survey-question-text">    <input data-bind="attr: {type: question.inputType, size: question.size, id: question.inputId}, value:question.koValue, css: $root.css.text"/></script><script type="text/html" id="survey-question">    <div style="vertical-align:top" data-bind="css: $root.css.question.root, style: {display: question.koVisible() ? \'inline-block\': \'none\', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth }, attr: {id: id}">        <!-- ko if: question.hasTitle -->        <h5 data-bind="visible: $root.questionTitleLocation == \'top\', text: question.koTitle(), css: $root.css.question.title"></h5>        <!-- /ko -->        <!-- ko template: { name: \'survey-question-errors\', data: question } -->        <!-- /ko -->        <!-- ko template: { name: \'survey-question-\' + question.getType(), data: question, afterRender: question.koQuestionAfterRender } -->        <!-- /ko -->        <div data-bind="visible: question.hasComment">            <div data-bind="text:question.commentText"></div>            <div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': true } }"></div>        </div>        <!-- ko if: question.hasTitle -->        <h5 data-bind="visible: $root.questionTitleLocation == \'bottom\', text: question.koTitle(), css: $root.css.question.title"></h5>        <!-- /ko -->    </div></script>';

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.QuestionImplementorBase = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionImplementorBase = exports.QuestionImplementorBase = function () {
	    function QuestionImplementorBase(question) {
	        this.question = question;
	        var self = this;
	        question.visibilityChangedCallback = function () {
	            self.onVisibilityChanged();
	        };
	        question.renderWidthChangedCallback = function () {
	            self.onRenderWidthChanged();
	        };
	        this.koVisible = ko.observable(this.question.visible);
	        this.koRenderWidth = ko.observable(this.question.renderWidth);
	        this.koErrors = ko.observableArray();
	        this.koMarginLeft = ko.pureComputed(function () {
	            self.koRenderWidth();return self.getIndentSize(self.question.indent);
	        });
	        this.koPaddingRight = ko.observable(self.getIndentSize(self.question.rightIndent));
	        this.question["koVisible"] = this.koVisible;
	        this.question["koRenderWidth"] = this.koRenderWidth;
	        this.question["koErrors"] = this.koErrors;
	        this.question["koMarginLeft"] = this.koMarginLeft;
	        this.question["koPaddingRight"] = this.koPaddingRight;
	        this.question["updateQuestion"] = function () {
	            self.updateQuestion();
	        };
	    }
	    QuestionImplementorBase.prototype.updateQuestion = function () {};
	    QuestionImplementorBase.prototype.onVisibilityChanged = function () {
	        this.koVisible(this.question.visible);
	    };
	    QuestionImplementorBase.prototype.onRenderWidthChanged = function () {
	        this.koRenderWidth(this.question.renderWidth);
	        this.koPaddingRight(this.getIndentSize(this.question.rightIndent));
	    };
	    QuestionImplementorBase.prototype.getIndentSize = function (indent) {
	        if (indent < 1) return "";
	        if (!this.question["data"]) return "";
	        var css = this.question["data"]["css"];
	        if (!css) return "";
	        return indent * css.question.indent + "px";
	    };
	    return QuestionImplementorBase;
	}();

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestionbase = __webpack_require__(39);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionImplementor = exports.QuestionImplementor = function (_super) {
	    __extends(QuestionImplementor, _super);
	    function QuestionImplementor(question) {
	        _super.call(this, question);
	        this.question = question;
	        this.isUpdating = false;
	        var self = this;
	        question.valueChangedCallback = function () {
	            self.onValueChanged();
	        };
	        question.commentChangedCallback = function () {
	            self.onCommentChanged();
	        };
	        question.errorsChangedCallback = function () {
	            self.onErrorsChanged();
	        };
	        question.titleChangedCallback = function () {
	            self.onVisibleIndexChanged();
	        };
	        question.visibleIndexChangedCallback = function () {
	            self.onVisibleIndexChanged();
	        };
	        this.koDummy = ko.observable(0);
	        this.koValue = this.createkoValue();
	        this.koComment = ko.observable(this.question.comment);
	        this.koTitle = ko.pureComputed(function () {
	            self.koDummy();return self.question.fullTitle;
	        });
	        this.koErrors(this.question.errors);
	        this.koValue.subscribe(function (newValue) {
	            self.updateValue(newValue);
	        });
	        this.koComment.subscribe(function (newValue) {
	            self.updateComment(newValue);
	        });
	        this.question["koValue"] = this.koValue;
	        this.question["koComment"] = this.koComment;
	        this.question["koTitle"] = this.koTitle;
	        this.question["koQuestionAfterRender"] = this.koQuestionAfterRender;
	    }
	    QuestionImplementor.prototype.updateQuestion = function () {
	        this.koDummy(this.koDummy() + 1);
	    };
	    QuestionImplementor.prototype.onValueChanged = function () {
	        if (this.isUpdating) return;
	        this.setkoValue(this.question.value);
	    };
	    QuestionImplementor.prototype.onCommentChanged = function () {
	        if (this.isUpdating) return;
	        this.koComment(this.question.comment);
	    };
	    QuestionImplementor.prototype.onVisibilityChanged = function () {
	        this.koVisible(this.question.visible);
	    };
	    QuestionImplementor.prototype.onVisibleIndexChanged = function () {
	        this.koDummy(this.koDummy() + 1);
	    };
	    QuestionImplementor.prototype.onErrorsChanged = function () {
	        this.koErrors(this.question.errors);
	    };
	    QuestionImplementor.prototype.createkoValue = function () {
	        return ko.observable(this.question.value);
	    };
	    QuestionImplementor.prototype.setkoValue = function (newValue) {
	        this.koValue(newValue);
	    };
	    QuestionImplementor.prototype.updateValue = function (newValue) {
	        this.isUpdating = true;
	        this.question.value = newValue;
	        this.isUpdating = false;
	    };
	    QuestionImplementor.prototype.updateComment = function (newValue) {
	        this.isUpdating = true;
	        this.question.comment = newValue;
	        this.isUpdating = false;
	    };
	    QuestionImplementor.prototype.getNo = function () {
	        return this.question.visibleIndex > -1 ? this.question.visibleIndex + 1 + ". " : "";
	    };
	    QuestionImplementor.prototype.koQuestionAfterRender = function (el, con) {
	        var tEl = el[0];
	        if (tEl.nodeName == "#text") tEl.data = "";
	        tEl = el[el.length - 1];
	        if (tEl.nodeName == "#text") tEl.data = "";
	    };
	    return QuestionImplementor;
	}(_koquestionbase.QuestionImplementorBase);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckboxBaseImplementor = exports.QuestionSelectBaseImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion = __webpack_require__(40);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionSelectBaseImplementor = exports.QuestionSelectBaseImplementor = function (_super) {
	    __extends(QuestionSelectBaseImplementor, _super);
	    function QuestionSelectBaseImplementor(question) {
	        _super.call(this, question);
	        var self = this;
	        this.koOtherVisible = ko.computed(function () {
	            self.koValue();return self.isOtherSelected;
	        });
	        this.koVisibleChoices = ko.observableArray(self.question.visibleChoices);
	        question.choicesChangedCallback = function () {
	            self.koVisibleChoices(self.question.visibleChoices);
	        };
	        this.question["koOtherVisible"] = this.koOtherVisible;
	        this.question["koVisibleChoices"] = this.koVisibleChoices;
	    }
	    Object.defineProperty(QuestionSelectBaseImplementor.prototype, "isOtherSelected", {
	        get: function get() {
	            return this.question.isOtherSelected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return QuestionSelectBaseImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionCheckboxBaseImplementor = exports.QuestionCheckboxBaseImplementor = function (_super) {
	    __extends(QuestionCheckboxBaseImplementor, _super);
	    function QuestionCheckboxBaseImplementor(question) {
	        _super.call(this, question);
	        this.koWidth = ko.observable(this.colWidth);
	        this.question["koWidth"] = this.koWidth;
	        this.question["koAfterRender"] = this.koAfterRender;
	        var self = this;
	        this.question.colCountChangedCallback = function () {
	            self.onColCountChanged();
	        };
	    }
	    QuestionCheckboxBaseImplementor.prototype.onColCountChanged = function () {
	        this.question["koWidth"] = ko.observable(this.colWidth);
	    };
	    Object.defineProperty(QuestionCheckboxBaseImplementor.prototype, "colWidth", {
	        get: function get() {
	            var colCount = this.question.colCount;
	            return colCount > 0 ? 100 / colCount + '%' : "";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    QuestionCheckboxBaseImplementor.prototype.koAfterRender = function (el, con) {
	        var tEl = el[0];
	        if (tEl.nodeName == "#text") tEl.data = "";
	        tEl = el[el.length - 1];
	        if (tEl.nodeName == "#text") tEl.data = "";
	    };
	    return QuestionCheckboxBaseImplementor;
	}(QuestionSelectBaseImplementor);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionCheckbox = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion_baseselect = __webpack_require__(41);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_checkbox = __webpack_require__(22);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionCheckboxImplementor = function (_super) {
	    __extends(QuestionCheckboxImplementor, _super);
	    function QuestionCheckboxImplementor(question) {
	        _super.call(this, question);
	    }
	    QuestionCheckboxImplementor.prototype.createkoValue = function () {
	        return this.question.value ? ko.observableArray(this.question.value) : ko.observableArray();
	    };
	    QuestionCheckboxImplementor.prototype.setkoValue = function (newValue) {
	        if (newValue) {
	            this.koValue([].concat(newValue));
	        } else {
	            this.koValue([]);
	        }
	    };
	    return QuestionCheckboxImplementor;
	}(_koquestion_baseselect.QuestionCheckboxBaseImplementor);
	var QuestionCheckbox = exports.QuestionCheckbox = function (_super) {
	    __extends(QuestionCheckbox, _super);
	    function QuestionCheckbox(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionCheckboxImplementor(this);
	    }
	    return QuestionCheckbox;
	}(_question_checkbox.QuestionCheckboxModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("checkbox", function () {
	    return new QuestionCheckbox("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("checkbox", function (name) {
	    var q = new QuestionCheckbox(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionComment = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_comment = __webpack_require__(23);
	
	var _koquestion = __webpack_require__(40);
	
	var QuestionComment = exports.QuestionComment = function (_super) {
	    __extends(QuestionComment, _super);
	    function QuestionComment(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion.QuestionImplementor(this);
	    }
	    return QuestionComment;
	}(_question_comment.QuestionCommentModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("comment", function () {
	    return new QuestionComment("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("comment", function (name) {
	    return new QuestionComment(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionDropdown = undefined;
	
	var _question_dropdown = __webpack_require__(24);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion_baseselect = __webpack_require__(41);
	
	var QuestionDropdown = exports.QuestionDropdown = function (_super) {
	    __extends(QuestionDropdown, _super);
	    function QuestionDropdown(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion_baseselect.QuestionSelectBaseImplementor(this);
	    }
	    return QuestionDropdown;
	}(_question_dropdown.QuestionDropdownModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("dropdown", function () {
	    return new QuestionDropdown("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("dropdown", function (name) {
	    var q = new QuestionDropdown(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionFile = exports.QuestionFileImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _question_file = __webpack_require__(25);
	
	var _koquestion = __webpack_require__(40);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionFileImplementor = exports.QuestionFileImplementor = function (_super) {
	    __extends(QuestionFileImplementor, _super);
	    function QuestionFileImplementor(question) {
	        _super.call(this, question);
	        var self = this;
	        this.koDataUpdater = ko.observable(0);
	        this.koData = ko.computed(function () {
	            self.koDataUpdater();return self.question.previewValue;
	        });
	        this.koHasValue = ko.observable(false);
	        this.question["koData"] = this.koData;
	        this.question["koHasValue"] = this.koHasValue;
	        this.question.previewValueLoadedCallback = function () {
	            self.onLoadPreview();
	        };
	        this.question["dochange"] = function (data, event) {
	            var src = event.target || event.srcElement;self.onChange(src);
	        };
	    }
	    QuestionFileImplementor.prototype.onChange = function (src) {
	        if (!window["FileReader"]) return;
	        if (!src || !src.files || src.files.length < 1) return;
	        this.question.loadFile(src.files[0]);
	    };
	    QuestionFileImplementor.prototype.onLoadPreview = function () {
	        this.koDataUpdater(this.koDataUpdater() + 1);
	        this.koHasValue(true);
	    };
	    return QuestionFileImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionFile = exports.QuestionFile = function (_super) {
	    __extends(QuestionFile, _super);
	    function QuestionFile(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionFileImplementor(this);
	    }
	    return QuestionFile;
	}(_question_file.QuestionFileModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("file", function () {
	    return new QuestionFile("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("file", function (name) {
	    return new QuestionFile(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionHtml = undefined;
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestionbase = __webpack_require__(39);
	
	var _question_html = __webpack_require__(26);
	
	var QuestionHtml = exports.QuestionHtml = function (_super) {
	    __extends(QuestionHtml, _super);
	    function QuestionHtml(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestionbase.QuestionImplementorBase(this);
	    }
	    return QuestionHtml;
	}(_question_html.QuestionHtmlModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("html", function () {
	    return new QuestionHtml("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("html", function (name) {
	    return new QuestionHtml(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrix = exports.MatrixRow = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _question_matrix = __webpack_require__(19);
	
	var _koquestion = __webpack_require__(40);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var MatrixRow = exports.MatrixRow = function (_super) {
	    __extends(MatrixRow, _super);
	    function MatrixRow(name, text, fullName, data, value) {
	        _super.call(this, name, text, fullName, data, value);
	        this.name = name;
	        this.text = text;
	        this.fullName = fullName;
	        this.isValueUpdating = false;
	        this.koValue = ko.observable(this.value);
	        var self = this;
	        this.koValue.subscribe(function (newValue) {
	            if (self.isValueUpdating) true;
	            self.value = newValue;
	        });
	    }
	    MatrixRow.prototype.onValueChanged = function () {
	        this.isValueUpdating = true;
	        this.koValue(this.value);
	        this.isValueUpdating = false;
	    };
	    return MatrixRow;
	}(_question_matrix.MatrixRowModel);
	var QuestionMatrix = exports.QuestionMatrix = function (_super) {
	    __extends(QuestionMatrix, _super);
	    function QuestionMatrix(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion.QuestionImplementor(this);
	    }
	    QuestionMatrix.prototype.createMatrixRow = function (name, text, fullName, value) {
	        return new MatrixRow(name, text, fullName, this, value);
	    };
	    return QuestionMatrix;
	}(_question_matrix.QuestionMatrixModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("matrix", function () {
	    return new QuestionMatrix("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrix", function (name) {
	    var q = new QuestionMatrix(name);q.rows = ["Row 1", "Row 2"];q.columns = ["Column 1", "Column 2", "Column 3"];return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDropdown = undefined;
	
	var _question_matrixdropdown = __webpack_require__(17);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(40);
	
	var QuestionMatrixDropdown = exports.QuestionMatrixDropdown = function (_super) {
	    __extends(QuestionMatrixDropdown, _super);
	    function QuestionMatrixDropdown(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion.QuestionImplementor(this);
	    }
	    return QuestionMatrixDropdown;
	}(_question_matrixdropdown.QuestionMatrixDropdownModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("matrixdropdown", function () {
	    return new QuestionMatrixDropdown("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdropdown", function (name) {
	    var q = new QuestionMatrixDropdown(name);q.choices = [1, 2, 3, 4, 5];q.rows = ["Row 1", "Row 2"];q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMatrixDynamic = exports.QuestionMatrixDynamicImplementor = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(40);
	
	var _question_matrixdynamic = __webpack_require__(18);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionMatrixDynamicImplementor = exports.QuestionMatrixDynamicImplementor = function (_super) {
	    __extends(QuestionMatrixDynamicImplementor, _super);
	    function QuestionMatrixDynamicImplementor(question) {
	        _super.call(this, question);
	        this.koRecalc = ko.observable(0);
	        this.koRows = ko.pureComputed(function () {
	            this.koRecalc();
	            return this.question.cachedVisibleRows;
	        }, this);
	        this.koOverflowX = ko.pureComputed(function () {
	            return this.question.horizontalScroll ? "scroll" : "none";
	        }, this);
	        this.question["koRows"] = this.koRows;
	        var self = this;
	        this.koAddRowClick = function () {
	            self.addRow();
	        };
	        this.koRemoveRowClick = function (data) {
	            self.removeRow(data);
	        };
	        this.question["koAddRowClick"] = this.koAddRowClick;
	        this.question["koRemoveRowClick"] = this.koRemoveRowClick;
	        this.question["koOverflowX"] = this.koOverflowX;
	        this.question.rowCountChangedCallback = function () {
	            self.onRowCountChanged();
	        };
	        this.question.columnsChangedCallback = function () {
	            self.onColumnChanged();
	        };
	        this.question.updateCellsCallbak = function () {
	            self.onUpdateCells();
	        };
	    }
	    QuestionMatrixDynamicImplementor.prototype.onUpdateCells = function () {
	        //Genereate rows again.
	        var rows = this.question["generatedVisibleRows"];
	        var columns = this.question.columns;
	        if (rows && rows.length > 0 && columns && columns.length > 0) this.onColumnChanged();
	    };
	    QuestionMatrixDynamicImplementor.prototype.onColumnChanged = function () {
	        var rows = this.question.visibleRows;
	        this.onRowCountChanged();
	    };
	    QuestionMatrixDynamicImplementor.prototype.onRowCountChanged = function () {
	        this.koRecalc(this.koRecalc() + 1);
	    };
	    QuestionMatrixDynamicImplementor.prototype.addRow = function () {
	        this.question.addRow();
	    };
	    QuestionMatrixDynamicImplementor.prototype.removeRow = function (row) {
	        var rows = this.question.cachedVisibleRows;
	        var index = rows.indexOf(row);
	        if (index > -1) {
	            this.question.removeRow(index);
	        }
	    };
	    return QuestionMatrixDynamicImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionMatrixDynamic = exports.QuestionMatrixDynamic = function (_super) {
	    __extends(QuestionMatrixDynamic, _super);
	    function QuestionMatrixDynamic(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionMatrixDynamicImplementor(this);
	    }
	    return QuestionMatrixDynamic;
	}(_question_matrixdynamic.QuestionMatrixDynamicModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("matrixdynamic", function () {
	    return new QuestionMatrixDynamic("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("matrixdynamic", function (name) {
	    var q = new QuestionMatrixDynamic(name);q.choices = [1, 2, 3, 4, 5];q.rowCount = 2;q.addColumn("Column 1");q.addColumn("Column 2");q.addColumn("Column 3");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionMultipleText = exports.QuestionMultipleTextImplementor = exports.MultipleTextItem = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _question_multipletext = __webpack_require__(20);
	
	var _koquestion = __webpack_require__(40);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var MultipleTextItem = exports.MultipleTextItem = function (_super) {
	    __extends(MultipleTextItem, _super);
	    function MultipleTextItem(name, title) {
	        if (name === void 0) {
	            name = null;
	        }
	        if (title === void 0) {
	            title = null;
	        }
	        _super.call(this, name, title);
	        this.name = name;
	        this.isKOValueUpdating = false;
	        this.koValue = ko.observable(this.value);
	        var self = this;
	        this.koValue.subscribe(function (newValue) {
	            if (!self.isKOValueUpdating) {
	                self.value = newValue;
	            }
	        });
	    }
	    MultipleTextItem.prototype.onValueChanged = function (newValue) {
	        this.isKOValueUpdating = true;
	        this.koValue(newValue);
	        this.isKOValueUpdating = false;
	    };
	    return MultipleTextItem;
	}(_question_multipletext.MultipleTextItemModel);
	var QuestionMultipleTextImplementor = exports.QuestionMultipleTextImplementor = function (_super) {
	    __extends(QuestionMultipleTextImplementor, _super);
	    function QuestionMultipleTextImplementor(question) {
	        _super.call(this, question);
	        this.koRows = ko.observableArray(this.question.getRows());
	        this.question["koRows"] = this.koRows;
	        this.onColCountChanged();
	        var self = this;
	        this.question.colCountChangedCallback = function () {
	            self.onColCountChanged();
	        };
	    }
	    QuestionMultipleTextImplementor.prototype.onColCountChanged = function () {
	        this.koRows(this.question.getRows());
	    };
	    return QuestionMultipleTextImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionMultipleText = exports.QuestionMultipleText = function (_super) {
	    __extends(QuestionMultipleText, _super);
	    function QuestionMultipleText(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionMultipleTextImplementor(this);
	    }
	    QuestionMultipleText.prototype.createTextItem = function (name, title) {
	        return new MultipleTextItem(name, title);
	    };
	    return QuestionMultipleText;
	}(_question_multipletext.QuestionMultipleTextModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("multipletextitem", function () {
	    return new MultipleTextItem("");
	});
	_jsonobject.JsonObject.metaData.overrideClassCreatore("multipletext", function () {
	    return new QuestionMultipleText("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("multipletext", function (name) {
	    var q = new QuestionMultipleText(name);q.AddItem("text1");q.AddItem("text2");return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRadiogroup = undefined;
	
	var _question_radiogroup = __webpack_require__(27);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion_baseselect = __webpack_require__(41);
	
	var QuestionRadiogroup = exports.QuestionRadiogroup = function (_super) {
	    __extends(QuestionRadiogroup, _super);
	    function QuestionRadiogroup(name) {
	        _super.call(this, name);
	        this.name = name;
	        new _koquestion_baseselect.QuestionCheckboxBaseImplementor(this);
	    }
	    return QuestionRadiogroup;
	}(_question_radiogroup.QuestionRadiogroupModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("radiogroup", function () {
	    return new QuestionRadiogroup("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("radiogroup", function (name) {
	    var q = new QuestionRadiogroup(name);q.choices = _questionfactory.QuestionFactory.DefaultChoices;return q;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionRating = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _koquestion = __webpack_require__(40);
	
	var _question_rating = __webpack_require__(28);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var QuestionRatingImplementor = function (_super) {
	    __extends(QuestionRatingImplementor, _super);
	    function QuestionRatingImplementor(question) {
	        _super.call(this, question);
	        this.koVisibleRateValues = ko.observableArray(this.getValues());
	        this.question["koVisibleRateValues"] = this.koVisibleRateValues;
	        var self = this;
	        this.koChange = function (val) {
	            self.koValue(val.itemValue);
	        };
	        this.question["koChange"] = this.koChange;
	        this.question.rateValuesChangedCallback = function () {
	            self.onRateValuesChanged();
	        };
	        this.question["koGetCss"] = function (val) {
	            var css = self.question.itemCss;
	            return self.question["koValue"]() == val.value ? css + " active" : css;
	        };
	    }
	    QuestionRatingImplementor.prototype.onRateValuesChanged = function () {
	        this.koVisibleRateValues(this.getValues());
	    };
	    QuestionRatingImplementor.prototype.getValues = function () {
	        return this.question.visibleRateValues;
	    };
	    return QuestionRatingImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionRating = exports.QuestionRating = function (_super) {
	    __extends(QuestionRating, _super);
	    function QuestionRating(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionRatingImplementor(this);
	    }
	    QuestionRating.prototype.onSetData = function () {
	        this.itemCss = this.data["css"].rating.item;
	    };
	    return QuestionRating;
	}(_question_rating.QuestionRatingModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("rating", function () {
	    return new QuestionRating("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("rating", function (name) {
	    return new QuestionRating(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.QuestionText = exports.QuestionTextImplementor = undefined;
	
	var _question_text = __webpack_require__(29);
	
	var _jsonobject = __webpack_require__(7);
	
	var _questionfactory = __webpack_require__(16);
	
	var _koquestion = __webpack_require__(40);
	
	var QuestionTextImplementor = exports.QuestionTextImplementor = function (_super) {
	    __extends(QuestionTextImplementor, _super);
	    function QuestionTextImplementor(question) {
	        _super.call(this, question);
	        this.question = question;
	    }
	    QuestionTextImplementor.prototype.updateValue = function (newValue) {
	        _super.prototype.updateValue.call(this, newValue);
	        if (newValue !== this.question.value) {
	            this.koValue(this.question.value);
	        }
	    };
	    return QuestionTextImplementor;
	}(_koquestion.QuestionImplementor);
	var QuestionText = exports.QuestionText = function (_super) {
	    __extends(QuestionText, _super);
	    function QuestionText(name) {
	        _super.call(this, name);
	        this.name = name;
	        new QuestionTextImplementor(this);
	    }
	    return QuestionText;
	}(_question_text.QuestionTextModel);
	_jsonobject.JsonObject.metaData.overrideClassCreatore("text", function () {
	    return new QuestionText("");
	});
	_questionfactory.QuestionFactory.Instance.registerQuestion("text", function (name) {
	    return new QuestionText(name);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__extends) {"use strict";
	
	exports.__esModule = true;
	exports.SurveyWindow = undefined;
	
	var _knockout = __webpack_require__(36);
	
	var ko = _interopRequireWildcard(_knockout);
	
	var _surveyWindow = __webpack_require__(33);
	
	var _kosurvey = __webpack_require__(35);
	
	var _templateWindowKo = __webpack_require__(55);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SurveyWindow = exports.SurveyWindow = function (_super) {
	    __extends(SurveyWindow, _super);
	    function SurveyWindow(jsonObj) {
	        _super.call(this, jsonObj);
	        this.koExpanded = ko.observable(false);
	        this.koExpandedCss = ko.observable(this.getButtonCss());
	        var self = this;
	        this.doExpand = function () {
	            self.changeExpanded();
	        };
	        this.survey.onComplete.add(function (sender) {
	            self.onComplete();self.koExpandedCss(self.getButtonCss());
	        });
	    }
	    SurveyWindow.prototype.createSurvey = function (jsonObj) {
	        return new _kosurvey.Survey(jsonObj);
	    };
	    SurveyWindow.prototype.expandcollapse = function (value) {
	        _super.prototype.expandcollapse.call(this, value);
	        this.koExpanded(this.isExpandedValue);
	    };
	    Object.defineProperty(SurveyWindow.prototype, "template", {
	        get: function get() {
	            return this.templateValue ? this.templateValue : this.getDefaultTemplate();
	        },
	        set: function set(value) {
	            this.templateValue = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindow.prototype.show = function () {
	        this.windowElement.innerHTML = this.template;
	        ko.cleanNode(this.windowElement);
	        ko.applyBindings(this, this.windowElement);
	        document.body.appendChild(this.windowElement);
	        this.survey.render(SurveyWindow.surveyElementName);
	        this.isShowingValue = true;
	    };
	    SurveyWindow.prototype.getDefaultTemplate = function () {
	        return _templateWindowKo.koTemplate.html;
	    };
	    SurveyWindow.prototype.hide = function () {
	        document.body.removeChild(this.windowElement);
	        this.windowElement.innerHTML = "";
	        this.isShowingValue = false;
	    };
	    Object.defineProperty(SurveyWindow.prototype, "css", {
	        get: function get() {
	            return this.survey["css"];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SurveyWindow.prototype.changeExpanded = function () {
	        this.expandcollapse(!this.isExpanded);
	    };
	    SurveyWindow.prototype.onComplete = function () {
	        this.hide();
	    };
	    SurveyWindow.prototype.getButtonCss = function () {
	        return this.koExpanded() ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
	    };
	    return SurveyWindow;
	}(_surveyWindow.SurveyWindowModel);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var koTemplate = exports.koTemplate = { html: "" };
	koTemplate.html = '<div style="position: fixed; bottom: 3px; right: 10px;" data-bind="css: $root.css.window.root">    <div data-bind="css: $root.css.window.header.root">        <a href="#" data-bind="click:doExpand" style="width:100%">            <span style="padding-right:10px" data-bind="text:title, css: $root.css.window.header.title"></span>            <span aria-hidden="true" data-bind="css: koExpandedCss"></span>        </a>    </div>    <div data-bind="visible:koExpanded, css: $root.css.window.body">        <div id="windowSurveyJS"></div>    </div></div>';

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.SurveyTemplateText = undefined;
	
	var _templateKo = __webpack_require__(38);
	
	var SurveyTemplateText = exports.SurveyTemplateText = function () {
	    function SurveyTemplateText() {}
	    SurveyTemplateText.prototype.replaceText = function (replaceText, id, questionType) {
	        if (questionType === void 0) {
	            questionType = null;
	        }
	        id = this.getId(id, questionType);
	        var pos = this.text.indexOf(id);
	        if (pos < 0) return;
	        pos = this.text.indexOf('>', pos);
	        if (pos < 0) return;
	        var startPos = pos + 1;
	        var endString = "</script>";
	        pos = this.text.indexOf(endString, startPos);
	        if (pos < 0) return;
	        this.text = this.text.substr(0, startPos) + replaceText + this.text.substr(pos);
	    };
	    SurveyTemplateText.prototype.getId = function (id, questionType) {
	        var result = 'id="survey-' + id;
	        if (questionType) {
	            result += "-" + questionType;
	        }
	        return result + '"';
	    };
	    Object.defineProperty(SurveyTemplateText.prototype, "text", {
	        get: function get() {
	            return _templateKo.koTemplate.html;
	        },
	        set: function set(value) {
	            _templateKo.koTemplate.html = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SurveyTemplateText;
	}();

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(58);
	
	__webpack_require__(59);
	
	__webpack_require__(60);
	
	__webpack_require__(61);
	
	__webpack_require__(62);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	__webpack_require__(66);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.danishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var danishSurveyStrings = exports.danishSurveyStrings = {
	    pagePrevText: "Tilbage",
	    pageNextText: "Videre",
	    completeText: "Færdig",
	    progressText: "Side {0} af {1}",
	    emptySurvey: "Der er ingen synlige spørgsmål.",
	    completingSurvey: "Mange tak for din besvarelse!",
	    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
	    otherItemText: "Valgfrit svar...",
	    optionsCaption: "Vælg...",
	    requiredError: "Besvar venligst spørgsmålet.",
	    numericError: "Angiv et tal.",
	    textMinLength: "Angiv mindst {0} tegn.",
	    minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
	    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
	    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
	    numericMin: "'{0}' skal være lig med eller større end {1}",
	    numericMax: "'{0}' skal være lig med eller mindre end {1}",
	    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
	    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
	    otherRequiredError: "Angiv en værdi for dit valgfrie svar."
	};
	_surveyStrings.surveyLocalization.locales["da"] = danishSurveyStrings;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.dutchSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var dutchSurveyStrings = exports.dutchSurveyStrings = {
	    pagePrevText: "Vorige",
	    pageNextText: "Volgende",
	    completeText: "Afsluiten",
	    otherItemText: "Andere",
	    progressText: "Pagina {0} van {1}",
	    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
	    completingSurvey: "Bedankt om deze vragenlijst in te vullen",
	    loadingSurvey: "De vragenlijst is aan het laden...",
	    optionsCaption: "Kies...",
	    requiredError: "Gelieve een antwoord in te vullen",
	    numericError: "Het antwoord moet een getal zijn",
	    textMinLength: "Gelieve minsten {0} karakters in te vullen.",
	    minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
	    maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
	    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
	    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
	    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
	    invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
	    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
	    otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
	};
	_surveyStrings.surveyLocalization.locales["nl"] = dutchSurveyStrings;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.finnishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var finnishSurveyStrings = exports.finnishSurveyStrings = {
	    pagePrevText: "Edellinen",
	    pageNextText: "Seuraava",
	    completeText: "Valmis",
	    otherItemText: "Muu (kuvaile)",
	    progressText: "Sivu {0}/{1}",
	    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
	    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
	    loadingSurvey: "Kyselyä ladataan palvelimelta...",
	    optionsCaption: "Valitse...",
	    requiredError: "Vastaa kysymykseen, kiitos.",
	    numericError: "Arvon tulee olla numeerinen.",
	    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
	    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
	    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
	    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
	    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
	    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
	    invalidEmail: "Syötä validi sähköpostiosoite.",
	    otherRequiredError: "Ole hyvä ja syötä \"Muu (kuvaile)\""
	};
	_surveyStrings.surveyLocalization.locales["fi"] = finnishSurveyStrings;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.frenchSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var frenchSurveyStrings = exports.frenchSurveyStrings = {
	    pagePrevText: "Pr\xE9c\xE9dent",
	    pageNextText: "Suivant",
	    completeText: "Terminer",
	    otherItemText: "Autre (pr\xE9ciser)",
	    progressText: "Page {0} sur {1}",
	    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
	    completingSurvey: "Merci d'avoir r\xE9pondu au questionnaire!",
	    loadingSurvey: "Le questionnaire est en cours de chargement...",
	    optionsCaption: "Choisissez...",
	    requiredError: "La r\xE9ponse \xE0 cette question est obligatoire.",
	    numericError: "La r\xE9ponse doit \xEAtre un nombre.",
	    textMinLength: "Merci d'entrer au moins {0} symboles.",
	    minSelectError: "Merci de s\xE9lectionner au moins {0}r\xE9ponses.",
	    maxSelectError: "Merci de s\xE9lectionner au plus {0}r\xE9ponses.",
	    numericMinMax: "Votre r\xE9ponse '{0}' doit \xEAtresup\xE9rieure ou \xE9gale \xE0 {1} et inf\xE9rieure ou\xE9gale \xE0 {2}",
	    numericMin: "Votre r\xE9ponse '{0}' doit \xEAtresup\xE9rieure ou \xE9gale \xE0 {1}",
	    numericMax: "Votre r\xE9ponse '{0}' doit \xEAtreinf\xE9rieure ou \xE9gale \xE0 {1}",
	    invalidEmail: "Merci d'entrer une adresse mail valide.",
	    exceedMaxSize: "La taille du fichier ne doit pas exc\xE9der {0}.",
	    otherRequiredError: "Merci de pr\xE9ciser le champ 'Autre'."
	};
	_surveyStrings.surveyLocalization.locales["fr"] = frenchSurveyStrings;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.germanSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var germanSurveyStrings = exports.germanSurveyStrings = {
	    pagePrevText: "Zurück",
	    pageNextText: "Weiter",
	    completeText: "Fertig",
	    progressText: "Seite {0} von {1}",
	    emptySurvey: "Es gibt keine sichtbare Frage.",
	    completingSurvey: "Vielen Dank für das Ausfüllen des Fragebogens!",
	    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
	    otherItemText: "Benutzerdefinierte Antwort...",
	    optionsCaption: "Wählen...",
	    requiredError: "Bitte antworten Sie auf die Frage.",
	    numericError: "Der Wert sollte eine Zahl sein.",
	    textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
	    minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
	    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Varianten.",
	    numericMinMax: "'{0}' solte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
	    numericMin: "'{0}' solte gleich oder größer sein als {1}",
	    numericMax: "'{0}' solte gleich oder kleiner als {1}",
	    invalidEmail: "Bitte geben Sie eine gültige Email-Adresse ein.",
	    exceedMaxSize: "Die Dateigröße soll nicht mehr als {0}.",
	    otherRequiredError: "Bitte geben Sie einen Wert für Ihre benutzerdefinierte Antwort ein."
	};
	_surveyStrings.surveyLocalization.locales["de"] = germanSurveyStrings;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.greekSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var greekSurveyStrings = exports.greekSurveyStrings = {
	    pagePrevText: "Προηγούμενο",
	    pageNextText: "Επόμενο",
	    completeText: "Ολοκλήρωση",
	    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
	    progressText: "Σελίδα {0} από {1}",
	    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
	    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
	    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
	    optionsCaption: "Επιλέξτε...",
	    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
	    requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
	    numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
	    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
	    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
	    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
	    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
	    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
	    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
	    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
	    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
	    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
	    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
	    exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
	    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
	    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
	    addRow: "Προσθήκη γραμμής",
	    removeRow: "Αφαίρεση"
	};
	_surveyStrings.surveyLocalization.locales["gr"] = greekSurveyStrings;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.polishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var polishSurveyStrings = exports.polishSurveyStrings = {
	    pagePrevText: "Wstecz",
	    pageNextText: "Dalej",
	    completeText: "Gotowe",
	    progressText: "Strona {0} z {1}",
	    emptySurvey: "Nie ma widocznych pytań.",
	    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
	    loadingSurvey: "Trwa wczytywanie ankiety...",
	    otherItemText: "Inna odpowiedź...",
	    optionsCaption: "Wybierz...",
	    requiredError: "Proszę odpowiedzieć na to pytanie.",
	    numericError: "W tym polu można wpisać tylko liczby.",
	    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
	    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
	    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
	    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
	    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
	    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
	    invalidEmail: "Proszę podać prawidłowy adres email.",
	    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
	    otherRequiredError: "Proszę podać inną odpowiedź."
	};
	_surveyStrings.surveyLocalization.locales["pl"] = polishSurveyStrings;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.russianSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var russianSurveyStrings = exports.russianSurveyStrings = {
	    pagePrevText: "Назад",
	    pageNextText: "Далее",
	    completeText: "Готово",
	    progressText: "Страница {0} из {1}",
	    emptySurvey: "Нет ни одного вопроса.",
	    completingSurvey: "Благодарим Вас за заполнение анкеты!",
	    loadingSurvey: "Загрузка с сервера...",
	    otherItemText: "Другое (пожалуйста, опишите)",
	    optionsCaption: "Выбрать...",
	    requiredError: "Пожалуйста, ответьте на вопрос.",
	    numericError: "Ответ должен быть числом.",
	    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
	    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
	    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
	    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
	    numericMin: "'{0}' должно быть равным или больше, чем {1}",
	    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
	    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
	    otherRequiredError: "Пожалуйста, введите данные в поле \"Другое\""
	};
	_surveyStrings.surveyLocalization.locales["ru"] = russianSurveyStrings;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.turkishSurveyStrings = undefined;
	
	var _surveyStrings = __webpack_require__(6);
	
	var turkishSurveyStrings = exports.turkishSurveyStrings = {
	    pagePrevText: "Geri",
	    pageNextText: "İleri",
	    completeText: "Anketi Tamamla",
	    otherItemText: "Diğer (açıklayınız)",
	    progressText: "Sayfa {0} / {1}",
	    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
	    completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
	    loadingSurvey: "Anket sunucudan yükleniyor ...",
	    optionsCaption: "Seçiniz ...",
	    requiredError: "Lütfen soruya cevap veriniz",
	    numericError: "Girilen değer numerik olmalıdır",
	    textMinLength: "En az {0} sembol giriniz.",
	    minRowCountError: "Lütfen en az {0} satırı doldurun.",
	    minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
	    maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
	    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
	    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
	    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
	    invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
	    urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
	    urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
	    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
	    otherRequiredError: "Lütfen diğer değerleri giriniz.",
	    uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
	    addRow: "Satır Ekle",
	    removeRow: "Kaldır"
	};
	_surveyStrings.surveyLocalization.locales["tr"] = turkishSurveyStrings;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(68);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.defaultBootstrapCss = undefined;
	
	var _cssstandard = __webpack_require__(34);
	
	var defaultBootstrapCss = exports.defaultBootstrapCss = {
	    root: "",
	    header: "panel-heading",
	    body: "panel-body",
	    footer: "panel-footer",
	    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
	    progress: "progress center-block", progressBar: "progress-bar",
	    pageTitle: "",
	    row: "",
	    question: { root: "", title: "", comment: "form-control", indent: 20 },
	    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
	    checkbox: { root: "form-inline", item: "checkbox", other: "" },
	    comment: "form-control",
	    dropdown: "form-control",
	    matrix: { root: "table" },
	    matrixdropdown: { root: "table" },
	    matrixdynamic: { root: "table", button: "button" },
	    multipletext: { root: "table", itemTitle: "", itemValue: "form-control" },
	    radiogroup: { root: "form-inline", item: "radio", other: "" },
	    rating: { root: "btn-group", item: "btn btn-default" },
	    text: "form-control",
	    window: {
	        root: "modal-content", body: "modal-body",
	        header: {
	            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
	            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
	        }
	    }
	};
	_cssstandard.surveyCss["bootstrap"] = defaultBootstrapCss;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMjliYzVkNzRiMzAzNjZjNjZhMCIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9rby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9jaHVua3MvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleVN0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzb25vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZGl0aW9uc1BhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0UHJlUHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9iYXNlc2VsZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbmZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXhkeW5hbWljLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9tYXRyaXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX211bHRpcGxldGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2NvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX2Ryb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYWRpb2dyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbl9yYXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uX3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHhTdXJ2ZXlTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy90cmlnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlXaW5kb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvc3VydmV5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9Iiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3BhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L3RlbXBsYXRlLmtvLmh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fY29tbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9kcm9wZG93bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbXVsdGlwbGV0ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3JhZGlvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fcmF0aW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tub2Nrb3V0L2tvU3VydmV5V2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9rbm9ja291dC90ZW1wbGF0ZS53aW5kb3cua28uaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMva25vY2tvdXQvdGVtcGxhdGVUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9kYW5pc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9kdXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL2Zpbm5pc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9nZXJtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9ncmVlay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL3BvbGlzaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9jYWxpemF0aW9uL3J1c3NpYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi90dXJraXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2NodW5rcy9jc3NGcmFtZXdvcmtzLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWZhdWx0Q3NzL2Nzc2Jvb3RzdHJhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckMrQjs7Ozs7Ozs7Ozs7Ozs7O3lCQU04Qjs7Ozs7Ozs7O3NCQU03RDs7Ozs7Ozs7O29CQUFtQjs7Ozs7O29CQUNuQjs7Ozs7Ozs7OzRCQUNBOzs7Ozs7Ozs7d0JBQ0E7Ozs7Ozs7OzttQ0FDQTs7Ozs7O21DQUNBOzs7Ozs7Ozs7aUNBQ0E7Ozs7Ozs7OztnQ0FDQTs7Ozs7Ozs7O2lDQUNBOzs7Ozs7Ozs7NkJBQ0E7Ozs7Ozs7Ozs2QkFDQTs7Ozs7Ozs7OytCQUFpQjs7Ozs7OytCQUNqQjs7Ozs7Ozs7O3VDQUNBOzs7Ozs7Ozs7c0NBQ29DOzs7Ozs7c0NBR3BDOzs7Ozs7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QjtBQUNsQixhQUFFLEVBQU0sTUFBVztBQUNYLHFCQUFFLEVBQU0sTUFBVztBQUNwQixvQkFBRSxFQUFNLE1BQVMsU0FBUSxRQUFZO0FBQ3RDLG1CQUFFLEVBQU0sTUFBUyxTQUFXLFdBQUksSUFBVyxXQUFrQjtBQUMvRCxpQkFBRSxFQUFNLE1BQWUsZUFBTSxNQUFTLFNBQU8sT0FBTTtBQUN2RCxhQUFFLEVBQU0sTUFBYSxhQUFNLE1BQXFCO0FBQ2xELFdBQWdCO0FBQ2Q7QUFDRSxlQUFpQixpQkFBTSxNQUFjO0FBQ25DO0FBQ0UsbUJBQTRCLDRCQUFPLE9BQWEsYUFBUSxRQUF3QjtBQUN0RSw2QkFBNkMsNkNBQWlCLGlCQUd0RjtBQUxjO0FBRko7QUF0QnFCO0FBOEJ4Qix3QkFBYSxlQUF1QixvQiIsImZpbGUiOiJzdXJ2ZXkua28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN1cnZleVwiLCBbXCJrbm9ja291dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTdXJ2ZXlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU3VydmV5XCJdID0gZmFjdG9yeShyb290W1wia29cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkMjliYzVkNzRiMzAzNjZjNjZhMFxuICoqLyIsIi8vIG1vZGVsXHJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5rcy9tb2RlbFwiO1xyXG5cclxuLy8gbG9jYWxpemF0aW9uXHJcbmltcG9ydCAnLi9jaHVua3MvbG9jYWxpemF0aW9uJztcclxuXHJcbi8vIGNzcyBzdGFuZGFyZFxyXG5leHBvcnQge2RlZmF1bHRTdGFuZGFyZENzc30gZnJvbSBcIi4uL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmRcIjtcclxuLy9jc3MgZnJhbWV3b3Jrc1xyXG5pbXBvcnQgJy4vY2h1bmtzL2Nzc0ZyYW1ld29ya3MnO1xyXG5cclxuLy8ga25vY2tvdXRcclxuZXhwb3J0IHtTdXJ2ZXl9IGZyb20gXCIuLi9rbm9ja291dC9rb3N1cnZleVwiO1xyXG5leHBvcnQge1F1ZXN0aW9uUm93LCBQYWdlfSBmcm9tIFwiLi4va25vY2tvdXQva29wYWdlXCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvckJhc2V9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uYmFzZVwiO1xyXG5leHBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uXCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlSW1wbGVtZW50b3J9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcclxuZXhwb3J0IHtRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yfSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25DaGVja2JveH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fY2hlY2tib3hcIjtcclxuZXhwb3J0IHtRdWVzdGlvbkNvbW1lbnR9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX2NvbW1lbnRcIjtcclxuZXhwb3J0IHtRdWVzdGlvbkRyb3Bkb3dufSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9kcm9wZG93blwiO1xyXG5leHBvcnQge1F1ZXN0aW9uRmlsZX0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fZmlsZVwiO1xyXG5leHBvcnQge1F1ZXN0aW9uSHRtbH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25faHRtbFwiO1xyXG5leHBvcnQge01hdHJpeFJvdywgUXVlc3Rpb25NYXRyaXh9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeFwiO1xyXG5leHBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd259IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duXCI7XHJcbmV4cG9ydCB7XHJcbiAgICBRdWVzdGlvbk1hdHJpeER5bmFtaWNJbXBsZW1lbnRvcixcclxuICAgIFF1ZXN0aW9uTWF0cml4RHluYW1pY1xyXG59IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGR5bmFtaWNcIjtcclxuZXhwb3J0IHtcclxuICAgIE11bHRpcGxlVGV4dEl0ZW0sIFF1ZXN0aW9uTXVsdGlwbGVUZXh0SW1wbGVtZW50b3IsXHJcbiAgICBRdWVzdGlvbk11bHRpcGxlVGV4dFxyXG59IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX211bHRpcGxldGV4dFwiO1xyXG5leHBvcnQge1F1ZXN0aW9uUmFkaW9ncm91cH0gZnJvbSBcIi4uL2tub2Nrb3V0L2tvcXVlc3Rpb25fcmFkaW9ncm91cFwiO1xyXG5leHBvcnQge1F1ZXN0aW9uUmF0aW5nfSBmcm9tIFwiLi4va25vY2tvdXQva29xdWVzdGlvbl9yYXRpbmdcIjtcclxuZXhwb3J0IHtRdWVzdGlvblRleHR9IGZyb20gXCIuLi9rbm9ja291dC9rb3F1ZXN0aW9uX3RleHRcIjtcclxuZXhwb3J0IHtTdXJ2ZXlXaW5kb3d9IGZyb20gXCIuLi9rbm9ja291dC9rb1N1cnZleVdpbmRvd1wiO1xyXG5leHBvcnQge1N1cnZleVRlbXBsYXRlVGV4dH0gZnJvbSBcIi4uL2tub2Nrb3V0L3RlbXBsYXRlVGV4dFwiO1xyXG5cclxuZXhwb3J0IHtfX2V4dGVuZHN9IGZyb20gXCIuLi9leHRlbmRzXCI7XHJcblxyXG4vL1VuY29tbWVudCB0byBpbmNsdWRlIHRoZSBcImRhdGVcIiBxdWVzdGlvbiB0eXBlLlxyXG4vL2V4cG9ydCB7UXVlc3Rpb25EYXRlfSBmcm9tIFwiLi4vcGx1Z2lucy9rbm9ja291dC9rb3F1ZXN0aW9uX2RhdGVcIjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lbnRyaWVzL2tvLnRzXG4gKiovIiwiZXhwb3J0IHtcclxuICAgIEFuc3dlckNvdW50VmFsaWRhdG9yLCBFbWFpbFZhbGlkYXRvciwgTnVtZXJpY1ZhbGlkYXRvciwgUmVnZXhWYWxpZGF0b3IsXHJcbiAgICBTdXJ2ZXlWYWxpZGF0b3IsIFRleHRWYWxpZGF0b3IsIFZhbGlkYXRvclJlc3VsdCwgVmFsaWRhdG9yUnVubmVyXHJcbn0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRvclwiO1xyXG5leHBvcnQge0Jhc2UsIEV2ZW50LCBJdGVtVmFsdWUsIFN1cnZleUVycm9yLCBJU3VydmV5fSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5leHBvcnQge0Nob2ljZXNSZXN0ZnVsbH0gZnJvbSBcIi4uLy4uL2Nob2ljZXNSZXN0ZnVsbFwiO1xyXG5leHBvcnQge0NvbmRpdGlvbiwgQ29uZGl0aW9uTm9kZSwgQ29uZGl0aW9uUnVubmVyfSBmcm9tIFwiLi4vLi4vY29uZGl0aW9uc1wiO1xyXG5leHBvcnQge0NvbmRpdGlvbnNQYXJzZXJ9IGZyb20gXCIuLi8uLi9jb25kaXRpb25zUGFyc2VyXCI7XHJcbmV4cG9ydCB7Q3VzdG9tRXJyb3IsIEV4Y2VlZFNpemVFcnJvciwgUmVxdXJlTnVtZXJpY0Vycm9yfSBmcm9tIFwiLi4vLi4vZXJyb3JcIjtcclxuZXhwb3J0IHtcclxuICAgIEpzb25FcnJvciwgSnNvbkluY29ycmVjdFR5cGVFcnJvciwgSnNvbk1ldGFkYXRhLCBKc29uTWV0YWRhdGFDbGFzcyxcclxuICAgIEpzb25NaXNzaW5nVHlwZUVycm9yLCBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2UsIEpzb25PYmplY3QsIEpzb25PYmplY3RQcm9wZXJ0eSxcclxuICAgIEpzb25SZXF1aXJlZFByb3BlcnR5RXJyb3IsIEpzb25Vbmtub3duUHJvcGVydHlFcnJvclxyXG59IGZyb20gXCIuLi8uLi9qc29ub2JqZWN0XCI7XHJcbmV4cG9ydCB7XHJcbiAgICBNYXRyaXhEcm9wZG93bkNlbGwsIE1hdHJpeERyb3Bkb3duQ29sdW1uLCBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSxcclxuICAgIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2VcclxufSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XHJcbmV4cG9ydCB7TWF0cml4RHJvcGRvd25Sb3dNb2RlbCwgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25cIjtcclxuZXhwb3J0IHtNYXRyaXhEeW5hbWljUm93TW9kZWwsIFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4ZHluYW1pY1wiO1xyXG5leHBvcnQge01hdHJpeFJvd01vZGVsLCBRdWVzdGlvbk1hdHJpeE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbWF0cml4XCI7XHJcbmV4cG9ydCB7TXVsdGlwbGVUZXh0SXRlbU1vZGVsLCBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fbXVsdGlwbGV0ZXh0XCI7XHJcbmV4cG9ydCB7UGFnZU1vZGVsLCBRdWVzdGlvblJvd01vZGVsfSBmcm9tIFwiLi4vLi4vcGFnZVwiO1xyXG5leHBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25cIjtcclxuZXhwb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi8uLi9xdWVzdGlvbmJhc2VcIjtcclxuZXhwb3J0IHtRdWVzdGlvbkNoZWNrYm94QmFzZSwgUXVlc3Rpb25TZWxlY3RCYXNlfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xyXG5leHBvcnQge1F1ZXN0aW9uQ2hlY2tib3hNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2NoZWNrYm94XCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25Db21tZW50TW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9jb21tZW50XCI7XHJcbmV4cG9ydCB7IFF1ZXN0aW9uRHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX2Ryb3Bkb3duXCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25GaWxlTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9maWxlXCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25IdG1sTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9odG1sXCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25SYWRpb2dyb3VwTW9kZWx9IGZyb20gXCIuLi8uLi9xdWVzdGlvbl9yYWRpb2dyb3VwXCI7XHJcbmV4cG9ydCB7UXVlc3Rpb25SYXRpbmdNb2RlbH0gZnJvbSBcIi4uLy4uL3F1ZXN0aW9uX3JhdGluZ1wiO1xyXG5leHBvcnQge1F1ZXN0aW9uVGV4dE1vZGVsfSBmcm9tIFwiLi4vLi4vcXVlc3Rpb25fdGV4dFwiO1xyXG5leHBvcnQge1N1cnZleU1vZGVsfSBmcm9tIFwiLi4vLi4vc3VydmV5XCI7XHJcbmV4cG9ydCB7XHJcbiAgICBTdXJ2ZXlUcmlnZ2VyLCBTdXJ2ZXlUcmlnZ2VyQ29tcGxldGUsIFN1cnZleVRyaWdnZXJTZXRWYWx1ZSwgU3VydmV5VHJpZ2dlclZpc2libGUsXHJcbiAgICBUcmlnZ2VyXHJcbn0gZnJvbSBcIi4uLy4uL3RyaWdnZXJcIjtcclxuZXhwb3J0IHtTdXJ2ZXlXaW5kb3dNb2RlbH0gZnJvbSBcIi4uLy4uL3N1cnZleVdpbmRvd1wiO1xyXG5leHBvcnQge1RleHRQcmVQcm9jZXNzb3J9IGZyb20gXCIuLi8uLi90ZXh0UHJlUHJvY2Vzc29yXCI7XHJcblxyXG5leHBvcnQge2R4U3VydmV5U2VydmljZX0gZnJvbSBcIi4uLy4uL2R4U3VydmV5U2VydmljZVwiO1xyXG5leHBvcnQge3N1cnZleUxvY2FsaXphdGlvbiwgc3VydmV5U3RyaW5nc30gZnJvbSBcIi4uLy4uL3N1cnZleVN0cmluZ3NcIjtcclxuXHJcbi8vVW5jb21tZW50IHRvIGluY2x1ZGUgdGhlIFwiZGF0ZVwiIHF1ZXN0aW9uIHR5cGUuXHJcbi8vZXhwb3J0IHtkZWZhdWx0IGFzIFF1ZXN0aW9uRGF0ZU1vZGVsfSBmcm9tIFwiLi4vLi4vcGx1Z2lucy9xdWVzdGlvbl9kYXRlXCI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZW50cmllcy9jaHVua3MvbW9kZWwudHNcbiAqKi8iLCJpbXBvcnQge0Jhc2UsIFN1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7Q3VzdG9tRXJyb3IsIFJlcXVyZU51bWVyaWNFcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcclxuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcclxuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tICcuL2pzb25vYmplY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclJlc3VsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IGFueSwgcHVibGljIGVycm9yOiBTdXJ2ZXlFcnJvciA9IG51bGwpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVZhbGlkYXRvciBleHRlbmRzIEJhc2Uge1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIDogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0KSByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRFcnJvclRleHQobmFtZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbGlkYXRvck93bmVyIHtcclxuICAgIHZhbGlkYXRvcnM6IEFycmF5PFN1cnZleVZhbGlkYXRvcj47XHJcbiAgICB2YWx1ZTogYW55O1xyXG4gICAgZ2V0VmFsaWRhdG9yVGl0bGUoKTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JSdW5uZXIge1xyXG4gICAgcHVibGljIHJ1bihvd25lcjogSVZhbGlkYXRvck93bmVyKTogU3VydmV5RXJyb3Ige1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3duZXIudmFsaWRhdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yUmVzdWx0ID0gb3duZXIudmFsaWRhdG9yc1tpXS52YWxpZGF0ZShvd25lci52YWx1ZSwgb3duZXIuZ2V0VmFsaWRhdG9yVGl0bGUoKSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvclJlc3VsdC5lcnJvcikgcmV0dXJuIHZhbGlkYXRvclJlc3VsdC5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3JSZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci52YWx1ZSA9IHZhbGlkYXRvclJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWVyaWNWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1pblZhbHVlOiBudW1iZXIgPSBudWxsLCBwdWJsaWMgbWF4VmFsdWU6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibnVtZXJpY3ZhbGlkYXRvclwiOyB9XHJcbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdGhpcy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IFJlcXVyZU51bWVyaWNFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQocGFyc2VGbG9hdCh2YWx1ZSkpO1xyXG4gICAgICAgIGlmICh0aGlzLm1pblZhbHVlICYmIHRoaXMubWluVmFsdWUgPiByZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmVycm9yID0gbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KG5hbWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWF4VmFsdWUgJiYgdGhpcy5tYXhWYWx1ZSA8IHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQobmFtZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpID8gbnVsbCA6IHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0RXJyb3JUZXh0KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB2TmFtZSA9IG5hbWUgPyBuYW1lIDogXCJ2YWx1ZVwiO1xyXG4gICAgICAgIGlmICh0aGlzLm1pblZhbHVlICYmIHRoaXMubWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJudW1lcmljTWluTWF4XCIpW1wiZm9ybWF0XCJdKHZOYW1lLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJudW1lcmljTWluXCIpW1wiZm9ybWF0XCJdKHZOYW1lLCB0aGlzLm1pblZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm51bWVyaWNNYXhcIilbXCJmb3JtYXRcIl0odk5hbWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNOdW1iZXIodmFsdWUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0VmFsaWRhdG9yIGV4dGVuZHMgU3VydmV5VmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidGV4dHZhbGlkYXRvclwiOyB9XHJcbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWluTGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgdGhpcy5taW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KG5hbWUpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRFcnJvclRleHQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ0ZXh0TWluTGVuZ3RoXCIpW1wiZm9ybWF0XCJdKHRoaXMubWluTGVuZ3RoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuc3dlckNvdW50VmFsaWRhdG9yIGV4dGVuZHMgU3VydmV5VmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtaW5Db3VudDogbnVtYmVyID0gbnVsbCwgcHVibGljIG1heENvdW50OiBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcImFuc3dlcmNvdW50dmFsaWRhdG9yXCI7IH1cclxuICAgIHB1YmxpYyB2YWxpZGF0ZSh2YWx1ZTogYW55LCBuYW1lOiBzdHJpbmcgPSBudWxsKTogVmFsaWRhdG9yUmVzdWx0IHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5jb25zdHJ1Y3RvciAhPSBBcnJheSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLm1pbkNvdW50ICYmIGNvdW50IDwgdGhpcy5taW5Db3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJlc3VsdChudWxsLCBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQoc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1pblNlbGVjdEVycm9yXCIpW1wiZm9ybWF0XCJdKHRoaXMubWluQ291bnQpKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXhDb3VudCAmJiBjb3VudCA+IHRoaXMubWF4Q291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSZXN1bHQobnVsbCwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJtYXhTZWxlY3RFcnJvclwiKVtcImZvcm1hdFwiXSh0aGlzLm1heENvdW50KSkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2V4VmFsaWRhdG9yIGV4dGVuZHMgU3VydmV5VmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWdleDogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJyZWdleHZhbGlkYXRvclwiOyB9XHJcbiAgICBwdWJsaWMgdmFsaWRhdGUodmFsdWU6IGFueSwgbmFtZTogc3RyaW5nID0gbnVsbCk6IFZhbGlkYXRvclJlc3VsdCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlZ2V4IHx8ICF2YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCh0aGlzLnJlZ2V4KTtcclxuICAgICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmFsaWRhdG9yUmVzdWx0KHZhbHVlLCBuZXcgQ3VzdG9tRXJyb3IodGhpcy5nZXRFcnJvclRleHQobmFtZSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3IgZXh0ZW5kcyBTdXJ2ZXlWYWxpZGF0b3Ige1xyXG4gICAgcHJpdmF0ZSByZSA9IC9eKChbXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFtePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl0rXFwuKStbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdezIsfSkkL2k7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZW1haWx2YWxpZGF0b3JcIjsgfVxyXG4gICAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnksIG5hbWU6IHN0cmluZyA9IG51bGwpOiBWYWxpZGF0b3JSZXN1bHQge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnJlLnRlc3QodmFsdWUpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRvclJlc3VsdCh2YWx1ZSwgbmV3IEN1c3RvbUVycm9yKHRoaXMuZ2V0RXJyb3JUZXh0KG5hbWUpKSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdEVycm9yVGV4dChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcImludmFsaWRFbWFpbFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInN1cnZleXZhbGlkYXRvclwiLCBbXCJ0ZXh0XCJdKTtcclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm51bWVyaWN2YWxpZGF0b3JcIiwgW1wibWluVmFsdWU6bnVtYmVyXCIsIFwibWF4VmFsdWU6bnVtYmVyXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTnVtZXJpY1ZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInRleHR2YWxpZGF0b3JcIiwgW1wibWluTGVuZ3RoOm51bWJlclwiXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFRleHRWYWxpZGF0b3IoKTsgfSwgXCJzdXJ2ZXl2YWxpZGF0b3JcIik7XHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJhbnN3ZXJjb3VudHZhbGlkYXRvclwiLCBbXCJtaW5Db3VudDpudW1iZXJcIiwgXCJtYXhDb3VudDpudW1iZXJcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBBbnN3ZXJDb3VudFZhbGlkYXRvcigpOyB9LCBcInN1cnZleXZhbGlkYXRvclwiKTtcclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInJlZ2V4dmFsaWRhdG9yXCIsIFtcInJlZ2V4XCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUmVnZXhWYWxpZGF0b3IoKTsgfSwgXCJzdXJ2ZXl2YWxpZGF0b3JcIik7XHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJlbWFpbHZhbGlkYXRvclwiLCBbXSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEVtYWlsVmFsaWRhdG9yKCk7IH0sIFwic3VydmV5dmFsaWRhdG9yXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbGlkYXRvci50c1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMgKGQsIGIpIHtcclxuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX19leHRlbmRzO1xyXG59XHJcblxyXG5leHBvcnRzLl9fZXh0ZW5kcyA9IF9fZXh0ZW5kcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9leHRlbmRzLnRzXG4gKiovIiwiZXhwb3J0IGludGVyZmFjZSBIYXNoVGFibGU8VD4ge1xyXG4gICAgW2tleTogc3RyaW5nXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElTdXJ2ZXlEYXRhIHtcclxuICAgIGdldFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueTtcclxuICAgIHNldFZhbHVlKG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSk7XHJcbiAgICBnZXRDb21tZW50KG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuICAgIHNldENvbW1lbnQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogc3RyaW5nKTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElTdXJ2ZXkgZXh0ZW5kcyBJU3VydmV5RGF0YSB7XHJcbiAgICBjdXJyZW50UGFnZTogSVBhZ2U7XHJcbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKTtcclxuICAgIHF1ZXN0aW9uVmlzaWJpbGl0eUNoYW5nZWQocXVlc3Rpb246IElRdWVzdGlvbiwgbmV3VmFsdWU6IGJvb2xlYW4pO1xyXG4gICAgcXVlc3Rpb25BZGRlZChxdWVzdGlvbjogSVF1ZXN0aW9uLCBpbmRleDogbnVtYmVyKTtcclxuICAgIHF1ZXN0aW9uUmVtb3ZlZChxdWVzdGlvbjogSVF1ZXN0aW9uKTtcclxuICAgIHZhbGlkYXRlUXVlc3Rpb24obmFtZTogc3RyaW5nKTogU3VydmV5RXJyb3I7XHJcbiAgICBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwcm9jZXNzVGV4dCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBpc0Rlc2lnbk1vZGU6IGJvb2xlYW47XHJcbiAgICByZXF1aXJlZFRleHQ6IHN0cmluZztcclxuICAgIHF1ZXN0aW9uU3RhcnRJbmRleDogc3RyaW5nO1xyXG4gICAgcXVlc3Rpb25UaXRsZVRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbjtcclxuICAgIHVwbG9hZEZpbGUobmFtZTogc3RyaW5nLCBmaWxlOiBGaWxlLCBzdG9yZURhdGFBc1RleHQ6IGJvb2xlYW4sIHVwbG9hZGluZ0NhbGxiYWNrOiAoc3RhdHVzOiBzdHJpbmcpID0+IGFueSk6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZGl0aW9uUnVubmVyIHtcclxuICAgIHJ1bkNvbmRpdGlvbih2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+KTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElRdWVzdGlvbiBleHRlbmRzIElDb25kaXRpb25SdW5uZXIge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxuICAgIGhhc1RpdGxlOiBib29sZWFuO1xyXG4gICAgc2V0VmlzaWJsZUluZGV4KHZhbHVlOiBudW1iZXIpO1xyXG4gICAgb25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSk7XHJcbiAgICBvblN1cnZleUxvYWQoKTtcclxuICAgIHN1cHBvcnRHb05leHRQYWdlQXV0b21hdGljKCk6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZSBleHRlbmRzIElDb25kaXRpb25SdW5uZXIge1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1WYWx1ZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNlcGFyYXRvciA9ICd8JztcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGF0YShpdGVtczogQXJyYXk8SXRlbVZhbHVlPiwgdmFsdWVzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgaXRlbXMubGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbaV07XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IEl0ZW1WYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUudmFsdWUpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4Y2VwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWx1ZS5nZXRUeXBlKSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUuZ2V0VHlwZSgpID09ICdpdGVtdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuaXRlbVZhbHVlID0gdmFsdWUuaXRlbVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXRlbVRleHQgPSB2YWx1ZS5pdGVtVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBJdGVtVmFsdWUuaXRlbVZhbHVlUHJvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEl0ZW1WYWx1ZS5jb3B5QXR0cmlidXRlcyh2YWx1ZSwgaXRlbSwgZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YShpdGVtczogQXJyYXk8SXRlbVZhbHVlPik6IGFueSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaGFzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyB2YWx1ZTogaXRlbS52YWx1ZSwgdGV4dDogaXRlbS50ZXh0IH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SXRlbUJ5VmFsdWUoaXRlbXM6IEFycmF5PEl0ZW1WYWx1ZT4sIHZhbDogYW55KTogSXRlbVZhbHVlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0udmFsdWUgPT0gdmFsKSByZXR1cm4gaXRlbXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXRlbVZhbHVlUHJvcCA9IFsgXCJ0ZXh0XCIsIFwidmFsdWVcIiwgXCJoYXNUZXh0XCJdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29weUF0dHJpYnV0ZXMoc3JjOiBhbnksIGRlc3Q6IGFueSwgZXhjZXB0b25zOiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNyYykge1xyXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBzcmNba2V5XSA9PSAnZnVuY3Rpb24nKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChleGNlcHRvbnMgJiYgZXhjZXB0b25zLmluZGV4T2Yoa2V5KSA+IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpdGVtVmFsdWU6IGFueTtcclxuICAgIHByaXZhdGUgaXRlbVRleHQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnksIHRleHQ6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIml0ZW12YWx1ZVwiOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLml0ZW1WYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pdGVtVmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBpZiAoIXRoaXMuaXRlbVZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHN0cjogc3RyaW5nID0gdGhpcy5pdGVtVmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgaW5kZXggPSBzdHIuaW5kZXhPZihJdGVtVmFsdWUuU2VwYXJhdG9yKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1WYWx1ZSA9IHN0ci5zbGljZSgwLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHN0ci5zbGljZShpbmRleCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaGFzVGV4dCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuaXRlbVRleHQgPyB0cnVlIDogZmFsc2U7IH1cclxuICAgIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1RleHQpIHJldHVybiB0aGlzLml0ZW1UZXh0O1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB0ZXh0KG5ld1RleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXRlbVRleHQgPSBuZXdUZXh0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBtZXRob2QgaXMgYWJzdHJhY3QnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3VydmV5RXJyb3Ige1xyXG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgbWV0aG9kIGlzIGFic3RyYWN0Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdXJ2ZXlQYWdlSWQgPSBcInNxX3BhZ2VcIjtcclxuZXhwb3J0IGNsYXNzIFN1cnZleUVsZW1lbnQge1xyXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxFbGVtZW50VG9Ub3AoZWxlbWVudElkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnRJZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcbiAgICAgICAgaWYgKCFlbCB8fCAhZWwuc2Nyb2xsSW50b1ZpZXcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZWxlbVRvcCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICBpZiAoZWxlbVRvcCA8IDApICBlbC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIHJldHVybiBlbGVtVG9wIDwgMDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgRm9jdXNFbGVtZW50KGVsZW1lbnRJZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50SWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG4gICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnQ8VCBleHRlbmRzIEZ1bmN0aW9uLCBPcHRpb25zPiAge1xyXG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IEFycmF5PFQ+O1xyXG4gICAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jYWxsYmFja3MgPT0gbnVsbCB8fCB0aGlzLmNhbGxiYWNrcy5sZW5ndGggPT0gMDsgfVxyXG4gICAgcHVibGljIGZpcmUoc2VuZGVyOiBhbnksIG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3MgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jYWxsYmFja3MubGVuZ3RoOyBpICsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjYWxsUmVzdWx0ID0gdGhpcy5jYWxsYmFja3NbaV0oc2VuZGVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZChmdW5jOiBUKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBuZXcgQXJyYXk8VD4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MucHVzaChmdW5jKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmUoZnVuYzogVCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcyA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jYWxsYmFja3MuaW5kZXhPZihmdW5jLCAwKTtcclxuICAgICAgICBpZiAoaW5kZXggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFzZS50c1xuICoqLyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tICcuL3N1cnZleVN0cmluZ3MnO1xyXG5pbXBvcnQge1N1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5zd2VyUmVxdWlyZWRFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlcXVpcmVkRXJyb3JcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlcXVyZU51bWVyaWNFcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwibnVtZXJpY0Vycm9yXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFeGNlZWRTaXplRXJyb3IgZXh0ZW5kcyBTdXJ2ZXlFcnJvciB7XHJcbiAgICBwcml2YXRlIG1heFNpemU6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG1heFNpemU6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJleGNlZWRNYXhTaXplXCIpW1wiZm9ybWF0XCJdKHRoaXMuZ2V0VGV4dFNpemUoKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFRleHRTaXplKCkge1xyXG4gICAgICAgIHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuICAgICAgICB2YXIgZml4ZWQgPSBbMCwgMCwgMiwgMywgM107XHJcbiAgICAgICAgaWYgKHRoaXMubWF4U2l6ZSA9PSAwKSByZXR1cm4gJzAgQnl0ZSc7XHJcbiAgICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKHRoaXMubWF4U2l6ZSkgLyBNYXRoLmxvZygxMDI0KSk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tYXhTaXplIC8gTWF0aC5wb3coMTAyNCwgaSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoZml4ZWRbaV0pICsgJyAnICsgc2l6ZXNbaV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21FcnJvciBleHRlbmRzIFN1cnZleUVycm9yIHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXJyb3IudHNcbiAqKi8iLCJleHBvcnQgdmFyIHN1cnZleUxvY2FsaXphdGlvbiA9IHtcclxuICAgIGN1cnJlbnRMb2NhbGU6IFwiXCIsXHJcbiAgICBsb2NhbGVzOiB7fSxcclxuICAgIGdldFN0cmluZzogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBsb2MgPSB0aGlzLmN1cnJlbnRMb2NhbGUgPyB0aGlzLmxvY2FsZXNbdGhpcy5jdXJyZW50TG9jYWxlXSA6IHN1cnZleVN0cmluZ3M7XHJcbiAgICAgICAgaWYgKCFsb2MgfHwgIWxvY1tzdHJOYW1lXSkgbG9jID0gc3VydmV5U3RyaW5ncztcclxuICAgICAgICByZXR1cm4gbG9jW3N0ck5hbWVdO1xyXG4gICAgfSxcclxuICAgIGdldExvY2FsZXM6IGZ1bmN0aW9uICgpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICB2YXIgcmVzID0gW107XHJcbiAgICAgICAgcmVzLnB1c2goXCJcIik7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubG9jYWxlcykge1xyXG4gICAgICAgICAgICByZXMucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuc29ydCgpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgc3VydmV5U3RyaW5ncyA9IHtcclxuICAgIHBhZ2VQcmV2VGV4dDogXCJQcmV2aW91c1wiLFxyXG4gICAgcGFnZU5leHRUZXh0OiBcIk5leHRcIixcclxuICAgIGNvbXBsZXRlVGV4dDogXCJDb21wbGV0ZVwiLFxyXG4gICAgb3RoZXJJdGVtVGV4dDogXCJPdGhlciAoZGVzY3JpYmUpXCIsXHJcbiAgICBwcm9ncmVzc1RleHQ6IFwiUGFnZSB7MH0gb2YgezF9XCIsXHJcbiAgICBlbXB0eVN1cnZleTogXCJUaGVyZSBpcyBubyBhbnkgdmlzaWJsZSBwYWdlIG9yIHZpc2libGUgcXVlc3Rpb24gaW4gdGhlIHN1cnZleS5cIixcclxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiVGhhbmsgWW91IGZvciBDb21wbGV0aW5nIHRoZSBTdXJ2ZXkhXCIsXHJcbiAgICBsb2FkaW5nU3VydmV5OiBcIlN1cnZleSBpcyBsb2FkaW5nIGZyb20gdGhlIHNlcnZlci4uLlwiLFxyXG4gICAgb3B0aW9uc0NhcHRpb246IFwiQ2hvb3NlLi4uXCIsXHJcbiAgICByZXF1aXJlZEVycm9yOiBcIlBsZWFzZSBhbnN3ZXIgdGhlIHF1ZXN0aW9uLlwiLFxyXG4gICAgcmVxdWlyZWRJbkFsbFJvd3NFcnJvcjogXCJQbGVhc2UgYW5zd2VyIHF1ZXN0aW9ucyBpbiBhbGwgcm93cy5cIixcclxuICAgIG51bWVyaWNFcnJvcjogXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgbnVtZXJpYy5cIixcclxuICAgIHRleHRNaW5MZW5ndGg6IFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBzeW1ib2xzLlwiLFxyXG4gICAgbWluUm93Q291bnRFcnJvcjogXCJQbGVhc2UgZmlsbCBhdCBsZWFzdCB7MH0gcm93cy5cIixcclxuICAgIG1pblNlbGVjdEVycm9yOiBcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3QgezB9IHZhcmlhbnRzLlwiLFxyXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiUGxlYXNlIHNlbGVjdCBub3QgbW9yZSB0aGFuIHswfSB2YXJpYW50cy5cIixcclxuICAgIG51bWVyaWNNaW5NYXg6IFwiVGhlICd7MH0nIHNob3VsZCBiZSBlcXVhbCBvciBtb3JlIHRoYW4gezF9IGFuZCBlcXVhbCBvciBsZXNzIHRoYW4gezJ9XCIsXHJcbiAgICBudW1lcmljTWluOiBcIlRoZSAnezB9JyBzaG91bGQgYmUgZXF1YWwgb3IgbW9yZSB0aGFuIHsxfVwiLFxyXG4gICAgbnVtZXJpY01heDogXCJUaGUgJ3swfScgc2hvdWxkIGJlIGVxdWFsIG9yIGxlc3MgdGhhbiB7MX1cIixcclxuICAgIGludmFsaWRFbWFpbDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlLW1haWwuXCIsXHJcbiAgICB1cmxSZXF1ZXN0RXJyb3I6IFwiVGhlIHJlcXVlc3QgcmV0dXJuIGVycm9yICd7MH0nLiB7MX1cIixcclxuICAgIHVybEdldENob2ljZXNFcnJvcjogXCJUaGUgcmVxdWVzdCByZXR1cm5zIGVtcHR5IGRhdGEgb3IgdGhlICdwYXRoJyBwcm9wZXJ0eSBpcyBpbmNvcnJlY3RcIixcclxuICAgIGV4Y2VlZE1heFNpemU6IFwiVGhlIGZpbGUgc2l6ZSBzaG91bGQgbm90IGV4Y2VlZCB7MH0uXCIsXHJcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiUGxlYXNlIGVudGVyIHRoZSBvdGhlcnMgdmFsdWUuXCIsXHJcbiAgICB1cGxvYWRpbmdGaWxlOiBcIllvdXIgZmlsZSBpcyB1cGxvYWRpbmcuIFBsZWFzZSB3YWl0IHNldmVyYWwgc2Vjb25kcyBhbmQgdHJ5IGFnYWluLlwiLFxyXG4gICAgYWRkUm93OiBcIkFkZCBSb3dcIixcclxuICAgIHJlbW92ZVJvdzogXCJSZW1vdmVcIlxyXG59O1xyXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gc3VydmV5U3RyaW5ncztcclxuXHJcbmlmICghU3RyaW5nLnByb3RvdHlwZVtcImZvcm1hdFwiXSkge1xyXG4gICAgU3RyaW5nLnByb3RvdHlwZVtcImZvcm1hdFwiXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC97KFxcZCspfS9nLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3NbbnVtYmVyXSAhPSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgPyBhcmdzW251bWJlcl1cclxuICAgICAgICAgICAgICAgIDogbWF0Y2hcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdXJ2ZXlTdHJpbmdzLnRzXG4gKiovIiwiaW1wb3J0IHtIYXNoVGFibGV9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbk9iamVjdFByb3BlcnR5IHtcclxuICAgIHByaXZhdGUgdHlwZVZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWU6IEFycmF5PGFueT4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaG9pY2VzZnVuYzogKCkgPT4gQXJyYXk8YW55PiA9IG51bGw7XHJcbiAgICBwdWJsaWMgY2xhc3NOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGNsYXNzTmFtZVBhcnQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IGFueSA9IG51bGw7XHJcbiAgICBwdWJsaWMgb25HZXRWYWx1ZTogKG9iajogYW55KSA9PiBhbnkgPSBudWxsO1xyXG4gICAgcHVibGljIG9uU2V0VmFsdWU6IChvYmo6IGFueSwgdmFsdWU6IGFueSwganNvbkNvbnY6IEpzb25PYmplY3QpID0+IGFueVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50eXBlVmFsdWUgPyB0aGlzLnR5cGVWYWx1ZSA6IFwic3RyaW5nXCI7IH1cclxuICAgIHB1YmxpYyBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudHlwZVZhbHVlID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXQgaGFzVG9Vc2VHZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMub25HZXRWYWx1ZTsgfVxyXG4gICAgcHVibGljIGlzRGVmYXVsdFZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZGVmYXVsdFZhbHVlKSA/ICh0aGlzLmRlZmF1bHRWYWx1ZSA9PSB2YWx1ZSkgOiAhKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRWYWx1ZShvYmo6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25HZXRWYWx1ZSkgcmV0dXJuIHRoaXMub25HZXRWYWx1ZShvYmopO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBoYXNUb1VzZVNldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5vblNldFZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0VmFsdWUob2JqOiBhbnksIHZhbHVlOiBhbnksIGpzb25Db252OiBKc29uT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25TZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2V0VmFsdWUob2JqLCB2YWx1ZSwganNvbkNvbnYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRPYmpUeXBlKG9ialR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5jbGFzc05hbWVQYXJ0KSByZXR1cm4gb2JqVHlwZTtcclxuICAgICAgICByZXR1cm4gb2JqVHlwZS5yZXBsYWNlKHRoaXMuY2xhc3NOYW1lUGFydCwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Q2xhc3NOYW1lKGNsYXNzTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY2xhc3NOYW1lUGFydCAmJiBjbGFzc05hbWUuaW5kZXhPZih0aGlzLmNsYXNzTmFtZVBhcnQpIDwgMCkgPyBjbGFzc05hbWUgKyB0aGlzLmNsYXNzTmFtZVBhcnQgOiBjbGFzc05hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGNob2ljZXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlc1ZhbHVlICE9IG51bGwpIHJldHVybiB0aGlzLmNob2ljZXNWYWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5jaG9pY2VzZnVuYyAhPSBudWxsKSByZXR1cm4gdGhpcy5jaG9pY2VzZnVuYygpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENob2ljZXModmFsdWU6IEFycmF5PGFueT4sIHZhbHVlRnVuYzogKCkgPT4gQXJyYXk8YW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlc1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzZnVuYyA9IHZhbHVlRnVuYztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgSnNvbk1ldGFkYXRhQ2xhc3Mge1xyXG4gICAgc3RhdGljIHJlcXVpcmVkU3ltYm9sID0gJyEnO1xyXG4gICAgc3RhdGljIHR5cGVTeW1ib2wgPSAnOic7XHJcbiAgICBwcm9wZXJ0aWVzOiBBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+ID0gbnVsbDtcclxuICAgIHJlcXVpcmVkUHJvcGVydGllczogQXJyYXk8c3RyaW5nPiA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBBcnJheTxhbnk+LCBwdWJsaWMgY3JlYXRvcjogKCkgPT4gYW55ID0gbnVsbCwgcHVibGljIHBhcmVudE5hbWU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBuZXcgQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PigpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuY3JlYXRlUHJvcGVydHkocHJvcGVydGllc1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMucHVzaChwcm9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBmaW5kKG5hbWU6IHN0cmluZyk6IEpzb25PYmplY3RQcm9wZXJ0eSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiB0aGlzLnByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNyZWF0ZVByb3BlcnR5KHByb3BJbmZvOiBhbnkpOiBKc29uT2JqZWN0UHJvcGVydHkge1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSB0eXBlb2YgcHJvcEluZm8gPT09IFwic3RyaW5nXCIgPyBwcm9wSW5mbyA6IHByb3BJbmZvLm5hbWU7XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpIHJldHVybjtcclxuICAgICAgICB2YXIgcHJvcGVydHlUeXBlID0gbnVsbDtcclxuICAgICAgICB2YXIgdHlwZUluZGV4ID0gcHJvcGVydHlOYW1lLmluZGV4T2YoSnNvbk1ldGFkYXRhQ2xhc3MudHlwZVN5bWJvbCk7XHJcbiAgICAgICAgaWYgKHR5cGVJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcodHlwZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZS5zdWJzdHJpbmcoMCwgdHlwZUluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5nZXRQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcclxuICAgICAgICB2YXIgcHJvcCA9IG5ldyBKc29uT2JqZWN0UHJvcGVydHkocHJvcGVydHlOYW1lKTtcclxuICAgICAgICBpZiAocHJvcGVydHlUeXBlKSB7XHJcbiAgICAgICAgICAgIHByb3AudHlwZSA9IHByb3BlcnR5VHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wSW5mbyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAocHJvcEluZm8udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcC50eXBlID0gcHJvcEluZm8udHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcEluZm8uZGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgcHJvcC5kZWZhdWx0VmFsdWUgPSBwcm9wSW5mby5kZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9wSW5mby5pc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VQcm9wZXJ0eVJlcXVpcmVkKHByb3AubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmNob2ljZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaG9pY2VzRnVuYyA9IHR5cGVvZiBwcm9wSW5mby5jaG9pY2VzID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wSW5mby5jaG9pY2VzIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBjaG9pY2VzVmFsdWUgPSB0eXBlb2YgcHJvcEluZm8uY2hvaWNlcyAhPT0gXCJmdW5jdGlvblwiID8gcHJvcEluZm8uY2hvaWNlcyA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBwcm9wLnNldENob2ljZXMoY2hvaWNlc1ZhbHVlLCBjaG9pY2VzRnVuYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLm9uR2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHByb3Aub25HZXRWYWx1ZSA9IHByb3BJbmZvLm9uR2V0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLm9uU2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHByb3Aub25TZXRWYWx1ZSA9IHByb3BJbmZvLm9uU2V0VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcC5jbGFzc05hbWUgPSBwcm9wSW5mby5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmJhc2VDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByb3AuYmFzZUNsYXNzTmFtZSA9IHByb3BJbmZvLmJhc2VDbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmNsYXNzTmFtZVBhcnQpIHtcclxuICAgICAgICAgICAgICAgIHByb3AuY2xhc3NOYW1lUGFydCA9IHByb3BJbmZvLmNsYXNzTmFtZVBhcnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3A7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZS5sZW5ndGggPT0gMCB8fCBwcm9wZXJ0eU5hbWVbMF0gIT0gSnNvbk1ldGFkYXRhQ2xhc3MucmVxdWlyZWRTeW1ib2wpIHJldHVybiBwcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lLnNsaWNlKDEpO1xyXG4gICAgICAgIHRoaXMubWFrZVByb3BlcnR5UmVxdWlyZWQocHJvcGVydHlOYW1lKTtcclxuICAgICAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtYWtlUHJvcGVydHlSZXF1aXJlZChwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5yZXF1aXJlZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1aXJlZFByb3BlcnRpZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlcXVpcmVkUHJvcGVydGllcy5wdXNoKHByb3BlcnR5TmFtZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEpzb25NZXRhZGF0YSB7XHJcbiAgICBwcml2YXRlIGNsYXNzZXM6IEhhc2hUYWJsZTxKc29uTWV0YWRhdGFDbGFzcz4gPSB7fTtcclxuICAgIHByaXZhdGUgY2hpbGRyZW5DbGFzc2VzOiBIYXNoVGFibGU8QXJyYXk8SnNvbk1ldGFkYXRhQ2xhc3M+PiA9IHt9O1xyXG4gICAgcHJpdmF0ZSBjbGFzc1Byb3BlcnRpZXM6IEhhc2hUYWJsZTxBcnJheTxKc29uT2JqZWN0UHJvcGVydHk+PiA9IHt9O1xyXG4gICAgcHJpdmF0ZSBjbGFzc1JlcXVpcmVkUHJvcGVydGllczogSGFzaFRhYmxlPEFycmF5PHN0cmluZz4+ID0ge307XHJcbiAgICBwdWJsaWMgYWRkQ2xhc3MobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBBcnJheTxhbnk+LCBjcmVhdG9yOiAoKSA9PiBhbnkgPSBudWxsLCBwYXJlbnROYW1lOiBzdHJpbmcgPSBudWxsKTogSnNvbk1ldGFkYXRhQ2xhc3Mge1xyXG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gbmV3IEpzb25NZXRhZGF0YUNsYXNzKG5hbWUsIHByb3BlcnRpZXMsIGNyZWF0b3IsIHBhcmVudE5hbWUpO1xyXG4gICAgICAgIHRoaXMuY2xhc3Nlc1tuYW1lXSA9IG1ldGFEYXRhQ2xhc3M7XHJcbiAgICAgICAgaWYgKHBhcmVudE5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbkNsYXNzZXNbcGFyZW50TmFtZV07XHJcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5DbGFzc2VzW3BhcmVudE5hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbkNsYXNzZXNbcGFyZW50TmFtZV0ucHVzaChtZXRhRGF0YUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1ldGFEYXRhQ2xhc3M7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGVDbGFzc0NyZWF0b3JlKG5hbWU6IHN0cmluZywgY3JlYXRvcjogKCkgPT4gYW55KSB7XHJcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhuYW1lKTtcclxuICAgICAgICBpZiAobWV0YURhdGFDbGFzcykge1xyXG4gICAgICAgICAgICBtZXRhRGF0YUNsYXNzLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0aWVzKG5hbWU6IHN0cmluZyk6IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4ge1xyXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5jbGFzc1Byb3BlcnRpZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBuZXcgQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5PigpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxQcm9wZXJ0aWVzKG5hbWUsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzUHJvcGVydGllc1tuYW1lXSA9IHByb3BlcnRpZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNyZWF0ZUNsYXNzKG5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhuYW1lKTtcclxuICAgICAgICBpZiAoIW1ldGFEYXRhQ2xhc3MpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBtZXRhRGF0YUNsYXNzLmNyZWF0b3IoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDaGlsZHJlbkNsYXNzZXMobmFtZTogc3RyaW5nLCBjYW5CZUNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PEpzb25NZXRhZGF0YUNsYXNzPiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsbENoaWxkcmVuQ2xhc3NlcyhuYW1lLCBjYW5CZUNyZWF0ZWQsIHJlc3VsdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRSZXF1aXJlZFByb3BlcnRpZXMobmFtZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmNsYXNzUmVxdWlyZWRQcm9wZXJ0aWVzW25hbWVdO1xyXG4gICAgICAgIGlmICghcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgdGhpcy5maWxsUmVxdWlyZWRQcm9wZXJ0aWVzKG5hbWUsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzUmVxdWlyZWRQcm9wZXJ0aWVzW25hbWVdID0gcHJvcGVydGllcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkUHJvcGVydHkoY2xhc3NOYW1lOiBzdHJpbmcsIHByb3BlcnR5SW5mbzogYW55KSB7XHJcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIGlmICghbWV0YURhdGFDbGFzcykgcmV0dXJuO1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG1ldGFEYXRhQ2xhc3MuY3JlYXRlUHJvcGVydHkocHJvcGVydHlJbmZvKTtcclxuICAgICAgICBpZiAocHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQcm9wZXJ0eVRvQ2xhc3MobWV0YURhdGFDbGFzcywgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB0aGlzLmVtcHR5Q2xhc3NQcm9wZXJ0aWVzSGFzaChtZXRhRGF0YUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlUHJvcGVydHkoY2xhc3NOYW1lOiBzdHJpbmcsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG1ldGFEYXRhQ2xhc3MgPSB0aGlzLmZpbmRDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIGlmICghbWV0YURhdGFDbGFzcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG1ldGFEYXRhQ2xhc3MuZmluZChwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByb3BlcnR5RnJvbUNsYXNzKG1ldGFEYXRhQ2xhc3MsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eUNsYXNzUHJvcGVydGllc0hhc2gobWV0YURhdGFDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRQcm9wZXJ0eVRvQ2xhc3MobWV0YURhdGFDbGFzczogSnNvbk1ldGFkYXRhQ2xhc3MsIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpIHtcclxuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5maW5kKHByb3BlcnR5Lm5hbWUpICE9IG51bGwpIHJldHVybjtcclxuICAgICAgICBtZXRhRGF0YUNsYXNzLnByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlbW92ZVByb3BlcnR5RnJvbUNsYXNzKG1ldGFEYXRhQ2xhc3M6IEpzb25NZXRhZGF0YUNsYXNzLCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gbWV0YURhdGFDbGFzcy5wcm9wZXJ0aWVzLmluZGV4T2YocHJvcGVydHkpO1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICBtZXRhRGF0YUNsYXNzLnByb3BlcnRpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAobWV0YURhdGFDbGFzcy5yZXF1aXJlZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5Lm5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbWV0YURhdGFDbGFzcy5yZXF1aXJlZFByb3BlcnRpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZW1wdHlDbGFzc1Byb3BlcnRpZXNIYXNoKG1ldGFEYXRhQ2xhc3M6IEpzb25NZXRhZGF0YUNsYXNzKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc1Byb3BlcnRpZXNbbWV0YURhdGFDbGFzcy5uYW1lXSA9IG51bGw7XHJcbiAgICAgICAgdmFyIGNoaWxkQ2xhc3NlcyA9IHRoaXMuZ2V0Q2hpbGRyZW5DbGFzc2VzKG1ldGFEYXRhQ2xhc3MubmFtZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZENsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc1Byb3BlcnRpZXNbY2hpbGRDbGFzc2VzW2ldLm5hbWVdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbGxDaGlsZHJlbkNsYXNzZXMobmFtZTogc3RyaW5nLCBjYW5CZUNyZWF0ZWQ6IGJvb2xlYW4sIHJlc3VsdDogQXJyYXk8SnNvbk1ldGFkYXRhQ2xhc3M+KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbkNsYXNzZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFjYW5CZUNyZWF0ZWQgfHwgY2hpbGRyZW5baV0uY3JlYXRvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbENoaWxkcmVuQ2xhc3NlcyhjaGlsZHJlbltpXS5uYW1lLCBjYW5CZUNyZWF0ZWQsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaW5kQ2xhc3MobmFtZTogc3RyaW5nKTogSnNvbk1ldGFkYXRhQ2xhc3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGZpbGxQcm9wZXJ0aWVzKG5hbWU6IHN0cmluZywgbGlzdDogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5Pikge1xyXG4gICAgICAgIHZhciBtZXRhRGF0YUNsYXNzID0gdGhpcy5maW5kQ2xhc3MobmFtZSk7XHJcbiAgICAgICAgaWYgKCFtZXRhRGF0YUNsYXNzKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxQcm9wZXJ0aWVzKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSwgbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YURhdGFDbGFzcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvcGVydHlDb3JlKG1ldGFEYXRhQ2xhc3MucHJvcGVydGllc1tpXSwgbGlzdCwgbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkUHJvcGVydHlDb3JlKHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHksIGxpc3Q6IEFycmF5PEpzb25PYmplY3RQcm9wZXJ0eT4sIGVuZEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuZEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGxpc3RbaV0ubmFtZSA9PSBwcm9wZXJ0eS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChwcm9wZXJ0eSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0W2luZGV4XSA9IHByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZmlsbFJlcXVpcmVkUHJvcGVydGllcyhuYW1lOiBzdHJpbmcsIGxpc3Q6IEFycmF5PHN0cmluZz4pIHtcclxuICAgICAgICB2YXIgbWV0YURhdGFDbGFzcyA9IHRoaXMuZmluZENsYXNzKG5hbWUpO1xyXG4gICAgICAgIGlmICghbWV0YURhdGFDbGFzcykgcmV0dXJuO1xyXG4gICAgICAgIGlmIChtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShsaXN0LCBtZXRhRGF0YUNsYXNzLnJlcXVpcmVkUHJvcGVydGllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRhRGF0YUNsYXNzLnBhcmVudE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxsUmVxdWlyZWRQcm9wZXJ0aWVzKG1ldGFEYXRhQ2xhc3MucGFyZW50TmFtZSwgbGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBKc29uRXJyb3Ige1xyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIGF0OiBOdW1iZXIgPSAtMTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRGdWxsRGVzY3JpcHRpb24oKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZSArICh0aGlzLmRlc2NyaXB0aW9uID8gXCJcXG5cIiArIHRoaXMuZGVzY3JpcHRpb24gOiBcIlwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgSnNvblVua25vd25Qcm9wZXJ0eUVycm9yIGV4dGVuZHMgSnNvbkVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJ1bmtub3ducHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHlOYW1lICsgXCInIGluIGNsYXNzICdcIiArIGNsYXNzTmFtZSArIFwiJyBpcyB1bmtub3duLlwiKTtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBcIlRoZSBsaXN0IG9mIGF2YWlsYWJsZSBwcm9wZXJ0aWVzIGFyZTogXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB0aGlzLmRlc2NyaXB0aW9uICs9IFwiLCBcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gKz0gcHJvcGVydGllc1tpXS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gKz0gJy4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgSnNvbk1pc3NpbmdUeXBlRXJyb3JCYXNlIGV4dGVuZHMgSnNvbkVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBiYXNlQ2xhc3NOYW1lOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcih0eXBlLCBtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJUaGUgZm9sbG93aW5nIHR5cGVzIGFyZSBhdmFpbGFibGU6IFwiO1xyXG4gICAgICAgIHZhciB0eXBlcyA9IEpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKGJhc2VDbGFzc05hbWUsIHRydWUpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPiAwKSB0aGlzLmRlc2NyaXB0aW9uICs9IFwiLCBcIjtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBcIidcIiArIHR5cGVzW2ldLm5hbWUgKyBcIidcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiArPSBcIi5cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgSnNvbk1pc3NpbmdUeXBlRXJyb3IgZXh0ZW5kcyBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYmFzZUNsYXNzTmFtZSwgXCJtaXNzaW5ndHlwZXByb3BlcnR5XCIsIFwiVGhlIHByb3BlcnR5IHR5cGUgaXMgbWlzc2luZyBpbiB0aGUgb2JqZWN0LiBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgcHJvcGVydHk6ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJy5cIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEpzb25JbmNvcnJlY3RUeXBlRXJyb3IgZXh0ZW5kcyBKc29uTWlzc2luZ1R5cGVFcnJvckJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwdWJsaWMgYmFzZUNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoYmFzZUNsYXNzTmFtZSwgXCJpbmNvcnJlY3R0eXBlcHJvcGVydHlcIiwgXCJUaGUgcHJvcGVydHkgdHlwZSBpcyBpbmNvcnJlY3QgaW4gdGhlIG9iamVjdC4gUGxlYXNlIHRha2UgYSBsb29rIGF0IHByb3BlcnR5OiAnXCIgKyBwcm9wZXJ0eU5hbWUgKyBcIicuXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yIGV4dGVuZHMgSnNvbkVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wZXJ0eU5hbWU6IHN0cmluZywgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoXCJyZXF1aXJlZHByb3BlcnR5XCIsIFwiVGhlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5TmFtZSArIFwiJyBpcyByZXF1aXJlZCBpbiBjbGFzcyAnXCIgKyBjbGFzc05hbWUgKyBcIicuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbk9iamVjdCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0eXBlUHJvcGVydHlOYW1lID0gXCJ0eXBlXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb3NpdGlvblByb3BlcnR5TmFtZSA9IFwicG9zXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZXRhRGF0YVZhbHVlID0gbmV3IEpzb25NZXRhZGF0YSgpO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbWV0YURhdGEoKSB7IHJldHVybiBKc29uT2JqZWN0Lm1ldGFEYXRhVmFsdWU7IH1cclxuICAgIHB1YmxpYyBlcnJvcnMgPSBuZXcgQXJyYXk8SnNvbkVycm9yPigpO1xyXG4gICAgcHVibGljIHRvSnNvbk9iamVjdChvYmo6IGFueSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Kc29uT2JqZWN0Q29yZShvYmosIG51bGwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvT2JqZWN0KGpzb25PYmo6IGFueSwgb2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWpzb25PYmopIHJldHVybjtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9iai5nZXRUeXBlKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXMob2JqLmdldFR5cGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcHJvcGVydGllcykgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uT2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gSnNvbk9iamVjdC50eXBlUHJvcGVydHlOYW1lKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PSBKc29uT2JqZWN0LnBvc2l0aW9uUHJvcGVydHlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGpzb25PYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHRoaXMuZmluZFByb3BlcnR5KHByb3BlcnRpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTmV3RXJyb3IobmV3IEpzb25Vbmtub3duUHJvcGVydHlFcnJvcihrZXkudG9TdHJpbmcoKSwgb2JqLmdldFR5cGUoKSksIGpzb25PYmopO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52YWx1ZVRvT2JqKGpzb25PYmpba2V5XSwgb2JqLCBrZXksIHByb3BlcnR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdG9Kc29uT2JqZWN0Q29yZShvYmo6IGFueSwgcHJvcGVydHk6IEpzb25PYmplY3RQcm9wZXJ0eSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFvYmouZ2V0VHlwZSkgcmV0dXJuIG9iajtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9IG51bGwgJiYgKCFwcm9wZXJ0eS5jbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtKc29uT2JqZWN0LnR5cGVQcm9wZXJ0eU5hbWVdID0gcHJvcGVydHkuZ2V0T2JqVHlwZShvYmouZ2V0VHlwZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXMob2JqLmdldFR5cGUoKSk7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVRvSnNvbihvYmosIHJlc3VsdCwgcHJvcGVydGllc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdmFsdWVUb0pzb24ob2JqOiBhbnksIHJlc3VsdDogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbnVsbDtcclxuICAgICAgICBpZiAocHJvcGVydHkuaGFzVG9Vc2VHZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BlcnR5LmdldFZhbHVlKG9iaik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBvYmpbcHJvcGVydHkubmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHZhbHVlKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsdWVBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFyIGFyclZhbHVlID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFyclZhbHVlLnB1c2godGhpcy50b0pzb25PYmplY3RDb3JlKHZhbHVlW2ldLCBwcm9wZXJ0eSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlID0gYXJyVmFsdWUubGVuZ3RoID4gMCA/IGFyclZhbHVlIDogbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMudG9Kc29uT2JqZWN0Q29yZSh2YWx1ZSwgcHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXByb3BlcnR5LmlzRGVmYXVsdFZhbHVlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXN1bHRbcHJvcGVydHkubmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdmFsdWVUb09iaih2YWx1ZTogYW55LCBvYmo6IGFueSwga2V5OiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eSAhPSBudWxsICYmIHByb3BlcnR5Lmhhc1RvVXNlU2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgcHJvcGVydHkuc2V0VmFsdWUob2JqLCB2YWx1ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUFycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlVG9BcnJheSh2YWx1ZSwgb2JqLCBrZXksIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV3T2JqID0gdGhpcy5jcmVhdGVOZXdPYmoodmFsdWUsIHByb3BlcnR5KTtcclxuICAgICAgICBpZiAobmV3T2JqLm5ld09iaikge1xyXG4gICAgICAgICAgICB0aGlzLnRvT2JqZWN0KHZhbHVlLCBuZXdPYmoubmV3T2JqKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBuZXdPYmoubmV3T2JqO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW5ld09iai5lcnJvcikge1xyXG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNWYWx1ZUFycmF5KHZhbHVlOiBhbnkpOiBib29sZWFuIHsgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkuaW5kZXhPZihcIkFycmF5XCIpID4gLTE7IH1cclxuICAgIHByaXZhdGUgY3JlYXRlTmV3T2JqKHZhbHVlOiBhbnksIHByb3BlcnR5OiBKc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IG5ld09iajogbnVsbCwgZXJyb3I6IG51bGwgfTtcclxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gdmFsdWVbSnNvbk9iamVjdC50eXBlUHJvcGVydHlOYW1lXTtcclxuICAgICAgICBpZiAoIWNsYXNzTmFtZSAmJiBwcm9wZXJ0eSAhPSBudWxsICYmIHByb3BlcnR5LmNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wZXJ0eS5jbGFzc05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BlcnR5LmdldENsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHJlc3VsdC5uZXdPYmogPSAoY2xhc3NOYW1lKSA/IEpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoY2xhc3NOYW1lKSA6IG51bGw7XHJcbiAgICAgICAgcmVzdWx0LmVycm9yID0gdGhpcy5jaGVja05ld09iamVjdE9uRXJyb3JzKHJlc3VsdC5uZXdPYmosIHZhbHVlLCBwcm9wZXJ0eSwgY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjaGVja05ld09iamVjdE9uRXJyb3JzKG5ld09iajogYW55LCB2YWx1ZTogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5LCBjbGFzc05hbWU6IHN0cmluZyk6IEpzb25FcnJvciB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcclxuICAgICAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1aXJlZFByb3BlcnRpZXMgPSBKc29uT2JqZWN0Lm1ldGFEYXRhLmdldFJlcXVpcmVkUHJvcGVydGllcyhjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBpZiAocmVxdWlyZWRQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcXVpcmVkUHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWVbcmVxdWlyZWRQcm9wZXJ0aWVzW2ldXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBKc29uUmVxdWlyZWRQcm9wZXJ0eUVycm9yKHJlcXVpcmVkUHJvcGVydGllc1tpXSwgY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHByb3BlcnR5LmJhc2VDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSnNvbk1pc3NpbmdUeXBlRXJyb3IocHJvcGVydHkubmFtZSwgcHJvcGVydHkuYmFzZUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEpzb25JbmNvcnJlY3RUeXBlRXJyb3IocHJvcGVydHkubmFtZSwgcHJvcGVydHkuYmFzZUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3RXJyb3IoZXJyb3IsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGROZXdFcnJvcihlcnJvcjogSnNvbkVycm9yLCBqc29uT2JqOiBhbnkpIHtcclxuICAgICAgICBpZiAoanNvbk9iaiAmJiBqc29uT2JqW0pzb25PYmplY3QucG9zaXRpb25Qcm9wZXJ0eU5hbWVdKSB7XHJcbiAgICAgICAgICAgIGVycm9yLmF0ID0ganNvbk9ialtKc29uT2JqZWN0LnBvc2l0aW9uUHJvcGVydHlOYW1lXS5zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnJvcik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHZhbHVlVG9BcnJheSh2YWx1ZTogQXJyYXk8YW55Piwgb2JqOiBhbnksIGtleTogYW55LCBwcm9wZXJ0eTogSnNvbk9iamVjdFByb3BlcnR5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsdWVBcnJheShvYmpba2V5XSkpIHtcclxuICAgICAgICAgICAgb2JqW2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNyZWF0ZU5ld09iaih2YWx1ZVtpXSwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUubmV3T2JqKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpba2V5XS5wdXNoKG5ld1ZhbHVlLm5ld09iaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvT2JqZWN0KHZhbHVlW2ldLCBuZXdWYWx1ZS5uZXdPYmopO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXldLnB1c2godmFsdWVbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBmaW5kUHJvcGVydHkocHJvcGVydGllczogQXJyYXk8SnNvbk9iamVjdFByb3BlcnR5Piwga2V5OiBhbnkpOiBKc29uT2JqZWN0UHJvcGVydHkge1xyXG4gICAgICAgIGlmICghcHJvcGVydGllcykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0ga2V5KSByZXR1cm4gcHJvcGVydGllc1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qc29ub2JqZWN0LnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlLCBJdGVtVmFsdWUsIFN1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xyXG5pbXBvcnQge0N1c3RvbUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob2ljZXNSZXN0ZnVsbCBleHRlbmRzIEJhc2Uge1xyXG4gICAgcHVibGljIHVybDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHZhbHVlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyB0aXRsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgZ2V0UmVzdWx0Q2FsbGJhY2s6IChpdGVtczogQXJyYXk8SXRlbVZhbHVlPikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBlcnJvcjogU3VydmV5RXJyb3IgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBydW4oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVybCB8fCAhdGhpcy5nZXRSZXN1bHRDYWxsYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgdGhpcy51cmwpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbkxvYWQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYub25FcnJvcih4aHIuc3RhdHVzVGV4dCwgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJjaG9pY2VzQnlVcmxcIjsgfVxyXG4gICAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy51cmwgJiYgIXRoaXMucGF0aCAmJiAhdGhpcy52YWx1ZU5hbWUgJiYgIXRoaXMudGl0bGVOYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldERhdGEoanNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIGlmIChqc29uLnVybCkgdGhpcy51cmwgPSBqc29uLnVybDtcclxuICAgICAgICBpZiAoanNvbi5wYXRoKSB0aGlzLnBhdGggPSBqc29uLnBhdGg7XHJcbiAgICAgICAgaWYgKGpzb24udmFsdWVOYW1lKSB0aGlzLnZhbHVlTmFtZSA9IGpzb24udmFsdWVOYW1lO1xyXG4gICAgICAgIGlmIChqc29uLnRpdGxlTmFtZSkgdGhpcy50aXRsZU5hbWUgPSBqc29uLnRpdGxlTmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnVybCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLnZhbHVlTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50aXRsZU5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZChyZXN1bHQ6IGFueSkge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0UmVzdWx0QWZ0ZXJQYXRoKHJlc3VsdCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHRbXCJsZW5ndGhcIl0pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSByZXN1bHRbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1WYWx1ZSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKGl0ZW1WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmdldFRpdGxlKGl0ZW1WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG5ldyBJdGVtVmFsdWUodmFsdWUsIHRpdGxlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbmV3IEN1c3RvbUVycm9yKHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJ1cmxHZXRDaG9pY2VzRXJyb3JcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFJlc3VsdENhbGxiYWNrKGl0ZW1zKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25FcnJvcihzdGF0dXM6IHN0cmluZywgcmVzcG9uc2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInVybFJlcXVlc3RFcnJvclwiKVtcImZvcm1hdFwiXShzdGF0dXMsIHJlc3BvbnNlKSk7XHJcbiAgICAgICAgdGhpcy5nZXRSZXN1bHRDYWxsYmFjayhbXSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFJlc3VsdEFmdGVyUGF0aChyZXN1bHQ6IGFueSkge1xyXG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIGlmICghdGhpcy5wYXRoKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIHZhciBwYXRoZXMgPSB0aGlzLmdldFBhdGhlcygpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtwYXRoZXNbaV1dO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFBhdGhlcygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICB2YXIgcGF0aGVzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMucGF0aC5pbmRleE9mKCc7JykgPiAtMSkge1xyXG4gICAgICAgICAgICBwYXRoZXMgPSB0aGlzLnBhdGguc3BsaXQoJzsnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXRoZXMgPSB0aGlzLnBhdGguc3BsaXQoJywnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhdGhlcy5sZW5ndGggPT0gMCkgcGF0aGVzLnB1c2godGhpcy5wYXRoKTtcclxuICAgICAgICByZXR1cm4gcGF0aGVzO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlTmFtZSkgcmV0dXJuIGl0ZW1bdGhpcy52YWx1ZU5hbWVdO1xyXG4gICAgICAgIHZhciBsZW4gPSBPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA8IDEpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiBpdGVtW09iamVjdC5rZXlzKGl0ZW0pWzBdXTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0VGl0bGUoaXRlbTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIXRoaXMudGl0bGVOYW1lKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gaXRlbVt0aGlzLnRpdGxlTmFtZV07XHJcbiAgICB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNob2ljZXNCeVVybFwiLCBbXCJ1cmxcIiwgXCJwYXRoXCIsIFwidmFsdWVOYW1lXCIsIFwidGl0bGVOYW1lXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQ2hvaWNlc1Jlc3RmdWxsKCk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Nob2ljZXNSZXN0ZnVsbC50c1xuICoqLyIsImltcG9ydCB7SGFzaFRhYmxlfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQge0NvbmRpdGlvbnNQYXJzZXJ9IGZyb20gJy4vY29uZGl0aW9uc1BhcnNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uIHtcclxuICAgIHN0YXRpYyBvcGVyYXRvcnNWYWx1ZTogSGFzaFRhYmxlPEZ1bmN0aW9uPiA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IG9wZXJhdG9ycygpIHtcclxuICAgICAgICBpZiAoQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlICE9IG51bGwpIHJldHVybiBDb25kaXRpb24ub3BlcmF0b3JzVmFsdWU7XHJcbiAgICAgICAgQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlID0ge1xyXG4gICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiAhbGVmdDsgfSxcclxuICAgICAgICAgICAgbm90ZW1wdHk6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gISghbGVmdCk7IH0sXHJcbiAgICAgICAgICAgIGVxdWFsOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgPT0gcmlnaHQ7IH0sXHJcbiAgICAgICAgICAgIG5vdGVxdWFsOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgIT0gcmlnaHQ7IH0sXHJcbiAgICAgICAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHsgcmV0dXJuIGxlZnQgJiYgbGVmdFtcImluZGV4T2ZcIl0gJiYgbGVmdC5pbmRleE9mKHJpZ2h0KSA+IC0xOyB9LFxyXG4gICAgICAgICAgICBub3Rjb250YWluczogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiAhbGVmdCB8fCAhbGVmdFtcImluZGV4T2ZcIl0gfHwgbGVmdC5pbmRleE9mKHJpZ2h0KSA9PSAtMTsgfSxcclxuICAgICAgICAgICAgZ3JlYXRlcjogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ID4gcmlnaHQ7IH0sXHJcbiAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkgeyByZXR1cm4gbGVmdCA8IHJpZ2h0OyB9LFxyXG4gICAgICAgICAgICBncmVhdGVyb3JlcXVhbDogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0ID49IHJpZ2h0OyB9LFxyXG4gICAgICAgICAgICBsZXNzb3JlcXVhbDogZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7IHJldHVybiBsZWZ0IDw9IHJpZ2h0OyB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gQ29uZGl0aW9uLm9wZXJhdG9yc1ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvcFZhbHVlOiBzdHJpbmcgPSBcImVxdWFsXCI7XHJcbiAgICBwdWJsaWMgbGVmdDogYW55O1xyXG4gICAgcHVibGljIHJpZ2h0OiBhbnk7XHJcbiAgICBwdWJsaWMgZ2V0IG9wZXJhdG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgb3BlcmF0b3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKCFDb25kaXRpb24ub3BlcmF0b3JzW3ZhbHVlXSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMub3BWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHBlcmZvcm0obGVmdDogYW55ID0gbnVsbCwgcmlnaHQ6IGFueSA9IG51bGwpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWxlZnQpIGxlZnQgPSB0aGlzLmxlZnQ7XHJcbiAgICAgICAgaWYgKCFyaWdodCkgcmlnaHQgPSB0aGlzLnJpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4gQ29uZGl0aW9uLm9wZXJhdG9yc1t0aGlzLm9wZXJhdG9yXSh0aGlzLmdldFB1cmVWYWx1ZShsZWZ0KSwgdGhpcy5nZXRQdXJlVmFsdWUocmlnaHQpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0UHVyZVZhbHVlKHZhbDogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIXZhbCB8fCAodHlwZW9mIHZhbCAhPSBcInN0cmluZ1wiKSkgcmV0dXJuIHZhbDtcclxuICAgICAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDAgJiYgKHZhbFswXSA9PSBcIidcIiB8fCB2YWxbMF0gPT0gJ1wiJykpICB2YWwgPSB2YWwuc3Vic3RyKDEpO1xyXG4gICAgICAgIHZhciBsZW4gPSB2YWwubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW4gPiAwICYmICh2YWxbbGVuIC0gMV0gPT0gXCInXCIgfHwgdmFsW2xlbiAtIDFdID09ICdcIicpKSAgdmFsID0gdmFsLnN1YnN0cigwLCBsZW4gLSAxKTtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25Ob2RlIHtcclxuICAgIHByaXZhdGUgY29ubmVjdGl2ZVZhbHVlOiBzdHJpbmcgPSBcImFuZFwiO1xyXG4gICAgcHVibGljIGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHB1YmxpYyBnZXQgY29ubmVjdGl2ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jb25uZWN0aXZlVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgY29ubmVjdGl2ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAodmFsdWUgPT0gXCImXCIgfHwgdmFsdWUgPT0gXCImJlwiKSB2YWx1ZSA9IFwiYW5kXCI7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IFwifFwiIHx8IHZhbHVlID09IFwifHxcIikgdmFsdWUgPSBcIm9yXCI7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IFwiYW5kXCIgJiYgdmFsdWUgIT0gXCJvclwiKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aXZlVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaXNFbXB0eSgpIHsgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09IDA7IH1cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aXZlID0gXCJhbmRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uUnVubmVyIHtcclxuICAgIHByaXZhdGUgZXhwcmVzc2lvblZhbHVlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJvb3Q6IENvbmRpdGlvbk5vZGU7XHJcbiAgICBwcml2YXRlIHZhbHVlczogSGFzaFRhYmxlPGFueT47XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBleHByZXNzaW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmV4cHJlc3Npb25WYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBleHByZXNzaW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uID09IHZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9uVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBuZXcgQ29uZGl0aW9uc1BhcnNlcigpLnBhcnNlKHRoaXMuZXhwcmVzc2lvblZhbHVlLCB0aGlzLnJvb3QpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJ1bih2YWx1ZXM6IEhhc2hUYWJsZTxhbnk+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuTm9kZSh0aGlzLnJvb3QpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBydW5Ob2RlKG5vZGU6IENvbmRpdGlvbk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgb25GaXJzdEZhaWwgPSBub2RlLmNvbm5lY3RpdmUgPT0gXCJhbmRcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMucnVuTm9kZUNvbmRpdGlvbihub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgaWYgKCFyZXMgJiYgb25GaXJzdEZhaWwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiAhb25GaXJzdEZhaWwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb25GaXJzdEZhaWw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJ1bk5vZGVDb25kaXRpb24odmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodmFsdWVbXCJjaGlsZHJlblwiXSkgcmV0dXJuIHRoaXMucnVuTm9kZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlW1wibGVmdFwiXSkgcmV0dXJuIHRoaXMucnVuQ29uZGl0aW9uKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJ1bkNvbmRpdGlvbihjb25kaXRpb246IENvbmRpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gY29uZGl0aW9uLmxlZnQ7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldFZhbHVlTmFtZShsZWZ0KTtcclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoIShuYW1lIGluIHRoaXMudmFsdWVzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy52YWx1ZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByaWdodCA9IGNvbmRpdGlvbi5yaWdodDtcclxuICAgICAgICBuYW1lID0gdGhpcy5nZXRWYWx1ZU5hbWUocmlnaHQpO1xyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICghKG5hbWUgaW4gdGhpcy52YWx1ZXMpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy52YWx1ZXNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25kaXRpb24ucGVyZm9ybShsZWZ0LCByaWdodCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFZhbHVlTmFtZShub2RlVmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICghbm9kZVZhbHVlKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIG5vZGVWYWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChub2RlVmFsdWUubGVuZ3RoIDwgMyB8fCBub2RlVmFsdWVbMF0gIT0gJ3snIHx8IG5vZGVWYWx1ZVtub2RlVmFsdWUubGVuZ3RoIC0gMV0gIT0gJ30nKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gbm9kZVZhbHVlLnN1YnN0cigxLCBub2RlVmFsdWUubGVuZ3RoIC0gMik7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb25kaXRpb25zLnRzXG4gKiovIiwiaW1wb3J0IHtDb25kaXRpb24sIENvbmRpdGlvbk5vZGV9IGZyb20gXCIuL2NvbmRpdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25zUGFyc2VyIHtcclxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByb290OiBDb25kaXRpb25Ob2RlO1xyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uTm9kZXM6IEFycmF5PENvbmRpdGlvbk5vZGU+O1xyXG4gICAgcHJpdmF0ZSBub2RlOiBDb25kaXRpb25Ob2RlO1xyXG4gICAgcHJpdmF0ZSBhdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsZW5ndGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJvb3Q6IENvbmRpdGlvbk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICAgICAgdGhpcy5yb290LmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5hdCA9IDA7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLnRleHQubGVuZ3RoO1xyXG4gICAgICAgIHZhciByZXMgPSB0aGlzLnBhcnNlVGV4dCgpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcocm9vdDogQ29uZGl0aW9uTm9kZSk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVG9TdHJpbmcocm9vdCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHRvU3RyaW5nQ29yZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gXCJcIjtcclxuICAgICAgICBpZiAodmFsdWVbXCJjaGlsZHJlblwiXSkgcmV0dXJuIHRoaXMubm9kZVRvU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWVbXCJsZWZ0XCJdKSByZXR1cm4gdGhpcy5jb25kaXRpb25Ub1N0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG5vZGVUb1N0cmluZyhub2RlOiBDb25kaXRpb25Ob2RlKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAobm9kZS5pc0VtcHR5KSByZXR1cm4gXCJcIjtcclxuICAgICAgICB2YXIgcmVzID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG5vZGVUZXh0ID0gdGhpcy50b1N0cmluZ0NvcmUobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykgcmVzICs9ICcgJyArIG5vZGUuY29ubmVjdGl2ZSArICcgJztcclxuICAgICAgICAgICAgICAgIHJlcyArPSBub2RlVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZSAhPSB0aGlzLnJvb3QgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJlcyA9ICcoJyArIHJlcyArICcpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgY29uZGl0aW9uVG9TdHJpbmcoY29uZGl0aW9uOiBDb25kaXRpb24pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghY29uZGl0aW9uLnJpZ2h0IHx8ICFjb25kaXRpb24ub3BlcmF0b3IpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gY29uZGl0aW9uLmxlZnQ7XHJcbiAgICAgICAgaWYgKGxlZnQgJiYgIXRoaXMuaXNOdW1lcmljKGxlZnQpKSBsZWZ0ID0gXCInXCIgKyBsZWZ0ICsgXCInXCI7XHJcbiAgICAgICAgdmFyIHJlcyA9IGxlZnQgKyAnICcgKyB0aGlzLm9wZXJhdGlvblRvU3RyaW5nKGNvbmRpdGlvbi5vcGVyYXRvcik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOb1JpZ2h0T3BlcmF0aW9uKGNvbmRpdGlvbi5vcGVyYXRvcikpIHJldHVybiByZXM7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gY29uZGl0aW9uLnJpZ2h0O1xyXG4gICAgICAgIGlmIChyaWdodCAmJiAhdGhpcy5pc051bWVyaWMocmlnaHQpKSByaWdodCA9IFwiJ1wiICsgcmlnaHQgKyBcIidcIjtcclxuICAgICAgICByZXR1cm4gcmVzICsgJyAnICsgcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9wZXJhdGlvblRvU3RyaW5nKG9wOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChvcCA9PSBcImVxdWFsXCIpIHJldHVybiBcIj1cIjtcclxuICAgICAgICBpZiAob3AgPT0gXCJub3RlcXVhbFwiKSByZXR1cm4gXCIhPVwiO1xyXG4gICAgICAgIGlmIChvcCA9PSBcImdyZWF0ZXJcIikgcmV0dXJuIFwiPlwiO1xyXG4gICAgICAgIGlmIChvcCA9PSBcImxlc3NcIikgcmV0dXJuIFwiPFwiO1xyXG4gICAgICAgIGlmIChvcCA9PSBcImdyZWF0ZXJvcmVxdWFsXCIpIHJldHVybiBcIj49XCI7XHJcbiAgICAgICAgaWYgKG9wID09IFwibGVzc29yZXF1YWxcIikgcmV0dXJuIFwiPD1cIjtcclxuICAgICAgICByZXR1cm4gb3A7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzTnVtZXJpYyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHZhbCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgIGlmIChpc05hTih2YWwpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGlzRmluaXRlKHZhbCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBhcnNlVGV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSB0aGlzLnJvb3Q7XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9uTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb25Ob2Rlcy5wdXNoKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucmVhZENvbmRpdGlvbnMoKTtcclxuICAgICAgICByZXR1cm4gcmVzICYmIHRoaXMuYXQgPj0gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlYWRDb25kaXRpb25zKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciByZXMgPSB0aGlzLnJlYWRDb25kaXRpb24oKTtcclxuICAgICAgICBpZiAoIXJlcykgcmV0dXJuIHJlcztcclxuICAgICAgICB2YXIgY29ubmVjdGl2ZSA9IHRoaXMucmVhZENvbm5lY3RpdmUoKTtcclxuICAgICAgICBpZiAoY29ubmVjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvbm5lY3RpdmUoY29ubmVjdGl2ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRDb25kaXRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWFkQ29uZGl0aW9uKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5yZWFkRXhwcmVzc2lvbigpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlYWRTdHJpbmcoKTtcclxuICAgICAgICBpZiAoIWxlZnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgb3AgPSB0aGlzLnJlYWRPcGVyYXRvcigpO1xyXG4gICAgICAgIGlmICghb3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgYyA9IG5ldyBDb25kaXRpb24oKTtcclxuICAgICAgICBjLmxlZnQgPSBsZWZ0OyBjLm9wZXJhdG9yID0gb3A7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTm9SaWdodE9wZXJhdGlvbihvcCkpIHtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5yZWFkU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICghcmlnaHQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgYy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZENvbmRpdGlvbihjKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVhZEV4cHJlc3Npb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5za2lwKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXQgPj0gdGhpcy5sZW5ndGggfHwgdGhpcy5jaCAhPSAnKCcpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXQrKztcclxuICAgICAgICB0aGlzLnB1c2hFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMucmVhZENvbmRpdGlvbnMoKTtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpcCgpO1xyXG4gICAgICAgICAgICByZXMgPSB0aGlzLmNoID09ICcpJztcclxuICAgICAgICAgICAgdGhpcy5hdCsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvcEV4cHJlc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0IGNoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRleHQuY2hhckF0KHRoaXMuYXQpOyB9XHJcbiAgICBwcml2YXRlIHNraXAoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXQgPCB0aGlzLmxlbmd0aCAmJiB0aGlzLmlzU3BhY2UodGhpcy5jaCkpIHRoaXMuYXQrKztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNTcGFjZShjOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYyA9PSAnICcgfHwgYyA9PSAnXFxuJyB8fCBjID09ICdcXHQnIHx8IGMgPT0gJ1xccic7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzUXVvdGVzKGM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjID09IFwiJ1wiIHx8IGMgPT0gJ1wiJ1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc09wZXJhdG9yQ2hhcihjOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gYyA9PSAnPicgfHwgYyA9PSAnPCcgfHwgYyA9PSAnPScgfHwgYyA9PSAnISc7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzQnJhY2tldHMoYzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGMgPT0gJygnIHx8IGMgPT0gJyknO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWFkU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5za2lwKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXQgPj0gdGhpcy5sZW5ndGgpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuYXQ7XHJcbiAgICAgICAgdmFyIGhhc1F1b3RlcyA9IHRoaXMuaXNRdW90ZXModGhpcy5jaCk7XHJcbiAgICAgICAgaWYgKGhhc1F1b3RlcykgdGhpcy5hdCsrO1xyXG4gICAgICAgIHZhciBpc0ZpcnN0T3BDaCA9IHRoaXMuaXNPcGVyYXRvckNoYXIodGhpcy5jaCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuYXQgPCB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoIWhhc1F1b3RlcyAmJiB0aGlzLmlzU3BhY2UodGhpcy5jaCkpIGJyZWFrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1F1b3Rlcyh0aGlzLmNoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1F1b3RlcykgdGhpcy5hdCsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXNRdW90ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0T3BDaCAhPSB0aGlzLmlzT3BlcmF0b3JDaGFyKHRoaXMuY2gpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQnJhY2tldHModGhpcy5jaCkpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXQgPD0gc3RhcnQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciByZXMgPSB0aGlzLnRleHQuc3Vic3RyKHN0YXJ0LCB0aGlzLmF0IC0gc3RhcnQpO1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAxICYmIHRoaXMuaXNRdW90ZXMocmVzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IHJlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNRdW90ZXMocmVzW3Jlcy5sZW5ndGggLSAxXSkpIGxlbi0tO1xyXG4gICAgICAgICAgICAgICAgcmVzID0gcmVzLnN1YnN0cigxLCBsZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzTm9SaWdodE9wZXJhdGlvbihvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wID09IFwiZW1wdHlcIiB8fCBvcCA9PSBcIm5vdGVtcHR5XCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlYWRPcGVyYXRvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBvcCA9IHRoaXMucmVhZFN0cmluZygpO1xyXG4gICAgICAgIGlmICghb3ApIHJldHVybiBudWxsO1xyXG4gICAgICAgIG9wID0gb3AudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAob3AgPT0gJz4nKSBvcCA9IFwiZ3JlYXRlclwiO1xyXG4gICAgICAgIGlmIChvcCA9PSAnPCcpIG9wID0gXCJsZXNzXCI7XHJcbiAgICAgICAgaWYgKG9wID09ICc+PScgfHwgb3AgPT0gJz0+Jykgb3AgPSBcImdyZWF0ZXJvcmVxdWFsXCI7XHJcbiAgICAgICAgaWYgKG9wID09ICc8PScgfHwgb3AgPT0gJz08Jykgb3AgPSBcImxlc3NvcmVxdWFsXCI7XHJcbiAgICAgICAgaWYgKG9wID09ICc9JyB8fCBvcCA9PSAnPT0nKSBvcCA9IFwiZXF1YWxcIjtcclxuICAgICAgICBpZiAob3AgPT0gJzw+JyB8fCBvcCA9PSAnIT0nKSBvcCA9IFwibm90ZXF1YWxcIjtcclxuICAgICAgICBpZiAob3AgPT0gJ2NvbnRhaW4nKSBvcCA9IFwiY29udGFpbnNcIjtcclxuICAgICAgICBpZiAob3AgPT0gJ25vdGNvbnRhaW4nKSBvcCA9IFwibm90Y29udGFpbnNcIjtcclxuICAgICAgICByZXR1cm4gb3A7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlYWRDb25uZWN0aXZlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGNvbiA9IHRoaXMucmVhZFN0cmluZygpO1xyXG4gICAgICAgIGlmICghY29uKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb24gPSBjb24udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoY29uID09IFwiJlwiIHx8IGNvbiA9PSBcIiYmXCIpIGNvbiA9IFwiYW5kXCI7XHJcbiAgICAgICAgaWYgKGNvbiA9PSBcInxcIiB8fCBjb24gPT0gXCJ8fFwiKSBjb24gPSBcIm9yXCI7XHJcbiAgICAgICAgaWYgKGNvbiAhPSBcImFuZFwiICYmIGNvbiAhPSBcIm9yXCIpIGNvbiA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIGNvbjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcHVzaEV4cHJlc3Npb24oKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQ29uZGl0aW9uTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbk5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcG9wRXhwcmVzc2lvbigpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZXhwcmVzc2lvbk5vZGVzLnBvcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IHRoaXMuZXhwcmVzc2lvbk5vZGVzW3RoaXMuZXhwcmVzc2lvbk5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBhZGRDb25kaXRpb24oYzogQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLnB1c2goYyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFkZENvbm5lY3RpdmUoY29uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbm5lY3RpdmUgPSBjb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jb25uZWN0aXZlICE9IGNvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9sZENvbiA9IHRoaXMubm9kZS5jb25uZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9sZENoaWxkcmVuID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuY29ubmVjdGl2ZSA9IGNvbjtcclxuICAgICAgICAgICAgICAgIHZhciBvbGROb2RlID0gbmV3IENvbmRpdGlvbk5vZGUoKTtcclxuICAgICAgICAgICAgICAgIG9sZE5vZGUuY29ubmVjdGl2ZSA9IG9sZENvbjtcclxuICAgICAgICAgICAgICAgIG9sZE5vZGUuY2hpbGRyZW4gPSBvbGRDaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5wdXNoKG9sZE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBuZXcgQ29uZGl0aW9uTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuLnB1c2gobmV3Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUgPSBuZXdOb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29uZGl0aW9uc1BhcnNlci50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5pbXBvcnQge0Jhc2UsIEl0ZW1WYWx1ZSwgSVN1cnZleURhdGEsIEhhc2hUYWJsZX0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xyXG5pbXBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fZHJvcGRvd25cIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNoZWNrYm94TW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX2NoZWNrYm94XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25SYWRpb2dyb3VwTW9kZWx9IGZyb20gXCIuL3F1ZXN0aW9uX3JhZGlvZ3JvdXBcIjtcclxuaW1wb3J0IHtRdWVzdGlvblRleHRNb2RlbH0gZnJvbSBcIi4vcXVlc3Rpb25fdGV4dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ29tbWVudE1vZGVsfSBmcm9tIFwiLi9xdWVzdGlvbl9jb21tZW50XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hdHJpeERyb3Bkb3duRGF0YSB7XHJcbiAgICBvblJvd0NoYW5nZWQoY2VsbDogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIG5ld1Jvd1ZhbHVlOiBhbnkpO1xyXG4gICAgY29sdW1uczogQXJyYXk8TWF0cml4RHJvcGRvd25Db2x1bW4+O1xyXG4gICAgY3JlYXRlUXVlc3Rpb24ocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4RHJvcGRvd25Db2x1bW4gZXh0ZW5kcyBCYXNlIHtcclxuICAgIHByaXZhdGUgY2hvaWNlc1ZhbHVlOiBJdGVtVmFsdWVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0aXRsZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgb3B0aW9uc0NhcHRpb246IHN0cmluZztcclxuICAgIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaGFzT3RoZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBtaW5XaWR0aDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBjZWxsVHlwZTogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBwcml2YXRlIGNvbENvdW50VmFsdWU6IG51bWJlciA9IC0xO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKSB7IHJldHVybiBcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIgfVxyXG4gICAgcHVibGljIGdldCB0aXRsZSgpIHsgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMubmFtZTsgfVxyXG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNob2ljZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiB0aGlzLmNob2ljZXNWYWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBjb2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb2xDb3VudFZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPCAtMSB8fCB2YWx1ZSA+IDQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNvbENvdW50VmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY2hvaWNlcyhuZXdWYWx1ZTogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKHRoaXMuY2hvaWNlc1ZhbHVlLCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhEcm9wZG93bkNlbGwge1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblZhbHVlOiBRdWVzdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uLCBwdWJsaWMgcm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSkge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25WYWx1ZSA9IGRhdGEuY3JlYXRlUXVlc3Rpb24odGhpcy5yb3csIHRoaXMuY29sdW1uKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uVmFsdWUuc2V0RGF0YShyb3cpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBxdWVzdGlvbigpOiBRdWVzdGlvbiB7IHJldHVybiB0aGlzLnF1ZXN0aW9uVmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMucXVlc3Rpb24udmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24udmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlIGltcGxlbWVudHMgSVN1cnZleURhdGEge1xyXG4gICAgcHJvdGVjdGVkIGRhdGE6IElNYXRyaXhEcm9wZG93bkRhdGE7XHJcbiAgICBwcml2YXRlIHJvd1ZhbHVlczogSGFzaFRhYmxlPGFueT4gPSB7fTtcclxuICAgIHByaXZhdGUgcm93Q29tbWVudHM6IEhhc2hUYWJsZTxhbnk+ID0ge307XHJcbiAgICBwcml2YXRlIGlzU2V0dGluZ1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGNlbGxzOiBBcnJheTxNYXRyaXhEcm9wZG93bkNlbGw+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuYnVpbGRDZWxscygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCByb3dOYW1lKCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMucm93VmFsdWVzOyB9XHJcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzU2V0dGluZ1ZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJvd1ZhbHVlcyA9IHt9O1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dWYWx1ZXNba2V5XSA9IHZhbHVlW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0ucXVlc3Rpb24ub25TdXJ2ZXlWYWx1ZUNoYW5nZWQodGhpcy5nZXRWYWx1ZSh0aGlzLmNlbGxzW2ldLmNvbHVtbi5uYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTZXR0aW5nVmFsdWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvd1ZhbHVlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NldHRpbmdWYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gXCJcIikgbmV3VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm93VmFsdWVzW25hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm93VmFsdWVzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEub25Sb3dDaGFuZ2VkKHRoaXMsIHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldENvbW1lbnQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dDb21tZW50c1tuYW1lXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDb21tZW50KG5hbWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucm93Q29tbWVudHNbbmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaXNFbXB0eSgpIHtcclxuICAgICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZENlbGxzKCkge1xyXG4gICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5kYXRhLmNvbHVtbnM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSBjb2x1bW5zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmNlbGxzLnB1c2godGhpcy5jcmVhdGVDZWxsKGNvbHVtbikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDZWxsKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBNYXRyaXhEcm9wZG93bkNlbGwge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4RHJvcGRvd25DZWxsKGNvbHVtbiwgdGhpcywgdGhpcy5kYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgZXh0ZW5kcyBRdWVzdGlvbiBpbXBsZW1lbnRzIElNYXRyaXhEcm9wZG93bkRhdGEge1xyXG4gICAgcHJpdmF0ZSBjb2x1bW5zVmFsdWU6IEFycmF5PE1hdHJpeERyb3Bkb3duQ29sdW1uPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWU6IEl0ZW1WYWx1ZVtdID0gW107XHJcbiAgICBwcml2YXRlIG9wdGlvbnNDYXB0aW9uVmFsdWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlZFZpc2libGVSb3dzOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZT47XHJcbiAgICBwcml2YXRlIGNlbGxUeXBlVmFsdWU6IHN0cmluZyA9IFwiZHJvcGRvd25cIjtcclxuICAgIHByaXZhdGUgY29sdW1uQ29sQ291bnRWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2x1bW5NaW5XaWR0aDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBob3Jpem9udGFsU2Nyb2xsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgY29sdW1uc0NoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyB1cGRhdGVDZWxsc0NhbGxiYWs6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJtYXRyaXhkcm9wZG93bmJhc2VcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY29sdW1ucygpOiBBcnJheTxNYXRyaXhEcm9wZG93bkNvbHVtbj4geyByZXR1cm4gdGhpcy5jb2x1bW5zVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgY29sdW1ucyh2YWx1ZTogQXJyYXk8TWF0cml4RHJvcGRvd25Db2x1bW4+KSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbHVtbnNDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBjZWxsVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jZWxsVHlwZVZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNlbGxUeXBlKG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jZWxsVHlwZSA9PSBuZXdWYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2VsbFR5cGVWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudXBkYXRlQ2VsbHNDYWxsYmFrKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY29sdW1uQ29sQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuY29sdW1uQ29sQ291bnRWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBjb2x1bW5Db2xDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmNvbHVtbkNvbENvdW50VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnVwZGF0ZUNlbGxzQ2FsbGJhayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Q29sdW1uVGl0bGUoY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbHVtbi50aXRsZTtcclxuICAgICAgICBpZiAoY29sdW1uLmlzUmVxdWlyZWQgJiYgdGhpcy5zdXJ2ZXkpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVpcmVUZXh0ID0gdGhpcy5zdXJ2ZXkucmVxdWlyZWRUZXh0O1xyXG4gICAgICAgICAgICBpZiAocmVxdWlyZVRleHQpIHJlcXVpcmVUZXh0ICs9IFwiIFwiO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXF1aXJlVGV4dCArIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRDb2x1bW5XaWR0aChjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY29sdW1uLm1pbldpZHRoID8gY29sdW1uLm1pbldpZHRoIDogdGhpcy5jb2x1bW5NaW5XaWR0aDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY2hvaWNlcygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMuY2hvaWNlc1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNob2ljZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLmNob2ljZXNWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBvcHRpb25zQ2FwdGlvbigpIHsgcmV0dXJuICh0aGlzLm9wdGlvbnNDYXB0aW9uVmFsdWUpID8gdGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm9wdGlvbnNDYXB0aW9uXCIpOyB9XHJcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNDYXB0aW9uKG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlID0gbmV3VmFsdWU7IH1cclxuICAgIHB1YmxpYyBhZGRDb2x1bW4obmFtZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gbnVsbCk6IE1hdHJpeERyb3Bkb3duQ29sdW1uIHtcclxuICAgICAgICB2YXIgY29sdW1uID0gbmV3IE1hdHJpeERyb3Bkb3duQ29sdW1uKG5hbWUsIHRpdGxlKTtcclxuICAgICAgICB0aGlzLmNvbHVtbnNWYWx1ZS5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZpc2libGVSb3dzKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlPiB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cyA9IHRoaXMuZ2VuZXJhdGVSb3dzKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3M7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVSb3dzKCk6IEFycmF5PE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlPiB7IHJldHVybiBudWxsOyB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1ZhbHVlKGN1clZhbHVlOiBhbnkpOiBhbnkgeyByZXR1cm4gIWN1clZhbHVlID8ge30gOiBjdXJWYWx1ZTsgfVxyXG4gICAgcHJvdGVjdGVkIGdldFJvd1ZhbHVlKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIHF1ZXN0aW9uVmFsdWU6IGFueSwgY3JlYXRlOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBxdWVzdGlvblZhbHVlW3Jvdy5yb3dOYW1lXSA/IHF1ZXN0aW9uVmFsdWVbcm93LnJvd05hbWVdIDogbnVsbDtcclxuICAgICAgICBpZiAoIXJlc3VsdCAmJiBjcmVhdGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uVmFsdWVbcm93LnJvd05hbWVdID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUm93Q2hhbmdpbmcgfHwgISh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzKSB8fCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgdmFsID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV0udmFsdWUgPSB0aGlzLmdldFJvd1ZhbHVlKHJvdywgdmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgZXJyb3NJbkNvbHVtbnMgPSB0aGlzLmhhc0Vycm9ySW5Db2x1bW5zKGZpcmVDYWxsYmFjayk7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc0Vycm9ycyhmaXJlQ2FsbGJhY2spIHx8IGVycm9zSW5Db2x1bW5zO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYXNFcnJvckluQ29sdW1ucyhmaXJlQ2FsbGJhY2s6IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgcmVzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGNvbEluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2VsbHMgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldLmNlbGxzO1xyXG4gICAgICAgICAgICAgICAgcmVzID0gY2VsbHMgJiYgY2VsbHNbY29sSW5kZXhdICYmIGNlbGxzW2NvbEluZGV4XS5xdWVzdGlvbiAmJiBjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb24uaGFzRXJyb3JzKGZpcmVDYWxsYmFjaykgfHwgcmVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RJbnB1dEVsZW1lbnRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0Rmlyc3RDZWxsUXVlc3Rpb24oZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBxdWVzdGlvbiA/IHF1ZXN0aW9uLmlucHV0SWQgOiBzdXBlci5nZXRGaXJzdElucHV0RWxlbWVudElkKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RFcnJvcklucHV0RWxlbWVudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5nZXRGaXJzdENlbGxRdWVzdGlvbih0cnVlKTtcclxuICAgICAgICByZXR1cm4gcXVlc3Rpb24gPyBxdWVzdGlvbi5pbnB1dElkIDogc3VwZXIuZ2V0Rmlyc3RFcnJvcklucHV0RWxlbWVudElkKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Rmlyc3RDZWxsUXVlc3Rpb24ob25FcnJvcjogYm9vbGVhbik6IFF1ZXN0aW9uIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2VsbHMgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldLmNlbGxzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvbkVycm9yKSByZXR1cm4gY2VsbHNbY29sSW5kZXhdLnF1ZXN0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxzW2NvbEluZGV4XS5xdWVzdGlvbi5jdXJyZW50RXJyb3JDb3VudCA+IDApIHJldHVybiBjZWxsc1tjb2xJbmRleF0ucXVlc3Rpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vSU1hdHJpeERyb3Bkb3duRGF0YVxyXG4gICAgcHVibGljIGNyZWF0ZVF1ZXN0aW9uKHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbiB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5jcmVhdGVRdWVzdGlvbkNvcmUocm93LCBjb2x1bW4pO1xyXG4gICAgICAgIHF1ZXN0aW9uLm5hbWUgPSBjb2x1bW4ubmFtZTtcclxuICAgICAgICBxdWVzdGlvbi5pc1JlcXVpcmVkID0gY29sdW1uLmlzUmVxdWlyZWQ7XHJcbiAgICAgICAgcXVlc3Rpb24uaGFzT3RoZXIgPSBjb2x1bW4uaGFzT3RoZXI7XHJcbiAgICAgICAgaWYgKGNvbHVtbi5oYXNPdGhlcikge1xyXG4gICAgICAgICAgICBpZiAocXVlc3Rpb24gaW5zdGFuY2VvZiBRdWVzdGlvblNlbGVjdEJhc2UpIHtcclxuICAgICAgICAgICAgICAgICg8UXVlc3Rpb25TZWxlY3RCYXNlPnF1ZXN0aW9uKS5zdG9yZU90aGVyc0FzQ29tbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBxdWVzdGlvbjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVRdWVzdGlvbkNvcmUocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uIHtcclxuICAgICAgICB2YXIgY2VsbFR5cGUgPSBjb2x1bW4uY2VsbFR5cGUgPT0gXCJkZWZhdWx0XCIgPyB0aGlzLmNlbGxUeXBlIDogY29sdW1uLmNlbGxUeXBlO1xyXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRRdWVzdGlvbk5hbWUocm93LCBjb2x1bW4pO1xyXG4gICAgICAgIGlmIChjZWxsVHlwZSA9PSBcImNoZWNrYm94XCIpIHJldHVybiB0aGlzLmNyZWF0ZUNoZWNrYm94KG5hbWUsIGNvbHVtbik7XHJcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwicmFkaW9ncm91cFwiKSByZXR1cm4gdGhpcy5jcmVhdGVSYWRpb2dyb3VwKG5hbWUsIGNvbHVtbik7XHJcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwidGV4dFwiKSByZXR1cm4gdGhpcy5jcmVhdGVUZXh0KG5hbWUsIGNvbHVtbik7XHJcbiAgICAgICAgaWYgKGNlbGxUeXBlID09IFwiY29tbWVudFwiKSByZXR1cm4gdGhpcy5jcmVhdGVDb21tZW50KG5hbWUsIGNvbHVtbik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRHJvcGRvd24obmFtZSwgY29sdW1uKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRRdWVzdGlvbk5hbWUocm93OiBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSwgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IHN0cmluZyB7IHJldHVybiByb3cucm93TmFtZSArIFwiX1wiICsgY29sdW1uLm5hbWU7IH1cclxuICAgIHByb3RlY3RlZCBnZXRDb2x1bW5DaG9pY2VzKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gY29sdW1uLmNob2ljZXMgJiYgY29sdW1uLmNob2ljZXMubGVuZ3RoID4gMCA/IGNvbHVtbi5jaG9pY2VzIDogdGhpcy5jaG9pY2VzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldENvbHVtbk9wdGlvbnNDYXB0aW9uKGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjb2x1bW4ub3B0aW9uc0NhcHRpb24gPyBjb2x1bW4ub3B0aW9uc0NhcHRpb24gOiB0aGlzLm9wdGlvbnNDYXB0aW9uO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyb3Bkb3duKG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uRHJvcGRvd25Nb2RlbCB7XHJcbiAgICAgICAgdmFyIHEgPSA8UXVlc3Rpb25Ecm9wZG93bk1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwiZHJvcGRvd25cIiwgbmFtZSk7XHJcbiAgICAgICAgcS5jaG9pY2VzID0gdGhpcy5nZXRDb2x1bW5DaG9pY2VzKGNvbHVtbik7XHJcbiAgICAgICAgcS5vcHRpb25zQ2FwdGlvbiA9IHRoaXMuZ2V0Q29sdW1uT3B0aW9uc0NhcHRpb24oY29sdW1uKTtcclxuICAgICAgICByZXR1cm4gcTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGVja2JveChuYW1lOiBzdHJpbmcsIGNvbHVtbjogTWF0cml4RHJvcGRvd25Db2x1bW4pOiBRdWVzdGlvbkNoZWNrYm94TW9kZWwge1xyXG4gICAgICAgIHZhciBxID0gPFF1ZXN0aW9uQ2hlY2tib3hNb2RlbD50aGlzLmNyZWF0ZUNlbGxRdWVzdGlvbihcImNoZWNrYm94XCIsIG5hbWUpO1xyXG4gICAgICAgIHEuY2hvaWNlcyA9IHRoaXMuZ2V0Q29sdW1uQ2hvaWNlcyhjb2x1bW4pO1xyXG4gICAgICAgIHEuY29sQ291bnQgPSBjb2x1bW4uY29sQ291bnQgPiAtIDEgPyBjb2x1bW4uY29sQ291bnQgOiB0aGlzLmNvbHVtbkNvbENvdW50O1xyXG4gICAgICAgIHJldHVybiBxO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJhZGlvZ3JvdXAobmFtZTogc3RyaW5nLCBjb2x1bW46IE1hdHJpeERyb3Bkb3duQ29sdW1uKTogUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwge1xyXG4gICAgICAgIHZhciBxID0gPFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwicmFkaW9ncm91cFwiLCBuYW1lKTtcclxuICAgICAgICBxLmNob2ljZXMgPSB0aGlzLmdldENvbHVtbkNob2ljZXMoY29sdW1uKTtcclxuICAgICAgICBxLmNvbENvdW50ID0gY29sdW1uLmNvbENvdW50ID4gLSAxID8gY29sdW1uLmNvbENvdW50IDogdGhpcy5jb2x1bW5Db2xDb3VudDtcclxuICAgICAgICByZXR1cm4gcTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVUZXh0KG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uVGV4dE1vZGVsIHtcclxuICAgICAgICByZXR1cm4gPFF1ZXN0aW9uVGV4dE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwidGV4dFwiLCBuYW1lKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDb21tZW50KG5hbWU6IHN0cmluZywgY29sdW1uOiBNYXRyaXhEcm9wZG93bkNvbHVtbik6IFF1ZXN0aW9uQ29tbWVudE1vZGVsIHtcclxuICAgICAgICByZXR1cm4gPFF1ZXN0aW9uQ29tbWVudE1vZGVsPnRoaXMuY3JlYXRlQ2VsbFF1ZXN0aW9uKFwiY29tbWVudFwiLCBuYW1lKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDZWxsUXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFF1ZXN0aW9uIHtcclxuICAgICAgICByZXR1cm4gPFF1ZXN0aW9uPlF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5jcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGUsIG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZVJvd1ZhbHVlKG5ld1ZhbHVlOiBhbnksIHJvdzogTWF0cml4RHJvcGRvd25Sb3dNb2RlbEJhc2UpOiBhbnkge1xyXG4gICAgICAgIGRlbGV0ZSBuZXdWYWx1ZVtyb3cucm93TmFtZV07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld1ZhbHVlKS5sZW5ndGggPT0gMCA/IG51bGwgOiBuZXdWYWx1ZTtcclxuICAgIH1cclxuICAgIG9uUm93Q2hhbmdlZChyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBuZXdSb3dWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB2YXIgcm93VmFsdWUgPSB0aGlzLmdldFJvd1ZhbHVlKHJvdywgbmV3VmFsdWUsIHRydWUpO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiByb3dWYWx1ZSkgZGVsZXRlIHJvd1ZhbHVlW2tleV07XHJcbiAgICAgICAgaWYgKG5ld1Jvd1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5ld1Jvd1ZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXdSb3dWYWx1ZSkpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbmV3Um93VmFsdWUpIHJvd1ZhbHVlW2tleV0gPSBuZXdSb3dWYWx1ZVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocm93VmFsdWUpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5kZWxldGVSb3dWYWx1ZShuZXdWYWx1ZSwgcm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIsIFtcIm5hbWVcIiwgeyBuYW1lOiBcInRpdGxlXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnRpdGxlVmFsdWU7IH0gfSxcclxuICAgICAgICB7IG5hbWU6IFwiY2hvaWNlczppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLmNob2ljZXMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNob2ljZXMgPSB2YWx1ZTsgfX0sXHJcbiAgICAgICAgXCJvcHRpb25zQ2FwdGlvblwiLCB7IG5hbWU6IFwiY2VsbFR5cGVcIiwgZGVmYXVsdDogXCJkZWZhdWx0XCIsIGNob2ljZXM6IFtcImRlZmF1bHRcIiwgXCJkcm9wZG93blwiLCBcImNoZWNrYm94XCIsIFwicmFkaW9ncm91cFwiLCBcInRleHRcIiwgXCJjb21tZW50XCJdIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNvbENvdW50XCIsIGRlZmF1bHQ6IC0xLCBjaG9pY2VzOiBbLTEsIDAsIDEsIDIsIDMsIDRdIH0sIFwiaXNSZXF1aXJlZDpib29sZWFuXCIsIFwiaGFzT3RoZXI6Ym9vbGVhblwiLCBcIm1pbldpZHRoXCJdLFxyXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hdHJpeERyb3Bkb3duQ29sdW1uKFwiXCIpOyB9KTtcclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtYXRyaXhkcm9wZG93bmJhc2VcIiwgW3sgbmFtZTogXCJjb2x1bW5zOm1hdHJpeGRyb3Bkb3duY29sdW1uc1wiLCBjbGFzc05hbWU6IFwibWF0cml4ZHJvcGRvd25jb2x1bW5cIiB9LFxyXG4gICAgICAgIFwiaG9yaXpvbnRhbFNjcm9sbDpib29sZWFuXCIsXHJcbiAgICAgICAgeyBuYW1lOiBcImNob2ljZXM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jaG9pY2VzID0gdmFsdWU7IH19LFxyXG4gICAgICAgIHsgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5vcHRpb25zQ2FwdGlvblZhbHVlOyB9IH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNlbGxUeXBlXCIsIGRlZmF1bHQ6IFwiZHJvcGRvd25cIiwgY2hvaWNlczogW1wiZHJvcGRvd25cIiwgXCJjaGVja2JveFwiLCBcInJhZGlvZ3JvdXBcIiwgXCJ0ZXh0XCIsIFwiY29tbWVudFwiXSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjb2x1bW5Db2xDb3VudFwiLCBkZWZhdWx0OiAwLCBjaG9pY2VzOiBbMCwgMSwgMiwgMywgNF0gfSwgXCJjb2x1bW5NaW5XaWR0aFwiXSxcclxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duTW9kZWxCYXNlKFwiXCIpOyB9LCBcInF1ZXN0aW9uXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZS50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcclxuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gJy4vcXVlc3Rpb25iYXNlJztcclxuaW1wb3J0IHtTdXJ2ZXlFcnJvciwgU3VydmV5RWxlbWVudH0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xyXG5pbXBvcnQge0Fuc3dlclJlcXVpcmVkRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XHJcbmltcG9ydCB7U3VydmV5VmFsaWRhdG9yLCBJVmFsaWRhdG9yT3duZXIsIFZhbGlkYXRvclJ1bm5lcn0gZnJvbSBcIi4vdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7VGV4dFByZVByb2Nlc3Nvcn0gZnJvbSBcIi4vdGV4dFByZVByb2Nlc3NvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgUXVlc3Rpb25CYXNlIGltcGxlbWVudHMgSVZhbGlkYXRvck93bmVyIHtcclxuICAgIHByaXZhdGUgdGl0bGVWYWx1ZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25WYWx1ZTogYW55O1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbkNvbW1lbnQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNSZXF1aXJlZFZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGhhc0NvbW1lbnRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBoYXNPdGhlclZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvbW1lbnRUZXh0VmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHRleHRQcmVQcm9jZXNzb3I6IFRleHRQcmVQcm9jZXNzb3I7XHJcbiAgICBlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPiA9IFtdO1xyXG4gICAgdmFsaWRhdG9yczogQXJyYXk8U3VydmV5VmFsaWRhdG9yPiA9IG5ldyBBcnJheTxTdXJ2ZXlWYWxpZGF0b3I+KCk7XHJcbiAgICB2YWx1ZUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIGNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBlcnJvcnNDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICB0aXRsZUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGhhc1RpdGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgcHVibGljIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHB1YmxpYyBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pZCArIFwiaVwiOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHRpdGxlKCk6IHN0cmluZyB7IHJldHVybiAodGhpcy50aXRsZVZhbHVlKSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMubmFtZTsgfVxyXG4gICAgcHVibGljIHNldCB0aXRsZShuZXdWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZVZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy50aXRsZUNoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHByb2Nlc3NlZFRpdGxlKCkgeyByZXR1cm4gdGhpcy5zdXJ2ZXkgIT0gbnVsbCA/IHRoaXMuc3VydmV5LnByb2Nlc3NUZXh0KHRoaXMudGl0bGUpIDogdGhpcy50aXRsZTsgfVxyXG4gICAgcHVibGljIGdldCBmdWxsVGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgdGhpcy5zdXJ2ZXkucXVlc3Rpb25UaXRsZVRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50ZXh0UHJlUHJvY2Vzc29yKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3IgPSBuZXcgVGV4dFByZVByb2Nlc3NvcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yLm9uSGFzVmFsdWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7IHJldHVybiBzZWxmLmNhblByb2Nlc3NlZFRleHRWYWx1ZXMobmFtZS50b0xvd2VyQ2FzZSgpKTsgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3Nvci5vblByb2Nlc3MgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7IHJldHVybiBzZWxmLmdldFByb2Nlc3NlZFRleHRWYWx1ZShuYW1lKTsgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0UHJlUHJvY2Vzc29yLnByb2Nlc3ModGhpcy5zdXJ2ZXkucXVlc3Rpb25UaXRsZVRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcXVpcmVUZXh0ID0gdGhpcy5yZXF1aXJlZFRleHQ7XHJcbiAgICAgICAgaWYgKHJlcXVpcmVUZXh0KSByZXF1aXJlVGV4dCArPSBcIiBcIjtcclxuICAgICAgICB2YXIgbm8gPSB0aGlzLm5vO1xyXG4gICAgICAgIGlmIChubykgbm8gKz0gXCIuIFwiO1xyXG4gICAgICAgIHJldHVybiBubyArIHJlcXVpcmVUZXh0ICsgdGhpcy5wcm9jZXNzZWRUaXRsZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBmb2N1cyhvbkVycm9yOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBTdXJ2ZXlFbGVtZW50LlNjcm9sbEVsZW1lbnRUb1RvcCh0aGlzLmlkKTtcclxuICAgICAgICB2YXIgaWQgPSAhb25FcnJvciA/IHRoaXMuZ2V0Rmlyc3RJbnB1dEVsZW1lbnRJZCgpIDogdGhpcy5nZXRGaXJzdEVycm9ySW5wdXRFbGVtZW50SWQoKTtcclxuICAgICAgICBpZiAoU3VydmV5RWxlbWVudC5Gb2N1c0VsZW1lbnQoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZm9jdXNDYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldEZpcnN0SW5wdXRFbGVtZW50SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dElkO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldEZpcnN0RXJyb3JJbnB1dEVsZW1lbnRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpcnN0SW5wdXRFbGVtZW50SWQoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjYW5Qcm9jZXNzZWRUZXh0VmFsdWVzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBuYW1lID09IFwibm9cIiB8fCBuYW1lID09IFwidGl0bGVcIiB8fCBuYW1lID09IFwicmVxdWlyZVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldFByb2Nlc3NlZFRleHRWYWx1ZShuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmIChuYW1lID09IFwibm9cIikgcmV0dXJuIHRoaXMubm87XHJcbiAgICAgICAgaWYgKG5hbWUgPT0gXCJ0aXRsZVwiKSByZXR1cm4gdGhpcy5wcm9jZXNzZWRUaXRsZTtcclxuICAgICAgICBpZiAobmFtZSA9PSBcInJlcXVpcmVcIikgcmV0dXJuIHRoaXMucmVxdWlyZWRUZXh0O1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN1cHBvcnRDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHB1YmxpYyBzdXBwb3J0T3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgcHVibGljIGdldCBpc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1JlcXVpcmVkVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgaXNSZXF1aXJlZCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JlcXVpcmVkID09IHZhbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNSZXF1aXJlZFZhbHVlID0gdmFsO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudGl0bGVDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBoYXNDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5oYXNDb21tZW50VmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgaGFzQ29tbWVudCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3VwcG9ydENvbW1lbnQoKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaGFzQ29tbWVudFZhbHVlID0gdmFsO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0NvbW1lbnQpIHRoaXMuaGFzT3RoZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY29tbWVudFRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY29tbWVudFRleHRWYWx1ZSA/IHRoaXMuY29tbWVudFRleHRWYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvdGhlckl0ZW1UZXh0XCIpOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbW1lbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRUZXh0VmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaGFzT3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmhhc090aGVyVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgaGFzT3RoZXIodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN1cHBvcnRPdGhlcigpIHx8IHRoaXMuaGFzT3RoZXIgPT0gdmFsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5oYXNPdGhlclZhbHVlID0gdmFsO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc090aGVyKSB0aGlzLmhhc0NvbW1lbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhhc090aGVyQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGhhc090aGVyQ2hhbmdlZCgpIHsgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBubygpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLnZpc2libGVJbmRleCA8IDApIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHZhciBzdGFydEluZGV4ID0gMTtcclxuICAgICAgICB2YXIgaXNOdW1lcmljID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3RyID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgdGhpcy5zdXJ2ZXkucXVlc3Rpb25TdGFydEluZGV4KSB7XHJcbiAgICAgICAgICAgIHN0ciA9IHRoaXMuc3VydmV5LnF1ZXN0aW9uU3RhcnRJbmRleDtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHN0cikpIHN0YXJ0SW5kZXggPSBwYXJzZUludChzdHIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChzdHIubGVuZ3RoID09IDEpIGlzTnVtZXJpYyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOdW1lcmljKSByZXR1cm4gKHRoaXMudmlzaWJsZUluZGV4ICsgc3RhcnRJbmRleCkudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShzdHIuY2hhckNvZGVBdCgwKSArIHRoaXMudmlzaWJsZUluZGV4KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7XHJcbiAgICAgICAgc3VwZXIub25TZXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5vblN1cnZleVZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUZyb21EYXRhKHRoaXMuZ2V0VmFsdWVDb3JlKCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy52YWx1ZUNoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbW1lbnQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuZ2V0Q29tbWVudCgpOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbW1lbnQobmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnQgPT0gbmV3VmFsdWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNldENvbW1lbnQobmV3VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29tbWVudENoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q29tbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5kYXRhICE9IG51bGwgPyB0aGlzLmRhdGEuZ2V0Q29tbWVudCh0aGlzLm5hbWUpIDogdGhpcy5xdWVzdGlvbkNvbW1lbnQ7IH1cclxuICAgIHByb3RlY3RlZCBzZXRDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldE5ld0NvbW1lbnQobmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnZhbHVlID09IG51bGw7IH1cclxuICAgIHB1YmxpYyBoYXNFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JFcnJvcnMoZmlyZUNhbGxiYWNrKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudEVycm9yQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZXJyb3JzLmxlbmd0aDsgfVxyXG4gICAgcHVibGljIGdldCByZXF1aXJlZFRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc3VydmV5ICE9IG51bGwgJiYgdGhpcy5pc1JlcXVpcmVkID8gdGhpcy5zdXJ2ZXkucmVxdWlyZWRUZXh0IDogXCJcIjsgfVxyXG4gICAgcHVibGljIGFkZEVycm9yKGVycm9yOiBTdXJ2ZXlFcnJvcikge1xyXG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZXJyb3JzQ2hhbmdlZENhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tGb3JFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuKSB7XHJcbiAgICAgICAgdmFyIGVycm9yTGVuZ3RoID0gdGhpcy5lcnJvcnMgPyB0aGlzLmVycm9ycy5sZW5ndGggOiAwO1xyXG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkNoZWNrRm9yRXJyb3JzKHRoaXMuZXJyb3JzKTtcclxuICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID09IDAgJiYgdGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLnJ1blZhbGlkYXRvcnMoKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgdGhpcy5lcnJvcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5zdXJ2ZXkudmFsaWRhdGVRdWVzdGlvbih0aGlzLm5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2goZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaXJlQ2FsbGJhY2sgJiYgKGVycm9yTGVuZ3RoICE9IHRoaXMuZXJyb3JzLmxlbmd0aCB8fCBlcnJvckxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuZXJyb3JzQ2hhbmdlZENhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1JlcXVpcmVkRXJyb3IoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBBbnN3ZXJSZXF1aXJlZEVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBoYXNSZXF1aXJlZEVycm9yKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVxdWlyZWQgJiYgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgcnVuVmFsaWRhdG9ycygpOiBTdXJ2ZXlFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0b3JSdW5uZXIoKS5ydW4odGhpcyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzVmFsdWVDaGFuZ2VkSW5TdXJ2ZXkgPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBzZXROZXdWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZUluRGF0YShuZXdWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlSW5EYXRhKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWx1ZUNoYW5nZWRJblN1cnZleSkge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMudmFsdWVUb0RhdGEobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlQ29yZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZUNvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSAhPSBudWxsID8gdGhpcy5kYXRhLmdldFZhbHVlKHRoaXMubmFtZSkgOiB0aGlzLnF1ZXN0aW9uVmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldFZhbHVlQ29yZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zZXRWYWx1ZSh0aGlzLm5hbWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uVmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdmFsdWVGcm9tRGF0YSh2YWw6IGFueSk6IGFueSB7IHJldHVybiB2YWw7IH1cclxuICAgIHByb3RlY3RlZCB2YWx1ZVRvRGF0YSh2YWw6IGFueSk6IGFueSB7IHJldHVybiB2YWw7IH1cclxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHsgfVxyXG4gICAgcHJvdGVjdGVkIHNldE5ld0NvbW1lbnQobmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0Q29tbWVudCh0aGlzLm5hbWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgdGhpcy5xdWVzdGlvbkNvbW1lbnQgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuICAgIC8vSVF1ZXN0aW9uXHJcbiAgICBvblN1cnZleVZhbHVlQ2hhbmdlZChuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbHVlQ2hhbmdlZEluU3VydmV5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZUZyb21EYXRhKG5ld1ZhbHVlKTtcclxuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuaXNWYWx1ZUNoYW5nZWRJblN1cnZleSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9JVmFsaWRhdG9yT3duZXJcclxuICAgIGdldFZhbGlkYXRvclRpdGxlKCk6IHN0cmluZyB7IHJldHVybiBudWxsOyB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInF1ZXN0aW9uXCIsIFt7IG5hbWU6IFwidGl0bGU6dGV4dFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai50aXRsZVZhbHVlOyB9IH0sXHJcbiAgICB7IG5hbWU6IFwiY29tbWVudFRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmouY29tbWVudFRleHRWYWx1ZTsgfSB9LFxyXG4gICAgXCJpc1JlcXVpcmVkOmJvb2xlYW5cIiwgeyBuYW1lOiBcInZhbGlkYXRvcnM6dmFsaWRhdG9yc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInN1cnZleXZhbGlkYXRvclwiLCBjbGFzc05hbWVQYXJ0OiBcInZhbGlkYXRvclwifV0sIG51bGwsIFwicXVlc3Rpb25iYXNlXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uLnRzXG4gKiovIiwiaW1wb3J0IHtCYXNlLCBJUXVlc3Rpb24sIElDb25kaXRpb25SdW5uZXIsIElTdXJ2ZXlEYXRhLCBJU3VydmV5LCBIYXNoVGFibGV9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSAnLi9qc29ub2JqZWN0JztcclxuaW1wb3J0IHtDb25kaXRpb25SdW5uZXJ9IGZyb20gJy4vY29uZGl0aW9ucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25CYXNlIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElRdWVzdGlvbiwgSUNvbmRpdGlvblJ1bm5lciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBxdWVzdGlvbkNvdW50ZXIgPSAxMDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRRdWVzdGlvbklkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwic3FfXCIgKyBRdWVzdGlvbkJhc2UucXVlc3Rpb25Db3VudGVyKys7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZGF0YTogSVN1cnZleURhdGE7XHJcbiAgICBwcm90ZWN0ZWQgc3VydmV5OiBJU3VydmV5O1xyXG4gICAgcHJpdmF0ZSBjb25kaXRpb25SdW5uZXI6IENvbmRpdGlvblJ1bm5lciA9IG51bGw7XHJcbiAgICBwdWJsaWMgdmlzaWJsZUlmOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBpZFZhbHVlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHZpc2libGVWYWx1ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc3RhcnRXaXRoTmV3TGluZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIHZpc2libGVJbmRleFZhbHVlOiBudW1iZXIgPSAtMTtcclxuICAgIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcmVuZGVyV2lkdGhWYWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcmlnaHRJbmRlbnRWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBpbmRlbnQ6IG51bWJlciA9IDA7XHJcbiAgICBmb2N1c0NhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgcmVuZGVyV2lkdGhDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICByb3dWaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgdmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIHZpc2libGVJbmRleENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlkVmFsdWUgPSBRdWVzdGlvbkJhc2UuZ2V0UXVlc3Rpb25JZCgpO1xyXG4gICAgICAgIHRoaXMub25DcmVhdGluZygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy52aXNpYmxlVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgdmlzaWJsZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsID09IHRoaXMudmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMudmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yb3dWaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKTtcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkucXVlc3Rpb25WaXNpYmlsaXR5Q2hhbmdlZCg8SVF1ZXN0aW9uPnRoaXMsIHRoaXMudmlzaWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB2aXNpYmxlSW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudmlzaWJsZUluZGV4VmFsdWU7IH1cclxuICAgIHB1YmxpYyBoYXNFcnJvcnMoZmlyZUNhbGxiYWNrOiBib29sZWFuID0gdHJ1ZSk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudEVycm9yQ291bnQoKTogbnVtYmVyIHsgcmV0dXJuIDA7IH1cclxuICAgIHB1YmxpYyBnZXQgaGFzVGl0bGUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgcHVibGljIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnQoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pZFZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlbmRlcldpZHRoKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnJlbmRlcldpZHRoVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgcmVuZGVyV2lkdGgodmFsOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsID09IHRoaXMucmVuZGVyV2lkdGgpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJlbmRlcldpZHRoVmFsdWUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHJpZ2h0SW5kZW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnJpZ2h0SW5kZW50VmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgcmlnaHRJbmRlbnQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsID09IHRoaXMucmlnaHRJbmRlbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnJpZ2h0SW5kZW50VmFsdWUgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZm9jdXMob25FcnJvcjogYm9vbGVhbiA9IGZhbHNlKSB7IH1cclxuICAgIHNldERhdGEobmV3VmFsdWU6IElTdXJ2ZXlEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSAobmV3VmFsdWUgJiYgbmV3VmFsdWVbXCJxdWVzdGlvbkFkZGVkXCJdKSA/IDxJU3VydmV5Pm5ld1ZhbHVlIDogbnVsbDtcclxuICAgICAgICB0aGlzLm9uU2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGZpcmVDYWxsYmFjayhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7IH1cclxuICAgIHByb3RlY3RlZCBvbkNyZWF0aW5nKCkgeyB9XHJcbiAgICBwdWJsaWMgcnVuQ29uZGl0aW9uKHZhbHVlczogSGFzaFRhYmxlPGFueT4pIHtcclxuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZUlmKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmRpdGlvblJ1bm5lcikgdGhpcy5jb25kaXRpb25SdW5uZXIgPSBuZXcgQ29uZGl0aW9uUnVubmVyKHRoaXMudmlzaWJsZUlmKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvblJ1bm5lci5leHByZXNzaW9uID0gdGhpcy52aXNpYmxlSWY7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy5jb25kaXRpb25SdW5uZXIucnVuKHZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICAvL0lRdWVzdGlvblxyXG4gICAgb25TdXJ2ZXlWYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xyXG4gICAgfVxyXG4gICAgb25TdXJ2ZXlMb2FkKCkge1xyXG4gICAgfVxyXG4gICAgc2V0VmlzaWJsZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy52aXNpYmxlSW5kZXhWYWx1ZSA9PSB2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUluZGV4VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLnZpc2libGVJbmRleENoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInF1ZXN0aW9uYmFzZVwiLCBbXCIhbmFtZVwiLCB7IG5hbWU6IFwidmlzaWJsZTpib29sZWFuXCIsIGRlZmF1bHQ6IHRydWUgfSwgXCJ2aXNpYmxlSWY6dGV4dFwiLFxyXG4gICAgeyBuYW1lOiBcIndpZHRoXCIgfSwgeyBuYW1lOiBcInN0YXJ0V2l0aE5ld0xpbmU6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlfSwge25hbWU6IFwiaW5kZW50Om51bWJlclwiLCBkZWZhdWx0OiAwLCBjaG9pY2VzOiBbMCwgMSwgMiwgM119XSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25iYXNlLnRzXG4gKiovIiwiZXhwb3J0IGNsYXNzIFRleHRQcmVQcm9jZXNzb3JJdGVtIHtcclxuICAgIHB1YmxpYyBzdGFydDogbnVtYmVyO1xyXG4gICAgcHVibGljIGVuZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dFByZVByb2Nlc3NvciB7XHJcbiAgICBwdWJsaWMgb25Qcm9jZXNzOiAobmFtZTogc3RyaW5nKSA9PiBhbnk7XHJcbiAgICBwdWJsaWMgb25IYXNWYWx1ZTogKG5hbWU6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgICBwdWJsaWMgcHJvY2Vzcyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGV4dCkgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uUHJvY2VzcykgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5nZXRJdGVtcyh0ZXh0KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldE5hbWUodGV4dC5zdWJzdHJpbmcoaXRlbS5zdGFydCArIDEsIGl0ZW0uZW5kKSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5Qcm9jZXNzTmFtZShuYW1lKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uSGFzVmFsdWUgJiYgIXRoaXMub25IYXNWYWx1ZShuYW1lKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMub25Qcm9jZXNzKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgdmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgaXRlbS5zdGFydCkgKyB2YWx1ZSArIHRleHQuc3Vic3RyKGl0ZW0uZW5kICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRJdGVtcyh0ZXh0OiBzdHJpbmcpOiBBcnJheTxUZXh0UHJlUHJvY2Vzc29ySXRlbT4ge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgc3RhcnQgPSAtMTtcclxuICAgICAgICB2YXIgY2ggPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgaWYgKGNoID09ICd7Jykgc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT0gJ30nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRleHRQcmVQcm9jZXNzb3JJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcclxuICAgICAgICByZXR1cm4gbmFtZS50cmltKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhblByb2Nlc3NOYW1lKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghbmFtZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSBuYW1lW2ldO1xyXG4gICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICAgICAgaWYgKGNoID09ICcgJyB8fCBjaCA9PSAnLScgfHwgY2ggPT0gJyYnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGV4dFByZVByb2Nlc3Nvci50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5pbXBvcnQge0l0ZW1WYWx1ZSwgU3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuL3N1cnZleVN0cmluZ3NcIjtcclxuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcclxuaW1wb3J0IHtDaG9pY2VzUmVzdGZ1bGx9IGZyb20gXCIuL2Nob2ljZXNSZXN0ZnVsbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uU2VsZWN0QmFzZSBleHRlbmRzIFF1ZXN0aW9uIHtcclxuICAgIHByaXZhdGUgdmlzaWJsZUNob2ljZXNDYWNoZTogQXJyYXk8SXRlbVZhbHVlPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvbW1lbnRWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGNhY2hlZFZhbHVlOiBhbnk7XHJcbiAgICBvdGhlckl0ZW06IEl0ZW1WYWx1ZSA9IG5ldyBJdGVtVmFsdWUoXCJvdGhlclwiLCBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJJdGVtVGV4dFwiKSk7XHJcbiAgICBwcml2YXRlIGNob2ljZXNGcm9tVXJsOiBBcnJheTxJdGVtVmFsdWU+ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FjaGVkVmFsdWVGb3JVcmxSZXF1ZXN0aW9uOiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaG9pY2VzVmFsdWVzOiBBcnJheTxJdGVtVmFsdWU+ID0gbmV3IEFycmF5PEl0ZW1WYWx1ZT4oKTtcclxuICAgIHB1YmxpYyBjaG9pY2VzQnlVcmw6IENob2ljZXNSZXN0ZnVsbDtcclxuICAgIHB1YmxpYyBvdGhlckVycm9yVGV4dDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdG9yZU90aGVyc0FzQ29tbWVudDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjaG9pY2VzT3JkZXJWYWx1ZTogc3RyaW5nID0gXCJub25lXCI7XHJcbiAgICBjaG9pY2VzQ2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzQnlVcmwgPSB0aGlzLmNyZWF0ZVJlc3RmdWxsKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hvaWNlc0J5VXJsLmdldFJlc3VsdENhbGxiYWNrID0gZnVuY3Rpb24gKGl0ZW1zOiBBcnJheTxJdGVtVmFsdWU+KSB7IHNlbGYub25Mb2FkQ2hvaWNlc0Zyb21VcmwoaXRlbXMpIH07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzT3RoZXJTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpID8gdGhpcy5nZXRIYXNPdGhlcih0aGlzLnZhbHVlKSA6IHRoaXMuZ2V0SGFzT3RoZXIodGhpcy5jYWNoZWRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0SGFzT3RoZXIodmFsOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdmFsID09IHRoaXMub3RoZXJJdGVtLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJlc3RmdWxsKCk6IENob2ljZXNSZXN0ZnVsbCB7IHJldHVybiBuZXcgQ2hvaWNlc1Jlc3RmdWxsKCk7IH1cclxuICAgIHByb3RlY3RlZCBnZXRDb21tZW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSkgcmV0dXJuIHN1cGVyLmdldENvbW1lbnQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzU2V0dGluZ0NvbW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBzZXRDb21tZW50KG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpKVxyXG4gICAgICAgICAgICBzdXBlci5zZXRDb21tZW50KG5ld1ZhbHVlKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2V0dGluZ0NvbW1lbnQgJiYgbmV3VmFsdWUgIT0gdGhpcy5jb21tZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZXR0aW5nQ29tbWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdGhlclNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXROZXdWYWx1ZUluRGF0YSh0aGlzLmNhY2hlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTZXR0aW5nQ29tbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHNldE5ld1ZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUpIHRoaXMuY2FjaGVkVmFsdWVGb3JVcmxSZXF1ZXN0aW9uID0gbmV3VmFsdWU7ICAgICAgICBcclxuICAgICAgICBzdXBlci5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdmFsdWVGcm9tRGF0YSh2YWw6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0U3RvcmVPdGhlcnNBc0NvbW1lbnQoKSkgcmV0dXJuIHN1cGVyLnZhbHVlRnJvbURhdGEodmFsKTtcclxuICAgICAgICB0aGlzLmNhY2hlZFZhbHVlID0gdGhpcy52YWx1ZUZyb21EYXRhQ29yZSh2YWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHZhbHVlVG9EYXRhKHZhbDogYW55KTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5nZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpKSByZXR1cm4gc3VwZXIudmFsdWVUb0RhdGEodmFsKTtcclxuICAgICAgICB0aGlzLmNhY2hlZFZhbHVlID0gdmFsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlVG9EYXRhQ29yZSh2YWwpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHZhbHVlRnJvbURhdGFDb3JlKHZhbDogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzVW5rbm93blZhbHVlKHZhbCkpIHJldHVybiB2YWw7XHJcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLm90aGVySXRlbS52YWx1ZSkgcmV0dXJuIHZhbDtcclxuICAgICAgICB0aGlzLmNvbW1lbnQgPSB2YWw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3RoZXJJdGVtLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHZhbHVlVG9EYXRhQ29yZSh2YWw6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbCA9PSB0aGlzLm90aGVySXRlbS52YWx1ZSAmJiB0aGlzLmdldENvbW1lbnQoKSkge1xyXG4gICAgICAgICAgICB2YWwgPSB0aGlzLmdldENvbW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBoYXNVbmtub3duVmFsdWUodmFsOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuYWN0aXZlQ2hvaWNlcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS52YWx1ZSA9PSB2YWwpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBnZXQgY2hvaWNlcygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMuY2hvaWNlc1ZhbHVlczsgfVxyXG4gICAgc2V0IGNob2ljZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLmNob2ljZXNWYWx1ZXMsIG5ld1ZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uVmlzaWJsZUNob2ljZXNDaGFuZ2VkKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgaGFzT3RoZXJDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hvaWNlc0NoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIGdldCBjaG9pY2VzT3JkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY2hvaWNlc09yZGVyVmFsdWU7IH1cclxuICAgIHNldCBjaG9pY2VzT3JkZXIobmV3VmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSB0aGlzLmNob2ljZXNPcmRlclZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzT3JkZXJWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hvaWNlc0NoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIGdldCBvdGhlclRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3RoZXJJdGVtLnRleHQ7IH1cclxuICAgIHNldCBvdGhlclRleHQodmFsdWU6IHN0cmluZykgeyB0aGlzLm90aGVySXRlbS50ZXh0ID0gdmFsdWU7IH1cclxuICAgIGdldCB2aXNpYmxlQ2hvaWNlcygpOiBBcnJheTxJdGVtVmFsdWU+IHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzT3RoZXIgJiYgdGhpcy5jaG9pY2VzT3JkZXIgPT0gXCJub25lXCIpIHJldHVybiB0aGlzLmFjdGl2ZUNob2ljZXM7XHJcbiAgICAgICAgaWYoIXRoaXMudmlzaWJsZUNob2ljZXNDYWNoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGUgPSB0aGlzLnNvcnRWaXNpYmxlQ2hvaWNlcyh0aGlzLmFjdGl2ZUNob2ljZXMuc2xpY2UoKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc090aGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGUucHVzaCh0aGlzLm90aGVySXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZUNob2ljZXNDYWNoZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0IGFjdGl2ZUNob2ljZXMoKTogQXJyYXk8SXRlbVZhbHVlPiB7IHJldHVybiB0aGlzLmNob2ljZXNGcm9tVXJsID8gdGhpcy5jaG9pY2VzRnJvbVVybCA6IHRoaXMuY2hvaWNlczsgfVxyXG4gICAgcHVibGljIHN1cHBvcnRDb21tZW50KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgcHVibGljIHN1cHBvcnRPdGhlcigpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XHJcbiAgICAgICAgc3VwZXIub25DaGVja0ZvckVycm9ycyhlcnJvcnMpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc090aGVyU2VsZWN0ZWQgfHwgdGhpcy5jb21tZW50KSByZXR1cm47XHJcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLm90aGVyRXJyb3JUZXh0O1xyXG4gICAgICAgIGlmICghdGV4dCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm90aGVyUmVxdWlyZWRFcnJvclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXJyb3JzLnB1c2gobmV3IEN1c3RvbUVycm9yKHRleHQpKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRTdG9yZU90aGVyc0FzQ29tbWVudCgpIHsgcmV0dXJuIHRoaXMuc3RvcmVPdGhlcnNBc0NvbW1lbnQgJiYgKHRoaXMuc3VydmV5ICE9IG51bGwgPyB0aGlzLnN1cnZleS5zdG9yZU90aGVyc0FzQ29tbWVudCA6IHRydWUpOyB9XHJcbiAgICBvblN1cnZleUxvYWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlc0J5VXJsKSB0aGlzLmNob2ljZXNCeVVybC5ydW4oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25Mb2FkQ2hvaWNlc0Zyb21VcmwoYXJyYXk6IEFycmF5PEl0ZW1WYWx1ZT4pIHtcclxuICAgICAgICB2YXIgZXJyb3JDb3VudCA9IHRoaXMuZXJyb3JzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmNob2ljZXNCeVVybCAmJiB0aGlzLmNob2ljZXNCeVVybC5lcnJvcikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHRoaXMuY2hvaWNlc0J5VXJsLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVycm9yQ291bnQgPiAwIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV3Q2hvaWNlcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbmV3Q2hvaWNlcyA9IG5ldyBBcnJheTxJdGVtVmFsdWU+KCk7XHJcbiAgICAgICAgICAgIEl0ZW1WYWx1ZS5zZXREYXRhKG5ld0Nob2ljZXMsIGFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaG9pY2VzRnJvbVVybCA9IG5ld0Nob2ljZXM7XHJcbiAgICAgICAgdGhpcy5vblZpc2libGVDaG9pY2VzQ2hhbmdlZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZFZhbHVlRm9yVXJsUmVxdWVzdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jYWNoZWRWYWx1ZUZvclVybFJlcXVlc3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblZpc2libGVDaG9pY2VzQ2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVDaG9pY2VzQ2FjaGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY2hvaWNlc0NoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNvcnRWaXNpYmxlQ2hvaWNlcyhhcnJheTogQXJyYXk8SXRlbVZhbHVlPik6IEFycmF5PEl0ZW1WYWx1ZT4ge1xyXG4gICAgICAgIHZhciBvcmRlciA9IHRoaXMuY2hvaWNlc09yZGVyLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKG9yZGVyID09IFwiYXNjXCIpIHJldHVybiB0aGlzLnNvcnRBcnJheShhcnJheSwgMSk7XHJcbiAgICAgICAgaWYgKG9yZGVyID09IFwiZGVzY1wiKSByZXR1cm4gdGhpcy5zb3J0QXJyYXkoYXJyYXksIC0xKTtcclxuICAgICAgICBpZiAob3JkZXIgPT0gXCJyYW5kb21cIikgcmV0dXJuIHRoaXMucmFuZG9taXplQXJyYXkoYXJyYXkpO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc29ydEFycmF5KGFycmF5OiBBcnJheTxJdGVtVmFsdWU+LCBtdWx0OiBudW1iZXIpOiBBcnJheTxJdGVtVmFsdWU+IHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBpZiAoYS50ZXh0IDwgYi50ZXh0KSByZXR1cm4gLTEgKiBtdWx0O1xyXG4gICAgICAgICAgICBpZiAoYS50ZXh0ID4gYi50ZXh0KSByZXR1cm4gMSAqIG11bHQ7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByYW5kb21pemVBcnJheShhcnJheTogQXJyYXk8SXRlbVZhbHVlPik6IEFycmF5PEl0ZW1WYWx1ZT4ge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgICAgIGFycmF5W2pdID0gdGVtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25DaGVja2JveEJhc2UgZXh0ZW5kcyBRdWVzdGlvblNlbGVjdEJhc2Uge1xyXG4gICAgcHJpdmF0ZSBjb2xDb3VudFZhbHVlOiBudW1iZXIgPSAxO1xyXG4gICAgY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbENvdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvbENvdW50VmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgY29sQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDAgfHwgdmFsdWUgPiA0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb2xDb3VudFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5jb2xDb3VudENoYW5nZWRDYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNlbGVjdGJhc2VcIiwgW1wiaGFzQ29tbWVudDpib29sZWFuXCIsIFwiaGFzT3RoZXI6Ym9vbGVhblwiLFxyXG4gICAgeyBuYW1lOiBcImNob2ljZXM6aXRlbXZhbHVlc1wiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIEl0ZW1WYWx1ZS5nZXREYXRhKG9iai5jaG9pY2VzKTsgfSwgb25TZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55LCB2YWx1ZTogYW55KSB7IG9iai5jaG9pY2VzID0gdmFsdWU7IH19LFxyXG4gICAgeyBuYW1lOiBcImNob2ljZXNPcmRlclwiLCBkZWZhdWx0OiBcIm5vbmVcIiwgY2hvaWNlczogW1wibm9uZVwiLCBcImFzY1wiLCBcImRlc2NcIiwgXCJyYW5kb21cIl0gfSxcclxuICAgIHsgbmFtZTogXCJjaG9pY2VzQnlVcmw6cmVzdGZ1bGxcIiwgY2xhc3NOYW1lOiBcIkNob2ljZXNSZXN0ZnVsbFwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5jaG9pY2VzQnlVcmwuaXNFbXB0eSA/IG51bGwgOiBvYmouY2hvaWNlc0J5VXJsOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNob2ljZXNCeVVybC5zZXREYXRhKHZhbHVlKTsgfSB9LFxyXG4gICAgeyBuYW1lOiBcIm90aGVyVGV4dFwiLCBkZWZhdWx0OiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3RoZXJJdGVtVGV4dFwiKSB9LCBcIm90aGVyRXJyb3JUZXh0XCIsXHJcbiAgICB7IG5hbWU6IFwic3RvcmVPdGhlcnNBc0NvbW1lbnQ6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlfV0sIG51bGwsIFwicXVlc3Rpb25cIik7XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY2hlY2tib3hiYXNlXCIsIFt7IG5hbWU6IFwiY29sQ291bnQ6bnVtYmVyXCIsIGRlZmF1bHQ6IDEsIGNob2ljZXM6IFswLCAxLCAyLCAzLCA0XSB9XSwgbnVsbCwgXCJzZWxlY3RiYXNlXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2Jhc2VzZWxlY3QudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSAnLi9xdWVzdGlvbmJhc2UnO1xyXG5pbXBvcnQge0hhc2hUYWJsZX0gZnJvbSBcIi4vYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRmFjdG9yeSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBRdWVzdGlvbkZhY3RvcnkgPSBuZXcgUXVlc3Rpb25GYWN0b3J5KCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRDaG9pY2VzID0gW1wib25lXCIsIFwidHdvfHNlY29uZCB2YWx1ZVwiLCBcInRocmVlfHRoaXJkIHZhbHVlXCJdO1xyXG4gICAgcHJpdmF0ZSBjcmVhdG9ySGFzaDogSGFzaFRhYmxlPChuYW1lOiBzdHJpbmcpID0+IFF1ZXN0aW9uQmFzZT4gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJRdWVzdGlvbihxdWVzdGlvblR5cGU6IHN0cmluZywgcXVlc3Rpb25DcmVhdG9yOiAobmFtZTogc3RyaW5nKSA9PiBRdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB0aGlzLmNyZWF0b3JIYXNoW3F1ZXN0aW9uVHlwZV0gPSBxdWVzdGlvbkNyZWF0b3I7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QWxsVHlwZXMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhpcy5jcmVhdG9ySGFzaCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0LnNvcnQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjcmVhdGVRdWVzdGlvbihxdWVzdGlvblR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUXVlc3Rpb25CYXNlIHtcclxuICAgICAgICB2YXIgY3JlYXRvciA9IHRoaXMuY3JlYXRvckhhc2hbcXVlc3Rpb25UeXBlXTtcclxuICAgICAgICBpZiAoY3JlYXRvciA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gY3JlYXRvcihuYW1lKTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uZmFjdG9yeS50c1xuICoqLyIsImltcG9ydCB7UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZSxcclxuICAgIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLFxyXG4gICAgSU1hdHJpeERyb3Bkb3duRGF0YVxyXG59IGZyb20gXCIuL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duYmFzZVwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtJdGVtVmFsdWV9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeERyb3Bkb3duUm93TW9kZWwgZXh0ZW5kcyBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogYW55LCBwdWJsaWMgdGV4dDogc3RyaW5nLCBkYXRhOiBJTWF0cml4RHJvcGRvd25EYXRhLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCByb3dOYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgaW1wbGVtZW50cyBJTWF0cml4RHJvcGRvd25EYXRhIHtcclxuICAgIHByaXZhdGUgcm93c1ZhbHVlOiBJdGVtVmFsdWVbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwibWF0cml4ZHJvcGRvd25cIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcm93cygpOiBBcnJheTxhbnk+IHsgcmV0dXJuIHRoaXMucm93c1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHJvd3MobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLnJvd3NWYWx1ZSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlUm93cygpOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsPiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsPigpO1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dzIHx8IHRoaXMucm93cy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKCF2YWwpIHZhbCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yb3dzW2ldLnZhbHVlKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3codGhpcy5yb3dzW2ldLnZhbHVlLCB0aGlzLnJvd3NbaV0udGV4dCwgdmFsW3RoaXMucm93c1tpXS52YWx1ZV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVNYXRyaXhSb3cobmFtZTogYW55LCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBNYXRyaXhEcm9wZG93blJvd01vZGVsIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeERyb3Bkb3duUm93TW9kZWwobmFtZSwgdGV4dCwgdGhpcywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4ZHJvcGRvd25cIiwgW3sgbmFtZTogXCJyb3dzOml0ZW12YWx1ZXNcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBJdGVtVmFsdWUuZ2V0RGF0YShvYmoucm93cyk7IH0sIG9uU2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSwgdmFsdWU6IGFueSkgeyBvYmoucm93cyA9IHZhbHVlOyB9fV0sXHJcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsKFwiXCIpOyB9LCBcIm1hdHJpeGRyb3Bkb3duYmFzZVwiKTtcclxuXHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4ZHJvcGRvd25cIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBbMSwgMiwgMywgNCwgNV07IHEucm93cyA9IFtcIlJvdyAxXCIsIFwiUm93IDJcIl07IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDFcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDJcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDNcIik7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bi50c1xuICoqLyIsImltcG9ydCB7UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZSxcclxuICAgIE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBJTWF0cml4RHJvcGRvd25EYXRhXHJcbn0gZnJvbSBcIi4vcXVlc3Rpb25fbWF0cml4ZHJvcGRvd25iYXNlXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi9zdXJ2ZXlTdHJpbmdzXCI7XHJcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhEeW5hbWljUm93TW9kZWwgZXh0ZW5kcyBNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaW5kZXg6IG51bWJlciwgZGF0YTogSU1hdHJpeERyb3Bkb3duRGF0YSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcm93TmFtZSgpIHsgcmV0dXJuIFwicm93XCIgKyB0aGlzLmluZGV4OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2UgaW1wbGVtZW50cyBJTWF0cml4RHJvcGRvd25EYXRhIHtcclxuICAgIHN0YXRpYyBNYXhSb3dDb3VudCA9IDEwMDtcclxuICAgIHByaXZhdGUgcm93Q291bnRlciA9IDA7XHJcbiAgICBwcml2YXRlIHJvd0NvdW50VmFsdWU6IG51bWJlciA9IDI7XHJcbiAgICBwcml2YXRlIGFkZFJvd1RleHRWYWx1ZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgcmVtb3ZlUm93VGV4dFZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIG1pblJvd0NvdW50ID0gMDtcclxuICAgIHB1YmxpYyByb3dDb3VudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwibWF0cml4ZHluYW1pY1wiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCByb3dDb3VudCgpIHsgcmV0dXJuIHRoaXMucm93Q291bnRWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCByb3dDb3VudCh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh2YWwgPCAwIHx8IHZhbCA+IFF1ZXN0aW9uTWF0cml4RHluYW1pY01vZGVsLk1heFJvd0NvdW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yb3dDb3VudFZhbHVlID0gdmFsO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gdmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBxVmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgcVZhbC5zcGxpY2UodmFsKTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHFWYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMucm93Q291bnRDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFkZFJvdygpIHtcclxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzLnB1c2godGhpcy5jcmVhdGVNYXRyaXhSb3cobnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvd0NvdW50Kys7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlUm93KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucm93Q291bnQpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cyAmJiBpbmRleCA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IHRoaXMuY3JlYXRlTmV3VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhbC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB2YWwgPSB0aGlzLmRlbGV0ZVJvd1ZhbHVlKHZhbCwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm93Q291bnQtLTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgYWRkUm93VGV4dCgpIHsgcmV0dXJuIHRoaXMuYWRkUm93VGV4dFZhbHVlID8gdGhpcy5hZGRSb3dUZXh0VmFsdWUgOiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiYWRkUm93XCIpOyB9XHJcbiAgICBwdWJsaWMgc2V0IGFkZFJvd1RleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYWRkUm93VGV4dFZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlbW92ZVJvd1RleHQoKSB7IHJldHVybiB0aGlzLnJlbW92ZVJvd1RleHRWYWx1ZSA/IHRoaXMucmVtb3ZlUm93VGV4dFZhbHVlIDogc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlbW92ZVJvd1wiKTsgfVxyXG4gICAgcHVibGljIHNldCByZW1vdmVSb3dUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVJvd1RleHRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBjYWNoZWRWaXNpYmxlUm93cygpOiBBcnJheTxNYXRyaXhEcm9wZG93blJvd01vZGVsQmFzZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzICYmIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoID09IHRoaXMucm93Q291bnQpIHJldHVybiB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpc2libGVSb3dzO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzOiBBcnJheTxTdXJ2ZXlFcnJvcj4pIHtcclxuICAgICAgICBzdXBlci5vbkNoZWNrRm9yRXJyb3JzKGVycm9ycyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3JJblJvd3MoKSkge1xyXG4gICAgICAgICAgICBlcnJvcnMucHVzaChuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm1pblJvd0NvdW50RXJyb3JcIilbXCJmb3JtYXRcIl0odGhpcy5taW5Sb3dDb3VudCkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhc0Vycm9ySW5Sb3dzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1pblJvd0NvdW50IDw9IDAgfHwgIXRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgcmVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHNldFJvd0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKHZhciByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGg7IHJvd0luZGV4KyspIHtcclxuICAgICAgICAgICAgdmFyIHJvdyA9IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3Nbcm93SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIXJvdy5pc0VtcHR5KSBzZXRSb3dDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0Um93Q291bnQgPCB0aGlzLm1pblJvd0NvdW50O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlUm93cygpOiBBcnJheTxNYXRyaXhEeW5hbWljUm93TW9kZWw+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PE1hdHJpeER5bmFtaWNSb3dNb2RlbD4oKTtcclxuICAgICAgICBpZiAodGhpcy5yb3dDb3VudCA9PT0gMCkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB2YXIgdmFsID0gdGhpcy5jcmVhdGVOZXdWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNyZWF0ZU1hdHJpeFJvdyh0aGlzLmdldFJvd1ZhbHVlQnlJbmRleCh2YWwsIGkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KHZhbHVlOiBhbnkpOiBNYXRyaXhEeW5hbWljUm93TW9kZWwge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4RHluYW1pY1Jvd01vZGVsKHRoaXMucm93Q291bnRlciArKywgdGhpcywgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1ZhbHVlKGN1clZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBjdXJWYWx1ZTtcclxuICAgICAgICBpZiAoIXJlc3VsdCkgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IHRoaXMucm93Q291bnQpIHJlc3VsdC5zcGxpY2UodGhpcy5yb3dDb3VudCAtIDEpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSByZXN1bHQubGVuZ3RoOyBpIDwgdGhpcy5yb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBkZWxldGVSb3dWYWx1ZShuZXdWYWx1ZTogYW55LCByb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlKTogYW55IHtcclxuICAgICAgICB2YXIgaXNFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdWYWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3VmFsdWVbaV0pLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0VtcHR5ID8gbnVsbCA6IG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Um93VmFsdWVCeUluZGV4KHF1ZXN0aW9uVmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWVzdGlvblZhbHVlLmxlbmd0aCA/IHF1ZXN0aW9uVmFsdWVbaW5kZXhdIDogbnVsbDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRSb3dWYWx1ZShyb3c6IE1hdHJpeERyb3Bkb3duUm93TW9kZWxCYXNlLCBxdWVzdGlvblZhbHVlOiBhbnksIGNyZWF0ZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRSb3dWYWx1ZUJ5SW5kZXgocXVlc3Rpb25WYWx1ZSwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5pbmRleE9mKHJvdykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4ZHluYW1pY1wiLCBbeyBuYW1lOiBcInJvd0NvdW50Om51bWJlclwiLCBkZWZhdWx0OiAyIH0sIHsgbmFtZTogXCJtaW5Sb3dDb3VudDpudW1iZXJcIiwgZGVmYXVsdDogMCB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJhZGRSb3dUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLmFkZFJvd1RleHRWYWx1ZTsgfSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJyZW1vdmVSb3dUZXh0XCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gb2JqLnJlbW92ZVJvd1RleHRWYWx1ZTsgfSB9XSxcclxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWNNb2RlbChcIlwiKTsgfSwgXCJtYXRyaXhkcm9wZG93bmJhc2VcIik7XHJcblxyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm1hdHJpeGR5bmFtaWNcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFsxLCAyLCAzLCA0LCA1XTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX21hdHJpeGR5bmFtaWMudHNcbiAqKi8iLCJpbXBvcnQge0Jhc2UsIEl0ZW1WYWx1ZX0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtTdXJ2ZXlFcnJvcn0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSAnLi9zdXJ2ZXlTdHJpbmdzJztcclxuaW1wb3J0IHtDdXN0b21FcnJvcn0gZnJvbSBcIi4vZXJyb3JcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTWF0cml4RGF0YSB7XHJcbiAgICBvbk1hdHJpeFJvd0NoYW5nZWQocm93OiBNYXRyaXhSb3dNb2RlbCk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1hdHJpeFJvd01vZGVsIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBwcml2YXRlIGRhdGE6IElNYXRyaXhEYXRhO1xyXG4gICAgcHJvdGVjdGVkIHJvd1ZhbHVlOiBhbnk7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnksIHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBkYXRhOiBJTWF0cml4RGF0YSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnJvd1ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5yb3dWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCB2YWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yb3dWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHRoaXMuZGF0YS5vbk1hdHJpeFJvd0NoYW5nZWQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24gaW1wbGVtZW50cyBJTWF0cml4RGF0YSB7XHJcbiAgICBwcml2YXRlIGNvbHVtbnNWYWx1ZTogSXRlbVZhbHVlW10gPSBbXTtcclxuICAgIHByaXZhdGUgcm93c1ZhbHVlOiBJdGVtVmFsdWVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBpc1Jvd0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRlZFZpc2libGVSb3dzOiBBcnJheTxNYXRyaXhSb3dNb2RlbD47XHJcbiAgICBwdWJsaWMgaXNBbGxSb3dSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJtYXRyaXhcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaGFzUm93cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dzVmFsdWUubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIGdldCBjb2x1bW5zKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5jb2x1bW5zVmFsdWU7IH1cclxuICAgIHNldCBjb2x1bW5zKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5jb2x1bW5zVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIGdldCByb3dzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5yb3dzVmFsdWU7IH1cclxuICAgIHNldCByb3dzKG5ld1ZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgSXRlbVZhbHVlLnNldERhdGEodGhpcy5yb3dzVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZVJvd3MoKTogQXJyYXk8TWF0cml4Um93TW9kZWw+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PE1hdHJpeFJvd01vZGVsPigpO1xyXG4gICAgICAgIHZhciB2YWwgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICghdmFsKSB2YWwgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucm93c1tpXS52YWx1ZSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlTWF0cml4Um93KHRoaXMucm93c1tpXS52YWx1ZSwgdGhpcy5yb3dzW2ldLnRleHQsIHRoaXMubmFtZSArICdfJyArIHRoaXMucm93c1tpXS52YWx1ZS50b1N0cmluZygpLCB2YWxbdGhpcy5yb3dzW2ldLnZhbHVlXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY3JlYXRlTWF0cml4Um93KG51bGwsIFwiXCIsIHRoaXMubmFtZSwgdmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MgPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkNoZWNrRm9yRXJyb3JzKGVycm9yczogQXJyYXk8U3VydmV5RXJyb3I+KSB7XHJcbiAgICAgICAgc3VwZXIub25DaGVja0ZvckVycm9ycyhlcnJvcnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9ySW5Sb3dzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgQ3VzdG9tRXJyb3Ioc3VydmV5TG9jYWxpemF0aW9uLmdldFN0cmluZyhcInJlcXVpcmVkSW5BbGxSb3dzRXJyb3JcIikpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhc0Vycm9ySW5Sb3dzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FsbFJvd1JlcXVpcmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIHJvd3MgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzO1xyXG4gICAgICAgIGlmICghcm93cykgcm93cyA9IHRoaXMudmlzaWJsZVJvd3M7XHJcbiAgICAgICAgaWYgKCFyb3dzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSByb3dzW2ldLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlTWF0cml4Um93KG5hbWU6IGFueSwgdGV4dDogc3RyaW5nLCBmdWxsTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogTWF0cml4Um93TW9kZWwge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4Um93TW9kZWwobmFtZSwgdGV4dCwgZnVsbE5hbWUsIHRoaXMsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Jvd0NoYW5naW5nIHx8ICEodGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cykgfHwgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKCF2YWwpIHZhbCA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLnJvd3MubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZWRWaXNpYmxlUm93c1swXS52YWx1ZSA9IHZhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLmdlbmVyYXRlZFZpc2libGVSb3dzW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJvd1ZhbCA9IHZhbFtyb3cubmFtZV0gPyB2YWxbcm93Lm5hbWVdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkVmlzaWJsZVJvd3NbaV0udmFsdWUgPSByb3dWYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1Jvd0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL0lNYXRyaXhEYXRhXHJcbiAgICBvbk1hdHJpeFJvd0NoYW5nZWQocm93OiBNYXRyaXhSb3dNb2RlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUm93Q2hhbmdpbmcpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzUm93Q2hhbmdpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNSb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUocm93LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIW5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlW3Jvdy5uYW1lXSA9IHJvdy52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNSb3dDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwibWF0cml4XCIsIFt7IG5hbWU6IFwiY29sdW1uczppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLmNvbHVtbnMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLmNvbHVtbnMgPSB2YWx1ZTsgfX0sXHJcbiAgICB7IG5hbWU6IFwicm93czppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLnJvd3MpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLnJvd3MgPSB2YWx1ZTsgfSB9LFxyXG4gICAgXCJpc0FsbFJvd1JlcXVpcmVkOmJvb2xlYW5cIl0sICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXhNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcclxuXHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwibWF0cml4XCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4TW9kZWwobmFtZSk7IHEucm93cyA9IFtcIlJvdyAxXCIsIFwiUm93IDJcIl07IHEuY29sdW1ucyA9IFtcIkNvbHVtbiAxXCIsIFwiQ29sdW1uIDJcIiwgXCJDb2x1bW4gM1wiXTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX21hdHJpeC50c1xuICoqLyIsImltcG9ydCB7QmFzZX0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1N1cnZleVZhbGlkYXRvciwgSVZhbGlkYXRvck93bmVyLCBWYWxpZGF0b3JSdW5uZXJ9IGZyb20gXCIuL3ZhbGlkYXRvclwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xyXG5pbXBvcnQge1N1cnZleUVycm9yfSBmcm9tIFwiLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNdWx0aXBsZVRleHREYXRhIHtcclxuICAgIGdldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZyk6IGFueTtcclxuICAgIHNldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZVRleHRJdGVtTW9kZWwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVZhbGlkYXRvck93bmVyIHtcclxuICAgIHByaXZhdGUgZGF0YTogSU11bHRpcGxlVGV4dERhdGE7XHJcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcclxuICAgIHZhbGlkYXRvcnM6IEFycmF5PFN1cnZleVZhbGlkYXRvcj4gPSBuZXcgQXJyYXk8U3VydmV5VmFsaWRhdG9yPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnkgPSBudWxsLCB0aXRsZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJtdWx0aXBsZXRleHRpdGVtXCI7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGE6IElNdWx0aXBsZVRleHREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKSB7IHJldHVybiB0aGlzLnRpdGxlVmFsdWUgPyB0aGlzLnRpdGxlVmFsdWUgOiB0aGlzLm5hbWU7IH1cclxuICAgIHB1YmxpYyBzZXQgdGl0bGUobmV3VGV4dDogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IG5ld1RleHQ7IH1cclxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YSA/IHRoaXMuZGF0YS5nZXRNdWx0aXBsZVRleHRWYWx1ZSh0aGlzLm5hbWUpIDogbnVsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc2V0TXVsdGlwbGVUZXh0VmFsdWUodGhpcy5uYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xyXG4gICAgfVxyXG4gICAgLy9JVmFsaWRhdG9yT3duZXJcclxuICAgIGdldFZhbGlkYXRvclRpdGxlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnRpdGxlOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24gaW1wbGVtZW50cyBJTXVsdGlwbGVUZXh0RGF0YSB7XHJcbiAgICBwcml2YXRlIGNvbENvdW50VmFsdWU6IG51bWJlciA9IDE7XHJcbiAgICBjb2xDb3VudENoYW5nZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBpdGVtU2l6ZTogbnVtYmVyID0gMjU7XHJcbiAgICBwcml2YXRlIGl0ZW1zVmFsdWVzOiBBcnJheTxNdWx0aXBsZVRleHRJdGVtTW9kZWw+ID0gbmV3IEFycmF5PE11bHRpcGxlVGV4dEl0ZW1Nb2RlbD4oKTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLnNldERhdGEoc2VsZik7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgc2VsZi5maXJlQ2FsbGJhY2soc2VsZi5jb2xDb3VudENoYW5nZWRDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwibXVsdGlwbGV0ZXh0XCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGl0ZW1zKCk6IEFycmF5PE11bHRpcGxlVGV4dEl0ZW1Nb2RlbD4geyByZXR1cm4gdGhpcy5pdGVtc1ZhbHVlczsgfVxyXG4gICAgcHVibGljIHNldCBpdGVtcyh2YWx1ZTogQXJyYXk8TXVsdGlwbGVUZXh0SXRlbU1vZGVsPikge1xyXG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZXMgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZpcmVDYWxsYmFjayh0aGlzLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBBZGRJdGVtKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IG51bGwpOiBNdWx0aXBsZVRleHRJdGVtTW9kZWwge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVUZXh0SXRlbShuYW1lLCB0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBjb2xDb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5jb2xDb3VudFZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNvbENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPCAxIHx8IHZhbHVlID4gNCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY29sQ291bnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZmlyZUNhbGxiYWNrKHRoaXMuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFJvd3MoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgdmFyIGNvbENvdW50ID0gdGhpcy5jb2xDb3VudDtcclxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xyXG4gICAgICAgIHZhciByb3dzID0gW107XHJcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvd3Nbcm93cy5sZW5ndGggLSAxXS5wdXNoKGl0ZW1zW2ldKTtcclxuICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IGNvbENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvd3M7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzTXVsdGlwbGVJdGVtVmFsdWVDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2VkKCk7XHJcbiAgICAgICAgdGhpcy5vbkl0ZW1WYWx1ZUNoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVUZXh0SXRlbShuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpOiBNdWx0aXBsZVRleHRJdGVtTW9kZWwge1xyXG4gICAgICAgIHJldHVybiBuZXcgTXVsdGlwbGVUZXh0SXRlbU1vZGVsKG5hbWUsIHRpdGxlKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkl0ZW1WYWx1ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZUl0ZW1WYWx1ZUNoYW5naW5nKSByZXR1cm47XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAmJiAodGhpcy5pdGVtc1tpXS5uYW1lIGluIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtVmFsdWUgPSB0aGlzLnZhbHVlW3RoaXMuaXRlbXNbaV0ubmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5vblZhbHVlQ2hhbmdlZChpdGVtVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBydW5WYWxpZGF0b3JzKCk6IFN1cnZleUVycm9yIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSBzdXBlci5ydW5WYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgaWYgKGVycm9yICE9IG51bGwpIHJldHVybiBlcnJvcjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZXJyb3IgPSBuZXcgVmFsaWRhdG9yUnVubmVyKCkucnVuKHRoaXMuaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IgIT0gbnVsbCkgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8vSU11bHRpcGxlVGV4dERhdGFcclxuICAgIGdldE11bHRpcGxlVGV4dFZhbHVlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy52YWx1ZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVbbmFtZV07XHJcbiAgICB9XHJcbiAgICBzZXRNdWx0aXBsZVRleHRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzTXVsdGlwbGVJdGVtVmFsdWVDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoIW5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld1ZhbHVlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pc011bHRpcGxlSXRlbVZhbHVlQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcIm11bHRpcGxldGV4dGl0ZW1cIiwgW1wibmFtZVwiLCB7IG5hbWU6IFwidGl0bGVcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoudGl0bGVWYWx1ZTsgfSB9LFxyXG4gICAgeyBuYW1lOiBcInZhbGlkYXRvcnM6dmFsaWRhdG9yc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInN1cnZleXZhbGlkYXRvclwiLCBjbGFzc05hbWVQYXJ0OiBcInZhbGlkYXRvclwiIH1dLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTXVsdGlwbGVUZXh0SXRlbU1vZGVsKFwiXCIpOyB9KTtcclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJtdWx0aXBsZXRleHRcIiwgW3sgbmFtZTogXCIhaXRlbXM6dGV4dGl0ZW1zXCIsIGNsYXNzTmFtZTogXCJtdWx0aXBsZXRleHRpdGVtXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiaXRlbVNpemU6bnVtYmVyXCIsIGRlZmF1bHQ6IDI1IH0sIHsgbmFtZTogXCJjb2xDb3VudDpudW1iZXJcIiwgZGVmYXVsdDogMSwgY2hvaWNlczogWzEsIDIsIDMsIDRdIH1dLFxyXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XHJcblxyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm11bHRpcGxldGV4dFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsKG5hbWUpOyBxLkFkZEl0ZW0oXCJ0ZXh0MVwiKTsgcS5BZGRJdGVtKFwidGV4dDJcIik7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9tdWx0aXBsZXRleHQudHNcbiAqKi8iLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlLCBJUGFnZSwgSUNvbmRpdGlvblJ1bm5lciwgSVN1cnZleSwgSVF1ZXN0aW9uLCBIYXNoVGFibGUsIFN1cnZleUVsZW1lbnQsIFN1cnZleVBhZ2VJZH0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XHJcbmltcG9ydCB7Q29uZGl0aW9uUnVubmVyfSBmcm9tIFwiLi9jb25kaXRpb25zXCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvd01vZGVsIHtcclxuICAgIHByaXZhdGUgdmlzaWJsZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB2aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhZ2U6IFBhZ2VNb2RlbCwgcHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5yb3dWaXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uUm93VmlzaWJpbGl0eUNoYW5nZWQoKTsgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb25CYXNlPiA9IFtdO1xyXG4gICAgcHVibGljIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy52aXNpYmxlVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgdmlzaWJsZSh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsID09IHRoaXMudmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsO1xyXG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZVZpc2libGUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdGhpcy5jYWxjVmlzaWJsZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0V2lkdGgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRRdWVzdGlvbihxOiBRdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKHEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uVmlzaWJsZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJpbGl0eUNoYW5nZWRDYWxsYmFjaykgdGhpcy52aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0V2lkdGgoKSB7XHJcbiAgICAgICAgdmFyIHZpc0NvdW50ID0gdGhpcy5nZXRWaXNpYmxlQ291bnQoKTtcclxuICAgICAgICBpZiAodmlzQ291bnQgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1F1ZXN0aW9uVmlzaWJsZSh0aGlzLnF1ZXN0aW9uc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJlbmRlcldpZHRoID0gdGhpcy5xdWVzdGlvbi53aWR0aCA/IHRoaXMucXVlc3Rpb24ud2lkdGggOiBNYXRoLmZsb29yKDEwMCAvIHZpc0NvdW50KSArICclJztcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zW2ldLnJpZ2h0SW5kZW50ID0gY291bnRlciA8IHZpc0NvdW50IC0gMSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uUm93VmlzaWJpbGl0eUNoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLm9uUm93VmlzaWJpbGl0eUNoYW5nZWQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldFZpc2libGVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciByZXMgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNRdWVzdGlvblZpc2libGUodGhpcy5xdWVzdGlvbnNbaV0pKSByZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNRdWVzdGlvblZpc2libGUocTogUXVlc3Rpb25CYXNlKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhZ2UuaXNRdWVzdGlvblZpc2libGUocSk7IH1cclxuICAgIHByaXZhdGUgY2FsY1Zpc2libGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmdldFZpc2libGVDb3VudCgpID4gMDsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZU1vZGVsIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElQYWdlLCBJQ29uZGl0aW9uUnVubmVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHBhZ2VDb3VudGVyID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGFnZUlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwic3BfXCIgKyBQYWdlTW9kZWwucGFnZUNvdW50ZXIrKztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlkVmFsdWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcm93VmFsdWVzOiBBcnJheTxRdWVzdGlvblJvd01vZGVsPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvbmRpdGlvblJ1bm5lcjogQ29uZGl0aW9uUnVubmVyID0gbnVsbDtcclxuICAgIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb25CYXNlPiA9IG5ldyBBcnJheTxRdWVzdGlvbkJhc2U+KCk7XHJcbiAgICBwdWJsaWMgZGF0YTogSVN1cnZleSA9IG51bGw7XHJcbiAgICBwdWJsaWMgdmlzaWJsZUlmOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyB2aXNpYmxlSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBudW1WYWx1ZTogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIHZpc2libGVWYWx1ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZFZhbHVlID0gUGFnZU1vZGVsLmdldFBhZ2VJZCgpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuc2V0RGF0YShzZWxmLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5pZFZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJvd3MoKTogQXJyYXk8UXVlc3Rpb25Sb3dNb2RlbD4ge1xyXG4gICAgICAgIHRoaXMucm93VmFsdWVzID0gdGhpcy5idWlsZFJvd3MoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3dWYWx1ZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCkgeyByZXR1cm4gKCF0aGlzLmRhdGEpIHx8IHRoaXMuZGF0YS5jdXJyZW50UGFnZSA9PSB0aGlzOyB9XHJcbiAgICBwdWJsaWMgaXNRdWVzdGlvblZpc2libGUocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSk6IGJvb2xlYW4geyByZXR1cm4gcXVlc3Rpb24udmlzaWJsZSB8fCB0aGlzLmlzRGVzaWduTW9kZTsgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJvdyhxdWVzdGlvbjogUXVlc3Rpb25CYXNlKTogUXVlc3Rpb25Sb3dNb2RlbCB7IHJldHVybiBuZXcgUXVlc3Rpb25Sb3dNb2RlbCh0aGlzLCBxdWVzdGlvbik7IH1cclxuICAgIHByaXZhdGUgZ2V0IGlzRGVzaWduTW9kZSgpIHsgcmV0dXJuIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuaXNEZXNpZ25Nb2RlOyB9XHJcbiAgICBwcml2YXRlIGJ1aWxkUm93cygpOiBBcnJheTxRdWVzdGlvblJvd01vZGVsPiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxRdWVzdGlvblJvd01vZGVsPigpO1xyXG4gICAgICAgIHZhciBsYXN0Um93VmlzaWJsZUluZGV4ID0gLTE7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHEgPSB0aGlzLnF1ZXN0aW9uc1tpXTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jcmVhdGVSb3cocSkpO1xyXG4gICAgICAgICAgICBpZiAocS5zdGFydFdpdGhOZXdMaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0Um93VmlzaWJsZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXS5hZGRRdWVzdGlvbihxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChsYXN0Um93VmlzaWJsZUluZGV4IDwgMCkgbGFzdFJvd1Zpc2libGVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbbGFzdFJvd1Zpc2libGVJbmRleF0uYWRkUXVlc3Rpb24ocSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0W2ldLnNldFdpZHRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBvblJvd1Zpc2liaWxpdHlDaGFuZ2VkKHJvdzogUXVlc3Rpb25Sb3dNb2RlbCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCAhdGhpcy5yb3dWYWx1ZXMpIHJldHVybjtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnJvd1ZhbHVlcy5pbmRleE9mKHJvdyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4OyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dWYWx1ZXNbaV0ucXVlc3Rpb25zLmluZGV4T2Yocm93LnF1ZXN0aW9uKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd1ZhbHVlc1tpXS51cGRhdGVWaXNpYmxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkVGl0bGUoKSB7IHJldHVybiB0aGlzLmRhdGEgIT0gbnVsbCA/IHRoaXMuZGF0YS5wcm9jZXNzVGV4dCh0aGlzLnRpdGxlKSA6IHRoaXMudGl0bGU7IH1cclxuICAgIHB1YmxpYyBnZXQgbnVtKCkgeyByZXR1cm4gdGhpcy5udW1WYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBudW0odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm51bVZhbHVlID09IHZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5udW1WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub25OdW1DaGFuZ2VkKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMudmlzaWJsZVZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMudmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wYWdlVmlzaWJpbGl0eUNoYW5nZWQodGhpcywgdGhpcy52aXNpYmxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwYWdlXCI7IH1cclxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4geyAgcmV0dXJuIHRoaXMuZ2V0SXNQYWdlVmlzaWJsZShudWxsKTsgfVxyXG4gICAgcHVibGljIGdldElzUGFnZVZpc2libGUoZXhjZXB0aW9uUXVlc3Rpb246IElRdWVzdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbaV0gPT0gZXhjZXB0aW9uUXVlc3Rpb24pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnNbaV0udmlzaWJsZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUXVlc3Rpb24ocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSwgaW5kZXg6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKHF1ZXN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9ucy5zcGxpY2UoaW5kZXgsIDAsIHF1ZXN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uLnNldERhdGEodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnF1ZXN0aW9uQWRkZWQocXVlc3Rpb24sIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkTmV3UXVlc3Rpb24ocXVlc3Rpb25UeXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFF1ZXN0aW9uQmFzZSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLmNyZWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uVHlwZSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5hZGRRdWVzdGlvbihxdWVzdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9uO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZVF1ZXN0aW9uKHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnF1ZXN0aW9ucy5pbmRleE9mKHF1ZXN0aW9uKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhICE9IG51bGwpIHRoaXMuZGF0YS5xdWVzdGlvblJlbW92ZWQocXVlc3Rpb24pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGZvY3VzRmlyc3RRdWVzdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25zW2ldO1xyXG4gICAgICAgICAgICBpZiAoIXF1ZXN0aW9uLnZpc2libGUgfHwgIXF1ZXN0aW9uLmhhc0lucHV0KSBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnNbaV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGZvY3VzRmlyc3RFcnJvclF1ZXN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uc1tpXS52aXNpYmxlIHx8IHRoaXMucXVlc3Rpb25zW2ldLmN1cnJlbnRFcnJvckNvdW50ID09IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uc1tpXS5mb2N1cyh0cnVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgICAgIFN1cnZleUVsZW1lbnQuU2Nyb2xsRWxlbWVudFRvVG9wKFN1cnZleVBhZ2VJZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGFzRXJyb3JzKGZpcmVDYWxsYmFjazogYm9vbGVhbiA9IHRydWUsIGZvY3VzZU9uRmlyc3RFcnJvcjogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBmaXJzdEVycm9yUXVlc3Rpb24gPSBudWxsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25zW2ldLnZpc2libGUgJiYgdGhpcy5xdWVzdGlvbnNbaV0uaGFzRXJyb3JzKGZpcmVDYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmb2N1c2VPbkZpcnN0RXJyb3IgJiYgZmlyc3RFcnJvclF1ZXN0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdEVycm9yUXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpcnN0RXJyb3JRdWVzdGlvbikgZmlyc3RFcnJvclF1ZXN0aW9uLmZvY3VzKHRydWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkUXVlc3Rpb25zVG9MaXN0KGxpc3Q6IEFycmF5PElRdWVzdGlvbj4sIHZpc2libGVPbmx5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodmlzaWJsZU9ubHkgJiYgIXRoaXMudmlzaWJsZSkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZU9ubHkgJiYgIXRoaXMucXVlc3Rpb25zW2ldLnZpc2libGUpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godGhpcy5xdWVzdGlvbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBydW5Db25kaXRpb24odmFsdWVzOiBIYXNoVGFibGU8YW55Pikge1xyXG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlSWYpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY29uZGl0aW9uUnVubmVyKSB0aGlzLmNvbmRpdGlvblJ1bm5lciA9IG5ldyBDb25kaXRpb25SdW5uZXIodGhpcy52aXNpYmxlSWYpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uUnVubmVyLmV4cHJlc3Npb24gPSB0aGlzLnZpc2libGVJZjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0aGlzLmNvbmRpdGlvblJ1bm5lci5ydW4odmFsdWVzKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbk51bUNoYW5nZWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJwYWdlXCIsIFtcIm5hbWVcIiwgeyBuYW1lOiBcInF1ZXN0aW9uc1wiLCBiYXNlQ2xhc3NOYW1lOiBcInF1ZXN0aW9uXCIgfSwgeyBuYW1lOiBcInZpc2libGU6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sIFwidmlzaWJsZUlmXCIsIFwidGl0bGVcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBQYWdlTW9kZWwoKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnZS50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94TW9kZWwgZXh0ZW5kcyBRdWVzdGlvbkNoZWNrYm94QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0SGFzT3RoZXIodmFsOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXZhbCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB2YWwuaW5kZXhPZih0aGlzLm90aGVySXRlbS52YWx1ZSkgPj0gMDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB2YWx1ZUZyb21EYXRhQ29yZSh2YWw6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpIHJldHVybiB2YWw7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxbaV0gPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUpIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Vua25vd25WYWx1ZSh2YWxbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSB2YWxbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsID0gdmFsLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWxbaV0gPSB0aGlzLm90aGVySXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB2YWx1ZVRvRGF0YUNvcmUodmFsOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICghdmFsIHx8ICF2YWwubGVuZ3RoKSByZXR1cm4gdmFsO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxbaV0gPT0gdGhpcy5vdGhlckl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldENvbW1lbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWwgPSB2YWwuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWxbaV0gPSB0aGlzLmdldENvbW1lbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImNoZWNrYm94XCI7XHJcbiAgICB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImNoZWNrYm94XCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25DaGVja2JveE1vZGVsKFwiXCIpOyB9LCBcImNoZWNrYm94YmFzZVwiKTtcclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJjaGVja2JveFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbkNoZWNrYm94TW9kZWwobmFtZSk7IHEuY2hvaWNlcyA9IFF1ZXN0aW9uRmFjdG9yeS5EZWZhdWx0Q2hvaWNlczsgcmV0dXJuIHE7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2NoZWNrYm94LnRzXG4gKiovIiwiaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcclxuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNvbW1lbnRNb2RlbCBleHRlbmRzIFF1ZXN0aW9uIHtcclxuICAgIHB1YmxpYyByb3dzOiBudW1iZXIgPSA0O1xyXG4gICAgcHVibGljIGNvbHM6IG51bWJlciA9IDUwO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XHJcbiAgICB9XHJcbiAgICBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5pc0VtcHR5KCkgfHwgdGhpcy52YWx1ZSA9PSBcIlwiO1xyXG4gICAgfVxyXG59XHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJjb21tZW50XCIsIFt7IG5hbWU6IFwiY29sczpudW1iZXJcIiwgZGVmYXVsdDogNTAgfSwgeyBuYW1lOiBcInJvd3M6bnVtYmVyXCIsIGRlZmF1bHQ6IDQgfV0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkNvbW1lbnRNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJjb21tZW50XCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25Db21tZW50TW9kZWwobmFtZSk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2NvbW1lbnQudHNcbiAqKi8iLCJpbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uU2VsZWN0QmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRHJvcGRvd25Nb2RlbCBleHRlbmRzIFF1ZXN0aW9uU2VsZWN0QmFzZSB7XHJcbiAgICBwcml2YXRlIG9wdGlvbnNDYXB0aW9uVmFsdWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgb3B0aW9uc0NhcHRpb24oKSB7IHJldHVybiAodGhpcy5vcHRpb25zQ2FwdGlvblZhbHVlKSA/IHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSA6IHN1cnZleUxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJvcHRpb25zQ2FwdGlvblwiKTsgfVxyXG4gICAgcHVibGljIHNldCBvcHRpb25zQ2FwdGlvbihuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMub3B0aW9uc0NhcHRpb25WYWx1ZSA9IG5ld1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImRyb3Bkb3duXCI7XHJcbiAgICB9XHJcbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiZHJvcGRvd25cIiwgW3sgbmFtZTogXCJvcHRpb25zQ2FwdGlvblwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnkpIHsgcmV0dXJuIG9iai5vcHRpb25zQ2FwdGlvblZhbHVlOyB9fV0sXHJcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25Ecm9wZG93bk1vZGVsKFwiXCIpOyB9LCBcInNlbGVjdGJhc2VcIik7XHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiZHJvcGRvd25cIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25Ecm9wZG93bk1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9kcm9wZG93bi50c1xuICoqLyIsImltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7U3VydmV5RXJyb3J9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtDdXN0b21FcnJvciwgRXhjZWVkU2l6ZUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRmlsZU1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBzaG93UHJldmlld1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzVXBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcmV2aWV3VmFsdWVMb2FkZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBpbWFnZUhlaWdodDogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlV2lkdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdG9yZURhdGFBc1RleHQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbWF4U2l6ZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJmaWxlXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNob3dQcmV2aWV3KCkgeyByZXR1cm4gdGhpcy5zaG93UHJldmlld1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHNob3dQcmV2aWV3KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd1ByZXZpZXdWYWx1ZSA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgbG9hZEZpbGUoZmlsZTogRmlsZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgJiYgIXRoaXMuc3VydmV5LnVwbG9hZEZpbGUodGhpcy5uYW1lLCBmaWxlLCB0aGlzLnN0b3JlRGF0YUFzVGV4dCwgZnVuY3Rpb24gKHN0YXR1czogc3RyaW5nKSB7IHNlbGYuaXNVcGxvYWRpbmcgPSBzdGF0dXMgPT0gXCJ1cGxvYWRpbmdcIjsgIH0pKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRGaWxlVmFsdWUoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcHJldmlld1ZhbHVlOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgc2V0RmlsZVZhbHVlKGZpbGU6IEZpbGUpIHtcclxuICAgICAgICBpZiAoIUZpbGVSZWFkZXIpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgJiYgIXRoaXMuc3RvcmVEYXRhQXNUZXh0KSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tGaWxlRm9yRXJyb3JzKGZpbGUpKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNob3dQcmV2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnByZXZpZXdWYWx1ZSA9IHNlbGYuaXNGaWxlSW1hZ2UoZmlsZSkgPyBmaWxlUmVhZGVyLnJlc3VsdCA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpcmVDYWxsYmFjayhzZWxmLnByZXZpZXdWYWx1ZUxvYWRlZENhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5zdG9yZURhdGFBc1RleHQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUgPSBmaWxlUmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25DaGVja0ZvckVycm9ycyhlcnJvcnM6IEFycmF5PFN1cnZleUVycm9yPikge1xyXG4gICAgICAgIHN1cGVyLm9uQ2hlY2tGb3JFcnJvcnMoZXJyb3JzKTtcclxuICAgICAgICBpZiAodGhpcy5pc1VwbG9hZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBDdXN0b21FcnJvcihzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwidXBsb2FkaW5nRmlsZVwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tGaWxlRm9yRXJyb3JzKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgZXJyb3JMZW5ndGggPSB0aGlzLmVycm9ycyA/IHRoaXMuZXJyb3JzLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5tYXhTaXplID4gMCAmJiBmaWxlLnNpemUgPiB0aGlzLm1heFNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaChuZXcgRXhjZWVkU2l6ZUVycm9yKHRoaXMubWF4U2l6ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyb3JMZW5ndGggIT0gdGhpcy5lcnJvcnMubGVuZ3RoIHx8IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5lcnJvcnNDaGFuZ2VkQ2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNGaWxlSW1hZ2UoZmlsZTogRmlsZSkge1xyXG4gICAgICAgIGlmICghZmlsZSB8fCAhZmlsZS50eXBlKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHN0ciA9IGZpbGUudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihcImltYWdlXCIpID09IDA7XHJcbiAgICB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImZpbGVcIiwgW1wic2hvd1ByZXZpZXc6Ym9vbGVhblwiLCBcImltYWdlSGVpZ2h0XCIsIFwiaW1hZ2VXaWR0aFwiLCBcInN0b3JlRGF0YUFzVGV4dDpib29sZWFuXCIsIFwibWF4U2l6ZTpudW1iZXJcIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkZpbGVNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJmaWxlXCIsIChuYW1lKSA9PiB7IHJldHVybiBuZXcgUXVlc3Rpb25GaWxlTW9kZWwobmFtZSk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX2ZpbGUudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25IdG1sTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbkJhc2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sVmFsdWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiaHRtbFwiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBodG1sKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmh0bWxWYWx1ZTsgfVxyXG4gICAgcHVibGljIHNldCBodG1sKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmh0bWxWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBwcm9jZXNzZWRIdG1sKCkgeyByZXR1cm4gdGhpcy5zdXJ2ZXkgPyB0aGlzLnN1cnZleS5wcm9jZXNzSHRtbCh0aGlzLmh0bWwpIDogdGhpcy5odG1sOyB9XHJcbn1cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcImh0bWxcIiwgW1wiaHRtbDpodG1sXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25IdG1sTW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25iYXNlXCIpO1xyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImh0bWxcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvbkh0bWxNb2RlbChuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25faHRtbC50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2V9IGZyb20gXCIuL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhZGlvZ3JvdXBNb2RlbCBleHRlbmRzIFF1ZXN0aW9uQ2hlY2tib3hCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmFkaW9ncm91cFwiO1xyXG4gICAgfVxyXG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XHJcbn1cclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJyYWRpb2dyb3VwXCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwoXCJcIik7IH0sIFwiY2hlY2tib3hiYXNlXCIpO1xyXG5cclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJyYWRpb2dyb3VwXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uUmFkaW9ncm91cE1vZGVsKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxO30pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3F1ZXN0aW9uX3JhZGlvZ3JvdXAudHNcbiAqKi8iLCJpbXBvcnQge0l0ZW1WYWx1ZX0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuL3F1ZXN0aW9uZmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uUmF0aW5nTW9kZWwgZXh0ZW5kcyBRdWVzdGlvbiB7XHJcbiAgICBzdGF0aWMgZGVmYXVsdFJhdGVWYWx1ZXM6IEl0ZW1WYWx1ZVtdID0gW107XHJcbiAgICBwcml2YXRlIHJhdGVzOiBJdGVtVmFsdWVbXSA9IFtdO1xyXG4gICAgcHVibGljIG1pbmludW1SYXRlRGVzY3JpcHRpb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgbWF4aW11bVJhdGVEZXNjcmlwdGlvbjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICByYXRlVmFsdWVzQ2hhbmdlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgIH1cclxuICAgIGdldCByYXRlVmFsdWVzKCk6IEFycmF5PGFueT4geyByZXR1cm4gdGhpcy5yYXRlczsgfVxyXG4gICAgc2V0IHJhdGVWYWx1ZXMobmV3VmFsdWU6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBJdGVtVmFsdWUuc2V0RGF0YSh0aGlzLnJhdGVzLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maXJlQ2FsbGJhY2sodGhpcy5yYXRlVmFsdWVzQ2hhbmdlZENhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGdldCB2aXNpYmxlUmF0ZVZhbHVlcygpOiBJdGVtVmFsdWVbXSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmF0ZVZhbHVlcy5sZW5ndGggPiAwKSByZXR1cm4gdGhpcy5yYXRlVmFsdWVzO1xyXG4gICAgICAgIHJldHVybiBRdWVzdGlvblJhdGluZ01vZGVsLmRlZmF1bHRSYXRlVmFsdWVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJyYXRpbmdcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdXBwb3J0Q29tbWVudCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHB1YmxpYyBzdXBwb3J0T3RoZXIoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBzdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5JdGVtVmFsdWUuc2V0RGF0YShRdWVzdGlvblJhdGluZ01vZGVsLmRlZmF1bHRSYXRlVmFsdWVzLCBbMSwgMiwgMywgNCwgNV0pO1xyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwicmF0aW5nXCIsIFtcImhhc0NvbW1lbnQ6Ym9vbGVhblwiLCB7IG5hbWU6IFwicmF0ZVZhbHVlczppdGVtdmFsdWVzXCIsIG9uR2V0VmFsdWU6IGZ1bmN0aW9uIChvYmo6IGFueSkgeyByZXR1cm4gSXRlbVZhbHVlLmdldERhdGEob2JqLnJhdGVWYWx1ZXMpOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqOiBhbnksIHZhbHVlOiBhbnkpIHsgb2JqLnJhdGVWYWx1ZXMgPSB2YWx1ZTsgfX0sXHJcbiAgICBcIm1pbmludW1SYXRlRGVzY3JpcHRpb25cIiwgXCJtYXhpbXVtUmF0ZURlc2NyaXB0aW9uXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmdNb2RlbChcIlwiKTsgfSwgXCJxdWVzdGlvblwiKTtcclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJyYXRpbmdcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhdGluZ01vZGVsKG5hbWUpOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9xdWVzdGlvbl9yYXRpbmcudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uVGV4dE1vZGVsIGV4dGVuZHMgUXVlc3Rpb24ge1xyXG4gICAgcHVibGljIHNpemU6IG51bWJlciA9IDI1O1xyXG4gICAgcHVibGljIGlucHV0VHlwZTogc3RyaW5nID0gXCJ0ZXh0XCI7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInRleHRcIjtcclxuICAgIH1cclxuICAgIGlzRW1wdHkoKTogYm9vbGVhbiB7ICByZXR1cm4gc3VwZXIuaXNFbXB0eSgpIHx8IHRoaXMudmFsdWUgPT0gXCJcIjsgfVxyXG4gICAgc3VwcG9ydEdvTmV4dFBhZ2VBdXRvbWF0aWMoKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0TmV3VmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIG5ld1ZhbHVlID0gdGhpcy5jb3JyZWN0VmFsdWVUeXBlKG5ld1ZhbHVlKTtcclxuICAgICAgICBzdXBlci5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY29ycmVjdFZhbHVlVHlwZShuZXdWYWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIW5ld1ZhbHVlKSByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUeXBlID09IFwibnVtYmVyXCIgfHwgdGhpcy5pbnB1dFR5cGUgPT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKG5ld1ZhbHVlKSA/IHBhcnNlRmxvYXQobmV3VmFsdWUpIDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc051bWJlcih2YWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInRleHRcIiwgW3sgbmFtZTogXCJpbnB1dFR5cGVcIiwgZGVmYXVsdDogXCJ0ZXh0XCIsIGNob2ljZXM6IFtcImNvbG9yXCIsIFwiZGF0ZVwiLCBcImRhdGV0aW1lXCIsIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJlbWFpbFwiLCBcIm1vbnRoXCIsIFwibnVtYmVyXCIsIFwicGFzc3dvcmRcIiwgXCJyYW5nZVwiLCBcInRlbFwiLCBcInRleHRcIiwgXCJ0aW1lXCIsIFwidXJsXCIsIFwid2Vla1wiXSB9LFxyXG4gICAgeyBuYW1lOiBcInNpemU6bnVtYmVyXCIsIGRlZmF1bHQ6IDI1IH1dLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25UZXh0TW9kZWwoXCJcIik7IH0sIFwicXVlc3Rpb25cIik7XHJcblxyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInRleHRcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvblRleHRNb2RlbChuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcXVlc3Rpb25fdGV4dC50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2UsIElTdXJ2ZXksIEhhc2hUYWJsZSwgSVF1ZXN0aW9uLCBJQ29uZGl0aW9uUnVubmVyLCBJUGFnZSwgU3VydmV5RXJyb3IsIEV2ZW50fSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7SVN1cnZleVRyaWdnZXJPd25lciwgU3VydmV5VHJpZ2dlcn0gZnJvbSBcIi4vdHJpZ2dlclwiO1xyXG5pbXBvcnQge1BhZ2VNb2RlbH0gZnJvbSBcIi4vcGFnZVwiO1xyXG5pbXBvcnQge1RleHRQcmVQcm9jZXNzb3J9IGZyb20gXCIuL3RleHRQcmVQcm9jZXNzb3JcIjtcclxuaW1wb3J0IHtkeFN1cnZleVNlcnZpY2V9IGZyb20gXCIuL2R4U3VydmV5U2VydmljZVwiO1xyXG5pbXBvcnQge0pzb25FcnJvcn0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4vc3VydmV5U3RyaW5nc1wiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQmFzZX0gZnJvbSBcIi4vcXVlc3Rpb25iYXNlXCI7XHJcbmltcG9ydCB7Q3VzdG9tRXJyb3J9IGZyb20gXCIuL2Vycm9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5TW9kZWwgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVN1cnZleSwgSVN1cnZleVRyaWdnZXJPd25lciB7XHJcbiAgICBwdWJsaWMgc3VydmV5SWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGNsaWVudElkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGNvb2tpZU5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgc2VuZFJlc3VsdE9uUGFnZU5leHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgY29tbWVudFByZWZpeDogc3RyaW5nID0gXCItQ29tbWVudFwiO1xyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHNob3dOYXZpZ2F0aW9uQnV0dG9uczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzaG93UGFnZVRpdGxlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgY29tcGxldGVkSHRtbDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyByZXF1aXJlZFRleHQ6IHN0cmluZyA9IFwiKlwiO1xyXG4gICAgcHVibGljIHF1ZXN0aW9uU3RhcnRJbmRleDogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBxdWVzdGlvblRpdGxlVGVtcGxhdGU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgc2hvd1Byb2dyZXNzQmFyOiBzdHJpbmcgPSBcIm9mZlwiO1xyXG4gICAgcHVibGljIHN0b3JlT3RoZXJzQXNDb21tZW50OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBnb05leHRQYWdlQXV0b21hdGljOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgcGFnZXM6IEFycmF5PFBhZ2VNb2RlbD4gPSBuZXcgQXJyYXk8UGFnZU1vZGVsPigpO1xyXG4gICAgcHVibGljIHRyaWdnZXJzOiBBcnJheTxTdXJ2ZXlUcmlnZ2VyPiA9IG5ldyBBcnJheTxTdXJ2ZXlUcmlnZ2VyPigpO1xyXG4gICAgcHVibGljIGNsZWFySW52aXNpYmxlVmFsdWVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQYWdlVmFsdWU6IFBhZ2VNb2RlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHZhbHVlc0hhc2g6IEhhc2hUYWJsZTxhbnk+ID0ge307XHJcbiAgICBwcml2YXRlIHZhcmlhYmxlc0hhc2g6IEhhc2hUYWJsZTxhbnk+ID0ge307XHJcbiAgICBwcml2YXRlIHBhZ2VQcmV2VGV4dFZhbHVlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhZ2VOZXh0VGV4dFZhbHVlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNvbXBsZXRlVGV4dFZhbHVlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHNob3dQYWdlTnVtYmVyc1ZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNob3dRdWVzdGlvbk51bWJlcnNWYWx1ZTogc3RyaW5nID0gXCJvblwiO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZTogc3RyaW5nID0gXCJ0b3BcIjtcclxuICAgIHByaXZhdGUgbG9jYWxlVmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGlzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzZWRUZXh0VmFsdWVzOiBIYXNoVGFibGU8YW55PiA9IHt9O1xyXG4gICAgcHJpdmF0ZSB0ZXh0UHJlUHJvY2Vzc29yOiBUZXh0UHJlUHJvY2Vzc29yO1xyXG4gICAgcHJpdmF0ZSBpc1ZhbGlkYXRpbmdPblNlcnZlclZhbHVlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIG9uQ29tcGxldGU6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsKSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwpID0+IGFueSwgYW55PigpO1xyXG4gICAgcHVibGljIG9uQ3VycmVudFBhZ2VDaGFuZ2VkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBvblZpc2libGVDaGFuZ2VkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcbiAgICBwdWJsaWMgb25QYWdlVmlzaWJsZUNoYW5nZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBvblF1ZXN0aW9uQWRkZWQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBvblF1ZXN0aW9uUmVtb3ZlZDogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG4gICAgcHVibGljIG9uVmFsaWRhdGVRdWVzdGlvbjogRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xyXG4gICAgcHVibGljIG9uU2VydmVyVmFsaWRhdGVRdWVzdGlvbnM6IChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueTtcclxuICAgIHB1YmxpYyBvblByb2Nlc3NIdG1sOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcbiAgICBwdWJsaWMgb25TZW5kUmVzdWx0OiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgRXZlbnQ8KHNlbmRlcjogU3VydmV5TW9kZWwsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XHJcbiAgICBwdWJsaWMgb25HZXRSZXN1bHQ6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBvblVwbG9hZEZpbGU6IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcclxuICAgIHB1YmxpYyBqc29uRXJyb3JzOiBBcnJheTxKc29uRXJyb3I+ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgbW9kZTogc3RyaW5nID0gXCJub3JtYWxcIjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoanNvbk9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGV4dFByZVByb2Nlc3NvciA9IG5ldyBUZXh0UHJlUHJvY2Vzc29yKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0UHJlUHJvY2Vzc29yLm9uSGFzVmFsdWUgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nKSB7IHJldHVybiBzZWxmLnByb2Nlc3NlZFRleHRWYWx1ZXNbbmFtZS50b0xvd2VyQ2FzZSgpXTsgfTtcclxuICAgICAgICB0aGlzLnRleHRQcmVQcm9jZXNzb3Iub25Qcm9jZXNzID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZykgeyByZXR1cm4gc2VsZi5nZXRQcm9jZXNzZWRUZXh0VmFsdWUobmFtZSk7IH07XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmRhdGEgPSBzZWxmO1xyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRyaWdnZXJzLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUuc2V0T3duZXIoc2VsZik7XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvY2Vzc2VkVGV4dFZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMub25CZWZvcmVDcmVhdGluZygpO1xyXG4gICAgICAgIGlmIChqc29uT2JqKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SnNvbk9iamVjdChqc29uT2JqKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3VydmV5SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN1cnZleUZyb21TZXJ2aWNlKHRoaXMuc3VydmV5SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DcmVhdGluZygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic3VydmV5XCI7IH1cclxuICAgIHB1YmxpYyBnZXQgbG9jYWxlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmxvY2FsZVZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IGxvY2FsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHN1cnZleUxvY2FsaXphdGlvbi5jdXJyZW50TG9jYWxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0TG9jU3RyaW5nKHN0cjogc3RyaW5nKSB7IHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKHN0cik7IH1cclxuICAgIHB1YmxpYyBnZXQgZW1wdHlTdXJ2ZXlUZXh0KCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmdldExvY1N0cmluZyhcImVtcHR5U3VydmV5XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHBhZ2VQcmV2VGV4dCgpIHsgcmV0dXJuICh0aGlzLnBhZ2VQcmV2VGV4dFZhbHVlKSA/IHRoaXMucGFnZVByZXZUZXh0VmFsdWUgOiB0aGlzLmdldExvY1N0cmluZyhcInBhZ2VQcmV2VGV4dFwiKTsgfVxyXG4gICAgcHVibGljIHNldCBwYWdlUHJldlRleHQobmV3VmFsdWU6IHN0cmluZykgeyB0aGlzLnBhZ2VQcmV2VGV4dFZhbHVlID0gbmV3VmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXQgcGFnZU5leHRUZXh0KCkgeyByZXR1cm4gKHRoaXMucGFnZU5leHRUZXh0VmFsdWUpID8gdGhpcy5wYWdlTmV4dFRleHRWYWx1ZSA6IHRoaXMuZ2V0TG9jU3RyaW5nKFwicGFnZU5leHRUZXh0XCIpOyB9XHJcbiAgICBwdWJsaWMgc2V0IHBhZ2VOZXh0VGV4dChuZXdWYWx1ZTogc3RyaW5nKSB7IHRoaXMucGFnZU5leHRUZXh0VmFsdWUgPSBuZXdWYWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBjb21wbGV0ZVRleHQoKSB7IHJldHVybiAodGhpcy5jb21wbGV0ZVRleHRWYWx1ZSkgPyB0aGlzLmNvbXBsZXRlVGV4dFZhbHVlIDogdGhpcy5nZXRMb2NTdHJpbmcoXCJjb21wbGV0ZVRleHRcIik7IH1cclxuICAgIHB1YmxpYyBzZXQgY29tcGxldGVUZXh0KG5ld1ZhbHVlOiBzdHJpbmcpIHsgdGhpcy5jb21wbGV0ZVRleHRWYWx1ZSA9IG5ld1ZhbHVlOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHNob3dQYWdlTnVtYmVycygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuc2hvd1BhZ2VOdW1iZXJzVmFsdWU7IH1cclxuICAgIHB1YmxpYyBzZXQgc2hvd1BhZ2VOdW1iZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnNob3dQYWdlTnVtYmVycykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2hvd1BhZ2VOdW1iZXJzVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2libGVJbmRleGVzKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHNob3dRdWVzdGlvbk51bWJlcnMoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVyc1ZhbHVlOyB9O1xyXG4gICAgcHVibGljIHNldCBzaG93UXVlc3Rpb25OdW1iZXJzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVycykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVyc1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xyXG4gICAgfTtcclxuICAgIHB1YmxpYyBnZXQgcXVlc3Rpb25UaXRsZUxvY2F0aW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnF1ZXN0aW9uVGl0bGVMb2NhdGlvblZhbHVlOyB9O1xyXG4gICAgcHVibGljIHNldCBxdWVzdGlvblRpdGxlTG9jYXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5xdWVzdGlvblRpdGxlTG9jYXRpb25WYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25UaXRsZUxvY2F0aW9uVmFsdWUgPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzSGFzaCkge1xyXG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMudmFsdWVzSGFzaFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBkYXRhKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzSGFzaCA9IHt9O1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc0hhc2hba2V5XSA9IGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUcmlnZ2VycyhrZXksIGRhdGFba2V5XSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90aWZ5QWxsUXVlc3Rpb25zT25WYWx1ZUNoYW5nZWQoKTtcclxuICAgICAgICB0aGlzLnJ1bkNvbmRpdGlvbnMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY29tbWVudHMoKTogYW55IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzSGFzaCkge1xyXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5jb21tZW50UHJlZml4KSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy52YWx1ZXNIYXNoW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGdldCB2aXNpYmxlUGFnZXMoKTogQXJyYXk8UGFnZU1vZGVsPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXNpZ25Nb2RlKSByZXR1cm4gdGhpcy5wYWdlcztcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5PFBhZ2VNb2RlbD4oKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZXNbaV0uaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnBhZ2VzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5wYWdlcy5sZW5ndGggPT0gMDsgfVxyXG4gICAgcHVibGljIGdldCBQYWdlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHZpc2libGVQYWdlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUGFnZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBjdXJyZW50UGFnZSgpOiBQYWdlTW9kZWwge1xyXG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHZQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2VWYWx1ZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZVZhbHVlID09IG51bGwgJiYgdlBhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHZQYWdlc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFBhZ2VWYWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgY3VycmVudFBhZ2UodmFsdWU6IFBhZ2VNb2RlbCkge1xyXG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2UGFnZXMuaW5kZXhPZih2YWx1ZSkgPCAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRoaXMuY3VycmVudFBhZ2VWYWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMuY3VycmVudFBhZ2VWYWx1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBjdXJyZW50UGFnZU5vKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZVBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRQYWdlTm8odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcclxuICAgICAgICBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID49IHRoaXMudmlzaWJsZVBhZ2VzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnZpc2libGVQYWdlc1t2YWx1ZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZm9jdXNGaXJzdFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZVZhbHVlLnNjcm9sbFRvVG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2VWYWx1ZS5mb2N1c0ZpcnN0UXVlc3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHN0YXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nKSByZXR1cm4gXCJsb2FkaW5nXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQpIHJldHVybiBcImNvbXBsZXRlZFwiO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50UGFnZSkgPyBcInJ1bm5pbmdcIiA6IFwiZW1wdHlcIlxyXG4gICAgfVxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZXNIYXNoID0ge307XHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnZpc2libGVQYWdlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLnZpc2libGVQYWdlc1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgbWVyZ2VWYWx1ZXMoc3JjOiBhbnksIGRlc3Q6IGFueSkge1xyXG4gICAgICAgIGlmICghZGVzdCB8fCAhc3JjKSByZXR1cm47XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNyYykge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzcmNba2V5XTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZGVzdFtrZXldKSBkZXN0W2tleV0gPSB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVyZ2VWYWx1ZXModmFsdWUsIGRlc3Rba2V5XSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjdXJyZW50UGFnZUNoYW5nZWQobmV3VmFsdWU6IFBhZ2VNb2RlbCwgb2xkVmFsdWU6IFBhZ2VNb2RlbCkge1xyXG4gICAgICAgIHRoaXMub25DdXJyZW50UGFnZUNoYW5nZWQuZmlyZSh0aGlzLCB7ICdvbGRDdXJyZW50UGFnZSc6IG9sZFZhbHVlLCAnbmV3Q3VycmVudFBhZ2UnOiBuZXdWYWx1ZSB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQcm9ncmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiAwO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMudmlzaWJsZVBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgKyAxO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKGluZGV4ICogMTAwIC8gdGhpcy52aXNpYmxlUGFnZUNvdW50KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzRGVzaWduTW9kZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMubW9kZSA9PSBcImRlc2lnbmVyXCI7IH1cclxuICAgIHB1YmxpYyBnZXQgaGFzQ29va2llKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZXMgJiYgY29va2llcy5pbmRleE9mKHRoaXMuY29va2llTmFtZSArIFwiPXRydWVcIikgPiAtMTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDb29raWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvb2tpZU5hbWUpIHJldHVybjtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB0aGlzLmNvb2tpZU5hbWUgKyBcIj10cnVlOyBleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMDowOjAgR01UXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVsZXRlQ29va2llKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29raWVOYW1lKSByZXR1cm47XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gdGhpcy5jb29raWVOYW1lICsgXCI9O1wiO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG5leHRQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGFzdFBhZ2UpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0N1cnJlbnRQYWdlSGFzRXJyb3JzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9TZXJ2ZXJWYWxpZGF0aW9uKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvTmV4dFBhZ2UoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGdldCBpc0N1cnJlbnRQYWdlSGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlLmhhc0Vycm9ycyh0cnVlLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBwcmV2UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0UGFnZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcclxuICAgICAgICB2YXIgaW5kZXggPSB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdlBhZ2VzW2luZGV4IC0gMV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29tcGxldGVMYXN0UGFnZSgpIDogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDdXJyZW50UGFnZUhhc0Vycm9ycykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmRvU2VydmVyVmFsaWRhdGlvbigpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb0NvbXBsZXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzRmlyc3RQYWdlKCk6IGJvb2xlYW4geyBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy52aXNpYmxlUGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKSA9PSAwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBpc0xhc3RQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcclxuICAgICAgICByZXR1cm4gdlBhZ2VzLmluZGV4T2YodGhpcy5jdXJyZW50UGFnZSkgPT0gdlBhZ2VzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZG9Db21wbGV0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jbGVhckludmlzaWJsZVZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFySW52aXNpYmxlUXVlc3Rpb25WYWx1ZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRDb29raWUoKTtcclxuICAgICAgICB0aGlzLnNldENvbXBsZXRlZCgpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5maXJlKHRoaXMsIG51bGwpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1cnZleVBvc3RJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRSZXN1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGlzVmFsaWRhdGluZ09uU2VydmVyKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1ZhbGlkYXRpbmdPblNlcnZlclZhbHVlOyB9XHJcbiAgICBwcml2YXRlIHNldElzVmFsaWRhdGluZ09uU2VydmVyKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWwgPT0gdGhpcy5pc1ZhbGlkYXRpbmdPblNlcnZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZGF0aW5nT25TZXJ2ZXJWYWx1ZSA9IHZhbDtcclxuICAgICAgICB0aGlzLm9uSXNWYWxpZGF0aW5nT25TZXJ2ZXJDaGFuZ2VkKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Jc1ZhbGlkYXRpbmdPblNlcnZlckNoYW5nZWQoKSB7IH1cclxuICAgIHByb3RlY3RlZCBkb1NlcnZlclZhbGlkYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uU2VydmVyVmFsaWRhdGVRdWVzdGlvbnMpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IGRhdGE6IHt9LCBlcnJvcnM6IHt9LCBzdXJ2ZXk6IHRoaXMsIGNvbXBsZXRlIDogZnVuY3Rpb24gKCkgeyBzZWxmLmNvbXBsZXRlU2VydmVyVmFsaWRhdGlvbihvcHRpb25zKTsgfSB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gdGhpcy5jdXJyZW50UGFnZS5xdWVzdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb24udmlzaWJsZSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUocXVlc3Rpb24ubmFtZSk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkgb3B0aW9ucy5kYXRhW3F1ZXN0aW9uLm5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SXNWYWxpZGF0aW5nT25TZXJ2ZXIodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5vblNlcnZlclZhbGlkYXRlUXVlc3Rpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZVNlcnZlclZhbGlkYXRpb24ob3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXRJc1ZhbGlkYXRpbmdPblNlcnZlcihmYWxzZSk7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zICYmICFvcHRpb25zLnN1cnZleSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBzZWxmID0gb3B0aW9ucy5zdXJ2ZXk7XHJcbiAgICAgICAgdmFyIGhhc0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmVycm9ycykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBzZWxmLmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXN0aW9uICYmIHF1ZXN0aW9uW1wiZXJyb3JzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbltcImFkZEVycm9yXCJdKG5ldyBDdXN0b21FcnJvcihvcHRpb25zLmVycm9yc1tuYW1lXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzTGFzdFBhZ2UpIHNlbGYuZG9Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICBlbHNlIHNlbGYuZG9OZXh0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBkb05leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tPblBhZ2VUcmlnZ2VycygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbmRSZXN1bHRPblBhZ2VOZXh0ICYmIHRoaXMuY2xpZW50SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kUmVzdWx0KHRoaXMuc3VydmV5UG9zdElkLCB0aGlzLmNsaWVudElkLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHZQYWdlcy5pbmRleE9mKHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB2UGFnZXNbaW5kZXggKyAxXTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzZXRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHByb2Nlc3NlZENvbXBsZXRlZEh0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWRIdG1sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NIdG1sKHRoaXMuY29tcGxldGVkSHRtbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxoMz5cIiArIHRoaXMuZ2V0TG9jU3RyaW5nKFwiY29tcGxldGluZ1N1cnZleVwiKSArIFwiPC9oMz5cIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcHJvY2Vzc2VkTG9hZGluZ0h0bWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCI8aDM+XCIgKyB0aGlzLmdldExvY1N0cmluZyhcImxvYWRpbmdTdXJ2ZXlcIikgKyBcIjwvaDM+XCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHByb2dyZXNzVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID09IG51bGwpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHZhciB2UGFnZXMgPSB0aGlzLnZpc2libGVQYWdlcztcclxuICAgICAgICB2YXIgaW5kZXggPSB2UGFnZXMuaW5kZXhPZih0aGlzLmN1cnJlbnRQYWdlKSArIDE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jU3RyaW5nKFwicHJvZ3Jlc3NUZXh0XCIpW1wiZm9ybWF0XCJdKGluZGV4LCB2UGFnZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGxvYWRGaWxlKG5hbWU6IHN0cmluZywgZmlsZTogRmlsZSwgc3RvcmVEYXRhQXNUZXh0OiBib29sZWFuLCB1cGxvYWRpbmdDYWxsYmFjazogKHN0YXR1czogc3RyaW5nKT0+YW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGFjY2VwdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblVwbG9hZEZpbGUuZmlyZSh0aGlzLCB7IG5hbWU6IG5hbWUsIGZpbGU6IGZpbGUsIGFjY2VwdDogYWNjZXB0IH0pO1xyXG4gICAgICAgIGlmICghYWNjZXB0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzdG9yZURhdGFBc1RleHQgJiYgdGhpcy5zdXJ2ZXlQb3N0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlQ29yZShuYW1lLCBmaWxlLCB1cGxvYWRpbmdDYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwbG9hZEZpbGVDb3JlKG5hbWU6IHN0cmluZywgZmlsZTogRmlsZSwgdXBsb2FkaW5nQ2FsbGJhY2s6IChzdGF0dXM6IHN0cmluZykgPT4gYW55KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh1cGxvYWRpbmdDYWxsYmFjaykgdXBsb2FkaW5nQ2FsbGJhY2soXCJ1cGxvYWRpbmdcIik7XHJcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLnNlbmRGaWxlKHRoaXMuc3VydmV5UG9zdElkLCBmaWxlLCBmdW5jdGlvbiAoc3VjY2VzczogYm9vbGVhbiwgcmVzcG9uc2U6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAodXBsb2FkaW5nQ2FsbGJhY2spIHVwbG9hZGluZ0NhbGxiYWNrKHN1Y2Nlc3MgPyBcInN1Y2Nlc3NcIiA6IFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldFZhbHVlKG5hbWUsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0UGFnZShpbmRleDogbnVtYmVyKTogUGFnZU1vZGVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlc1tpbmRleF07XHJcbiAgICB9XHJcbiAgICBhZGRQYWdlKHBhZ2U6IFBhZ2VNb2RlbCkge1xyXG4gICAgICAgIGlmIChwYWdlID09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBhZ2VzLnB1c2gocGFnZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xyXG4gICAgfVxyXG4gICAgYWRkTmV3UGFnZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuY3JlYXRlTmV3UGFnZShuYW1lKTtcclxuICAgICAgICB0aGlzLmFkZFBhZ2UocGFnZSk7XHJcbiAgICAgICAgcmV0dXJuIHBhZ2U7XHJcbiAgICB9XHJcbiAgICByZW1vdmVQYWdlKHBhZ2U6IFBhZ2VNb2RlbCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucGFnZXMuaW5kZXhPZihwYWdlKTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlVmFsdWUgPT0gcGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdlcy5sZW5ndGggPiAwID8gdGhpcy5wYWdlc1swXSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRRdWVzdGlvbkJ5TmFtZShuYW1lOiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZTogYm9vbGVhbiA9IGZhbHNlKTogSVF1ZXN0aW9uIHtcclxuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRBbGxRdWVzdGlvbnMoKTtcclxuICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlKSBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uTmFtZSA9IHF1ZXN0aW9uc1tpXS5uYW1lO1xyXG4gICAgICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlKSBxdWVzdGlvbk5hbWUgPSBxdWVzdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb25OYW1lID09IG5hbWUpIHJldHVybiBxdWVzdGlvbnNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFF1ZXN0aW9uc0J5TmFtZXMobmFtZXM6IHN0cmluZ1tdLCBjYXNlSW5zZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZSk6IElRdWVzdGlvbltdIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKCFuYW1lcykgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lc1tpXSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZXNbaV0sIGNhc2VJbnNlbnNpdGl2ZSk7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbikgcmVzdWx0LnB1c2gocXVlc3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFBhZ2VCeVF1ZXN0aW9uKHF1ZXN0aW9uOiBJUXVlc3Rpb24pOiBQYWdlTW9kZWwge1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5wYWdlc1tpXTtcclxuICAgICAgICAgICAgaWYgKHBhZ2UucXVlc3Rpb25zLmluZGV4T2YoPFF1ZXN0aW9uQmFzZT5xdWVzdGlvbikgPiAtMSkgcmV0dXJuIHBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFBhZ2VCeU5hbWUobmFtZTogc3RyaW5nKTogUGFnZU1vZGVsIHtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5wYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlc1tpXS5uYW1lID09IG5hbWUpIHJldHVybiB0aGlzLnBhZ2VzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRQYWdlc0J5TmFtZXMobmFtZXM6IHN0cmluZ1tdKTogUGFnZU1vZGVsW117XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICghbmFtZXMpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICghbmFtZXNbaV0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgcGFnZSA9IHRoaXMuZ2V0UGFnZUJ5TmFtZShuYW1lc1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlKSByZXN1bHQucHVzaChwYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRBbGxRdWVzdGlvbnModmlzaWJsZU9ubHk6IGJvb2xlYW4gPSBmYWxzZSk6IEFycmF5PElRdWVzdGlvbj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8SVF1ZXN0aW9uPigpO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbaV0uYWRkUXVlc3Rpb25zVG9MaXN0KHJlc3VsdCwgdmlzaWJsZU9ubHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1BhZ2UobmFtZTogc3RyaW5nKSB7IHJldHVybiBuZXcgUGFnZU1vZGVsKG5hbWUpOyB9XHJcbiAgICBwcml2YXRlIG5vdGlmeVF1ZXN0aW9uT25WYWx1ZUNoYW5nZWQobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbnNbaV0ubmFtZSAhPSBuYW1lKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcXVlc3Rpb24gPSBxdWVzdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZG9TdXJ2ZXlWYWx1ZUNoYW5nZWQocXVlc3Rpb24sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ25hbWUnOiBuYW1lLCAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ3ZhbHVlJzogbmV3VmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG5vdGlmeUFsbFF1ZXN0aW9uc09uVmFsdWVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucygpO1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5kb1N1cnZleVZhbHVlQ2hhbmdlZChxdWVzdGlvbnNbaV0sIHRoaXMuZ2V0VmFsdWUocXVlc3Rpb25zW2ldLm5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZG9TdXJ2ZXlWYWx1ZUNoYW5nZWQocXVlc3Rpb246IElRdWVzdGlvbiwgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHF1ZXN0aW9uLm9uU3VydmV5VmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tPblBhZ2VUcmlnZ2VycygpIHtcclxuICAgICAgICB2YXIgcXVlc3Rpb25zID0gdGhpcy5nZXRDdXJyZW50UGFnZVF1ZXN0aW9ucygpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IHF1ZXN0aW9uc1tpXTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZShxdWVzdGlvbi5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1RyaWdnZXJzKHF1ZXN0aW9uLm5hbWUsIHZhbHVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEN1cnJlbnRQYWdlUXVlc3Rpb25zKCk6IEFycmF5PFF1ZXN0aW9uQmFzZT4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XHJcbiAgICAgICAgaWYgKCFwYWdlKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZS5xdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uID0gcGFnZS5xdWVzdGlvbnNbaV07XHJcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb24udmlzaWJsZSB8fCAhcXVlc3Rpb24ubmFtZSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHF1ZXN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tUcmlnZ2VycyhuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnksIGlzT25OZXh0UGFnZTogYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAodmFyIGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnRyaWdnZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gdGhpcy50cmlnZ2Vyc1tpXTtcclxuICAgICAgICAgICAgaWYgKHRyaWdnZXIubmFtZSA9PSBuYW1lICYmIHRyaWdnZXIuaXNPbk5leHRQYWdlID09IGlzT25OZXh0UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlci5jaGVjayhuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvUXVlc3Rpb25zT25Mb2FkKCkge1xyXG4gICAgICAgIHZhciBxdWVzdGlvbnMgPSB0aGlzLmdldEFsbFF1ZXN0aW9ucyhmYWxzZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcXVlc3Rpb25zW2ldLm9uU3VydmV5TG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcnVuQ29uZGl0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnJ1bkNvbmRpdGlvbnNGb3JMaXN0KHRoaXMuZ2V0QWxsUXVlc3Rpb25zKGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zRm9yTGlzdCh0aGlzLnBhZ2VzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcnVuQ29uZGl0aW9uc0Zvckxpc3QobGlzdDogQXJyYXk8SUNvbmRpdGlvblJ1bm5lcj4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGlzdFtpXS5ydW5Db25kaXRpb24odGhpcy52YWx1ZXNIYXNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VuZFJlc3VsdChwb3N0SWQ6IHN0cmluZyA9IG51bGwsIGNsaWVudElkOiBzdHJpbmcgPSBudWxsLCBpc1BhcnRpYWxDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghcG9zdElkICYmIHRoaXMuc3VydmV5UG9zdElkKSB7XHJcbiAgICAgICAgICAgIHBvc3RJZCA9IHRoaXMuc3VydmV5UG9zdElkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBvc3RJZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChjbGllbnRJZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXcgZHhTdXJ2ZXlTZXJ2aWNlKCkuc2VuZFJlc3VsdChwb3N0SWQsIHRoaXMuZGF0YSwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi5vblNlbmRSZXN1bHQuZmlyZShzZWxmLCB7IHN1Y2Nlc3M6IHN1Y2Nlc3MsIHJlc3BvbnNlOiByZXNwb25zZX0pO1xyXG4gICAgICAgIH0sIHRoaXMuY2xpZW50SWQsIGlzUGFydGlhbENvbXBsZXRlZCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0UmVzdWx0KHJlc3VsdElkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXcgZHhTdXJ2ZXlTZXJ2aWNlKCkuZ2V0UmVzdWx0KHJlc3VsdElkLCBuYW1lLCBmdW5jdGlvbiAoc3VjY2VzczogYm9vbGVhbiwgZGF0YTogYW55LCBkYXRhTGlzdDogYW55W10sIHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi5vbkdldFJlc3VsdC5maXJlKHNlbGYsIHsgc3VjY2Vzczogc3VjY2VzcywgZGF0YTogZGF0YSwgZGF0YUxpc3Q6IGRhdGFMaXN0LCByZXNwb25zZTogcmVzcG9uc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbG9hZFN1cnZleUZyb21TZXJ2aWNlKHN1cnZleUlkOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHN1cnZleUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VydmV5SWQgPSBzdXJ2ZXlJZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uTG9hZGluZ1N1cnZleUZyb21TZXJ2aWNlKCk7XHJcbiAgICAgICAgbmV3IGR4U3VydmV5U2VydmljZSgpLmxvYWRTdXJ2ZXkodGhpcy5zdXJ2ZXlJZCwgZnVuY3Rpb24gKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRKc29uT2JqZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUFsbFF1ZXN0aW9uc09uVmFsdWVDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uTG9hZFN1cnZleUZyb21TZXJ2aWNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWRpbmdTdXJ2ZXlGcm9tU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWRTdXJ2ZXlGcm9tU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tQYWdlVmlzaWJpbGl0eShxdWVzdGlvbjogSVF1ZXN0aW9uLCBvbGRRdWVzdGlvblZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuZ2V0UGFnZUJ5UXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgICAgIGlmICghcGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHBhZ2UuaXNWaXNpYmxlO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPSBwYWdlLmdldElzUGFnZVZpc2libGUocXVlc3Rpb24pIHx8IG9sZFF1ZXN0aW9uVmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaXNpYmlsaXR5Q2hhbmdlZChwYWdlLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVWaXNpYmxlSW5kZXhlcygpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VWaXNpYmxlSW5kZXhlcyh0aGlzLnNob3dQYWdlTnVtYmVycyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVycyA9PSBcIm9uUGFnZVwiKSB7XHJcbiAgICAgICAgICAgIHZhciB2aXNQYWdlcyA9IHRoaXMudmlzaWJsZVBhZ2VzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpc1BhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXN0aW9uVmlzaWJsZUluZGV4ZXModmlzUGFnZXNbaV0ucXVlc3Rpb25zLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyh0aGlzLmdldEFsbFF1ZXN0aW9ucyhmYWxzZSksIHRoaXMuc2hvd1F1ZXN0aW9uTnVtYmVycyA9PSBcIm9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlUGFnZVZpc2libGVJbmRleGVzKHNob3dJbmRleDogYm9vbGVhbikge1xyXG4gICAgICAgIHZhciBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbaV0udmlzaWJsZUluZGV4ID0gdGhpcy5wYWdlc1tpXS52aXNpYmxlID8gKGluZGV4KyspIDogLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXNbaV0ubnVtID0gc2hvd0luZGV4ICYmIHRoaXMucGFnZXNbaV0udmlzaWJsZSA/IHRoaXMucGFnZXNbaV0udmlzaWJsZUluZGV4ICsgMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlUXVlc3Rpb25WaXNpYmxlSW5kZXhlcyhxdWVzdGlvbnM6IElRdWVzdGlvbltdLCBzaG93SW5kZXg6IGJvb2xlYW4pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc1tpXS5zZXRWaXNpYmxlSW5kZXgoc2hvd0luZGV4ICYmIHF1ZXN0aW9uc1tpXS52aXNpYmxlICYmIHF1ZXN0aW9uc1tpXS5oYXNUaXRsZSA/IChpbmRleCsrKSA6IC0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldEpzb25PYmplY3QoanNvbk9iajogYW55KSB7XHJcbiAgICAgICAgaWYgKCFqc29uT2JqKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5qc29uRXJyb3JzID0gbnVsbDtcclxuICAgICAgICB2YXIganNvbkNvbnZlcnRlciA9IG5ldyBKc29uT2JqZWN0KCk7XHJcbiAgICAgICAganNvbkNvbnZlcnRlci50b09iamVjdChqc29uT2JqLCB0aGlzKTtcclxuICAgICAgICBpZiAoanNvbkNvbnZlcnRlci5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmpzb25FcnJvcnMgPSBqc29uQ29udmVydGVyLmVycm9ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9jZXNzZWRUZXh0VmFsdWVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzQ29va2llKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9Db21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvUXVlc3Rpb25zT25Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQ3JlYXRpbmcoKSB7IH1cclxuICAgIHByb3RlY3RlZCBvbkNyZWF0aW5nKCkgeyB9XHJcbiAgICBwcml2YXRlIHVwZGF0ZVByb2Nlc3NlZFRleHRWYWx1ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzID0ge307XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1tcInBhZ2Vub1wiXSA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBzZWxmLmN1cnJlbnRQYWdlICE9IG51bGwgPyBzZWxmLnZpc2libGVQYWdlcy5pbmRleE9mKHNlbGYuY3VycmVudFBhZ2UpICsgMSA6IDA7IH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NlZFRleHRWYWx1ZXNbXCJwYWdlY291bnRcIl0gPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gc2VsZi52aXNpYmxlUGFnZUNvdW50OyB9XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRRdWVzdGlvblRvUHJvY2Vzc2VkVGV4dFZhbHVlcyhxdWVzdGlvbnNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkUXVlc3Rpb25Ub1Byb2Nlc3NlZFRleHRWYWx1ZXMocXVlc3Rpb246IElRdWVzdGlvbikge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2VkVGV4dFZhbHVlc1txdWVzdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCldID0gXCJxdWVzdGlvblwiO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRQcm9jZXNzZWRUZXh0VmFsdWUobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB2YXIgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgdmFsID0gdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWVdO1xyXG4gICAgICAgIGlmICghdmFsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAodmFsID09IFwicXVlc3Rpb25cIikge1xyXG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSB0aGlzLmdldFF1ZXN0aW9uQnlOYW1lKG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcXVlc3Rpb24gIT0gbnVsbCA/IHRoaXMuZ2V0VmFsdWUocXVlc3Rpb24ubmFtZSkgOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsID09IFwidmFsdWVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbCA9PSBcInZhcmlhYmxlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFyaWFibGUobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWwobmFtZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsZWFySW52aXNpYmxlUXVlc3Rpb25WYWx1ZXMoKSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocXVlc3Rpb25zW2ldLnZpc2libGUpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHF1ZXN0aW9uc1tpXS5uYW1lLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VmFyaWFibGUobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBpZiAoIW5hbWUpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhcmlhYmxlc0hhc2hbbmFtZV07XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0VmFyaWFibGUobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWUudG9Mb3dlckNhc2UoKV0gPSBcInZhcmlhYmxlXCI7XHJcbiAgICB9XHJcbiAgICAvL0lTdXJ2ZXkgZGF0YVxyXG4gICAgcHJpdmF0ZSBnZXRVbmJpbmRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgICAgLy9kbyBub3QgcmV0dXJuIHRoZSBzYW1lIG9iamVjdCBpbnN0YW5jZSEhIVxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZShuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc0hhc2hbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VW5iaW5kVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWUobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVxdWFsKG5hbWUsIG5ld1ZhbHVlKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PSBcIlwiIHx8IG5ld1ZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMudmFsdWVzSGFzaFtuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuZ2V0VW5iaW5kVmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc0hhc2hbbmFtZV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzZWRUZXh0VmFsdWVzW25hbWUudG9Mb3dlckNhc2UoKV0gPSBcInZhbHVlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm90aWZ5UXVlc3Rpb25PblZhbHVlQ2hhbmdlZChuYW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1RyaWdnZXJzKG5hbWUsIG5ld1ZhbHVlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ydW5Db25kaXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy50cnlHb05leHRQYWdlQXV0b21hdGljKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpc1ZhbHVlRXF1YWwobmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09IFwiXCIpIG5ld1ZhbHVlID0gbnVsbDtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLmdldFZhbHVlKG5hbWUpO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCB8fCBvbGRWYWx1ZSA9PT0gbnVsbCkgcmV0dXJuIG5ld1ZhbHVlID09PSBvbGRWYWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1R3b1ZhbHVlRXF1YWxzKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzVHdvVmFsdWVFcXVhbHMoeDogYW55LCB5OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoeCA9PT0geSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCEoeCBpbnN0YW5jZW9mIE9iamVjdCkgfHwgISh5IGluc3RhbmNlb2YgT2JqZWN0KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4geCkge1xyXG4gICAgICAgICAgICBpZiAoIXguaGFzT3duUHJvcGVydHkocCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoIXkuaGFzT3duUHJvcGVydHkocCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHhbcF0gPT09IHlbcF0pIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh4W3BdKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUd29WYWx1ZUVxdWFscyh4W3BdLCB5W3BdKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHAgaW4geSkge1xyXG4gICAgICAgICAgICBpZiAoeS5oYXNPd25Qcm9wZXJ0eShwKSAmJiAheC5oYXNPd25Qcm9wZXJ0eShwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ29OZXh0UGFnZUF1dG9tYXRpYyB8fCAhdGhpcy5jdXJyZW50UGFnZSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZSk7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uICYmICFxdWVzdGlvbi5zdXBwb3J0R29OZXh0UGFnZUF1dG9tYXRpYygpKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VRdWVzdGlvbnMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VmFsdWUocXVlc3Rpb25zW2ldLm5hbWUpKSByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50UGFnZS5oYXNFcnJvcnModHJ1ZSwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRQYWdlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldENvbW1lbnQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5kYXRhW25hbWUgKyB0aGlzLmNvbW1lbnRQcmVmaXhdO1xyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc2V0Q29tbWVudChuYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBuYW1lID0gbmFtZSArIHRoaXMuY29tbWVudFByZWZpeDtcclxuICAgICAgICBpZiAobmV3VmFsdWUgPT0gXCJcIiB8fCBuZXdWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnZhbHVlc0hhc2hbbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNIYXNoW25hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5R29OZXh0UGFnZUF1dG9tYXRpYyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBxdWVzdGlvblZpc2liaWxpdHlDaGFuZ2VkKHF1ZXN0aW9uOiBJUXVlc3Rpb24sIG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xyXG4gICAgICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlZC5maXJlKHRoaXMsIHsgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICduYW1lJzogcXVlc3Rpb24ubmFtZSwgJ3Zpc2libGUnOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICB0aGlzLmNoZWNrUGFnZVZpc2liaWxpdHkocXVlc3Rpb24sICFuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmxlSW5kZXhlcygpO1xyXG4gICAgICAgIHRoaXMub25QYWdlVmlzaWJsZUNoYW5nZWQuZmlyZSh0aGlzLCB7ICdwYWdlJzogcGFnZSwgJ3Zpc2libGUnOiBuZXdWYWx1ZSB9KTtcclxuICAgIH1cclxuICAgIHF1ZXN0aW9uQWRkZWQocXVlc3Rpb246IElRdWVzdGlvbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcclxuICAgICAgICB0aGlzLmFkZFF1ZXN0aW9uVG9Qcm9jZXNzZWRUZXh0VmFsdWVzKHF1ZXN0aW9uKTtcclxuICAgICAgICB0aGlzLm9uUXVlc3Rpb25BZGRlZC5maXJlKHRoaXMsIHsgJ3F1ZXN0aW9uJzogcXVlc3Rpb24sICduYW1lJzogcXVlc3Rpb24ubmFtZSwgJ2luZGV4JzogaW5kZXggfSk7XHJcbiAgICB9XHJcbiAgICBxdWVzdGlvblJlbW92ZWQocXVlc3Rpb246IElRdWVzdGlvbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJsZUluZGV4ZXMoKTtcclxuICAgICAgICB0aGlzLm9uUXVlc3Rpb25SZW1vdmVkLmZpcmUodGhpcywgeyAncXVlc3Rpb24nOiBxdWVzdGlvbiwgJ25hbWUnOiBxdWVzdGlvbi5uYW1lIH0pO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVRdWVzdGlvbihuYW1lOiBzdHJpbmcpOiBTdXJ2ZXlFcnJvciB7XHJcbiAgICAgICAgaWYgKHRoaXMub25WYWxpZGF0ZVF1ZXN0aW9uLmlzRW1wdHkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0geyBuYW1lOiBuYW1lLCB2YWx1ZTogdGhpcy5nZXRWYWx1ZShuYW1lKSwgZXJyb3I6IG51bGwgfTtcclxuICAgICAgICB0aGlzLm9uVmFsaWRhdGVRdWVzdGlvbi5maXJlKHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zLmVycm9yID8gbmV3IEN1c3RvbUVycm9yKG9wdGlvbnMuZXJyb3IpIDogbnVsbDtcclxuICAgIH1cclxuICAgIHByb2Nlc3NIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IGh0bWw6IGh0bWwgfTtcclxuICAgICAgICB0aGlzLm9uUHJvY2Vzc0h0bWwuZmlyZSh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVGV4dChvcHRpb25zLmh0bWwpO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc1RleHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0UHJlUHJvY2Vzc29yLnByb2Nlc3ModGV4dCk7XHJcbiAgICB9XHJcbiAgICAvL0lTdXJ2ZXlUcmlnZ2VyT3duZXJcclxuICAgIGdldE9iamVjdHMocGFnZXM6IHN0cmluZ1tdLCBxdWVzdGlvbnM6IHN0cmluZ1tdKTogYW55W117XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHJlc3VsdCwgdGhpcy5nZXRQYWdlc0J5TmFtZXMocGFnZXMpKTtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShyZXN1bHQsIHRoaXMuZ2V0UXVlc3Rpb25zQnlOYW1lcyhxdWVzdGlvbnMpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc2V0VHJpZ2dlclZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgaXNWYXJpYWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChpc1ZhcmlhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFyaWFibGUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInN1cnZleVwiLCBbeyBuYW1lOiBcImxvY2FsZVwiLCBjaG9pY2VzOiAoKSA9PiB7IHJldHVybiBzdXJ2ZXlMb2NhbGl6YXRpb24uZ2V0TG9jYWxlcygpIH0gfSxcclxuICAgIFwidGl0bGVcIiwgXCJjb21wbGV0ZWRIdG1sOmh0bWxcIiwgeyBuYW1lOiBcInBhZ2VzXCIsIGNsYXNzTmFtZTogXCJwYWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJxdWVzdGlvbnNcIiwgYmFzZUNsYXNzTmFtZTogXCJxdWVzdGlvblwiLCBvbkdldFZhbHVlOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBudWxsOyB9LCBvblNldFZhbHVlOiBmdW5jdGlvbiAob2JqLCB2YWx1ZSwganNvbkNvbnZlcnRlcikgeyB2YXIgcGFnZSA9IG9iai5hZGROZXdQYWdlKFwiXCIpOyBqc29uQ29udmVydGVyLnRvT2JqZWN0KHsgcXVlc3Rpb25zOiB2YWx1ZSB9LCBwYWdlKTsgfSB9LFxyXG4gICAgeyBuYW1lOiBcInRyaWdnZXJzOnRyaWdnZXJzXCIsIGJhc2VDbGFzc05hbWU6IFwic3VydmV5dHJpZ2dlclwiLCBjbGFzc05hbWVQYXJ0OiBcInRyaWdnZXJcIiB9LFxyXG4gICAgXCJzdXJ2ZXlJZFwiLCBcInN1cnZleVBvc3RJZFwiLCBcImNvb2tpZU5hbWVcIiwgXCJzZW5kUmVzdWx0T25QYWdlTmV4dDpib29sZWFuXCIsXHJcbiAgICB7IG5hbWU6IFwic2hvd05hdmlnYXRpb25CdXR0b25zOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCB7IG5hbWU6IFwic2hvd1RpdGxlOmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCB7IG5hbWU6IFwic2hvd1BhZ2VUaXRsZXM6Ym9vbGVhblwiLCBkZWZhdWx0OiB0cnVlIH0sXHJcbiAgICBcInNob3dQYWdlTnVtYmVyczpib29sZWFuXCIsIHsgbmFtZTogXCJzaG93UXVlc3Rpb25OdW1iZXJzXCIsIGRlZmF1bHQ6IFwib25cIiwgY2hvaWNlczogW1wib25cIiwgXCJvblBhZ2VcIiwgXCJvZmZcIl0gfSxcclxuICAgIHsgbmFtZTogXCJxdWVzdGlvblRpdGxlTG9jYXRpb25cIiwgZGVmYXVsdDogXCJ0b3BcIiwgY2hvaWNlczogW1widG9wXCIsIFwiYm90dG9tXCJdIH0sXHJcbiAgICB7IG5hbWU6IFwic2hvd1Byb2dyZXNzQmFyXCIsIGRlZmF1bHQ6IFwib2ZmXCIsIGNob2ljZXM6IFtcIm9mZlwiLCBcInRvcFwiLCBcImJvdHRvbVwiXSB9LFxyXG4gICAgeyBuYW1lOiBcInN0b3JlT3RoZXJzQXNDb21tZW50OmJvb2xlYW5cIiwgZGVmYXVsdDogdHJ1ZSB9LCBcImdvTmV4dFBhZ2VBdXRvbWF0aWM6Ym9vbGVhblwiLCBcImNsZWFySW52aXNpYmxlVmFsdWVzOmJvb2xlYW5cIixcclxuICAgIHsgbmFtZTogXCJwYWdlUHJldlRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoucGFnZVByZXZUZXh0VmFsdWU7IH0gfSxcclxuICAgIHsgbmFtZTogXCJwYWdlTmV4dFRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmoucGFnZU5leHRUZXh0VmFsdWU7IH0gfSxcclxuICAgIHsgbmFtZTogXCJjb21wbGV0ZVRleHRcIiwgb25HZXRWYWx1ZTogZnVuY3Rpb24gKG9iajogYW55KSB7IHJldHVybiBvYmouY29tcGxldGVUZXh0VmFsdWU7IH0gfSxcclxuICAgIHsgbmFtZTogXCJyZXF1aXJlZFRleHRcIiwgZGVmYXVsdDogXCIqXCIgfSwgXCJxdWVzdGlvblN0YXJ0SW5kZXhcIiwgXCJxdWVzdGlvblRpdGxlVGVtcGxhdGVcIl0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3N1cnZleS50c1xuICoqLyIsImV4cG9ydCBjbGFzcyBkeFN1cnZleVNlcnZpY2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXJ2aWNlVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vZHhzdXJ2ZXlhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvYXBpL1N1cnZleVwiO1xyXG4gICAgLy9wdWJsaWMgc3RhdGljIHNlcnZpY2VVcmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDQ4OC9hcGkvU3VydmV5XCI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2FkU3VydmV5KHN1cnZleUlkOiBzdHJpbmcsIG9uTG9hZDogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBkeFN1cnZleVNlcnZpY2Uuc2VydmljZVVybCArICcvZ2V0U3VydmV5P3N1cnZleUlkPScgKyBzdXJ2ZXlJZCk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBvbkxvYWQoeGhyLnN0YXR1cyA9PSAyMDAsIHJlc3VsdCwgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VuZFJlc3VsdChwb3N0SWQ6IHN0cmluZywgcmVzdWx0OiBKU09OLCBvblNlbmRSZXN1bHQ6IChzdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55KT0+IHZvaWQsIGNsaWVudElkOiBzdHJpbmcgPSBudWxsLCBpc1BhcnRpYWxDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignUE9TVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9wb3N0LycpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHZhciBkYXRhID0geyBwb3N0SWQ6IHBvc3RJZCwgc3VydmV5UmVzdWx0OiBKU09OLnN0cmluZ2lmeShyZXN1bHQpIH07XHJcbiAgICAgICAgaWYgKGNsaWVudElkKSBkYXRhWydjbGllbnRJZCddID0gY2xpZW50SWQ7XHJcbiAgICAgICAgaWYgKGlzUGFydGlhbENvbXBsZXRlZCkgZGF0YVsnaXNQYXJ0aWFsQ29tcGxldGVkJ10gPSB0cnVlO1xyXG4gICAgICAgIHZhciBkYXRhU3RyaW5naWZ5OiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIW9uU2VuZFJlc3VsdCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBvblNlbmRSZXN1bHQoeGhyLnN0YXR1cyA9PSAyMDAsIHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZChkYXRhU3RyaW5naWZ5KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZW5kRmlsZShwb3N0SWQ6IHN0cmluZywgZmlsZTogRmlsZSwgb25TZW5kRmlsZTogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIW9uU2VuZEZpbGUpIHJldHVybjtcclxuICAgICAgICAgICAgb25TZW5kRmlsZSh4aHIuc3RhdHVzID09IDIwMCwgSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBkeFN1cnZleVNlcnZpY2Uuc2VydmljZVVybCArICcvdXBsb2FkLycsIHRydWUpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicG9zdElkXCIsIHBvc3RJZCk7XHJcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFJlc3VsdChyZXN1bHRJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG9uR2V0UmVzdWx0OiAoc3VjY2VzczogYm9vbGVhbiwgZGF0YTogYW55LCBkYXRhTGlzdDogQXJyYXk8YW55PiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB2YXIgZGF0YSA9ICdyZXN1bHRJZD0nICsgcmVzdWx0SWQgKyAnJm5hbWU9JyArIG5hbWU7XHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGR4U3VydmV5U2VydmljZS5zZXJ2aWNlVXJsICsgJy9nZXRSZXN1bHQ/JyArIGRhdGEpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHJlc3VsdC5RdWVzdGlvblJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IHsgbmFtZToga2V5LCB2YWx1ZTogcmVzdWx0LlF1ZXN0aW9uUmVzdWx0W2tleV0gfTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uR2V0UmVzdWx0KHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIGxpc3QsIHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzQ29tcGxldGVkKHJlc3VsdElkOiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIG9uSXNDb21wbGV0ZWQ6IChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB2YXIgZGF0YSA9ICdyZXN1bHRJZD0nICsgcmVzdWx0SWQgKyAnJmNsaWVudElkPScgKyBjbGllbnRJZDtcclxuICAgICAgICB4aHIub3BlbignR0VUJywgZHhTdXJ2ZXlTZXJ2aWNlLnNlcnZpY2VVcmwgKyAnL2lzQ29tcGxldGVkPycgKyBkYXRhKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25Jc0NvbXBsZXRlZCh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2R4U3VydmV5U2VydmljZS50c1xuICoqLyIsImltcG9ydCB7QmFzZSwgSGFzaFRhYmxlfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4vanNvbm9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWdnZXIgZXh0ZW5kcyBCYXNlIHtcclxuICAgIHN0YXRpYyBvcGVyYXRvcnNWYWx1ZTogSGFzaFRhYmxlPEZ1bmN0aW9uPiA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IG9wZXJhdG9ycygpIHtcclxuICAgICAgICBpZiAoVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZSAhPSBudWxsKSByZXR1cm4gVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZTtcclxuICAgICAgICBUcmlnZ2VyLm9wZXJhdG9yc1ZhbHVlID0ge1xyXG4gICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiAhdmFsdWU7IH0sXHJcbiAgICAgICAgICAgIG5vdGVtcHR5OiBmdW5jdGlvbiAodmFsdWUsIGV4cGVjdGVkVmFsdWUpIHsgcmV0dXJuICEoIXZhbHVlKTsgfSxcclxuICAgICAgICAgICAgZXF1YWw6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPT0gZXhwZWN0ZWRWYWx1ZTsgfSxcclxuICAgICAgICAgICAgbm90ZXF1YWw6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgIT0gZXhwZWN0ZWRWYWx1ZTsgfSxcclxuICAgICAgICAgICAgY29udGFpbnM6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgJiYgdmFsdWVbXCJpbmRleE9mXCJdICYmIHZhbHVlLmluZGV4T2YoZXhwZWN0ZWRWYWx1ZSkgPiAtMTsgfSxcclxuICAgICAgICAgICAgbm90Y29udGFpbnM6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gIXZhbHVlIHx8ICF2YWx1ZVtcImluZGV4T2ZcIl0gfHwgdmFsdWUuaW5kZXhPZihleHBlY3RlZFZhbHVlKSA9PSAtMTsgfSxcclxuICAgICAgICAgICAgZ3JlYXRlcjogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA+IGV4cGVjdGVkVmFsdWU7IH0sXHJcbiAgICAgICAgICAgIGxlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgZXhwZWN0ZWRWYWx1ZSkgeyByZXR1cm4gdmFsdWUgPCBleHBlY3RlZFZhbHVlOyB9LFxyXG4gICAgICAgICAgICBncmVhdGVyb3JlcXVhbDogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA+PSBleHBlY3RlZFZhbHVlOyB9LFxyXG4gICAgICAgICAgICBsZXNzb3JlcXVhbDogZnVuY3Rpb24gKHZhbHVlLCBleHBlY3RlZFZhbHVlKSB7IHJldHVybiB2YWx1ZSA8PSBleHBlY3RlZFZhbHVlOyB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gVHJpZ2dlci5vcGVyYXRvcnNWYWx1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb3BWYWx1ZTogc3RyaW5nID0gXCJlcXVhbFwiO1xyXG4gICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBvcGVyYXRvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vcFZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2V0IG9wZXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICghVHJpZ2dlci5vcGVyYXRvcnNbdmFsdWVdKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5vcFZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2hlY2sodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChUcmlnZ2VyLm9wZXJhdG9yc1t0aGlzLm9wZXJhdG9yXSh2YWx1ZSwgdGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmFpbHVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblN1Y2Nlc3MoKSB7IH1cclxuICAgIHByb3RlY3RlZCBvbkZhaWx1cmUoKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3VydmV5VHJpZ2dlck93bmVyIHtcclxuICAgIGdldE9iamVjdHMocGFnZXM6IHN0cmluZ1tdLCBxdWVzdGlvbnM6IHN0cmluZ1tdKTogYW55W107XHJcbiAgICBkb0NvbXBsZXRlKCk7XHJcbiAgICBzZXRUcmlnZ2VyVmFsdWUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBpc1ZhcmlhYmxlOiBib29sZWFuKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXIgZXh0ZW5kcyBUcmlnZ2VyIHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgb3duZXI6IElTdXJ2ZXlUcmlnZ2VyT3duZXIgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRPd25lcihvd25lcjogSVN1cnZleVRyaWdnZXJPd25lcikge1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaXNPbk5leHRQYWdlKCkgeyByZXR1cm4gZmFsc2U7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXJWaXNpYmxlIGV4dGVuZHMgU3VydmV5VHJpZ2dlciB7XHJcbiAgICBwdWJsaWMgcGFnZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwdWJsaWMgcXVlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInZpc2libGV0cmlnZ2VyXCI7IH1cclxuICAgIHByb3RlY3RlZCBvblN1Y2Nlc3MoKSB7IHRoaXMub25UcmlnZ2VyKHRoaXMub25JdGVtU3VjY2Vzcyk7IH1cclxuICAgIHByb3RlY3RlZCBvbkZhaWx1cmUoKSB7IHRoaXMub25UcmlnZ2VyKHRoaXMub25JdGVtRmFpbHVyZSk7IH1cclxuICAgIHByaXZhdGUgb25UcmlnZ2VyKGZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm93bmVyKSByZXR1cm47XHJcbiAgICAgICAgdmFyIG9iamVjdHMgPSB0aGlzLm93bmVyLmdldE9iamVjdHModGhpcy5wYWdlcywgdGhpcy5xdWVzdGlvbnMpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmdW5jKG9iamVjdHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkl0ZW1TdWNjZXNzKGl0ZW06IGFueSkgeyBpdGVtLnZpc2libGUgPSB0cnVlOyB9XHJcbiAgICBwcm90ZWN0ZWQgb25JdGVtRmFpbHVyZShpdGVtOiBhbnkpIHsgaXRlbS52aXNpYmxlID0gZmFsc2U7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU3VydmV5VHJpZ2dlckNvbXBsZXRlIGV4dGVuZHMgU3VydmV5VHJpZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiY29tcGxldGV0cmlnZ2VyXCI7IH1cclxuICAgIHB1YmxpYyBnZXQgaXNPbk5leHRQYWdlKCkgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcygpIHsgaWYgKHRoaXMub3duZXIpIHRoaXMub3duZXIuZG9Db21wbGV0ZSgpOyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN1cnZleVRyaWdnZXJTZXRWYWx1ZSBleHRlbmRzIFN1cnZleVRyaWdnZXIge1xyXG4gICAgcHVibGljIHNldFRvTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNldFZhbHVlOiBhbnk7XHJcbiAgICBwdWJsaWMgaXNWYXJpYWJsZTogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzZXR2YWx1ZXRyaWdnZXJcIjsgfVxyXG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2V0VG9OYW1lIHx8ICF0aGlzLm93bmVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5vd25lci5zZXRUcmlnZ2VyVmFsdWUodGhpcy5zZXRUb05hbWUsIHRoaXMuc2V0VmFsdWUsIHRoaXMuaXNWYXJpYWJsZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEuYWRkQ2xhc3MoXCJ0cmlnZ2VyXCIsIFtcIm9wZXJhdG9yXCIsIFwiIXZhbHVlXCJdKTtcclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInN1cnZleXRyaWdnZXJcIiwgW1wiIW5hbWVcIl0sIG51bGwsIFwidHJpZ2dlclwiKTtcclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInZpc2libGV0cmlnZ2VyXCIsIFtcInBhZ2VzXCIsIFwicXVlc3Rpb25zXCJdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3VydmV5VHJpZ2dlclZpc2libGUoKTsgfSwgXCJzdXJ2ZXl0cmlnZ2VyXCIpO1xyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLmFkZENsYXNzKFwiY29tcGxldGV0cmlnZ2VyXCIsIFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3VydmV5VHJpZ2dlckNvbXBsZXRlKCk7IH0sIFwic3VydmV5dHJpZ2dlclwiKTtcclxuSnNvbk9iamVjdC5tZXRhRGF0YS5hZGRDbGFzcyhcInNldHZhbHVldHJpZ2dlclwiLCBbXCIhc2V0VG9OYW1lXCIsIFwic2V0VmFsdWVcIiwgXCJpc1ZhcmlhYmxlOmJvb2xlYW5cIl0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBTdXJ2ZXlUcmlnZ2VyU2V0VmFsdWUoKTsgfSwgXCJzdXJ2ZXl0cmlnZ2VyXCIpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3RyaWdnZXIudHNcbiAqKi8iLCJpbXBvcnQge0Jhc2V9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4vc3VydmV5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5V2luZG93TW9kZWwgZXh0ZW5kcyBCYXNlICB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHN1cnZleUVsZW1lbnROYW1lID0gXCJ3aW5kb3dTdXJ2ZXlKU1wiO1xyXG4gICAgc3VydmV5VmFsdWU6IFN1cnZleU1vZGVsO1xyXG4gICAgd2luZG93RWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpc1Nob3dpbmdWYWx1ZTogYm9vbGVhbjtcclxuICAgIGlzRXhwYW5kZWRWYWx1ZTogYm9vbGVhbjtcclxuICAgIHRpdGxlVmFsdWU6IHN0cmluZztcclxuICAgIHRlbXBsYXRlVmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uT2JqOiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB0aGlzLmNyZWF0ZVN1cnZleShqc29uT2JqKTtcclxuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLnNob3dUaXRsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2luZG93RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldFR5cGUoKSA6IHN0cmluZyB7IHJldHVybiBcIndpbmRvd1wiIH1cclxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleU1vZGVsIHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXQgaXNTaG93aW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc1Nob3dpbmdWYWx1ZTsgfVxyXG4gICAgcHVibGljIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5pc0V4cGFuZGVkVmFsdWU7IH1cclxuICAgIHB1YmxpYyBnZXQgdGl0bGUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZSA/IHRoaXMudGl0bGVWYWx1ZSA6IHRoaXMuc3VydmV5LnRpdGxlOyB9XHJcbiAgICBwdWJsaWMgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy50aXRsZVZhbHVlID0gdmFsdWU7IH1cclxuICAgIHB1YmxpYyBleHBhbmQoKSB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRjb2xsYXBzZSh0cnVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb2xsYXBzZSgpIHtcclxuICAgICAgICB0aGlzLmV4cGFuZGNvbGxhcHNlKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjcmVhdGVTdXJ2ZXkoanNvbk9iajogYW55KTogU3VydmV5TW9kZWwge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5TW9kZWwoanNvbk9iailcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBleHBhbmRjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZFZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zdXJ2ZXlXaW5kb3cudHNcbiAqKi8iLCJleHBvcnQgdmFyIHN1cnZleUNzcyA9IHtcclxuICAgIGN1cnJlbnRUeXBlOiBcIlwiLFxyXG4gICAgZ2V0Q3NzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvYyA9IHRoaXMuY3VycmVudFR5cGUgPyB0aGlzW3RoaXMuY3VycmVudFR5cGVdIDogZGVmYXVsdFN0YW5kYXJkQ3NzO1xyXG4gICAgICAgIGlmICghbG9jKSBsb2MgPSBkZWZhdWx0U3RhbmRhcmRDc3M7XHJcbiAgICAgICAgcmV0dXJuIGxvYztcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGRlZmF1bHRTdGFuZGFyZENzcyA9IHtcclxuICAgIHJvb3Q6IFwic3ZfbWFpblwiLFxyXG4gICAgaGVhZGVyOiBcIlwiLFxyXG4gICAgYm9keTogXCJzdl9ib2R5XCIsXHJcbiAgICBmb290ZXI6IFwic3ZfbmF2XCIsXHJcbiAgICBuYXZpZ2F0aW9uQnV0dG9uOiBcIlwiLCBuYXZpZ2F0aW9uOiB7IGNvbXBsZXRlOiBcIlwiLCBwcmV2OlwiXCIsIG5leHQ6IFwiXCJ9LFxyXG4gICAgcHJvZ3Jlc3M6IFwic3ZfcHJvZ3Jlc3NcIiwgcHJvZ3Jlc3NCYXI6IFwiXCIsXHJcbiAgICBwYWdlVGl0bGU6IFwic3ZfcF90aXRsZVwiLFxyXG4gICAgcm93OiBcInN2X3Jvd1wiLFxyXG4gICAgcXVlc3Rpb246IHsgcm9vdDogXCJzdl9xXCIsIHRpdGxlOiBcInN2X3FfdGl0bGVcIiwgY29tbWVudDogXCJcIiwgaW5kZW50OiAyMCB9LFxyXG4gICAgZXJyb3I6IHsgcm9vdDogXCJzdl9xX2VyYm94XCIsIGljb246IFwiXCIsIGl0ZW06IFwiXCIgfSxcclxuXHJcbiAgICBjaGVja2JveDogeyByb290OiBcInN2X3FjYmNcIiwgaXRlbTogXCJzdl9xX2NoZWNrYm94XCIsIG90aGVyOiBcInN2X3Ffb3RoZXJcIiB9LFxyXG4gICAgY29tbWVudDogXCJcIixcclxuICAgIGRyb3Bkb3duOiBcIlwiLFxyXG4gICAgbWF0cml4OiB7IHJvb3Q6IFwic3ZfcV9tYXRyaXhcIiB9LFxyXG4gICAgbWF0cml4ZHJvcGRvd246IHsgcm9vdDogXCJzdl9xX21hdHJpeFwiIH0sXHJcbiAgICBtYXRyaXhkeW5hbWljOiB7IHJvb3Q6IFwidGFibGVcIiwgYnV0dG9uOiBcIlwiIH0sXHJcbiAgICBtdWx0aXBsZXRleHQ6IHsgcm9vdDogXCJcIiwgaXRlbVRpdGxlOiBcIlwiLCBpdGVtVmFsdWU6IFwiXCIgfSxcclxuICAgIHJhZGlvZ3JvdXA6IHsgcm9vdDogXCJzdl9xY2JjXCIsIGl0ZW06IFwic3ZfcV9yYWRpb2dyb3VwXCIsIG90aGVyOiBcInN2X3Ffb3RoZXJcIiB9LFxyXG4gICAgcmF0aW5nOiB7IHJvb3Q6IFwic3ZfcV9yYXRpbmdcIiwgaXRlbTogXCJzdl9xX3JhdGluZ19pdGVtXCIgfSxcclxuICAgIHRleHQ6IFwiXCIsXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgICByb290OiBcInN2X3dpbmRvd1wiLCBib2R5OiBcInN2X3dpbmRvd19jb250ZW50XCIsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHJvb3Q6IFwic3Zfd2luZG93X3RpdGxlXCIsIHRpdGxlOiBcIlwiLCBidXR0b246IFwiXCIsIGJ1dHRvbkV4cGFuZGVkOiBcIlwiLCBidXR0b25Db2xsYXBzZWQ6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5zdXJ2ZXlDc3NbXCJzdGFuZGFyZFwiXSA9IGRlZmF1bHRTdGFuZGFyZENzcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kZWZhdWx0Q3NzL2Nzc3N0YW5kYXJkLnRzXG4gKiovIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7U3VydmV5TW9kZWx9IGZyb20gXCIuLi9zdXJ2ZXlcIjtcclxuaW1wb3J0IHtJUGFnZSwgRXZlbnR9IGZyb20gXCIuLi9iYXNlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcIi4va29wYWdlXCI7XHJcbmltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiLi4vcGFnZVwiO1xyXG5pbXBvcnQge3N1cnZleUNzc30gZnJvbSBcIi4uL2RlZmF1bHRDc3MvY3Nzc3RhbmRhcmRcIjtcclxuaW1wb3J0IHtrb1RlbXBsYXRlfSBmcm9tIFwiLi90ZW1wbGF0ZS5rby5odG1sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3VydmV5IGV4dGVuZHMgU3VydmV5TW9kZWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgY3NzVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gc3VydmV5Q3NzLmN1cnJlbnRUeXBlOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBjc3NUeXBlKHZhbHVlOiBzdHJpbmcpIHsgc3VydmV5Q3NzLmN1cnJlbnRUeXBlID0gdmFsdWU7IH1cclxuICAgIHByaXZhdGUgcmVuZGVyZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHB1YmxpYyBvblJlbmRlcmVkOiBFdmVudDwoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4gYW55LCBhbnk+ID0gbmV3IEV2ZW50PChzZW5kZXI6IFN1cnZleU1vZGVsKSA9PiBhbnksIGFueT4oKTtcclxuICAgIHByaXZhdGUgaXNGaXJzdFJlbmRlcjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAga29DdXJyZW50UGFnZTogYW55OyBrb0lzRmlyc3RQYWdlOiBhbnk7IGtvSXNMYXN0UGFnZTogYW55OyBkdW1teU9ic2VydmFibGU6IGFueTsga29TdGF0ZTogYW55O1xyXG4gICAga29Qcm9ncmVzczogYW55OyBrb1Byb2dyZXNzVGV4dDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSA9IG51bGwsIHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgY3NzOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIoanNvbk9iaik7XHJcbiAgICAgICAgaWYgKGNzcykge1xyXG4gICAgICAgICAgICB0aGlzLmNzcyA9IGNzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbmRlcmVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IHJlbmRlcmVkRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrbyA9PT0gJ3VuZGVmaW5lZCcpIHRocm93IG5ldyBFcnJvcigna25vY2tvdXRqcyBsaWJyYXJ5IGlzIG5vdCBsb2FkZWQuJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIocmVuZGVyZWRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgY3NzTmF2aWdhdGlvbkNvbXBsZXRlKCkgeyByZXR1cm4gdGhpcy5nZXROYXZpZ2F0aW9uQ3NzKHRoaXMuY3NzLm5hdmlnYXRpb25CdXR0b24sIHRoaXMuY3NzLm5hdmlnYXRpb24uY29tcGxldGUpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNzc05hdmlnYXRpb25QcmV2KCkgeyByZXR1cm4gdGhpcy5nZXROYXZpZ2F0aW9uQ3NzKHRoaXMuY3NzLm5hdmlnYXRpb25CdXR0b24sIHRoaXMuY3NzLm5hdmlnYXRpb24ucHJldik7IH1cclxuICAgIHB1YmxpYyBnZXQgY3NzTmF2aWdhdGlvbk5leHQoKSB7IHJldHVybiB0aGlzLmdldE5hdmlnYXRpb25Dc3ModGhpcy5jc3MubmF2aWdhdGlvbkJ1dHRvbiwgdGhpcy5jc3MubmF2aWdhdGlvbi5uZXh0KTsgfVxyXG4gICAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uQ3NzKG1haW46IHN0cmluZywgYnRuOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgcmVzID0gXCJcIjtcclxuICAgICAgICBpZiAobWFpbikgcmVzID0gbWFpbjtcclxuICAgICAgICBpZiAoYnRuKSByZXMgKz0gJyAnICsgYnRuO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IGNzcygpOiBhbnkgeyByZXR1cm4gc3VydmV5Q3NzLmdldENzcygpOyB9XHJcbiAgICBwdWJsaWMgc2V0IGNzcyh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5tZXJnZVZhbHVlcyh2YWx1ZSwgdGhpcy5jc3MpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbmRlcihlbGVtZW50OiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVkRWxlbWVudDtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICBzZWxmLmFwcGx5QmluZGluZygpO1xyXG4gICAgICAgIHNlbGYub25SZW5kZXJlZC5maXJlKHNlbGYsIHt9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2FkU3VydmV5RnJvbVNlcnZpY2Uoc3VydmV5SWQ6IHN0cmluZyA9IG51bGwsIHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChyZW5kZXJlZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSByZW5kZXJlZEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLmxvYWRTdXJ2ZXlGcm9tU2VydmljZShzdXJ2ZXlJZCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0Q29tcGxldGVkKCkge1xyXG4gICAgICAgIHN1cGVyLnNldENvbXBsZXRlZCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlS29DdXJyZW50UGFnZSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld1BhZ2UobmFtZTogc3RyaW5nKSB7IHJldHVybiBuZXcgUGFnZShuYW1lKTsgfVxyXG4gICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7IHJldHVybiBrb1RlbXBsYXRlLmh0bWw7IH1cclxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUNyZWF0aW5nKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmR1bW15T2JzZXJ2YWJsZSA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICAgICAgdGhpcy5rb0N1cnJlbnRQYWdlID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmR1bW15T2JzZXJ2YWJsZSgpOyByZXR1cm4gc2VsZi5jdXJyZW50UGFnZTsgfSk7XHJcbiAgICAgICAgdGhpcy5rb0lzRmlyc3RQYWdlID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmR1bW15T2JzZXJ2YWJsZSgpOyByZXR1cm4gc2VsZi5pc0ZpcnN0UGFnZTsgfSk7XHJcbiAgICAgICAgdGhpcy5rb0lzTGFzdFBhZ2UgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYuZHVtbXlPYnNlcnZhYmxlKCk7IHJldHVybiBzZWxmLmlzTGFzdFBhZ2U7IH0pO1xyXG4gICAgICAgIHRoaXMua29Qcm9ncmVzc1RleHQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYuZHVtbXlPYnNlcnZhYmxlKCk7IHJldHVybiBzZWxmLnByb2dyZXNzVGV4dDsgfSk7XHJcbiAgICAgICAgdGhpcy5rb1Byb2dyZXNzID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmR1bW15T2JzZXJ2YWJsZSgpOyByZXR1cm4gc2VsZi5nZXRQcm9ncmVzcygpOyB9KTtcclxuICAgICAgICB0aGlzLmtvU3RhdGUgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHNlbGYuZHVtbXlPYnNlcnZhYmxlKCk7IHJldHVybiBzZWxmLnN0YXRlOyB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBjdXJyZW50UGFnZUNoYW5nZWQobmV3VmFsdWU6IFBhZ2VNb2RlbCwgb2xkVmFsdWU6IFBhZ2VNb2RlbCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlS29DdXJyZW50UGFnZSgpO1xyXG4gICAgICAgIHN1cGVyLmN1cnJlbnRQYWdlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Rlc2lnbk1vZGUpIHRoaXMuZm9jdXNGaXJzdFF1ZXN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwYWdlVmlzaWJpbGl0eUNoYW5nZWQocGFnZTogSVBhZ2UsIG5ld1ZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIucGFnZVZpc2liaWxpdHlDaGFuZ2VkKHBhZ2UsIG5ld1ZhbHVlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUtvQ3VycmVudFBhZ2UoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWRTdXJ2ZXlGcm9tU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZGluZ1N1cnZleUZyb21TZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGFwcGx5QmluZGluZygpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVuZGVyZWRFbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy51cGRhdGVLb0N1cnJlbnRQYWdlKCk7XHJcbiAgICAgICAga28uY2xlYW5Ob2RlKHRoaXMucmVuZGVyZWRFbGVtZW50KTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdFJlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRQYWdlUXVlc3Rpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNGaXJzdFJlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVLb0N1cnJlbnRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuZHVtbXlPYnNlcnZhYmxlKHRoaXMuZHVtbXlPYnNlcnZhYmxlKCkgKyAxKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlQ3VycmVudFBhZ2VRdWVzdGlvbnMoKSB7XHJcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuY3VycmVudFBhZ2UgPyB0aGlzLmN1cnJlbnRQYWdlLnF1ZXN0aW9ucyA6IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBxID0gcXVlc3Rpb25zW2ldO1xyXG4gICAgICAgICAgICBpZiAocS52aXNpYmxlKSBxW1widXBkYXRlUXVlc3Rpb25cIl0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rbm9ja291dC9rb3N1cnZleS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zNl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifVxuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtQYWdlTW9kZWwsIFF1ZXN0aW9uUm93TW9kZWx9IGZyb20gXCIuLi9wYWdlXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbmJhc2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJvdyBleHRlbmRzIFF1ZXN0aW9uUm93TW9kZWwge1xyXG4gICAga29WaXNpYmxlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFnZTogUGFnZU1vZGVsLCBwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHN1cGVyKHBhZ2UsIHF1ZXN0aW9uKTtcclxuICAgICAgICB0aGlzLmtvVmlzaWJsZSA9IGtvLm9ic2VydmFibGUodGhpcy52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblZpc2libGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMua29WaXNpYmxlKHRoaXMudmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMga29BZnRlclJlbmRlcihlbCwgY29uKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdEVsID0gZWxbaV07XHJcbiAgICAgICAgICAgIHZhciBuTmFtZSA9IHRFbC5ub2RlTmFtZTtcclxuICAgICAgICAgICAgaWYgKG5OYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTW9kZWwge1xyXG4gICAga29ObzogYW55O1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIHRoaXMua29ObyA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0aW5nKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlUm93KHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpOiBRdWVzdGlvblJvd01vZGVsIHsgcmV0dXJuIG5ldyBRdWVzdGlvblJvdyh0aGlzLCBxdWVzdGlvbik7IH1cclxuICAgIHByb3RlY3RlZCBvbkNyZWF0aW5nKCkgeyB9XHJcbiAgICBwcm90ZWN0ZWQgb25OdW1DaGFuZ2VkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmtvTm8odmFsdWUgPiAwID8gdmFsdWUgKyBcIi4gXCIgOiBcIlwiKTtcclxuICAgIH1cclxufVxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInBhZ2VcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFBhZ2UoKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29wYWdlLnRzXG4gKiovIiwiZXhwb3J0IHZhciBrb1RlbXBsYXRlID0geyBodG1sIDogXCJcIn07IGtvVGVtcGxhdGUuaHRtbCA9ICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1jb21tZW50XCI+ICA8aW5wdXQgZGF0YS1iaW5kPVwidmFsdWU6JGRhdGEucXVlc3Rpb24ua29Db21tZW50LCB2aXNpYmxlOiRkYXRhLnZpc2libGUsIGNzczogJHJvb3QuY3NzLnF1ZXN0aW9uLmNvbW1lbnRcIiAvPjwvc2NyaXB0PjxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3Mucm9vdFwiPiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6ICh0aXRsZS5sZW5ndGggPiAwKSAmJiBzaG93VGl0bGUgJiYga29TdGF0ZSgpICE9IFxcJ2NvbXBsZXRlZFxcJywgY3NzOiAkcm9vdC5jc3MuaGVhZGVyXCI+ICAgICAgICA8aDMgZGF0YS1iaW5kPVwidGV4dDp0aXRsZVwiPjwvaDM+ICAgIDwvZGl2PiAgICA8IS0tIGtvIGlmOiBrb1N0YXRlKCkgPT0gXCJydW5uaW5nXCIgLS0+ICAgIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MuYm9keVwiPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBzaG93UHJvZ3Jlc3NCYXIgPT1cXCd0b3BcXCcsIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1wcm9ncmVzc1xcJywgZGF0YTogJGRhdGEgfVwiPjwvZGl2PiAgICAgICAgPGRpdiBpZD1cInNxX3BhZ2VcIiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcGFnZVxcJywgZGF0YToga29DdXJyZW50UGFnZSB9XCI+PC9kaXY+ICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4XCIgZGF0YS1iaW5kPVwidmlzaWJsZTogc2hvd1Byb2dyZXNzQmFyID09XFwnYm90dG9tXFwnLCB0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktcHJvZ3Jlc3NcXCcsIGRhdGE6ICRkYXRhIH1cIj48L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogc2hvd05hdmlnYXRpb25CdXR0b25zICYmICFpc0Rlc2lnbk1vZGUsIGNzczogJHJvb3QuY3NzLmZvb3RlclwiPiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJ2YWx1ZTogcGFnZVByZXZUZXh0LCBjbGljazogcHJldlBhZ2UsIHZpc2libGU6ICFrb0lzRmlyc3RQYWdlKCksIGNzczogJHJvb3QuY3NzTmF2aWdhdGlvblByZXZcIiAvPiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBkYXRhLWJpbmQ9XCJ2YWx1ZTogcGFnZU5leHRUZXh0LCBjbGljazogbmV4dFBhZ2UsIHZpc2libGU6ICFrb0lzTGFzdFBhZ2UoKSwgY3NzOiAkcm9vdC5jc3NOYXZpZ2F0aW9uTmV4dFwiIC8+ICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cInZhbHVlOiBjb21wbGV0ZVRleHQsIGNsaWNrOiBjb21wbGV0ZUxhc3RQYWdlLCB2aXNpYmxlOiBrb0lzTGFzdFBhZ2UoKSwgY3NzOiAkcm9vdC5jc3NOYXZpZ2F0aW9uQ29tcGxldGVcIiAvPiAgICA8L2Rpdj4gICAgPCEtLSAva28gLS0+ICAgIDwhLS0ga28gaWY6IGtvU3RhdGUoKSA9PSBcImNvbXBsZXRlZFwiIC0tPiAgICA8ZGl2IGRhdGEtYmluZD1cImh0bWw6IHByb2Nlc3NlZENvbXBsZXRlZEh0bWxcIj48L2Rpdj4gICAgPCEtLSAva28gLS0+ICAgIDwhLS0ga28gaWY6IGtvU3RhdGUoKSA9PSBcImxvYWRpbmdcIiAtLT4gICAgPGRpdiBkYXRhLWJpbmQ9XCJodG1sOiBwcm9jZXNzZWRMb2FkaW5nSHRtbFwiPjwvZGl2PiAgICA8IS0tIC9rbyAtLT4gICAgPCEtLSBrbyBpZjoga29TdGF0ZSgpID09IFwiZW1wdHlcIiAtLT4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZXh0OmVtcHR5U3VydmV5VGV4dCwgY3NzOiAkcm9vdC5jc3MuYm9keVwiPjwvZGl2PiAgICA8IS0tIC9rbyAtLT48L2Rpdj48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1wYWdlXCI+ICAgIDxoNCBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAodGl0bGUubGVuZ3RoID4gMCkgJiYgZGF0YS5zaG93UGFnZVRpdGxlcywgdGV4dDoga29ObygpICsgcHJvY2Vzc2VkVGl0bGUsIGNzczogJHJvb3QuY3NzLnBhZ2VUaXRsZVwiPjwvaDQ+ICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3dzLCBhczogXFwncm93XFwnfSAtLT4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiByb3cua29WaXNpYmxlLCBjc3M6ICRyb290LmNzcy5yb3dcIj4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiByb3cucXVlc3Rpb25zLCBhczogXFwncXVlc3Rpb25cXCcgLCBhZnRlclJlbmRlcjogcm93LmtvQWZ0ZXJSZW5kZXIgfSAtLT4gICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvblxcJywgZGF0YTogcXVlc3Rpb24gfSAtLT48IS0tIC9rbyAtLT4gICAgICAgIDwhLS0gL2tvIC0tPiAgICA8L2Rpdj4gICAgPCEtLSAva28gLS0+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcHJvZ3Jlc3NcIj4gICAgPGRpdiBzdHlsZT1cIndpZHRoOjYwJTtcIiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5wcm9ncmVzc1wiPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5wcm9ncmVzc0Jhciwgc3R5bGU6e3dpZHRoOiBrb1Byb2dyZXNzKCkgKyBcXCclXFwnfVwiICAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVtaW49XCIwXCIgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6a29Qcm9ncmVzc1RleHRcIj48L3NwYW4+ICAgICAgICA8L2Rpdj4gICAgPC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tY2hlY2tib3hcIj4gICAgPGZvcm0gZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MuY2hlY2tib3gucm9vdFwiPiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMsIGFzOiBcXCdpdGVtXFwnLCBhZnRlclJlbmRlcjogcXVlc3Rpb24ua29BZnRlclJlbmRlcn0gIC0tPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJzdHlsZTp7d2lkdGg6IHF1ZXN0aW9uLmtvV2lkdGgsIFxcJ21hcmdpbi1yaWdodFxcJzogcXVlc3Rpb24uY29sQ291bnQgPT0gMCA/IFxcJzVweFxcJzogXFwnMHB4XFwnfSwgY3NzOiAkcm9vdC5jc3MuY2hlY2tib3guaXRlbVwiPiAgICAgICAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5jaGVja2JveC5pdGVtXCI+ICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWJpbmQ9XCJhdHRyOiB7bmFtZTogcXVlc3Rpb24ubmFtZSwgdmFsdWU6IGl0ZW0udmFsdWUsIGlkOiAoJGluZGV4KCkgPT0gMCkgPyBxdWVzdGlvbi5pbnB1dElkIDogXFwnXFwnfSwgY2hlY2tlZDogcXVlc3Rpb24ua29WYWx1ZVwiIC8+ICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6IGl0ZW0udGV4dFwiPjwvc3Bhbj4gICAgICAgICAgICA8L2xhYmVsPiAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTogcXVlc3Rpb24uaGFzT3RoZXIgJiYgKCRpbmRleCgpID09IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMoKS5sZW5ndGgtMSlcIj4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YToge1xcJ3F1ZXN0aW9uXFwnOiBxdWVzdGlvbiwgXFwndmlzaWJsZVxcJzogcXVlc3Rpb24ua29PdGhlclZpc2libGUgfSB9LCBjc3M6ICRyb290LmNzcy5jaGVja2JveC5vdGhlclwiPjwvZGl2PiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgPC9kaXY+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgPC9mb3JtPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWNvbW1lbnRcIj4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgZGF0YS1iaW5kPVwiYXR0cjoge2NvbHM6IHF1ZXN0aW9uLmNvbHMsIHJvd3M6IHF1ZXN0aW9uLnJvd3MsIGlkOiBxdWVzdGlvbi5pbnB1dElkfSwgdmFsdWU6cXVlc3Rpb24ua29WYWx1ZSwgY3NzOiAkcm9vdC5jc3MuY29tbWVudFwiIC8+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tZHJvcGRvd25cIj4gICAgPHNlbGVjdCBkYXRhLWJpbmQ9XCJhdHRyOiB7aWQ6IHF1ZXN0aW9uLmlucHV0SWR9LCBvcHRpb25zOiBxdWVzdGlvbi5rb1Zpc2libGVDaG9pY2VzLCBvcHRpb25zVGV4dDogXFwndGV4dFxcJywgb3B0aW9uc1ZhbHVlOiBcXCd2YWx1ZVxcJywgdmFsdWU6IHF1ZXN0aW9uLmtvVmFsdWUsIG9wdGlvbnNDYXB0aW9uOiBxdWVzdGlvbi5vcHRpb25zQ2FwdGlvbiwgY3NzOiAkcm9vdC5jc3MuZHJvcGRvd25cIj48L3NlbGVjdD4gICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNPdGhlclwiPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YToge1xcJ3F1ZXN0aW9uXFwnOiBxdWVzdGlvbiwgXFwndmlzaWJsZVxcJzogcXVlc3Rpb24ua29PdGhlclZpc2libGUgfSB9XCI+PC9kaXY+ICAgIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWVycm9yc1wiPiAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGRhdGEtYmluZD1cInZpc2libGU6IGtvRXJyb3JzKCkubGVuZ3RoID4gMCwgZm9yZWFjaDogeyBkYXRhOiBrb0Vycm9ycywgYXM6IFxcJ2Vycm9yXFwnfSwgY3NzOiAkcm9vdC5jc3MuZXJyb3Iucm9vdFwiPiAgICAgICAgPGRpdj4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5lcnJvci5pY29uXCI+PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ZXJyb3IuZ2V0VGV4dCgpLCBjc3M6ICRyb290LmNzcy5lcnJvci5pdGVtXCI+PC9zcGFuPiAgICAgICAgPC9kaXY+ICAgIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWZpbGVcIj4gICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgZGF0YS1iaW5kPVwiYXR0cjoge2lkOiBxdWVzdGlvbi5pbnB1dElkfSwgZXZlbnQ6IHtjaGFuZ2U6IGRvY2hhbmdlfVwiPiAgICA8ZGl2PiAgICAgICAgPGltZyBkYXRhLWJpbmQ9XCJhdHRyOiB7IHNyYzogcXVlc3Rpb24ua29EYXRhLCBoZWlnaHQ6IHF1ZXN0aW9uLmltYWdlSGVpZ2h0LCB3aWR0aDogcXVlc3Rpb24uaW1hZ2VXaWR0aCB9LCB2aXNpYmxlOiBxdWVzdGlvbi5rb0hhc1ZhbHVlXCI+ICAgIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLWh0bWxcIj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJodG1sOiBxdWVzdGlvbi5wcm9jZXNzZWRIdG1sXCI+PC9kaXY+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tbWF0cml4XCI+ICAgIDx0YWJsZSBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5tYXRyaXgucm9vdFwiPiAgICAgICAgPHRoZWFkPiAgICAgICAgICAgIDx0cj4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc1Jvd3NcIj48L3RoPiAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHF1ZXN0aW9uLmNvbHVtbnMgLS0+ICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XCJ0ZXh0OiRkYXRhLnRleHRcIj48L3RoPiAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICA8L3RyPiAgICAgICAgPC90aGVhZD4gICAgICAgIDx0Ym9keT4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcXVlc3Rpb24udmlzaWJsZVJvd3MsIGFzOiBcXCdyb3dcXCcgfSAtLT4gICAgICAgICAgICA8dHI+ICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNSb3dzLCB0ZXh0OnJvdy50ZXh0XCI+PC90ZD4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5jb2x1bW5zIC0tPiAgICAgICAgICAgICAgICA8dGQ+ICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHJvdy5mdWxsTmFtZSwgdmFsdWU6ICRkYXRhLnZhbHVlLCBpZDogKCRpbmRleCgpID09IDApICYmICgkcGFyZW50Q29udGV4dC4kaW5kZXgoKSA9PSAwKSA/IHF1ZXN0aW9uLmlucHV0SWQgOiBcXCdcXCd9LCBjaGVja2VkOiByb3cua29WYWx1ZVwiLz4gICAgICAgICAgICAgICAgPC90ZD4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgPC90cj4gICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwvdGJvZHk+ICAgIDwvdGFibGU+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tbWF0cml4ZHJvcGRvd25cIj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJzdHlsZToge292ZXJmbG93WDogcXVlc3Rpb24uaG9yaXpvbnRhbFNjcm9sbD8gXFwnc2Nyb2xsXFwnOiBcXCdcXCd9XCI+ICAgICAgICA8dGFibGUgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MubWF0cml4ZHJvcGRvd24ucm9vdFwiPiAgICAgICAgICAgIDx0aGVhZD4gICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+ICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHF1ZXN0aW9uLmNvbHVtbnMgLS0+ICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogcXVlc3Rpb24uZ2V0Q29sdW1uVGl0bGUoJGRhdGEpLCBzdHlsZTogeyBtaW5XaWR0aDogcXVlc3Rpb24uZ2V0Q29sdW1uV2lkdGgoJGRhdGEpIH1cIj48L3RoPiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgPC90aGVhZD4gICAgICAgICAgICA8dGJvZHk+ICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogeyBkYXRhOiBxdWVzdGlvbi52aXNpYmxlUm93cywgYXM6IFxcJ3Jvd1xcJyB9IC0tPiAgICAgICAgICAgICAgICA8dHI+ICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1iaW5kPVwidGV4dDpyb3cudGV4dFwiPjwvdGQ+ICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHJvdy5jZWxscy0tPiAgICAgICAgICAgICAgICAgICAgPHRkPiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uLWVycm9yc1xcJywgZGF0YTogJGRhdGEucXVlc3Rpb24gfSAtLT4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyAkZGF0YS5xdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6ICRkYXRhLnF1ZXN0aW9uLCBhczogXFwncXVlc3Rpb25cXCcgfSAtLT4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICAgICAgICAgIDwvdGQ+ICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgPC90Ym9keT4gICAgICAgIDwvdGFibGU+ICAgIDwvZGl2Pjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLW1hdHJpeGR5bmFtaWNcIj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJzdHlsZToge292ZXJmbG93WDogcXVlc3Rpb24uaG9yaXpvbnRhbFNjcm9sbD8gXFwnc2Nyb2xsXFwnOiBcXCdcXCd9XCI+ICAgICAgICA8dGFibGUgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MubWF0cml4ZHluYW1pYy5yb290XCI+ICAgICAgICAgICAgPHRoZWFkPiAgICAgICAgICAgICAgICA8dHI+ICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHF1ZXN0aW9uLmNvbHVtbnMgLS0+ICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVwidGV4dDogcXVlc3Rpb24uZ2V0Q29sdW1uVGl0bGUoJGRhdGEpLCBzdHlsZTogeyBtaW5XaWR0aDogcXVlc3Rpb24uZ2V0Q29sdW1uV2lkdGgoJGRhdGEpIH1cIj48L3RoPiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD4gICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICA8L3RoZWFkPiAgICAgICAgICAgIDx0Ym9keT4gICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7IGRhdGE6IHF1ZXN0aW9uLmtvUm93cywgYXM6IFxcJ3Jvd1xcJyB9IC0tPiAgICAgICAgICAgICAgICA8dHI+ICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHJvdy5jZWxscy0tPiAgICAgICAgICAgICAgICAgICAgPHRkPiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uLWVycm9yc1xcJywgZGF0YTogJGRhdGEucXVlc3Rpb24gfSAtLT4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1cXCcgKyAkZGF0YS5xdWVzdGlvbi5nZXRUeXBlKCksIGRhdGE6ICRkYXRhLnF1ZXN0aW9uLCBhczogXFwncXVlc3Rpb25cXCcgfSAtLT4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICAgICAgICAgIDwvdGQ+ICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImNsaWNrOnF1ZXN0aW9uLmtvUmVtb3ZlUm93Q2xpY2ssIGNzczogJHJvb3QuY3NzLm1hdHJpeGR5bmFtaWMuYnV0dG9uLCB2YWx1ZTogcXVlc3Rpb24ucmVtb3ZlUm93VGV4dFwiIC8+PC90ZD4gICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICAgICAgPC90Ym9keT4gICAgICAgIDwvdGFibGU+ICAgIDwvZGl2PiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGRhdGEtYmluZD1cImNsaWNrOnF1ZXN0aW9uLmtvQWRkUm93Q2xpY2ssIGNzczogJHJvb3QuY3NzLm1hdHJpeGR5bmFtaWMuYnV0dG9uLCB2YWx1ZTogcXVlc3Rpb24uYWRkUm93VGV4dFwiIC8+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb24tbXVsdGlwbGV0ZXh0XCI+ICAgIDx0YWJsZSBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5tdWx0aXBsZXRleHQucm9vdCwgZm9yZWFjaDogeyBkYXRhOiAgcXVlc3Rpb24ua29Sb3dzLCBhczogXFwncm93XFwnIH1cIj4gICAgICAgIDx0ciBkYXRhLWJpbmQ9XCJmb3JlYWNoOiB7IGRhdGE6IHJvdywgYXM6IFxcJ2l0ZW1cXCcgfVwiPiAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XCJ0ZXh0OiBpdGVtLnRpdGxlLCBjc3M6ICRyb290LmNzcy5tdWx0aXBsZXRleHQuaXRlbVRpdGxlXCI+PC90ZD4gICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9XCJmbG9hdDpsZWZ0XCIgZGF0YS1iaW5kPVwiYXR0cjoge3NpemU6IHF1ZXN0aW9uLml0ZW1TaXplLCBpZDogKCRpbmRleCgpID09IDApID8gcXVlc3Rpb24uaW5wdXRJZCA6IFxcJ1xcJ30sIHZhbHVlOiBpdGVtLmtvVmFsdWUsIGNzczogJHJvb3QuY3NzLm11bHRpcGxldGV4dC5pdGVtVmFsdWVcIiAvPjwvdGQ+ICAgICAgICA8L3RyPiAgICA8L3RhYmxlPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvaHRtbFwiIGlkPVwic3VydmV5LXF1ZXN0aW9uLXJhZGlvZ3JvdXBcIj4gICAgPGZvcm0gZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3MucmFkaW9ncm91cC5yb290XCI+ICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHsgZGF0YTogcXVlc3Rpb24ua29WaXNpYmxlQ2hvaWNlcywgYXM6IFxcJ2l0ZW1cXCcsIGFmdGVyUmVuZGVyOiBxdWVzdGlvbi5rb0FmdGVyUmVuZGVyfSAgLS0+ICAgICAgICA8ZGl2ICBkYXRhLWJpbmQ9XCJzdHlsZTp7d2lkdGg6IHF1ZXN0aW9uLmtvV2lkdGgsIFxcJ21hcmdpbi1yaWdodFxcJzogcXVlc3Rpb24uY29sQ291bnQgPT0gMCA/IFxcJzVweFxcJzogXFwnMHB4XFwnfSwgY3NzOiAkcm9vdC5jc3MucmFkaW9ncm91cC5pdGVtXCI+ICAgICAgICAgICAgPGxhYmVsIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnJhZGlvZ3JvdXAuaXRlbVwiPiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHF1ZXN0aW9uLm5hbWUsIHZhbHVlOiBpdGVtLnZhbHVlLCBpZDogKCRpbmRleCgpID09IDApID8gcXVlc3Rpb24uaW5wdXRJZCA6IFxcJ1xcJ30sIGNoZWNrZWQ6IHF1ZXN0aW9uLmtvVmFsdWVcIiAvPiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ0ZXh0OiBpdGVtLnRleHRcIj48L3NwYW4+ICAgICAgICAgICAgPC9sYWJlbD4gICAgICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc090aGVyICYmICgkaW5kZXgoKSA9PSBxdWVzdGlvbi5rb1Zpc2libGVDaG9pY2VzKCkubGVuZ3RoLTEpXCI+ICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVwidGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LWNvbW1lbnRcXCcsIGRhdGE6IHtcXCdxdWVzdGlvblxcJzogcXVlc3Rpb24sIFxcJ3Zpc2libGVcXCc6IHF1ZXN0aW9uLmtvT3RoZXJWaXNpYmxlfX0sIGNzczogJHJvb3QuY3NzLnJhZGlvZ3JvdXAub3RoZXJcIj48L2Rpdj4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSAva28gLS0+ICAgIDwvZm9ybT48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi1yYXRpbmdcIj4gICAgPGRpdiBkYXRhLWJpbmQ9XCJjc3M6ICRyb290LmNzcy5yYXRpbmcucm9vdFwiPiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBxdWVzdGlvbi5rb1Zpc2libGVSYXRlVmFsdWVzIC0tPiAgICAgICAgPGxhYmVsIGRhdGEtYmluZD1cImNzczogcXVlc3Rpb24ua29HZXRDc3MoJGRhdGEpXCI+ICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIiAgICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVwiYXR0cjoge25hbWU6IHF1ZXN0aW9uLm5hbWUsIGlkOiBxdWVzdGlvbi5uYW1lICsgJGluZGV4KCksIHZhbHVlOiAkZGF0YS52YWx1ZX0sIGV2ZW50OiB7IGNoYW5nZTogcXVlc3Rpb24ua29DaGFuZ2V9XCIgLz4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiAkaW5kZXgoKSA9PSAwLCB0ZXh0OiBxdWVzdGlvbi5taW5pbnVtUmF0ZURlc2NyaXB0aW9uXCI+PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cInRleHQ6ICRkYXRhLnRleHRcIj48L3NwYW4+ICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVwidmlzaWJsZTogJGluZGV4KCkgPT0gKHF1ZXN0aW9uLmtvVmlzaWJsZVJhdGVWYWx1ZXMoKS5sZW5ndGgtMSksIHRleHQ6IHF1ZXN0aW9uLm1heGltdW1SYXRlRGVzY3JpcHRpb25cIj48L3NwYW4+ICAgICAgICA8L2xhYmVsPiAgICAgICAgPCEtLSAva28gLS0+ICAgIDwvZGl2PiAgICA8ZGl2IGRhdGEtYmluZD1cInZpc2libGU6IHF1ZXN0aW9uLmhhc090aGVyXCI+ICAgICAgICA8ZGl2IGRhdGEtYmluZD1cInRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1jb21tZW50XFwnLCBkYXRhOiB7XFwncXVlc3Rpb25cXCc6IHF1ZXN0aW9uIH0gfVwiPjwvZGl2PiAgICA8L2Rpdj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2h0bWxcIiBpZD1cInN1cnZleS1xdWVzdGlvbi10ZXh0XCI+ICAgIDxpbnB1dCBkYXRhLWJpbmQ9XCJhdHRyOiB7dHlwZTogcXVlc3Rpb24uaW5wdXRUeXBlLCBzaXplOiBxdWVzdGlvbi5zaXplLCBpZDogcXVlc3Rpb24uaW5wdXRJZH0sIHZhbHVlOnF1ZXN0aW9uLmtvVmFsdWUsIGNzczogJHJvb3QuY3NzLnRleHRcIi8+PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPVwidGV4dC9odG1sXCIgaWQ9XCJzdXJ2ZXktcXVlc3Rpb25cIj4gICAgPGRpdiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLnF1ZXN0aW9uLnJvb3QsIHN0eWxlOiB7ZGlzcGxheTogcXVlc3Rpb24ua29WaXNpYmxlKCkgPyBcXCdpbmxpbmUtYmxvY2tcXCc6IFxcJ25vbmVcXCcsIG1hcmdpbkxlZnQ6IHF1ZXN0aW9uLmtvTWFyZ2luTGVmdCwgcGFkZGluZ1JpZ2h0OiBxdWVzdGlvbi5rb1BhZGRpbmdSaWdodCwgd2lkdGg6IHF1ZXN0aW9uLmtvUmVuZGVyV2lkdGggfSwgYXR0cjoge2lkOiBpZH1cIj4gICAgICAgIDwhLS0ga28gaWY6IHF1ZXN0aW9uLmhhc1RpdGxlIC0tPiAgICAgICAgPGg1IGRhdGEtYmluZD1cInZpc2libGU6ICRyb290LnF1ZXN0aW9uVGl0bGVMb2NhdGlvbiA9PSBcXCd0b3BcXCcsIHRleHQ6IHF1ZXN0aW9uLmtvVGl0bGUoKSwgY3NzOiAkcm9vdC5jc3MucXVlc3Rpb24udGl0bGVcIj48L2g1PiAgICAgICAgPCEtLSAva28gLS0+ICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcJ3N1cnZleS1xdWVzdGlvbi1lcnJvcnNcXCcsIGRhdGE6IHF1ZXN0aW9uIH0gLS0+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFwnc3VydmV5LXF1ZXN0aW9uLVxcJyArIHF1ZXN0aW9uLmdldFR5cGUoKSwgZGF0YTogcXVlc3Rpb24sIGFmdGVyUmVuZGVyOiBxdWVzdGlvbi5rb1F1ZXN0aW9uQWZ0ZXJSZW5kZXIgfSAtLT4gICAgICAgIDwhLS0gL2tvIC0tPiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ2aXNpYmxlOiBxdWVzdGlvbi5oYXNDb21tZW50XCI+ICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZXh0OnF1ZXN0aW9uLmNvbW1lbnRUZXh0XCI+PC9kaXY+ICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XCJ0ZW1wbGF0ZTogeyBuYW1lOiBcXCdzdXJ2ZXktY29tbWVudFxcJywgZGF0YToge1xcJ3F1ZXN0aW9uXFwnOiBxdWVzdGlvbiwgXFwndmlzaWJsZVxcJzogdHJ1ZSB9IH1cIj48L2Rpdj4gICAgICAgIDwvZGl2PiAgICAgICAgPCEtLSBrbyBpZjogcXVlc3Rpb24uaGFzVGl0bGUgLS0+ICAgICAgICA8aDUgZGF0YS1iaW5kPVwidmlzaWJsZTogJHJvb3QucXVlc3Rpb25UaXRsZUxvY2F0aW9uID09IFxcJ2JvdHRvbVxcJywgdGV4dDogcXVlc3Rpb24ua29UaXRsZSgpLCBjc3M6ICRyb290LmNzcy5xdWVzdGlvbi50aXRsZVwiPjwvaDU+ICAgICAgICA8IS0tIC9rbyAtLT4gICAgPC9kaXY+PC9zY3JpcHQ+JztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rbm9ja291dC90ZW1wbGF0ZS5rby5odG1sLnRzXG4gKiovIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25CYXNlfSBmcm9tIFwiLi4vcXVlc3Rpb25iYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25JbXBsZW1lbnRvckJhc2Uge1xyXG4gICAga29WaXNpYmxlOiBhbnk7IGtvRXJyb3JzOiBhbnk7IGtvTWFyZ2luTGVmdDogYW55OyBrb1BhZGRpbmdSaWdodDogYW55OyBrb1JlbmRlcldpZHRoOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uQmFzZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBxdWVzdGlvbi52aXNpYmlsaXR5Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uVmlzaWJpbGl0eUNoYW5nZWQoKTsgfTtcclxuICAgICAgICBxdWVzdGlvbi5yZW5kZXJXaWR0aENoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblJlbmRlcldpZHRoQ2hhbmdlZCgpOyB9O1xyXG4gICAgICAgIHRoaXMua29WaXNpYmxlID0ga28ub2JzZXJ2YWJsZSh0aGlzLnF1ZXN0aW9uLnZpc2libGUpO1xyXG4gICAgICAgIHRoaXMua29SZW5kZXJXaWR0aCA9IGtvLm9ic2VydmFibGUodGhpcy5xdWVzdGlvbi5yZW5kZXJXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5rb0Vycm9ycyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xyXG4gICAgICAgIHRoaXMua29NYXJnaW5MZWZ0ID0ga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgc2VsZi5rb1JlbmRlcldpZHRoKCk7IHJldHVybiBzZWxmLmdldEluZGVudFNpemUoc2VsZi5xdWVzdGlvbi5pbmRlbnQpOyB9KTtcclxuICAgICAgICB0aGlzLmtvUGFkZGluZ1JpZ2h0ID0ga28ub2JzZXJ2YWJsZShzZWxmLmdldEluZGVudFNpemUoc2VsZi5xdWVzdGlvbi5yaWdodEluZGVudCkpO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1Zpc2libGVcIl0gPSB0aGlzLmtvVmlzaWJsZTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29SZW5kZXJXaWR0aFwiXSA9IHRoaXMua29SZW5kZXJXaWR0aDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29FcnJvcnNcIl0gPSB0aGlzLmtvRXJyb3JzO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb01hcmdpbkxlZnRcIl0gPSB0aGlzLmtvTWFyZ2luTGVmdDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29QYWRkaW5nUmlnaHRcIl0gPSB0aGlzLmtvUGFkZGluZ1JpZ2h0O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJ1cGRhdGVRdWVzdGlvblwiXSA9IGZ1bmN0aW9uICgpIHsgc2VsZi51cGRhdGVRdWVzdGlvbigpOyB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlUXVlc3Rpb24oKSB7ICB9XHJcbiAgICBwcm90ZWN0ZWQgb25WaXNpYmlsaXR5Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmtvVmlzaWJsZSh0aGlzLnF1ZXN0aW9uLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uUmVuZGVyV2lkdGhDaGFuZ2VkKCkge1xyXG4gICAgICAgIHRoaXMua29SZW5kZXJXaWR0aCh0aGlzLnF1ZXN0aW9uLnJlbmRlcldpZHRoKTtcclxuICAgICAgICB0aGlzLmtvUGFkZGluZ1JpZ2h0KHRoaXMuZ2V0SW5kZW50U2l6ZSh0aGlzLnF1ZXN0aW9uLnJpZ2h0SW5kZW50KSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEluZGVudFNpemUoaW5kZW50OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChpbmRlbnQgPCAxKSByZXR1cm4gXCJcIjtcclxuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25bXCJkYXRhXCJdKSByZXR1cm4gXCJcIjtcclxuICAgICAgICB2YXIgY3NzID0gdGhpcy5xdWVzdGlvbltcImRhdGFcIl1bXCJjc3NcIl07XHJcbiAgICAgICAgaWYgKCFjc3MpIHJldHVybiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBpbmRlbnQgKiBjc3MucXVlc3Rpb24uaW5kZW50ICsgXCJweFwiO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbmJhc2UudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yQmFzZX0gZnJvbSBcIi4va29xdWVzdGlvbmJhc2VcIjtcclxuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25JbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3JCYXNlIHtcclxuICAgIHByaXZhdGUgaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBrb0R1bW15OiBhbnk7XHJcbiAgICBrb1ZhbHVlOiBhbnk7IGtvQ29tbWVudDogYW55OyBrb1RpdGxlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcXVlc3Rpb246IFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBxdWVzdGlvbi52YWx1ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblZhbHVlQ2hhbmdlZCgpOyB9O1xyXG4gICAgICAgIHF1ZXN0aW9uLmNvbW1lbnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db21tZW50Q2hhbmdlZCgpOyB9O1xyXG4gICAgICAgIHF1ZXN0aW9uLmVycm9yc0NoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkVycm9yc0NoYW5nZWQoKTsgfTtcclxuICAgICAgICBxdWVzdGlvbi50aXRsZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblZpc2libGVJbmRleENoYW5nZWQoKTsgfTtcclxuICAgICAgICBxdWVzdGlvbi52aXNpYmxlSW5kZXhDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25WaXNpYmxlSW5kZXhDaGFuZ2VkKCk7IH07XHJcbiAgICAgICAgdGhpcy5rb0R1bW15ID0ga28ub2JzZXJ2YWJsZSgwKTtcclxuICAgICAgICB0aGlzLmtvVmFsdWUgPSB0aGlzLmNyZWF0ZWtvVmFsdWUoKTtcclxuICAgICAgICB0aGlzLmtvQ29tbWVudCA9IGtvLm9ic2VydmFibGUodGhpcy5xdWVzdGlvbi5jb21tZW50KTtcclxuICAgICAgICB0aGlzLmtvVGl0bGUgPSBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvRHVtbXkoKTsgcmV0dXJuIHNlbGYucXVlc3Rpb24uZnVsbFRpdGxlOyB9KTtcclxuICAgICAgICB0aGlzLmtvRXJyb3JzKHRoaXMucXVlc3Rpb24uZXJyb3JzKTtcclxuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZVZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmtvQ29tbWVudC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlQ29tbWVudChuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvVmFsdWVcIl0gPSB0aGlzLmtvVmFsdWU7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvQ29tbWVudFwiXSA9IHRoaXMua29Db21tZW50O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1RpdGxlXCJdID0gdGhpcy5rb1RpdGxlO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1F1ZXN0aW9uQWZ0ZXJSZW5kZXJcIl0gPSB0aGlzLmtvUXVlc3Rpb25BZnRlclJlbmRlcjtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVRdWVzdGlvbigpIHtcclxuICAgICAgICB0aGlzLmtvRHVtbXkodGhpcy5rb0R1bW15KCkgKyAxKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1VwZGF0aW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZXRrb1ZhbHVlKHRoaXMucXVlc3Rpb24udmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQ29tbWVudENoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMua29Db21tZW50KHRoaXMucXVlc3Rpb24uY29tbWVudCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25WaXNpYmlsaXR5Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmtvVmlzaWJsZSh0aGlzLnF1ZXN0aW9uLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uVmlzaWJsZUluZGV4Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmtvRHVtbXkodGhpcy5rb0R1bW15KCkgKyAxKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkVycm9yc0NoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5rb0Vycm9ycyh0aGlzLnF1ZXN0aW9uLmVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRla29WYWx1ZSgpOiBhbnkgeyByZXR1cm4ga28ub2JzZXJ2YWJsZSh0aGlzLnF1ZXN0aW9uLnZhbHVlKTsgfVxyXG4gICAgcHJvdGVjdGVkIHNldGtvVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMua29WYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbi52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUNvbW1lbnQobmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbi5jb21tZW50ID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0Tm8oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVzdGlvbi52aXNpYmxlSW5kZXggPiAtMSA/IHRoaXMucXVlc3Rpb24udmlzaWJsZUluZGV4ICsgMSArIFwiLiBcIiA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQga29RdWVzdGlvbkFmdGVyUmVuZGVyKGVsLCBjb24pIHtcclxuICAgICAgICB2YXIgdEVsID0gZWxbMF07XHJcbiAgICAgICAgaWYgKHRFbC5ub2RlTmFtZSA9PSBcIiN0ZXh0XCIpIHRFbC5kYXRhID0gXCJcIjtcclxuICAgICAgICB0RWwgPSBlbFtlbC5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAodEVsLm5vZGVOYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbi50c1xuICoqLyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcclxuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlLCBRdWVzdGlvbkNoZWNrYm94QmFzZX0gZnJvbSBcIi4uL3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblNlbGVjdEJhc2VJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3J7XHJcbiAgICBrb090aGVyVmlzaWJsZTogYW55OyBrb1Zpc2libGVDaG9pY2VzOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcclxuICAgICAgICBzdXBlcihxdWVzdGlvbik7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmtvT3RoZXJWaXNpYmxlID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvVmFsdWUoKTsgcmV0dXJuIHNlbGYuaXNPdGhlclNlbGVjdGVkOyB9KTtcclxuICAgICAgICB0aGlzLmtvVmlzaWJsZUNob2ljZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKDxRdWVzdGlvbkNoZWNrYm94QmFzZT5zZWxmLnF1ZXN0aW9uKS52aXNpYmxlQ2hvaWNlcyk7XHJcbiAgICAgICAgKDxRdWVzdGlvbkNoZWNrYm94QmFzZT5xdWVzdGlvbikuY2hvaWNlc0NoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb1Zpc2libGVDaG9pY2VzKCg8UXVlc3Rpb25DaGVja2JveEJhc2U+c2VsZi5xdWVzdGlvbikudmlzaWJsZUNob2ljZXMpOyB9O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb090aGVyVmlzaWJsZVwiXSA9IHRoaXMua29PdGhlclZpc2libGU7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvVmlzaWJsZUNob2ljZXNcIl0gPSB0aGlzLmtvVmlzaWJsZUNob2ljZXM7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGlzT3RoZXJTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKDxRdWVzdGlvblNlbGVjdEJhc2U+dGhpcy5xdWVzdGlvbikuaXNPdGhlclNlbGVjdGVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25TZWxlY3RCYXNlSW1wbGVtZW50b3Ige1xyXG4gICAga29XaWR0aDogYW55O1xyXG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xyXG4gICAgICAgIHRoaXMua29XaWR0aCA9IGtvLm9ic2VydmFibGUodGhpcy5jb2xXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvV2lkdGhcIl0gPSB0aGlzLmtvV2lkdGg7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvQWZ0ZXJSZW5kZXJcIl0gPSB0aGlzLmtvQWZ0ZXJSZW5kZXI7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICg8UXVlc3Rpb25DaGVja2JveEJhc2U+dGhpcy5xdWVzdGlvbikuY29sQ291bnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Db2xDb3VudENoYW5nZWQoKTsgfTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkNvbENvdW50Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29XaWR0aFwiXSA9IGtvLm9ic2VydmFibGUodGhpcy5jb2xXaWR0aCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbFdpZHRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGNvbENvdW50ID0gKDxRdWVzdGlvbkNoZWNrYm94QmFzZT50aGlzLnF1ZXN0aW9uKS5jb2xDb3VudDtcclxuICAgICAgICByZXR1cm4gY29sQ291bnQgPiAwID8gKDEwMCAvIGNvbENvdW50KSArICclJyA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGtvQWZ0ZXJSZW5kZXIoZWwsIGNvbikge1xyXG4gICAgICAgIHZhciB0RWwgPSBlbFswXTtcclxuICAgICAgICBpZiAodEVsLm5vZGVOYW1lID09IFwiI3RleHRcIikgdEVsLmRhdGEgPSBcIlwiO1xyXG4gICAgICAgIHRFbCA9IGVsW2VsLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmICh0RWwubm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB0RWwuZGF0YSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3QudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uX2Jhc2VzZWxlY3RcIjtcclxuaW1wb3J0IHtKc29uT2JqZWN0fSBmcm9tIFwiLi4vanNvbm9iamVjdFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uRmFjdG9yeX0gZnJvbSBcIi4uL3F1ZXN0aW9uZmFjdG9yeVwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ2hlY2tib3hNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX2NoZWNrYm94XCI7XHJcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xyXG5cclxuY2xhc3MgUXVlc3Rpb25DaGVja2JveEltcGxlbWVudG9yIGV4dGVuZHMgUXVlc3Rpb25DaGVja2JveEJhc2VJbXBsZW1lbnRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcclxuICAgICAgICBzdXBlcihxdWVzdGlvbik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRla29WYWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXN0aW9uLnZhbHVlID8ga28ub2JzZXJ2YWJsZUFycmF5KHRoaXMucXVlc3Rpb24udmFsdWUpIDoga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc2V0a29WYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMua29WYWx1ZShbXS5jb25jYXQobmV3VmFsdWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmtvVmFsdWUoW10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25DaGVja2JveCBleHRlbmRzIFF1ZXN0aW9uQ2hlY2tib3hNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgbmV3IFF1ZXN0aW9uQ2hlY2tib3hJbXBsZW1lbnRvcih0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJjaGVja2JveFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25DaGVja2JveChcIlwiKTsgfSk7XHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY2hlY2tib3hcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25DaGVja2JveChuYW1lKTsgcS5jaG9pY2VzID0gUXVlc3Rpb25GYWN0b3J5LkRlZmF1bHRDaG9pY2VzOyByZXR1cm4gcTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9jaGVja2JveC50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNvbW1lbnRNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX2NvbW1lbnRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Db21tZW50IGV4dGVuZHMgUXVlc3Rpb25Db21tZW50TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvbkltcGxlbWVudG9yKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcImNvbW1lbnRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uQ29tbWVudChcIlwiKTsgfSk7XHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiY29tbWVudFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uQ29tbWVudChuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9jb21tZW50LnRzXG4gKiovIiwiaW1wb3J0IHtRdWVzdGlvbkRyb3Bkb3duTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9kcm9wZG93blwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25TZWxlY3RCYXNlSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25fYmFzZXNlbGVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRHJvcGRvd24gZXh0ZW5kcyBRdWVzdGlvbkRyb3Bkb3duTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvblNlbGVjdEJhc2VJbXBsZW1lbnRvcih0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJkcm9wZG93blwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25Ecm9wZG93bihcIlwiKTsgfSk7XHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiZHJvcGRvd25cIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25Ecm9wZG93bihuYW1lKTsgcS5jaG9pY2VzID0gUXVlc3Rpb25GYWN0b3J5LkRlZmF1bHRDaG9pY2VzOyByZXR1cm4gcTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9kcm9wZG93bi50c1xuICoqLyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GaWxlTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9maWxlXCI7XHJcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkZpbGVJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xyXG4gICAga29EYXRhVXBkYXRlcjogYW55OyBrb0RhdGE6IGFueTsga29IYXNWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvRGF0YVVwZGF0ZXIgPSBrby5vYnNlcnZhYmxlKDApO1xyXG4gICAgICAgIHRoaXMua29EYXRhID0ga28uY29tcHV0ZWQoZnVuY3Rpb24gKCkgeyBzZWxmLmtvRGF0YVVwZGF0ZXIoKTsgcmV0dXJuICg8UXVlc3Rpb25GaWxlTW9kZWw+c2VsZi5xdWVzdGlvbikucHJldmlld1ZhbHVlOyB9KTtcclxuICAgICAgICB0aGlzLmtvSGFzVmFsdWUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29EYXRhXCJdID0gdGhpcy5rb0RhdGE7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvSGFzVmFsdWVcIl0gPSB0aGlzLmtvSGFzVmFsdWU7XHJcblxyXG4gICAgICAgICg8UXVlc3Rpb25GaWxlTW9kZWw+dGhpcy5xdWVzdGlvbikucHJldmlld1ZhbHVlTG9hZGVkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Mb2FkUHJldmlldygpOyB9O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJkb2NoYW5nZVwiXSA9IGZ1bmN0aW9uIChkYXRhLCBldmVudCkgeyB2YXIgc3JjID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7IHNlbGYub25DaGFuZ2Uoc3JjKTsgfTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25DaGFuZ2Uoc3JjOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXdpbmRvd1tcIkZpbGVSZWFkZXJcIl0pIHJldHVybjtcclxuICAgICAgICBpZiAoIXNyYyB8fCAhc3JjLmZpbGVzIHx8IHNyYy5maWxlcy5sZW5ndGggPCAxKSByZXR1cm47XHJcbiAgICAgICAgKDxRdWVzdGlvbkZpbGVNb2RlbD50aGlzLnF1ZXN0aW9uKS5sb2FkRmlsZShzcmMuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkxvYWRQcmV2aWV3KCkge1xyXG4gICAgICAgIHRoaXMua29EYXRhVXBkYXRlcih0aGlzLmtvRGF0YVVwZGF0ZXIoKSArIDEpO1xyXG4gICAgICAgIHRoaXMua29IYXNWYWx1ZSh0cnVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25GaWxlIGV4dGVuZHMgUXVlc3Rpb25GaWxlTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvbkZpbGVJbXBsZW1lbnRvcih0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJmaWxlXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbkZpbGUoXCJcIik7IH0pO1xyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcImZpbGVcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvbkZpbGUobmFtZSk7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fZmlsZS50c1xuICoqLyIsImltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yQmFzZX0gZnJvbSBcIi4va29xdWVzdGlvbmJhc2VcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkh0bWxNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX2h0bWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkh0bWwgZXh0ZW5kcyBRdWVzdGlvbkh0bWxNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgbmV3IFF1ZXN0aW9uSW1wbGVtZW50b3JCYXNlKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcImh0bWxcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uSHRtbChcIlwiKTsgfSk7XHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwiaHRtbFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uSHRtbChuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9odG1sLnRzXG4gKiovIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25NYXRyaXhNb2RlbCwgTWF0cml4Um93TW9kZWwsIElNYXRyaXhEYXRhfSBmcm9tIFwiLi4vcXVlc3Rpb25fbWF0cml4XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4Um93IGV4dGVuZHMgTWF0cml4Um93TW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpc1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcclxuICAgIGtvVmFsdWU6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnksIHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBkYXRhOiBJTWF0cml4RGF0YSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHRleHQsIGZ1bGxOYW1lLCBkYXRhLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5rb1ZhbHVlLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuaXNWYWx1ZVVwZGF0aW5nKSB0cnVlO1xyXG4gICAgICAgICAgICBzZWxmLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmlzVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk1hdHJpeCBleHRlbmRzIFF1ZXN0aW9uTWF0cml4TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvbkltcGxlbWVudG9yKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1hdHJpeFJvdyhuYW1lOiBhbnksIHRleHQ6IHN0cmluZywgZnVsbE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IE1hdHJpeFJvd01vZGVsIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeFJvdyhuYW1lLCB0ZXh0LCBmdWxsTmFtZSwgdGhpcywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcIm1hdHJpeFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25NYXRyaXgoXCJcIik7IH0pO1xyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm1hdHJpeFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk1hdHJpeChuYW1lKTsgcS5yb3dzID0gW1wiUm93IDFcIiwgXCJSb3cgMlwiXTsgcS5jb2x1bW5zID0gW1wiQ29sdW1uIDFcIiwgXCJDb2x1bW4gMlwiLCBcIkNvbHVtbiAzXCJdOyByZXR1cm4gcTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9tYXRyaXgudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEcm9wZG93biBleHRlbmRzIFF1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgbmV3IFF1ZXN0aW9uSW1wbGVtZW50b3IodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwibWF0cml4ZHJvcGRvd25cIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uTWF0cml4RHJvcGRvd24oXCJcIik7IH0pO1xyXG5cclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhkcm9wZG93blwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk1hdHJpeERyb3Bkb3duKG5hbWUpOyBxLmNob2ljZXMgPSBbMSwgMiwgMywgNCwgNV07IHEucm93cyA9IFtcIlJvdyAxXCIsIFwiUm93IDJcIl07IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDFcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDJcIik7IHEuYWRkQ29sdW1uKFwiQ29sdW1uIDNcIik7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX21hdHJpeGRyb3Bkb3duLnRzXG4gKiovIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XHJcbmltcG9ydCB7UXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9tYXRyaXhkeW5hbWljXCI7XHJcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uTWF0cml4RHJvcGRvd25Nb2RlbEJhc2V9IGZyb20gXCIuLi9xdWVzdGlvbl9tYXRyaXhkcm9wZG93bmJhc2VcIjtcclxuaW1wb3J0IHtNYXRyaXhEeW5hbWljUm93TW9kZWx9IGZyb20gXCIuLi9xdWVzdGlvbl9tYXRyaXhkeW5hbWljXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEeW5hbWljSW1wbGVtZW50b3IgZXh0ZW5kcyBRdWVzdGlvbkltcGxlbWVudG9yIHtcclxuICAgIGtvUm93czogYW55OyBrb1JlY2FsYzogYW55O1xyXG4gICAga29BZGRSb3dDbGljazogYW55OyBrb1JlbW92ZVJvd0NsaWNrOiBhbnk7IGtvT3ZlcmZsb3dYOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcclxuICAgICAgICBzdXBlcihxdWVzdGlvbik7XHJcbiAgICAgICAgdGhpcy5rb1JlY2FsYyA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICAgICAgdGhpcy5rb1Jvd3MgPSBrby5wdXJlQ29tcHV0ZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmtvUmVjYWxjKCk7IHJldHVybiAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5jYWNoZWRWaXNpYmxlUm93cztcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmtvT3ZlcmZsb3dYID0ga28ucHVyZUNvbXB1dGVkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8UXVlc3Rpb25NYXRyaXhEcm9wZG93bk1vZGVsQmFzZT50aGlzLnF1ZXN0aW9uKS5ob3Jpem9udGFsU2Nyb2xsID8gXCJzY3JvbGxcIjogXCJub25lXCI7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUm93c1wiXSA9IHRoaXMua29Sb3dzO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvQWRkUm93Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYWRkUm93KCk7IH1cclxuICAgICAgICB0aGlzLmtvUmVtb3ZlUm93Q2xpY2sgPSBmdW5jdGlvbiAoZGF0YSkgeyBzZWxmLnJlbW92ZVJvdyhkYXRhKTsgfVxyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0FkZFJvd0NsaWNrXCJdID0gdGhpcy5rb0FkZFJvd0NsaWNrO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb1JlbW92ZVJvd0NsaWNrXCJdID0gdGhpcy5rb1JlbW92ZVJvd0NsaWNrO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb092ZXJmbG93WFwiXSA9IHRoaXMua29PdmVyZmxvd1g7XHJcbiAgICAgICAgKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbikucm93Q291bnRDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25Sb3dDb3VudENoYW5nZWQoKTsgfTtcclxuICAgICAgICAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5jb2x1bW5zQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29sdW1uQ2hhbmdlZCgpOyB9O1xyXG4gICAgICAgICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnVwZGF0ZUNlbGxzQ2FsbGJhayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vblVwZGF0ZUNlbGxzKCk7IH07XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25VcGRhdGVDZWxscygpIHtcclxuICAgICAgICAvL0dlbmVyZWF0ZSByb3dzIGFnYWluLlxyXG4gICAgICAgIHZhciByb3dzID0gKDxRdWVzdGlvbk1hdHJpeER5bmFtaWM+dGhpcy5xdWVzdGlvbilbXCJnZW5lcmF0ZWRWaXNpYmxlUm93c1wiXTtcclxuICAgICAgICB2YXIgY29sdW1ucyA9ICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLmNvbHVtbnM7XHJcbiAgICAgICAgaWYgKHJvd3MgJiYgcm93cy5sZW5ndGggPiAwICYmIGNvbHVtbnMgJiYgY29sdW1ucy5sZW5ndGggPiAwKSB0aGlzLm9uQ29sdW1uQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uQ29sdW1uQ2hhbmdlZCgpIHtcclxuICAgICAgICB2YXIgcm93cyA9ICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnZpc2libGVSb3dzO1xyXG4gICAgICAgIHRoaXMub25Sb3dDb3VudENoYW5nZWQoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblJvd0NvdW50Q2hhbmdlZCgpIHtcclxuICAgICAgICB0aGlzLmtvUmVjYWxjKHRoaXMua29SZWNhbGMoKSArIDEpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGFkZFJvdygpIHtcclxuICAgICAgICAoPFF1ZXN0aW9uTWF0cml4RHluYW1pYz50aGlzLnF1ZXN0aW9uKS5hZGRSb3coKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCByZW1vdmVSb3cocm93OiBNYXRyaXhEeW5hbWljUm93TW9kZWwpIHtcclxuICAgICAgICB2YXIgcm93cyA9ICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLmNhY2hlZFZpc2libGVSb3dzO1xyXG4gICAgICAgIHZhciBpbmRleCA9IHJvd3MuaW5kZXhPZihyb3cpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICg8UXVlc3Rpb25NYXRyaXhEeW5hbWljPnRoaXMucXVlc3Rpb24pLnJlbW92ZVJvdyhpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NYXRyaXhEeW5hbWljIGV4dGVuZHMgUXVlc3Rpb25NYXRyaXhEeW5hbWljTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWNJbXBsZW1lbnRvcih0aGlzKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJtYXRyaXhkeW5hbWljXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk1hdHJpeER5bmFtaWMoXCJcIik7IH0pO1xyXG5cclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJtYXRyaXhkeW5hbWljXCIsIChuYW1lKSA9PiB7IHZhciBxID0gbmV3IFF1ZXN0aW9uTWF0cml4RHluYW1pYyhuYW1lKTsgcS5jaG9pY2VzID0gWzEsIDIsIDMsIDQsIDVdOyBxLnJvd0NvdW50ID0gMjsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMVwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gMlwiKTsgcS5hZGRDb2x1bW4oXCJDb2x1bW4gM1wiKTsgcmV0dXJuIHE7IH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2tub2Nrb3V0L2tvcXVlc3Rpb25fbWF0cml4ZHluYW1pYy50c1xuICoqLyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwsIE11bHRpcGxlVGV4dEl0ZW1Nb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX211bHRpcGxldGV4dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uSW1wbGVtZW50b3J9IGZyb20gXCIuL2tvcXVlc3Rpb25cIjtcclxuaW1wb3J0IHtRdWVzdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uXCI7XHJcbmltcG9ydCB7SnNvbk9iamVjdH0gZnJvbSBcIi4uL2pzb25vYmplY3RcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkZhY3Rvcnl9IGZyb20gXCIuLi9xdWVzdGlvbmZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXBsZVRleHRJdGVtIGV4dGVuZHMgTXVsdGlwbGVUZXh0SXRlbU1vZGVsIHtcclxuICAgIHByaXZhdGUgaXNLT1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcclxuICAgIGtvVmFsdWU6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBhbnkgPSBudWxsLCB0aXRsZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHRpdGxlKTtcclxuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmtvVmFsdWUuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNLT1ZhbHVlVXBkYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25WYWx1ZUNoYW5nZWQobmV3VmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNLT1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMua29WYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pc0tPVmFsdWVVcGRhdGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25NdWx0aXBsZVRleHRJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xyXG4gICAga29Sb3dzOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb24pIHtcclxuICAgICAgICBzdXBlcihxdWVzdGlvbik7XHJcbiAgICAgICAgdGhpcy5rb1Jvd3MgPSBrby5vYnNlcnZhYmxlQXJyYXkoKDxRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsPnRoaXMucXVlc3Rpb24pLmdldFJvd3MoKSk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbltcImtvUm93c1wiXSA9IHRoaXMua29Sb3dzO1xyXG4gICAgICAgIHRoaXMub25Db2xDb3VudENoYW5nZWQoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgKDxRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsPnRoaXMucXVlc3Rpb24pLmNvbENvdW50Q2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uQ29sQ291bnRDaGFuZ2VkKCk7IH07XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Db2xDb3VudENoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5rb1Jvd3MoKDxRdWVzdGlvbk11bHRpcGxlVGV4dE1vZGVsPnRoaXMucXVlc3Rpb24pLmdldFJvd3MoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbk11bHRpcGxlVGV4dCBleHRlbmRzIFF1ZXN0aW9uTXVsdGlwbGVUZXh0TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dEltcGxlbWVudG9yKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRleHRJdGVtKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IE11bHRpcGxlVGV4dEl0ZW1Nb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aXBsZVRleHRJdGVtKG5hbWUsIHRpdGxlKTtcclxuICAgIH1cclxufVxyXG5cclxuSnNvbk9iamVjdC5tZXRhRGF0YS5vdmVycmlkZUNsYXNzQ3JlYXRvcmUoXCJtdWx0aXBsZXRleHRpdGVtXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNdWx0aXBsZVRleHRJdGVtKFwiXCIpOyB9KTtcclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwibXVsdGlwbGV0ZXh0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dChcIlwiKTsgfSk7XHJcblxyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcIm11bHRpcGxldGV4dFwiLCAobmFtZSkgPT4geyB2YXIgcSA9IG5ldyBRdWVzdGlvbk11bHRpcGxlVGV4dChuYW1lKTsgcS5BZGRJdGVtKFwidGV4dDFcIik7IHEuQWRkSXRlbShcInRleHQyXCIpOyByZXR1cm4gcTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9tdWx0aXBsZXRleHQudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uUmFkaW9ncm91cE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fcmFkaW9ncm91cFwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaGVja2JveEJhc2VJbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvbl9iYXNlc2VsZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25SYWRpb2dyb3VwIGV4dGVuZHMgUXVlc3Rpb25SYWRpb2dyb3VwTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIG5ldyBRdWVzdGlvbkNoZWNrYm94QmFzZUltcGxlbWVudG9yKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInJhZGlvZ3JvdXBcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFF1ZXN0aW9uUmFkaW9ncm91cChcIlwiKTsgfSk7XHJcblxyXG5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UucmVnaXN0ZXJRdWVzdGlvbihcInJhZGlvZ3JvdXBcIiwgKG5hbWUpID0+IHsgdmFyIHEgPSBuZXcgUXVlc3Rpb25SYWRpb2dyb3VwKG5hbWUpOyBxLmNob2ljZXMgPSBRdWVzdGlvbkZhY3RvcnkuRGVmYXVsdENob2ljZXM7IHJldHVybiBxOyB9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rbm9ja291dC9rb3F1ZXN0aW9uX3JhZGlvZ3JvdXAudHNcbiAqKi8iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkltcGxlbWVudG9yfSBmcm9tIFwiLi9rb3F1ZXN0aW9uXCI7XHJcbmltcG9ydCB7UXVlc3Rpb25SYXRpbmdNb2RlbH0gZnJvbSBcIi4uL3F1ZXN0aW9uX3JhdGluZ1wiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb259IGZyb20gXCIuLi9xdWVzdGlvblwiO1xyXG5cclxuY2xhc3MgUXVlc3Rpb25SYXRpbmdJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xyXG4gICAga29WaXNpYmxlUmF0ZVZhbHVlczogYW55OyBrb0NoYW5nZTogYW55OyBrb0NzczogYW55O1xyXG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocXVlc3Rpb24pO1xyXG4gICAgICAgIHRoaXMua29WaXNpYmxlUmF0ZVZhbHVlcyA9IGtvLm9ic2VydmFibGVBcnJheSh0aGlzLmdldFZhbHVlcygpKTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29WaXNpYmxlUmF0ZVZhbHVlc1wiXSA9IHRoaXMua29WaXNpYmxlUmF0ZVZhbHVlcztcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5rb0NoYW5nZSA9IGZ1bmN0aW9uICh2YWwpIHsgc2VsZi5rb1ZhbHVlKHZhbC5pdGVtVmFsdWUpOyB9O1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25bXCJrb0NoYW5nZVwiXSA9IHRoaXMua29DaGFuZ2U7XHJcbiAgICAgICAgKDxRdWVzdGlvblJhdGluZz50aGlzLnF1ZXN0aW9uKS5yYXRlVmFsdWVzQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLm9uUmF0ZVZhbHVlc0NoYW5nZWQoKTsgfTtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uW1wia29HZXRDc3NcIl0gPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHZhciBjc3MgPSAoPFF1ZXN0aW9uUmF0aW5nPnNlbGYucXVlc3Rpb24pLml0ZW1Dc3M7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnF1ZXN0aW9uW1wia29WYWx1ZVwiXSgpID09IHZhbC52YWx1ZSA/IGNzcyArIFwiIGFjdGl2ZVwiIDogY3NzOyB9O1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uUmF0ZVZhbHVlc0NoYW5nZWQoKSB7XHJcbiAgICAgICAgdGhpcy5rb1Zpc2libGVSYXRlVmFsdWVzKHRoaXMuZ2V0VmFsdWVzKCkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZXMoKTogQXJyYXk8YW55PiB7IHJldHVybiAoPFF1ZXN0aW9uUmF0aW5nPnRoaXMucXVlc3Rpb24pLnZpc2libGVSYXRlVmFsdWVzOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblJhdGluZyBleHRlbmRzIFF1ZXN0aW9uUmF0aW5nTW9kZWwge1xyXG4gICAgcHVibGljIGl0ZW1Dc3M6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICBuZXcgUXVlc3Rpb25SYXRpbmdJbXBsZW1lbnRvcih0aGlzKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNldERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtQ3NzID0gdGhpcy5kYXRhW1wiY3NzXCJdLnJhdGluZy5pdGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5Kc29uT2JqZWN0Lm1ldGFEYXRhLm92ZXJyaWRlQ2xhc3NDcmVhdG9yZShcInJhdGluZ1wiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25SYXRpbmcoXCJcIik7IH0pO1xyXG5cclxuUXVlc3Rpb25GYWN0b3J5Lkluc3RhbmNlLnJlZ2lzdGVyUXVlc3Rpb24oXCJyYXRpbmdcIiwgKG5hbWUpID0+IHsgcmV0dXJuIG5ldyBRdWVzdGlvblJhdGluZyhuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl9yYXRpbmcudHNcbiAqKi8iLCJpbXBvcnQge1F1ZXN0aW9uVGV4dE1vZGVsfSBmcm9tIFwiLi4vcXVlc3Rpb25fdGV4dFwiO1xyXG5pbXBvcnQge0pzb25PYmplY3R9IGZyb20gXCIuLi9qc29ub2JqZWN0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25GYWN0b3J5fSBmcm9tIFwiLi4vcXVlc3Rpb25mYWN0b3J5XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25JbXBsZW1lbnRvcn0gZnJvbSBcIi4va29xdWVzdGlvblwiO1xyXG5pbXBvcnQge1F1ZXN0aW9ufSBmcm9tIFwiLi4vcXVlc3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvblRleHRJbXBsZW1lbnRvciBleHRlbmRzIFF1ZXN0aW9uSW1wbGVtZW50b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHF1ZXN0aW9uOiBRdWVzdGlvbikge1xyXG4gICAgICAgIHN1cGVyKHF1ZXN0aW9uKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlVmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5xdWVzdGlvbi52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5xdWVzdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uVGV4dCBleHRlbmRzIFF1ZXN0aW9uVGV4dE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICBuZXcgUXVlc3Rpb25UZXh0SW1wbGVtZW50b3IodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkpzb25PYmplY3QubWV0YURhdGEub3ZlcnJpZGVDbGFzc0NyZWF0b3JlKFwidGV4dFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUXVlc3Rpb25UZXh0KFwiXCIpOyB9KTtcclxuXHJcblF1ZXN0aW9uRmFjdG9yeS5JbnN0YW5jZS5yZWdpc3RlclF1ZXN0aW9uKFwidGV4dFwiLCAobmFtZSkgPT4geyByZXR1cm4gbmV3IFF1ZXN0aW9uVGV4dChuYW1lKTsgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQva29xdWVzdGlvbl90ZXh0LnRzXG4gKiovIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7U3VydmV5V2luZG93TW9kZWx9IGZyb20gXCIuLi9zdXJ2ZXlXaW5kb3dcIjtcclxuaW1wb3J0IHtTdXJ2ZXlNb2RlbH0gZnJvbSBcIi4uL3N1cnZleVwiO1xyXG5pbXBvcnQge1N1cnZleX0gZnJvbSBcIi4va29zdXJ2ZXlcIjtcclxuaW1wb3J0IHtrb1RlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLndpbmRvdy5rby5odG1sJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1cnZleVdpbmRvdyBleHRlbmRzIFN1cnZleVdpbmRvd01vZGVsIHtcclxuICAgIGtvRXhwYW5kZWQ6IGFueTtcclxuICAgIGtvRXhwYW5kZWRDc3M6IGFueTtcclxuICAgIGRvRXhwYW5kOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihqc29uT2JqOiBhbnkpIHtcclxuICAgICAgICBzdXBlcihqc29uT2JqKTtcclxuICAgICAgICB0aGlzLmtvRXhwYW5kZWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmtvRXhwYW5kZWRDc3MgPSBrby5vYnNlcnZhYmxlKHRoaXMuZ2V0QnV0dG9uQ3NzKCkpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmRvRXhwYW5kID0gZnVuY3Rpb24gKCkgeyBzZWxmLmNoYW5nZUV4cGFuZGVkKCk7IH1cclxuICAgICAgICB0aGlzLnN1cnZleS5vbkNvbXBsZXRlLmFkZCgoc2VuZGVyOiBTdXJ2ZXlNb2RlbCkgPT4geyBzZWxmLm9uQ29tcGxldGUoKTsgc2VsZi5rb0V4cGFuZGVkQ3NzKHNlbGYuZ2V0QnV0dG9uQ3NzKCkpIH0pO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleShqc29uT2JqOiBhbnkpOiBTdXJ2ZXlNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXkoanNvbk9iailcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBleHBhbmRjb2xsYXBzZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyLmV4cGFuZGNvbGxhcHNlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLmtvRXhwYW5kZWQodGhpcy5pc0V4cGFuZGVkVmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCB0ZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZVZhbHVlID8gdGhpcy50ZW1wbGF0ZVZhbHVlIDogdGhpcy5nZXREZWZhdWx0VGVtcGxhdGUoKTsgfVxyXG4gICAgcHJvdGVjdGVkIHNldCB0ZW1wbGF0ZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGVtcGxhdGVWYWx1ZSA9IHZhbHVlOyB9XHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICB0aGlzLndpbmRvd0VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZTtcclxuICAgICAgICBrby5jbGVhbk5vZGUodGhpcy53aW5kb3dFbGVtZW50KTtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMsIHRoaXMud2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLndpbmRvd0VsZW1lbnQpO1xyXG4gICAgICAgICg8U3VydmV5PnRoaXMuc3VydmV5KS5yZW5kZXIoU3VydmV5V2luZG93LnN1cnZleUVsZW1lbnROYW1lKTtcclxuICAgICAgICB0aGlzLmlzU2hvd2luZ1ZhbHVlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIGtvVGVtcGxhdGUuaHRtbCB9XHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMud2luZG93RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy53aW5kb3dFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dpbmdWYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBjc3MoKTogYW55IHsgcmV0dXJuIHRoaXMuc3VydmV5W1wiY3NzXCJdOyB9XHJcbiAgICBwcml2YXRlIGNoYW5nZUV4cGFuZGVkKCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kY29sbGFwc2UoIXRoaXMuaXNFeHBhbmRlZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uQ29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEJ1dHRvbkNzcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rb0V4cGFuZGVkKCkgPyB0aGlzLmNzcy53aW5kb3cuaGVhZGVyLmJ1dHRvbkNvbGxhcHNlZCA6IHRoaXMuY3NzLndpbmRvdy5oZWFkZXIuYnV0dG9uRXhwYW5kZWQ7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rbm9ja291dC9rb1N1cnZleVdpbmRvdy50c1xuICoqLyIsImV4cG9ydCB2YXIga29UZW1wbGF0ZSA9IHsgaHRtbCA6IFwiXCJ9OyBrb1RlbXBsYXRlLmh0bWwgPSAnPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAzcHg7IHJpZ2h0OiAxMHB4O1wiIGRhdGEtYmluZD1cImNzczogJHJvb3QuY3NzLndpbmRvdy5yb290XCI+ICAgIDxkaXYgZGF0YS1iaW5kPVwiY3NzOiAkcm9vdC5jc3Mud2luZG93LmhlYWRlci5yb290XCI+ICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYmluZD1cImNsaWNrOmRvRXhwYW5kXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+ICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjEwcHhcIiBkYXRhLWJpbmQ9XCJ0ZXh0OnRpdGxlLCBjc3M6ICRyb290LmNzcy53aW5kb3cuaGVhZGVyLnRpdGxlXCI+PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtYmluZD1cImNzczoga29FeHBhbmRlZENzc1wiPjwvc3Bhbj4gICAgICAgIDwvYT4gICAgPC9kaXY+ICAgIDxkaXYgZGF0YS1iaW5kPVwidmlzaWJsZTprb0V4cGFuZGVkLCBjc3M6ICRyb290LmNzcy53aW5kb3cuYm9keVwiPiAgICAgICAgPGRpdiBpZD1cIndpbmRvd1N1cnZleUpTXCI+PC9kaXY+ICAgIDwvZGl2PjwvZGl2Pic7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva25vY2tvdXQvdGVtcGxhdGUud2luZG93LmtvLmh0bWwudHNcbiAqKi8iLCJpbXBvcnQge2tvVGVtcGxhdGV9IGZyb20gXCIuL3RlbXBsYXRlLmtvLmh0bWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUZW1wbGF0ZVRleHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlcGxhY2VUZXh0KHJlcGxhY2VUZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcsIHF1ZXN0aW9uVHlwZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIGlkID0gdGhpcy5nZXRJZChpZCwgcXVlc3Rpb25UeXBlKTtcclxuICAgICAgICB2YXIgcG9zID0gdGhpcy50ZXh0LmluZGV4T2YoaWQpO1xyXG4gICAgICAgIGlmIChwb3MgPCAwKSByZXR1cm47XHJcbiAgICAgICAgcG9zID0gdGhpcy50ZXh0LmluZGV4T2YoJz4nLCBwb3MpO1xyXG4gICAgICAgIGlmIChwb3MgPCAwKSByZXR1cm47XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zID0gcG9zICsgMTtcclxuICAgICAgICB2YXIgZW5kU3RyaW5nID0gXCI8L3NjcmlwdD5cIjtcclxuICAgICAgICBwb3MgPSB0aGlzLnRleHQuaW5kZXhPZihlbmRTdHJpbmcsIHN0YXJ0UG9zKTtcclxuICAgICAgICBpZiAocG9zIDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHIoMCwgc3RhcnRQb3MpICsgcmVwbGFjZVRleHQgKyB0aGlzLnRleHQuc3Vic3RyKHBvcyk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0SWQoaWQ6IHN0cmluZywgcXVlc3Rpb25UeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJ2lkPVwic3VydmV5LScgKyBpZDtcclxuICAgICAgICBpZiAocXVlc3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIi1cIiArIHF1ZXN0aW9uVHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdcIic7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGtvVGVtcGxhdGUuaHRtbDsgfVxyXG4gICAgcHJvdGVjdGVkIHNldCB0ZXh0KHZhbHVlOiBzdHJpbmcpIHsga29UZW1wbGF0ZS5odG1sID0gdmFsdWU7IH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2tub2Nrb3V0L3RlbXBsYXRlVGV4dC50c1xuICoqLyIsImltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2RhbmlzaCc7XHJcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2R1dGNoJztcclxuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vZmlubmlzaCc7XHJcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2ZyZW5jaCc7XHJcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2dlcm1hbic7XHJcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL2dyZWVrJztcclxuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vcG9saXNoJztcclxuaW1wb3J0ICcuLi8uLi9sb2NhbGl6YXRpb24vcnVzc2lhbic7XHJcbmltcG9ydCAnLi4vLi4vbG9jYWxpemF0aW9uL3R1cmtpc2gnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2VudHJpZXMvY2h1bmtzL2xvY2FsaXphdGlvbi50c1xuICoqLyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHZhciBkYW5pc2hTdXJ2ZXlTdHJpbmdzID0ge1xyXG4gICAgcGFnZVByZXZUZXh0OiBcIlRpbGJhZ2VcIixcclxuICAgIHBhZ2VOZXh0VGV4dDogXCJWaWRlcmVcIixcclxuICAgIGNvbXBsZXRlVGV4dDogXCJGw6ZyZGlnXCIsXHJcbiAgICBwcm9ncmVzc1RleHQ6IFwiU2lkZSB7MH0gYWYgezF9XCIsXHJcbiAgICBlbXB0eVN1cnZleTogXCJEZXIgZXIgaW5nZW4gc3lubGlnZSBzcMO4cmdzbcOlbC5cIixcclxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiTWFuZ2UgdGFrIGZvciBkaW4gYmVzdmFyZWxzZSFcIixcclxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiU3DDuHJnZXNrZW1hZXQgaGVudGVzIGZyYSBzZXJ2ZXJlbi4uLlwiLFxyXG4gICAgb3RoZXJJdGVtVGV4dDogXCJWYWxnZnJpdCBzdmFyLi4uXCIsXHJcbiAgICBvcHRpb25zQ2FwdGlvbjogXCJWw6ZsZy4uLlwiLFxyXG4gICAgcmVxdWlyZWRFcnJvcjogXCJCZXN2YXIgdmVubGlnc3Qgc3DDuHJnc23DpWxldC5cIixcclxuICAgIG51bWVyaWNFcnJvcjogXCJBbmdpdiBldCB0YWwuXCIsXHJcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIkFuZ2l2IG1pbmRzdCB7MH0gdGVnbi5cIixcclxuICAgIG1pblNlbGVjdEVycm9yOiBcIlbDpmxnIHZlbmxpZ3N0IG1pbmRzdCAgezB9IHN2YXJtdWxpZ2hlZChlcikuXCIsXHJcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJWw6ZsZyB2ZW5saWdzdCBmw6ZycmUgezB9IHN2YXJtdWxpZ2hlZGVyKGVyKS5cIixcclxuICAgIG51bWVyaWNNaW5NYXg6IFwiJ3swfScgc2thbCB2w6ZyZSBsaWcgbWVkIGVsbGVyIHN0w7hycmUgZW5kIHsxfSBvZyBsaWcgbWVkIGVsbGVyIG1pbmRyZSBlbmQgezJ9XCIsXHJcbiAgICBudW1lcmljTWluOiBcIid7MH0nIHNrYWwgdsOmcmUgbGlnIG1lZCBlbGxlciBzdMO4cnJlIGVuZCB7MX1cIixcclxuICAgIG51bWVyaWNNYXg6IFwiJ3swfScgc2thbCB2w6ZyZSBsaWcgbWVkIGVsbGVyIG1pbmRyZSBlbmQgezF9XCIsXHJcbiAgICBpbnZhbGlkRW1haWw6IFwiQW5naXYgdmVubGlnc3QgZW4gZ3lsZGlnIGUtbWFpbCBhZHJlc3NlLlwiLFxyXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJGaWxzdMO4cnJlbHNlbiBtw6UgaWtrZSBvdmVyc3RpZ2UgezB9LlwiLFxyXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIkFuZ2l2IGVuIHbDpnJkaSBmb3IgZGl0IHZhbGdmcmllIHN2YXIuXCJcclxufTtcclxuXHJcbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZGFcIl0gPSBkYW5pc2hTdXJ2ZXlTdHJpbmdzO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2NhbGl6YXRpb24vZGFuaXNoLnRzXG4gKiovIiwiLy9DcmVhdGVkIG9uIGJlaGFsZiBodHRwczovL2dpdGh1Yi5jb20vRnJhbmsxM1xyXG5pbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcclxuXHJcbmV4cG9ydCB2YXIgZHV0Y2hTdXJ2ZXlTdHJpbmdzID0ge1xyXG4gICAgcGFnZVByZXZUZXh0OiBcIlZvcmlnZVwiLFxyXG4gICAgcGFnZU5leHRUZXh0OiBcIlZvbGdlbmRlXCIsXHJcbiAgICBjb21wbGV0ZVRleHQ6IFwiQWZzbHVpdGVuXCIsXHJcbiAgICBvdGhlckl0ZW1UZXh0OiBcIkFuZGVyZVwiLFxyXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIlBhZ2luYSB7MH0gdmFuIHsxfVwiLFxyXG4gICAgZW1wdHlTdXJ2ZXk6IFwiRXIgaXMgZ2VlbiB6aWNodGJhcmUgcGFnaW5hIG9mIHZyYWFnIGluIGRlemUgdnJhZ2VubGlqc3RcIixcclxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiQmVkYW5rdCBvbSBkZXplIHZyYWdlbmxpanN0IGluIHRlIHZ1bGxlblwiLFxyXG4gICAgbG9hZGluZ1N1cnZleTogXCJEZSB2cmFnZW5saWpzdCBpcyBhYW4gaGV0IGxhZGVuLi4uXCIsXHJcbiAgICBvcHRpb25zQ2FwdGlvbjogXCJLaWVzLi4uXCIsXHJcbiAgICByZXF1aXJlZEVycm9yOiBcIkdlbGlldmUgZWVuIGFudHdvb3JkIGluIHRlIHZ1bGxlblwiLFxyXG4gICAgbnVtZXJpY0Vycm9yOiBcIkhldCBhbnR3b29yZCBtb2V0IGVlbiBnZXRhbCB6aWpuXCIsXHJcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIkdlbGlldmUgbWluc3RlbiB7MH0ga2FyYWt0ZXJzIGluIHRlIHZ1bGxlbi5cIixcclxuICAgIG1pblNlbGVjdEVycm9yOiBcIkdlbGlldmUgbWluaW11bSB7MH0gYW50d29vcmRlbiB0ZSBzZWxlY3RlcmVuLlwiLFxyXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiR2VsaWV2ZSBuaWV0IG1lZXIgZGFuIHswfSBhbnR3b29yZGVuIHRlIHNlbGVjdGVyZW4uXCIsXHJcbiAgICBudW1lcmljTWluTWF4OiBcIlV3IGFudHdvb3JkICd7MH0nIG1vZXQgZ3JvdGVyIG9mIGdlbGlqayB6aWpuIGFhbiB7MX0gZW4ga2xlaW5lciBvZiBnZWxpamsgYWFuIHsyfVwiLFxyXG4gICAgbnVtZXJpY01pbjogXCJVdyBhbnR3b29yZCAnezB9JyBtb2V0IGdyb3RlciBvZiBnZWxpamsgemlqbiBhYW4gezF9XCIsXHJcbiAgICBudW1lcmljTWF4OiBcIlV3IGFudHdvb3JkICd7MH0nIG1vZXQgZ3JvdGVyIG9mIGdlbGlqayB6aWpuIGFhbiB7MX1cIixcclxuICAgIGludmFsaWRFbWFpbDogXCJHZWxpZXZlIGVlbiBnZWxkaWcgZS1tYWlsYWRyZXMgaW4gdGUgdnVsbGVuLlwiLFxyXG4gICAgZXhjZWVkTWF4U2l6ZTogXCJEZSBncm9vdHRlIHZhbiBoZXQgYmVzdGFuZCBtYWcgbmlldCBncm90ZXIgemlqbiBkYW4gezB9LlwiLFxyXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIkdlbGlldmUgaGV0IHZlbGQgJ0FuZGVyZScgaW4gdGUgdnVsbGVuXCJcclxufTtcclxuXHJcbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wibmxcIl0gPSBkdXRjaFN1cnZleVN0cmluZ3M7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi9kdXRjaC50c1xuICoqLyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHZhciBmaW5uaXNoU3VydmV5U3RyaW5ncyA9IHtcclxuICAgIHBhZ2VQcmV2VGV4dDogXCJFZGVsbGluZW5cIixcclxuICAgIHBhZ2VOZXh0VGV4dDogXCJTZXVyYWF2YVwiLFxyXG4gICAgY29tcGxldGVUZXh0OiBcIlZhbG1pc1wiLFxyXG4gICAgb3RoZXJJdGVtVGV4dDogXCJNdXUgKGt1dmFpbGUpXCIsXHJcbiAgICBwcm9ncmVzc1RleHQ6IFwiU2l2dSB7MH0vezF9XCIsXHJcbiAgICBlbXB0eVN1cnZleTogXCJUw6Rzc8OkIGt5c2VseXNzw6QgZWkgb2xlIHlodMOka8Okw6RuIG7DpGt5dmlsbMOkIG9sZXZhYSBzaXZ1YSB0YWkga3lzeW15c3TDpC5cIixcclxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiS2lpdG9zIGt5c2VseXluIHZhc3RhYW1pc2VzdGEhXCIsXHJcbiAgICBsb2FkaW5nU3VydmV5OiBcIkt5c2VsecOkIGxhZGF0YWFuIHBhbHZlbGltZWx0YS4uLlwiLFxyXG4gICAgb3B0aW9uc0NhcHRpb246IFwiVmFsaXRzZS4uLlwiLFxyXG4gICAgcmVxdWlyZWRFcnJvcjogXCJWYXN0YWEga3lzeW15a3NlZW4sIGtpaXRvcy5cIixcclxuICAgIG51bWVyaWNFcnJvcjogXCJBcnZvbiB0dWxlZSBvbGxhIG51bWVlcmluZW4uXCIsXHJcbiAgICB0ZXh0TWluTGVuZ3RoOiBcIk9sZSBoeXbDpCBqYSBzecO2dMOkIHbDpGhpbnTDpMOkbiB7MH0gbWVya2tpw6QuXCIsXHJcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJPbGUgaHl2w6QgamEgdmFsaXRzZSB2w6RoaW50w6TDpG4gezB9IHZhaWh0b2VodG9hLlwiLFxyXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiT2xlIGh5dsOkIGphIHZhbGl0c2UgZW5pbnTDpMOkbiB7MH0gdmFpaHRvZWh0b2EuXCIsXHJcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nIHTDpHl0eXkgb2xsYSBlbmVtbcOkbiB0YWkgeWh0w6Qgc3V1cmkga3VpbiB7MX0gamEgdsOkaGVtbcOkbiB0YWkgeWh0w6Qgc3V1cmkga3VpbiB7Mn1cIixcclxuICAgIG51bWVyaWNNaW46IFwiJ3swfScgdMOkeXR5eSBvbGxhIGVuZW1tw6RuIHRhaSB5aHTDpCBzdXVyaSBrdWluIHsxfVwiLFxyXG4gICAgbnVtZXJpY01heDogXCInezB9JyB0w6R5dHl5IG9sbGEgdsOkaGVtbcOkbiB0YWkgeWh0w6Qgc3V1cmkga3VpbiB7MX1cIixcclxuICAgIGludmFsaWRFbWFpbDogXCJTecO2dMOkIHZhbGlkaSBzw6Roa8O2cG9zdGlvc29pdGUuXCIsXHJcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiT2xlIGh5dsOkIGphIHN5w7Z0w6QgXFxcIk11dSAoa3V2YWlsZSlcXFwiXCJcclxufTtcclxuXHJcbnN1cnZleUxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZmlcIl0gPSBmaW5uaXNoU3VydmV5U3RyaW5ncztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9jYWxpemF0aW9uL2Zpbm5pc2gudHNcbiAqKi8iLCIvL0NyZWF0ZWQgb24gYmVoYWxmIGh0dHBzOi8vZ2l0aHViLmNvbS9GcmFuazEzXHJcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHZhciBmcmVuY2hTdXJ2ZXlTdHJpbmdzID0ge1xyXG4gICAgcGFnZVByZXZUZXh0OiBcIlByXFx1MDBlOWNcXHUwMGU5ZGVudFwiLFxyXG4gICAgcGFnZU5leHRUZXh0OiBcIlN1aXZhbnRcIixcclxuICAgIGNvbXBsZXRlVGV4dDogXCJUZXJtaW5lclwiLFxyXG4gICAgb3RoZXJJdGVtVGV4dDogXCJBdXRyZSAocHJcXHUwMGU5Y2lzZXIpXCIsXHJcbiAgICBwcm9ncmVzc1RleHQ6IFwiUGFnZSB7MH0gc3VyIHsxfVwiLFxyXG4gICAgZW1wdHlTdXJ2ZXk6IFwiSWwgbid5IGEgbmkgcGFnZSB2aXNpYmxlIG5pIHF1ZXN0aW9uIHZpc2libGUgZGFucyBjZSBxdWVzdGlvbm5haXJlXCIsXHJcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIk1lcmNpIGQnYXZvaXIgclxcdTAwZTlwb25kdSBhdSBxdWVzdGlvbm5haXJlIVwiLFxyXG4gICAgbG9hZGluZ1N1cnZleTogXCJMZSBxdWVzdGlvbm5haXJlIGVzdCBlbiBjb3VycyBkZSBjaGFyZ2VtZW50Li4uXCIsXHJcbiAgICBvcHRpb25zQ2FwdGlvbjogXCJDaG9pc2lzc2V6Li4uXCIsXHJcbiAgICByZXF1aXJlZEVycm9yOiBcIkxhIHJcXHUwMGU5cG9uc2UgXFx1MDBlMCBjZXR0ZSBxdWVzdGlvbiBlc3Qgb2JsaWdhdG9pcmUuXCIsXHJcbiAgICBudW1lcmljRXJyb3I6IFwiTGEgclxcdTAwZTlwb25zZSBkb2l0IFxcdTAwZWF0cmUgdW4gbm9tYnJlLlwiLFxyXG4gICAgdGV4dE1pbkxlbmd0aDogXCJNZXJjaSBkJ2VudHJlciBhdSBtb2lucyB7MH0gc3ltYm9sZXMuXCIsXHJcbiAgICBtaW5TZWxlY3RFcnJvcjogXCJNZXJjaSBkZSBzXFx1MDBlOWxlY3Rpb25uZXIgYXUgbW9pbnMgezB9clxcdTAwZTlwb25zZXMuXCIsXHJcbiAgICBtYXhTZWxlY3RFcnJvcjogXCJNZXJjaSBkZSBzXFx1MDBlOWxlY3Rpb25uZXIgYXUgcGx1cyB7MH1yXFx1MDBlOXBvbnNlcy5cIixcclxuICAgIG51bWVyaWNNaW5NYXg6IFwiVm90cmUgclxcdTAwZTlwb25zZSAnezB9JyBkb2l0IFxcdTAwZWF0cmVzdXBcXHUwMGU5cmlldXJlIG91IFxcdTAwZTlnYWxlIFxcdTAwZTAgezF9IGV0IGluZlxcdTAwZTlyaWV1cmUgb3VcXHUwMGU5Z2FsZSBcXHUwMGUwIHsyfVwiLFxyXG4gICAgbnVtZXJpY01pbjogXCJWb3RyZSByXFx1MDBlOXBvbnNlICd7MH0nIGRvaXQgXFx1MDBlYXRyZXN1cFxcdTAwZTlyaWV1cmUgb3UgXFx1MDBlOWdhbGUgXFx1MDBlMCB7MX1cIixcclxuICAgIG51bWVyaWNNYXg6IFwiVm90cmUgclxcdTAwZTlwb25zZSAnezB9JyBkb2l0IFxcdTAwZWF0cmVpbmZcXHUwMGU5cmlldXJlIG91IFxcdTAwZTlnYWxlIFxcdTAwZTAgezF9XCIsXHJcbiAgICBpbnZhbGlkRW1haWw6IFwiTWVyY2kgZCdlbnRyZXIgdW5lIGFkcmVzc2UgbWFpbCB2YWxpZGUuXCIsXHJcbiAgICBleGNlZWRNYXhTaXplOiBcIkxhIHRhaWxsZSBkdSBmaWNoaWVyIG5lIGRvaXQgcGFzIGV4Y1xcdTAwZTlkZXIgezB9LlwiLFxyXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcIk1lcmNpIGRlIHByXFx1MDBlOWNpc2VyIGxlIGNoYW1wICdBdXRyZScuXCJcclxufTtcclxuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJmclwiXSA9IGZyZW5jaFN1cnZleVN0cmluZ3M7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50c1xuICoqLyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHZhciBnZXJtYW5TdXJ2ZXlTdHJpbmdzID0ge1xyXG4gICAgcGFnZVByZXZUZXh0OiBcIlp1csO8Y2tcIixcclxuICAgIHBhZ2VOZXh0VGV4dDogXCJXZWl0ZXJcIixcclxuICAgIGNvbXBsZXRlVGV4dDogXCJGZXJ0aWdcIixcclxuICAgIHByb2dyZXNzVGV4dDogXCJTZWl0ZSB7MH0gdm9uIHsxfVwiLFxyXG4gICAgZW1wdHlTdXJ2ZXk6IFwiRXMgZ2lidCBrZWluZSBzaWNodGJhcmUgRnJhZ2UuXCIsXHJcbiAgICBjb21wbGV0aW5nU3VydmV5OiBcIlZpZWxlbiBEYW5rIGbDvHIgZGFzIEF1c2bDvGxsZW4gZGVzIEZyYWdlYm9nZW5zIVwiLFxyXG4gICAgbG9hZGluZ1N1cnZleTogXCJEZXIgRnJhZ2Vib2dlbiB3aXJkIHZvbSBTZXJ2ZXIgZ2VsYWRlbi4uLlwiLFxyXG4gICAgb3RoZXJJdGVtVGV4dDogXCJCZW51dHplcmRlZmluaWVydGUgQW50d29ydC4uLlwiLFxyXG4gICAgb3B0aW9uc0NhcHRpb246IFwiV8OkaGxlbi4uLlwiLFxyXG4gICAgcmVxdWlyZWRFcnJvcjogXCJCaXR0ZSBhbnR3b3J0ZW4gU2llIGF1ZiBkaWUgRnJhZ2UuXCIsXHJcbiAgICBudW1lcmljRXJyb3I6IFwiRGVyIFdlcnQgc29sbHRlIGVpbmUgWmFobCBzZWluLlwiLFxyXG4gICAgdGV4dE1pbkxlbmd0aDogXCJCaXR0ZSBnZWJlbiBTaWUgbWluZGVzdGVucyB7MH0gU3ltYm9sZS5cIixcclxuICAgIG1pblNlbGVjdEVycm9yOiBcIkJpdHRlIHfDpGhsZW4gU2llIG1pbmRlc3RlbnMgezB9IFZhcmlhbnRlbi5cIixcclxuICAgIG1heFNlbGVjdEVycm9yOiBcIkJpdHRlIHfDpGhsZW4gU2llIG5pY2h0IG1laHIgYWxzIHswfSBWYXJpYW50ZW4uXCIsXHJcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nIHNvbHRlIGdsZWljaCBvZGVyIGdyw7bDn2VyIHNlaW4gYWxzIHsxfSB1bmQgZ2xlaWNoIG9kZXIga2xlaW5lciBhbHMgezJ9XCIsXHJcbiAgICBudW1lcmljTWluOiBcIid7MH0nIHNvbHRlIGdsZWljaCBvZGVyIGdyw7bDn2VyIHNlaW4gYWxzIHsxfVwiLFxyXG4gICAgbnVtZXJpY01heDogXCInezB9JyBzb2x0ZSBnbGVpY2ggb2RlciBrbGVpbmVyIGFscyB7MX1cIixcclxuICAgIGludmFsaWRFbWFpbDogXCJCaXR0ZSBnZWJlbiBTaWUgZWluZSBnw7xsdGlnZSBFbWFpbC1BZHJlc3NlIGVpbi5cIixcclxuICAgIGV4Y2VlZE1heFNpemU6IFwiRGllIERhdGVpZ3LDtsOfZSBzb2xsIG5pY2h0IG1laHIgYWxzIHswfS5cIixcclxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJCaXR0ZSBnZWJlbiBTaWUgZWluZW4gV2VydCBmw7xyIElocmUgYmVudXR6ZXJkZWZpbmllcnRlIEFudHdvcnQgZWluLlwiXHJcbn07XHJcblxyXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcImRlXCJdID0gZ2VybWFuU3VydmV5U3RyaW5ncztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9jYWxpemF0aW9uL2dlcm1hbi50c1xuICoqLyIsIi8vQ3JlYXRlZCBieSBodHRwczovL2dpdGh1Yi5jb20vYWdlbG9zcGFuYWdpb3Rha2lzXHJcbmltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHZhciBncmVla1N1cnZleVN0cmluZ3MgPSB7XHJcbiAgICBwYWdlUHJldlRleHQ6IFwizqDPgc6/zrfOs86/z43OvM61zr3Ov1wiLFxyXG4gICAgcGFnZU5leHRUZXh0OiBcIs6Vz4DPjM68zrXOvc6/XCIsXHJcbiAgICBjb21wbGV0ZVRleHQ6IFwizp/Ou86/zrrOu86uz4HPic+DzrdcIixcclxuICAgIG90aGVySXRlbVRleHQ6IFwizobOu867zr8gKM+AzrHPgc6xzrrOsc67z44gzrTOuc61z4XOus+BzrnOvc6vz4PPhM61KVwiLFxyXG4gICAgcHJvZ3Jlc3NUZXh0OiBcIs6jzrXOu86vzrTOsSB7MH0gzrHPgM+MIHsxfVwiLFxyXG4gICAgZW1wdHlTdXJ2ZXk6IFwizpTOtc69IM+Fz4DOrM+Bz4fOtc65IM66zrHOvM6vzrEgzr/Pgc6xz4TOriDPg861zrvOr860zrEgzq4gzr/Pgc6xz4TOriDOtc+Bz47PhM63z4POtyDPg861IM6xz4XPhM+MIM+Ezr8gzrXPgc+Jz4TOt868zrHPhM6/zrvPjM6zzrnOvy5cIixcclxuICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwizpXPhc+HzrHPgc65z4PPhM6/z43OvM61IM6zzrnOsSDPhM63zr0gz4PPhc68z4DOu86uz4HPic+DzrcgzrHPhc+Ezr/PhSDPhM6/z4UgzrXPgc+Jz4TOt868zrHPhM6/zrvOv86zzq/Ov8+FIVwiLFxyXG4gICAgbG9hZGluZ1N1cnZleTogXCLOpM6/IM61z4HPic+EzrfOvM6xz4TOv867z4zOs865zr8gz4bOv8+Bz4TPjs69zrXPhM6xzrkgzrHPgM6/IM+Ezr8gzrTOuc6xzrrOv868zrnPg8+Ezq4uLi5cIixcclxuICAgIG9wdGlvbnNDYXB0aW9uOiBcIs6Vz4DOuc67zq3Ovs+EzrUuLi5cIixcclxuICAgIHJlcXVpcmVkRXJyb3I6IFwizqDOsc+BzrHOus6xzrvPjiDOsc+AzrHOvc+Ezq7Pg8+EzrUgz4PPhM63zr0gzrXPgc+Oz4TOt8+DzrcuXCIsXHJcbiAgICByZXF1aXJlZEluQWxsUm93c0Vycm9yOiBcIs6gzrHPgc6xzrrOsc67z44gzrHPgM6xzr3PhM6uz4PPhM61IM+Dz4TOuc+CIM61z4HPic+Ezq7Pg861zrnPgiDPg861IM+MzrvOtc+CIM+EzrnPgiDOs8+BzrHOvM68zq3Pgi5cIixcclxuICAgIG51bWVyaWNFcnJvcjogXCLOlyDPhM65zrzOriDPgM+Bzq3PgM61zrkgzr3OsSDOtc6vzr3Osc65IM6xz4HOuc64zrzOuc+EzrnOus6uLlwiLFxyXG4gICAgdGV4dE1pbkxlbmd0aDogXCLOoM6xz4HOsc66zrHOu8+OIM+Dz4XOvM+AzrvOt8+Bz47Pg8+EzrUgz4TOv8+FzrvOrM+HzrnPg8+Ezr/OvSB7MH0gz4PPjc68zrLOv867zrEuXCIsXHJcbiAgICBtaW5Sb3dDb3VudEVycm9yOiBcIs6gzrHPgc6xzrrOsc67z44gz4PPhc68z4DOu863z4HPjs+Dz4TOtSDPhM6/z4XOu86sz4fOuc+Dz4TOv869IHswfSDOs8+BzrHOvM68zq3Pgi5cIixcclxuICAgIG1pblNlbGVjdEVycm9yOiBcIs6gzrHPgc6xzrrOsc67z44gzrXPgM65zrvOrc6+z4TOtSDPhM6/z4XOu86sz4fOuc+Dz4TOv869IHswfSDPgM6xz4HOsc67zrvOsc6zzq3Pgi5cIixcclxuICAgIG1heFNlbGVjdEVycm9yOiBcIs6gzrHPgc6xzrrOsc67z44gzrXPgM65zrvOrc6+z4TOtSDPjM+Hzrkgz4DOsc+BzrHPgM6szr3PiSDOsc+Azr8gezB9IM+AzrHPgc6xzrvOu86xzrPOrc+CLlwiLFxyXG4gICAgbnVtZXJpY01pbk1heDogXCLOpM6/ICd7MH0nIM64zrEgz4DPgc6tz4DOtc65IM69zrEgzrXOr869zrHOuSDOr8+Dzr8gzq4gzrzOtc6zzrHOu8+Nz4TOtc+Bzr8gzrHPgM6/IM+Ezr8gezF9IM66zrHOuSDOr8+Dzr8gzq4gzrzOuc66z4HPjM+EzrXPgc6/IM6xz4DOvyDPhM6/IHsyfVwiLFxyXG4gICAgbnVtZXJpY01pbjogXCLOpM6/ICd7MH0nIM+Az4HOrc+AzrXOuSDOvc6xIM61zq/Ovc6xzrkgzrzOtc6zzrHOu8+Nz4TOtc+Bzr8gzq4gzrnPg86/IM68zrUgz4TOvyB7MX1cIixcclxuICAgIG51bWVyaWNNYXg6IFwizqTOvyAnezB9JyDPgM+Bzq3PgM61zrkgzr3OsSDOtc6vzr3Osc65IM68zrnOus+Bz4zPhM61z4HOvyDOriDOr8+Dzr8gzrHPgM6/IM+Ezr8gezF9XCIsXHJcbiAgICBpbnZhbGlkRW1haWw6IFwizqDOsc+BzrHOus6xzrvPjiDOtM+Oz4PPhM61IM68zrnOsSDOsc+Azr/OtM61zrrPhM6uIM60zrnOtc+NzrjPhc69z4POtyBlLW1haWwuXCIsXHJcbiAgICB1cmxSZXF1ZXN0RXJyb3I6IFwizpcgzrHOr8+EzrfPg863IM61z4DOrc+Dz4TPgc61z4jOtSDPg8+GzqzOu868zrEgJ3swfScuIHsxfVwiLFxyXG4gICAgdXJsR2V0Q2hvaWNlc0Vycm9yOiBcIs6XIM6xzq/PhM63z4POtyDOtc+Azq3Pg8+Ez4HOtc+IzrUgzrrOtc69zqwgzrTOtc60zr/OvM6tzr3OsSDOriDOtyDOuc60z4zPhM63z4TOsSAnzrzOv869zr/PgM6sz4TOuS9wYXRoJyDOtc6vzr3Osc65IM61z4PPhs6xzrvOrc68zq3Ovc63XCIsXHJcbiAgICBleGNlZWRNYXhTaXplOiBcIs6kzr8gzrzOrc6zzrXOuM6/z4IgzrTOtc69IM68z4DOv8+BzrXOryDOvc6xIM+Fz4DOtc+BzrLOrc69zrXOuSDPhM6xIHswfS5cIixcclxuICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCLOoM6xz4HOsc66zrHOu8+OIM+Dz4XOvM+AzrvOt8+Bz47Pg8+EzrUgz4TOt869IM+EzrnOvM6uIM6zzrnOsSDPhM6/IM+AzrXOtM6vzr8gJ86szrvOu86/Jy5cIixcclxuICAgIHVwbG9hZGluZ0ZpbGU6IFwizqTOvyDOsc+Bz4fOtc6vzr8gz4POsc+CIM6xzr3Otc6yzrHOr869zrXOuS4gzqDOsc+BzrHOus6xzrvPjiDPgM61z4HOuc68zq3Ovc61z4TOtSDOus6xz4DOv865zrEgzrTOtc+Fz4TOtc+Bz4zOu861z4DPhM6xIM66zrHOuSDOtM6/zrrOuc68zqzPg8+EzrUgzr7Osc69zqwuXCIsXHJcbiAgICBhZGRSb3c6IFwizqDPgc6/z4POuM6uzrrOtyDOs8+BzrHOvM68zq7PglwiLFxyXG4gICAgcmVtb3ZlUm93OiBcIs6Rz4bOsc6vz4HOtc+DzrdcIlxyXG59O1xyXG5zdXJ2ZXlMb2NhbGl6YXRpb24ubG9jYWxlc1tcImdyXCJdID0gZ3JlZWtTdXJ2ZXlTdHJpbmdzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi9ncmVlay50c1xuICoqLyIsImltcG9ydCB7c3VydmV5TG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vc3VydmV5U3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHZhciBwb2xpc2hTdXJ2ZXlTdHJpbmdzID0ge1xyXG4gICAgcGFnZVByZXZUZXh0OiBcIldzdGVjelwiLFxyXG4gICAgcGFnZU5leHRUZXh0OiBcIkRhbGVqXCIsXHJcbiAgICBjb21wbGV0ZVRleHQ6IFwiR290b3dlXCIsXHJcbiAgICBwcm9ncmVzc1RleHQ6IFwiU3Ryb25hIHswfSB6IHsxfVwiLFxyXG4gICAgZW1wdHlTdXJ2ZXk6IFwiTmllIG1hIHdpZG9jem55Y2ggcHl0YcWELlwiLFxyXG4gICAgY29tcGxldGluZ1N1cnZleTogXCJEemnEmWt1amVteSB6YSB3eXBlxYJuaWVuaWUgYW5raWV0eSFcIixcclxuICAgIGxvYWRpbmdTdXJ2ZXk6IFwiVHJ3YSB3Y3p5dHl3YW5pZSBhbmtpZXR5Li4uXCIsXHJcbiAgICBvdGhlckl0ZW1UZXh0OiBcIklubmEgb2Rwb3dpZWTFui4uLlwiLFxyXG4gICAgb3B0aW9uc0NhcHRpb246IFwiV3liaWVyei4uLlwiLFxyXG4gICAgcmVxdWlyZWRFcnJvcjogXCJQcm9zesSZIG9kcG93aWVkemllxIcgbmEgdG8gcHl0YW5pZS5cIixcclxuICAgIG51bWVyaWNFcnJvcjogXCJXIHR5bSBwb2x1IG1vxbxuYSB3cGlzYcSHIHR5bGtvIGxpY3pieS5cIixcclxuICAgIHRleHRNaW5MZW5ndGg6IFwiUHJvc3rEmSB3cGlzYcSHIGNvIG5ham1uaWVqIHswfSB6bmFrw7N3LlwiLFxyXG4gICAgbWluU2VsZWN0RXJyb3I6IFwiUHJvc3rEmSB3eWJyYcSHIGNvIG5ham1uaWVqIHswfSBwb3p5Y2ppLlwiLFxyXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwiUHJvc3rEmSB3eWJyYcSHIG5pZSB3acSZY2VqIG5pxbwgezB9IHBvenljamkuXCIsXHJcbiAgICBudW1lcmljTWluTWF4OiBcIk9kcG93aWVkxbogJ3swfScgcG93aW5uYSBiecSHIHdpxJlrc3phIGx1YiByw7N3bmEgezF9IG9yYXogbW5pZWpzemEgbHViIHLDs3duYSB7Mn1cIixcclxuICAgIG51bWVyaWNNaW46IFwiT2Rwb3dpZWTFuiAnezB9JyBwb3dpbm5hIGJ5xIcgd2nEmWtzemEgbHViIHLDs3duYSB7MX1cIixcclxuICAgIG51bWVyaWNNYXg6IFwiT2Rwb3dpZWTFuiAnezB9JyBwb3dpbm5hIGJ5xIcgbW5pZWpzemEgbHViIHLDs3duYSB7MX1cIixcclxuICAgIGludmFsaWRFbWFpbDogXCJQcm9zesSZIHBvZGHEhyBwcmF3aWTFgm93eSBhZHJlcyBlbWFpbC5cIixcclxuICAgIGV4Y2VlZE1heFNpemU6IFwiUm96bWlhciBwcnplc8WCYW5lZ28gcGxpa3UgbmllIG1vxbxlIHByemVrcmFjemHEhyB7MH0uXCIsXHJcbiAgICBvdGhlclJlcXVpcmVkRXJyb3I6IFwiUHJvc3rEmSBwb2RhxIcgaW5uxIUgb2Rwb3dpZWTFui5cIlxyXG59O1xyXG5cclxuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJwbFwiXSA9IHBvbGlzaFN1cnZleVN0cmluZ3M7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi9wb2xpc2gudHNcbiAqKi8iLCJpbXBvcnQge3N1cnZleUxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL3N1cnZleVN0cmluZ3NcIjtcclxuXHJcbmV4cG9ydCB2YXIgcnVzc2lhblN1cnZleVN0cmluZ3MgPSB7XHJcbiAgICBwYWdlUHJldlRleHQ6IFwi0J3QsNC30LDQtFwiLFxyXG4gICAgcGFnZU5leHRUZXh0OiBcItCU0LDQu9C10LVcIixcclxuICAgIGNvbXBsZXRlVGV4dDogXCLQk9C+0YLQvtCy0L5cIixcclxuICAgIHByb2dyZXNzVGV4dDogXCLQodGC0YDQsNC90LjRhtCwIHswfSDQuNC3IHsxfVwiLFxyXG4gICAgZW1wdHlTdXJ2ZXk6IFwi0J3QtdGCINC90Lgg0L7QtNC90L7Qs9C+INCy0L7Qv9GA0L7RgdCwLlwiLFxyXG4gICAgY29tcGxldGluZ1N1cnZleTogXCLQkdC70LDQs9C+0LTQsNGA0LjQvCDQktCw0YEg0LfQsCDQt9Cw0L/QvtC70L3QtdC90LjQtSDQsNC90LrQtdGC0YshXCIsXHJcbiAgICBsb2FkaW5nU3VydmV5OiBcItCX0LDQs9GA0YPQt9C60LAg0YEg0YHQtdGA0LLQtdGA0LAuLi5cIixcclxuICAgIG90aGVySXRlbVRleHQ6IFwi0JTRgNGD0LPQvtC1ICjQv9C+0LbQsNC70YPQudGB0YLQsCwg0L7Qv9C40YjQuNGC0LUpXCIsXHJcbiAgICBvcHRpb25zQ2FwdGlvbjogXCLQktGL0LHRgNCw0YLRjC4uLlwiLFxyXG4gICAgcmVxdWlyZWRFcnJvcjogXCLQn9C+0LbQsNC70YPQudGB0YLQsCwg0L7RgtCy0LXRgtGM0YLQtSDQvdCwINCy0L7Qv9GA0L7RgS5cIixcclxuICAgIG51bWVyaWNFcnJvcjogXCLQntGC0LLQtdGCINC00L7Qu9C20LXQvSDQsdGL0YLRjCDRh9C40YHQu9C+0LwuXCIsXHJcbiAgICB0ZXh0TWluTGVuZ3RoOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRhdC+0YLRjyDQsdGLIHswfSDRgdC40LzQstC+0LvQvtCyLlwiLFxyXG4gICAgbWluU2VsZWN0RXJyb3I6IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0YvQsdC10YDQuNGC0LUg0YXQvtGC0Y8g0LHRiyB7MH0g0LLQsNGA0LjQsNC90YLQvtCyLlwiLFxyXG4gICAgbWF4U2VsZWN0RXJyb3I6IFwi0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0YvQsdC10YDQuNGC0LUg0L3QtSDQsdC+0LvQtdC1IHswfSDQstCw0YDQuNCw0L3RgtC+0LIuXCIsXHJcbiAgICBudW1lcmljTWluTWF4OiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INCx0L7Qu9GM0YjQtSwg0YfQtdC8IHsxfSwg0Lgg0YDQsNCy0L3Ri9C8INC40LvQuCDQvNC10L3RjNGI0LUsINGH0LXQvCB7Mn1cIixcclxuICAgIG51bWVyaWNNaW46IFwiJ3swfScg0LTQvtC70LbQvdC+INCx0YvRgtGMINGA0LDQstC90YvQvCDQuNC70Lgg0LHQvtC70YzRiNC1LCDRh9C10LwgezF9XCIsXHJcbiAgICBudW1lcmljTWF4OiBcIid7MH0nINC00L7Qu9C20L3QviDQsdGL0YLRjCDRgNCw0LLQvdGL0Lwg0LjQu9C4INC80LXQvdGM0YjQtSwg0YfQtdC8IHsxfVwiLFxyXG4gICAgaW52YWxpZEVtYWlsOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3Ri9C5INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLLlwiLFxyXG4gICAgb3RoZXJSZXF1aXJlZEVycm9yOiBcItCf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQtNCw0L3QvdGL0LUg0LIg0L/QvtC70LUgXFxcItCU0YDRg9Cz0L7QtVxcXCJcIlxyXG59O1xyXG5cclxuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJydVwiXSA9IHJ1c3NpYW5TdXJ2ZXlTdHJpbmdzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi9ydXNzaWFuLnRzXG4gKiovIiwiaW1wb3J0IHtzdXJ2ZXlMb2NhbGl6YXRpb259IGZyb20gXCIuLi9zdXJ2ZXlTdHJpbmdzXCI7XHJcblxyXG5leHBvcnQgdmFyIHR1cmtpc2hTdXJ2ZXlTdHJpbmdzID0ge1xyXG4gICAgICAgIHBhZ2VQcmV2VGV4dDogXCJHZXJpXCIsXHJcbiAgICAgICAgcGFnZU5leHRUZXh0OiBcIsSwbGVyaVwiLFxyXG4gICAgICAgIGNvbXBsZXRlVGV4dDogXCJBbmtldGkgVGFtYW1sYVwiLFxyXG4gICAgICAgIG90aGVySXRlbVRleHQ6IFwiRGnEn2VyIChhw6fEsWtsYXnEsW7EsXopXCIsXHJcbiAgICAgICAgcHJvZ3Jlc3NUZXh0OiBcIlNheWZhIHswfSAvIHsxfVwiLFxyXG4gICAgICAgIGVtcHR5U3VydmV5OiBcIkFua2V0dGUgZ8O2csO8bnTDvGxlbmVjZWsgc2F5ZmEgeWEgZGEgc29ydSBtZXZjdXQgZGXEn2lsLlwiLFxyXG4gICAgICAgIGNvbXBsZXRpbmdTdXJ2ZXk6IFwiQW5rZXRpbWl6aSB0YW1hbWxhZMSxxJ/EsW7EsXogacOnaW4gdGXFn2Vra8O8ciBlZGVyaXouXCIsXHJcbiAgICAgICAgbG9hZGluZ1N1cnZleTogXCJBbmtldCBzdW51Y3VkYW4gecO8a2xlbml5b3IgLi4uXCIsXHJcbiAgICAgICAgb3B0aW9uc0NhcHRpb246IFwiU2XDp2luaXogLi4uXCIsXHJcbiAgICAgICAgcmVxdWlyZWRFcnJvcjogXCJMw7x0ZmVuIHNvcnV5YSBjZXZhcCB2ZXJpbml6XCIsXHJcbiAgICAgICAgbnVtZXJpY0Vycm9yOiBcIkdpcmlsZW4gZGXEn2VyIG51bWVyaWsgb2xtYWzEsWTEsXJcIixcclxuICAgICAgICB0ZXh0TWluTGVuZ3RoOiBcIkVuIGF6IHswfSBzZW1ib2wgZ2lyaW5pei5cIixcclxuICAgICAgICBtaW5Sb3dDb3VudEVycm9yOiBcIkzDvHRmZW4gZW4gYXogezB9IHNhdMSxcsSxIGRvbGR1cnVuLlwiLFxyXG4gICAgICAgIG1pblNlbGVjdEVycm9yOiBcIkzDvHRmZW4gZW4gYXogezB9IHNlw6dlbmXEn2kgc2XDp2luaXouXCIsXHJcbiAgICAgICAgbWF4U2VsZWN0RXJyb3I6IFwiTMO8dGZlbiB7MH0gYWRldHRlbiBmYXpsYSBzZcOnbWV5aW5pei5cIixcclxuICAgICAgICBudW1lcmljTWluTWF4OiBcIlRoZSAnezB9JyBzaG91bGQgYmUgZXF1YWwgb3IgbW9yZSB0aGFuIHsxfSBhbmQgZXF1YWwgb3IgbGVzcyB0aGFuIHsyfVwiLFxyXG4gICAgICAgIG51bWVyaWNNaW46IFwiJ3swfScgZGXEn2VyaSB7MX0gZGXEn2VyaW5lIGXFn2l0IHZleWEgYsO8ecO8ayBvbG1hbMSxZMSxclwiLFxyXG4gICAgICAgIG51bWVyaWNNYXg6IFwiJ3swfScgZGXEn2VyaSB7MX0gZGXEn2VyaW5lIGXFn2l0IHlhIGRhIGvDvMOnw7xrIG9sbWFsxLFkxLFyLlwiLFxyXG4gICAgICAgIGludmFsaWRFbWFpbDogXCJMw7x0ZmVuIGdlw6dlcmxpIGJpciBlcG9zdGEgYWRyZXNpIGdpcmluaXouXCIsXHJcbiAgICAgICAgdXJsUmVxdWVzdEVycm9yOiBcIlRhbGViaSDFn3UgaGF0YXnEsSBkw7ZuZMO8ICd7MH0nLiB7MX1cIixcclxuICAgICAgICB1cmxHZXRDaG9pY2VzRXJyb3I6IFwiVGFsZXAgaGVyaGFuZ2kgYmlyIHZlcmkgZMO2bm1lZGkgeWEgZGEgJ3BhdGgnIMO2emVsbGnEn2kgaGF0YWzEsS5cIixcclxuICAgICAgICBleGNlZWRNYXhTaXplOiBcIkRvc3lhIGJveXV0dSB7MH0gZGXEn2VyaW5pIGdlw6dlbWV6LlwiLFxyXG4gICAgICAgIG90aGVyUmVxdWlyZWRFcnJvcjogXCJMw7x0ZmVuIGRpxJ9lciBkZcSfZXJsZXJpIGdpcmluaXouXCIsXHJcbiAgICAgICAgdXBsb2FkaW5nRmlsZTogXCJEb3N5YW7EsXogecO8a2xlbml5b3IuIEzDnHRmZW4gYmlya2HDpyBzYW5peWUgYmVrbGV5aW4gdmUgdGVrcmFyIGRlbmV5aW4uXCIsXHJcbiAgICAgICAgYWRkUm93OiBcIlNhdMSxciBFa2xlXCIsXHJcbiAgICAgICAgcmVtb3ZlUm93OiBcIkthbGTEsXJcIlxyXG59O1xyXG5cclxuc3VydmV5TG9jYWxpemF0aW9uLmxvY2FsZXNbXCJ0clwiXSA9IHR1cmtpc2hTdXJ2ZXlTdHJpbmdzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvY2FsaXphdGlvbi90dXJraXNoLnRzXG4gKiovIiwiaW1wb3J0ICcuLi8uLi9kZWZhdWx0Q3NzL2Nzc2Jvb3RzdHJhcCc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZW50cmllcy9jaHVua3MvY3NzRnJhbWV3b3Jrcy50c1xuICoqLyIsImltcG9ydCB7c3VydmV5Q3NzfSBmcm9tIFwiLi9jc3NzdGFuZGFyZFwiO1xyXG5cclxuZXhwb3J0IHZhciBkZWZhdWx0Qm9vdHN0cmFwQ3NzID0ge1xyXG4gICAgcm9vdDogXCJcIixcclxuICAgIGhlYWRlcjogXCJwYW5lbC1oZWFkaW5nXCIsXHJcbiAgICBib2R5OiBcInBhbmVsLWJvZHlcIixcclxuICAgIGZvb3RlcjogXCJwYW5lbC1mb290ZXJcIixcclxuICAgIG5hdmlnYXRpb25CdXR0b246IFwiXCIsIG5hdmlnYXRpb246IHsgY29tcGxldGU6IFwiXCIsIHByZXY6IFwiXCIsIG5leHQ6IFwiXCIgfSxcclxuICAgIHByb2dyZXNzOiBcInByb2dyZXNzIGNlbnRlci1ibG9ja1wiLCBwcm9ncmVzc0JhcjogXCJwcm9ncmVzcy1iYXJcIixcclxuICAgIHBhZ2VUaXRsZTogXCJcIixcclxuICAgIHJvdzogXCJcIixcclxuICAgIHF1ZXN0aW9uOiB7IHJvb3Q6IFwiXCIsIHRpdGxlOiBcIlwiLCBjb21tZW50OiBcImZvcm0tY29udHJvbFwiLCBpbmRlbnQ6IDIwIH0sXHJcbiAgICBlcnJvcjogeyByb290OiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCBpY29uOiBcImdseXBoaWNvbiBnbHlwaGljb24tZXhjbGFtYXRpb24tc2lnblwiLCBpdGVtOiBcIlwiIH0sXHJcblxyXG4gICAgY2hlY2tib3g6IHsgcm9vdDogXCJmb3JtLWlubGluZVwiLCBpdGVtOiBcImNoZWNrYm94XCIsIG90aGVyOiBcIlwiIH0sXHJcbiAgICBjb21tZW50OiBcImZvcm0tY29udHJvbFwiLFxyXG4gICAgZHJvcGRvd246IFwiZm9ybS1jb250cm9sXCIsXHJcbiAgICBtYXRyaXg6IHsgcm9vdDogXCJ0YWJsZVwiIH0sXHJcbiAgICBtYXRyaXhkcm9wZG93bjogeyByb290OiBcInRhYmxlXCIgfSxcclxuICAgIG1hdHJpeGR5bmFtaWM6IHsgcm9vdDogXCJ0YWJsZVwiLCBidXR0b246IFwiYnV0dG9uXCIgfSxcclxuICAgIG11bHRpcGxldGV4dDogeyByb290OiBcInRhYmxlXCIsIGl0ZW1UaXRsZTogXCJcIiwgaXRlbVZhbHVlOiBcImZvcm0tY29udHJvbFwiIH0sXHJcbiAgICByYWRpb2dyb3VwOiB7IHJvb3Q6IFwiZm9ybS1pbmxpbmVcIiwgaXRlbTogXCJyYWRpb1wiLCBvdGhlcjogXCJcIiB9LFxyXG4gICAgcmF0aW5nOiB7IHJvb3Q6IFwiYnRuLWdyb3VwXCIsIGl0ZW06IFwiYnRuIGJ0bi1kZWZhdWx0XCIgfSxcclxuICAgIHRleHQ6IFwiZm9ybS1jb250cm9sXCIsXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgICByb290OiBcIm1vZGFsLWNvbnRlbnRcIiwgYm9keTogXCJtb2RhbC1ib2R5XCIsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHJvb3Q6IFwibW9kYWwtaGVhZGVyIHBhbmVsLXRpdGxlXCIsIHRpdGxlOiBcInB1bGwtbGVmdFwiLCBidXR0b246IFwiZ2x5cGhpY29uIHB1bGwtcmlnaHRcIixcclxuICAgICAgICAgICAgYnV0dG9uRXhwYW5kZWQ6IFwiZ2x5cGhpY29uIHB1bGwtcmlnaHQgZ2x5cGhpY29uLWNoZXZyb24tdXBcIiwgYnV0dG9uQ29sbGFwc2VkOiBcImdseXBoaWNvbiBwdWxsLXJpZ2h0IGdseXBoaWNvbi1jaGV2cm9uLWRvd25cIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuc3VydmV5Q3NzW1wiYm9vdHN0cmFwXCJdID0gZGVmYXVsdEJvb3RzdHJhcENzcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9kZWZhdWx0Q3NzL2Nzc2Jvb3RzdHJhcC50c1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=