import * as request from 'request'
//import {json} from 'body-parser'


const requestParamsPost = request.defaults({
  //baseUrl: `http://localhost:${config.HTTP_PORT}`,
  method: 'POST',
  json: true,
})

const requestParamsGet = request.defaults({
  //baseUrl: `http://localhost:${config.HTTP_PORT}`,
  method: 'GET',
  json: true,
})

export interface VerifyResponse<T> {
  pointer: T
}

/**
 * Posts the data using requests module default, json is expected as result
 * you may provide extended options that are of CoreOption class
 * @param url - The API endoint to post to.
 * @param jsonBody - the object that will be delivered as of mime application/json
 * @param optionsExtend - extended options as
 * @returns {Promise<T>}
 */
const _post = (url: string, jsonBody: any, optionsExtend: any, method: string = 'post'): Promise<any> => {
  return new Promise((resolve, reject) => {
    const options = {
      body: { ...jsonBody},
      ...optionsExtend,
    }

    const requestParams: Function = (method === 'post') ? requestParamsPost : requestParamsGet
    requestParams(url, options, (error: any, response: any, body: any) => {
      if (error) {
        reject(error)
        return
      }

      if (response.statusCode !== 200) {
        reject(new Error(`${response.statusCode} ${response.statusMessage}`))
        return
      }

      resolve(body)
    })
  })
}

// https://docs.nexmo.com/verify/api-reference
export const connect = (endpoint: string, jsonBody: any, extraOptions: any = null, method: string = 'post') => {
  return _post(endpoint, jsonBody, extraOptions, method)
}

