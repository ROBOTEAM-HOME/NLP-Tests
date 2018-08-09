'use strict'

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
import 'mocha'
import config from '../config'
import {createHttpServer, HttpServer} from '../../app/servers/HttpServer'
import {createRegisterHookController} from '../../app/controllers/ControllerRouter'
import {connect as apiConnect} from '../../app/utils/json-request'
import {expect} from 'chai'
import * as conf from './Conf'
import {PROVIDERS} from '../../app/controllers/conf'
import {to} from '../../app/utils/async'
import * as equal from 'fast-deep-equal'
import * as phrases from '../../app/Phrases'
import * as request from 'request'
import clean = Mocha.utils.clean;


const testingHttpPort: string = config.TEST_HTTP_PORT

const httpServerSettings = {
    port: testingHttpPort,
    healthcheck_port: config.TEST_HEALTHCHECK_PORT,
}
const protocol: string = 'https:'
const api_version = '/api/v1'
const url: string = `${protocol}//api.dialogflow.com/v1/query?v=20150910`
const deleteContextsUrl: string = `${protocol}//api.dialogflow.com/v1/contexts?v=20170712&sessionId=`
const auth = {'bearer': 'b9e08b9d10f5424d96f019ab57de84d8'}
const headers = {'Content-Type': 'application/json'}

async function test_func(test_case_body_result: any) {
    // this.timeout(15000)
    conf.BASE_BODY.result = test_case_body_result
    const response: any = await apiConnect(url, test_case_body_result, {headers: headers, auth: auth}).catch(e => {
        throw e
    })
    return response
}

async function clean_contexts(sessionId: any): Promise<any> {
    return new Promise((resolve, reject) => {
        request.delete(deleteContextsUrl + sessionId, {headers: headers, auth: auth}, (e, res, body) => {
            if (e) {
                throw e
            } else
                return body
        })
    })
}

describe('Compare known knowledge results', function () {
    this.slow(10000)
    let httpServer: HttpServer
    before(async function () {
        // register the clients in temp database, creating a test db for domain store
        httpServer = await createHttpServer(httpServerSettings)
        createRegisterHookController(httpServer.app)
    })
    after(async function () {
        await httpServer.instance.close()
    })

    function cleanFields(nlpResponse: any) {
        nlpResponse.id = "";
        nlpResponse.timestamp = "";
        return nlpResponse;
    }

    function removePrefix(knowledgeResult: any){
        for (var i = 0; i < phrases.generalPrefixes.length; i++) {
            if (knowledgeResult.includes(phrases.generalPrefixes[i])) {
                knowledgeResult = knowledgeResult.replace(phrases.generalPrefixes[i], '')
            }
        }
        return knowledgeResult;
    }

    function isEquivalent(a: any, b: any) {
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
            if (!equal(a[propName], b[propName])){
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    function compareResponses(knowledgeResult: any, knownResponse1: any, knownResponse2: any) {
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

    function compareSimpleResponses(knowledgeResult: any, knownResponse1: any, knownResponse2: any) {
        let res1 = Object.assign({}, knownResponse1);
        let res2 = Object.assign({}, knownResponse2);
        for (var i = 0; i < knowledgeResult.length; i++) {
            if (!((isEquivalent(knowledgeResult[i], res1[i])) || (isEquivalent(knowledgeResult[i], res2[i])))) {
                return false;
            }
        }
        return true;        }

    it('What agent is this', async function () {
        this.timeout(15000)
        clean_contexts(conf.GENERAL_WHAT_AGENT_IS_THIS.sessionId).then((response) => {
            test_func(conf.GENERAL_WHOIS_ALBERTEINSTEIN)
            expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHAT_AGENT_IS_THIS_EXPECTED))
        })
    })


    it('Who is Albert Einstein', async function () {
        this.timeout(15000)
        clean_contexts(conf.GENERAL_WHOIS_ALBERTEINSTEIN.sessionId).then((response) => {
            test_func(conf.GENERAL_WHOIS_ALBERTEINSTEIN)
            expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHOIS_ALBERTEINSTEIN_EXPECTED))
        })
    })

    it('Who is President of the USA', async function () {
        this.timeout(15000)
        clean_contexts(conf.GENERAL_WHOIS_POTUS.sessionId).then((response) => {
            test_func(conf.GENERAL_WHOIS_POTUS)
            expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHOIS_POTUS_EXPECTED))
        })
    })

    it('Who is President of the USA', async function () {
        this.timeout(15000)
        clean_contexts(conf.GENERAL_WHOIS_POTUS.sessionId).then((response) => {
            test_func(conf.GENERAL_WHOIS_POTUS)
            expect(cleanFields(response)).to.deep.equals(cleanFields(conf.GENERAL_WHOIS_POTUS_EXPECTED))
        })
    })

})





