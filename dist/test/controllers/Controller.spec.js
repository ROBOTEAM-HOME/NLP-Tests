'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-invalid-this */
/* tslint:disable:no-function-expression */
/* tslint:disable:chai-vague-errors */
/**
 * Registering a user to either robots or user registry
 * this data is used to auth user when connecting to mqtt broker
 * following these flows:
 * - connect
 * -
 */
const express = require('express');
require("mocha");
const config_1 = require("../config");
const HttpServer_1 = require("../../app/servers/HttpServer");
const ControllerRouter_1 = require("../../app/controllers/ControllerRouter");
const json_request_1 = require("../../app/utils/json-request");
const chai_1 = require("chai");
const conf = require("./Conf");
const equal = require("fast-deep-equal");
const request = require("request");
const testingHttpPort = config_1.default.TEST_HTTP_PORT;
const httpServerSettings = {
    port: testingHttpPort,
    healthcheck_port: config_1.default.TEST_HEALTHCHECK_PORT,
};
const protocol = 'https:';
const api_version = '/api/v1';
const url = `${protocol}//api.dialogflow.com/v1/query?v=20150910`;
const contextsUrl = `${protocol}//api.dialogflow.com/v1/contexts?v=20170712&sessionId=`;
const auth = { 'bearer': 'b9e08b9d10f5424d96f019ab57de84d8' };
const headers = { 'Content-Type': 'application/json' };
function test_func(test_case_body_result) {
    return __awaiter(this, void 0, void 0, function* () {
        // this.timeout(15000)
        conf.BASE_BODY.result = test_case_body_result;
        const response = yield json_request_1.connect(url, test_case_body_result, { headers: headers, auth: auth }).catch(e => {
            throw e;
        });
        return response;
    });
}
function clean_contexts(sessionId) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            request.delete(contextsUrl + sessionId, { headers: headers, auth: auth }, (e, res, body) => {
                if (e) {
                    throw e;
                }
                else
                    return body;
            });
        });
    });
}
function set_contexts(sessionId, contexts) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            request.post(contextsUrl + sessionId, { headers: headers, auth: auth, json: contexts }, (e, res, body) => {
                if (e) {
                    throw e;
                }
                else
                    return body;
            });
        });
    });
}
describe('Compare known knowledge results', function () {
    this.slow(10000);
    let httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            // register the clients in temp database, creating a test db for domain store
            httpServer = yield HttpServer_1.createHttpServer(httpServerSettings);
            ControllerRouter_1.createRegisterHookController(httpServer.app);
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpServer.instance.close();
        });
    });
    function cleanFields(nlpResponse) {
        nlpResponse.id = "";
        nlpResponse.timestamp = "";
        return nlpResponse;
    }
    function isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }
        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (!equal(a[propName], b[propName])) {
                return false;
            }
        }
        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
    function compareResponses(knowledgeResult, knownResponse1, knownResponse2) {
        let res1 = Object.assign([], knownResponse1);
        let res2 = Object.assign([], knownResponse2);
        if ((knowledgeResult.length !== res1.length) || (knowledgeResult.length !== res2.length))
            return false;
        else {
            for (var i = 0; i < knowledgeResult.length; i++) {
                if (!((isEquivalent(knowledgeResult[i], res1[i])) || (isEquivalent(knowledgeResult[i], res2[i])))) {
                    return false;
                }
            }
            return true;
        }
    }
    function compareSimpleResponses(knowledgeResult, knownResponse1, knownResponse2) {
        let res1 = Object.assign({}, knownResponse1);
        let res2 = Object.assign({}, knownResponse2);
        for (var i = 0; i < knowledgeResult.length; i++) {
            if (!((isEquivalent(knowledgeResult[i], res1[i])) || (isEquivalent(knowledgeResult[i], res2[i])))) {
                return false;
            }
        }
        return true;
    }
    it('General: What agent is this', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.GENERAL_WHAT_AGENT_IS_THIS.sessionId).then((response) => {
                test_func(conf.GENERAL_WHOIS_ALBERTEINSTEIN);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHAT_AGENT_IS_THIS_EXPECTED));
            });
        });
    });
    it('Knowledge: Who is Albert Einstein', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.GENERAL_WHOIS_ALBERTEINSTEIN.sessionId).then((response) => {
                test_func(conf.GENERAL_WHOIS_ALBERTEINSTEIN);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHOIS_ALBERTEINSTEIN_EXPECTED));
            });
        });
    });
    it('Knowledge: Who is President of the USA', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.GENERAL_WHOIS_POTUS.sessionId).then((response) => {
                test_func(conf.GENERAL_WHOIS_POTUS);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHOIS_POTUS_EXPECTED));
            });
        });
    });
    it('Knowledge: Whats the distance from Tokyo to Berlin', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.GENERAL_SIMPLE_DISTANCE.sessionId).then((response) => {
                test_func(conf.GENERAL_SIMPLE_DISTANCE);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_SIMPLE_DISTANCE_EXPECTED));
            });
        });
    });
    it('Weather: Whats the weather today', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.WEATHER_WEATHER_TODAY.sessionId).then((response) => {
                test_func(conf.WEATHER_WEATHER_TODAY);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.WEATHER_WEATHER_TODAY_EXPECTED));
            });
        });
    });
    it('Video: Go to the next video', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.VIDEO_NEXT_VIDEO.sessionId).then((response) => {
                test_func(conf.VIDEO_NEXT_VIDEO);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.VIDEO_NEXT_VIDEO_EXPECTED));
            });
        });
    });
    it('Video: Go to the next video (contexts)', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.VIDEO_NEXT_VIDEO_CTX.sessionId).then((response) => {
                test_func(conf.VIDEO_NEXT_VIDEO);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.VIDEO_NEXT_VIDEO_EXPECTED));
            });
        });
    });
    it('Radio: Look for Madonna', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            clean_contexts(conf.RADIO_LOOK_FOR_MADONNA_EXPECTED.sessionId).then((response) => {
                test_func(conf.RADIO_LOOK_FOR_MADONNA);
                chai_1.expect(cleanFields(response)).to.deep.equals(cleanFields(conf.RADIO_LOOK_FOR_MADONNA_EXPECTED));
            });
        });
    });
});
//# sourceMappingURL=Controller.spec.js.map