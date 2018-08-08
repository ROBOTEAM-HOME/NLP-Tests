"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pino = require("pino");
var config_1 = require("../../config");
//const getNames = (list: string) => (list || '').split(';').map((name: string) => name.trim().toLowerCase())
// tslint:disable-next-line
var version = require('../../../package.json').version;
exports.createLogger = function (name) {
    return pino({ name: name }).child({ 'env': config_1.default.ENV, 'version': version });
};
