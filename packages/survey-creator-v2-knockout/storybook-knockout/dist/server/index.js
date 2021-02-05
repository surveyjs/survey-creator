"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("@storybook/core/server");
var options_1 = __importDefault(require("./options"));
server_1.buildDev(options_1.default);
