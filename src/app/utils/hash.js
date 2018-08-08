"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
// tslint:disable-next-line
var vFour = require('uuid').v4;
// tslint:disable-next-line
var vOne = require('uuid').v1;
function md5hex(input) {
    var crypt = crypto.createHash('md5');
    return crypt.update(input).digest('hex');
}
exports.md5hex = md5hex;
function v4() {
    return vFour();
}
exports.v4 = v4;
function v1() {
    return vOne();
}
exports.v1 = v1;
/**
 * de construct the authorization header and check if the robot is actually who he claims to be
 * @param req
 */
function breakAuthHeaderToUserPassword(req) {
    var authHeaders = '';
    if (req && req.headers && (req.headers.hasOwnProperty('Authorization') || req.headers.hasOwnProperty('authorization'))) {
        try {
            authHeaders = (req.headers['authorization'] || req.headers['Authorization']).split('Basic ')[1];
        }
        catch (e) {
            return {};
        }
        if (!authHeaders) {
            return {};
        }
        var base64DecodedBuffer = new Buffer(authHeaders, 'base64').toString('utf8').split(':');
        var clientId = base64DecodedBuffer[0];
        var password = base64DecodedBuffer[1];
        return { clientId: clientId, password: password };
    }
    else {
        return {};
    }
}
exports.breakAuthHeaderToUserPassword = breakAuthHeaderToUserPassword;
/**
 * Returns the value that goes into 'Authorization' header
 * described as basic Express and Connect Auth (Also used in Mosca for Authentication)
 * @param {string} clientID
 * @param {string} clearTextPassword
 * @returns {string}
 */
function bakeBasicAuthorizationHeader(clientID, clearTextPassword) {
    var base64encodedCredentials = new Buffer(clientID + ":" + clearTextPassword).toString('base64');
    return "Basic " + base64encodedCredentials;
}
exports.bakeBasicAuthorizationHeader = bakeBasicAuthorizationHeader;
