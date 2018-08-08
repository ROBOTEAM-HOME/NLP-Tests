"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
//import config from '../../config'
//import {json} from 'body-parser'
var requestParamsPost = request.defaults({
    //baseUrl: `http://localhost:${config.HTTP_PORT}`,
    method: 'POST',
    json: true,
});
var requestParamsGet = request.defaults({
    //baseUrl: `http://localhost:${config.HTTP_PORT}`,
    method: 'GET',
    json: true,
});
/**
 * Posts the data using requests module default, json is expected as result
 * you may provide extended options that are of CoreOption class
 * @param url - The API endoint to post to.
 * @param jsonBody - the object that will be delivered as of mime application/json
 * @param optionsExtend - extended options as
 * @returns {Promise<T>}
 */
var _post = function (url, jsonBody, optionsExtend, method) {
    if (method === void 0) { method = 'post'; }
    return new Promise(function (resolve, reject) {
        var options = __assign({ body: __assign({}, jsonBody) }, optionsExtend);
        var requestParams = (method === 'post') ? requestParamsPost : requestParamsGet;
        requestParams(url, options, function (error, response, body) {
            if (error) {
                reject(error);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(response.statusCode + " " + response.statusMessage));
                return;
            }
            resolve(body);
        });
    });
};
// https://docs.nexmo.com/verify/api-reference
exports.connect = function (endpoint, jsonBody, extraOptions, method) {
    if (extraOptions === void 0) { extraOptions = null; }
    if (method === void 0) { method = 'post'; }
    return _post(endpoint, jsonBody, extraOptions, method);
};
