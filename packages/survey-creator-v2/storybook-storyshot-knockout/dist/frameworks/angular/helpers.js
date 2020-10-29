"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModuleData = void 0;
/* eslint-disable import/no-extraneous-dependencies */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_token_1 = require("./app.token");
var getModuleMeta = function (declarations, entryComponents, bootstrap, data, moduleMetadata) {
    return {
        declarations: __spreadArrays(declarations, (moduleMetadata.declarations || [])),
        imports: __spreadArrays([platform_browser_1.BrowserModule, forms_1.FormsModule], (moduleMetadata.imports || [])),
        providers: __spreadArrays([{ provide: app_token_1.STORY, useValue: __assign({}, data) }], (moduleMetadata.providers || [])),
        entryComponents: __spreadArrays(entryComponents, (moduleMetadata.entryComponents || [])),
        schemas: __spreadArrays((moduleMetadata.schemas || [])),
        bootstrap: __spreadArrays(bootstrap),
    };
};
var createComponentFromTemplate = function (template) {
    var componentClass = /** @class */ (function () {
        function DynamicComponent() {
        }
        return DynamicComponent;
    }());
    return core_1.Component({
        template: template,
    })(componentClass);
};
var extractNgModuleMetadata = function (importItem) {
    var target = importItem && importItem.ngModule ? importItem.ngModule : importItem;
    var decoratorKey = '__annotations__';
    var decorators = Reflect &&
        Reflect.getOwnPropertyDescriptor &&
        Reflect.getOwnPropertyDescriptor(target, decoratorKey)
        ? Reflect.getOwnPropertyDescriptor(target, decoratorKey).value
        : target[decoratorKey];
    if (!decorators || decorators.length === 0) {
        return null;
    }
    var ngModuleDecorator = decorators.find(function (decorator) { return decorator instanceof core_1.NgModule; });
    if (!ngModuleDecorator) {
        return null;
    }
    return ngModuleDecorator;
};
var getExistenceOfComponentInModules = function (component, declarations, imports) {
    if (declarations && declarations.some(function (declaration) { return declaration === component; })) {
        // Found component in declarations array
        return true;
    }
    if (!imports) {
        return false;
    }
    return imports.some(function (importItem) {
        var extractedNgModuleMetadata = extractNgModuleMetadata(importItem);
        if (!extractedNgModuleMetadata) {
            // Not an NgModule
            return false;
        }
        return getExistenceOfComponentInModules(component, extractedNgModuleMetadata.declarations, extractedNgModuleMetadata.imports);
    });
};
exports.initModuleData = function (storyObj) {
    var component = storyObj.component, template = storyObj.template, props = storyObj.props, _a = storyObj.moduleMetadata, moduleMetadata = _a === void 0 ? {} : _a;
    var isCreatingComponentFromTemplate = Boolean(template);
    var AnnotatedComponent = isCreatingComponentFromTemplate
        ? createComponentFromTemplate(template)
        : component;
    var componentRequiresDeclaration = isCreatingComponentFromTemplate ||
        !getExistenceOfComponentInModules(component, moduleMetadata.declarations, moduleMetadata.imports);
    var componentDeclarations = componentRequiresDeclaration
        ? [app_component_1.AppComponent, AnnotatedComponent]
        : [app_component_1.AppComponent];
    var story = {
        component: AnnotatedComponent,
        props: props,
    };
    var moduleMeta = getModuleMeta(componentDeclarations, [AnnotatedComponent], [app_component_1.AppComponent], story, moduleMetadata);
    return {
        AppComponent: app_component_1.AppComponent,
        moduleMeta: moduleMeta,
    };
};
