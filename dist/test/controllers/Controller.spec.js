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
require("mocha");
const config_1 = require("../config");
const HttpServer_1 = require("../../app/servers/HttpServer");
const ControllerRouter_1 = require("../../app/controllers/ControllerRouter");
const json_request_1 = require("../../app/utils/json-request");
const chai_1 = require("chai");
const conf = require("./Conf");
const equal = require("fast-deep-equal");
const phrases = require("../../app/Phrases");
const testingHttpPort = config_1.default.TEST_HTTP_PORT;
const httpServerSettings = {
    port: testingHttpPort,
    healthcheck_port: config_1.default.TEST_HEALTHCHECK_PORT,
};
const protocol = 'https:';
const api_version = '/api/v1';
const url = `${protocol}//api.dialogflow.com/v1/query?v=20150910`;
function test_func(test_case_body_result) {
    return __awaiter(this, void 0, void 0, function* () {
        // this.timeout(15000)
        conf.BASE_BODY.result = test_case_body_result;
        const response = yield json_request_1.connect(url, conf.BASE_BODY, { headers: {} }).catch(e => {
            throw e;
        });
        return response;
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
    function removeVersionNumber(knowledgeResult) {
        knowledgeResult.version = "";
        return knowledgeResult;
    }
    function removePrefix(knowledgeResult) {
        for (var i = 0; i < phrases.generalPrefixes.length; i++) {
            if (knowledgeResult.includes(phrases.generalPrefixes[i])) {
                knowledgeResult = knowledgeResult.replace(phrases.generalPrefixes[i], '');
            }
        }
        return knowledgeResult;
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
    it('What agent is this', function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(15000);
            const response = yield test_func(conf.GENERAL_WHAT_AGENT_IS_THIS);
            chai_1.expect(response).to.deep.equals(conf.GENERAL_WHAT_AGENT_IS_THIS_EXPECTED);
        });
    });
});
//# sourceMappingURL=Controller.spec.js.map