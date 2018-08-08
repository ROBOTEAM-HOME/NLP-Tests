Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
//import config from '../../config'
//import {json} from 'body-parser'
const requestParamsPost = request.defaults({
    //baseUrl: `http://localhost:${config.HTTP_PORT}`,
    method: 'POST',
    json: true,
});
const requestParamsGet = request.defaults({
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
const _post = (url, jsonBody, optionsExtend, method = 'post') => {
    return new Promise((resolve, reject) => {
        const options = Object.assign({ body: Object.assign({}, jsonBody) }, optionsExtend);
        const requestParams = (method === 'post') ? requestParamsPost : requestParamsGet;
        requestParams(url, options, (error, response, body) => {
            if (error) {
                reject(error);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`${response.statusCode} ${response.statusMessage}`));
                return;
            }
            resolve(body);
        });
    });
};
// https://docs.nexmo.com/verify/api-reference
exports.connect = (endpoint, jsonBody, extraOptions = null, method = 'post') => {
    return _post(endpoint, jsonBody, extraOptions, method);
};
//# sourceMappingURL=json-request.js.map