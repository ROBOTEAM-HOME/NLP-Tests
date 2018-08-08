'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var config_1 = require("../config");
var HttpServer_1 = require("../../app/servers/HttpServer");
var ControllerRouter_1 = require("../../app/controllers/ControllerRouter");
var json_request_1 = require("../../app/utils/json-request");
var chai_1 = require("chai");
var conf = require("./Conf");
var ControllerRouter_2 = require("../../app/controllers/ControllerRouter");
var Conf_1 = require("../../app/analytics/Conf");
var conf_1 = require("../../app/controllers/conf");
var Conf_2 = require("./Conf");
var MongoHandler_1 = require("../../app/analytics/MongoHandler");
var async_1 = require("../../app/utils/async");
var equal = require("fast-deep-equal");
var phrases = require("../../app/Phrases");
var testingHttpPort = config_1.default.TEST_HTTP_PORT;
var httpServerSettings = {
    port: testingHttpPort,
    healthcheck_port: config_1.default.TEST_HEALTHCHECK_PORT,
};
var protocol = 'http:';
var url = protocol + "//localhost:" + config_1.default.TEST_HTTP_PORT + ControllerRouter_2.api_version + "/";
function test_func(test_case_body_result) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // this.timeout(15000)
                    conf.BASE_BODY.result = test_case_body_result;
                    return [4 /*yield*/, json_request_1.connect(url, conf.BASE_BODY, { headers: {} }).catch(function (e) {
                            throw e;
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
describe('Knowledge Service WOLFRAM Controller Testing', function () {
    this.slow(10000);
    var httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpServer_1.createHttpServer(httpServerSettings)];
                    case 1:
                        // register the clients in temp database, creating a test db for domain store
                        httpServer = _a.sent();
                        ControllerRouter_1.createRegisterHookController(httpServer.app);
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpServer.instance.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should check FULL result type response from wolfram', function () {
        return __awaiter(this, void 0, void 0, function () {
            function getWolframResponse(jsonResponse) {
                if (jsonResponse.provider.name === 'Wolfram Alpha') {
                    return jsonResponse;
                }
            }
            var response, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.WOLFRAM_FULL_KNOWLEDGE_RESULT)];
                    case 1:
                        response = _a.sent();
                        wolframResponse = response.split('\n').splice(0, 2).map(JSON.parse).filter(getWolframResponse)[0];
                        chai_1.expect(wolframResponse.success).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should check SIMPLE result type response from wolfram', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.WOLFRAM_SIMPLE_KNOWLEDGE_RESULT)];
                    case 1:
                        response = _a.sent();
                        chai_1.expect(response.resultsType === 'simple' && response.success).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should check response from wikipedia', function () {
        return __awaiter(this, void 0, void 0, function () {
            function getWikiResponse(jsonResponse) {
                if (jsonResponse.provider.name === 'Wikipedia') {
                    return jsonResponse;
                }
            }
            var response, wikiResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.WIKI_KNOWLEDGE_RESULT)];
                    case 1:
                        response = _a.sent();
                        wikiResponse = response.split('\n').splice(0, 2).map(JSON.parse).filter(getWikiResponse)[0];
                        chai_1.expect(wikiResponse.success).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('Converters testing', function () {
    this.slow(10000);
    var httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpServer_1.createHttpServer(httpServerSettings)];
                    case 1:
                        // register the clients in temp database, creating a test db for domain store
                        httpServer = _a.sent();
                        ControllerRouter_1.createRegisterHookController(httpServer.app);
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpServer.instance.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should send currency conversion task to converter service and get conversion rates', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, conversion_index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_func(conf.CURRENCY_CONVERTER_RESULT)];
                    case 1:
                        response = _a.sent();
                        conversion_index = response.spokenResult.indexOf('to') + 3;
                        chai_1.expect(Number(response.spokenResult.substring(conversion_index, conversion_index + 5))).to.be.greaterThan(10);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should send unknown currency conversion task to converter service and catch failure', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, conversion_index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_func(conf.CURRENCY_CONVERTER_RESULT)];
                    case 1:
                        response = _a.sent();
                        conversion_index = response.spokenResult.indexOf('to') + 3;
                        chai_1.expect(Number(response.spokenResult.substring(conversion_index, conversion_index + 5))).to.be.greaterThan(10);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should check the conversion library and convert some measurement', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_func(conf.DISTANCE_CONVERTER_RESULT)];
                    case 1:
                        response = _a.sent();
                        chai_1.expect(response.spokenResult.indexOf('16.09')).to.be.greaterThan(-1);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('Send analytics to chatBase on fallbacks', function () {
    this.slow(10000);
    var httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpServer_1.createHttpServer(httpServerSettings)];
                    case 1:
                        // register the clients in temp database, creating a test db for domain store
                        httpServer = _a.sent();
                        ControllerRouter_1.createRegisterHookController(httpServer.app);
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpServer.instance.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should send default fallback analytics', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_func(conf.DEFAULT_FALLBACK_RESULT)];
                    case 1:
                        response = _a.sent();
                        chai_1.expect(response).to.deep.equals(conf.DEFAULT_FALLBACK_RESPONSE);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should send yelp fallback analytics', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_func(conf.YELP_FALLBACK_RESULT)];
                    case 1:
                        response = _a.sent();
                        chai_1.expect(response).to.deep.equals(conf.YELP_FALLBACK_RESPONSE);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('Check bing services', function () {
    this.slow(10000);
    var httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpServer_1.createHttpServer(httpServerSettings)];
                    case 1:
                        // register the clients in temp database, creating a test db for domain store
                        httpServer = _a.sent();
                        ControllerRouter_1.createRegisterHookController(httpServer.app);
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpServer.instance.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    /*    it('Should get images from bing', async function () {
            const response = await test_func(conf.IMAGE_SEARCH_RESULT)
            expect('contentUrl' in response.imagesList.list[0]).to.be.true
        })*/
    it('Should get entity from bing', function () {
        return __awaiter(this, void 0, void 0, function () {
            function getBingResponse(jsonResponse) {
                if (jsonResponse.provider.name === 'Bing') {
                    return jsonResponse;
                }
            }
            var bingResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        conf_1.PROVIDERS.bing = true;
                        conf_1.PROVIDERS.wikipedia = false;
                        return [4 /*yield*/, test_func(conf.BING_KNOWLEDGE_RESULT)
                            //const bingResponse = response.split('\n').splice(0, 2).map(JSON.parse).filter(getBingResponse)[0]
                        ];
                    case 1:
                        bingResponse = _a.sent();
                        //const bingResponse = response.split('\n').splice(0, 2).map(JSON.parse).filter(getBingResponse)[0]
                        chai_1.expect(bingResponse.knowledgeResult.pages[0].summary.indexOf('Trump')).to.be.greaterThan(-1);
                        return [2 /*return*/];
                }
            });
        });
    });
});
describe('Check analytics services', function () {
    this.timeout(20000);
    var httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpServer_1.createHttpServer(httpServerSettings)];
                    case 1:
                        httpServer = _a.sent();
                        ControllerRouter_1.createRegisterHookController(httpServer.app);
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpServer.instance.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Should ensure last query saved in mongo with temp status', function () {
        return __awaiter(this, void 0, void 0, function () {
            var firstTestQuery, secondTestQuery, err, mongoHandler, testUserSay, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!Conf_1.USE_MONGO) return [3 /*break*/, 6];
                        firstTestQuery = 'who is messi';
                        Conf_2.WOLFRAM_FULL_KNOWLEDGE_RESULT.resolvedQuery = firstTestQuery;
                        return [4 /*yield*/, test_func(Conf_2.WOLFRAM_FULL_KNOWLEDGE_RESULT)];
                    case 1:
                        _c.sent();
                        secondTestQuery = 'who is ronaldo';
                        Conf_2.WOLFRAM_FULL_KNOWLEDGE_RESULT.resolvedQuery = secondTestQuery;
                        return [4 /*yield*/, test_func(Conf_2.WOLFRAM_FULL_KNOWLEDGE_RESULT)];
                    case 2:
                        _c.sent();
                        err = void 0;
                        mongoHandler = void 0;
                        testUserSay = void 0;
                        return [4 /*yield*/, async_1.to(MongoHandler_1.default.create())];
                    case 3:
                        _a = _c.sent(), err = _a[0], mongoHandler = _a[1];
                        if (!mongoHandler) return [3 /*break*/, 5];
                        return [4 /*yield*/, async_1.to(mongoHandler.getUserSayFromMongo({ 'status': 'temp' }))];
                    case 4:
                        _b = _c.sent(), err = _b[0], testUserSay = _b[1];
                        console.log(testUserSay);
                        _c.label = 5;
                    case 5:
                        chai_1.expect(secondTestQuery).to.be.equals(testUserSay.resolvedQuery);
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    });
});
describe('Compare known knowledge results', function () {
    this.slow(10000);
    var httpServer;
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpServer_1.createHttpServer(httpServerSettings)];
                    case 1:
                        // register the clients in temp database, creating a test db for domain store
                        httpServer = _a.sent();
                        ControllerRouter_1.createRegisterHookController(httpServer.app);
                        return [2 /*return*/];
                }
            });
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, httpServer.instance.close()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
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
        var res1 = Object.assign([], knownResponse1);
        var res2 = Object.assign([], knownResponse2);
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
        var res1 = Object.assign({}, knownResponse1);
        var res2 = Object.assign({}, knownResponse2);
        for (var i = 0; i < knowledgeResult.length; i++) {
            if (!((isEquivalent(knowledgeResult[i], res1[i])) || (isEquivalent(knowledgeResult[i], res2[i])))) {
                return false;
            }
        }
        return true;
    }
    it('Who is Madonna', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHOIS_MADONNA)];
                    case 1:
                        response = _a.sent();
                        wolframResponse = response.split('\n').splice(0, 2).map(JSON.parse).map(removeVersionNumber);
                        chai_1.expect(compareResponses(wolframResponse, conf.EXPECTEDRESPONSE_WHOIS_MADONNA, conf.EXPECTEDRESPONSE_WHOIS_MADONNA_DEV)).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Who is Albert Einstein', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHOIS_ALBERTEINSTEIN)];
                    case 1:
                        response = _a.sent();
                        wolframResponse = response.split('\n').splice(0, 2).map(JSON.parse).map(removeVersionNumber);
                        chai_1.expect(compareResponses(wolframResponse, conf.EXPECTEDRESPONSE_WHOIS_ALBERTEINSTEIN, conf.EXPECTEDRESPONSE_WHOIS_ALBERTEINSTEIN_DEV)).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Who is President of the United States', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHOIS_POTUS)];
                    case 1:
                        response = _a.sent();
                        wolframResponse = removeVersionNumber(response);
                        wolframResponse.spokenResult = removePrefix(wolframResponse.spokenResult);
                        wolframResponse.textResult = removePrefix(wolframResponse.textResult);
                        chai_1.expect(compareSimpleResponses(wolframResponse, conf.EXPECTEDRESPONSE_WHOIS_POTUS, conf.EXPECTEDRESPONSE_WHOIS_POTUS_DEV)).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Who is the fastest man in the world', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, knownResponse, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHOIS_FASTESTMAN)];
                    case 1:
                        response = _a.sent();
                        knownResponse = Object.assign({}, conf.EXPECTEDRESPONSE_WHOIS_FASTESTMAN);
                        wolframResponse = removeVersionNumber(response);
                        wolframResponse.spokenResult = removePrefix(wolframResponse.spokenResult);
                        wolframResponse.textResult = removePrefix(wolframResponse.textResult);
                        chai_1.expect(wolframResponse).to.deep.equals(knownResponse);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('What\'s the distance from tokyo to new york in kilometers', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, knownResponse, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_DISTANCEFROMATOB)];
                    case 1:
                        response = _a.sent();
                        knownResponse = Object.assign({}, conf.EXPECTEDRESPONSE_DISTANCEFROMATOB);
                        wolframResponse = removeVersionNumber(response);
                        wolframResponse.spokenResult = removePrefix(wolframResponse.spokenResult);
                        wolframResponse.textResult = removePrefix(wolframResponse.textResult);
                        chai_1.expect(wolframResponse).to.deep.equals(knownResponse);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Who is Bill Smith', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, wolframResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHOIS_BILLSMITH)];
                    case 1:
                        response = _a.sent();
                        wolframResponse = response.split('\n').splice(0, 2).map(JSON.parse).map(removeVersionNumber);
                        chai_1.expect(compareSimpleResponses(wolframResponse, conf.EXPECTEDRESPONSE_WHOIS_BILLSMITH, conf.EXPECTEDRESPONSE_WHOIS_BILLSMITH)).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
    it('What is a chair', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, knownResponse, knowledgeResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHATIS_CHAIR)];
                    case 1:
                        response = _a.sent();
                        knownResponse = Object.assign({}, conf.EXPECTEDRESPONSE_WHATIS_CHAIR);
                        knowledgeResponse = removeVersionNumber(response);
                        chai_1.expect(knowledgeResponse).to.deep.equals(knownResponse);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('What is coca-cola', function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, knownResponse, knowledgeResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(15000);
                        return [4 /*yield*/, test_func(conf.FULLQUERY_WHATIS_COCACOLA)];
                    case 1:
                        response = _a.sent();
                        knownResponse = Object.assign({}, conf.EXPECTEDRESPONSE_WHATIS_COCACOLA);
                        knowledgeResponse = removeVersionNumber(response);
                        chai_1.expect(knowledgeResponse).to.deep.equals(knownResponse);
                        return [2 /*return*/];
                }
            });
        });
    });
});
